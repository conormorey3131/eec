import { Container } from '@/components/ui/Container'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-ivory-100 border-b border-charcoal-100/50">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-charcoal-500 hover:text-copper-600 transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-charcoal-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-charcoal-500 hover:text-copper-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-forest-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  )
}
