Applica APS – Task Tracker
1. Inizializzazione Progetto
 Creare progetto Next.js con App Router (fatto)
 Configurare Tailwind CSS (fatto)
 Configurare fonts (Playfair Display + Inter) (fatto)
 Setup design system CSS (fatto)



2. Componenti Condivisi
 Navbar (desktop + mobile) (fatto)
 Footer (fatto)
 UI Components (Button, Card, SectionHeader) (fatto)


3. Pagine Pubbliche
 Home / (fatto)
 Chi Siamo /chi-siamo (fatto)
 Cosa Facciamo /cosa-facciamo (fatto)

 Materiali /materiali (fatto)
 Contatti /contatti (fatto)


4. Autenticazione & Area Riservata
 Login /login (fatto)
 Middleware protezione route (fatto)
 Auth helpers + mock data (fatto)
 Dashboard /area-riservata (fatto)
 Lista Eventi /area-riservata/eventi (fatto)
 Dettaglio Evento /area-riservata/eventi/[slug] (fatto)
 Documenti /area-riservata/documenti (fatto)

 
5. Verifica
 - [x] Build senza errori (frontend e backend verificati con successo)
 - [x] Test visuale tutte le pagine
 - [x] Responsive check

---

## 📋 AZIONI MANUALI RICHIESTE (Per l'Utente)

- [ ] **Generazione e Inserimento Token API Strapi**:
  1. Avvia Strapi ed entra nel pannello admin: `http://localhost:1337/admin` (o URL di produzione).
  2. Vai su **Settings** ➔ **API Tokens** (sotto Global Settings).
  3. Clicca su **Create new API Token** (in alto a destra).
  4. Configura:
     * **Nome**: `NextJS_Frontend`
     * **Token duration**: `Unlimited`
     * **Token type**: **Read-Only** (per rispettare i privilegi minimi).
  5. Clicca su **Save** e copia il token generato.
  6. Incolla il token in `STRAPI_API_TOKEN` nel file [applica-app/.env](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/.env) (sostituendo `your_strapi_api_token_here`).
- [ ] **Verifica Nome Bucket su Supabase Storage**:
  * Controlla su Supabase Storage che il nome del bucket privato creato sia `applica-media-private`.
  * Se hai utilizzato un nome diverso, aggiornalo nella variabile `SUPABASE_STORAGE_BUCKET` sia in [applica-app/.env](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/.env) che in [applica-backend/.env](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-backend/.env).