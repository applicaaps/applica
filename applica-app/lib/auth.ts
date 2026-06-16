// lib/auth.ts

export type User = {
  id: string;
  name: string;
  email: string;
  role: "professionista" | "admin";
  avatar?: string;
};

export const mockUser: User = {
  id: "usr_001",
  name: "Dottoressa Danubia Macario",
  email: "danubia.macario@applica-aps.it",
  role: "professionista",
  avatar: "DM"
};

// Verifica preliminare dell'autenticazione tramite cookie JWT (solo formato e scadenza)
// ATTENZIONE: Questa funzione non verifica la firma crittografica del JWT. Usa verifySession per controlli sicuri.
export function isAuthenticated(cookieStore: any): boolean {
  const sessionCookie = cookieStore.get("applica_session");
  if (!sessionCookie?.value) return false;
  
  // Verifica che sia un JWT valido (3 parti separate da punti)
  const parts = sessionCookie.value.split(".");
  if (parts.length !== 3) return false;
  
  // Verifica che non sia scaduto
  try {
    const payload = JSON.parse(Buffer.from(parts[1], "base64").toString());
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false; // JWT scaduto
    }
  } catch {
    return false;
  }
  
  return true;
}

// Verifica sicura della sessione interrogando Strapi per la validità della firma del JWT
export async function verifySession(cookieStore: any): Promise<boolean> {
  const sessionCookie = cookieStore.get("applica_session");
  if (!sessionCookie?.value) return false;

  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
  const strapiToken = process.env.STRAPI_API_TOKEN;
  const isStrapiConfigured = !!(strapiUrl && strapiToken && strapiToken !== "your_strapi_api_token");

  if (isStrapiConfigured) {
    try {
      const res = await fetch(`${strapiUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${sessionCookie.value}`,
        },
        cache: "no-store",
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  // Fallback passivo in ambiente locale/demo se Strapi non è configurato
  return isAuthenticated(cookieStore);
}

// Mock Data: Eventi (fallback quando Strapi non ha dati)
export type Evento = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "Supervisione" | "Formazione" | "Gruppo di Studio";
  description: string;
  status: "upcoming" | "past";
};

export const mockEventi: Evento[] = [
  {
    id: "evt_001",
    slug: "workshop-schema-therapy",
    title: "Workshop: Introduzione alla Schema Therapy",
    date: "15 Maggio 2024",
    time: "18:00 - 20:00",
    location: "Online (Google Meet)",
    type: "Formazione",
    description: "Incontro introduttivo sui fondamenti della Schema Therapy, esplorando i bisogni emotivi primari e i maladaptive schemas.",
    status: "upcoming"
  },
  {
    id: "evt_002",
    slug: "uso-terapeutico-cannabis",
    title: "Seminario: Uso terapeutico della Cannabis",
    date: "22 Maggio 2024",
    time: "09:00 - 13:00",
    location: "Online",
    type: "Formazione",
    description: "Approfondimento sulle evidenze scientifiche e le applicazioni cliniche dell'uso terapeutico della cannabis nei disturbi d'ansia e del dolore.",
    status: "upcoming"
  },
  {
    id: "evt_003",
    slug: "studio-peer-to-peer-aprile",
    title: "Gruppo di Studio: Mappe Emotive",
    date: "10 Aprile 2024",
    time: "17:30 - 19:30",
    location: "Online (Zoom)",
    type: "Gruppo di Studio",
    description: "Revisione e discussione sull'utilizzo pratico del kit Mappe Emotive nei setting individuali.",
    status: "past"
  }
];

// Mock Data: Documenti (fallback quando Strapi non ha dati)
export type Documento = {
  id: string;
  title: string;
  category: "Protocolli" | "Materiali" | "Amministrazione";
  dateAdded: string;
  size: string;
  downloadUrl: string;
};

export const mockDocumenti: Documento[] = [
  {
    id: "doc_001",
    title: "Protocollo CBT Ansia Sociale v2.pdf",
    category: "Protocolli",
    dateAdded: "01 Maggio 2024",
    size: "2.4 MB",
    downloadUrl: "#"
  },
  {
    id: "doc_002",
    title: "Schede Monitoraggio Settimanale.docx",
    category: "Materiali",
    dateAdded: "28 Aprile 2024",
    size: "1.1 MB",
    downloadUrl: "#"
  }
];
