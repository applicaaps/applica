"use client"

import * as React from "react"
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"

export default function Contatti() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[var(--color-surface-container-low)] py-16 md:py-20 px-4 md:px-6 border-b border-[var(--color-outline-variant)]/50">
        <div className="container mx-auto max-w-4xl text-center">
          <RevealSection>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] mb-5 tracking-tight">
              Siamo qui per ascoltarti
            </h1>
          </RevealSection>
          <RevealSection stagger={1}>
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
              Che tu voglia iniziare un percorso terapeutico o unirti alla nostra rete di professionisti, il team Applica è pronto a rispondere.
            </p>
          </RevealSection>
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
                        Via Esempio, 123<br />
                        00100 Roma (RM)
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
                        Segreteria: <a href="tel:+390612345678" className="hover:text-[var(--color-primary)] transition-colors duration-200">+39 06 1234 5678</a>
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
                        Informazioni: <a href="mailto:info@applica-aps.it" className="hover:text-[var(--color-primary)] transition-colors duration-200">info@applica-aps.it</a>
                      </p>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">
                        Professionisti: <a href="mailto:rete@applica-aps.it" className="hover:text-[var(--color-primary)] transition-colors duration-200">rete@applica-aps.it</a>
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
                
                {isSubmitted ? (
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
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                        placeholder="la.tua@email.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="motivo" className="text-sm font-semibold text-[var(--color-on-surface)]">Motivo del contatto</label>
                      <select 
                        id="motivo" 
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                        defaultValue=""
                      >
                        <option value="" disabled>Seleziona un&apos;opzione</option>
                        <option value="paziente">Informazioni per iniziare un percorso (Pazienti)</option>
                        <option value="professionista">Candidatura rete (Professionisti)</option>
                        <option value="materiali">Informazioni sui materiali</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="messaggio" className="text-sm font-semibold text-[var(--color-on-surface)]">Messaggio</label>
                      <textarea 
                        id="messaggio" 
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base resize-none text-[var(--color-on-surface)]"
                        placeholder="Come possiamo aiutarti?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-3.5 rounded-xl font-semibold text-sm pressable hover:bg-[var(--color-primary-container)]"
                    >
                      Invia il messaggio
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
