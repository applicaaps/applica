# Applica APS – Framework tecnico del sito

## 1. Obiettivi del progetto

- Presentare Applica APS come realtà di **psicologia concreta, accessibile e trasformativa** (parte marketing/pubblica).
- Offrire una **area riservata** per utenti abilitati, con:
  - calendario/eventi in programma,
  - archivio eventi passati con descrizione di ciò che è stato trattato,
  - accesso a video‑registrazioni,
  - sezione documenti e questionari.
- Garantire al proprietario dell’associazione la **massima semplicità nel caricare/aggiornare** eventi e materiali, senza toccare codice.

---

## 2. Stack tecnologico

- **Frontend**: Next.js (React)
  - Routing a file (App Router).
  - Pagine pubbliche SEO‑friendly (SSR/SSG).
  - Pagine protette per area riservata (middleware / controlli auth).
- **Backend / CMS**: Strapi (Headless CMS)
  - Gestione content type (Eventi, Documenti, Pagine statiche…).
  - Pannello admin per il proprietario dell’associazione.
  - Sistema ruoli & permessi (Public vs Authenticated) per limitare l’accesso ai contenuti protetti.
- **Database**: gestito da Strapi (es. PostgreSQL) – non viene toccato direttamente nello sviluppo frontend.

---

## 3. Struttura ad alto livello

### 3.1 Pagine pubbliche (Next.js)

- `/` – **Home**
  - Hero con payoff "Psicologia concreta, accessibile e trasformativa".
  - Intro breve su Applica APS.
  - CTA principali:
    - "Diventa professionista Applica" → link alla sezione per psicologi.
    - "Richiedi un colloquio" → link a modulo o form esterno.
  - Frase emozionale sulla psicologia umana, vicina e reale.

- `/chi-siamo`
  - Descrizione dell’associazione, valori, visione.
  - Mission (accessibile, scientifica, pratica, umana).

- `/cosa-facciamo`
  - **Supporto psicologico**: percorsi individuali e di gruppo, aree di intervento (ansia, depressione, autostima, schema therapy, ecc.).
  - **Per psicologi e psicoterapeuti**: supervisione clinica, formazione pratica, gruppi di studio, workshop, materiali psicoeducativi.
  - CTA: "Prenota un colloquio", "Candidati come professionista".

- `/materiali`
  - Panoramica dei materiali psicoeducativi (carte terapeutiche, materiali esperienziali, risorse cliniche e formative).
  - CTA: "Scopri i materiali".

- `/community`
  - Spiegazione della community Applica.
  - Link/gruppi per pazienti (informativo) e psicologi (interattivo).

- `/contatti`
  - Indirizzo, email, link Instagram.
  - Modulo contatto o link al form esterno.

- `/login`
  - Pagina di accesso per utenti autorizzati all’area riservata.

### 3.2 Area riservata (Next.js)

Tutte queste pagine vengono protette tramite middleware / controlli auth (accesso solo se l’utente è autenticato).

- `/area-riservata`
  - Dashboard semplice con panoramica:
    - prossimi eventi,
    - ultimi eventi disponibili in archivio (con link alle registrazioni),
    - documenti/questionari recenti.

- `/area-riservata/eventi`
  - Lista eventi in programma (futuri).
  - Filtri base (data, tipo evento, online/presenza).

- `/area-riservata/eventi/[slug]`
  - Dettaglio evento:
    - titolo, data/ora, descrizione estesa,
    - informazioni logistiche (online/link meeting o sede fisica),
    - dopo l’evento: link/embeds della registrazione video,
    - elenco materiali collegati (documenti/questionari).

- `/area-riservata/documenti`
  - Lista di documenti/questionari disponibili.
  - Filtri per categoria (questionario, scheda, materiale per gruppo, ecc.).

- (Opzionale) `/area-riservata/profilo`
  - Dati base dell’utente (nome, email, ruolo paziente/professionista), modificabili in futuro.

> Nota: la gestione dei contenuti (creazione/modifica eventi, caricamento file, gestione utenti) avviene tramite il pannello admin di Strapi, non da pagine Next.js dedicate all’admin.

---

## 4. Modello dati in Strapi (content types)

### 4.1 Single Types (pagine istituzionali)

Single Types utili per contenuti globali del sito:

- `homepage`
  - hero_title, hero_subtitle, hero_cta_1, hero_cta_2
  - blocchi testo mission/valori
- `chi_siamo`
  - testo principale, timeline, eventuali immagini
- `servizi`
  - sezioni "Supporto psicologico", "Per psicologi", "Materiali psicoeducativi"
- `community`
  - testi + link ai gruppi pazienti/psicologi
- `contatti`
  - indirizzo, email, telefono, link social, link al form

Questi Single Types permettono al proprietario di aggiornare i contenuti statici del sito dal pannello Strapi.

### 4.2 Collection Types

#### `eventi`

Campi suggeriti:

- `titolo` (string)
- `slug` (UID) – generato dal titolo
- `data_inizio` (datetime)
- `data_fine` (datetime, opzionale)
- `stato` (enum: "programmato", "svolto", "annullato")
- `tipologia` (enum: "online", "in presenza", "misto")
- `luogo` (string, opzionale – indirizzo o link alla sede)
- `link_meeting` (string, opzionale – Zoom/Meet)
- `descrizione_breve` (text)
- `descrizione_completa` (rich text)
- `link_registrazione_video` (string, opzionale – URL alla registrazione esterna o embed)
- `materiali` (relazione many‑to‑many con `documenti`)
- `visibilita` (enum: "pubblico", "riservato" – per ora tutti "riservato" per l’area membri)

#### `documenti`

Campi suggeriti:

- `titolo` (string)
- `descrizione` (text)
- `file` (media – upload PDF/altro)
- `categoria` (enum: "questionario", "scheda", "materiale_esperienziale", "altro")
- `tag` (lista di stringhe, opzionale)
- `visibilita` (enum: "pubblico", "riservato")

Relazioni:

- Relazione many‑to‑many con `eventi` (un documento può essere usato in più eventi; un evento può avere più documenti).

#### `utente_membro` (opzionale, oltre al sistema utenti di Strapi)

Se servono dati extra oltre a quelli base del plugin utenti di Strapi:

- `user` (relazione 1‑a‑1 con utente Strapi del plugin Users & Permissions)
- `nome` (string)
- `cognome` (string)
- `ruolo` (enum: "paziente", "professionista")
- `note` (text, opzionale)

---

## 5. Ruoli e permessi (Strapi)

### 5.1 Ruoli built‑in

- **Public**
  - Può leggere solo contenuti necessari per il sito pubblico (single types: homepage, chi_siamo, servizi, community, contatti).
  - Non ha accesso a `eventi` e `documenti` riservati.

- **Authenticated**
  - Può leggere:
    - `eventi` (solo quelli con `visibilita = "riservato"` o secondo logica definita),
    - `documenti` (solo quelli con `visibilita = "riservato"`).

### 5.2 Gestione utenti

- Il proprietario dell’associazione accede al pannello admin di Strapi.
- Da lì crea utenti (email + password) e assegna il ruolo di frontend (Authenticated).
- Le credenziali vengono comunicate agli utenti finali (coerente con il requisito "le credenziali vengono date dal proprietario").

---

## 6. Autenticazione e protezione pagine (Next.js)

### 6.1 Login

- Pagina `/login`:
  - form email/password.
  - submit verso endpoint Strapi `/api/auth/local`.
  - in caso di successo, ricezione del JWT.
  - salvataggio del token (idealmente in cookie HttpOnly via API route Next.js).

### 6.2 Protected routes

- Middleware o route handlers in Next.js che:
  - intercettano le richieste verso `/area-riservata/**`;
  - verificano la presenza di un token valido;
  - se assente/non valido → redirect a `/login`.

### 6.3 Fetch dei contenuti protetti

- Le pagine dell’area riservata effettuano richieste a Strapi includendo il JWT.
- Strapi, tramite i permessi del ruolo Authenticated, restituisce solo i dati autorizzati (eventi, documenti riservati).

---

## 7. Esperienza d’uso per il proprietario

Dal pannello admin di Strapi il proprietario può:

- Creare/modificare **eventi**:
  - inserire titolo, descrizione, data, link meeting,
  - dopo l’evento, aggiungere il link alla registrazione video,
  - collegare i documenti/questionari pertinenti.

- Caricare **documenti/questionari**:
  - upload file PDF/altro,
  - categorizzare (es. questionario, scheda, materiale esperienziale),
  - impostare visibilità (pubblico/riservato).

- Gestire **utenti membri**:
  - creare nuovi utenti,
  - rigenerare password se necessario,
  - disattivare utenti.

Tutto questo senza entrare mai nel codice o in VS Code: la struttura e la logica vengono impostate da te una volta sola, mentre lui opera solo dal backend Strapi.

---

## 8. Estensioni future possibili

- Aggiunta di **notifiche email** per nuovi eventi o nuovi materiali (via Strapi o servizio esterno).
- Distinzione più fine tra ruoli (es. paziente vs professionista con contenuti diversi).
- Integrazione con sistemi di pagamento/donazione per eventi o materiali premium.
- Localizzazione multilingua (i18n) se Applica volesse in futuro contenuti in più lingue.

Questo file funge da base tecnica di riferimento per lo sviluppo: stack, struttura delle pagine, modello dati e gestione permessi sono definiti in modo chiaro e possono essere raffinati man mano che il design e i requisiti si dettagliano.