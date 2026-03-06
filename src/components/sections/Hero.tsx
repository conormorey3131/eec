'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PhoneIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { COMPANY, PHONE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface HeroProps {
  overline?: string
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  showPhone?: boolean
  backgroundImage?: string
  variant?: 'default' | 'split' | 'editorial'
  sideImage?: string
  stats?: { value: string; label: string }[]
}

export function Hero({
  overline,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  showPhone = true,
  backgroundImage,
  variant = 'default',
  sideImage,
  stats,
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * 0.3
      const overlay = hero.querySelector('.parallax-overlay') as HTMLElement
      if (overlay) {
        overlay.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Editorial variant - dramatic dark hero
  if (variant === 'editorial') {
    return (
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center bg-forest-900 overflow-hidden"
      >
        {/* Background image with overlay */}
        {backgroundImage && (
          <div className="parallax-overlay absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-900/80 to-forest-900" />
          </div>
        )}

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-grain" />
        </div>

        {/* Geometric accents */}
        <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-copper-500/50 to-transparent" />
        <div className="absolute bottom-1/4 left-10 w-32 h-px bg-gradient-to-r from-copper-500/50 to-transparent" />

        <Container className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            {overline && (
              <div className="flex items-center gap-4 mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <div className="w-12 h-px bg-copper-500" />
                <span className="overline text-copper-400">{overline}</span>
              </div>
            )}

            <h1
              className="headline-xl text-ivory-100 mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              {title}
            </h1>

            <p
              className="text-xl sm:text-2xl text-ivory-300 max-w-2xl mb-12 leading-relaxed animate-fade-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button
                href={primaryCTA.href}
                variant="accent"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                {primaryCTA.text}
              </Button>

              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="ghost" size="lg" className="text-ivory-200 hover:text-ivory-100">
                  {secondaryCTA.text}
                </Button>
              )}

              {showPhone && !secondaryCTA && (
                <Button
                  href={PHONE_URL}
                  variant="ghost"
                  size="lg"
                  icon={<PhoneIcon className="w-5 h-5" />}
                  className="text-ivory-200 hover:text-ivory-100"
                >
                  {COMPANY.phone}
                </Button>
              )}
            </div>

            {/* Stats row */}
            {stats && (
              <div
                className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-ivory-100/10 animate-fade-up opacity-0"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center sm:items-start text-center sm:text-left"
                    >
                      <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory-100 font-semibold tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-ivory-400/80 mt-2 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>

        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest-950 to-transparent pointer-events-none" />
      </section>
    )
  }

  // Split variant with side image
  if (variant === 'split' && sideImage) {
    return (
      <section ref={heroRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-ivory-100 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              {overline && (
                <div
                  className="flex items-center gap-4 mb-6 animate-fade-up opacity-0"
                  style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                  <div className="w-10 h-px bg-copper-500" />
                  <span className="overline text-copper-600">{overline}</span>
                </div>
              )}

              <h1
                className="headline-lg text-forest-900 mb-6 animate-fade-up opacity-0"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                {title}
              </h1>

              <p
                className="subhead max-w-lg mb-10 animate-fade-up opacity-0"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                {subtitle}
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                <Button
                  href={primaryCTA.href}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  {primaryCTA.text}
                </Button>

                {secondaryCTA && (
                  <Button href={secondaryCTA.href} variant="secondary" size="lg">
                    {secondaryCTA.text}
                  </Button>
                )}

                {showPhone && !secondaryCTA && (
                  <Button href={PHONE_URL} variant="secondary" size="lg" icon={<PhoneIcon className="w-5 h-5" />}>
                    {COMPANY.phone}
                  </Button>
                )}
              </div>
            </div>

            {/* Image */}
            <div
              className="relative animate-fade-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dramatic">
                <Image
                  src={sideImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Copper accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/20 to-transparent mix-blend-multiply" />
              </div>

              {/* Geometric accents */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 border-2 border-copper-500/20 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-copper-500/10 rounded-lg -z-10" />

              {/* Floating badge */}
              <div className="absolute -bottom-4 right-8 bg-white px-5 py-3 rounded-lg shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-copper-500 animate-pulse-subtle" />
                  <span className="text-sm font-medium text-forest-900">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  // Default centered variant
  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-ivory-100 overflow-hidden"
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <div className="parallax-overlay absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-[0.07]"
            sizes="100vw"
            priority
          />
        </div>
      )}

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-mesh-gradient" />

      {/* Geometric lines */}
      <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-copper-500/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-copper-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {overline && (
            <div
              className="flex items-center justify-center gap-4 mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="w-8 h-px bg-copper-500" />
              <span className="overline text-copper-600">{overline}</span>
              <div className="w-8 h-px bg-copper-500" />
            </div>
          )}

          <h1
            className="headline-lg text-forest-900 mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {title}
          </h1>

          <p
            className="subhead max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            {subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button
              href={primaryCTA.href}
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              {primaryCTA.text}
            </Button>

            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary" size="lg">
                {secondaryCTA.text}
              </Button>
            )}

            {showPhone && !secondaryCTA && (
              <Button href={PHONE_URL} variant="secondary" size="lg" icon={<PhoneIcon className="w-5 h-5" />}>
                {COMPANY.phone}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
