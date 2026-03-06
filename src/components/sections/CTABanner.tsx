'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PhoneIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { COMPANY, PHONE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface CTABannerProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'primary' | 'minimal'
}

export function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = 'Contact us today for a free consultation on your energy assessment needs.',
  variant = 'default',
}: CTABannerProps) {
  if (variant === 'minimal') {
    return (
      <section className="py-16 sm:py-20 bg-white border-t border-charcoal-100/50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-forest-900 mb-2">
                {title}
              </h3>
              <p className="text-charcoal-600">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Get a Quote
              </Button>
              <Button
                href={PHONE_URL}
                variant="secondary"
                size="lg"
                icon={<PhoneIcon className="w-5 h-5" />}
              >
                {COMPANY.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  if (variant === 'primary') {
    return (
      <section className="py-20 sm:py-28 bg-forest-900 relative overflow-hidden">
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-grain" />
        </div>

        {/* Geometric accents */}
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-copper-500/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-copper-500/30 to-transparent" />
        <div className="absolute top-10 right-20 w-20 h-20 border border-copper-500/10 rounded-full" />
        <div className="absolute bottom-10 left-20 w-32 h-32 border border-copper-500/10 rounded-full" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-400">Get Started</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2
              className="headline-md text-ivory-100 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              {title}
            </h2>

            <p
              className="text-lg text-ivory-300 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Request a Quote
              </Button>
              <Button
                href={PHONE_URL}
                variant="ghost"
                size="lg"
                icon={<PhoneIcon className="w-5 h-5" />}
                className="text-ivory-200 hover:text-ivory-100"
              >
                {COMPANY.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  // Default variant
  return (
    <section className="py-20 sm:py-28 bg-ivory-200 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/5 via-transparent to-copper-500/5" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl p-10 sm:p-16 shadow-dramatic overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-copper-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-copper-500/20 rounded-br-3xl" />

            {/* Background accent circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-copper-500/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-forest-900/5 rounded-full" />

            <div className="relative text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">Let&apos;s Talk</span>
                <div className="w-8 h-px bg-copper-500" />
              </div>

              <h2 className="headline-md text-forest-900 mb-6">
                {title}
              </h2>

              <p className="text-lg text-charcoal-600 max-w-2xl mx-auto mb-10">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Request a Quote
                </Button>
                <Button
                  href={PHONE_URL}
                  variant="secondary"
                  size="lg"
                  icon={<PhoneIcon className="w-5 h-5" />}
                >
                  Call {COMPANY.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
