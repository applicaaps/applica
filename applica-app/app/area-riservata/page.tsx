import Link from "next/link"
import { mockUser, mockEventi, mockDocumenti } from "@/lib/auth"
import { CalendarDays, FileText, ArrowRight, Activity } from "lucide-react"

export default function Dashboard() {
  const upcomingEvents = mockEventi.filter(e => e.status === "upcoming").slice(0, 2)
  const recentDocs = mockDocumenti.slice(0, 2)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-2">Benvenuto, {mockUser.name}</h1>
        <p className="text-base text-[var(--color-on-surface-variant)]">
          Ecco il riepilogo delle tue attività e dei prossimi appuntamenti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Eventi Widget */}
        <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow smooth-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[var(--color-deep-teal)] flex items-center gap-2">
              <CalendarDays className="text-[var(--color-primary)]" />
              Prossimi Eventi
            </h2>
            <Link href="/area-riservata/eventi" className="text-sm font-bold text-[var(--color-primary)] hover:underline">
              Vedi tutti
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map(evento => (
              <div key={evento.id} className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">{evento.type}</span>
                  <span className="text-xs font-medium text-[var(--color-outline)]">{evento.date}</span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">{evento.title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">{evento.time} • {evento.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documenti Widget */}
        <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow smooth-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[var(--color-deep-teal)] flex items-center gap-2">
              <FileText className="text-[var(--color-primary)]" />
              Documenti Recenti
            </h2>
            <Link href="/area-riservata/documenti" className="text-sm font-bold text-[var(--color-primary)] hover:underline">
              Vedi tutti
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentDocs.map(doc => (
              <div key={doc.id} className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-between group hover:border-[var(--color-primary)] transition-colors cursor-pointer">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <FileText size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[var(--color-on-surface)] truncate">{doc.title}</h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">{doc.size} • {doc.category}</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[var(--color-outline)] group-hover:text-[var(--color-primary)] transition-colors shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Banner */}
      <div className="bg-[var(--color-deep-teal)] rounded-3xl p-8 text-white relative overflow-hidden ambient-shadow">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Aggiorna il tuo profilo professionale</h2>
            <p className="text-base opacity-80 max-w-lg">
              Mantieni aggiornate le tue disponibilità e specializzazioni per facilitare il matching con i pazienti della rete.
            </p>
          </div>
          <button className="bg-white text-[var(--color-deep-teal)] px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors shrink-0">
            Vai al Profilo
          </button>
        </div>
      </div>
    </div>
  )
}
