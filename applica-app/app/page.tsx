import Link from "next/link"
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-fixed)]/30 text-[var(--color-on-primary-fixed-variant)]">
              <ShieldCheck size={18} />
              <span className="text-sm font-medium tracking-wide">BENVENUTI IN APPLICA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-deep-teal)]">
              Psicologia concreta, accessibile e trasformativa
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-xl">
              Accogliamo persone e professionisti in uno spazio dedicato alla salute mentale, alla crescita emotiva e allo sviluppo professionale. Un approccio che unisce scienza ed empatia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contatti" className="bg-[var(--color-primary)] text-[var(--color-on-primary)] font-medium text-sm px-8 py-4 rounded-xl ambient-shadow hover:bg-[var(--color-primary-container)] transition-all duration-300 flex items-center justify-center gap-2 smooth-btn">
                RICHIEDI UN COLLOQUIO
                <ArrowRight size={20} />
              </Link>
              <Link href="/chi-siamo" className="bg-[var(--color-surface-container-highest)] text-[var(--color-deep-teal)] font-medium text-sm px-8 py-4 rounded-xl border border-[var(--color-outline-variant)]/30 hover:bg-[var(--color-secondary-container)] transition-all duration-300 flex items-center justify-center smooth-btn">
                DIVENTA PROFESSIONISTA APPLICA
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden ambient-shadow rotate-3 hover:rotate-0 transition-transform duration-500 smooth-card bg-[var(--color-surface-dim)] relative">
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-outline)]">
                <Users size={64} className="mb-4 opacity-50" />
                <span className="font-medium">Immagine Professionista</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl ambient-shadow hidden sm:block max-w-[240px] smooth-card">
              <div className="flex gap-1 text-[var(--color-primary)] mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm font-medium italic text-[var(--color-on-surface-variant)]">
                "Un percorso reale verso il benessere. Professionalità e ascolto profondo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Phrase Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[var(--color-soft-clay)]/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden smooth-card hover:bg-[var(--color-soft-clay)]/15 transition-colors">
            <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full -translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-secondary)]/5 rounded-full translate-x-24 translate-y-24"></div>
            
            <div className="max-w-3xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
              <Heart size={48} className="text-[var(--color-primary)]" fill="currentColor" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] leading-snug">
                Non crediamo in una psicologia distante. <br className="hidden md:block"/> 
                Crediamo in una psicologia umana, vicina e reale.
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-secondary)] italic">
                Ogni storia merita uno spazio sicuro, basato sull'evidenza scientifica ma guidato dal calore dell'incontro umano. Siamo qui per accompagnarti in ogni passo della tua trasformazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Bento Grid Section */}
      <section className="py-24 bg-[var(--color-surface-container-low)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[var(--color-primary)] mb-4 tracking-wider">I NOSTRI PILASTRI</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)]">
                Una missione basata sul valore della persona e del rigore scientifico
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Column 1: Scientifica */}
            <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-[var(--color-outline-variant)]/30 ambient-shadow flex flex-col gap-6 smooth-card">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-deep-teal)]">Scientifica</h4>
              <p className="text-base text-[var(--color-on-surface-variant)]">
                Approcci clinici basati sulle evidenze (EBP) per garantire trattamenti efficaci e percorsi di crescita verificabili.
              </p>
            </div>
            
            {/* Column 2: Accessibile & Umana (Stacked) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-[var(--color-primary)] p-8 rounded-3xl text-[var(--color-on-primary)] flex-1 flex flex-col gap-6 smooth-card">
                <Users size={32} />
                <h4 className="text-xl font-bold">Accessibile</h4>
                <p className="text-base opacity-90">
                  Abbattiamo le barriere economiche e sociali per rendere il benessere psicologico un diritto di tutti, non un lusso.
                </p>
              </div>
              <div className="bg-[var(--color-secondary-container)] p-8 rounded-3xl text-[var(--color-on-secondary-container)] flex-1 flex flex-col gap-6 smooth-card">
                <Heart size={32} />
                <h4 className="text-xl font-bold">Umana</h4>
                <p className="text-base opacity-90">
                  L'accoglienza è il cuore del nostro lavoro. Mettiamo la relazione al centro di ogni intervento.
                </p>
              </div>
            </div>
            
            {/* Column 3: Pratica & Image */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden h-48 ambient-shadow smooth-card bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center">
                  <Users size={32} className="mb-2 opacity-50" />
                  <span className="text-sm font-medium">Immagine Pratica</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-outline-variant)]/30 ambient-shadow flex flex-col gap-6 flex-1 smooth-card">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-deep-teal)]">Pratica</h4>
                <p className="text-base text-[var(--color-on-surface-variant)]">
                  Soluzioni concrete e strumenti quotidiani per gestire le sfide emotive e migliorare la qualità della vita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Collaboration Section */}
      <section className="py-24 bg-[var(--color-surface)] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl w-full h-64 bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)] ambient-shadow smooth-card relative overflow-hidden">
                   <div className="flex flex-col items-center">
                      <Users size={32} className="mb-2 opacity-50" />
                      <span className="text-sm font-medium">Community</span>
                    </div>
                </div>
                <div className="bg-[var(--color-deep-teal)] p-6 rounded-2xl text-[var(--color-on-primary)] smooth-card">
                  <p className="text-4xl font-bold mb-2">150+</p>
                  <p className="text-sm font-medium opacity-80">Professionisti in Rete</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[var(--color-soft-clay)] p-6 rounded-2xl text-[var(--color-on-secondary-fixed)] smooth-card">
                  <p className="text-4xl font-bold mb-2">2k+</p>
                  <p className="text-sm font-medium opacity-80">Percorsi Avviati</p>
                </div>
                <div className="rounded-2xl w-full h-64 bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)] ambient-shadow smooth-card relative overflow-hidden">
                  <div className="flex flex-col items-center">
                      <Heart size={32} className="mb-2 opacity-50" />
                      <span className="text-sm font-medium">Colloquio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-sm font-bold text-[var(--color-primary)] tracking-wider">LAVORA CON NOI</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] leading-tight">
              Uno spazio di crescita per chi sceglie di prendersi cura
            </h3>
            <p className="text-lg text-[var(--color-on-surface-variant)]">
              Entrare nel network Applica significa far parte di una comunità di professionisti che condividono valori di rigore scientifico e accessibilità. Offriamo supervisione, formazione e una piattaforma per far crescere la tua pratica professionale.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start smooth-card p-2 -ml-2 rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors cursor-default">
                <CheckCircle2 className="text-[var(--color-success-green)] shrink-0" size={24} />
                <span className="text-base text-[var(--color-on-surface)]">Supervisione clinica costante e intervisione tra pari.</span>
              </li>
              <li className="flex gap-3 items-start smooth-card p-2 -ml-2 rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors cursor-default">
                <CheckCircle2 className="text-[var(--color-success-green)] shrink-0" size={24} />
                <span className="text-base text-[var(--color-on-surface)]">Formazione continua su approcci basati sull'evidenza.</span>
              </li>
              <li className="flex gap-3 items-start smooth-card p-2 -ml-2 rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors cursor-default">
                <CheckCircle2 className="text-[var(--color-success-green)] shrink-0" size={24} />
                <span className="text-base text-[var(--color-on-surface)]">Strumenti digitali integrati per la gestione dei pazienti.</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/chi-siamo" className="inline-flex items-center gap-2 text-[var(--color-deep-teal)] font-bold border-b-2 border-[var(--color-deep-teal)] pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all smooth-btn">
                Scopri come collaborare
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-deep-teal)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary-fixed)] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Iniziamo un percorso insieme?</h2>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Che tu sia una persona in cerca di supporto o un professionista desideroso di unirsi a noi, abbiamo uno spazio pronto ad accoglierti.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="bg-white text-[var(--color-deep-teal)] font-bold text-sm px-10 py-5 rounded-full hover:bg-[var(--color-surface-container-high)] transition-all shadow-lg smooth-btn text-center w-full sm:w-auto">
              RICHIEDI UN COLLOQUIO
            </Link>
            <Link href="/chi-siamo" className="bg-transparent border-2 border-white/30 text-white font-bold text-sm px-10 py-5 rounded-full hover:bg-white/10 transition-all smooth-btn text-center w-full sm:w-auto">
              DIVENTA PROFESSIONISTA
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
