import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { SITE, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${COMPANY.name}. Terms and conditions governing our energy assessment services.`,
  alternates: {
    canonical: `${SITE.url}/terms`,
  },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="lead">
                These terms govern your use of {COMPANY.name}&apos;s services and
                website. By engaging our services, you agree to these terms.
              </p>

              <h2>Our Services</h2>
              <p>
                {COMPANY.name} provides energy assessment services including EU
                Taxonomy Reports, BER Certificates, ventilation validation,
                air leakage testing, and acoustic testing throughout Ireland.
              </p>

              <h2>Booking and Cancellation</h2>
              <p>
                Once a booking is confirmed, we commit resources to deliver your
                assessment. Cancellations should be made with at least 48 hours
                notice. Late cancellations may incur a fee.
              </p>

              <h2>Payment Terms</h2>
              <p>
                Payment terms are agreed upon booking. For larger projects, payment
                schedules may be arranged. All prices quoted are subject to VAT
                where applicable.
              </p>

              <h2>Assessment Accuracy</h2>
              <p>
                Our assessments are conducted in accordance with relevant Irish
                and EU regulations and professional standards. Results are based
                on information available and conditions at the time of assessment.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Our liability is limited to the fee paid for the specific service
                in question. We are not liable for decisions made based on our
                assessments beyond the scope of the assessment itself.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, and design,
                is owned by {COMPANY.name} and protected by copyright law.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of our
                services following changes constitutes acceptance of the new terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of Ireland. Any disputes will
                be subject to the exclusive jurisdiction of the Irish courts.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these terms, contact us at {COMPANY.email}.
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
