import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Applica APS" width={72} height={72} className="object-contain" />
              <span className="font-serif font-bold text-lg text-white">
                Applica APS
              </span>
            </Link>
            <p className="text-[var(--color-inverse-on-surface)]/70 text-sm max-w-xs leading-relaxed">
              Promuoviamo il benessere psicologico con un approccio scientifico, accessibile e profondamente umano.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-base">Associazione</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/chi-siamo" className="text-sm text-[var(--color-inverse-on-surface)]/60 hover:text-white transition-colors duration-200">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-sm text-[var(--color-inverse-on-surface)]/60 hover:text-white transition-colors duration-200">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-base">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--color-inverse-on-surface)]/60">
                <MapPin size={16} className="text-[var(--color-primary-fixed)] shrink-0 mt-0.5" />
                <span>Via Roma 69, 70029 Santeramo in Colle (BA)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-inverse-on-surface)]/60">
                <Phone size={16} className="text-[var(--color-primary-fixed)] shrink-0" />
                <a href="tel:+393319434879" className="hover:text-white transition-colors duration-200">
                  +39 331 943 4879
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-inverse-on-surface)]/60">
                <Mail size={16} className="text-[var(--color-primary-fixed)] shrink-0" />
                <a href="mailto:applicapsicologia@gmail.com" className="hover:text-white transition-colors duration-200">
                  applicapsicologia@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Area Riservata */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-base">Area Riservata</h4>
            <p className="text-sm text-[var(--color-inverse-on-surface)]/60 mb-4">
              Accedi per gestire eventi, documenti e materiali clinici.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium border border-[var(--color-inverse-on-surface)]/20 hover:bg-white/10 h-9 px-5 py-2 text-white transition-colors duration-200 pressable"
            >
              Accedi all&apos;area riservata
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-inverse-on-surface)]/50">
            &copy; {new Date().getFullYear()} Applica APS. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-sm text-[var(--color-inverse-on-surface)]/50">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
