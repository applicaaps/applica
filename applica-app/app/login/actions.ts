"use server"

import { cookies, headers } from "next/headers"
import { z } from "zod"
import { redirect } from "next/navigation"
import { loginWithStrapi } from "@/lib/strapi"

const loginSchema = z.object({
  email: z.string().email({ message: "Indirizzo email non valido." }).trim(),
  password: z.string().min(6, { message: "La password deve essere di almeno 6 caratteri." }),
})

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const validatedFields = loginSchema.safeParse({ email, password })

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || 
             validatedFields.error.flatten().fieldErrors.password?.[0] || 
             "Dati non validi."
    }
  }

  let isRedirect = false

  try {
    const headersList = await headers()
    const clientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '127.0.0.1'

    // Login tramite Strapi Users & Permissions
    const authResponse = await loginWithStrapi(
      validatedFields.data.email,
      validatedFields.data.password,
      clientIp
    )

    // Salva il JWT di Strapi nel cookie di sessione
    const cookieStore = await cookies()
    
    cookieStore.set("applica_session", authResponse.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 giorni
      path: "/",
    })

    // Salva info utente base in un cookie separato (non sensibile)
    cookieStore.set("applica_user", encodeURIComponent(JSON.stringify({
      id: authResponse.user.id,
      username: authResponse.user.username,
      email: authResponse.user.email,
    })), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })

    isRedirect = true
  } catch (err: any) {
    const message = err?.message || "Impossibile stabilire una connessione con il servizio di autenticazione."
    return { success: false, error: message }
  }

  if (isRedirect) {
    redirect("/area-riservata")
  }
}

export async function logoutAction() {
  let isRedirect = false
  try {
    const cookieStore = await cookies()
    cookieStore.delete("applica_session")
    cookieStore.delete("applica_user")
    isRedirect = true
  } catch (err) {
    // Silenziosamente ignora ed esegui comunque il redirect
    isRedirect = true
  }
  if (isRedirect) {
    redirect("/login")
  }
}
