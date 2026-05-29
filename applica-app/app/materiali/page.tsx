import Link from "next/link"
import { Search, Grid2X2, Download, BookOpen, PenTool, LayoutTemplate, MonitorSmartphone, CheckCircle2, TrendingUp, Users, ArrowRight } from "lucide-react"

export default function Materiali() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-container)] pt-20 pb-16 px-4 md:px-6 border-b border-[var(--color-outline-variant)]">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] text-sm font-bold uppercase tracking-widest">
              RISORSE CLINICHE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-deep-teal)] mb-6 leading-tight">
              Strumenti pratici per il lavoro clinico
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] mb-8">
              Supportiamo l'intervento psicologico attraverso materiali scientificamente validati, progettati per facilitare l'espressione emotiva e la psicoeducazione in setting individuali e di gruppo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#catalogo" className="flex items-center gap-2 bg-[var(--color-deep-teal)] text-[var(--color-on-primary)] px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all smooth-btn">
                <Grid2X2 size={20} />
                Esplora il Catalogo
              </Link>
              <Link href="#gratuite" className="flex items-center gap-2 border-2 border-[var(--color-deep-teal)] text-[var(--color-deep-teal)] px-8 py-3 rounded-xl font-bold hover:bg-[var(--color-surface-container)] transition-all smooth-btn">
                <Download size={20} />
                Risorse Gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-[80px] bg-[var(--color-surface)]/80 backdrop-blur-md z-40 py-4 px-4 md:px-6 border-b border-[var(--color-outline-variant)]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={20} />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-base transition-shadow" 
              placeholder="Cerca materiali (es. CBT, Emozioni...)" 
              type="text"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-deep-teal)] text-[var(--color-on-primary)] text-sm font-bold">Tutti</button>
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Carte</button>
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Protocolli</button>
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Esperienziali</button>
          </div>
        </div>
      </section>

      {/* Bento Gallery Layout */}
      <section id="catalogo" className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Feature Card (Large) */}
            <div className="md:col-span-8 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow group smooth-card">
              <div className="md:w-1/2 h-64 md:h-auto relative bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)] overflow-hidden">
                <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-700">
                  <LayoutTemplate size={48} className="mb-2 opacity-50" />
                  <span className="font-medium text-sm">Materiale Clinico</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <span className="bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] px-3 py-1 rounded-full text-xs font-bold uppercase">Best Seller</span>
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-bold uppercase">Adulti</span>
                </div>
                <h3 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-4">Mappe Emotive: Kit Completo</h3>
                <p className="text-base text-[var(--color-on-surface-variant)] mb-6">
                  Un set di 52 carte illustrate per facilitare l'identificazione e la regolazione emotiva. Include manuale per il terapeuta e protocolli applicativi per l'approccio cognitivo-comportamentale.
                </p>
                <Link href="/contatti" className="w-fit bg-[var(--color-deep-teal)] text-[var(--color-on-primary)] px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all smooth-btn">
                  SCOPRI I MATERIALI
                </Link>
              </div>
            </div>

            {/* Category Card (Small) */}
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-xl p-8 flex flex-col hover:shadow-xl transition-shadow smooth-card">
              <div className="w-12 h-12 bg-[var(--color-primary-fixed)] rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-6 shrink-0">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-2">Protocolli CBT</h3>
              <p className="text-base text-[var(--color-on-surface-variant)] mb-6 flex-grow">
                Moduli strutturati per ansia, depressione e disturbi del sonno. Materiali fotocopiabili e schede di monitoraggio.
              </p>
              <Link href="/contatti" className="text-[var(--color-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase">
                SCOPRI I MATERIALI
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Grid Item 1 */}
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:shadow-xl transition-shadow group smooth-card">
              <div className="h-48 relative overflow-hidden bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                  <PenTool size={32} className="mb-2 opacity-50" />
                  <span className="font-medium text-sm">Quaderni</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">Quaderni di Lavoro</h4>
                <p className="text-base text-[var(--color-on-surface-variant)] mb-4">Percorsi guidati per pazienti adolescenti sulla gestione del bullismo e autostima.</p>
                <Link href="/contatti" className="text-[var(--color-primary)] text-sm font-bold tracking-widest uppercase hover:underline">SCOPRI I MATERIALI</Link>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:shadow-xl transition-shadow group smooth-card">
              <div className="h-48 relative overflow-hidden bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                  <LayoutTemplate size={32} className="mb-2 opacity-50" />
                  <span className="font-medium text-sm">Esperienziali</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">Materiali Esperienziali</h4>
                <p className="text-base text-[var(--color-on-surface-variant)] mb-4">Set di oggetti simbolici e strumenti tattili per la terapia dell'età evolutiva.</p>
                <Link href="/contatti" className="text-[var(--color-primary)] text-sm font-bold tracking-widest uppercase hover:underline">SCOPRI I MATERIALI</Link>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:shadow-xl transition-shadow group smooth-card">
              <div className="h-48 relative overflow-hidden bg-[var(--color-surface-dim)] flex items-center justify-center text-[var(--color-outline)]">
                <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                  <MonitorSmartphone size={32} className="mb-2 opacity-50" />
                  <span className="font-medium text-sm">Digitali</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">Supporto Digitale</h4>
                <p className="text-base text-[var(--color-on-surface-variant)] mb-4">Dashboard interattive per il monitoraggio dei compiti a casa e sessioni online.</p>
                <Link href="/contatti" className="text-[var(--color-primary)] text-sm font-bold tracking-widest uppercase hover:underline">SCOPRI I MATERIALI</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-[var(--color-primary)] text-[var(--color-on-primary)]">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">La scienza al servizio della pratica quotidiana.</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Ogni materiale presente nel nostro catalogo è frutto di una rigorosa revisione scientifica. Crediamo che la cura debba essere supportata da strumenti che rendano tangibile il percorso di crescita.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[var(--color-primary-fixed)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-[var(--color-primary-fixed)]" />
                </div>
                <div>
                  <p className="text-xl font-bold">Validazione Scientifica</p>
                  <p className="text-base opacity-80">Strumenti basati sulle evidenze cliniche più recenti.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[var(--color-primary-fixed)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-[var(--color-primary-fixed)]" />
                </div>
                <div>
                  <p className="text-xl font-bold">Focus Umano</p>
                  <p className="text-base opacity-80">Design empatico che riduce la resistenza al trattamento.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--color-surface-container-lowest)]/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 smooth-card">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold">Statistiche d'Impatto</h4>
              <TrendingUp size={28} />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 tracking-wider">
                  <span>COINVOLGIMENTO PAZIENTE</span>
                  <span>+85%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-primary-fixed)] w-[85%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2 tracking-wider">
                  <span>EFFICACIA PSICOEDUCATIVA</span>
                  <span>+70%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-secondary-fixed)] w-[70%] rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs font-medium opacity-60 italic text-center">
              *Dati basati su feedback clinici dei professionisti Applica APS.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-4">Resta aggiornato sui nuovi strumenti</h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] mb-8">Iscriviti alla newsletter tecnica dedicata ai professionisti della salute mentale.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="px-6 py-3 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-w-[300px] text-base" 
              placeholder="Inserisci la tua email" 
              type="email"
              required
            />
            <button type="submit" className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all smooth-btn uppercase text-sm">
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
