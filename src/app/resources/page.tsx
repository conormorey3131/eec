import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CTABanner } from '@/components/sections/CTABanner'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getWebPageSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getAllBlogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Resources & Guides | Energy Compliance Insights',
  description:
    'Guides and articles on EU Taxonomy, BER certificates, and building energy compliance in Ireland. Expert insights from qualified energy assessors.',
  alternates: {
    canonical: `${SITE.url}/resources`,
  },
}

export default function ResourcesPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            title: 'Resources & Guides',
            description:
              'Guides and articles on EU Taxonomy, BER certificates, and building energy compliance in Ireland.',
            url: `${SITE.url}/resources`,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Resources', url: `${SITE.url}/resources` },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ label: 'Resources' }]} />

      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Resources & Guides
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Expert insights on EU Taxonomy, BER certificates, and building energy
              compliance in Ireland. Practical guides to help you understand your
              requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} hover className="flex flex-col overflow-hidden">
                {/* Image */}
                <Link href={`/resources/${post.slug}`} className="relative h-48 block overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary">{post.category}</Badge>
                  </div>
                </Link>

                <CardContent className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-IE', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    <Link
                      href={`/resources/${post.slug}`}
                      className="hover:text-primary-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>

                  <Link
                    href={`/resources/${post.slug}`}
                    className="inline-flex items-center text-primary-700 font-medium text-sm hover:text-primary-800 mt-auto"
                  >
                    Read more
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              More articles coming soon. Check back for updates on energy compliance
              and sustainability topics.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner
        variant="minimal"
        title="Have a Question?"
        subtitle="Contact us for specific advice on your energy compliance needs."
      />
    </>
  )
}
