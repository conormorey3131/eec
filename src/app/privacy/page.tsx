import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { SITE, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${COMPANY.name}. How we collect, use, and protect your information.`,
  alternates: {
    canonical: `${SITE.url}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="lead">
                {COMPANY.name} is committed to protecting your privacy. This policy
                explains how we collect, use, and safeguard your information.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact details when you enquire about our services</li>
                <li>Property information necessary for assessments</li>
                <li>Communication records between us</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide the energy assessment services you request</li>
                <li>Communicate with you about your enquiries and bookings</li>
                <li>Send relevant information about our services if you consent</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal information against unauthorised access,
                alteration, disclosure, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>
                Under GDPR, you have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your personal
                data, please contact us at {COMPANY.email} or call {COMPANY.phone}.
              </p>

              <p className="text-sm text-slate-500 mt-8">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
