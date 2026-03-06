import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-6xl font-bold text-primary-600 mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
            been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/eu-taxonomy-reports" className="text-primary-700 hover:text-primary-800">
                EU Taxonomy Reports
              </Link>
              <Link href="/services/ber-certificates" className="text-primary-700 hover:text-primary-800">
                BER Certificates
              </Link>
              <Link href="/about" className="text-primary-700 hover:text-primary-800">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
