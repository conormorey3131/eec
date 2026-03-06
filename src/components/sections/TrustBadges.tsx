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
    <section className={cn('relative py-16 sm:py-20 bg-white', className)}>
      {/* Gradient transition from dark hero */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-forest-950 to-transparent -translate-y-full" />

      <Container>
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12">
          <div className="w-10 h-px bg-copper-500/40" />
          <span className="text-xs font-semibold tracking-widest uppercase text-charcoal-500">Trusted Expertise</span>
          <div className="w-10 h-px bg-copper-500/40" />
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10">
          {TRUST_SIGNALS.map((signal, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-forest-900 text-copper-400 transition-all duration-300 group-hover:bg-copper-600 group-hover:text-white group-hover:scale-105">
                {getTrustIcon(signal.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
              </div>
              <span className="text-sm font-medium text-charcoal-700">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
