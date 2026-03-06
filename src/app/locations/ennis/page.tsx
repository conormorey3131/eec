import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { CTABanner } from '@/components/sections/CTABanner'
import { CheckIcon, CoverageIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE, COMPANY } from '@/lib/constants'
import { images } from '@/data/images'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Energy Consultants Ennis, Co. Clare | BER Assessor & EU Taxonomy',
  description: `${COMPANY.name} - professional energy assessment services in Ennis, Co. Clare. EU Taxonomy Reports, BER Certificates, and building compliance services. Local expertise, 20+ years experience.`,
  keywords: [
    'BER Assessor Ennis',
    'Energy Consultant Clare',
    'EU Taxonomy Clare',
    'BER Certificate Ennis',
    'Energy Assessment Clare',
  ],
  alternates: {
    canonical: `${SITE.url}/locations/ennis`,
  },
}

const localServices = [
  'EU Taxonomy Reports for commercial properties',
  'Domestic and commercial BER certificates',
  'Ventilation validation for new builds',
  'Air leakage testing',
  'Acoustic testing for developments',
]

const nearbyAreas = [
  'Shannon',
  'Kilrush',
  'Ennistymon',
  'Killaloe',
  'Scarriff',
  'Miltown Malbay',
  'Lisdoonvarna',
  'Corofin',
]

export default function EnnisLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            title: 'Energy Consultants Ennis, Co. Clare',
            description: `Professional energy assessment services in Ennis and Co. Clare.`,
            url: `${SITE.url}/locations/ennis`,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Locations', url: `${SITE.url}/locations` },
            { name: 'Ennis, Co. Clare', url: `${SITE.url}/locations/ennis` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Locations', href: '/locations/ireland' },
          { label: 'Ennis, Co. Clare' },
        ]}
      />

      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary-700 font-medium mb-4">
                <CoverageIcon className="w-5 h-5" />
                <span>Our Home Base</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Energy Consultants in Ennis, Co. Clare
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Based in the heart of Ennis, {COMPANY.name} provides professional
                energy assessment services throughout Clare and beyond. Local
                expertise backed by 20+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Get a Local Quote
                </Button>
                <Button href="/eu-taxonomy-reports" size="lg" variant="outline">
                  EU Taxonomy Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-xl">
                <Image
                  src={images.locations.ennis}
                  alt="Clare countryside"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-100 rounded-xl -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Local Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Energy Services in Clare
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From our Ennis base, we provide the full range of energy assessment
                and compliance services to properties across County Clare. Whether
                you&apos;re selling a home, developing new builds, or managing
                commercial property investments, we&apos;re your local experts.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Services Available Locally
              </h3>
              <ul className="space-y-3 mb-8">
                {localServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/eu-taxonomy-reports"
                className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800"
              >
                Learn about our EU Taxonomy specialism
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Areas We Cover in Clare
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  ...and all other towns and rural areas in County Clare
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Why Choose a Local Assessor?
                </h3>
                <ul className="space-y-2 text-sm text-primary-800">
                  <li>• Faster scheduling and response times</li>
                  <li>• Knowledge of local building types</li>
                  <li>• No travel charges within Clare</li>
                  <li>• Face-to-face consultations available</li>
                  <li>• Supporting local business</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServiceCards
        title="Our Services"
        subtitle="Complete energy assessment and compliance services available in Ennis and throughout Clare"
      />

      <CTABanner
        title="Need an Energy Assessment in Clare?"
        subtitle="Contact your local experts for a free consultation and quote."
      />
    </>
  )
}
