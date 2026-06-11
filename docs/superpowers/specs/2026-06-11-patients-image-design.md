# Design Spec - Patients Page Image Integration

Design per la sostituzione del placeholder dell'immagine nella pagina dei pazienti con la foto reale `unnamed.jpg`.

## User Review Required
Nessuna decisione critica in sospeso. L'utente ha approvato l'approccio consigliato e richiesto di eliminare il file temporaneo `unnamed.jpg` al termine dell'implementazione.

## Proposed Changes

### Frontend Component

#### [NEW] [pazienti.jpg](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/public/pazienti.jpg)
Copia di `unnamed.jpg` posizionata nella cartella `public` dell'applicazione.

#### [MODIFY] [page.tsx](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/applica-app/app/pazienti/page.tsx)
Sostituzione del blocco di placeholder HTML/CSS con l'elemento `<Image>` di Next.js:
- Importazione di `Image` da `"next/image"`.
- Utilizzo dell'immagine `/pazienti.jpg` con l'attributo `fill` e classe `object-cover`.

#### [DELETE] [unnamed.jpg](file:///c:/Users/elton_kvh7ex/Desktop/applicaAPS/unnamed.jpg)
Rimozione del file originale per mantenere pulita la radice del progetto.

## Verification Plan

### Automated Tests
- `npm run build` all'interno di `applica-app` per validare la compilazione TypeScript e Next.js.

### Manual Verification
- Avvio di `npm run dev` e verifica visiva dell'immagine all'interno della pagina `/pazienti`.
