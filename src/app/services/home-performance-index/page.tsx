import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, HPIIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getServiceBySlug } from '@/data/services'
import Link from 'next/link'

const service = getServiceBySlug('home-performance-index')!

export const metadata: Metadata = {
  title: 'Home Performance Index (HPI) Certification Ireland | Qualified HPI Assessor',
  description: service.metaDescription,
  keywords: [
    'Home Performance Index',
    'HPI Ireland',
    'HPI Assessor',
    'Gold HPI',
    'Green home certification Ireland',
    'Irish Green Building Council',
    'IGBC HPI',
    'EU Taxonomy residential',
    'Sustainable new homes Ireland',
  ],
  alternates: {
    canonical: `${SITE.url}/services/home-performance-index`,
  },
}

const categories = [
  {
    title: 'Environment',
    description:
      'Land use, biodiversity, water efficiency, embodied and operational energy, and responsible material sourcing across the development.',
  },
  {
    title: 'Health & Wellbeing',
    description:
      'Daylight, indoor air quality, acoustic comfort, and walkability — the factors that shape how occupants actually live in the homes.',
  },
  {
    title: 'Economics',
    description:
      'Long-term running costs for occupants — energy, transport — plus property value stability and adaptive capacity over time.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Design and construction team competency, airtightness testing, and verification that what is built matches what was designed.',
  },
  {
    title: 'Sustainable Location',
    description:
      'Proximity to schools, shops, employment and public transport, plus site-specific risks such as flooding.',
  },
]

export default function HomePerformanceIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          getServiceSchema({
            name: 'Home Performance Index (HPI) Certification',
            description: service.metaDescription,
            url: `${SITE.url}/services/home-performance-index`,
          }),
          getFAQSchema(service.faqs),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Services', url: `${SITE.url}/services` },
            { name: 'Home Performance Index', url: `${SITE.url}/services/home-performance-index` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/#services' },
          { label: 'Home Performance Index' },
        ]}
      />

      <Hero
        overline="Ireland's National Green Home Certification"
        title="Home Performance Index (HPI) Certification"
        subtitle="Independent, third-party certification for new residential developments in Ireland — aligned with the EU Sustainable Finance Taxonomy and managed by the Irish Green Building Council."
        primaryCTA={{
          text: 'Request HPI Consultation',
          href: '/contact?service=hpi',
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
                  <HPIIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-forest-900">Qualified HPI Assessor</span>
              </div>

              <h2 className="headline-sm text-forest-900 mb-6">
                What is the Home Performance Index?
              </h2>

              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Home Performance Index (HPI) is Ireland&apos;s national certification
                system for new residential developments. Managed by the Irish Green
                Building Council (IGBC), it fills the same role for homes that LEED and
                BREEAM play for commercial buildings — but is tailored to Irish building
                regulations and aligned with the EU Sustainable Finance Taxonomy, the
                Level(s) framework, and WELL for communities.
              </p>

              <p className="text-charcoal-600 mb-10">
                HPI has been recognised by the European Construction Sector Observatory
                with a <strong>5 out of 5 rating for best practice and transparency</strong>,
                establishing it as a credible, independent green home label for
                developers, lenders, investors, and homebuyers.
              </p>

              <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                What We Deliver
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
                  href="/contact?service=hpi"
                  variant="primary"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Discuss Your Development
                </Button>
                <Button href="/eu-taxonomy-reports" variant="secondary">
                  EU Taxonomy Reports
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-charcoal-100/50 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <h3 className="font-display text-lg font-medium text-forest-900 mb-5">
                  Why Choose HPI?
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
                    HPI or Gold HPI?
                  </h3>
                  <p className="text-ivory-300 text-sm mb-5">
                    Developments achieve either <strong>HPI</strong> or <strong>Gold HPI</strong> certification
                    by passing mandatory credits in key indicators and meeting an overall
                    scoring threshold. Gold HPI requires stronger performance across all
                    five categories and signals best-in-class residential sustainability.
                  </p>
                  <Link
                    href="/contact?service=hpi"
                    className="inline-flex items-center text-copper-400 font-medium hover:text-copper-300 transition-colors"
                  >
                    Discuss your target rating
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Assessment categories */}
      <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">Assessment Framework</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2 className="headline-md text-forest-900 mb-6">
              Over 30 Indicators Across Five Categories
            </h2>

            <p className="text-lg text-charcoal-600">
              HPI assesses new residential developments against more than 30 verifiable
              indicators, grouped into the five categories below. Each category
              contributes to the overall HPI or Gold HPI certification outcome.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-white rounded-2xl p-6 shadow-soft border border-charcoal-100/50 opacity-0 animate-fade-up transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-copper-400 mb-5 group-hover:bg-copper-600 group-hover:text-white transition-colors">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-medium text-forest-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-5 h-0.5 bg-gradient-copper transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks
        title="How HPI Assessment Works"
        subtitle="From early design review through to certification by the Irish Green Building Council"
        steps={service.process}
      />

      <FAQAccordion
        title="Home Performance Index FAQs"
        faqs={service.faqs}
      />

      <CTABanner
        variant="minimal"
        title="Planning a New Residential Development?"
        subtitle="Engage us early and we'll help you target HPI or Gold HPI certification from the design stage."
      />
    </>
  )
}
