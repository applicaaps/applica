"use client"

import Link from "next/link"
import { Users, Heart, Brain, GraduationCap, ArrowRight, BookOpen, HeartHandshake, Route, Layers, Network } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"

export default function ChiSiamo() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-4 pb-20 md:pt-8 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealSection>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-on-surface)] leading-[1.1] tracking-tight">
                La salute mentale è un diritto, non un lusso
              </h1>
            </RevealSection>
            <RevealSection stagger={1}>
              <div className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed prose-pretty space-y-4">
                <p>
                  Applica APS nasce dalla convinzione che il benessere psicologico non debba essere un privilegio.
                </p>
                <p>
                  Applica APS è un&apos;associazione di psicologi e psicoterapeuti che offre percorsi clinici fondati sulle evidenze scientifiche, accessibili a tutti e guidati dalla relazione umana. Lavoriamo con un approccio fondato sulla scienza e sulla relazione umana.
                </p>
              </div>
            </RevealSection>
          </div>
          <div className="lg:col-span-6 relative">
            <RevealSection stagger={2}>
              <div className="aspect-square rounded-2xl overflow-hidden ambient-shadow-lg border-4 border-white bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center">
                  <Users size={56} className="mb-3 opacity-40" />
                  <span className="text-sm font-medium opacity-50">Foto Community</span>
                </div>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ─── Missione ─── */}
      <section className="bg-[var(--color-surface-container-low)] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">La nostra missione</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                Promuovere una cultura della salute mentale che superi lo stigma, con percorsi concreti e sostenibili.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RevealSection stagger={1}>
              <div className="bg-[var(--color-primary)] p-8 rounded-2xl text-[var(--color-on-primary)] h-full flex flex-col gap-6 interactive-card">
                <HeartHandshake size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Clinica sociale</h3>
                  <p className="text-sm opacity-85 leading-relaxed">
                    Percorsi psicologici accessibili e umani per la comunità.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection stagger={2}>
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-outline-variant)] h-full flex flex-col gap-6 interactive-card">
                <Route size={24} className="text-[var(--color-primary)]" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2">Formazione</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Crescita pratica, formazione, supervisione per professionisti della salute mentale.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection stagger={3}>
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-outline-variant)] h-full flex flex-col gap-6 interactive-card">
                <Layers size={24} className="text-[var(--color-primary)]" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2">Materiale didattico</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Strumenti psicoeducativi concreti per trasformare teoria e pratica. Innovazione, strumenti terapeutici, kit e materiali digitali.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection stagger={4}>
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-outline-variant)] h-full flex flex-col gap-6 interactive-card">
                <Network size={24} className="text-[var(--color-primary)]" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2">Comunità</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Una rete di persone e professionisti che condividono valori, sostegno reciproco, collaborazione e crescita, per costruire una psicologia più vicina alle persone.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Fondatrice ─── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <RevealSection>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden ambient-shadow-lg border-4 border-white bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center">
                  <Users size={56} className="mb-3 opacity-40" />
                  <span className="text-sm font-medium opacity-50">Foto Danubia Macario</span>
                </div>
              </div>
            </RevealSection>
          </div>
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] leading-tight">
                La fondatrice
              </h2>
            </RevealSection>
            <RevealSection stagger={1}>
              <div className="space-y-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed prose-pretty">
                <p>
                  Applica APS nasce dalla visione di Danubia Macario, psicologa iscritta all&apos;Albo degli Psicologi della Puglia (n. 8320), con il desiderio di rendere la psicologia più accessibile, concreta e vicina alle persone.
                </p>
                <p>
                  Nel suo percorso professionale ha sempre creduto che la competenza clinica debba camminare insieme all&apos;umanità, all&apos;etica e alla responsabilità sociale. Per questo Applica è stata costruita su valori come accoglienza, rispetto, professionalità, collaborazione, crescita continua e attenzione alla persona.
                </p>
                <p>
                  L&apos;obiettivo non è soltanto offrire servizi psicologici, ma creare una comunità in cui persone e professionisti possano sentirsi sostenuti, valorizzati e accompagnati nel proprio percorso di sviluppo.
                </p>
                <p>
                  Oggi questi valori guidano ogni progetto, attività e iniziativa promossa da Applica APS, con una convinzione semplice ma profonda: <br />
                  <span className="font-medium text-[var(--color-primary)]">il benessere psicologico non dovrebbe essere un privilegio, ma una possibilità concreta per tutti.</span>
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Valori ─── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 relative">
              <RevealSection>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
                      <Heart size={40} className="opacity-40" />
                    </div>
                    <div className="p-5 bg-[var(--color-tertiary-fixed)]/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-[var(--color-on-surface)] mb-1">Umana</h4>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">L&apos;ascolto prima di tutto.</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-10">
                    <div className="p-5 bg-[var(--color-secondary-container)] rounded-2xl">
                      <h4 className="text-lg font-bold text-[var(--color-on-secondary-container)] mb-1">Accessibile</h4>
                      <p className="text-sm text-[var(--color-on-secondary-container)]/70">Senza barriere, per tutti.</p>
                    </div>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-secondary-fixed-dim)]/30 flex items-center justify-center text-[var(--color-secondary)]">
                      <Users size={40} className="opacity-40" />
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <RevealSection>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)]">
                  I valori che guidano il nostro lavoro
                </h2>
              </RevealSection>

              <div className="space-y-6">
                <RevealSection stagger={1}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-1">Accessibilità</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        Rimuoviamo gli ostacoli fisici, economici e sociali che impediscono l&apos;accesso alla cura psicologica.
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection stagger={2}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-1">Scientificità</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        Ogni intervento è guidato da evidenze cliniche e protocolli scientifici aggiornati.
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection stagger={3}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-1">Praticità</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        Strumenti concreti e spendibili nella vita quotidiana per gestire le sfide emotive.
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection stagger={4}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-1">Umanità</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        La persona al centro, con un approccio empatico che rispetta la dignità e l&apos;unicità di ognuno.
                      </p>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[var(--color-primary)] py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Vuoi far parte della nostra rete o richiedere supporto?
            </h2>
          </RevealSection>
          <RevealSection stagger={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-sm pressable hover:bg-white/90 text-center"
              >
                Richiedi un colloquio conoscitivo
              </Link>
              <Link
                href="/contatti"
                className="border-2 border-white/25 text-white px-8 py-4 rounded-xl font-semibold text-sm pressable hover:bg-white/10 text-center"
              >
                Diventa socio della rete
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
