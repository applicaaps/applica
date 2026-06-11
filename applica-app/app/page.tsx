"use client"

import Link from "next/link"
import { ArrowRight, Heart, Users, Brain, CheckCircle2 } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { PrinciplesCarousel } from "@/components/PrinciplesCarousel"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7 space-y-8">
            <RevealSection>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[var(--color-on-surface)] tracking-tight">
                Psicologia concreta, accessibile e{" "}
                <span className="text-[#b59540]">trasformativa.</span>
              </h1>
            </RevealSection>

            <RevealSection stagger={1}>
              <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed prose-pretty">
                Applica APS è una comunità di psicologi e psicoterapeuti che sostiene le persone nel loro percorso di benessere e accompagna i professionisti nella crescita clinica e umana.
              </p>
            </RevealSection>

            <RevealSection stagger={2}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contatti">
                  <Button size="lg" className="w-full sm:w-auto h-12 text-base shadow-xl shadow-[var(--color-primary)]/20">
                    Unisciti ad Applica
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="/chi-siamo"
                  className="bg-[var(--color-surface-container)] text-[var(--color-on-surface)] font-medium text-sm px-7 py-3.5 rounded-xl border border-[var(--color-outline-variant)] flex items-center justify-center pressable hover:bg-[var(--color-surface-container-high)]"
                >
                  Il nostro obiettivo e i nostri valori
                </Link>
              </div>
            </RevealSection>
          </div>

          <div className="lg:col-span-5 relative">
            <RevealSection stagger={2}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden ambient-shadow-lg bg-[var(--color-surface-container)] relative border-4 border-white flex items-center justify-center text-[var(--color-outline)]">
                <div className="text-center p-6 opacity-50">
                  <Brain size={64} className="mx-auto mb-4 text-[var(--color-primary)]" />
                  <span className="text-sm font-medium uppercase tracking-widest text-[var(--color-on-surface-variant)]">Foto Applica Associazione</span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── Statement ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
              <div className="md:col-span-8">
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-on-surface)] leading-[1.1] tracking-tight">
                  Crediamo in una psicologia che si fa vicina, concreta e quotidiana.
                </h2>
              </div>
              <div className="md:col-span-4">
                <div className="w-12 h-1 bg-[var(--color-primary)] mb-6 rounded-full" />
                <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed prose-pretty">
                  Ogni percorso parte dall&apos;ascolto della persona, si fonda su evidenze cliniche e si traduce in strumenti reali per la vita di tutti i giorni.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Principi ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-surface-container-low)]">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
                Quattro principi guidano il nostro lavoro
              </h2>
              <p className="text-lg text-[var(--color-on-surface-variant)]">
                Non sono slogan: sono i criteri con cui valutiamo ogni decisione clinica e organizzativa.
              </p>
            </div>
          </RevealSection>

          <RevealSection stagger={1}>
            <PrinciplesCarousel />
          </RevealSection>
        </div>
      </section>

      {/* ─── Professionisti ─── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <RevealSection>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-10">
                  <div className="rounded-2xl w-full aspect-[3/4] bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-outline)] ambient-shadow relative overflow-hidden">
                    <div className="flex flex-col items-center">
                      <Users size={28} className="mb-2 opacity-40" />
                      <span className="text-xs font-medium opacity-50">Community</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl w-full aspect-[3/4] bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-outline)] ambient-shadow relative overflow-hidden">
                    <div className="flex flex-col items-center">
                      <Heart size={28} className="mb-2 opacity-40" />
                      <span className="text-xs font-medium opacity-50">Supervisione</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] leading-tight">
                Uno spazio di crescita per chi sceglie la professione clinica
              </h2>
            </RevealSection>

            <RevealSection stagger={1}>
              <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed prose-pretty">
                Entrare nella rete Applica significa accedere a supervisione, formazione e strumenti condivisi con altri professionisti che lavorano con lo stesso rigore.
              </p>
            </RevealSection>

            <RevealSection stagger={2}>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[var(--color-success-green)] shrink-0 mt-0.5" size={20} />
                  <span className="text-base text-[var(--color-on-surface)]">Supervisione clinica e intervisione tra pari, ogni mese</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[var(--color-success-green)] shrink-0 mt-0.5" size={20} />
                  <span className="text-base text-[var(--color-on-surface)]">Formazione continua su protocolli basati su evidenze scientifiche</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[var(--color-success-green)] shrink-0 mt-0.5" size={20} />
                  <span className="text-base text-[var(--color-on-surface)]">Strumenti digitali e materiali clinici condivisi</span>
                </li>
              </ul>
            </RevealSection>

            <RevealSection stagger={3}>
              <div className="pt-2">
                <Link
                  href="/chi-siamo"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-base hover:gap-3 transition-[gap] duration-200"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  Scopri come collaborare
                  <ArrowRight size={18} />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── CTA Finale ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative space-y-8" style={{ zIndex: 1 }}>
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
              Iniziamo un percorso insieme?
            </h2>
          </RevealSection>

          <RevealSection stagger={1}>
            <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto leading-relaxed">
              Che tu stia cercando supporto psicologico o voglia unirti alla nostra rete di professionisti, siamo qui.
            </p>
          </RevealSection>

          <RevealSection stagger={2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                href="/pazienti"
                className="bg-white text-[var(--color-primary)] font-semibold text-sm px-8 py-4 rounded-xl pressable hover:bg-white/90 text-center w-full sm:w-auto"
              >
                Unisciti ad Applica
              </Link>
              <Link
                href="/professionisti"
                className="border-2 border-white/25 text-white font-semibold text-sm px-8 py-4 rounded-xl pressable hover:bg-white/10 text-center w-full sm:w-auto"
              >
                Diventa professionista Applica
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
