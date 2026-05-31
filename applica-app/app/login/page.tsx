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
    
    setTimeout(() => {
      document.cookie = "applica_session=authenticated_mock_token; path=/; max-age=86400"
      router.push("/area-riservata")
      router.refresh()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-secondary-container)]/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl border border-[var(--color-outline-variant)] ambient-shadow relative" style={{ zIndex: 1 }}>
        
        <div className="text-center mb-9">
          <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Area Riservata</h1>
          <p className="text-sm text-[var(--color-on-surface-variant)]">
            Accedi per gestire eventi e materiali clinici
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[var(--color-on-surface)]">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={18} />
              <input 
                type="email" 
                required
                defaultValue="danubia.macario@applica-aps.it"
                className="w-full pl-11 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                placeholder="Inserisci la tua email"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-[var(--color-on-surface)]">Password</label>
              <a href="#" className="text-xs font-medium text-[var(--color-primary)] hover:underline">
                Password dimenticata?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={18} />
              <input 
                type="password" 
                required
                defaultValue="password123"
                className="w-full pl-11 pr-4 py-3 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-base text-[var(--color-on-surface)]"
                placeholder="Inserisci la tua password"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-3.5 rounded-xl font-semibold text-sm pressable hover:bg-[var(--color-primary-container)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="animate-pulse">Accesso in corso…</span>
            ) : (
              <>
                Accedi all&apos;area riservata
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[var(--color-on-surface-variant)]">
          <p>
            Non sei nella rete?{" "}
            <a href="/chi-siamo" className="font-semibold text-[var(--color-primary)] hover:underline">Scopri come candidarti</a>
          </p>
        </div>
      </div>
    </div>
  )
}
