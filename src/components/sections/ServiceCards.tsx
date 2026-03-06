'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ArrowRightIcon, getServiceIcon } from '@/components/ui/Icons'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

interface ServiceCardsProps {
  showPrimary?: boolean
  limit?: number
  title?: string
  subtitle?: string
}

export function ServiceCards({
  showPrimary = true,
  limit,
  title = 'Our Services',
  subtitle,
}: ServiceCardsProps) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-copper-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-px bg-copper-500" />
            <span className="overline text-copper-600">What We Offer</span>
            <div className="w-8 h-px bg-copper-500" />
          </div>

          <h2
            className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="subhead opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => {
            const href = service.isPrimary
              ? '/eu-taxonomy-reports'
              : `/services/${service.slug}`
            const isPrimary = service.isPrimary && showPrimary

            return (
              <Link
                key={service.slug}
                href={href}
                className={cn(
                  'group relative block opacity-0 animate-fade-up',
                  isPrimary && 'sm:col-span-2 lg:col-span-1 lg:row-span-2'
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div
                  className={cn(
                    'relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out-expo',
                    isPrimary
                      ? 'bg-forest-900 p-8 sm:p-10 text-ivory-100'
                      : 'bg-white p-6 sm:p-8 border border-charcoal-100/50 hover:shadow-elevated hover:border-charcoal-200/50 hover:-translate-y-1'
                  )}
                >
                  {/* Primary service grain texture */}
                  {isPrimary && (
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                      <div className="absolute inset-0 bg-grain" />
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-all duration-300',
                      isPrimary
                        ? 'bg-copper-500 text-white'
                        : 'bg-ivory-200 text-forest-900 group-hover:bg-forest-900 group-hover:text-ivory-100'
                    )}
                  >
                    {getServiceIcon(service.icon, 'w-7 h-7')}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {isPrimary && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs uppercase tracking-wider text-copper-400">Primary Service</span>
                      </div>
                    )}

                    <h3
                      className={cn(
                        'font-display text-xl sm:text-2xl font-medium mb-3',
                        isPrimary ? 'text-ivory-100' : 'text-forest-900'
                      )}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={cn(
                        'text-sm leading-relaxed mb-6',
                        isPrimary ? 'text-ivory-300' : 'text-charcoal-600'
                      )}
                    >
                      {service.description}
                    </p>

                    {/* Features for primary */}
                    {isPrimary && (
                      <ul className="space-y-2 mb-8">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-ivory-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Link */}
                    <div
                      className={cn(
                        'inline-flex items-center gap-2 text-sm font-medium transition-all duration-300',
                        isPrimary
                          ? 'text-copper-400 group-hover:text-copper-300'
                          : 'text-forest-900 group-hover:text-copper-600'
                      )}
                    >
                      Learn more
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover accent line */}
                  {!isPrimary && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-copper transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
