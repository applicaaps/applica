1. Scroll Reveal / "Fade-in Up" (Animazione di ingresso)
L'animazione principale delle card quando scorri la pagina verso il basso è un effetto di Scroll Reveal (rivelazione allo scroll). Nello specifico è un "Fade-in Up".

Come è fatta: È gestita dal componente GlassCard.jsx utilizzando la libreria framer-motion.
Come funziona: Quando le card non sono ancora visibili sullo schermo, partono invisibili (opacity: 0) e leggermente spostate verso il basso di 30 pixel (y: 30). Non appena scorri e le card entrano nel viewport (whileInView), diventano completamente visibili (opacity: 1) e "salgono" nella loro posizione naturale (y: 0) con una transizione fluida di 0.6 secondi.
2. Lift on Hover / "Translate Y" (Animazione al passaggio del mouse)
Se passi il mouse sopra queste card, c'è una micro-animazione interattiva che si chiama Hover State (o effetto lift / floating).

Come è fatta: È gestita tramite puro CSS nel file LandingProfessionisti.css sulla classe .landing-card.
Come funziona: Grazie alla proprietà transition, quando ci passi sopra col cursore, la card si solleva dolcemente di 5 pixel verso l'alto (transform: translateY(-5px)) e il suo sfondo diventa una frazione più luminoso (background: rgba(255, 255, 255, 0.04)). Questo dà all'utente un feedback tattile e interattivo.
