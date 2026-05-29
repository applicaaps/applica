import Link from "next/link"
import { mockEventi } from "@/lib/auth"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function EventiLista() {
  const upcomingEvents = mockEventi.filter(e => e.status === "upcoming")
  const pastEvents = mockEventi.filter(e => e.status === "past")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-2">Eventi e Formazione</h1>
        <p className="text-base text-[var(--color-on-surface-variant)]">
          Iscriviti ai prossimi eventi, workshop e gruppi di supervisione della rete.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[var(--color-deep-teal)] mb-6">Prossimi Eventi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map(evento => (
            <div key={evento.id} className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-6 border border-[var(--color-outline-variant)] ambient-shadow smooth-card flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] text-xs font-bold uppercase tracking-wider mb-3">
                  {evento.type}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2">{evento.title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
                  {evento.description}
                </p>
              </div>
              
              <div className="space-y-2 mt-auto mb-6">
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <Calendar size={16} className="text-[var(--color-primary)]" />
                  {evento.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <Clock size={16} className="text-[var(--color-primary)]" />
                  {evento.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <MapPin size={16} className="text-[var(--color-primary)]" />
                  {evento.location}
                </div>
              </div>

              <Link 
                href={`/area-riservata/eventi/${evento.slug}`}
                className="mt-auto w-full flex items-center justify-center gap-2 bg-[var(--color-surface-container)] text-[var(--color-deep-teal)] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[var(--color-surface-container-high)] transition-colors smooth-btn group"
              >
                Dettagli e Iscrizione
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {pastEvents.length > 0 && (
        <div className="pt-8 border-t border-[var(--color-outline-variant)]">
          <h2 className="text-xl font-bold text-[var(--color-deep-teal)] mb-6">Eventi Passati</h2>
          <div className="space-y-4">
            {pastEvents.map(evento => (
              <div key={evento.id} className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-outline-variant)] flex flex-col md:flex-row md:items-center justify-between gap-4 opacity-70 hover:opacity-100 transition-opacity">
                <div>
                  <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">{evento.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-on-surface-variant)]">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {evento.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {evento.location}</span>
                  </div>
                </div>
                <Link 
                  href={`/area-riservata/eventi/${evento.slug}`}
                  className="text-sm font-bold text-[var(--color-primary)] hover:underline whitespace-nowrap"
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
