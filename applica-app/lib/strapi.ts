// lib/strapi.ts — Client centralizzato per Strapi 5 API

const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337"
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ""

/**
 * Verifica se Strapi è configurato correttamente
 */
export function isStrapiConfigured(): boolean {
  return !!(STRAPI_URL && STRAPI_TOKEN && STRAPI_TOKEN !== "your_strapi_api_token")
}

/**
 * Client generico per le chiamate API a Strapi
 */
async function strapiClient<T = any>(
  endpoint: string,
  options: RequestInit = {},
  userJwt?: string
): Promise<T> {
  const url = `${STRAPI_URL}${endpoint}`

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }

  // Usa il JWT dell'utente se disponibile (sicurezza), altrimenti usa il token globale
  if (userJwt) {
    defaultHeaders["Authorization"] = `Bearer ${userJwt}`
  } else if (STRAPI_TOKEN) {
    defaultHeaders["Authorization"] = `Bearer ${STRAPI_TOKEN}`
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers as Record<string, string>),
    },
    next: { revalidate: 60 }, // Cache ISR di 60 secondi
  })

  if (!res.ok) {
    const errorBody = await res.text()
    console.error(`Strapi API error [${res.status}] ${endpoint}:`, errorBody)
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`)
  }

  return res.json()
}

// ─── Tipi Strapi Response ─────────────────────────────────────────────

interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiSingleResponse<T> {
  data: T | null
}

// ─── Tipi Content Types ───────────────────────────────────────────────

export interface StrapiEvento {
  id: number
  documentId: string
  titolo: string
  slug: string
  data_inizio: string | null
  data_fine: string | null
  stato: "programmato" | "svolto" | "annullato" | null
  tipologia: "online" | "in presenza" | "misto" | null
  luogo: string | null
  link_meeting: string | null
  descrizione_breve: string | null
  descrizione_completa: any
  link_registrazione_video: string | null
  visibilita: "pubblico" | "riservato" | null
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

export interface StrapiDocumento {
  id: number
  documentId: string
  titolo: string
  descrizione: string | null
  categoria: "questionario" | "scheda" | "materiale_esperienziale" | "altro" | null
  visibilita: string | null
  file: {
    id: number
    name: string
    url: string
    size: number
    mime: string
  } | null
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

export interface StrapiAuthResponse {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    confirmed: boolean
    blocked: boolean
  }
}

// ─── Funzioni API ─────────────────────────────────────────────────────

/**
 * Recupera tutti gli eventi da Strapi (pubblicati)
 */
export async function getEventiFromStrapi(userJwt?: string): Promise<StrapiEvento[]> {
  const res = await strapiClient<StrapiResponse<StrapiEvento>>(
    "/api/eventi?populate=documenti&sort=data_inizio:asc&status=published",
    {},
    userJwt
  )
  return res.data
}

/**
 * Recupera un singolo evento per slug
 */
export async function getEventoBySlugFromStrapi(slug: string, userJwt?: string): Promise<StrapiEvento | null> {
  const res = await strapiClient<StrapiResponse<StrapiEvento>>(
    `/api/eventi?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=documenti&status=published`,
    {},
    userJwt
  )
  return res.data.length > 0 ? res.data[0] : null
}

/**
 * Recupera tutti i documenti da Strapi (pubblicati)
 */
export async function getDocumentiFromStrapi(userJwt?: string): Promise<StrapiDocumento[]> {
  const res = await strapiClient<StrapiResponse<StrapiDocumento>>(
    "/api/documenti?populate=file&sort=createdAt:desc&status=published",
    {},
    userJwt
  )
  return res.data
}

/**
 * Login utente tramite Strapi Users & Permissions
 */
export async function loginWithStrapi(
  identifier: string,
  password: string,
  clientIp?: string
): Promise<StrapiAuthResponse> {
  console.log(`[DEBUG AUTH] Tentativo di connessione a: ${STRAPI_URL}/api/auth/local`);
  
  const reqHeaders: Record<string, string> = { "Content-Type": "application/json" }
  if (clientIp) {
    reqHeaders["x-forwarded-for"] = clientIp
  }

  const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify({ identifier, password }),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    const message =
      errorData?.error?.message || "Credenziali non valide o errore del server."
    throw new Error(message)
  }

  return res.json()
}
