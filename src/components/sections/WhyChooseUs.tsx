'use client'

import { Container } from '@/components/ui/Container'
import { CheckIcon } from '@/components/ui/Icons'
import { COMPANY } from '@/lib/constants'

const reasons = [
  {
    title: '20+ Years Experience',
    description: `${COMPANY.person} brings over two decades of expertise as a domestic BER assessor, ensuring thorough and accurate assessments.`,
  },
  {
    title: 'Qualified HPI Assessor',
    description:
      'Home Performance Index certified — qualified to assess new residential developments against Ireland\'s national green home standard, aligned with EU Taxonomy and Level(s) frameworks.',
  },
  {
    title: 'Industry Membership',
    description:
      'Proud member of the BER Assessors Association of Ireland, committed to professional standards and continuous development.',
  },
  {
    title: 'Nationwide Coverage',
    description:
      'Based in Ennis, Co. Clare, we provide services across Ireland—from Dublin to Cork, Galway to Limerick and everywhere in between.',
  },
  {
    title: 'Investment-Ready Reports',
    description:
      'Our EU Taxonomy reports are formatted for investor and regulatory requirements, supporting SFDR compliance and due diligence.',
  },
  {
    title: 'Clear Communication',
    description:
      'We explain complex regulatory requirements in plain language, ensuring you understand your building\'s sustainability status.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Decorative lines */}
      <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-copper-500/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-32 h-px bg-gradient-to-r from-copper-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Intro */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">Why Us</span>
            </div>

            <h2 className="headline-md text-forest-900 mb-6">
              Why Efficient Energy Consultancy?
            </h2>

            <p className="text-lg text-charcoal-600 leading-relaxed mb-10">
              Choosing the right energy consultant is essential for accurate assessments
              and compliant documentation. Here&apos;s why property professionals across
              Ireland trust us with their energy compliance needs.
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
                {/* Quote mark */}
                <div className="text-copper-500 text-6xl font-display leading-none mb-4">&ldquo;</div>

                <p className="text-ivory-200 text-lg leading-relaxed mb-6">
                  Our goal is simple: deliver accurate, professional energy
                  assessments that meet your regulatory requirements and support your
                  property decisions.
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

          {/* Right column - Reasons grid */}
          <div className="grid gap-6 sm:grid-cols-2 content-start">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="group flex gap-4 p-5 rounded-xl bg-white border border-charcoal-100/50 transition-all duration-300 hover:shadow-soft hover:border-charcoal-200/50">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-900 text-ivory-100 transition-colors group-hover:bg-copper-600">
                      <CheckIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-forest-900 mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
