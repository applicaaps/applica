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
        "fixed top-0 w-full border-b border-transparent",
        "transition-[background-color,border-color,padding,box-shadow] duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-[var(--color-outline-variant)]/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-3"
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
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden lg:flex">
                  Area Riservata
                </Button>
              </Link>
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

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[var(--color-outline-variant)]/50 shadow-lg",
          "transition-[opacity,transform] duration-200",
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200",
                pathname === link.href
                  ? "text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/5"
                  : "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-[var(--color-outline-variant)]/50 my-2" />
          <div className="flex flex-col gap-2 px-4 pt-1 pb-2">
            <Link href="/login">
              <Button variant="outline" className="w-full justify-center">
                Area Riservata
              </Button>
            </Link>
            <Link href="/contatti" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center">Unisciti ad Applica</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
