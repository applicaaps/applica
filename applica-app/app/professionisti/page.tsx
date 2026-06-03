import Link from "next/link"
import { ArrowRight, Brain, Network, BookOpen, Users } from "lucide-react"
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
                  <span>Per i Professionisti</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight">
                  Unisciti alla <span className="text-[var(--color-primary)]">Rete Clinica</span> di Eccellenza.
                </h1>
              </RevealSection>
              
              <RevealSection stagger={1}>
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
                  Una rete clinica orientata alla crescita professionale, alla pratica supervisionata e allo sviluppo di una psicologia più accessibile, concreta e umana.
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
                Perché entrare in Applica
              </h2>
              <p className="text-lg text-[var(--color-on-surface-variant)]">
                [Placeholder: Testo che introduce i vantaggi dell'adesione per il professionista psicologo o psicoterapeuta.]
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Supervisione Costante", desc: "[Placeholder testo vantaggio 1 - intervisioni e supervisioni mensili]" },
              { icon: BookOpen, title: "Formazione Continua", desc: "[Placeholder testo vantaggio 2 - corsi e aggiornamenti clinici]" },
              { icon: Network, title: "Materiali e Rete", desc: "[Placeholder testo vantaggio 3 - invio pazienti e condivisione protocolli]" },
            ].map((step, i) => (
              <RevealSection key={i} stagger={i + 1}>
                <div className="group bg-white hover:bg-[var(--color-primary)] rounded-3xl p-8 border border-[var(--color-outline-variant)]/50 ambient-shadow h-full transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-white/20 text-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] group-hover:text-white mb-3 transition-colors duration-300">{step.title}</h3>
                  <p className="text-[var(--color-on-surface-variant)] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
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
