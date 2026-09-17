"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
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

// Genera il link per Google Calendar con i dati dell'evento
function getGoogleCalendarLink(event: {
  title: string
  description: string
  location: string
  startDateIso?: string
  endDateIso?: string
}) {
  const title = encodeURIComponent(event.title)
  const details = encodeURIComponent(`${event.description}\n\nOrganizzato da Applica APS (https://applicaaps.it)`)
  const location = encodeURIComponent(event.location)
  
  let datesParam = ""
  if (event.startDateIso && event.endDateIso) {
    datesParam = `&dates=${event.startDateIso}/${event.endDateIso}`
  } else {
    // Data indicativa per eventi in via di definizione
    const now = new Date()
    now.setDate(now.getDate() + 14)
    now.setHours(18, 30, 0, 0)
    const end = new Date(now)
    end.setHours(20, 0, 0, 0)
    const startIso = now.toISOString().replace(/-|:|\.\d\d\d/g, "")
    const endIso = end.toISOString().replace(/-|:|\.\d\d\d/g, "")
    datesParam = `&dates=${startIso}/${endIso}`
  }

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}${datesParam}`
}

// Scarica/apre il file .ics per Apple / iOS Calendar
function downloadAppleIcs(event: {
  title: string
  description: string
  location: string
  startDateIso?: string
  endDateIso?: string
}) {
  let startStr = event.startDateIso
  let endStr = event.endDateIso

  if (!startStr || !endStr) {
    const now = new Date()
    now.setDate(now.getDate() + 14)
    now.setHours(18, 30, 0, 0)
    const end = new Date(now)
    end.setHours(20, 0, 0, 0)
    startStr = now.toISOString().replace(/-|:|\.\d\d\d/g, "")
    endStr = end.toISOString().replace(/-|:|\.\d\d\d/g, "")
  }

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Applica APS//Incontri//IT",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description} - Organizzato da Applica APS`,
    `LOCATION:${event.location}`,
    `DTSTART:${startStr}`,
    `DTEND:${endStr}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n")

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `${event.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.ics`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Elenco unificato degli incontri previsti
const sampleEvents = [
  {
    id: 1,
    title: "Incontro di Presentazione & Benessere Emotivo",
    date: "Da definire",
    time: "18:30 - 20:00",
    location: "Sede Applica APS / Online",
    type: "Presenza & Streaming",
    badge: "Primo Incontro",
    description: "Uno spazio protetto di ascolto e condivisione guidato dai nostri professionisti per introdurre i percorsi e le attività dell'associazione.",
    target: "Aperto a tutti",
    spotsLeft: "Posti limitati",
  },
  {
    id: 2,
    title: "Laboratorio sulle Strategie di Gestione dello Stress",
    date: "In programmazione",
    time: "17:00 - 19:00",
    location: "Sede Applica APS",
    type: "In Presenza",
    badge: "Workshop Pratico",
    description: "Tecniche psicoeducative e strumenti pratici per riconoscere e gestire l'ansia e lo stress quotidiano nella vita personale e lavorativa.",
    target: "Adulti e giovani adulti",
    spotsLeft: "Su prenotazione",
  },
  {
    id: 3,
    title: "Seminario: La Salute Emotiva nelle Relazioni",
    date: "In programmazione",
    time: "18:00 - 19:30",
    location: "Piattaforma Zoom",
    type: "Online",
    badge: "Formazione",
    description: "Focus tematico sull'importanza dei confini sani, della comunicazione empatica e del sostegno reciproco nelle relazioni interpersonali.",
    target: "Soci e interessati",
    spotsLeft: "Accesso libero",
  },
  {
    id: 4,
    title: "Tavola Rotonda: Psicologia Accessibile per la Comunità",
    date: "In programmazione",
    time: "19:00 - 20:30",
    location: "Centro Culturale / Online",
    type: "Aperto al pubblico",
    badge: "Evento Pubblico",
    description: "Dialogo aperto con professionisti, associazioni territoriali e cittadini sui temi del diritto alla salute mentale e dell'accessibilità alla cura.",
    target: "Tutta la cittadinanza",
    spotsLeft: "Ingresso gratuito",
  }
]

export default function ProgrammaPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[var(--color-surface-container-low)]/60 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4 sm:space-y-6">
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              <Calendar size={14} className="sm:w-4 sm:h-4" />
              <span>Calendario Attività & Incontri</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] tracking-tight leading-[1.15]">
              Programma degli <span className="text-[var(--color-primary)]">Incontri</span>
            </h1>
          </RevealSection>

          <RevealSection stagger={1}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mx-auto px-2">
              Scopri le prossime iniziative, i gruppi di parola, i workshop pratici e i momenti di formazione promossi da Applica APS. Salva gli appuntamenti direttamente sul tuo calendario!
            </p>
          </RevealSection>

          <RevealSection stagger={2}>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-[var(--color-on-surface-variant)] font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-sm w-full sm:w-auto justify-center">
                <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0" />
                <span>Percorsi guidati da esperti</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-sm w-full sm:w-auto justify-center">
                <Users size={16} className="text-[var(--color-primary)] shrink-0" />
                <span>Piccoli gruppi di confronto</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-sm w-full sm:w-auto justify-center">
                <Video size={16} className="text-[var(--color-primary)] shrink-0" />
                <span>Modalità in presenza e online</span>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">

          {/* Lista Unificata degli Incontri */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-on-surface)]">
                Incontri in Programma
              </h3>
              <span className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2.5 py-1 rounded-md font-medium">
                {sampleEvents.length} incontri in elenco
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {sampleEvents.map((event, idx) => (
                <RevealSection key={event.id} stagger={(idx % 2) + 1}>
                  <div className="bg-white p-5 sm:p-6 md:p-7 rounded-2xl border border-[var(--color-outline-variant)] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-2.5 py-1 bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] text-[11px] font-semibold rounded-lg">
                          {event.badge}
                        </span>
                        <span className="text-[11px] font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/8 px-2.5 py-1 rounded-md">
                          {event.type}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {event.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        {event.description}
                      </p>

                      <div className="pt-3 border-t border-[var(--color-outline-variant)]/40 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-on-surface-variant)]">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-[var(--color-primary)] shrink-0" />
                          <span>{event.target}</span>
                        </div>
                      </div>
                    </div>

                    {/* Azioni del Calendario */}
                    <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 border-t border-[var(--color-outline-variant)]/30">
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {event.spotsLeft}
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <span className="text-[11px] text-[var(--color-on-surface-variant)] font-medium mr-0.5">Aggiungi a:</span>
                        
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
                    Vuoi rimanere aggiornato sulle prossime date?
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    Il calendario degli incontri viene aggiornato regolarmente. Contattaci per essere inserito nella lista delle notifiche.
                  </p>
                </div>
              </div>
              <Link href="/contatti" className="shrink-0 w-full sm:w-auto">
                <Button variant="outline" className="gap-2 w-full sm:w-auto justify-center">
                  <MessageSquare size={16} />
                  <span>Contattaci per dettagli</span>
                </Button>
              </Link>
            </div>
          </RevealSection>

        </div>
      </section>
    </>
  )
}
