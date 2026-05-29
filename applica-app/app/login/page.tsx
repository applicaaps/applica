"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Lock, Mail, ArrowRight } from "lucide-react"

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulazione di chiamata API e login
    setTimeout(() => {
      // Imposta un cookie fittizio per simulare la sessione
      document.cookie = "applica_session=authenticated_mock_token; path=/; max-age=86400"
      router.push("/area-riservata")
      router.refresh()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex items-center justify-center p-4">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary-fixed)]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-soft-clay)]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md bg-[var(--color-surface-container-lowest)] p-8 md:p-10 rounded-3xl border border-[var(--color-outline-variant)] ambient-shadow relative z-10 animate-in fade-in zoom-in duration-700">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-2">Area Riservata</h1>
          <p className="text-sm text-[var(--color-on-surface-variant)]">
            Accedi per gestire i tuoi eventi e materiali clinici
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[var(--color-on-surface)]">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={20} />
              <input 
                type="email" 
                required
                defaultValue="mario.rossi@applica-aps.it"
                className="w-full pl-12 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                placeholder="Inserisci la tua email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[var(--color-on-surface)]">Password</label>
              <a href="#" className="text-xs font-bold text-[var(--color-primary)] hover:underline">
                Password dimenticata?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={20} />
              <input 
                type="password" 
                required
                defaultValue="password123"
                className="w-full pl-12 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base"
                placeholder="Inserisci la tua password"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-xl font-bold uppercase text-sm hover:shadow-lg transition-all smooth-btn group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="animate-pulse">Accesso in corso...</span>
            ) : (
              <>
                Accedi
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[var(--color-on-surface-variant)]">
          <p>
            Non sei ancora un professionista della rete? <br />
            <a href="/chi-siamo" className="font-bold text-[var(--color-primary)] hover:underline">Scopri come candidarti</a>
          </p>
        </div>
      </div>
    </div>
  )
}
