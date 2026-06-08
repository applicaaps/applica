# Guida al Deploy Gratuito (Supabase + Render)

Questa guida ti spiega passo-passo come configurare un database PostgreSQL gratuito su **Supabase** e caricare il backend Strapi su **Render**.

---

## Parte 1: Creazione Database su Supabase (PostgreSQL)

1. **Registrazione / Accedi**:
   - Vai su [supabase.com](https://supabase.com) e crea un account gratuito.
2. **Crea un nuovo Progetto**:
   - Clicca su **New Project**.
   - Scegli la tua Organization.
   - Dai un nome al progetto (es. `applica-db`).
   - Imposta una **Database Password** sicura (segnala da qualche parte, ti servirà!).
    - Scegli la regione (es. *Europe (Zurich)* se disponibile, o *Europe (Frankfurt)*).
    - Assicurati che sia selezionato il piano **Free**.
    - Clicca su **Create new project**. Attendi circa 2 minuti che il database venga preparato.
3. **Recupera la Connection String**:
    - Una volta pronto il progetto, vai su **Project Settings** (icona ingranaggio in basso a sinistra) -> **Database**.
    - Cerca la sezione **Connection string** (sotto Connection Pooler).
    - Seleziona la scheda **URI** (e usa la modalità *Session*, porta 5432, o *Transaction*, porta 6543 - per Strapi va bene *Session* o *Transaction*).
    - Copia la stringa di connessione che assomiglia a questa:
      `postgresql://postgres.[tuo-id]:[tua-password]@aws-0-[regione].pooler.supabase.com:6543/postgres`
    - Sostituisci `[tua-password]` con la password del database che hai scelto al punto 2.

---

## Parte 2: Collegare Strapi Locale a Supabase

Se vuoi testare il database online da locale prima del deploy:

1. Apri il file `applica-backend/.env`.
2. Modifica queste chiavi (lasciando stare le altre):
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_URL=la_tua_connection_string_di_supabase_copiata_sopra
   ```
3. Avvia Strapi locale (`npm run dev` nella cartella `applica-backend`). Ora Strapi userà il database online di Supabase anziché il file SQLite locale! (Dovrai ricreare l'utente amministratore perché il database è nuovo e vuoto).

---

## Parte 3: Deploy di Strapi su Render

Render ospiterà l'applicazione Strapi online gratis.

### 1. Prepara il repository su GitHub
- Assicurati di aver fatto il push di tutto il codice (compreso `applica-backend`) sul tuo repository GitHub (escludendo `.env` e `node_modules` come configurato nel nostro `.gitignore`).

### 2. Crea il servizio su Render
1. Vai su [dashboard.render.com](https://dashboard.render.com) e accedi con GitHub.
2. Clicca su **New +** in alto a destra e seleziona **Web Service**.
3. Collega il tuo repository GitHub.
   - **Region**: Scegli **Frankfurt (EU Central)** (è la più vicina alla Svizzera e ti dà le prestazioni migliori).
   - **Root Directory**: `applica-backend` (molto importante, perché Strapi è in quella sottocartella!).
   - **Runtime**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
   - **Instance Type**: **Free**

### 3. Aggiungi le variabili d'ambiente (Environment Variables)
In Render, vai nella scheda **Environment** del tuo Web Service e aggiungi le chiavi presenti nel tuo `.env` locale. Questo è l'unico modo in cui Render conoscerà i tuoi segreti senza caricarli su GitHub:

* `NODE_ENV` = `production`
* `HOST` = `0.0.0.0`
* `PORT` = `10000` (porta standard di Render)
* `DATABASE_CLIENT` = `postgres`
* `DATABASE_URL` = (la tua stringa di connessione di Supabase)
* `APP_KEYS` = (copia il valore dal tuo `.env` locale)
* `API_TOKEN_SALT` = (copia il valore dal tuo `.env` locale)
* `ADMIN_JWT_SECRET` = (copia il valore dal tuo `.env` locale)
* `TRANSFER_TOKEN_SALT` = (copia il valore dal tuo `.env` locale)
* `ENCRYPTION_KEY` = (copia il valore dal tuo `.env` locale)
* `JWT_SECRET` = (copia il valore dal tuo `.env` locale)

E se vuoi usare Cloudinary anche in produzione:
* `CLOUDINARY_NAME` = `dme5ajgku`
* `CLOUDINARY_KEY` = `578577829774151`
* `CLOUDINARY_SECRET` = `7xWr0uajd6WJPClVV6uoDfieDTE`

Clicca su **Save Changes**. Render avvierà il build e il deploy automatico. Una volta completato (ci vorranno circa 5-7 minuti), avrai il tuo Strapi online all'indirizzo fornito da Render (es. `https://applica-backend.onrender.com/admin`).
