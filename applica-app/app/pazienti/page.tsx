import Link from "next/link"
import { ArrowRight, Heart, Calendars, UsersRound, NotebookPen, Compass, Route, UserRound } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { Button } from "@/components/ui/Button"

export default function PazientiPage() {
  return (
    <>
      {/* ─── Hero Pazienti ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-orange-100/50 to-transparent blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-primary-container)]/30 to-transparent blur-[80px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <RevealSection>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-2">
                  <UserRound size={16} />
                  <span>Per i pazienti</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight">
                  Un percorso per prenderti cura di te
                </h1>
              </RevealSection>

              <RevealSection stagger={1}>
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mb-4">
                  A volte affrontare tutto da soli può essere difficile. In Applica APS trovi uno spazio di ascolto, accoglienza e orientamento, pensato per accompagnarti nel tuo percorso di benessere psicologico e crescita personale.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mb-8">
                  I professionisti di Applica possono offrire supporto a bambini, adolescenti, adulti, coppie e famiglie, attraverso percorsi costruiti sui bisogni specifici di ogni persona.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://forms.gle/M43RgMztTVpMapbYA" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto h-12 text-base shadow-xl shadow-[var(--color-primary)]/20">
                      Compila il modulo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </RevealSection>
            </div>

            <RevealSection stagger={2}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center">
                <div className="text-center p-6 opacity-50">
                  <Heart size={64} className="mx-auto mb-4 text-[var(--color-primary)]" />
                  <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-on-surface-variant)]">[Placeholder Immagine Accoglienza/Terapia]</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Servizi ─── */}
      <section className="py-20 md:py-32 bg-[var(--color-surface-container-low)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
                Entrando a far parte della comunità Applica, potrai accedere a:
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Calendars, title: "Incontro di Benvenuto Applica", desc: "un momento di accoglienza, orientamento e presentazione dei servizi dell'Associazione." },
              { icon: UsersRound, title: "Gruppi Psicoeducativi", desc: "incontri dedicati a temi come ansia, autostima, gestione delle emozioni, relazioni, genitorialità e benessere psicologico." },
              { icon: NotebookPen, title: "Laboratorio di Metafore e Narrazione", desc: "uno spazio esperienziale per esplorare la propria storia personale attraverso immagini, metafore e significati." },
              { icon: Compass, title: "Sportello di Orientamento Psicologico", desc: "per ricevere informazioni e individuare il percorso più adatto alle proprie esigenze." },
              { icon: Route, title: "Percorsi Psicologici Individuali, di Coppia e Familiari", desc: "con professionisti qualificati che lavorano in rete per offrire un supporto competente e umano." },
            ].map((step, i) => (
              <RevealSection key={i} stagger={i + 1}>
                <div className="bg-white rounded-3xl p-8 border border-[var(--color-outline-variant)]/50 ambient-shadow h-full interactive-card">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">{step.title}</h3>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="py-20 md:py-28 max-w-4xl mx-auto text-center px-4 relative">
              <div className="space-y-12">
                <p className="text-2xl md:text-[1.75rem] text-[var(--color-on-surface)] leading-[1.6] italic font-light max-w-3xl mx-auto text-balance">
                  Perché chiedere aiuto non è un segno di debolezza, ma il primo passo verso una vita più serena, consapevole e in armonia con sé stessi e con gli altri.
                </p>

                <div className="w-12 h-px bg-[var(--color-outline-variant)] mx-auto opacity-70"></div>

                <p className="text-[0.8rem] md:text-sm font-medium text-[var(--color-on-surface-variant)] uppercase tracking-[0.2em] md:tracking-[0.25em] text-balance mx-auto max-w-2xl">
                  Il benessere psicologico non dovrebbe essere un privilegio, ma una possibilità concreta per tutti.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Info/FAQ ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-6">Informazioni sui Servizi</h2>
            <div className="bg-[var(--color-surface-container)] rounded-3xl p-8 md:p-10 border border-[var(--color-outline-variant)] border-dashed text-left">
              <div className="space-y-4 text-[var(--color-on-surface-variant)]">
                <p>
                  <strong>Benvenuto/a in Applica APS.</strong> Compilando il nostro modulo ci aiuterai a comprendere la tua richiesta per individuare il professionista più adatto e proporti il percorso adeguato.
                </p>
                <p>
                  Applica APS promuove l'accessibilità ai propri servizi. Le persone prive di reddito o che si trovano in una situazione di particolare difficoltà economica possono richiedere l'esenzione totale o parziale del contributo associativo, previa valutazione da parte dell'Associazione.
                </p>
                <p>
                  Il contributo associativo non coincide necessariamente con il costo del percorso psicologico, che verrà definito successivamente in base al servizio richiesto, alla disponibilità dei professionisti e alla situazione economica della persona.
                </p>
                <p>
                  Il contributo associativo consente di sostenere le attività istituzionali di Applica APS e di accedere alle iniziative dedicate ai soci, tra cui:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Incontro di Benvenuto Applica</strong> – accoglienza, orientamento e presentazione dei servizi dell'Associazione;</li>
                  <li><strong>Gruppi Psicoeducativi</strong> su temi legati al benessere psicologico e alla crescita personale;</li>
                  <li><strong>Laboratorio di Metafore e Narrazione</strong> per esplorare la propria storia personale attraverso strumenti esperienziali;</li>
                  <li><strong>Sportello di Orientamento Psicologico</strong> per ricevere informazioni e orientamento.</li>
                </ul>
                <p className="mt-4 text-sm">
                  <em>Nota: Tutte le informazioni fornite nei moduli saranno trattate nel rispetto della normativa privacy (GDPR – Reg. UE 2016/679). Il contributo associativo non comprende le eventuali prestazioni psicologiche individuali, di coppia o familiari.</em>
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
