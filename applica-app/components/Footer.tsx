import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[var(--color-primary-fixed)] flex items-center justify-center text-[var(--color-on-primary-fixed)] font-bold font-serif">
                A
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Applica APS
              </span>
            </Link>
            <p className="text-[var(--color-outline-variant)] text-sm max-w-xs leading-relaxed">
              Psicologia concreta, accessibile e trasformativa. Promuoviamo il benessere psicologico e supportiamo la crescita dei professionisti.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-[var(--color-outline-variant)] hover:text-white transition-colors text-sm font-medium">
                Instagram
              </Link>
              <Link href="#" className="text-[var(--color-outline-variant)] hover:text-white transition-colors text-sm font-medium">
                Facebook
              </Link>
              <Link href="#" className="text-[var(--color-outline-variant)] hover:text-white transition-colors text-sm font-medium">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-lg">Associazione</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/chi-siamo" className="text-sm text-[var(--color-outline-variant)] hover:text-[var(--color-primary-fixed)] transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/cosa-facciamo" className="text-sm text-[var(--color-outline-variant)] hover:text-[var(--color-primary-fixed)] transition-colors">
                  Cosa Facciamo
                </Link>
              </li>
              <li>
                <Link href="/materiali" className="text-sm text-[var(--color-outline-variant)] hover:text-[var(--color-primary-fixed)] transition-colors">
                  Materiali Psicoeducativi
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-[var(--color-outline-variant)] hover:text-[var(--color-primary-fixed)] transition-colors">
                  La Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-lg">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--color-outline-variant)]">
                <MapPin size={18} className="text-[var(--color-primary-fixed)] shrink-0" />
                <span>Via Esempio 123, 00100 Roma (RM)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-outline-variant)]">
                <Phone size={18} className="text-[var(--color-primary-fixed)] shrink-0" />
                <span>+39 06 12345678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-outline-variant)]">
                <Mail size={18} className="text-[var(--color-primary-fixed)] shrink-0" />
                <a href="mailto:info@applica-aps.it" className="hover:text-white transition-colors">
                  info@applica-aps.it
                </a>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white font-serif text-lg">Area Riservata</h4>
            <p className="text-sm text-[var(--color-outline-variant)] mb-4">
              Accedi all'area membri per gestire eventi, documenti e materiali esclusivi.
            </p>
            <Link href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-[var(--color-outline)] hover:bg-[var(--color-surface-container)] hover:text-[var(--color-on-surface)] h-9 px-4 py-2 w-full sm:w-auto text-white">
              Accedi
            </Link>
          </div>
        </div>

        <div className="border-t border-[var(--color-outline)]/30 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-outline-variant)]">
            &copy; {new Date().getFullYear()} Applica APS. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--color-outline-variant)]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
