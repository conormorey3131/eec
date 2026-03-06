'use client'

import { Container } from '@/components/ui/Container'

interface Step {
  step: number
  title: string
  description: string
}

interface HowItWorksProps {
  title?: string
  subtitle?: string
  steps: Step[]
}

export function HowItWorks({
  title = 'How It Works',
  subtitle,
  steps,
}: HowItWorksProps) {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-copper-500/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-px bg-copper-500" />
            <span className="overline text-copper-600">Our Process</span>
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

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <div className="w-full h-full bg-charcoal-200 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-copper-500 via-copper-400 to-copper-500 animate-line-grow opacity-0"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              />
            </div>
          </div>

          <div className="grid gap-8 sm:gap-6 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                {/* Step number */}
                <div className="relative flex justify-center lg:justify-start mb-6">
                  {/* Outer ring */}
                  <div className="absolute w-24 h-24 rounded-full border border-copper-500/10" />
                  {/* Number circle */}
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-2 rounded-full bg-forest-900 shadow-elevated" />
                    <span className="relative font-display text-3xl font-medium text-ivory-100">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="font-display text-lg font-medium text-forest-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-px h-8 bg-gradient-to-b from-copper-500 to-copper-500/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
