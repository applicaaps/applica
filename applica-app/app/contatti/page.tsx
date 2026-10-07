"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Send, CheckCircle2, ChevronDown, User, Brain, GraduationCap, Building2, Calendar, ArrowRight, X } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { useForm, ValidationError } from '@formspree/react'
import Cal, { getCalApi } from "@calcom/embed-react"

export default function Contatti() {

  const [state, handleSubmit] = useForm("mjgzdlqo")
  const [isSelectOpen, setIsSelectOpen] = React.useState(false)
  const [selectedMotivo, setSelectedMotivo] = React.useState("")
  const [activeCalLink, setActiveCalLink] = React.useState<string | null>(null)
  const [activeCalTitle, setActiveCalTitle] = React.useState<string>("")

  const [calLoading, setCalLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      // Init Psicologi namespace (light theme)
      const calPsi = await getCalApi({ namespace: "colloquio-presentazione-applica" });
      calPsi("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      calPsi("on", {
        action: "*",
        callback: () => {
          setCalLoading(false);
        }
      });

      // Init Pazienti namespace (light theme)
      const calPaz = await getCalApi({ namespace: "orientamento-paziente-applica" });
      calPaz("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      calPaz("on", {
        action: "*",
        callback: () => {
          setCalLoading(false);
        }
      });
    })();
  }, []);

  React.useEffect(() => {
    if (activeCalLink) {
      setCalLoading(true);
      const timer = setTimeout(() => {
        setCalLoading(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [activeCalLink]);

  const motivi = [
    { value: "paziente", label: "Informazioni per iniziare un percorso (Pazienti)" },
    { value: "professionista", label: "Candidatura rete (Professionisti)" },
    { value: "docente", label: "Collaborazione come Docente / Formatore" },
    { value: "associazione", label: "Partnership come Associazione / Ente" },
    { value: "materiali", label: "Informazioni sui materiali" },
    { value: "altro", label: "Altro" },
  ]

  const calEvents = [
    {
      id: "presentazione-applica",
      title: "Presentazione Applica",
      subtitle: "Per Psicologi e Professionisti",
      description: "Sei uno psicologo o un professionista sanitario? Prenota un colloquio di presentazione per scoprire come entrare a far parte della nostra rete e collaborare con noi.",
      calLink: "applicaaps/colloquio-presentazione-applica",
      namespace: "colloquio-presentazione-applica",
      theme: "light",
      badge: "Professionisti",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
      icon: Brain,
    },
    {
      id: "orientamento-paziente",
      title: "Orientamento Paziente",
      subtitle: "Per chi cerca il percorso adatto",
      description: "Desideri iniziare un percorso ma non sai da dove partire? Prenota un colloquio d'orientamento gratuito con un nostro referente per individuare lo specialista più idoneo.",
      calLink: "applicaaps/orientamento-paziente-applica",
      namespace: "orientamento-paziente-applica",
      theme: "light",
      badge: "Pazienti",
      badgeColor: "bg-orange-50 text-orange-600 border-orange-200",
      buttonColor: "bg-orange-500 hover:bg-orange-600 shadow-orange-500/20",
      icon: User,
    }
  ]

  return (
    <>
      {/* ─── Contatti Hero Section ─── */}
      <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[var(--color-primary-container)]/30 to-transparent opacity-50 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100 to-transparent opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <RevealSection>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-on-surface)] mb-5 tracking-tight">
                Contatti e Prenotazioni
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
                Prenota direttamente un appuntamento conoscitivo oppure inviaci un messaggio.
              </p>
            </div>
          </RevealSection>

          {/* ─── Cards Prenotazione Cal.eu ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {calEvents.map((evt, idx) => {
              return (
                <RevealSection key={evt.id} stagger={idx + 1}>
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-9 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between h-full relative group">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-on-surface)] mb-1.5 tracking-tight">
                        {evt.title}
                      </h2>
                      <p className="text-sm font-medium text-[var(--color-primary)] mb-4">
                        {evt.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-[var(--color-on-surface-variant)] leading-relaxed mb-8">
                        {evt.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveCalLink(evt.calLink);
                        setActiveCalTitle(evt.title);
                      }}
                      className={`w-full inline-flex items-center justify-center gap-2.5 text-white px-6 py-3.5 rounded-xl font-semibold text-sm pressable transition-all shadow-md ${evt.buttonColor}`}
                    >
                      <Calendar size={18} />
                      Prenota appuntamento
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </RevealSection>
              );
            })}
          </div>

          {/* Modal / Inline Embed Cal.eu */}
          {activeCalLink && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
              <div className="bg-white w-full max-w-4xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
                <div className="flex items-center justify-between px-6 py-4 bg-[var(--color-surface-container-low)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-[var(--color-primary)]" size={20} />
                    <h3 className="text-lg font-bold text-[var(--color-on-surface)]">
                      Prenotazione: {activeCalTitle}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setActiveCalLink(null);
                      setCalLoading(true);
                    }}
                    className="p-2 rounded-full hover:bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 w-full h-full overflow-y-auto relative">
                  {/* Loading Skeleton */}
                  {calLoading && (
                    <div className="absolute inset-0 bg-white z-10 p-8 flex flex-col justify-center items-center space-y-6 animate-pulse">
                      <div className="w-12 h-12 rounded-full border-4 border-[var(--color-primary)]/20 border-t-[var(--color-primary)] animate-spin mb-2" />
                      <div className="h-6 bg-slate-200 rounded-md w-64"></div>
                      <div className="h-4 bg-slate-100 rounded-md w-48"></div>
                      <div className="grid grid-cols-7 gap-3 w-full max-w-md pt-4">
                        {[...Array(28)].map((_, i) => (
                          <div key={i} className="h-10 bg-slate-100 rounded-lg"></div>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 font-medium">Caricamento calendario in corso...</p>
                    </div>
                  )}

                  {(() => {
                    const evt = calEvents.find(e => e.calLink === activeCalLink);
                    return (
                      <Cal
                        namespace={evt?.namespace}
                        calLink={activeCalLink}
                        style={{ width: "100%", height: "100%", minHeight: "600px" }}
                        config={{
                          layout: "month_view",
                          theme: evt?.theme as "light" | "dark"
                        }}
                      />
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Info */}
            <div className="space-y-10">
              <RevealSection>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4">Informazioni di contatto</h2>
                  <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                    Puoi raggiungerci tramite email, telefono o direttamente in sede. Riceviamo su appuntamento.
                  </p>
                </div>
              </RevealSection>

              <div className="space-y-4">
                <RevealSection stagger={1}>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-outline-variant)] interactive-card">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center shrink-0">
                      <MapPin className="text-[var(--color-primary)]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">La nostra sede</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                        Via Roma 69<br />
                        70029 Santeramo in Colle (BA)
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection stagger={2}>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-outline-variant)] interactive-card">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center shrink-0">
                      <Phone className="text-[var(--color-primary)]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">Telefono</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] mb-0.5">
                        Segreteria: <a href="tel:+393319434879" className="hover:text-[var(--color-primary)] transition-colors duration-200 font-semibold">+39 331 943 4879</a>
                      </p>
                      <p className="text-xs text-[var(--color-outline)]">
                        Lunedì – Venerdì: 09:00 – 18:00
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection stagger={3}>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-[var(--color-outline-variant)] interactive-card">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center shrink-0">
                      <Mail className="text-[var(--color-primary)]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-on-surface)] mb-1">Email</h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)] mb-0.5">
                        <a href="mailto:applicapsicologia@gmail.com" className="hover:text-[var(--color-primary)] transition-colors duration-200">applicapsicologia@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>

            {/* Contact Form */}
            <RevealSection stagger={1}>
              <div className="bg-white p-7 md:p-9 rounded-2xl border border-[var(--color-outline-variant)] ambient-shadow">
                <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Inviaci un messaggio</h2>

                {state.succeeded ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 bg-[var(--color-success-green)]/12 text-[var(--color-success-green)] rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-2">Messaggio inviato</h3>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">
                      Grazie per averci contattato. Ti risponderemo il prima possibile.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="nome" className="text-sm font-semibold text-[var(--color-on-surface)]">Nome</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="cognome" className="text-sm font-semibold text-[var(--color-on-surface)]">Cognome</label>
                        <input
                          type="text"
                          id="cognome"
                          name="cognome"
                          required
                          className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                          placeholder="Il tuo cognome"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-[var(--color-on-surface)]">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                        placeholder="la.tua@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="space-y-1.5 relative">
                      <label htmlFor="motivo" className="text-sm font-semibold text-[var(--color-on-surface)]">Motivo del contatto</label>
                      <input type="hidden" id="motivo" name="motivo" value={selectedMotivo} required />

                      <div
                        className={`w-full px-4 py-3 bg-[var(--color-surface)] border rounded-xl outline-none text-base cursor-pointer flex items-center justify-between transition-colors ${isSelectOpen ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : "border-[var(--color-outline-variant)]"
                          }`}
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                        tabIndex={0}
                        onBlur={(e) => {
                          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                            setIsSelectOpen(false)
                          }
                        }}
                      >
                        <span className={selectedMotivo ? "text-[var(--color-on-surface)]" : "text-[var(--color-on-surface-variant)]"}>
                          {selectedMotivo ? motivi.find(m => m.value === selectedMotivo)?.label : "Seleziona un'opzione"}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-[var(--color-on-surface-variant)] transition-transform duration-200 ${isSelectOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      {isSelectOpen && (
                        <div className="absolute top-full left-0 z-10 w-full mt-1 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                          {motivi.map((motivo) => (
                            <button
                              key={motivo.value}
                              type="button"
                              className={`w-full text-left px-4 py-3 text-base transition-colors focus:outline-none ${selectedMotivo === motivo.value
                                ? "bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-medium"
                                : "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)] focus:bg-[var(--color-surface-container-high)]"
                                }`}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setSelectedMotivo(motivo.value)
                                setIsSelectOpen(false)
                              }}
                            >
                              {motivo.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="messaggio" className="text-sm font-semibold text-[var(--color-on-surface)]">Messaggio</label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base resize-none text-[var(--color-on-surface)]"
                        placeholder="Come possiamo aiutarti?"
                      ></textarea>
                      <ValidationError prefix="Messaggio" field="messaggio" errors={state.errors} />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-3.5 rounded-xl font-semibold text-sm pressable hover:bg-[var(--color-primary-container)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Invio in corso..." : "Invia il messaggio"}
                      <Send size={16} />
                    </button>
                    <p className="text-xs text-[var(--color-outline)] text-center">
                      Inviando il modulo accetti la nostra Privacy Policy sul trattamento dei dati personali.
                    </p>
                  </form>
                )}
              </div>
            </RevealSection>

          </div>
        </div>
      </section>
    </>
  )
}
