import Link from "next/link"
import { CalendarDays, FileText, ArrowRight } from "lucide-react"
import { getCurrentUser, getEventi, getDocumenti } from "@/lib/db"

export default async function Dashboard() {
  const user = await getCurrentUser()
  const eventi = await getEventi()
  const documenti = await getDocumenti()

  const upcomingEvents = eventi.filter(e => e.status === "upcoming").slice(0, 2)
  const recentDocs = documenti.slice(0, 2)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-1">Benvenuto, {user.name}</h1>
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
              <Link 
                href={`/area-riservata/eventi/${evento.slug}`} 
                key={evento.id} 
                className="block p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] interactive-card cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{evento.type}</span>
                  <span className="text-xs text-[var(--color-outline)] group-hover:text-[var(--color-primary)] transition-colors duration-200 flex items-center gap-1">
                    {evento.date}
                    <ArrowRight size={12} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-on-surface)] mb-1 group-hover:underline decoration-[var(--color-primary)] underline-offset-2">{evento.title}</h3>
                <p className="text-xs text-[var(--color-on-surface-variant)]">{evento.time} · {evento.location}</p>
              </Link>
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


    </div>
  )
}
