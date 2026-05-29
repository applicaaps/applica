import Link from "next/link"
import { Users, Heart, Brain, GraduationCap, ArrowRight } from "lucide-react"

export default function ChiSiamo() {
  return (
    <>
      {/* Hero Section: Storytelling Entry */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary-fixed)]/30 px-3 py-1 rounded-full">
              Chi Siamo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-deep-teal)] text-balance leading-tight">
              Trasformare la salute mentale in un bene comune.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-xl">
              Applica APS nasce dalla convinzione che il benessere psicologico non debba essere un lusso, ma un diritto accessibile, fondato sulla scienza e profondamente umano.
            </p>
          </div>
          <div className="lg:col-span-6 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="aspect-square rounded-3xl overflow-hidden ambient-shadow rotate-3 scale-95 border-8 border-white bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)] transition-transform duration-500 hover:rotate-0">
               {/* Image Placeholder */}
               <div className="flex flex-col items-center">
                  <Users size={64} className="mb-4 opacity-50" />
                  <span className="font-medium">Immagine Community</span>
                </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--color-soft-clay)]/90 p-8 rounded-2xl ambient-shadow max-w-[240px] -rotate-3 hidden md:block">
              <p className="text-base text-[var(--color-on-secondary-fixed)] italic">
                "Insieme, rendiamo la cura un'esperienza quotidiana e condivisa."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Bento Grid Style */}
      <section className="bg-[var(--color-surface-container-low)] py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-4">La nostra Missione</h2>
            <p className="text-lg text-[var(--color-on-surface-variant)]">
              Promuoviamo una cultura della salute mentale che superi lo stigma, offrendo percorsi concreti e sostenibili per ogni individuo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission Item 1 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--color-primary-fixed)]/20 rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-deep-teal)] mb-3">Comunità Inclusiva</h3>
              <p className="text-base text-[var(--color-on-surface-variant)]">
                Promuovere la salute mentale nella comunità attraverso iniziative di sensibilizzazione e supporto reciproco.
              </p>
            </div>
            {/* Mission Item 2 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--color-primary-fixed)]/20 rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-deep-teal)] mb-3">Servizi Accessibili</h3>
              <p className="text-base text-[var(--color-on-surface-variant)]">
                Offrire servizi professionali con tariffe calmierate, garantendo che nessuno venga lasciato indietro per motivi economici.
              </p>
            </div>
            {/* Mission Item 3 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--color-primary-fixed)]/20 rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-deep-teal)] mb-3">Rigore Scientifico</h3>
              <p className="text-base text-[var(--color-on-surface-variant)]">
                Applicare metodologie validate e aggiornate, con un team di professionisti altamente qualificati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Asymmetric Layout */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-primary-container)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    <Heart size={48} className="opacity-50" />
                  </div>
                  <div className="p-6 bg-[var(--color-tertiary-fixed)]/20 rounded-2xl">
                    <h4 className="text-xl font-bold text-[var(--color-on-tertiary-fixed)] mb-1">Umana</h4>
                    <p className="text-sm font-semibold text-[var(--color-on-tertiary-fixed-variant)]">L'ascolto prima di tutto.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="p-6 bg-[var(--color-secondary-container)] rounded-2xl">
                    <h4 className="text-xl font-bold text-[var(--color-on-secondary-container)] mb-1">Accessibile</h4>
                    <p className="text-sm font-semibold text-[var(--color-on-secondary-fixed-variant)]">Senza barriere, per tutti.</p>
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-secondary-fixed-dim)] flex items-center justify-center text-[var(--color-on-secondary-fixed)]">
                    <Users size={48} className="opacity-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)]">I Valori che guidano il nostro agire.</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">1</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-on-surface)] mb-2">Accessibilità</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)]">
                      Rimuoviamo gli ostacoli fisici, economici e sociali che impediscono l'accesso alla cura psicologica.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">2</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-on-surface)] mb-2">Scientificità</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)]">
                      Ogni nostro intervento è guidato da evidenze cliniche e protocolli scientifici aggiornati.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">3</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-on-surface)] mb-2">Praticità</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)]">
                      Forniamo strumenti concreti e spendibili nella vita di tutti i giorni per gestire le sfide psicologiche.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">4</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-on-surface)] mb-2">Umanità</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)]">
                      Mettiamo la persona al centro, con un approccio empatico che rispetta la dignità e l'unicità di ognuno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-deep-teal)] py-20">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Vuoi far parte della nostra rete o richiedere supporto?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] px-8 py-4 rounded-xl font-bold text-base hover:bg-[var(--color-primary-fixed-dim)] transition-all shadow-lg active:scale-95 smooth-btn text-center">
              Richiedi un Colloquio
            </Link>
            <Link href="/contatti" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all active:scale-95 smooth-btn text-center">
              Diventa Socio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
