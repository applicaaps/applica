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

## 2. Integrazione Cloudinary (Opzionale)
- [ ] **Ottieni credenziali Cloudinary**:
  - Crea un account su Cloudinary (gratuito per iniziare).
  - Copia le credenziali: Cloud Name, API Key, API Secret.
- [ ] **Aggiungi le chiavi a Strapi**:
  - Inseriscile nel file `applica-backend/.env` con queste chiavi:
    ```env
    CLOUDINARY_NAME=il_tuo_cloud_name
    CLOUDINARY_KEY=la_tua_api_key
    CLOUDINARY_SECRET=la_tua_api_secret
    ```

## 3. Gestione Utenti (Per Test dell'Area Riservata)
- [ ] **Crea utenti di test**:
  - Nel pannello Strapi, vai su *Content Manager -> User (from Users & Permissions)*.
  - Aggiungi un utente con ruolo **Authenticated** e password provvisoria per testare il login dall'area riservata del frontend.

## 4. Collegamento Frontend-Backend
- [ ] **Collegare le API**:
  - Configurare le chiamate API nel frontend Next.js (`applica-app`) per recuperare i dati da `http://localhost:1337/api/...` usando il token dell'utente loggato.
