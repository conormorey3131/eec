'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons'

const coverageAreas = [
  { region: 'Munster', description: 'Regular appointments throughout Clare, Cork, Kerry, Limerick, Tipperary & Waterford' },
  { region: 'Leinster', description: 'Weekly coverage in Dublin and surrounding counties' },
  { region: 'Connacht', description: 'Galway, Mayo, Sligo, Roscommon & Leitrim by arrangement' },
  { region: 'Ulster', description: 'Donegal, Cavan & Monaghan by arrangement' },
]

export function LocationCoverage() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-forest-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grain mix-blend-overlay" />
      </div>

      {/* Decorative accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <div className="h-px w-8 bg-copper-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-copper-400">
              Nationwide Service
            </span>
            <div className="h-px w-8 bg-copper-500" />
          </div>

          <h2
            className="headline-md text-ivory-100 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            Covering All of Ireland
          </h2>

          <p
            className="text-lg text-ivory-300 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Based in Ennis, Co. Clare, we provide energy assessment and EU Taxonomy
            services to clients across all 26 counties. Wherever your property is located, we can help.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {coverageAreas.map((area, index) => (
            <div
              key={area.region}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-ivory-100/10 opacity-0 animate-fade-up hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${0.25 + index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-copper-500" />
                <h3 className="font-display text-lg font-medium text-ivory-100">
                  {area.region}
                </h3>
              </div>
              <p className="text-sm text-ivory-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-ivory-100/10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-copper-500" />
                <span className="text-ivory-200">Portfolio assessments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-copper-500" />
                <span className="text-ivory-200">Multi-site projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-copper-500" />
                <span className="text-ivory-200">Flexible scheduling</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRightIcon className="w-4 h-4" />}
                iconPosition="right"
              >
                Get a Quote
              </Button>
              <Button
                href="/locations/ireland"
                variant="ghost"
                className="text-ivory-200 hover:text-ivory-100 border-ivory-200/30 hover:border-ivory-200/50"
              >
                View All Areas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
