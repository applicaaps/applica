# 🏗️ ARCHITETTURA BACKEND: OTTIMIZZAZIONE, PRIVACY E SICUREZZA

Questo documento definisce l'infrastruttura backend, il flusso dei dati, la configurazione dei servizi e i vincoli di sicurezza assoluti per lo sviluppo del progetto. L'AI deve seguire rigidamente queste direttive per evitare vulnerabilità di sicurezza (esposizione di database, chiavi o dati sensibili).

---

## 1. STACK TECNOLOGICO E OTTIMIZZAZIONE

L'architettura è stata ottimizzata per ridurre la complessità infrastrutturale, eliminando i punti di contatto superflui e centralizzando le risorse:

* **Frontend & Logica di Business:** Next.js (App Router). Sfrutta le Server Actions e i Route Handlers come middleware sicuro.
* **Headless CMS (Gestione Contenuti Cliente):** Strapi (Self-hosted su VPS). Fornisce al cliente un pannello di controllo no-code completo e intuitivo per la gestione autonoma dei contenuti.
* **Database & Storage:** Supabase. 
    * Strapi utilizza direttamente il database Postgres di Supabase come memorizzazione principale.
    * ⚠️ **DEPRECATION NOTE:** **Cloudinary è stato completamente rimosso dallo stack.** Per ottimizzare i costi e centralizzare i servizi, tutte le funzionalità di asset e media management sono state sostituite da **Supabase Storage** (tramite protocollo compatibile S3).

### Flusso dei Dati Sicuro
[Client Browser] ──(Sessione protetta)──> [Next.js Server/Actions] ──(API Private)──> [Strapi / Supabase]

---

## 2. REGOLE RIFLESSIVE PER L'AI (ISTRUZIONI COMPORTAMENTALI)

Quando generi codice, funzioni o configurazioni di database, devi applicare una filosofia **Zero-Trust**.
1.  **MAI** assumere che un endpoint sia sicuro solo perché l'URL è nascosto o destrutturato.
2.  **MAI** inserire chiavi segrete, stringhe di connessione o credenziali direttamente nel codice (hardcoded). Usa sempre le variabili d'ambiente.
3.  **MAI** generare componenti client (`"use client"`) che effettuano chiamate dirette a Supabase o Strapi usando chiavi master o bypassando l'autenticazione lato server.

---

## 3. SICUREZZA E PRIVACY DEL DATABASE (SUPABASE)

Le app sviluppate in modalità rapida spesso falliscono nella sicurezza del database lasciando le tabelle esposte a chiunque possieda la chiave anonima. Per evitare questo, segui queste regole:

### Row Level Security (RLS)
* **Regola Mandatoria:** Ogni singola tabella creata su Supabase **DEVE** avere la Row Level Security (RLS) abilitata:
    ```sql
    ALTER TABLE nome_tabella ENABLE ROW LEVEL SECURITY;
    ```
* **Politiche di Accesso (Policies):** Nessun dato deve essere letto o scritto senza una policy esplicita.
    * I dati degli utenti devono essere accessibili solo tramite controllo dell'identità: `auth.uid() = user_id`.
    * Le tabelle lette da Strapi devono consentire l'accesso solo al token o al ruolo specifico del backend di Strapi.

### Gestione dei Segreti e Variabili d'Ambiente
Le chiavi devono essere categorizzate e isolate rigorosamente per evitare data leaks nel frontend:

| Variabile | Ambito di Utilizzo | Restrizione |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Client / Server | Visibile al pubblico. Nessun dato sensibile accessibile senza RLS. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client / Server | Visibile al pubblico. Permessi minimi di default. |
| `SUPABASE_SERVICE_ROLE_KEY` | **SOLO SERVER** | **MAI** usare con il prefisso `NEXT_PUBLIC_`. Bypassando l'RLS, deve risiedere solo nelle Server Actions o Route Handlers protetti da controllo di sessione. |
| `STRAPI_API_TOKEN` | **SOLO SERVER** | Utilizzato da Next.js per interrogare Strapi. Non deve mai arrivare al browser. |

---

## 4. SICUREZZA NELLE SERVER ACTIONS DI NEXT.JS

Le Server Actions sono a tutti gli effetti endpoint POST pubblici ed esposti. L'AI deve proteggerle sempre implementando i controlli di sessione e la validazione dei tipi:

```typescript
"use server"

import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server" // Configurazione server-side sicura
import { z } from "zod" // Utilizzo obbligatorio per la validazione dell'input

const updateProfileSchema = z.object({
  bio: z.string().max(500).trim(),
})

export async function updateUserData(formData: FormData) {
  // 1. Verifica autenticazione prima di qualsiasi logica di business
  const supabase = createClient(cookies())
  const { data: { session }, error: authError } = await supabase.auth.getSession()

  if (authError || !session) {
    throw new Error("Accesso negato. Autenticazione richiesta.")
  }

  // 2. Validazione e Sanificazione dell'input per prevenire Injection o XSS
  const rawData = Object.fromEntries(formData)
  const validatedFields = updateProfileSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return { success: false, error: "Dati non validi." }
  }

  // 3. Esecuzione query protetta ancorata al contesto dell'utente loggato
  const { data, error } = await supabase
    .from("profiles")
    .update({ bio: validatedFields.data.bio })
    .eq("id", session.user.id) // Vincolo esplicito basato sulla sessione sicura di Supabase

  if (error) return { success: false, error: "Errore durante l'aggiornamento" }
  return { success: true, data }
}
5. CONFIGURAZIONE STORAGE: COLLEGAMENTO STRAPI -> SUPABASE (S3 API)
Per rendere effettiva la rimozione di Cloudinary, Strapi deve reindirizzare l'upload dei media direttamente sui bucket di Supabase Storage. L'AI deve configurare il file del provider di Strapi sfruttando le credenziali S3 generate da Supabase.

File di Configurazione: config/plugins.js (o config/plugins.ts)
JavaScript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('SUPABASE_S3_ACCESS_KEY_ID'),
          secretAccessKey: env('SUPABASE_S3_SECRET_ACCESS_KEY'),
        },
        region: env('SUPABASE_REGION'), // Es. 'eu-central-1' o la regione del tuo DB
        endpoint: env('SUPABASE_S3_ENDPOINT'), // Formato: https://[project-ref].supabase.co/storage/v1/s3
        params: {
          Bucket: env('SUPABASE_STORAGE_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
Regole di Sicurezza ed Isolamento dei Media:
Bucket Pubblici (public): Utilizzati esclusivamente per asset statici del sito, loghi e immagini del blog gestiti dal cliente su Strapi.

Bucket Privati (private): Utilizzati per file utente, fatture, file scaricabili o dati sensibili. L'AI non deve mai esporre i link diretti di questi file; Next.js deve fare da proxy generando Signed URLs temporanei (URL firmati a tempo) tramite l'SDK di Supabase solo dopo aver verificato i permessi dell'utente in sessione.

6. CHECKLIST PER LA VERIFICA DEL CODICE (PRIMA DEL DEPLOY)
Prima di considerare un task completato o di fare un commit, l'AI deve validare il proprio output rispetto a questa checklist:

[ ] Verifica Chiavi: C'è qualche stringa sensibile o chiave service_role esposta in un file frontend o preceduta erroneamente da NEXT_PUBLIC_?

[ ] Verifica RLS: Se è stata creata o modificata una tabella su Supabase, è stata inclusa la query per attivare e configurare l'RLS?

[ ] Sostituzione Cloudinary: I nuovi endpoint multimediali puntano correttamente ai bucket di Supabase Storage anziché a Cloudinary?

[ ] Validazione Input: Tutte le Server Actions o Route Handlers validano e sanificano l'input lato server prima di interagire con il database?

[ ] Privilegio Minimo: I token di comunicazione tra Next.js e Strapi utilizzano i permessi minimi necessari (es. Read-Only per le pagine pubbliche)?