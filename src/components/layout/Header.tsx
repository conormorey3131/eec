'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MenuIcon, CloseIcon, ChevronDownIcon, PhoneIcon } from '@/components/ui/Icons'
import { NAV_LINKS, COMPANY, PHONE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
        scrolled
          ? 'bg-ivory-100/95 backdrop-blur-xl border-b border-charcoal-100/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
            {/* Monogram */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11">
              <div className="absolute inset-0 bg-forest-900 rounded-lg transform transition-transform duration-300 group-hover:rotate-3" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-ivory-100 text-lg font-medium tracking-tight">
                  EE
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-forest-900 text-base font-medium tracking-tight">
                Efficient Energy
              </span>
              <span className="block text-xs text-charcoal-500 tracking-wide">
                Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-charcoal-700 hover:text-forest-900 transition-colors"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={cn(
                          'w-4 h-4 transition-transform duration-300',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'absolute top-full left-0 pt-2 transition-all duration-300',
                        openDropdown === link.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      )}
                    >
                      <div className="w-64 bg-white rounded-xl shadow-elevated border border-charcoal-100/50 py-2 overflow-hidden">
                        {link.children.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-center gap-3 px-4 py-3 text-sm text-charcoal-700 hover:bg-ivory-100 transition-colors"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="group-hover:text-forest-900 transition-colors">
                              {child.label}
                            </span>
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
                    'px-4 py-2.5 text-sm font-medium transition-colors',
                    isHighlighted
                      ? 'text-copper-600 hover:text-copper-700'
                      : 'text-charcoal-700 hover:text-forest-900'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={PHONE_URL}
              className="group flex items-center gap-2 text-sm font-medium text-charcoal-600 hover:text-forest-900 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>{COMPANY.phone}</span>
            </a>
            <div className="w-px h-5 bg-charcoal-200" />
            <Button href="/contact" size="sm" variant="primary">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 text-charcoal-700 hover:text-forest-900 transition-colors"
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

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-ivory-100 transition-all duration-500 ease-out-expo',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <Container className="py-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link, idx) => {
              if ('children' in link) {
                return (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-4 text-lg font-display font-medium text-charcoal-900"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={cn(
                          'w-5 h-5 transition-transform duration-300',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        openDropdown === link.label ? 'max-h-96' : 'max-h-0'
                      )}
                    >
                      <div className="pl-6 border-l-2 border-copper-500/30 ml-4 space-y-1 pb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-base text-charcoal-600 hover:text-forest-900"
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
                    'px-4 py-4 text-lg font-display font-medium',
                    isMobileHighlighted ? 'text-copper-600' : 'text-charcoal-900'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-charcoal-200">
            <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Button>
            <a
              href={PHONE_URL}
              className="flex items-center justify-center gap-2 mt-4 py-3 text-charcoal-600"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-medium">{COMPANY.phone}</span>
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}
