'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { images } from '@/data/images'

const features = [
  'Full EU Taxonomy alignment assessment',
  'Climate mitigation & adaptation analysis',
  'DNSH criteria evaluation',
  'Investment-ready documentation',
  'Nationwide coverage across Ireland',
]

export function PrimaryOffer() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-200 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-900/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-10 h-px bg-copper-500" />
              <span className="overline text-copper-600">Primary Service</span>
            </div>

            <h2
              className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              EU Taxonomy Reports for Building Acquisition & Ownership
            </h2>

            <p
              className="body-lg mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Clear sustainability alignment documentation for property investors, asset
              managers, and financial institutions. Meet SFDR disclosure requirements
              with professional EU Taxonomy assessments delivered by qualified assessors.
            </p>

            <ul
              className="space-y-4 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-forest-900 text-ivory-100 group-hover:bg-copper-600 transition-colors">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-charcoal-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <Button
                href="/eu-taxonomy-reports"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Learn More
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dramatic">
              <Image
                src={images.services.euTaxonomy}
                alt="Modern sustainable commercial building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />

              {/* Floating badges */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-elevated">
                  <div className="text-xs uppercase tracking-wider text-charcoal-500 mb-0.5">Status</div>
                  <div className="text-sm font-semibold text-forest-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    EU Taxonomy Aligned
                  </div>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-forest-900/90 backdrop-blur-sm px-5 py-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ivory-400 mb-1">Investment Ready</div>
                      <div className="text-ivory-100 font-medium">SFDR Compliant Documentation</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-copper-500 flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-copper-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-forest-900/10 rounded-xl -z-10" />

            {/* Corner accent */}
            <div className="absolute -bottom-4 right-12 flex items-center gap-3">
              <div className="w-12 h-px bg-copper-500" />
              <span className="text-xs uppercase tracking-wider text-charcoal-500">Sustainable</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
