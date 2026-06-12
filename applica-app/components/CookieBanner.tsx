"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Info, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    // Check local storage for consent
    const consent = localStorage.getItem("applica-cookie-consent")
    if (!consent) {
      // Show banner after a short delay for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptConsent = () => {
    localStorage.setItem("applica-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineConsent = () => {
    localStorage.setItem("applica-cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md w-[calc(100%-2rem)] md:w-full bg-white/95 backdrop-blur-md border border-[var(--color-outline-variant)]/60 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 z-50 overflow-hidden"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-container)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
              <Info size={18} />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h4 className="font-serif font-bold text-base text-[var(--color-on-surface)] leading-tight mb-1">
                  Informativa sui Cookie
                </h4>
                <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                  Questo sito utilizza esclusivamente cookie tecnici essenziali per il funzionamento e l&apos;autenticazione. Non usiamo cookie di profilazione o tracciamento pubblicitario. Puoi leggere maggiori dettagli nella nostra{" "}
                  <Link href="/cookie" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-container)] font-medium">
                    Cookie Policy
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacy" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-container)] font-medium">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              <div className="flex gap-2.5 items-center pt-1">
                <button
                  onClick={acceptConsent}
                  className="flex-1 bg-[var(--color-primary)] text-white text-xs font-semibold px-4 py-2.5 rounded-lg pressable hover:bg-[var(--color-primary-container)] text-center cursor-pointer"
                >
                  Accetta
                </button>
                <button
                  onClick={declineConsent}
                  className="flex-1 bg-[var(--color-surface-container)] text-[var(--color-on-surface)] text-xs font-semibold px-4 py-2.5 rounded-lg pressable hover:bg-[var(--color-surface-container-high)] text-center cursor-pointer border border-[var(--color-outline-variant)]/40"
                >
                  Solo necessari
                </button>
              </div>
            </div>
            
            <button
              onClick={declineConsent}
              className="text-[var(--color-on-surface-variant)]/50 hover:text-[var(--color-on-surface)] transition-colors p-1 -mr-1 rounded-lg hover:bg-[var(--color-surface-container)]"
              aria-label="Chiudi banner cookie"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
