"use client"

import * as React from "react"
import Link from "next/link"
import { Shield, Mail, MapPin, CheckCircle, ExternalLink, ArrowLeft, Calendar, FileText } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"

const sections = [
  { id: "titolare", title: "1. Titolare del trattamento" },
  { id: "tipologie", title: "2. Tipologie di dati trattati" },
  { id: "finalita", title: "3. Finalità e basi giuridiche" },
  { id: "natura", title: "4. Natura del conferimento" },
  { id: "modalita", title: "5. Modalità del trattamento" },
  { id: "servizi", title: "6. Servizi e fornitori coinvolti" },
  { id: "luogo", title: "7. Luogo e trasferimento dei dati" },
  { id: "conservazione", title: "8. Periodo di conservazione" },
  { id: "destinatari", title: "9. Destinatari dei dati" },
  { id: "tracciamento", title: "10. Assenza di tracciamento" },
  { id: "diritti", title: "11. Diritti degli interessati" },
  { id: "esercizio", title: "12. Esercizio dei diritti" },
  { id: "link-terzi", title: "13. Link a servizi di terzi" },
  { id: "modifiche", title: "14. Modifiche alla policy" },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = React.useState("titolare")

  React.useEffect(() => {
    const handleScroll = () => {
      // If at the very bottom of the page, force active section to be the last one
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const scrollThreshold = 180 // px from the top of the viewport

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= scrollThreshold && rect.bottom > scrollThreshold) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const offset = rect.top + scrollTop - 120
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden border-b border-[var(--color-outline-variant)]/30 bg-[var(--color-surface-container-low)]">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[var(--color-primary-container)]/10 to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-[var(--color-secondary-fixed)]/10 to-transparent opacity-60 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <RevealSection>
            <div className="flex items-center gap-3 text-[var(--color-primary)] font-semibold text-sm mb-4">
              <Shield size={18} />
              <span>Informativa sulla Privacy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-6 font-serif">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
              Trasparenza, protezione e rispetto per i tuoi dati personali. Questa pagina descrive come raccogliamo, utilizziamo e tuteliamo le tue informazioni durante l&apos;utilizzo di applicaaps.com.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-[var(--color-outline-variant)]/50 text-xs text-[var(--color-on-surface-variant)]/70">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[var(--color-primary)]" />
                Ultimo aggiornamento: 12 giugno 2026
              </span>
              <span className="hidden sm:inline text-[var(--color-outline-variant)]">|</span>
              <span className="flex items-center gap-1.5">
                <FileText size={14} className="text-[var(--color-primary)]" />
                Conforme al GDPR (Reg. UE 2016/679)
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Main Content Grid ─── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sticky Index (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-[120px] max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-thin">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--color-outline-variant)]/50 p-6 ambient-shadow">
                <h3 className="font-serif font-bold text-lg text-[var(--color-on-surface)] mb-4 pb-3 border-b border-[var(--color-outline-variant)]/30">
                  Indice dei contenuti
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 block border-l-2 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 ${
                        activeSection === section.id
                          ? "bg-[var(--color-primary-container)]/10 text-[var(--color-primary)] font-semibold border-[var(--color-primary)] pl-4"
                          : "border-transparent text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] pl-4"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column: Policy Content */}
            <article className="col-span-1 lg:col-span-8 space-y-12">
              
              {/* Section 1: Titolare */}
              <RevealSection>
                <div id="titolare" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)] flex items-center gap-3">
                    <span className="text-[var(--color-secondary)]">1.</span> Titolare del trattamento
                  </h2>
                  <div className="bg-white p-6 rounded-2xl border border-[var(--color-outline-variant)]/50 space-y-4 shadow-sm">
                    <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                      Ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (&quot;GDPR&quot;), Applica APS, con domicilio fiscale in Via Stazione 163, 70029 Santeramo in Colle (BA), sede operativa/di contatto in Via Roma 69, 70029 Santeramo in Colle (BA), email:{" "}
                      <a href="mailto:applicapsicologia@gmail.com" className="text-[var(--color-primary)] hover:underline font-medium">
                        applicapsicologia@gmail.com
                      </a>
                      , codice fiscale: <strong>91152320726</strong>, in qualità di Titolare del trattamento, informa gli utenti in merito al trattamento dei dati personali effettuato tramite il sito web{" "}
                      <a href="https://applicaaps.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline font-medium inline-flex items-center gap-0.5">
                        applicaaps.com <ExternalLink size={12} />
                      </a>.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 2: Tipologie di dati */}
              <RevealSection>
                <div id="tipologie" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">2.</span> Tipologie di dati trattati
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>
                      Durante la navigazione del sito possono essere trattati dati tecnici e di navigazione, come indirizzo IP, informazioni sul dispositivo, browser, sistema operativo, data e ora della visita e log tecnici generati dall&apos;infrastruttura del sito e dei servizi collegati.
                    </p>
                    <p>
                      Nel caso in cui l&apos;utente scelga di aderire all&apos;associazione o di richiedere informazioni tramite i collegamenti presenti sul sito, il conferimento dei dati avviene tramite moduli esterni Google Forms distinti per pazienti e psicologi. I dati effettivamente richiesti nei moduli dipendono dal contenuto dei singoli form e dalle finalità di volta in volta indicate.
                    </p>
                    <p>
                      Per i soli psicologi aderenti o autorizzati può inoltre essere trattato un insieme ulteriore di dati relativi all&apos;accesso e all&apos;utilizzo dell&apos;area riservata, inclusi dati identificativi, credenziali o informazioni di profilo, log di accesso, consultazione di eventi e documenti condivisi, nonché eventuali dati tecnici connessi all&apos;utilizzo della piattaforma.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 3: Finalità */}
              <RevealSection>
                <div id="finalita" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">3.</span> Finalità e basi giuridiche del trattamento
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>I dati personali sono trattati per le seguenti finalità:</p>
                    <ul className="space-y-2.5 my-4">
                      {[
                        "consentire la navigazione e il corretto funzionamento del sito;",
                        "permettere all'utente di accedere ai moduli esterni dedicati alla richiesta di adesione o di contatto;",
                        "gestire le richieste ricevute tramite i moduli Google Forms dedicati a pazienti e psicologi;",
                        "consentire agli psicologi autorizzati l'accesso all'area riservata del sito e la consultazione di eventi, documenti e contenuti condivisi;",
                        "adempiere a obblighi di legge, regolamentari o amministrativi;",
                        "accertare, esercitare o difendere un diritto del Titolare in sede giudiziaria o stragiudiziale, ove necessario."
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle className="text-[var(--color-primary)] shrink-0 mt-1" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Le basi giuridiche del trattamento sono, a seconda dei casi: l&apos;esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato, l&apos;esecuzione di un rapporto associativo o organizzativo, l&apos;adempimento di obblighi legali e il legittimo interesse del Titolare alla sicurezza del sito, alla gestione tecnica dell&apos;infrastruttura e alla protezione dei propri sistemi. Qualora in specifici casi fosse necessario raccogliere un consenso, questo sarà richiesto separatamente con modalità idonee.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 4: Natura */}
              <RevealSection>
                <div id="natura" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">4.</span> Natura del conferimento dei dati
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>
                      Il conferimento dei dati di navigazione necessari al funzionamento tecnico del sito è automatico e indispensabile per consentire la fruizione del sito stesso. Il conferimento dei dati richiesti tramite Google Forms è facoltativo, ma l&apos;eventuale mancato conferimento può rendere impossibile gestire la richiesta dell&apos;utente, la candidatura o l&apos;adesione all&apos;associazione.
                    </p>
                    <p>
                      Per l&apos;accesso all&apos;area riservata degli psicologi, il conferimento dei dati necessari alla creazione e gestione dell&apos;account è indispensabile per consentire l&apos;autenticazione, l&apos;accesso ai contenuti e la corretta gestione del servizio.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 5: Modalità */}
              <RevealSection>
                <div id="modalita" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">5.</span> Modalità del trattamento
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      Il trattamento dei dati avviene con strumenti elettronici e, se necessario, con strumenti manuali, secondo principi di liceità, correttezza, trasparenza, minimizzazione e riservatezza, adottando misure tecniche e organizzative adeguate a tutelare i dati personali da accessi non autorizzati, perdita, diffusione, distruzione o uso illecito.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 6: Servizi */}
              <RevealSection>
                <div id="servizi" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">6.</span> Servizi e fornitori coinvolti
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>
                      Per l&apos;erogazione del sito e dei servizi collegati, Applica APS si avvale anche di fornitori terzi che possono trattare dati personali per conto del Titolare, quali, in particolare:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                      <div className="p-5 bg-white border border-[var(--color-outline-variant)]/50 rounded-xl shadow-sm text-center">
                        <strong className="block text-[var(--color-on-surface)] font-serif text-lg mb-1">Google Forms</strong>
                        <span className="text-xs text-[var(--color-on-surface-variant)]">Raccolta candidature e contatti</span>
                      </div>
                      <div className="p-5 bg-white border border-[var(--color-outline-variant)]/50 rounded-xl shadow-sm text-center">
                        <strong className="block text-[var(--color-on-surface)] font-serif text-lg mb-1">Strapi CMS</strong>
                        <span className="text-xs text-[var(--color-on-surface-variant)]">Gestione dei contenuti del sito</span>
                      </div>
                      <div className="p-5 bg-white border border-[var(--color-outline-variant)]/50 rounded-xl shadow-sm text-center">
                        <strong className="block text-[var(--color-on-surface)] font-serif text-lg mb-1">Supabase</strong>
                        <span className="text-xs text-[var(--color-on-surface-variant)]">Database e autenticazione area riservata</span>
                      </div>
                    </div>
                    <p>
                      Tali soggetti operano, a seconda dei casi, in qualità di autonomi titolari oppure responsabili del trattamento nominati dal Titolare ai sensi dell&apos;art. 28 GDPR, sulla base delle rispettive funzioni concretamente svolte.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 7: Luogo */}
              <RevealSection>
                <div id="luogo" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">7.</span> Luogo del trattamento e trasferimento dei dati
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      I dati sono trattati presso il domicilio fiscale del Titolare e presso i fornitori di servizi tecnologici utilizzati per il funzionamento del sito e delle relative funzionalità. Alcuni fornitori potrebbero trattare dati al di fuori dello Spazio Economico Europeo; in tali casi il trasferimento avverrà nel rispetto degli artt. 44 e ss. del GDPR, mediante l&apos;adozione di garanzie adeguate, quali decisioni di adeguatezza, clausole contrattuali standard o altri strumenti previsti dalla normativa applicabile.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 8: Periodo */}
              <RevealSection>
                <div id="conservazione" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">8.</span> Periodo di conservazione
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>
                      I dati di navigazione sono conservati per il tempo strettamente necessario al perseguimento delle finalità tecniche e di sicurezza del sito, salvo esigenze ulteriori di accertamento di reati o tutela dei diritti del Titolare.
                    </p>
                    <p>
                      I dati trasmessi tramite Google Forms sono conservati per il tempo necessario a gestire la richiesta o il percorso di adesione e, successivamente, per il periodo coerente con le finalità amministrative, organizzative e legali dell&apos;associazione. I dati relativi all&apos;area riservata degli psicologi sono conservati per tutta la durata del rapporto con l&apos;associazione; in caso di disiscrizione o cessazione del rapporto, tali dati saranno cancellati entro una settimana, salvo l&apos;eventuale ulteriore conservazione strettamente necessaria per adempiere a obblighi di legge o per la tutela dei diritti del Titolare.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 9: Destinatari */}
              <RevealSection>
                <div id="destinatari" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">9.</span> Destinatari dei dati
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      I dati personali possono essere comunicati a soggetti autorizzati dal Titolare, a collaboratori e consulenti, a fornitori di servizi tecnici e informatici, nonché a soggetti pubblici o autorità quando ciò sia previsto dalla legge o richiesto da ordini legittimi. I dati non sono diffusi, salvo obblighi normativi o specifica richiesta dell&apos;interessato che implichi la condivisione con terzi.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 10: Assenza */}
              <RevealSection>
                <div id="tracciamento" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">10.</span> Assenza di tracciamento pubblicitario
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      Alla data dell&apos;ultimo aggiornamento della presente informativa, il sito non utilizza strumenti di tracciamento pubblicitario, profilazione o analytics come Google Analytics.
                    </p>
                    <p>
                      Eventuali futuri strumenti ulteriori rispetto a quelli qui indicati saranno valutati sotto il profilo privacy e, se necessario, comporteranno l&apos;aggiornamento della presente informativa e degli eventuali meccanismi di raccolta del consenso.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 11: Diritti */}
              <RevealSection>
                <div id="diritti" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">11.</span> Diritti degli interessati
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed space-y-4">
                    <p>
                      Gli interessati possono esercitare, nei casi previsti dagli artt. 15-22 del GDPR, il diritto di ottenere l&apos;accesso ai dati personali, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità dei dati, l&apos;opposizione al trattamento, nonché di revocare l&apos;eventuale consenso precedentemente prestato, ferma restando la liceità del trattamento basata sul consenso prima della revoca.
                    </p>
                    <p>
                      Gli interessati hanno inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali secondo le modalità indicate sul sito istituzionale dell&apos;Autorità.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 12: Modalità di esercizio */}
              <RevealSection>
                <div id="esercizio" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">12.</span> Modalità di esercizio dei diritti
                  </h2>
                  <div className="bg-white p-6 rounded-2xl border border-[var(--color-outline-variant)]/50 space-y-4 shadow-sm">
                    <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                      Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali, è possibile contattarci ai seguenti recapiti:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                        <MapPin size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[var(--color-on-surface)] font-serif">Sedi dell&apos;associazione</strong>
                          <span>
                            <strong>Domicilio fiscale:</strong> Via Stazione 163, 70029 Santeramo in Colle (BA)<br />
                            <strong>Sede operativa/contatti:</strong> Via Roma 69, 70029 Santeramo in Colle (BA)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                        <Mail size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[var(--color-on-surface)] font-serif">Contatti</strong>
                          <span>
                            Email:{" "}
                            <a href="mailto:applicapsicologia@gmail.com" className="text-[var(--color-primary)] hover:underline">
                              applicapsicologia@gmail.com
                            </a>
                            <br />
                            Codice fiscale: 91152320726
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>

              {/* Section 13: Link a siti terzi */}
              <RevealSection>
                <div id="link-terzi" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">13.</span> Link a siti e servizi di terzi
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      Il sito può contenere link o pulsanti che reindirizzano a servizi di terzi, tra cui Google Forms, il cui trattamento dei dati personali è disciplinato dalle rispettive informative privacy. Una volta reindirizzato su piattaforme esterne, l&apos;utente è tenuto a consultare le relative informative prima di inserire dati personali.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Section 14: Modifiche */}
              <RevealSection>
                <div id="modifiche" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                    <span className="text-[var(--color-secondary)]">14.</span> Modifiche alla presente informativa
                  </h2>
                  <div className="prose text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    <p>
                      Il Titolare si riserva il diritto di modificare o aggiornare la presente Privacy Policy in qualunque momento, anche in considerazione di modifiche normative, tecniche o organizzative. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Back Link */}
              <RevealSection>
                <div className="pt-8 border-t border-[var(--color-outline-variant)]/50">
                  <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-[gap] duration-200">
                    <ArrowLeft size={16} />
                    Torna alla Home
                  </Link>
                </div>
              </RevealSection>

            </article>
          </div>
        </div>
      </section>
    </>
  )
}
