# Cose da fare (To-Do List)

Ecco la lista delle attività da completare per far avanzare il progetto:

## 1. Configurazione Strapi (Backend)
- [ ] **Registra l'amministratore locale**:
  - Vai su `http://localhost:1337/admin`.
  - Registra il primo account amministratore (questo account rimarrà solo sul tuo computer locale).
- [ ] **Crea i Content Type**:
  - Nel pannello Strapi (Content-Type Builder), crea i tipi di dati descritti in `applica-sito.md`:
    - **Collection Types**:
      - `eventi` (campi: titolo, slug, data_inizio, descrizione, ecc.).
      - `documenti` (campi: titolo, descrizione, file, categoria, visibilità).
    - **Single Types** (per testi fissi del sito):
      - `homepage`, `chi-siamo`, `servizi`, `community`, `contatti`.
- [ ] **Configura Ruoli & Permessi**:
  - Vai su *Settings -> Users & Permissions Plugin -> Roles*.
  - Configura i permessi per il ruolo **Public** (es. lettura dei Single Types per il sito pubblico).
  - Configura i permessi per il ruolo **Authenticated** (es. lettura di `eventi` e `documenti` protetti).

## 2. Configurazione Storage (Supabase Storage via S3 API)
- [ ] **Ottieni credenziali S3 da Supabase**:
  - Nel pannello di Supabase, vai su *Project Settings -> Storage*.
  - Abilita la compatibilità S3 e genera una nuova coppia di chiavi S3 (Access Key ID e Secret Access Key).
  - Crea un bucket (es. `applica-media`) impostando la visibilità su *Public* (per gli asset pubblici) o *Private* (per i documenti sensibili) come specificato in [backedRules.md](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/backedRules.md).
- [ ] **Aggiungi le chiavi a Strapi**:
  - Inseriscile nel file `applica-backend/.env` compilando le chiavi S3 configurate:
    ```env
    SUPABASE_S3_ACCESS_KEY_ID=la_tua_access_key_id
    SUPABASE_S3_SECRET_ACCESS_KEY=la_tua_secret_access_key
    SUPABASE_REGION=la_tua_regione_db (es. eu-central-1 o la regione del DB)
    SUPABASE_S3_ENDPOINT=il_tuo_endpoint_s3 (es. https://[project-ref].supabase.co/storage/v1/s3)
    SUPABASE_STORAGE_BUCKET=il_nome_del_bucket
    ```

## 3. Gestione Utenti (Per Test dell'Area Riservata)
- [ ] **Crea utenti di test**:
  - Nel pannello Strapi, vai su *Content Manager -> User (from Users & Permissions)*.
  - Aggiungi un utente con ruolo **Authenticated** e password provvisoria per testare il login dall'area riservata del frontend.

## 4. Collegamento Frontend-Backend
- [ ] **Collegare le API**:
  - Configurare le chiamate API nel frontend Next.js (`applica-app`) per recuperare i dati da `http://localhost:1337/api/...` usando il token dell'utente loggato.
