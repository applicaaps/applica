import { notFound } from "next/navigation"
import Link from "next/link"
import { mockEventi } from "@/lib/auth"
import { Calendar, MapPin, Clock, ArrowLeft, Users, CheckCircle2 } from "lucide-react"

export default function DettaglioEvento({ params }: { params: { slug: string } }) {
  const evento = mockEventi.find(e => e.slug === params.slug)

  if (!evento) {
    notFound()
  }

  const isUpcoming = evento.status === "upcoming"

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/area-riservata/eventi"
        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
      >
        <ArrowLeft size={16} />
        Torna agli eventi
      </Link>

      <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl overflow-hidden border border-[var(--color-outline-variant)] ambient-shadow">
        <div className="bg-[var(--color-deep-teal)] p-8 md:p-12 text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
            {evento.type}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{evento.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium opacity-90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {evento.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {evento.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {evento.location}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-deep-teal)] mb-4">Descrizione dell'evento</h2>
                <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                  {evento.description}
                </p>
                <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[var(--color-deep-teal)] mb-4">Programma</h2>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="text-[var(--color-primary)] font-bold shrink-0 mt-1">00:00</div>
                    <div>
                      <h4 className="font-bold text-[var(--color-on-surface)]">Accoglienza e Introduzione</h4>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">Presentazione del caso clinico o del tema della giornata.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-[var(--color-primary)] font-bold shrink-0 mt-1">00:30</div>
                    <div>
                      <h4 className="font-bold text-[var(--color-on-surface)]">Lavoro in sessione</h4>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">Discussione interattiva, role-playing o analisi di materiale clinico.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-[var(--color-primary)] font-bold shrink-0 mt-1">01:45</div>
                    <div>
                      <h4 className="font-bold text-[var(--color-on-surface)]">Restituzione e Chiusura</h4>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">Condivisione degli apprendimenti e Q&A.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-outline-variant)] sticky top-32">
                <h3 className="text-lg font-bold text-[var(--color-deep-teal)] mb-4">Dettagli Iscrizione</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <Users size={18} className="text-[var(--color-primary)]" />
                    <span>Posti limitati (Max 15)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <CheckCircle2 size={18} className="text-[var(--color-success-green)]" />
                    <span>Riservato ai soci Applica</span>
                  </div>
                </div>

                {isUpcoming ? (
                  <button className="w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-4 rounded-xl font-bold uppercase text-sm hover:shadow-lg transition-all smooth-btn">
                    Iscriviti ora
                  </button>
                ) : (
                  <div className="text-center p-4 bg-[var(--color-surface-container-high)] rounded-xl text-sm font-bold text-[var(--color-on-surface-variant)]">
                    Evento concluso
                  </div>
                )}
                
                {isUpcoming && (
                  <p className="text-xs text-center text-[var(--color-outline)] mt-4">
                    Riceverai il link per il collegamento via email 24h prima dell'evento.
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
