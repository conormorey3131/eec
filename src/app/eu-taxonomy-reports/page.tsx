import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { Container } from '@/components/ui/Container'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, TaxonomyIcon, BuildingIcon, InvestorIcon, AssetManagerIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getServiceBySlug } from '@/data/services'
import { euTaxonomyFaqs } from '@/data/faqs'
import { images } from '@/data/images'

export const metadata: Metadata = {
  title: 'EU Taxonomy Reports Ireland | Building Sustainability Assessments',
  description:
    'Professional EU Taxonomy Reports for buildings in Ireland. Expert assessments for SFDR compliance, building acquisition, and sustainable real estate investment. Nationwide service.',
  keywords: [
    'EU Taxonomy Report Ireland',
    'EU Taxonomy Building Assessment',
    'SFDR Compliance Ireland',
    'EU Taxonomy Real Estate',
    'Sustainable Building Assessment Ireland',
    'EU Taxonomy Certification',
  ],
  alternates: {
    canonical: `${SITE.url}/eu-taxonomy-reports`,
  },
  openGraph: {
    title: 'EU Taxonomy Reports Ireland | Building Sustainability Assessments',
    description:
      'Professional EU Taxonomy Reports for buildings in Ireland. Expert assessments for SFDR compliance and sustainable investment.',
    url: `${SITE.url}/eu-taxonomy-reports`,
  },
}

const service = getServiceBySlug('eu-taxonomy-reports')!

const benefits = [
  {
    icon: InvestorIcon,
    title: 'SFDR Compliance',
    description: 'Meet Sustainable Finance Disclosure Regulation requirements for your real estate investments.',
  },
  {
    icon: BuildingIcon,
    title: 'Due Diligence',
    description: 'Clear sustainability documentation for building acquisition and investment decisions.',
  },
  {
    icon: AssetManagerIcon,
    title: 'ESG Reporting',
    description: 'Support your ESG commitments with professional EU Taxonomy alignment reports.',
  },
  {
    icon: TaxonomyIcon,
    title: 'Regulatory Ready',
    description: 'Reports formatted to meet investor, lender, and regulatory requirements.',
  },
]

const deliverables = [
  'Overall EU Taxonomy alignment status',
  'Climate mitigation criteria assessment',
  'Climate adaptation criteria assessment',
  'DNSH (Do No Significant Harm) analysis',
  'Technical screening criteria verification',
  'Supporting evidence documentation',
  'Executive summary for stakeholders',
  'Improvement recommendations where applicable',
]

export default function EUTaxonomyReportsPage() {
  return (
    <>
      <JsonLd
        data={[
          getServiceSchema({
            name: 'EU Taxonomy Report',
            description: service.metaDescription,
            url: `${SITE.url}/eu-taxonomy-reports`,
          }),
          getFAQSchema(euTaxonomyFaqs),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'EU Taxonomy Reports', url: `${SITE.url}/eu-taxonomy-reports` },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ label: 'EU Taxonomy Reports' }]} />

      <Hero
        overline="Primary Service"
        title="EU Taxonomy Reports for Irish Buildings"
        subtitle="Comprehensive EU Taxonomy alignment assessments for property investors, asset managers, and financial institutions. Meet SFDR disclosure requirements with professional documentation."
        primaryCTA={{
          text: 'Request a Quote',
          href: '/contact?service=eu-taxonomy',
        }}
        secondaryCTA={{
          text: 'Learn How It Works',
          href: '#how-it-works',
        }}
        backgroundImage={images.hero.euTaxonomy}
        variant="editorial"
      />

      <TrustBadges variant="minimal" />

      {/* What is EU Taxonomy Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-copper-500/30 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">Overview</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2
              className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              What is an EU Taxonomy Report?
            </h2>

            <p
              className="text-lg text-charcoal-600 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              The EU Taxonomy is a classification system establishing which economic activities
              can be considered environmentally sustainable. For real estate, an EU Taxonomy
              Report assesses whether a building meets the technical screening criteria for
              climate mitigation and adaptation, while ensuring it does no significant harm
              to other environmental objectives.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group text-center p-6 sm:p-8 bg-ivory-100 rounded-2xl border border-charcoal-100/50 opacity-0 animate-fade-up transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900 text-copper-400 mb-5 group-hover:bg-copper-600 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-forest-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {benefit.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="mt-5 h-0.5 bg-gradient-copper transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Who Needs Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-copper-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">Who Benefits</span>
              </div>

              <h2 className="headline-md text-forest-900 mb-6">
                Who Needs an EU Taxonomy Report?
              </h2>

              <p className="text-lg text-charcoal-600 mb-10 leading-relaxed">
                EU Taxonomy Reports are essential for organisations subject to sustainable
                finance disclosure requirements, and increasingly requested in property
                transactions where sustainability matters.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: 'Property Investors & Funds',
                    description: 'SFDR-regulated investors need EU Taxonomy assessments to report on sustainable investments in their portfolios.',
                  },
                  {
                    title: 'Asset Managers',
                    description: 'Managing real estate assets for clients with ESG mandates or sustainable investment requirements.',
                  },
                  {
                    title: 'Property Owners',
                    description: 'Selling or refinancing commercial property where buyers or lenders require sustainability documentation.',
                  },
                  {
                    title: 'Banks & Financial Institutions',
                    description: 'Assessing sustainability of property portfolios for green finance products and regulatory reporting.',
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-forest-900 text-copper-400 mt-0.5">
                      <CheckIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="font-display font-medium text-forest-900">{item.title}</strong>
                      <p className="text-charcoal-600 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Receive */}
            <div
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-elevated border border-charcoal-100/50 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-copper-400">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-medium text-forest-900">
                  What You Receive
                </h3>
              </div>

              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 p-3 rounded-xl bg-ivory-100 border border-charcoal-100/50">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-copper-500" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <div id="how-it-works">
        <HowItWorks
          title="Our EU Taxonomy Assessment Process"
          subtitle="A structured approach ensuring thorough evaluation and clear documentation"
          steps={service.process}
        />
      </div>

      <FAQAccordion
        title="EU Taxonomy Report FAQs"
        subtitle="Common questions about EU Taxonomy assessments for Irish buildings"
        faqs={euTaxonomyFaqs}
        columns={2}
      />

      <CTABanner
        variant="primary"
        title="Get Your EU Taxonomy Report"
        subtitle="Contact us today for a consultation. We'll assess your requirements and provide a tailored quote for your building or portfolio."
      />
    </>
  )
}
