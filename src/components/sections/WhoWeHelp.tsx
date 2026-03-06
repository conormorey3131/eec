'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import {
  BuildingIcon,
  InvestorIcon,
  AssetManagerIcon,
  DeveloperIcon,
} from '@/components/ui/Icons'
import { images } from '@/data/images'
import { cn } from '@/lib/utils'

const audiences = [
  {
    icon: InvestorIcon,
    title: 'Property Investors',
    description:
      'Meet SFDR disclosure requirements and demonstrate ESG commitment to stakeholders with professional EU Taxonomy assessments.',
    image: images.properties.commercial,
  },
  {
    icon: AssetManagerIcon,
    title: 'Asset Managers',
    description:
      'Comprehensive sustainability documentation for your real estate portfolio, supporting sustainable investment mandates.',
    image: images.properties.apartment,
  },
  {
    icon: BuildingIcon,
    title: 'Property Owners',
    description:
      'Clear compliance documentation for building sales, refinancing, and sustainability reporting requirements.',
    image: images.properties.residential,
  },
  {
    icon: DeveloperIcon,
    title: 'Developers',
    description:
      'From BER certificates to EU Taxonomy reports, full energy compliance services for new developments.',
    image: images.properties.industrial,
  },
]

export function WhoWeHelp() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivory-200/50 to-transparent" />
      </div>

      {/* Decorative accents */}
      <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-copper-500/30 to-transparent" />
      <div className="absolute bottom-20 right-0 w-px h-40 bg-gradient-to-t from-copper-500/30 to-transparent" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-px bg-copper-500" />
            <span className="overline text-copper-600">Our Clients</span>
            <div className="w-8 h-px bg-copper-500" />
          </div>

          <h2
            className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Who We Help
          </h2>

          <p
            className="subhead opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Trusted by property professionals across Ireland for energy compliance
            and sustainability documentation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-ivory-100 border border-charcoal-100/50 transition-all duration-500 ease-out-expo hover:shadow-elevated hover:-translate-y-1">
                  {/* Image section */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={audience.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ivory-100 via-ivory-100/60 to-transparent" />
                  </div>

                  {/* Content section */}
                  <div className="relative px-6 pb-6 -mt-10">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900 text-ivory-100 mb-5 shadow-elevated transition-all duration-300 group-hover:bg-copper-600">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-display text-lg font-medium text-forest-900 mb-3">
                      {audience.title}
                    </h3>

                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-copper transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
