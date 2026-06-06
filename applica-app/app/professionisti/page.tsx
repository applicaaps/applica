import Link from "next/link"
import { ArrowRight, Brain, Network, BookOpen, Users, UsersRound, UserPlus, Target, Library, Award } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { Button } from "@/components/ui/Button"

export default function ProfessionistiPage() {
  return (
    <>
      {/* ─── Hero Professionisti ─── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-100/60 to-transparent blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/40 to-transparent blur-[80px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <RevealSection>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-2">
                  <Brain size={16} />
                  <span>Per i psicologi</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight">
                  Una comunità per <span className="text-[var(--color-primary)]">crescere</span> come professionista.
                </h1>
              </RevealSection>
              
              <RevealSection stagger={1}>
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
                  La professione dello psicologo può essere straordinaria, ma anche complessa e solitaria. Applica APS nasce per creare una comunità professionale in cui psicologi e psicoterapeuti possano sentirsi sostenuti, valorizzati e accompagnati nella propria crescita clinica e umana.
                </p>
              </RevealSection>

              <RevealSection stagger={2}>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="https://forms.gle/mg2apJoAuGdDYHZY8" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto h-12 text-base shadow-xl shadow-[var(--color-primary)]/20">
                      Invia la tua Candidatura
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </RevealSection>
            </div>

            <RevealSection stagger={2}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center">
                <div className="text-center p-6 opacity-50">
                  <Network size={64} className="mx-auto mb-4 text-blue-500" />
                  <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-on-surface-variant)]">[Placeholder Immagine Team/Studio]</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Vantaggi della Rete ─── */}
      <section className="py-20 md:py-32 bg-[var(--color-surface-container-low)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
                Entrando in Applica APS potrai accedere a:
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Supervisione Clinica", desc: "Supervisione e confronto clinico per sviluppare maggiore sicurezza e competenza nella pratica professionale." },
              { icon: BookOpen, title: "Formazione Continua", desc: "Formazione continua orientata all'integrazione tra teoria e pratica clinica." },
              { icon: UsersRound, title: "Comunità", desc: "Comunità professionale basata su collaborazione, supporto reciproco e condivisione di esperienze." },
              { icon: UserPlus, title: "Invio Pazienti", desc: "Invio di pazienti attraverso i servizi e i progetti dell'Associazione." },
              { icon: Target, title: "Progetti Sociali", desc: "Opportunità di partecipare a progetti sociali innovativi, contribuendo a rendere la psicologia più accessibile." },
              { icon: Network, title: "Lavoro in Rete", desc: "Collaborazione con altri professionisti della salute mentale, favorendo il lavoro in rete." },
              { icon: Library, title: "Risorse Cliniche", desc: "Accesso a materiali, strumenti e risorse psicoeducative utili per il lavoro clinico." },
              { icon: Award, title: "Visibilità", desc: "Visibilità professionale all'interno della rete Applica APS e delle attività promosse." },
            ].map((step, i) => (
              <RevealSection key={i} stagger={i + 1}>
                <div className="bg-white rounded-3xl p-6 border border-[var(--color-outline-variant)]/50 ambient-shadow h-full transition-all duration-300 interactive-card hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-colors duration-300">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection stagger={2}>
            <div className="mt-16 md:mt-24 py-12 md:py-16 max-w-4xl mx-auto text-center px-4 relative">
              <div className="space-y-10">
                <p className="text-2xl md:text-[1.75rem] text-[var(--color-on-surface)] leading-[1.6] italic font-light max-w-3xl mx-auto text-balance">
                  Applica APS non è solo un luogo dove collaborare.
                </p>
                
                <div className="w-12 h-px bg-[var(--color-outline-variant)] mx-auto opacity-70"></div>
                
                <p className="text-[0.8rem] md:text-sm font-medium text-[var(--color-on-surface-variant)] uppercase tracking-[0.2em] md:tracking-[0.25em] text-balance mx-auto max-w-2xl">
                  È una comunità in cui crescere, confrontarsi, costruire relazioni professionali significative e contribuire a una psicologia più accessibile, umana e vicina alle persone.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
      
      {/* ─── Informazioni sulle Attività ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
           <RevealSection>
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-6">Informazioni sulle Attività</h2>
             <div className="bg-[var(--color-surface-container)] rounded-3xl p-8 md:p-10 border border-[var(--color-outline-variant)] border-dashed text-left">
                <div className="text-[var(--color-on-surface-variant)] space-y-4">
                  <p>
                    <strong>Cerchiamo professionisti motivati a:</strong> crescere nella pratica clinica, lavorare in rete, partecipare a supervisioni e contribuire a un progetto sociale innovativo.
                  </p>
                  <p>
                    La partecipazione alle attività associative prevede un contributo mensile riservato ai professionisti. I dettagli sui costi saranno forniti nel modulo di candidatura.
                  </p>
                  <p>
                    Eventuali corsi, supervisioni, eventi o attività con formatori esterni potranno prevedere un contributo aggiuntivo, comunicato preventivamente in base ai costi dell'iniziativa.
                  </p>
                </div>
             </div>
           </RevealSection>
        </div>
      </section>
    </>
  )
}
