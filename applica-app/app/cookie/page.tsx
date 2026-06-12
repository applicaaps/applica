"use client"

import * as React from "react"
import Link from "next/link"
import { Shield, Info, MapPin, Mail, ArrowLeft, Calendar, FileText } from "lucide-react"
import { RevealSection } from "@/components/RevealSection"

export default function CookiePolicy() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden border-b border-[var(--color-outline-variant)]/30 bg-[var(--color-surface-container-low)]">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[var(--color-primary-container)]/10 to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-[var(--color-secondary-fixed)]/10 to-transparent opacity-60 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <RevealSection>
            <div className="flex items-center gap-3 text-[var(--color-primary)] font-semibold text-sm mb-4">
              <Info size={18} />
              <span>Informativa sui Cookie</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-6 font-serif">
              Cookie Policy
            </h1>
            <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
              Trasparenza sull&apos;uso dei cookie. Questa informativa spiega come e perché il nostro sito utilizza strumenti di tracciamento tecnici e come gestirli.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-[var(--color-outline-variant)]/50 text-xs text-[var(--color-on-surface-variant)]/70">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[var(--color-primary)]" />
                Ultimo aggiornamento: 12 giugno 2026
              </span>
              <span className="hidden sm:inline text-[var(--color-outline-variant)]">|</span>
              <span className="flex items-center gap-1.5">
                <FileText size={14} className="text-[var(--color-primary)]" />
                Cookie Tecnici ed Essenziali
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          <RevealSection>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                1. Cosa sono i cookie
              </h2>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Questo sito utilizza solo cookie necessari al corretto funzionamento tecnico.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                2. Cookie utilizzati da questo sito
              </h2>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                Il sito <strong>applicaaps.com</strong> rilascia esclusivamente cookie di natura tecnica ed essenziale:
              </p>
              <div className="bg-white border border-[var(--color-outline-variant)]/50 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-container)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-on-surface)]">Cookie di sessione e sicurezza</h4>
                    <p className="text-sm text-[var(--color-on-surface-variant)] mt-1">
                      Necessari per identificare l&apos;utente e consentire l&apos;autenticazione nell&apos;area riservata agli psicologi, prevenendo accessi non autorizzati.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed mt-4">
                Non vengono utilizzati cookie di profilazione pubblicitaria, di tracciamento comportamentale o strumenti analytics di terze parti (come Google Analytics) alla data del presente aggiornamento.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                3. Collegamenti e servizi esterni
              </h2>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                Alcuni pulsanti o moduli integrati nel sito portano a servizi gestiti da terze parti (come i moduli di Google Forms per candidarsi o richiedere contatti). Questi servizi potrebbero rilasciare dei cookie propri al momento della navigazione sulla loro piattaforma esterna. Invitiamo gli utenti a consultare le rispettive policy di tali fornitori terzi per ulteriori dettagli.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                4. Come gestire e disabilitare i cookie
              </h2>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                È possibile controllare, limitare o disattivare i cookie modificando le impostazioni del proprio browser internet. Ti ricordiamo che disabilitando completamente i cookie tecnici, alcune funzionalità essenziali (come l&apos;accesso all&apos;area riservata) potrebbero non funzionare correttamente.
              </p>
              <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
                Di seguito i link alle istruzioni di disabilitazione dei cookie per i browser più comuni:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-semibold">
                {["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"].map((browser) => (
                  <li key={browser} className="p-3 bg-white border border-[var(--color-outline-variant)]/50 rounded-xl text-center shadow-sm">
                    {browser}
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-[var(--color-on-surface)]">
                5. Titolare del trattamento
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-[var(--color-outline-variant)]/50 space-y-4 shadow-sm">
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Per qualsiasi chiarimento in merito all&apos;utilizzo dei cookie, puoi contattare il Titolare:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <MapPin size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--color-on-surface)] font-serif">Sedi dell&apos;associazione</strong>
                      <span>
                        <strong>Domicilio fiscale:</strong> Via Stazione 163, 70029 Santeramo in Colle (BA)<br />
                        <strong>Sede operativa/contatti:</strong> Via Roma 69, 70029 Santeramo in Colle (BA)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <Mail size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--color-on-surface)] font-serif">Contatti</strong>
                      <span>
                        Email:{" "}
                        <a href="mailto:applicapsicologia@gmail.com" className="text-[var(--color-primary)] hover:underline">
                          applicapsicologia@gmail.com
                        </a>
                        <br />
                        Codice fiscale: 91152320726
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Back Link */}
          <RevealSection>
            <div className="pt-8 border-t border-[var(--color-outline-variant)]/50">
              <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-[gap] duration-200">
                <ArrowLeft size={16} />
                Torna alla Home
              </Link>
            </div>
          </RevealSection>

        </div>
      </section>
    </>
  )
}
