import Link from "next/link"
import { mockEventi } from "@/lib/auth"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function EventiLista() {
  const upcomingEvents = mockEventi.filter(e => e.status === "upcoming")
  const pastEvents = mockEventi.filter(e => e.status === "past")

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-1">Eventi e Formazione</h1>
        <p className="text-sm text-[var(--color-on-surface-variant)]">
          Iscriviti ai prossimi eventi, workshop e gruppi di supervisione della rete.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold text-[var(--color-on-surface)] mb-4">Prossimi eventi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {upcomingEvents.map(evento => (
            <div key={evento.id} className="bg-white rounded-2xl p-6 border border-[var(--color-outline-variant)] ambient-shadow interactive-card flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-semibold mb-3">
                  {evento.type}
                </span>
                <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-2">{evento.title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
                  {evento.description}
                </p>
              </div>
              
              <div className="space-y-1.5 mt-auto mb-5">
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <Calendar size={14} className="text-[var(--color-primary)]" />
                  {evento.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <Clock size={14} className="text-[var(--color-primary)]" />
                  {evento.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <MapPin size={14} className="text-[var(--color-primary)]" />
                  {evento.location}
                </div>
              </div>

              <Link 
                href={`/area-riservata/eventi/${evento.slug}`}
                className="mt-auto w-full flex items-center justify-center gap-2 bg-[var(--color-surface-container)] text-[var(--color-on-surface)] px-5 py-2.5 rounded-xl text-sm font-medium pressable hover:bg-[var(--color-surface-container-high)]"
              >
                Dettagli e iscrizione
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {pastEvents.length > 0 && (
        <div className="pt-6 border-t border-[var(--color-outline-variant)]/50">
          <h2 className="text-base font-bold text-[var(--color-on-surface)] mb-4">Eventi passati</h2>
          <div className="space-y-3">
            {pastEvents.map(evento => (
              <div key={evento.id} className="bg-[var(--color-surface)] p-5 rounded-xl border border-[var(--color-outline-variant)] flex flex-col md:flex-row md:items-center justify-between gap-3 opacity-60 hover:opacity-100 transition-opacity duration-200">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-on-surface)] mb-1">{evento.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-on-surface-variant)]">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {evento.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {evento.location}</span>
                  </div>
                </div>
                <Link 
                  href={`/area-riservata/eventi/${evento.slug}`}
                  className="text-sm font-medium text-[var(--color-primary)] hover:underline whitespace-nowrap"
                >
                  Vedi materiali
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
