import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowLeft, Users, CheckCircle2 } from "lucide-react"
import { getEventoBySlug } from "@/lib/db"

export default async function DettaglioEvento({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const evento = await getEventoBySlug(slug)

  if (!evento) {
    notFound()
  }

  const isUpcoming = evento.status === "upcoming"

  return (
    <div className="space-y-6">
      <Link 
        href="/area-riservata/eventi"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-200"
      >
        <ArrowLeft size={16} />
        Torna agli eventi
      </Link>

      <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] ambient-shadow">
        <div className="bg-[var(--color-primary)] p-7 md:p-10 text-white">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 text-white text-xs font-semibold mb-4">
            {evento.type}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-5">{evento.title}</h1>
          
          <div className="flex flex-wrap items-center gap-5 text-sm opacity-85">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {evento.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {evento.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {evento.location}
            </div>
          </div>
        </div>

        <div className="p-7 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-bold text-[var(--color-on-surface)] mb-3">Descrizione</h2>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  {evento.description}
                </p>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mt-3">
                  L&apos;incontro prevede un momento iniziale di inquadramento teorico, seguito da lavoro pratico su materiale clinico portato dai partecipanti. La sessione si chiude con una restituzione condivisa degli apprendimenti.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[var(--color-on-surface)] mb-3">Programma</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="text-[var(--color-primary)] font-semibold text-sm shrink-0 mt-0.5 tabular-nums">00:00</div>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--color-on-surface)]">Accoglienza e introduzione</h4>
                      <p className="text-xs text-[var(--color-on-surface-variant)]">Presentazione del caso clinico o del tema della giornata.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[var(--color-primary)] font-semibold text-sm shrink-0 mt-0.5 tabular-nums">00:30</div>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--color-on-surface)]">Lavoro in sessione</h4>
                      <p className="text-xs text-[var(--color-on-surface-variant)]">Discussione interattiva, role-playing o analisi di materiale clinico.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="text-[var(--color-primary)] font-semibold text-sm shrink-0 mt-0.5 tabular-nums">01:45</div>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--color-on-surface)]">Restituzione e chiusura</h4>
                      <p className="text-xs text-[var(--color-on-surface-variant)]">Condivisione degli apprendimenti e domande aperte.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-outline-variant)] sticky top-28">
                <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-4">Iscrizione</h3>
                
                <div className="space-y-3 mb-6">

                  <div className="flex items-center gap-2.5 text-sm text-[var(--color-on-surface-variant)]">
                    <CheckCircle2 size={16} className="text-[var(--color-success-green)]" />
                    <span>Riservato ai soci Applica</span>
                  </div>
                </div>

                {isUpcoming ? (
                  <button className="w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] px-5 py-3 rounded-xl font-semibold text-sm pressable hover:bg-[var(--color-primary-container)]">
                    Iscriviti a questo evento
                  </button>
                ) : (
                  <div className="text-center p-3 bg-[var(--color-surface-container-high)] rounded-xl text-sm font-medium text-[var(--color-on-surface-variant)]">
                    Evento concluso
                  </div>
                )}
                
                {isUpcoming && (
                  <p className="text-xs text-center text-[var(--color-outline)] mt-3">
                    Riceverai il link per il collegamento via email 24h prima.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
