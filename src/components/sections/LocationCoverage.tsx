'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CoverageIcon, ArrowRightIcon } from '@/components/ui/Icons'

export function LocationCoverage() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ivory-200/50 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* SVG Map */}
          <div
            className="relative order-2 lg:order-1 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="aspect-[4/5] max-w-sm mx-auto relative">
              {/* Abstract Ireland shape */}
              <svg
                viewBox="0 0 300 400"
                className="w-full h-full drop-shadow-lg"
                fill="none"
              >
                {/* Ireland outline - simplified abstract shape */}
                <path
                  d="M150 20 C100 30 60 80 50 120 C40 160 45 200 50 240 C55 280 70 320 90 350 C110 380 140 390 160 390 C180 390 210 380 230 350 C250 320 265 280 270 240 C275 200 280 160 270 120 C260 80 220 30 170 20 C160 18 155 18 150 20 Z"
                  fill="url(#mapGradientPremium)"
                  stroke="#1a2f23"
                  strokeWidth="2"
                />

                {/* Ennis location marker */}
                <circle cx="110" cy="220" r="14" fill="#d4803c" className="animate-pulse" />
                <circle cx="110" cy="220" r="9" fill="#faf9f6" />
                <circle cx="110" cy="220" r="5" fill="#d4803c" />

                {/* Coverage pulse animation rings */}
                <circle
                  cx="110"
                  cy="220"
                  r="35"
                  fill="none"
                  stroke="#d4803c"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-ping"
                  style={{ animationDuration: '2s' }}
                />
                <circle
                  cx="110"
                  cy="220"
                  r="70"
                  fill="none"
                  stroke="#d4803c"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <circle
                  cx="110"
                  cy="220"
                  r="110"
                  fill="none"
                  stroke="#d4803c"
                  strokeWidth="0.5"
                  opacity="0.1"
                />

                {/* Dublin indicator */}
                <circle cx="200" cy="160" r="7" fill="#1a2f23" opacity="0.7" />
                <circle cx="200" cy="160" r="3" fill="#faf9f6" opacity="0.8" />

                {/* Cork indicator */}
                <circle cx="130" cy="330" r="7" fill="#1a2f23" opacity="0.7" />
                <circle cx="130" cy="330" r="3" fill="#faf9f6" opacity="0.8" />

                {/* Galway indicator */}
                <circle cx="80" cy="180" r="7" fill="#1a2f23" opacity="0.7" />
                <circle cx="80" cy="180" r="3" fill="#faf9f6" opacity="0.8" />

                {/* Limerick indicator */}
                <circle cx="100" cy="260" r="7" fill="#1a2f23" opacity="0.7" />
                <circle cx="100" cy="260" r="3" fill="#faf9f6" opacity="0.8" />

                <defs>
                  <linearGradient id="mapGradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4f7f5" />
                    <stop offset="50%" stopColor="#e8ede9" />
                    <stop offset="100%" stopColor="#dce4de" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Legend card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-5 shadow-elevated border border-charcoal-100/50">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-copper-500" />
                    <span className="text-charcoal-700 font-medium">Ennis HQ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-forest-900 opacity-70" />
                    <span className="text-charcoal-600">Major Cities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-copper-400">
                  <CoverageIcon className="w-6 h-6" />
                </div>
                <span className="overline text-copper-600">Nationwide Service</span>
              </div>

              <h2 className="headline-md text-forest-900 mb-6">
                Covering All of Ireland
              </h2>

              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                Based in Ennis, Co. Clare, we provide energy assessment and EU Taxonomy
                services to clients across Ireland. From Dublin to Cork, Galway to
                Waterford—wherever your property is located, we can help.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Regular appointments throughout Munster',
                'Weekly coverage in Dublin and surrounding counties',
                'Connacht and Ulster by arrangement',
                'Portfolio assessments across multiple locations',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-copper-500" />
                  <span className="text-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Button
                href="/locations/ireland"
                variant="primary"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                View Coverage Areas
              </Button>
              <Button href="/locations/ennis" variant="secondary">
                Ennis, Co. Clare
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
