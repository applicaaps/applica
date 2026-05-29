import Link from "next/link"
import { mockUser, mockEventi, mockDocumenti } from "@/lib/auth"
import { CalendarDays, FileText, ArrowRight } from "lucide-react"

export default function Dashboard() {
  const upcomingEvents = mockEventi.filter(e => e.status === "upcoming").slice(0, 2)
  const recentDocs = mockDocumenti.slice(0, 2)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-1">Benvenuto, {mockUser.name}</h1>
        <p className="text-sm text-[var(--color-on-surface-variant)]">
          Ecco il riepilogo delle tue attività e dei prossimi appuntamenti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Eventi Widget */}
        <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-base font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <CalendarDays size={18} className="text-[var(--color-primary)]" />
              Prossimi eventi
            </h2>
            <Link href="/area-riservata/eventi" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
              Vedi tutti
            </Link>
          </div>
          
          <div className="space-y-3">
            {upcomingEvents.map(evento => (
              <div key={evento.id} className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] interactive-card">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{evento.type}</span>
                  <span className="text-xs text-[var(--color-outline)]">{evento.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-on-surface)] mb-1">{evento.title}</h3>
                <p className="text-xs text-[var(--color-on-surface-variant)]">{evento.time} · {evento.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documenti Widget */}
        <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-base font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <FileText size={18} className="text-[var(--color-primary)]" />
              Documenti recenti
            </h2>
            <Link href="/area-riservata/documenti" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
              Vedi tutti
            </Link>
          </div>
          
          <div className="space-y-3">
            {recentDocs.map(doc => (
              <div key={doc.id} className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-between group interactive-card cursor-pointer">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/8 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--color-on-surface)] truncate">{doc.title}</h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">{doc.size} · {doc.category}</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[var(--color-outline)] group-hover:text-[var(--color-primary)] transition-colors duration-200 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Banner */}
      <div className="bg-[var(--color-primary)] rounded-2xl p-7 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"></div>
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5" style={{ zIndex: 1 }}>
          <div>
            <h2 className="text-lg font-bold mb-1">Aggiorna il tuo profilo professionale</h2>
            <p className="text-sm opacity-75 max-w-md">
              Mantieni aggiornate disponibilità e specializzazioni per facilitare il matching con i pazienti.
            </p>
          </div>
          <button className="bg-white text-[var(--color-primary)] px-5 py-2.5 rounded-lg text-sm font-semibold pressable hover:bg-white/90 shrink-0">
            Vai al profilo
          </button>
        </div>
      </div>
    </div>
  )
}
