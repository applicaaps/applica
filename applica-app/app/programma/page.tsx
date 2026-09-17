"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2,
  MessageSquare,
  Bell
} from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { Button } from "@/components/ui/Button"

// Icona Google Calendar (SVG)
function GoogleCalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
    </svg>
  )
}

// Icona Apple / iOS Calendar (SVG)
function AppleCalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.96.04-2.13.64-2.82 1.44-.61.71-1.14 1.87-.99 2.99 1.07.08 2.15-.51 2.82-1.33z"/>
    </svg>
  )
}

export interface EventItem {
  id: number
  incontro: string
  dateDisplay: string
  timeDisplay: string
  tema: string
  year: number
  month: number
  day: number
}

// Struttura dati ufficiale caricata da ListaIncontri.md
const eventsData: EventItem[] = [
  {
    id: 1,
    incontro: "Incontro 1 PA",
    dateDisplay: "3 Ottobre 2026",
    timeDisplay: "08:30",
    tema: "Benvenuto Applica - Burocrazia e apertura dello studio — Partita IVA; regime fiscale; ENPAP; Sistema Tessera Sanitaria; fatturazione; principali scadenze; errori da evitare.",
    year: 2026,
    month: 10,
    day: 3
  },
  {
    id: 2,
    incontro: "Incontro 2 PA",
    dateDisplay: "17 Ottobre 2026",
    timeDisplay: "08:30",
    tema: "Codice Deontologico nella pratica — pubblicità, social, confini, segreto professionale, responsabilità",
    year: 2026,
    month: 10,
    day: 17
  },
  {
    id: 3,
    incontro: "Incontro 3 PA",
    dateDisplay: "31 Ottobre 2026",
    timeDisplay: "08:30",
    tema: "Da psicologo a professionista: come iniziare davvero — privacy, consenso informato, documentazione, primi passi, assicurazione professionale, organizzazione, identità professionale",
    year: 2026,
    month: 10,
    day: 31
  },
  {
    id: 4,
    incontro: "Incontro 4 PA",
    dateDisplay: "14 Novembre 2026",
    timeDisplay: "08:30",
    tema: "Costruire uno studio professionale — presenza online/offline, agenda, strumenti, organizzazione e gestione del paziente",
    year: 2026,
    month: 11,
    day: 14
  },
  {
    id: 5,
    incontro: "Incontro 5 PA - PB",
    dateDisplay: "28 Novembre 2026",
    timeDisplay: "08:30",
    tema: "Quanto e come farsi pagare — tariffe, ricevute, cancellazioni, pacchetti, gestione economica ed etica",
    year: 2026,
    month: 11,
    day: 28
  },
  {
    id: 6,
    incontro: "Incontro 6 PA",
    dateDisplay: "12 Dicembre 2026",
    timeDisplay: "08:30",
    tema: "Il contratto terapeutico — regole, consenso, setting, assenze, contatti fuori seduta e gestione dei confini",
    year: 2026,
    month: 12,
    day: 12
  },
  {
    id: 7,
    incontro: "Incontro 7 PA",
    dateDisplay: "14 Dicembre 2026",
    timeDisplay: "08:30",
    tema: "Transfert e controtransfert — quello che accade nella relazione terapeutica",
    year: 2026,
    month: 12,
    day: 14
  },
  {
    id: 8,
    incontro: "Incontro 8 PA",
    dateDisplay: "9 Gennaio 2027",
    timeDisplay: "08:30",
    tema: "Dalla raccolta dati alla formulazione del caso — trasformare le informazioni in ragionamento clinico",
    year: 2027,
    month: 1,
    day: 9
  },
  {
    id: 9,
    incontro: "Incontro 9 PA - PB",
    dateDisplay: "23 Gennaio 2027",
    timeDisplay: "08:30",
    tema: "Ragionamento clinico — capire cosa sta réellement mantenendo il problema del paziente",
    year: 2027,
    month: 1,
    day: 23
  },
  {
    id: 10,
    incontro: "Incontro 10 PA - PB",
    dateDisplay: "20 Febbraio 2027",
    timeDisplay: "08:30",
    tema: "Obiettivi e piano terapeutico — da “parlare del problema” a costruire un percorso",
    year: 2027,
    month: 2,
    day: 6
  },
  {
    id: 11,
    incontro: "Incontro 11 PA - PB",
    dateDisplay: "6 Marzo 2027",
    timeDisplay: "08:30",
    tema: "Quando il terapeuta non sa cosa fare — blocchi, errori, dubbi clinici e supervisione",
    year: 2027,
    month: 3,
    day: 6
  },
  {
    id: 12,
    incontro: "Incontro 12 PA - PB",
    dateDisplay: "20 Marzo 2027",
    timeDisplay: "08:30",
    tema: "Il primo colloquio — cosa chiedere, cosa osservare, come strutturare l'incontro",
    year: 2027,
    month: 3,
    day: 20
  },
  {
    id: 13,
    incontro: "Incontro 13 PA - PB",
    dateDisplay: "3 Aprile 2027",
    timeDisplay: "08:30",
    tema: "Come trovare pazienti in modo etico — networking, territorio, collaborazioni, social e reputazione",
    year: 2027,
    month: 4,
    day: 3
  },
  {
    id: 14,
    incontro: "Incontro 14 PA - PB",
    dateDisplay: "17 Aprile 2027",
    timeDisplay: "08:30",
    tema: "I casi difficili — paziente resistente, dipendente, aggressivo, evitante, che interrompe",
    year: 2027,
    month: 4,
    day: 17
  },
  {
    id: 15,
    incontro: "Incontro 15 PA - PB",
    dateDisplay: "2 Maggio 2027",
    timeDisplay: "08:30",
    tema: "Gestire crisi e situazioni complesse — limiti delle competenze, rete, invio e collaborazione con altri professionisti",
    year: 2027,
    month: 5,
    day: 2
  },
  {
    id: 16,
    incontro: "Incontro 16 PA",
    dateDisplay: "15 Maggio 2027",
    timeDisplay: "08:30",
    tema: "Costruire la propria identità professionale — orientamento teorico, nicchia, popolazione e aree di interesse",
    year: 2027,
    month: 5,
    day: 15
  },
  {
    id: 17,
    incontro: "Incontro 17 PA - PB",
    dateDisplay: "29 Maggio 2027",
    timeDisplay: "08:30",
    tema: "Il terapeuta dentro la terapia — emozioni, schemi personali, paura di sbagliare e senso di inadeguatezza",
    year: 2027,
    month: 5,
    day: 29
  },
  {
    id: 18,
    incontro: "Incontro 18 PA - PB",
    dateDisplay: "7 Giugno 2027",
    timeDisplay: "08:30",
    tema: "Vivere di psicologia — costruire una professione sostenibile, rete professionale e piano di crescita",
    year: 2027,
    month: 6,
    day: 7
  },
  {
    id: 19,
    incontro: "Incontro 19 PA",
    dateDisplay: "7 Giugno 2027",
    timeDisplay: "08:30",
    tema: "Costruire la propria identità professionale — orientamento teorico, nicchia, popolazione e aree di interesse",
    year: 2027,
    month: 6,
    day: 7
  }
]

// Calcola le date ISO per il calendario (Data + Tema, senza il campo "Incontro" nel titolo del calendario)
function getEventDates(event: EventItem) {
  const start = new Date(event.year, event.month - 1, event.day, 8, 30, 0)
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000) // 2 ore di durata predefinita

  const toIsoBasic = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "")
  return {
    startIso: toIsoBasic(start),
    endIso: toIsoBasic(end)
  }
}

// Genera link Google Calendar contenente solo Tema e Data (esclude "Incontro" dal titolo dell'evento calendario)
function getGoogleCalendarLink(event: EventItem) {
  const { startIso, endIso } = getEventDates(event)
  const title = encodeURIComponent(event.tema)
  const details = encodeURIComponent(`Tema: ${event.tema}\n\nOrganizzato da Applica APS (https://applicaaps.it)`)
  const location = encodeURIComponent("Applica APS")

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${endIso}`
}

// Genera e scarica file .ics per Apple / iOS Calendar contenente solo Tema e Data (esclude "Incontro" dal titolo)
function downloadAppleIcs(event: EventItem) {
  const { startIso, endIso } = getEventDates(event)

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Applica APS//Incontri//IT",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${event.tema.replace(/\n/g, " ")}`,
    `DESCRIPTION:${event.tema.replace(/\n/g, " ")} - Organizzato da Applica APS`,
    "LOCATION:Applica APS",
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n")

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `incontro-${event.id}.ics`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function ProgrammaPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[var(--color-surface-container-low)]/60 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4 sm:space-y-6">
          <RevealSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] tracking-tight leading-[1.15]">
              Programma Incontri per <span className="text-[var(--color-primary)]">Psicologi</span>
            </h1>
          </RevealSection>

          <RevealSection stagger={1}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mx-auto px-2">
              Percorsi di formazione, affiancamento e pratica clinica dedicati a psicologi e psicoterapeuti. Salva gli appuntamenti e i temi del percorso direttamente sul tuo calendario!
            </p>
          </RevealSection>

          <RevealSection stagger={2}>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-[var(--color-on-surface-variant)] font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-sm w-full sm:w-auto justify-center font-semibold text-[var(--color-primary)]">
                <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0" />
                <span>Riservato a Psicologi &amp; Psicoterapeuti</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-sm w-full sm:w-auto justify-center">
                <Clock size={16} className="text-[var(--color-primary)] shrink-0" />
                <span>Orario fisso 8:30</span>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">

          {/* Listadegli Incontri */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-on-surface)]">
                Incontri in Programma
              </h3>
              <span className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2.5 py-1 rounded-md font-medium">
                {eventsData.length} incontri in programma
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {eventsData.map((event, idx) => (
                <RevealSection key={event.id} stagger={(idx % 2) + 1}>
                  <div className="bg-white p-5 sm:p-6 md:p-7 rounded-2xl border border-[var(--color-outline-variant)] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-2.5 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold rounded-lg">
                          {event.incontro}
                        </span>
                        <span className="text-[11px] font-medium text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2.5 py-1 rounded-md">
                          Applica APS
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {event.tema}
                      </h4>

                      <div className="pt-3 border-t border-[var(--color-outline-variant)]/40 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-on-surface-variant)]">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span className="font-semibold text-[var(--color-on-surface)]">{event.dateDisplay}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span>{event.timeDisplay}</span>
                        </div>
                      </div>
                    </div>

                    {/* Azioni del Calendario */}
                    <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 border-t border-[var(--color-outline-variant)]/30">
                      <span className="text-[11px] font-medium text-[var(--color-on-surface-variant)]">
                        Aggiungi al tuo calendario:
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        {/* Google Calendar */}
                        <a
                          href={getGoogleCalendarLink(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Aggiungi al tuo Google Calendar"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-[var(--color-outline-variant)] text-xs font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all pressable shadow-2xs"
                        >
                          <GoogleCalendarIcon className="w-3.5 h-3.5 text-[#4285F4]" />
                          <span className="text-[11px] font-semibold">Google</span>
                        </a>

                        {/* Apple / iOS Calendar */}
                        <button
                          onClick={() => downloadAppleIcs(event)}
                          title="Aggiungi al tuo Apple / iOS Calendar"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-[var(--color-outline-variant)] text-xs font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all pressable shadow-2xs"
                        >
                          <AppleCalendarIcon className="w-3.5 h-3.5 text-gray-900" />
                          <span className="text-[11px] font-semibold">Apple / iOS</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>

          {/* Avviso Aggiornamento Calendario */}
          <RevealSection>
            <div className="mt-8 sm:mt-12 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Bell size={22} className="sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-[var(--color-on-surface)]">
                    Hai domande sulle date o sugli incontri?
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Contattaci per qualsiasi informazione relativa al calendario delle attività.
                  </p>
                </div>
              </div>
              <Link href="/contatti" className="shrink-0 w-full sm:w-auto">
                <Button variant="outline" className="gap-2 w-full sm:w-auto justify-center">
                  <MessageSquare size={16} />
                  <span>Contattaci</span>
                </Button>
              </Link>
            </div>
          </RevealSection>

        </div>
      </section>
    </>
  )
}
