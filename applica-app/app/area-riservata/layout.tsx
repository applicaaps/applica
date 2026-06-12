"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, CalendarDays, FileText, LogOut, Info } from "lucide-react"

export default function AreaRiservataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "applica_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    router.push("/login")
    router.refresh()
  }

  const navItems = [
    { name: "Dashboard", href: "/area-riservata", icon: LayoutDashboard },
    { name: "Eventi", href: "/area-riservata/eventi", icon: CalendarDays },
    { name: "Documenti", href: "/area-riservata/documenti", icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-surface-container-low)] pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Sidebar */}
          <aside className="w-full md:w-60 shrink-0">
            <div className="bg-white rounded-2xl p-5 border border-[var(--color-outline-variant)] ambient-shadow sticky top-24">
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--color-outline-variant)]/50">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] flex items-center justify-center font-semibold text-sm shrink-0">
                  DM
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[var(--color-on-surface)] text-sm truncate">Dottoressa Danubia Macario</h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">Professionista</p>
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]" 
                          : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)] hover:text-[var(--color-on-surface)]"
                      }`}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-[var(--color-outline-variant)]/50">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-error)] hover:bg-[var(--color-error)]/8 transition-colors duration-200 pressable"
                >
                  <LogOut size={18} />
                  Esci
                </button>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Disclaimer Demo */}
            <div className="bg-amber-50/80 border border-amber-200/50 rounded-2xl p-5 flex items-start gap-3.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-100/60 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Info size={16} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-amber-950 leading-none">Anteprima Dimostrativa (DEMO)</h4>
                <p className="text-xs text-amber-800/90 leading-relaxed">
                  Stai navigando una versione dimostrativa di anteprima. I dati clinici, gli eventi e la documentazione sono simulati e fittizi; la piattaforma reale integrata con i servizi interni sarà resa pienamente operativa a breve.
                </p>
              </div>
            </div>
            {children}
          </main>

        </div>
      </div>
    </div>
  )
}
