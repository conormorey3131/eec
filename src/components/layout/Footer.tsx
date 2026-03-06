import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { PhoneIcon, EmailIcon, CoverageIcon } from '@/components/ui/Icons'
import { COMPANY, FOOTER_LINKS, PHONE_URL } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-ivory-200 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grain mix-blend-overlay" />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-copper-500/50 to-transparent" />

      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="py-16 sm:py-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/logo.png"
                alt="Efficient Energy Consultancy"
                width={400}
                height={120}
                className="h-20 w-auto brightness-0 invert object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-ivory-400 mb-8 max-w-xs leading-relaxed">
              Professional EU Taxonomy Reports, BER Certificates, and energy
              assessment services across Ireland.
            </p>
            <div className="space-y-4">
              <a
                href={PHONE_URL}
                className="flex items-center gap-3 text-sm text-ivory-300 hover:text-copper-400 transition-colors group"
              >
                <PhoneIcon className="w-5 h-5 text-copper-500 group-hover:scale-110 transition-transform" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-ivory-300 hover:text-copper-400 transition-colors group"
              >
                <EmailIcon className="w-5 h-5 text-copper-500 group-hover:scale-110 transition-transform" />
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-ivory-400">
                <CoverageIcon className="w-5 h-5 text-copper-500" />
                {COMPANY.address.city}, {COMPANY.address.county}
              </div>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-display text-ivory-100 font-medium mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-copper-500" />
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-400 hover:text-ivory-100 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-display text-ivory-100 font-medium mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-copper-500" />
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-400 hover:text-ivory-100 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-ivory-100 font-medium mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-copper-500" />
              Locations
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.locations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-400 hover:text-ivory-100 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ivory-500">
              Serving all 26 counties across Ireland
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-ivory-100/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ivory-500">
            &copy; {currentYear} {COMPANY.name}
          </p>
          <div className="flex items-center gap-8 text-sm text-ivory-500">
            <Link href="/privacy" className="hover:text-ivory-200 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory-200 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
