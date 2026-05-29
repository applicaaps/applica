import Link from "next/link"
import { 
  ArrowRight, 
  Brain, 
  Frown, 
  Smile, 
  Users, 
  Baby, 
  Briefcase, 
  UserPlus, 
  HeartCrack,
  GraduationCap,
  BookOpen,
  ArrowUpRight
} from "lucide-react"

export default function CosaFacciamo() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
            <div className="flex flex-col items-center">
              <Users size={64} className="mb-4 opacity-50" />
              <span className="font-medium text-lg">Immagine Studio Terapeutico</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 md:px-6 container mx-auto w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-deep-teal)] mb-6">
              Scienza e cura per il benessere psicologico.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] mb-8">
              Offriamo percorsi di supporto clinico basati su evidenze scientifiche e programmi di crescita professionale per psicologi.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Supporto Psicologico (Patients) */}
      <section className="py-24 px-4 md:px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest block mb-4">
              Per i Pazienti
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
              Supporto Psicologico
            </h2>
            <p className="text-base text-[var(--color-on-surface-variant)]">
              Un approccio empatico e strutturato per affrontare le sfide della vita quotidiana e ritrovare il proprio equilibrio interiore.
            </p>
          </div>
          <Link href="/contatti" className="group flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-xl text-sm font-bold hover:scale-[1.02] transition-transform duration-300 shadow-sm uppercase">
            PRENOTA UN COLLOQUIO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid Areas */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Ansia */}
          <div className="md:col-span-2 lg:col-span-2 bg-[var(--color-surface-container-low)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors ambient-shadow smooth-card">
            <Brain className="text-[var(--color-primary)] mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-3 text-[var(--color-deep-teal)]">Ansia e Stress</h3>
            <p className="text-base text-[var(--color-on-surface-variant)]">
              Gestione di attacchi di panico, ansia generalizzata e situazioni di forte stress lavorativo o personale.
            </p>
          </div>
          {/* Depressione */}
          <div className="md:col-span-2 lg:col-span-2 bg-[var(--color-surface-container-low)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors ambient-shadow smooth-card">
            <Frown className="text-[var(--color-primary)] mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-3 text-[var(--color-deep-teal)]">Depressione</h3>
            <p className="text-base text-[var(--color-on-surface-variant)]">
              Percorsi clinici per affrontare stati depressivi, perdita di motivazione e disturbi dell'umore.
            </p>
          </div>
          {/* Autostima */}
          <div className="md:col-span-2 lg:col-span-2 bg-[var(--color-surface-container-low)] p-8 rounded-xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors ambient-shadow smooth-card">
            <Smile className="text-[var(--color-primary)] mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-3 text-[var(--color-deep-teal)]">Autostima</h3>
            <p className="text-base text-[var(--color-on-surface-variant)]">
              Lavoro sulla consapevolezza di sé, accettazione e potenziamento delle risorse personali.
            </p>
          </div>
          
          {/* Relazioni (Large Card) */}
          <div className="md:col-span-4 lg:col-span-3 bg-[var(--color-deep-teal)] text-white p-10 rounded-xl flex flex-col justify-between ambient-shadow smooth-card">
            <div>
              <Users className="mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-4">Relazioni e Coppia</h3>
              <p className="text-lg opacity-90">
                Supporto per superare conflitti relazionali, difficoltà di comunicazione e crisi di coppia.
              </p>
            </div>
            <Link href="/contatti" className="mt-8 text-[var(--color-primary-fixed)] font-bold flex items-center gap-2 hover:underline text-sm uppercase">
              Approfondisci <ArrowUpRight size={18} />
            </Link>
          </div>
          
          {/* Altre aree (Detailed Grid) */}
          <div className="md:col-span-4 lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="bg-[var(--color-surface-container-highest)] p-6 rounded-xl border border-[var(--color-outline-variant)] smooth-card">
              <Baby className="text-[var(--color-primary)] mb-3" size={28} />
              <h4 className="font-bold text-lg text-[var(--color-deep-teal)]">Età Evolutiva</h4>
            </div>
            <div className="bg-[var(--color-surface-container-highest)] p-6 rounded-xl border border-[var(--color-outline-variant)] smooth-card">
              <Briefcase className="text-[var(--color-primary)] mb-3" size={28} />
              <h4 className="font-bold text-lg text-[var(--color-deep-teal)]">Career Coaching</h4>
            </div>
            <div className="bg-[var(--color-surface-container-highest)] p-6 rounded-xl border border-[var(--color-outline-variant)] smooth-card">
              <UserPlus className="text-[var(--color-primary)] mb-3" size={28} />
              <h4 className="font-bold text-lg text-[var(--color-deep-teal)]">Sostegno Genitoriale</h4>
            </div>
            <div className="bg-[var(--color-surface-container-highest)] p-6 rounded-xl border border-[var(--color-outline-variant)] smooth-card">
              <HeartCrack className="text-[var(--color-primary)] mb-3" size={28} />
              <h4 className="font-bold text-lg text-[var(--color-deep-teal)]">Disturbi Alimentari</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Per Professionisti (Psychologists) */}
      <section className="py-24 bg-[var(--color-surface-container-low)]">
        <div className="px-4 md:px-6 container mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-sm font-bold text-[var(--color-tertiary)] uppercase tracking-widest block mb-4">
                Per Psicologi e Psicoterapeuti
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-6">
                Eccellenza Clinica e Formazione Permanente
              </h2>
              <p className="text-base text-[var(--color-on-surface-variant)] mb-10 leading-relaxed">
                Applica APS non è solo un centro clinico, ma una comunità di professionisti dediti alla crescita e al confronto. Promuoviamo la cultura psicologica attraverso supervisioni e gruppi di studio peer-to-peer.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] p-3 rounded-lg shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[var(--color-deep-teal)]">Supervisione Clinica</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-base">
                      Incontri individuali o di gruppo per discutere casi clinici complessi sotto la guida di supervisori esperti.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] p-3 rounded-lg shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[var(--color-deep-teal)]">Formazione Continua</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-base">
                      Workshop e seminari sulle ultime evidenze in ambito psicoterapeutico e neuroscientifico.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] p-3 rounded-lg shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[var(--color-deep-teal)]">Gruppi di Studio</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-base">
                      Spazi di co-progettazione e approfondimento teorico per giovani professionisti.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/chi-siamo" className="mt-12 inline-block bg-[var(--color-deep-teal)] text-[var(--color-on-primary)] px-8 py-4 rounded-xl text-sm font-bold hover:scale-[1.02] transition-transform duration-300 uppercase shadow-sm">
                CANDIDATI COME PROFESSIONISTA
              </Link>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="aspect-square rounded-full overflow-hidden border-[12px] border-[var(--color-surface)] relative z-10 ambient-shadow bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
                 <div className="flex flex-col items-center">
                    <Users size={48} className="mb-4 opacity-50" />
                    <span className="font-medium">Immagine Professionisti</span>
                  </div>
              </div>
              {/* Decorative shapes */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[var(--color-soft-clay)]/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[var(--color-surface-container)] rounded-3xl p-10 md:p-16 border border-[var(--color-outline-variant)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -mr-16 -mt-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-6">
            Pronto a iniziare il tuo percorso?
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 italic">
            "Il primo passo verso il cambiamento è la consapevolezza. Il secondo è l'azione."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all uppercase text-sm">
              Contattaci Oggi
            </Link>
            <Link href="/materiali" className="bg-[var(--color-surface)] text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-10 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)]/5 transition-all uppercase text-sm">
              Scopri i Materiali
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
