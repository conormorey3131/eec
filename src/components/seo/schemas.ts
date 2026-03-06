import { COMPANY, SITE } from '@/lib/constants'

// LocalBusiness / ProfessionalService schema
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#organization`,
    name: COMPANY.name,
    description: SITE.description,
    url: SITE.url,
    telephone: COMPANY.phoneClean,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.county,
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.coordinates.lat,
      longitude: COMPANY.coordinates.lng,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [],
  }
}

// Service schema
export function getServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ireland',
    },
    serviceType: service.name,
  }
}

// FAQPage schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// BreadcrumbList schema
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// WebPage schema
export function getWebPageSchema(page: {
  title: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
    },
    about: {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#organization`,
    },
  }
}

// Article/BlogPosting schema
export function getArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: COMPANY.person,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
  }
}
