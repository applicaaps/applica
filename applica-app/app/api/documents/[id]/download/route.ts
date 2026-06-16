import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY !== "your_supabase_publishable_key"
  )
}

function isStrapiConfigured(): boolean {
  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337"
  const strapiToken = process.env.STRAPI_API_TOKEN
  return !!(strapiUrl && strapiToken && strapiToken !== "your_strapi_api_token")
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // 1. Verifica dell'autenticazione utente
  let user = null
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // Verifica JWT di Strapi nel cookie di sessione
  const sessionCookie = request.cookies.get("applica_session")
  if (sessionCookie?.value) {
    if (isStrapiConfigured()) {
      // Validazione sicura tramite Strapi /api/users/me
      try {
        const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337"
        const res = await fetch(`${strapiUrl}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${sessionCookie.value}`,
          },
          cache: "no-store",
        })

        if (res.ok) {
          const data = await res.json()
          user = { id: data.id?.toString() || "strapi_user", email: data.email || "" }
        }
      } catch (e) {
        console.error("Errore validazione JWT con Strapi per download:", e)
      }
    } else {
      // Decodifica passiva di fallback solo per l'ambiente di test local/demo senza Strapi
      try {
        const parts = sessionCookie.value.split(".")
        if (parts.length === 3) {
          const payload = JSON.parse(Buffer.from(parts[1], "base64").toString())
          if (!payload.exp || payload.exp * 1000 > Date.now()) {
            user = { id: payload.id?.toString() || "strapi_user", email: payload.email || "" }
          }
        }
      } catch (e) {
        console.error("Errore validazione JWT di fallback:", e)
      }
    }
  }

  if (!user) {
    return new NextResponse("Accesso negato. Autenticazione richiesta.", { status: 401 })
  }

  // 2. Fallback per ambiente di test/demo (se Supabase non è configurato)
  if (!isSupabaseConfigured()) {
    const mockFileContent = `Documento Mock ID: ${id}\nQuesto è un file fittizio generato dall'area riservata di Applica APS.\nConfigura le chiavi di Supabase e Strapi nel file .env per scaricare i file reali dai bucket S3.`
    
    return new NextResponse(mockFileContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename="documento-${id}-demo.txt"`,
      },
    })
  }

  // 3. Caricamento reale del documento e generazione Signed URL
  try {
    const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337"
    const strapiToken = process.env.STRAPI_API_TOKEN

    let fileKey = ""
    let bucketName = process.env.SUPABASE_STORAGE_BUCKET || "applica-media-private"

    // Interroga Strapi se il token è configurato, altrimenti tenta una query diretta a Supabase
    if (strapiToken) {
      const strapiRes = await fetch(`${strapiUrl}/api/documenti/${id}?populate=file`, {
        headers: {
          Authorization: `Bearer ${strapiToken}`,
        },
      })

      if (!strapiRes.ok) {
        return new NextResponse("Errore nel recupero del documento dal CMS.", { status: strapiRes.status })
      }

      const docData = await strapiRes.json()
      const fileData = docData.data?.file

      if (!fileData) {
        return new NextResponse("Nessun file associato a questo documento.", { status: 404 })
      }

      // Ricava la chiave del file su Supabase Storage
      const fileUrl = fileData.url || ""
      fileKey = fileUrl.split(`/${bucketName}/`)[1] || fileData.hash + fileData.ext || fileData.name
    } else {
      // Query di fallback diretta su Supabase se non abbiamo il token Strapi
      const { data: doc, error: docError } = await supabase
        .from("documenti")
        .select("*, file(*)")
        .eq("id", id)
        .maybeSingle()

      if (docError || !doc) {
        return new NextResponse("Documento non trovato nel database.", { status: 404 })
      }

      const fileData = doc.file
      if (!fileData) {
        return new NextResponse("Nessun file associato al documento nel database.", { status: 404 })
      }

      const fileUrl = fileData.url || ""
      fileKey = fileUrl.split(`/${bucketName}/`)[1] || fileData.hash + fileData.ext || fileData.name
    }

    if (!fileKey) {
      return new NextResponse("Impossibile determinare il percorso del file.", { status: 500 })
    }

    // Genera l'URL firmato temporaneo su Supabase Storage (valido per 60 secondi)
    const { data: signedData, error: signedError } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileKey, 60)

    if (signedError || !signedData?.signedUrl) {
      console.error("Errore generazione URL firmato:", signedError)
      return new NextResponse("Errore durante la generazione del link di download sicuro.", { status: 500 })
    }

    // Reindirizza l'utente all'URL firmato sicuro
    return NextResponse.redirect(signedData.signedUrl)
  } catch (e) {
    console.error("Eccezione durante il download:", e)
    return new NextResponse("Errore interno del server.", { status: 500 })
  }
}
