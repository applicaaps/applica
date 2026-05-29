"use client"

import * as React from "react"
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react"

export default function Contatti() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-container)] py-20 px-4 md:px-6 border-b border-[var(--color-outline-variant)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-fixed)]/30 text-[var(--color-on-primary-fixed-variant)] text-sm font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4">
            Contattaci
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-deep-teal)] mb-6 animate-in fade-in slide-in-from-bottom-8 delay-100">
            Siamo qui per ascoltarti
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] animate-in fade-in slide-in-from-bottom-8 delay-200">
            Che tu voglia iniziare un percorso terapeutico o unirti alla nostra rete di professionisti, il nostro team è pronto a rispondere alle tue domande.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-6">Informazioni di contatto</h2>
                <p className="text-base text-[var(--color-on-surface-variant)] mb-8">
                  Puoi raggiungerci tramite email, telefono o venendoci a trovare direttamente in sede. Riceviamo su appuntamento.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors smooth-card">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[var(--color-primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">La nostra Sede</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                      Via Esempio, 123<br />
                      00100 Roma (RM)<br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors smooth-card">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[var(--color-primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">Telefono</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)] mb-1">
                      Segreteria: <a href="tel:+390612345678" className="hover:text-[var(--color-primary)] transition-colors">+39 06 1234 5678</a>
                    </p>
                    <p className="text-sm text-[var(--color-outline)]">
                      Lunedì - Venerdì: 09:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors smooth-card">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[var(--color-primary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-deep-teal)] mb-2">Email</h3>
                    <p className="text-base text-[var(--color-on-surface-variant)] mb-1">
                      Informazioni: <a href="mailto:info@applica-aps.it" className="hover:text-[var(--color-primary)] transition-colors">info@applica-aps.it</a>
                    </p>
                    <p className="text-base text-[var(--color-on-surface-variant)]">
                      Professionisti: <a href="mailto:rete@applica-aps.it" className="hover:text-[var(--color-primary)] transition-colors">rete@applica-aps.it</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 md:p-10 rounded-3xl border border-[var(--color-outline-variant)] ambient-shadow smooth-card">
              <h2 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-6">Inviaci un messaggio</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-[var(--color-success-green)]/20 text-[var(--color-success-green)] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-2">Messaggio Inviato!</h3>
                  <p className="text-base text-[var(--color-on-surface-variant)]">
                    Grazie per averci contattato. Ti risponderemo il prima possibile.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-bold text-[var(--color-on-surface)]">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cognome" className="text-sm font-bold text-[var(--color-on-surface)]">Cognome</label>
                      <input 
                        type="text" 
                        id="cognome" 
                        required
                        className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[var(--color-on-surface)]">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                      placeholder="la.tua@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="motivo" className="text-sm font-bold text-[var(--color-on-surface)]">Motivo del contatto</label>
                    <select 
                      id="motivo" 
                      required
                      className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                    >
                      <option value="" disabled selected>Seleziona un'opzione</option>
                      <option value="paziente">Informazioni per iniziare un percorso (Pazienti)</option>
                      <option value="professionista">Candidatura rete (Professionisti)</option>
                      <option value="materiali">Informazioni sui materiali</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="messaggio" className="text-sm font-bold text-[var(--color-on-surface)]">Messaggio</label>
                    <textarea 
                      id="messaggio" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base resize-none"
                      placeholder="Come possiamo aiutarti?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-xl font-bold uppercase text-sm hover:shadow-lg transition-all smooth-btn group"
                  >
                    Invia Messaggio
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-xs text-[var(--color-outline)] text-center mt-4">
                    Inviando il modulo accetti la nostra Privacy Policy sul trattamento dei dati personali.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
