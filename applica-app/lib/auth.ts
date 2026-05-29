// lib/auth.ts

export type User = {
  id: string;
  name: string;
  email: string;
  role: "professionista" | "admin";
  avatar?: string;
};

// Mock User Data
export const mockUser: User = {
  id: "usr_001",
  name: "Dott. Mario Rossi",
  email: "mario.rossi@applica-aps.it",
  role: "professionista",
  avatar: "MR"
};

// Mock Auth Check
// In a real app, this would verify a JWT or session cookie
export function isAuthenticated(cookieStore: any): boolean {
  const sessionCookie = cookieStore.get("applica_session");
  return sessionCookie?.value === "authenticated_mock_token";
}

// Mock Data: Eventi
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
    slug: "supervisione-clinica-maggio",
    title: "Supervisione Clinica di Gruppo",
    date: "15 Maggio 2024",
    time: "18:00 - 20:00",
    location: "Online (Google Meet)",
    type: "Supervisione",
    description: "Incontro mensile di supervisione su casi clinici complessi. La sessione sarà guidata dal Dott. Verdi con focus sui disturbi d'ansia.",
    status: "upcoming"
  },
  {
    id: "evt_002",
    slug: "workshop-cbt-adolescenti",
    title: "Workshop: CBT in adolescenza",
    date: "22 Maggio 2024",
    time: "09:00 - 13:00",
    location: "Sede Applica (Roma)",
    type: "Formazione",
    description: "Approfondimento sugli strumenti cognitivo-comportamentali più efficaci nella pratica clinica con adolescenti.",
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

// Mock Data: Documenti
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
  },
  {
    id: "doc_003",
    title: "Vademecum Fatturazione 2024.pdf",
    category: "Amministrazione",
    dateAdded: "15 Gennaio 2024",
    size: "3.5 MB",
    downloadUrl: "#"
  }
];
