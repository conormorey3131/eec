'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MenuIcon, CloseIcon, ChevronDownIcon, PhoneIcon, EmailIcon } from '@/components/ui/Icons'
import { NAV_LINKS, COMPANY, PHONE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'h-20 lg:h-24', // Fixed height: 80px mobile, 96px desktop
        scrolled
          ? 'bg-white shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-2 group">
            <Image
              src="/logo.png"
              alt="Efficient Energy Consultancy"
              width={400}
              height={120}
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if ('children' in link) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={cn(
                          'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                          'text-charcoal-600 hover:text-forest-900 hover:bg-forest-50'
                        )}
                        aria-expanded={openDropdown === link.label}
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={cn(
                            'w-4 h-4 transition-transform duration-200',
                            openDropdown === link.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          'absolute top-full left-0 pt-2 transition-all duration-200',
                          openDropdown === link.label
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-1 pointer-events-none'
                        )}
                      >
                        <div className="w-56 bg-white rounded-xl shadow-lg border border-charcoal-100 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-charcoal-600 hover:text-forest-900 hover:bg-forest-50 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                const isHighlighted = 'highlight' in link && link.highlight
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      isHighlighted
                        ? 'text-copper-600 hover:text-copper-700 hover:bg-copper-50'
                        : 'text-charcoal-600 hover:text-forest-900 hover:bg-forest-50'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Desktop CTA - Right */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href={PHONE_URL}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-forest-900 transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-copper-500" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-forest-900 transition-colors"
            >
              <EmailIcon className="w-4 h-4 text-copper-500" />
              <span>{COMPANY.email}</span>
            </a>
            <Button href="/contact" size="sm" variant="primary">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-charcoal-700 hover:text-forest-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <MenuIcon
                className={cn(
                  'absolute inset-0 w-6 h-6 transition-all duration-300',
                  mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                )}
              />
              <CloseIcon
                className={cn(
                  'absolute inset-0 w-6 h-6 transition-all duration-300',
                  mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-[60]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bg-white border-t border-charcoal-100 z-[70] transition-all duration-300 shadow-xl',
          'max-h-[calc(100vh-80px-80px)] overflow-y-auto', // Account for header (80px) and sticky bar (~80px)
          mobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              if ('children' in link) {
                return (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-charcoal-900 rounded-lg hover:bg-forest-50 transition-colors"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={cn(
                          'w-5 h-5 transition-transform duration-200',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-200',
                        openDropdown === link.label ? 'max-h-96' : 'max-h-0'
                      )}
                    >
                      <div className="pl-4 border-l-2 border-copper-400 ml-4 space-y-1 py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-charcoal-600 hover:text-forest-900 rounded-lg hover:bg-forest-50 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              const isMobileHighlighted = 'highlight' in link && link.highlight
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    isMobileHighlighted
                      ? 'text-copper-600 hover:bg-copper-50'
                      : 'text-charcoal-900 hover:bg-forest-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-charcoal-100">
            <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Button>
            <a
              href={PHONE_URL}
              className="flex items-center justify-center gap-2 mt-4 py-3 text-charcoal-600 font-medium"
            >
              <PhoneIcon className="w-5 h-5 text-copper-500" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center justify-center gap-2 py-3 text-charcoal-600 font-medium"
            >
              <EmailIcon className="w-5 h-5 text-copper-500" />
              <span>{COMPANY.email}</span>
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}
