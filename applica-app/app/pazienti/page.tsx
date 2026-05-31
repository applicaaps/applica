import Link from "next/link"
import { ArrowRight, Heart, Calendar, MessageCircle, Star } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { Button } from "@/components/ui/Button"

export default function PazientiPage() {
  return (
    <>
      {/* ─── Hero Pazienti ─── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
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
                  <Heart size={16} />
                  <span>Percorsi per i Pazienti</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight">
                  Inizia il tuo <span className="text-[var(--color-primary)]">viaggio</span> verso il benessere.
                </h1>
              </RevealSection>
              
              <RevealSection stagger={1}>
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
                  [Placeholder: Descrizione introduttiva su come Applica accoglie i pazienti, spiegando che offriamo supporto psicologico evidence-based con grande attenzione alla dimensione umana.]
                </p>
              </RevealSection>

              <RevealSection stagger={2}>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contatti">
                    <Button size="lg" className="w-full sm:w-auto h-12 text-base shadow-xl shadow-[var(--color-primary)]/20">
                      Prenota una consulenza
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

      {/* ─── Come Funziona ─── */}
      <section className="py-20 md:py-32 bg-[var(--color-surface-container-low)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
                Come funziona il nostro percorso
              </h2>
              <p className="text-lg text-[var(--color-on-surface-variant)]">
                [Placeholder: Spiegazione sintetica dei passaggi (primo contatto, colloquio conoscitivo, definizione obiettivi).]
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "1. Primo Contatto", desc: "[Placeholder testo step 1]" },
              { icon: Calendar, title: "2. Valutazione", desc: "[Placeholder testo step 2]" },
              { icon: Star, title: "3. Il Percorso", desc: "[Placeholder testo step 3]" },
            ].map((step, i) => (
              <RevealSection key={i} stagger={i + 1}>
                <div className="bg-white rounded-3xl p-8 border border-[var(--color-outline-variant)]/50 ambient-shadow h-full">
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
        </div>
      </section>
      
      {/* ─── Info/FAQ Placeholder ─── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
           <RevealSection>
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-6">Domande Frequenti</h2>
             <div className="bg-[var(--color-surface-container)] rounded-3xl p-10 border border-[var(--color-outline-variant)] border-dashed">
                <p className="text-[var(--color-on-surface-variant)]">
                  [Placeholder per accordion o lista di FAQ: Costi, durata sedute, modalità online/presenza]
                </p>
             </div>
           </RevealSection>
        </div>
      </section>
    </>
  )
}
