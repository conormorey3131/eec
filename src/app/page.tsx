import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { PrimaryOffer } from '@/components/sections/PrimaryOffer'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WhoWeHelp } from '@/components/sections/WhoWeHelp'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { LocationCoverage } from '@/components/sections/LocationCoverage'
import { CTABanner } from '@/components/sections/CTABanner'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { images } from '@/data/images'

export const metadata: Metadata = {
  title: 'EU Taxonomy Reports & BER Certificates Ireland | Efficient Energy Consultancy',
  description:
    'Professional EU Taxonomy Reports, Home Performance Index (HPI) certification, BER Certificates, and energy assessment services across Ireland. 20+ years experience. Nationwide coverage.',
  alternates: {
    canonical: SITE.url,
  },
}

const euTaxonomyProcess = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We discuss your building portfolio and specific requirements.',
  },
  {
    step: 2,
    title: 'Document Collection',
    description: 'You provide building specifications, BER data, and documentation.',
  },
  {
    step: 3,
    title: 'Site Assessment',
    description: 'Our qualified assessors conduct a thorough on-site evaluation.',
  },
  {
    step: 4,
    title: 'Technical Analysis',
    description: 'We analyse against EU Taxonomy technical screening criteria.',
  },
  {
    step: 5,
    title: 'Report Delivery',
    description: 'You receive your comprehensive EU Taxonomy alignment report.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: 'EU Taxonomy Reports & BER Certificates Ireland',
          description:
            'Professional EU Taxonomy Reports, BER Certificates, and energy assessment services across Ireland.',
          url: SITE.url,
        })}
      />

      <Hero
        variant="editorial"
        overline="Ireland's EU Taxonomy Specialists"
        title="Sustainability Documentation for Building Acquisition & Ownership"
        subtitle="Clear EU Taxonomy alignment reports and energy assessments—delivered by qualified assessors with over two decades of expertise. Trusted by property investors, asset managers, and developers across Ireland."
        primaryCTA={{
          text: 'Request a Quote',
          href: '/contact?service=eu-taxonomy',
        }}
        secondaryCTA={{
          text: 'Explore Services',
          href: '#services',
        }}
        backgroundImage={images.hero.home}
        stats={[
          { value: '20+', label: 'Years Experience' },
          { value: '100%', label: 'Ireland Coverage' },
          { value: 'SEAI', label: 'Registered' },
        ]}
      />

      <TrustBadges />

      <PrimaryOffer />

      <HowItWorks
        title="How EU Taxonomy Assessment Works"
        subtitle="A structured process from consultation to compliance documentation"
        steps={euTaxonomyProcess}
      />

      <div id="services">
        <ServiceCards
          title="Complete Energy Assessment Services"
          subtitle="From EU Taxonomy compliance to BER certificates—all your building energy needs covered"
        />
      </div>

      <WhoWeHelp />

      <WhyChooseUs />

      <LocationCoverage />

      <CTABanner
        title="Ready to Get Your EU Taxonomy Report?"
        subtitle="Contact us today for a free consultation. We'll assess your requirements and provide a tailored quote."
      />
    </>
  )
}
