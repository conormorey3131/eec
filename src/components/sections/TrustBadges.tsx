'use client'

import { Container } from '@/components/ui/Container'
import { TRUST_SIGNALS } from '@/lib/constants'
import { getTrustIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

interface TrustBadgesProps {
  className?: string
  variant?: 'default' | 'compact' | 'dark' | 'minimal'
}

export function TrustBadges({ className, variant = 'default' }: TrustBadgesProps) {
  if (variant === 'minimal') {
    return (
      <div className={cn('py-8 bg-ivory-100 border-b border-charcoal-100/50', className)}>
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_SIGNALS.map((signal, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-900 text-copper-400">
                  {getTrustIcon(signal.icon, 'w-4 h-4')}
                </span>
                <span className="font-medium text-charcoal-700">{signal.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn('py-6 border-b border-charcoal-100', className)}>
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {TRUST_SIGNALS.map((signal, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 text-sm text-charcoal-600"
              >
                <span className="text-copper-600">
                  {getTrustIcon(signal.icon, 'w-4 h-4')}
                </span>
                <span className="font-medium">{signal.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }

  if (variant === 'dark') {
    return (
      <section className={cn('py-12 bg-forest-900', className)}>
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {TRUST_SIGNALS.map((signal, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory-100/10 text-copper-400">
                  {getTrustIcon(signal.icon, 'w-6 h-6')}
                </div>
                <span className="text-sm font-medium text-ivory-200">
                  {signal.text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn('py-16 sm:py-20 bg-white border-y border-charcoal-100/50', className)}>
      <Container>
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-px bg-copper-500/50" />
          <span className="overline text-charcoal-500">Trusted Expertise</span>
          <div className="w-12 h-px bg-copper-500/50" />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {TRUST_SIGNALS.map((signal, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 w-16 h-16 rounded-full border border-copper-500/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
                {/* Icon container */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ivory-100 text-forest-900 transition-all duration-300 group-hover:bg-forest-900 group-hover:text-ivory-100">
                  {getTrustIcon(signal.icon, 'w-7 h-7')}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-charcoal-800 group-hover:text-forest-900 transition-colors">
                  {signal.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
