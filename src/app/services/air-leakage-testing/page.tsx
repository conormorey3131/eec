import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, AirLeakageIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getServiceBySlug } from '@/data/services'
import Link from 'next/link'

const service = getServiceBySlug('air-leakage-testing')!

export const metadata: Metadata = {
  title: 'Air Leakage Testing Ireland | Airtightness & Blower Door Tests',
  description: service.metaDescription,
  keywords: [
    'Air Leakage Test Ireland',
    'Airtightness Testing Ireland',
    'Blower Door Test Ireland',
    'Air Permeability Testing',
    'Building Regulations Part L',
  ],
  alternates: {
    canonical: `${SITE.url}/services/air-leakage-testing`,
  },
}

export default function AirLeakageTestingPage() {
  return (
    <>
      <JsonLd
        data={[
          getServiceSchema({
            name: 'Air Leakage Testing',
            description: service.metaDescription,
            url: `${SITE.url}/services/air-leakage-testing`,
          }),
          getFAQSchema(service.faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Services', url: `${SITE.url}/services` },
            { name: 'Air Leakage Testing', url: `${SITE.url}/services/air-leakage-testing` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/#services' },
          { label: 'Air Leakage Testing' },
        ]}
      />

      <Hero
        overline="Airtightness Testing"
        title="Air Leakage Testing & Airtightness Certificates"
        subtitle="Professional blower door testing for Building Regulations Part L compliance. Fast results, nationwide coverage."
        primaryCTA={{
          text: 'Book Air Test',
          href: '/contact?service=air-leakage',
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
                  <AirLeakageIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-forest-900">Part L Compliance</span>
              </div>

              <h2 className="headline-sm text-forest-900 mb-6">
                Airtightness Testing for Irish Buildings
              </h2>

              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Air leakage testing (blower door testing) measures how airtight a
                building is. Using calibrated fan equipment, we pressurize or
                depressurize your building and measure the air flow required to
                maintain a pressure difference.
              </p>

              <p className="text-charcoal-600 mb-10">
                Results are expressed as air permeability (m&sup3;/hr/m&sup2; at 50 Pa).
                Building Regulations TGD Part L requires new dwellings to achieve
                maximum air permeability of 7 m&sup3;/hr/m&sup2;—better airtightness
                improves energy efficiency and BER ratings.
              </p>

              <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                Our Air Testing Services
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
                  href="/contact?service=air-leakage"
                  variant="primary"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Book Air Test
                </Button>
                <Button href="/services/ventilation-validation" variant="secondary">
                  Ventilation Testing
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-charcoal-100/50 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                  Benefits of Good Airtightness
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
                className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-lg font-medium text-amber-900 mb-3">
                  Pre-Test Preparation
                </h3>
                <p className="text-amber-800 text-sm mb-5">
                  Proper preparation before testing helps achieve the best results.
                  We&apos;ll advise on building preparation requirements when you book.
                </p>
                <Link
                  href="/resources/preparing-building-air-leakage-test"
                  className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
                >
                  Read our preparation guide
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks
        title="Air Testing Process"
        steps={service.process}
      />

      <FAQAccordion
        title="Air Leakage Testing FAQs"
        faqs={service.faqs}
      />

      <CTABanner
        variant="minimal"
        title="Need an Air Leakage Test?"
        subtitle="Contact us to schedule your testing."
      />
    </>
  )
}
