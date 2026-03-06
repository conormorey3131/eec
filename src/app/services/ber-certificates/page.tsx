import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, BERIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getServiceBySlug } from '@/data/services'
import Link from 'next/link'

const service = getServiceBySlug('ber-certificates')!

export const metadata: Metadata = {
  title: 'BER Certificates Ireland | Professional BER Assessments',
  description: service.metaDescription,
  keywords: [
    'BER Certificate Ireland',
    'BER Assessor Ireland',
    'Building Energy Rating',
    'BER Assessment',
    'Domestic BER',
    'Commercial BER',
  ],
  alternates: {
    canonical: `${SITE.url}/services/ber-certificates`,
  },
}

export default function BERCertificatesPage() {
  return (
    <>
      <JsonLd
        data={[
          getServiceSchema({
            name: 'BER Certificate',
            description: service.metaDescription,
            url: `${SITE.url}/services/ber-certificates`,
          }),
          getFAQSchema(service.faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Services', url: `${SITE.url}/services` },
            { name: 'BER Certificates', url: `${SITE.url}/services/ber-certificates` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/#services' },
          { label: 'BER Certificates' },
        ]}
      />

      <Hero
        overline="Energy Rating Service"
        title="BER Certificates for Irish Properties"
        subtitle="Professional Building Energy Rating assessments for residential and commercial properties. Legal compliance for sales, rentals, and building control."
        primaryCTA={{
          text: 'Book a BER Assessment',
          href: '/contact?service=ber',
        }}
        showPhone
      />

      <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-copper-500/30 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-900 text-copper-400">
                  <BERIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-forest-900">SEAI Registered Assessor</span>
              </div>

              <h2 className="headline-sm text-forest-900 mb-6">
                What is a BER Certificate?
              </h2>

              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                A Building Energy Rating (BER) certificate rates the energy performance
                of a building on a scale from A to G, with A being the most efficient.
                It&apos;s a legal requirement when selling, renting, or advertising a
                property in Ireland.
              </p>

              <p className="text-charcoal-600 mb-10">
                Our qualified BER assessor conducts a thorough survey of your property,
                evaluating insulation, heating systems, windows, and other factors that
                affect energy performance. You receive an official BER certificate
                registered with SEAI and a detailed advisory report.
              </p>

              <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                Our BER Services Include
              </h3>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-lg bg-forest-900 text-copper-400">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact?service=ber"
                  variant="primary"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Book Assessment
                </Button>
                <Button href="/eu-taxonomy-reports" variant="secondary">
                  Need EU Taxonomy Report?
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-charcoal-100/50 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                  Why You Need a BER
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-lg bg-forest-900 text-copper-400 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-charcoal-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="relative bg-forest-900 rounded-2xl p-6 sm:p-8 overflow-hidden opacity-0 animate-fade-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                {/* Grain texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <div className="absolute inset-0 bg-grain" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-copper-500/20 rounded-tr-2xl" />

                <div className="relative">
                  <h3 className="font-display text-lg font-medium text-ivory-100 mb-3">
                    Also Need EU Taxonomy Compliance?
                  </h3>
                  <p className="text-ivory-300 text-sm mb-5">
                    BER data forms part of EU Taxonomy assessments. If you&apos;re an
                    investor or asset manager needing sustainability documentation,
                    we can combine services.
                  </p>
                  <Link
                    href="/eu-taxonomy-reports"
                    className="inline-flex items-center text-copper-400 font-medium hover:text-copper-300 transition-colors"
                  >
                    Learn about EU Taxonomy Reports
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks
        title="BER Assessment Process"
        subtitle="Simple steps from booking to certificate"
        steps={service.process}
      />

      <FAQAccordion
        title="BER Certificate FAQs"
        faqs={service.faqs}
      />

      <CTABanner
        variant="minimal"
        title="Need a BER Certificate?"
        subtitle="Contact us to book your assessment."
      />
    </>
  )
}
