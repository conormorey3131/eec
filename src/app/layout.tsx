import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { JsonLd } from '@/components/seo/JsonLd'
import { getLocalBusinessSchema } from '@/components/seo/schemas'
import { SITE, COMPANY } from '@/lib/constants'

// Premium display serif - elegant, authoritative
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

// Modern geometric sans - clean, professional
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${COMPANY.name} | EU Taxonomy Reports & Energy Assessments Ireland`,
    template: `%s | ${COMPANY.name}`,
  },
  description: SITE.description,
  keywords: [
    'EU Taxonomy Report Ireland',
    'BER Certificate Ireland',
    'Energy Consultant Ireland',
    'EU Taxonomy Assessment',
    'BER Assessor Ennis',
    'Sustainable Building Assessment',
    'SFDR Compliance Ireland',
  ],
  authors: [{ name: COMPANY.person }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: SITE.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | EU Taxonomy Reports & Energy Assessments Ireland`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | EU Taxonomy Reports & Energy Assessments Ireland`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2f23',
}

function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) return null

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <GoogleAnalytics />
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {/* Subtle grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        <Header />
        <main className="flex-grow pb-mobile-sticky">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
