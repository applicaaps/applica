# Procedimenti di Integrazione e Sicurezza Backend

Questo file elenca i passi necessari per implementare l'architettura sicura definita in [backedRules.md](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/backedRules.md). Ciascun punto verrà affrontato e verificato singolarmente.

---

## 🚀 FASI DI SVILUPPO

### 1. Configurazione Supabase SDK nel Frontend
- [x] **Installazione librerie**: Installare `@supabase/supabase-js` (o `@supabase/ssr`) nel progetto `applica-app`.
- [x] **Configurazione client sicuro**: Creare il file `applica-app/utils/supabase/server.ts` per istanziare il client Supabase lato server in modo sicuro (usando i cookie per recuperare le sessioni).
- [x] **Definizione Variabili d'Ambiente**: Configurare nel file `.env` di `applica-app`:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (utilizzata solo sul server).

### 2. Transizione all'Autenticazione Reale (Next.js ⟷ Supabase/Strapi)
- [x] **Sostituzione Mock Login**: Modificare [login/page.tsx](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/app/login/page.tsx) per utilizzare una Server Action reale.
- [x] **Implementazione Server Action per Auth**: Creare una Server Action che invii le credenziali a Strapi (`/api/auth/local`) o a Supabase Auth, riceva il token e lo memorizzi in un cookie HttpOnly protetto.
- [x] **Protezione delle Pagine**: Configurare la logica in [proxy.ts](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/proxy.ts) (o rinominarlo in `middleware.ts` per l'auto-invocazione di Next.js) per verificare la validità del cookie di sessione tramite l'SDK Supabase.

### 3. Configurazione delle policy Row Level Security (RLS) su Supabase
- [x] **Attivazione RLS**: Eseguire il comando SQL per attivare la RLS su tutte le tabelle create (es. `eventi`, `documenti`):
  ```sql
  ALTER TABLE eventi ENABLE ROW LEVEL SECURITY;
  ALTER TABLE documenti ENABLE ROW LEVEL SECURITY;
  ```
- [x] **Creazione Policy di Accesso**: Definire le regole per cui i dati sensibili o dell'area riservata sono accessibili solo se l'utente ha una sessione attiva su Supabase (`auth.uid() IS NOT NULL`).

### 4. Fetch dei Dati Reali (Eventi e Documenti)
- [x] **Disattivazione Mock Data**: Sostituire l'uso delle costanti `mockEventi` e `mockDocumenti` all'interno di [auth.ts](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/lib/auth.ts) tramite l'astrazione di [db.ts](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/lib/db.ts).
- [x] **Integrazione API**: Scrivere le chiamate sicure dal frontend Next.js a Strapi o Supabase includendo il token JWT dell'utente loggato, validando i dati ricevuti con `zod`.

### 5. Proxy e Signed URLs per i Documenti Privati
- [x] **Creazione Route Handler per Download**: Sviluppare un endpoint in `applica-app` (es. `app/api/documents/[id]/download/route.ts`).
- [x] **Generazione Link Firmato a Tempo**: All'interno del Route Handler, controllare la sessione dell'utente, richiedere un URL firmato temporaneo (Signed URL) a Supabase Storage e reindirizzare l'utente.
