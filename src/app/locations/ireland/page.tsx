import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { LocationCoverage } from '@/components/sections/LocationCoverage'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { CTABanner } from '@/components/sections/CTABanner'
import { CheckIcon, CoverageIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE, COMPANY } from '@/lib/constants'
import { images } from '@/data/images'

export const metadata: Metadata = {
  title: 'Nationwide Energy Assessment Services Ireland | EU Taxonomy & BER',
  description: `${COMPANY.name} provides professional energy assessment services across Ireland. EU Taxonomy Reports, BER Certificates, and building compliance - Dublin, Cork, Galway, Limerick & nationwide.`,
  keywords: [
    'Energy Consultant Ireland',
    'EU Taxonomy Ireland',
    'BER Assessor Ireland',
    'Nationwide BER Service',
    'Energy Assessment Dublin',
    'Energy Assessment Cork',
  ],
  alternates: {
    canonical: `${SITE.url}/locations/ireland`,
  },
}

const provinces = [
  {
    name: 'Munster',
    description: 'Regular coverage throughout Clare, Limerick, Cork, Kerry, Tipperary, and Waterford.',
    highlight: true,
  },
  {
    name: 'Leinster',
    description: 'Weekly appointments in Dublin and surrounding counties including Wicklow, Kildare, and Meath.',
    highlight: false,
  },
  {
    name: 'Connacht',
    description: 'Coverage in Galway, Mayo, Sligo, Roscommon, and Leitrim by arrangement.',
    highlight: false,
  },
  {
    name: 'Ulster (ROI)',
    description: 'Services in Donegal, Cavan, and Monaghan available on request.',
    highlight: false,
  },
]

const majorCities = [
  { city: 'Dublin', frequency: 'Weekly appointments' },
  { city: 'Cork', frequency: 'Regular coverage' },
  { city: 'Limerick', frequency: 'Regular coverage' },
  { city: 'Galway', frequency: 'By arrangement' },
  { city: 'Waterford', frequency: 'Regular coverage' },
]

export default function IrelandLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            title: 'Nationwide Energy Assessment Services Ireland',
            description: `Professional energy assessment services across all of Ireland.`,
            url: `${SITE.url}/locations/ireland`,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Locations', url: `${SITE.url}/locations/ireland` },
            { name: 'Ireland Nationwide', url: `${SITE.url}/locations/ireland` },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ label: 'Ireland Nationwide' }]} />

      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary-700 font-medium mb-4">
                <CoverageIcon className="w-5 h-5" />
                <span>Nationwide Coverage</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Energy Assessment Services Across Ireland
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                From our base in Ennis, Co. Clare, we provide professional EU Taxonomy
                Reports, BER Certificates, and building compliance services to clients
                throughout Ireland—from Dublin to Cork, Galway to Waterford.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Get a Quote
                </Button>
                <Button href="/eu-taxonomy-reports" size="lg" variant="outline">
                  EU Taxonomy Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-xl">
                <Image
                  src={images.locations.dublin}
                  alt="Dublin cityscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-100 rounded-xl -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Coverage by Province */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Coverage by Region
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We work with clients in all four provinces, with regular presence
              throughout Munster and Leinster.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {provinces.map((province, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  province.highlight
                    ? 'bg-primary-50 border-2 border-primary-200'
                    : 'bg-slate-50'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {province.name}
                  {province.highlight && (
                    <span className="ml-2 text-xs font-normal text-primary-600">
                      (Home region)
                    </span>
                  )}
                </h3>
                <p className="text-sm text-slate-600">{province.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
              Major Cities
            </h3>
            <div className="grid gap-4 sm:grid-cols-5">
              {majorCities.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-slate-900">
                    {item.city}
                  </div>
                  <div className="text-sm text-slate-500">{item.frequency}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio & Multi-Site */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Portfolio & Multi-Site Assessments
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For property investors, asset managers, and developers with buildings
                across multiple locations, we offer coordinated assessment services
                that maximize efficiency and minimize disruption.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Coordinated Scheduling</strong>
                    <p className="text-slate-600 text-sm">
                      We group assessments by location to minimize travel and maximize
                      efficiency across your portfolio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Consistent Methodology</strong>
                    <p className="text-slate-600 text-sm">
                      Same assessor, same standards across all properties for
                      comparable, reliable results.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Portfolio Pricing</strong>
                    <p className="text-slate-600 text-sm">
                      Competitive rates for multi-property assessments and ongoing
                      client relationships.
                    </p>
                  </div>
                </li>
              </ul>
              <Button
                href="/contact"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Discuss Your Portfolio
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Ideal For
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-900">Property Funds</strong>
                    <p className="text-sm text-slate-600">
                      EU Taxonomy assessments across diverse commercial portfolios
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-900">Asset Managers</strong>
                    <p className="text-sm text-slate-600">
                      Regular BER and compliance services for managed properties
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-900">Developers</strong>
                    <p className="text-sm text-slate-600">
                      Coordinated testing across multiple development sites
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700 font-semibold text-sm">
                    4
                  </span>
                  <div>
                    <strong className="text-slate-900">Landlords</strong>
                    <p className="text-sm text-slate-600">
                      BER certificates for multi-property rental portfolios
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ServiceCards
        title="Services Available Nationwide"
        subtitle="The full range of energy assessment and compliance services, wherever your property is located"
      />

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Contact us today for a free consultation about your nationwide assessment needs."
      />
    </>
  )
}
