'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ChevronDownIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
  columns?: 1 | 2
}

function FAQItem({ faq, isOpen, onToggle, index }: { faq: FAQ; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className="border-b border-charcoal-100 last:border-0 opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.3 + index * 0.05}s`, animationFillMode: 'forwards' }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between py-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className={cn(
          'text-base font-display font-medium pr-4 transition-colors',
          isOpen ? 'text-copper-600' : 'text-forest-900 group-hover:text-copper-600'
        )}>
          {faq.question}
        </span>
        <span className="flex-shrink-0 ml-2">
          <div className={cn(
            'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300',
            isOpen ? 'bg-copper-500 text-white rotate-180' : 'bg-ivory-200 text-charcoal-600 group-hover:bg-forest-900 group-hover:text-ivory-100'
          )}>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out-expo',
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        )}
      >
        <p className="text-charcoal-600 leading-relaxed pr-12">{faq.answer}</p>
      </div>
    </div>
  )
}

export function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  columns = 1,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (columns === 2) {
    const midpoint = Math.ceil(faqs.length / 2)
    const leftFaqs = faqs.slice(0, midpoint)
    const rightFaqs = faqs.slice(midpoint)

    return (
      <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-copper-500/30 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-copper-500/30 to-transparent" />

        <Container className="relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">FAQ</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2
              className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className="subhead opacity-0 animate-fade-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-charcoal-100/50">
              {leftFaqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-charcoal-100/50">
              {rightFaqs.map((faq, index) => {
                const realIndex = index + midpoint
                return (
                  <FAQItem
                    key={realIndex}
                    faq={faq}
                    index={realIndex}
                    isOpen={openIndex === realIndex}
                    onToggle={() => handleToggle(realIndex)}
                  />
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-copper-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-forest-900/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">FAQ</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>

            <h2
              className="headline-md text-forest-900 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className="text-lg text-charcoal-600 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ list */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-charcoal-100/50">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
