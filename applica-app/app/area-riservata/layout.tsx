"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, CalendarDays, FileText, LogOut, User as UserIcon } from "lucide-react"

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
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-6 border border-[var(--color-outline-variant)] ambient-shadow smooth-card sticky top-28">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] flex items-center justify-center font-bold text-lg shrink-0">
                  MR
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-deep-teal)] text-sm">Dott. Mario Rossi</h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">Professionista</p>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all smooth-btn ${
                        isActive 
                          ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]" 
                          : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)]"
                      }`}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-[var(--color-outline-variant)]">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-[var(--color-error)] hover:bg-[var(--color-error)]/10 transition-colors smooth-btn"
                >
                  <LogOut size={18} />
                  Esci
                </button>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

        </div>
      </div>
    </div>
  )
}
