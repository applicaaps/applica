"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Video, 
  CheckCircle2,
  HeartHandshake,
  HelpCircle,
  MessageSquare,
  ChevronRight,
  Bell
} from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { Button } from "@/components/ui/Button"

// Categorie per i filtri degli incontri
const categories = [
  { id: "tutti", label: "Tutti gli incontri" },
  { id: "gruppo", label: "Gruppi di Parola & Confronto" },
  { id: "workshop", label: "Workshop & Laboratori" },
  { id: "formazione", label: "Formazione & Seminari" },
  { id: "pubblici", label: "Incontri Aperti" },
]

// Esempio di struttura layout incontri (placeholder in attesa dei dati definitivi)
const sampleEvents = [
  {
    id: 1,
    category: "gruppo",
    title: "Incontro di Presentazione & Benessere Emotivo",
    date: "Da definire",
    time: "18:30 - 20:00",
    location: "Sede Applica APS / Online",
    type: "Presenza & Streaming",
    badge: "Primo Incontro",
    description: "Uno spazio protetto di ascolto e condivisione guidato dai nostri professionisti per introdurre i percorsi e le attività dell'associazione.",
    target: "Aperto a tutti",
    spotsLeft: "Posti limitati",
    isFeatured: true
  },
  {
    id: 2,
    category: "workshop",
    title: "Laboratorio sulle Strategie di Gestione dello Stress",
    date: "In programmazione",
    time: "17:00 - 19:00",
    location: "Sede Applica APS",
    type: "In Presenza",
    badge: "Workshop Pratico",
    description: "Tecniche psicoeducative e strumenti pratici per riconoscere e gestire l'ansia e lo stress quotidiano nella vita personale e lavorativa.",
    target: "Adulti e giovani adulti",
    spotsLeft: "Su prenotazione",
    isFeatured: false
  },
  {
    id: 3,
    category: "formazione",
    title: "Seminario: La Salute Emotiva nelle Relazioni",
    date: "In programmazione",
    time: "18:00 - 19:30",
    location: "Piattaforma Zoom",
    type: "Online",
    badge: "Formazione",
    description: "Focus tematico sull'importanza dei confini sani, della comunicazione empatica e del sostegno reciproco nelle relazioni interpersonali.",
    target: "Soci e interessati",
    spotsLeft: "Accesso libero",
    isFeatured: false
  },
  {
    id: 4,
    category: "pubblici",
    title: "Tavola Rotonda: Psicologia Accessibile per la Comunità",
    date: "In programmazione",
    time: "19:00 - 20:30",
    location: "Centro Culturale / Online",
    type: "Aperto al pubblico",
    badge: "Evento Pubblico",
    description: "Dialogo aperto con professionisti, associazioni territoriali e cittadini sui temi del diritto alla salute mentale e dell'accessibilità alla cura.",
    target: "Tutta la cittadinanza",
    spotsLeft: "Ingresso gratuito",
    isFeatured: false
  }
]

const faqs = [
  {
    q: "Come ci si iscrive agli incontri?",
    a: "È possibile prenotare il proprio posto tramite il modulo di contatto o inviando un messaggio diretto. Per alcuni incontri aperti l'accesso è libero fino a esaurimento posti."
  },
  {
    q: "Gli incontri sono gratuiti o a pagamento?",
    a: "La maggior parte degli incontri di presentazione e informativi sono gratuiti per i soci o aperti alla comunità. Eventuali workshop strutturati prevedono un contributo associativo simbolico."
  },
  {
    q: "Posso partecipare se non sono ancora iscritto ad Applica APS?",
    a: "Assolutamente sì! I primi incontri e le serate informative sono pensati proprio per far conoscere la nostra realtà e accogliere chiunque desideri avvicinarsi."
  },
  {
    q: "Gli incontri si tengono online o in presenza?",
    a: "Proponiamo un calendario misto: alcuni incontri si svolgono presso la nostra sede, mentre altri sono fruibili da remoto per facilitare la partecipazione."
  }
]

export default function ProgrammaPage() {
  const [activeTab, setActiveTab] = React.useState("tutti")

  const filteredEvents = activeTab === "tutti" 
    ? sampleEvents 
    : sampleEvents.filter(e => e.category === activeTab)

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
              Scopri le prossime iniziative, i gruppi di parola, i workshop pratici e i momenti di formazione promossi da Applica APS per la promozione del benessere psicologico.
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

      {/* ─── Filter & Content Section ─── */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filtri Categoria per Mobile e Desktop */}
          <RevealSection>
            <div className="mb-8 md:mb-10 border-b border-[var(--color-outline-variant)]/60 pb-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-on-surface)] mb-3">
                <Filter size={16} className="text-[var(--color-primary)]" />
                <span>Filtra incontri per tipologia:</span>
              </div>

              {/* Scroll Orizzontale su Mobile / Wrap su Desktop */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 pressable ${
                      activeTab === cat.id
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "bg-white text-[var(--color-on-surface-variant)] border border-[var(--color-outline-variant)] hover:bg-[var(--color-surface-container)]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Incontro in Evidenza (Featured Event) */}
          <RevealSection>
            <div className="mb-8 md:mb-12 bg-gradient-to-br from-white to-[var(--color-surface-container-low)] p-5 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border-2 border-[var(--color-primary)]/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-[var(--color-primary)]/5 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start lg:items-center justify-between relative z-10">
                <div className="space-y-3 sm:space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 bg-[var(--color-primary)] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <Sparkles size={12} /> In Evidenza
                    </span>
                    <span className="px-2.5 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[11px] sm:text-xs font-semibold rounded-full">
                      Prossimo Incontro
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] leading-tight">
                    Incontro di Presentazione & Spazio di Ascolto
                  </h2>

                  <p className="text-sm sm:text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    Un momento dedicato alla conoscenza delle attività di Applica APS, al confronto sulle tematiche del benessere psicologico e alla presentazione del calendario dei gruppi di supporto.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-[var(--color-on-surface-variant)]">
                    <div className="flex items-center gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[var(--color-outline-variant)]/50 sm:border-none sm:p-0 sm:bg-transparent">
                      <Calendar size={18} className="text-[var(--color-primary)] shrink-0" />
                      <div>
                        <span className="block text-[11px] font-semibold text-[var(--color-on-surface)]">Data</span>
                        <span>Date in definizione</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[var(--color-outline-variant)]/50 sm:border-none sm:p-0 sm:bg-transparent">
                      <Clock size={18} className="text-[var(--color-primary)] shrink-0" />
                      <div>
                        <span className="block text-[11px] font-semibold text-[var(--color-on-surface)]">Orario</span>
                        <span>18:30 - 20:00</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[var(--color-outline-variant)]/50 sm:border-none sm:p-0 sm:bg-transparent">
                      <MapPin size={18} className="text-[var(--color-primary)] shrink-0" />
                      <div>
                        <span className="block text-[11px] font-semibold text-[var(--color-on-surface)]">Luogo</span>
                        <span className="truncate block max-w-[200px] sm:max-w-none">Sede Applica APS / Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
                  <Link href="/contatti" className="w-full">
                    <Button size="lg" className="w-full justify-center gap-2 py-3">
                      <span>Richiedi Informazioni</span>
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <span className="text-[11px] sm:text-xs text-center text-[var(--color-on-surface-variant)]">
                    Iscrizioni aperte a breve
                  </span>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Lista/Griglia degli Incontri */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-on-surface)]">
                Tutti gli Incontri in Programma
              </h3>
              <span className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2.5 py-1 rounded-md font-medium">
                {filteredEvents.length} incontri previsti
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredEvents.map((event, idx) => (
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

                    <div className="pt-4 sm:pt-5 flex items-center justify-between gap-3 mt-4 border-t border-[var(--color-outline-variant)]/30">
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {event.spotsLeft}
                      </span>

                      <Link href="/contatti" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline py-1">
                        <span>Prenota / Chiedi info</span>
                        <ChevronRight size={14} />
                      </Link>
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

      {/* ─── Informazioni e Domande Frequenti (FAQ) ─── */}
      <section className="py-12 sm:py-16 md:py-24 bg-[var(--color-surface-container-low)]">
        <div className="container mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold">
                <HelpCircle size={14} />
                <span>Domande Frequenti</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-on-surface)]">
                Come funzionano i nostri incontri
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[var(--color-on-surface-variant)] max-w-lg mx-auto">
                Tutto ciò che c&apos;è da sapere su modalità di partecipazione, iscrizioni e svolgimento delle attività.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <RevealSection key={index} stagger={(index % 2) + 1}>
                <div className="bg-white p-5 sm:p-6 md:p-7 rounded-2xl border border-[var(--color-outline-variant)] shadow-sm space-y-2.5 h-full">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-on-surface)] flex items-start gap-2">
                    <span className="text-[var(--color-primary)] font-serif font-black text-lg sm:text-xl leading-none shrink-0 mt-0.5">?</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] leading-relaxed pl-4 sm:pl-5">
                    {faq.a}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Call to Action Finale ─── */}
      <section className="bg-[var(--color-primary)] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-5 sm:space-y-6">
          <RevealSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Hai un&apos;idea per un incontro o vuoi proporre un tema?
            </h2>
            <p className="text-white/85 text-xs sm:text-base md:text-lg max-w-xl mx-auto pt-1 sm:pt-2">
              Applica APS è un laboratorio aperto al contributo di soci, professionisti e cittadini.
            </p>
          </RevealSection>

          <RevealSection stagger={1}>
            <div className="pt-2 sm:pt-4 flex justify-center">
              <Link
                href="/contatti"
                className="bg-white text-[var(--color-primary)] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm pressable hover:bg-white/90 text-center shadow-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <HeartHandshake size={18} />
                <span>Proponi un&apos;iniziativa o chiedi info</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
