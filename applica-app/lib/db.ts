import { cookies } from "next/headers"
import { mockUser, mockEventi, mockDocumenti, Evento, Documento, User } from "./auth"
import {
  isStrapiConfigured,
  getEventiFromStrapi,
  getEventoBySlugFromStrapi,
  getDocumentiFromStrapi,
  StrapiEvento,
  StrapiDocumento,
} from "./strapi"

// Utility per formattare la data in italiano
function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Data non disponibile"
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch (e) {
    return dateStr
  }
}

// Utility per formattare la fascia oraria dell'evento
function formatTimeRange(startStr: string | null, endStr?: string | null): string {
  if (!startStr) return "Orario da definire"
  try {
    const start = new Date(startStr)
    const startTimeStr = start.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })
    if (!endStr) return startTimeStr
    const end = new Date(endStr)
    const endTimeStr = end.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })
    return `${startTimeStr} - ${endTimeStr}`
  } catch (e) {
    return "18:00 - 20:00"
  }
}

function isDynamicServerError(e: any): boolean {
  return (
    e &&
    (e.digest === "DYNAMIC_SERVER_USAGE" ||
      e.name === "DynamicServerError" ||
      (e.message && e.message.includes("Dynamic server usage")))
  )
}

// ─── Mapper: Strapi → Frontend Types ──────────────────────────────────

function mapStrapiEvento(item: StrapiEvento): Evento {
  const isUpcoming = item.stato === "programmato"
  return {
    id: item.id.toString(),
    slug: item.slug || `evento-${item.id}`,
    title: item.titolo || "Evento senza titolo",
    date: formatDate(item.data_inizio),
    time: formatTimeRange(item.data_inizio, item.data_fine),
    location: item.luogo || (item.tipologia === "online" ? "Online (Google Meet)" : "Sede fisica"),
    type: (item.titolo?.toLowerCase().includes("supervisione")
      ? "Supervisione"
      : item.titolo?.toLowerCase().includes("studio")
      ? "Gruppo di Studio"
      : "Formazione") as "Supervisione" | "Formazione" | "Gruppo di Studio",
    description: item.descrizione_breve || "",
    status: isUpcoming ? "upcoming" : "past",
  }
}

function mapStrapiDocumento(item: StrapiDocumento): Documento {
  let categoryMapped: "Protocolli" | "Materiali" | "Amministrazione" = "Materiali"
  if (item.categoria === "questionario") categoryMapped = "Protocolli"
  else if (item.categoria === "altro") categoryMapped = "Amministrazione"

  // Calcola dimensione file leggibile
  const fileSizeMB = item.file?.size
    ? `${(item.file.size / 1024).toFixed(1)} MB`
    : "N/A"

  return {
    id: item.id.toString(),
    title: item.titolo || "Documento senza titolo",
    category: categoryMapped,
    dateAdded: formatDate(item.createdAt),
    size: fileSizeMB,
    downloadUrl: item.file?.url
      ? `${process.env.STRAPI_API_URL || "http://localhost:1337"}${item.file.url}`
      : "#",
  }
}

// ─── Data Fetching Functions ──────────────────────────────────────────

export async function getCurrentUser(): Promise<User> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("applica_session")

    if (sessionCookie?.value) {
      if (isStrapiConfigured()) {
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
            return {
              id: data.id?.toString() || "usr_strapi",
              name: data.username || "Utente",
              email: data.email || "",
              role: "professionista",
              avatar: (data.username || "U")
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2),
            }
          }
        } catch (e) {
          console.error("Errore validazione JWT con Strapi in getCurrentUser:", e)
        }
      } else {
        // Decodifica passiva di fallback solo per l'ambiente di test local/demo senza Strapi
        try {
          const payload = JSON.parse(
            Buffer.from(sessionCookie.value.split(".")[1], "base64").toString()
          )
          const userDataCookie = cookieStore.get("applica_user")
          const userData = userDataCookie
            ? JSON.parse(decodeURIComponent(userDataCookie.value))
            : null

          return {
            id: payload.id?.toString() || "usr_strapi",
            name: userData?.username || payload.username || "Utente",
            email: userData?.email || payload.email || "",
            role: "professionista",
            avatar: (userData?.username || payload.username || "U")
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2),
          }
        } catch {
          // JWT non decodificabile, usa il mock
        }
      }
    }
  } catch (e) {
    if (isDynamicServerError(e)) throw e
  }

  return mockUser
}

export async function getEventi(): Promise<Evento[]> {
  if (!isStrapiConfigured()) {
    return mockEventi
  }

  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("applica_session")
    const userJwt = sessionCookie?.value

    const strapiEventi = await getEventiFromStrapi(userJwt)

    if (strapiEventi.length === 0) {
      // Se non ci sono eventi in Strapi, usa i mock come fallback
      console.log("Nessun evento trovato in Strapi, uso dati mock")
      return mockEventi
    }

    return strapiEventi.map(mapStrapiEvento)
  } catch (e) {
    if (isDynamicServerError(e)) throw e
    console.error("Errore nel fetch eventi da Strapi:", e)
    return mockEventi
  }
}

export async function getEventoBySlug(slug: string): Promise<Evento | null> {
  if (!isStrapiConfigured()) {
    return mockEventi.find((e) => e.slug === slug) || null
  }

  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("applica_session")
    const userJwt = sessionCookie?.value

    const strapiEvento = await getEventoBySlugFromStrapi(slug, userJwt)

    if (!strapiEvento) {
      // Fallback sui mock se non trovato
      return mockEventi.find((e) => e.slug === slug) || null
    }

    return mapStrapiEvento(strapiEvento)
  } catch (e) {
    if (isDynamicServerError(e)) throw e
    console.error("Errore nel fetch singolo evento da Strapi:", e)
    return mockEventi.find((e) => e.slug === slug) || null
  }
}

export async function getDocumenti(): Promise<Documento[]> {
  if (!isStrapiConfigured()) {
    return mockDocumenti
  }

  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("applica_session")
    const userJwt = sessionCookie?.value

    const strapiDocumenti = await getDocumentiFromStrapi(userJwt)

    if (strapiDocumenti.length === 0) {
      console.log("Nessun documento trovato in Strapi, uso dati mock")
      return mockDocumenti
    }

    return strapiDocumenti.map(mapStrapiDocumento)
  } catch (e) {
    if (isDynamicServerError(e)) throw e
    console.error("Errore nel fetch documenti da Strapi:", e)
    return mockDocumenti
  }
}
