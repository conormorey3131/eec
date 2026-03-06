import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, VentilationIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getServiceBySlug } from '@/data/services'
import Link from 'next/link'

const service = getServiceBySlug('ventilation-validation')!

export const metadata: Metadata = {
  title: 'Ventilation Validation Certificates Ireland | TGD Part F Compliance',
  description: service.metaDescription,
  keywords: [
    'Ventilation Validation Certificate Ireland',
    'TGD Part F Compliance',
    'Ventilation Testing Ireland',
    'MVHR Commissioning',
    'Ventilation Commissioning',
  ],
  alternates: {
    canonical: `${SITE.url}/services/ventilation-validation`,
  },
}

export default function VentilationValidationPage() {
  return (
    <>
      <JsonLd
        data={[
          getServiceSchema({
            name: 'Ventilation Validation Certificate',
            description: service.metaDescription,
            url: `${SITE.url}/services/ventilation-validation`,
          }),
          getFAQSchema(service.faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Services', url: `${SITE.url}/services` },
            { name: 'Ventilation Validation', url: `${SITE.url}/services/ventilation-validation` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/#services' },
          { label: 'Ventilation Validation' },
        ]}
      />

      <Hero
        overline="Building Compliance"
        title="Ventilation Validation Certificates"
        subtitle="Professional ventilation system testing and commissioning certificates for TGD Part F compliance in new builds and renovations."
        primaryCTA={{
          text: 'Schedule Testing',
          href: '/contact?service=ventilation',
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
                  <VentilationIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-forest-900">Building Control Compliance</span>
              </div>

              <h2 className="headline-sm text-forest-900 mb-6">
                Ventilation Testing & Commissioning
              </h2>

              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Ventilation validation ensures your building&apos;s ventilation system
                is correctly installed and performing to design specifications. It&apos;s
                required for Building Regulations TGD Part F compliance in new dwellings
                and major renovations.
              </p>

              <p className="text-charcoal-600 mb-10">
                We test all ventilation terminals, verify system balance, check controls
                operation, and confirm the installed system matches design requirements.
                You receive a validation certificate for building control submission.
              </p>

              <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                What We Test
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
                  href="/contact?service=ventilation"
                  variant="primary"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Schedule Testing
                </Button>
                <Button href="/services/air-leakage-testing" variant="secondary">
                  Air Leakage Testing
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-charcoal-100/50 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                  Benefits of Proper Ventilation
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
                    Complete Compliance Package
                  </h3>
                  <p className="text-ivory-300 text-sm mb-5">
                    Combine ventilation validation with air leakage testing and BER
                    assessment for complete building regulations compliance.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-copper-400 font-medium hover:text-copper-300 transition-colors"
                  >
                    Get a package quote
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks
        title="Ventilation Testing Process"
        steps={service.process}
      />

      <FAQAccordion
        title="Ventilation Validation FAQs"
        faqs={service.faqs}
      />

      <CTABanner
        variant="minimal"
        title="Need Ventilation Validation?"
        subtitle="Contact us to schedule your testing."
      />
    </>
  )
}
