import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { PhoneIcon, EmailIcon, CoverageIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE, COMPANY, PHONE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Quote for Energy Assessments',
  description: `Contact ${COMPANY.name} for EU Taxonomy Reports, BER Certificates, and energy assessment services across Ireland. Call ${COMPANY.phone} or use our online form.`,
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            title: 'Contact Efficient Energy Consultancy',
            description: `Contact us for EU Taxonomy Reports, BER Certificates, and energy assessments across Ireland.`,
            url: `${SITE.url}/contact`,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Contact', url: `${SITE.url}/contact` },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-ivory-100 to-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-copper-500/5 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-copper-500" />
                <span className="overline text-copper-600">Contact Us</span>
              </div>

              <h1 className="headline-md text-forest-900 mb-6">
                Get in Touch
              </h1>

              <p className="text-lg text-charcoal-600 mb-10 leading-relaxed">
                Ready to discuss your energy assessment needs? Contact us for a free
                consultation. We&apos;ll assess your requirements and provide a
                tailored quote.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href={PHONE_URL}
                  className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-charcoal-100/50 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-ivory-100 group-hover:bg-copper-600 transition-colors">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-forest-900">Call Us</h3>
                    <p className="text-copper-600 font-medium">{COMPANY.phone}</p>
                    <p className="text-sm text-charcoal-500 mt-1">
                      Monday - Friday, 9am - 5pm
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-charcoal-100/50 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-ivory-100 group-hover:bg-copper-600 transition-colors">
                    <EmailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-forest-900">Email</h3>
                    <p className="text-copper-600 font-medium">{COMPANY.email}</p>
                    <p className="text-sm text-charcoal-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-charcoal-100/50 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-copper-400">
                    <CoverageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-forest-900">Location</h3>
                    <p className="text-charcoal-700">
                      {COMPANY.address.city}, {COMPANY.address.county}
                    </p>
                    <p className="text-sm text-charcoal-500 mt-1">
                      Nationwide service across Ireland
                    </p>
                  </div>
                </div>
              </div>

              {/* Free consultation card */}
              <div className="relative p-6 bg-forest-900 rounded-2xl overflow-hidden">
                {/* Grain texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <div className="absolute inset-0 bg-grain" />
                </div>

                <div className="relative">
                  <h3 className="font-display font-medium text-ivory-100 mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-sm text-ivory-300">
                    Not sure what service you need? We&apos;re happy to discuss your
                    requirements and advise on the best approach. No obligation.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-elevated border border-charcoal-100/50">
                <h2 className="font-display text-xl font-medium text-forest-900 mb-8">
                  Request a Quote
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
