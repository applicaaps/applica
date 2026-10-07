"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/programma", label: "Programma" },
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
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full border-none",
        "transition-[background-color,padding,box-shadow] duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-3"
          : "bg-transparent py-5"
      )}
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center h-10 w-10">
              <Image src="/logo.png" alt="Applica APS" width={100} height={100} className="object-contain scale-[1.8] md:scale-[2]" />
            </div>
            <span className="font-serif font-bold text-lg text-[var(--color-on-surface)]">
              Applica APS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                    : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3 flex items-center gap-2">
              {/* Login nascosto temporaneamente:
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden lg:flex">
                  Area Riservata
                </Button>
              </Link>
              */}
              <Link href="/contatti">
                <Button size="sm">Unisciti ad Applica</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors duration-200 pressable"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen & Centered */}
      <div
        className={cn(
          "md:hidden fixed inset-0 w-screen h-screen bg-white/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center px-6 py-12",
          "transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Close Button inside fullscreen menu */}
        <button
          className="absolute top-6 right-6 p-3 rounded-full text-[var(--color-on-surface)] bg-[var(--color-surface-container)] hover:bg-[var(--color-outline-variant)]/40 transition-colors pressable"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Chiudi menu"
        >
          <X size={26} />
        </button>

        <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-sm text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "w-full py-3.5 rounded-2xl text-2xl font-bold transition-all duration-200",
                pathname === link.href
                  ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 scale-105"
                  : "text-[var(--color-on-surface)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-16 h-0.5 bg-[var(--color-outline-variant)]/60 my-4 rounded-full" />

          <div className="w-full pt-2">
            <Link href="/contatti" onClick={() => setMobileMenuOpen(false)} className="w-full block">
              <Button size="lg" className="w-full justify-center text-lg py-6 rounded-2xl shadow-lg shadow-[var(--color-primary)]/20">
                Unisciti ad Applica
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
