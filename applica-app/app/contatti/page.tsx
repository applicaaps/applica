"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Send, CheckCircle2, ChevronDown, User, Brain } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"
import { useForm, ValidationError } from '@formspree/react'

export default function Contatti() {

  const [state, handleSubmit] = useForm("mjgzdlqo")
  const [isSelectOpen, setIsSelectOpen] = React.useState(false)
  const [selectedMotivo, setSelectedMotivo] = React.useState("")

  const motivi = [
    { value: "paziente", label: "Informazioni per iniziare un percorso (Pazienti)" },
    { value: "professionista", label: "Candidatura rete (Professionisti)" },
    { value: "materiali", label: "Informazioni sui materiali" },
    { value: "altro", label: "Altro" },
  ]

  return (
    <>
      {/* ─── Hero Split ─── */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[var(--color-primary-container)]/30 to-transparent opacity-50 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100 to-transparent opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <RevealSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-on-surface)] mb-5 tracking-tight">
                Unisciti ad Applica
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
                Che tu stia cercando il percorso giusto per te o che tu voglia crescere professionalmente nella nostra rete.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Divider for desktop */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[var(--color-outline-variant)] to-transparent -translate-x-1/2"></div>

            {/* Pazienti */}
            <RevealSection stagger={1}>
              <div className="group h-full bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">
                  Per i Pazienti
                </h2>
                <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed mb-8 flex-1">
                  Inizia un percorso terapeutico su misura, basato su evidenze scientifiche e un approccio profondamente umano. Siamo qui per ascoltarti.
                </p>
                <Link 
                  href="/pazienti"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-sm pressable hover:bg-orange-600 transition-colors w-full sm:w-auto shadow-sm shadow-orange-500/20"
                >
                  Richiedi informazioni
                </Link>
              </div>
            </RevealSection>

            {/* Professionisti */}
            <RevealSection stagger={2}>
              <div className="group h-full bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">
                  Per i Professionisti
                </h2>
                <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed mb-8 flex-1">
                  Entra in una rete di clinici eccellenti. Accedi a supervisione continua, formazione e strumenti condivisi per crescere insieme.
                </p>
                <Link 
                  href="/professionisti"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm pressable hover:bg-blue-600 transition-colors w-full sm:w-auto shadow-sm shadow-blue-500/20"
                >
                  Candidati ora
                </Link>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
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
                        Segreteria: <span className="hover:text-[var(--color-primary)] transition-colors duration-200">---</span>
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
                        className={`w-full px-4 py-3 bg-[var(--color-surface)] border rounded-xl outline-none text-base cursor-pointer flex items-center justify-between transition-colors ${
                          isSelectOpen ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : "border-[var(--color-outline-variant)]"
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
                              className={`w-full text-left px-4 py-3 text-base transition-colors focus:outline-none ${
                                selectedMotivo === motivo.value 
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
