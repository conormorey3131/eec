import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { CTABanner } from '@/components/sections/CTABanner'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CheckIcon, ExperienceIcon, QualificationIcon, MembershipIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | Energy Consultants Ennis, Ireland',
  description: `Learn about ${COMPANY.name} and ${COMPANY.person}. Over 20 years experience as BER assessor, qualified Home Performance Index (HPI) Assessor, member of BER Assessors Association of Ireland.`,
  alternates: {
    canonical: `${SITE.url}/about`,
  },
}

const credentials = [
  {
    icon: ExperienceIcon,
    title: '20+ Years Experience',
    description:
      'Two decades of hands-on experience as a domestic BER assessor, providing thorough and accurate energy assessments across Ireland.',
  },
  {
    icon: QualificationIcon,
    title: 'Qualified HPI Assessor',
    description:
      'Home Performance Index assessor qualified to certify new residential developments under Ireland\'s national green home standard, managed by the Irish Green Building Council and aligned with the EU Sustainable Finance Taxonomy.',
  },
  {
    icon: MembershipIcon,
    title: 'BER Assessors Association',
    description:
      'Proud member of the BER Assessors Association of Ireland, committed to professional standards and continuous development.',
  },
]

const values = [
  {
    title: 'Accuracy',
    description:
      'Every assessment is thorough and precise. We take the time to understand your building and deliver accurate results you can rely on.',
  },
  {
    title: 'Clarity',
    description:
      'We explain complex regulations in plain language. You\'ll understand what your results mean and what options are available.',
  },
  {
    title: 'Reliability',
    description:
      'We show up on time, deliver when promised, and stand behind our work. Building long-term relationships matters to us.',
  },
  {
    title: 'Integrity',
    description:
      'We provide honest assessments and recommendations. Our advice is based on what\'s right for your building, not upselling.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            title: 'About Efficient Energy Consultancy',
            description: `Learn about ${COMPANY.name} and our team of qualified energy assessors.`,
            url: `${SITE.url}/about`,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'About', url: `${SITE.url}/about` },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-ivory-100 to-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-copper-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">About Us</span>
                <div className="w-8 h-px bg-copper-500" />
              </div>

              <h1 className="headline-md text-forest-900 mb-6">
                About {COMPANY.name}
              </h1>

              <p className="text-lg sm:text-xl text-charcoal-600 leading-relaxed">
                Professional energy assessment services built on over 20 years of
                experience. We help property owners, investors, and developers
                across Ireland achieve energy compliance and sustainability goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustBadges variant="minimal" />

      {/* Story Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-copper-500/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-32 h-px bg-gradient-to-r from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">Our Story</span>
              </div>

              <h2 className="headline-sm text-forest-900 mb-6">
                Meet {COMPANY.person}
              </h2>

              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                With over 20 years as a domestic BER assessor, I&apos;ve helped
                thousands of property owners understand their building&apos;s energy
                performance. From simple domestic assessments to complex commercial
                portfolios, I bring the same attention to detail and commitment to
                accuracy.
              </p>

              <p className="text-charcoal-600 mb-6">
                Based in Ennis, Co. Clare, I work with clients across Ireland—from
                individual homeowners selling a property to institutional investors
                requiring EU Taxonomy compliance for their portfolios.
              </p>

              <p className="text-charcoal-600 mb-10">
                As energy regulations evolve and sustainability becomes central to
                property decisions, I&apos;m committed to staying at the forefront.
                Whether you need a straightforward BER certificate or comprehensive
                EU Taxonomy documentation, you can expect professional, reliable
                service.
              </p>

              {/* Quote card */}
              <div className="relative p-8 bg-forest-900 rounded-2xl overflow-hidden">
                {/* Grain texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <div className="absolute inset-0 bg-grain" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-copper-500/20 rounded-tr-2xl" />

                <div className="relative">
                  <div className="text-copper-500 text-5xl font-display leading-none mb-4">&ldquo;</div>
                  <p className="text-ivory-200 leading-relaxed mb-6">
                    My goal is simple: deliver accurate assessments and clear
                    documentation that help you make informed decisions about your
                    property.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-copper-500 flex items-center justify-center">
                      <span className="font-display text-white font-medium">SF</span>
                    </div>
                    <div>
                      <p className="font-display text-ivory-100 font-medium">
                        {COMPANY.person}
                      </p>
                      <p className="text-sm text-ivory-400">Lead Assessor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {credentials.map((credential, index) => {
                const Icon = credential.icon
                return (
                  <div
                    key={index}
                    className="group flex gap-5 p-6 bg-ivory-100 rounded-2xl border border-charcoal-100/50 opacity-0 animate-fade-up transition-all duration-300 hover:shadow-soft"
                    style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900 text-copper-400 group-hover:bg-copper-600 group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-forest-900 mb-2">
                        {credential.title}
                      </h3>
                      <p className="text-sm text-charcoal-600 leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-copper-500/30 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">Our Values</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2
              className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              The Principles That Guide Us
            </h2>

            <p
              className="subhead opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              The principles that guide how we work with every client.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-soft border border-charcoal-100/50 opacity-0 animate-fade-up transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-ivory-100 mb-5 group-hover:bg-copper-600 transition-colors">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-medium text-forest-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{value.description}</p>

                {/* Hover accent line */}
                <div className="mt-5 h-0.5 bg-gradient-copper transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">Our Services</span>
                <div className="w-8 h-px bg-copper-500" />
              </div>

              <h2
                className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                What We Offer
              </h2>

              <p
                className="text-lg text-charcoal-600 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                A comprehensive range of energy assessment and compliance services,
                with particular expertise in EU Taxonomy reporting for property
                investors and asset managers.
              </p>
            </div>

            <ul className="space-y-4 max-w-xl mx-auto">
              {[
                { text: 'EU Taxonomy Reports', highlight: true, note: 'Our primary specialism' },
                { text: 'Home Performance Index (HPI) Certification' },
                { text: 'BER Certificates (Domestic & Commercial)' },
                { text: 'Ventilation Validation Certificates' },
                { text: 'Air Leakage Test Certificates' },
                { text: 'Acoustic Test Reports' },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 bg-ivory-100 rounded-xl border border-charcoal-100/50 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-900 text-copper-400">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span className={item.highlight ? 'text-forest-900 font-medium' : 'text-charcoal-700'}>
                    {item.text}
                    {item.note && (
                      <span className="text-copper-600 text-sm ml-2">— {item.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Work Together?"
        subtitle="Contact us to discuss your energy assessment requirements."
        variant="primary"
      />
    </>
  )
}
