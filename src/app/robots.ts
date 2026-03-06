import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://efficientenergy.ie'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
