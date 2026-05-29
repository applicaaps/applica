"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/cosa-facciamo", label: "Cosa Facciamo" },
  { href: "/materiali", label: "Materiali" },
  { href: "/community", label: "Community" },
  { href: "/contatti", label: "Contatti" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-[var(--color-outline-variant)] shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold font-serif text-xl group-hover:bg-[var(--color-primary-container)] transition-colors">
              A
            </div>
            <span className="font-serif font-bold text-xl text-[var(--color-on-surface)]">
              Applica APS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                  pathname === link.href
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-on-surface-variant)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden lg:flex">
                  Area Riservata
                </Button>
              </Link>
              <Link href="/contatti">
                <Button size="sm">Prenota colloquio</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--color-on-surface)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-[var(--color-outline-variant)] shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2 rounded-md text-base font-medium transition-colors hover:bg-[var(--color-surface-container)]",
                  pathname === link.href
                    ? "text-[var(--color-primary)] font-semibold bg-[var(--color-surface-container-low)]"
                    : "text-[var(--color-on-surface)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[var(--color-outline-variant)]" />
            <div className="flex flex-col gap-2 p-4 pt-0">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  Area Riservata
                </Button>
              </Link>
              <Link href="/contatti" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-start">Prenota colloquio</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
