import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { CTABanner } from '@/components/sections/CTABanner'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { JsonLd } from '@/components/seo/JsonLd'
import { getArticleSchema, getBreadcrumbSchema } from '@/components/seo/schemas'
import { SITE } from '@/lib/constants'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE.url}/resources/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

// Stub content for the blog posts - in production, this would come from a CMS
const postContent: Record<string, React.ReactNode> = {
  'what-is-eu-taxonomy-ireland-property': (
    <>
      <p className="lead">
        The EU Taxonomy is a classification system that establishes which economic
        activities can be considered environmentally sustainable. For property
        owners and investors in Ireland, understanding EU Taxonomy is becoming
        increasingly important as sustainable finance regulations reshape the
        real estate market.
      </p>

      <h2>What is the EU Taxonomy?</h2>
      <p>
        The EU Taxonomy Regulation is part of the European Green Deal&apos;s
        sustainable finance framework. It provides a common language for
        identifying which investments contribute to environmental objectives.
      </p>
      <p>
        For real estate, this means buildings are assessed against technical
        screening criteria to determine whether they qualify as environmentally
        sustainable. This assessment covers climate change mitigation, climate
        change adaptation, and ensures the activity does no significant harm
        (DNSH) to other environmental objectives.
      </p>

      <h2>Why Does It Matter for Irish Property?</h2>
      <p>
        Property investors, asset managers, and financial institutions subject
        to the Sustainable Finance Disclosure Regulation (SFDR) need to report
        on the sustainability of their investments. EU Taxonomy alignment is a
        key metric for this reporting.
      </p>
      <p>
        Beyond regulatory compliance, EU Taxonomy alignment is increasingly
        requested in property transactions, refinancing, and by stakeholders
        seeking evidence of ESG commitment.
      </p>

      <h2>Getting an EU Taxonomy Report</h2>
      <p>
        An EU Taxonomy Report assesses your building against the relevant
        technical screening criteria. The assessment considers energy performance,
        climate adaptation measures, and various DNSH criteria.
      </p>
      <p>
        At Efficient Energy Consultancy, we provide comprehensive EU Taxonomy
        assessments for commercial properties across Ireland.
      </p>
    </>
  ),
  'eu-taxonomy-vs-ber-understanding-difference': (
    <>
      <p className="lead">
        While both EU Taxonomy Reports and BER Certificates relate to building
        sustainability, they serve different purposes and audiences. Here&apos;s
        what you need to know about each.
      </p>

      <h2>BER Certificates: Energy Performance Rating</h2>
      <p>
        A Building Energy Rating (BER) certificate is a standardised measure of
        a building&apos;s energy performance. It rates buildings on a scale from
        A (most efficient) to G (least efficient), similar to energy labels on
        appliances.
      </p>
      <p>
        BER certificates are legally required when selling, renting, or advertising
        a property in Ireland. They&apos;re based on the physical characteristics
        of the building—insulation, heating systems, windows, and so on.
      </p>

      <h2>EU Taxonomy Reports: Sustainability Alignment</h2>
      <p>
        EU Taxonomy Reports are broader in scope. They assess whether a building
        meets the EU&apos;s criteria for environmental sustainability, covering
        climate mitigation, climate adaptation, and ensuring no significant harm
        to other environmental objectives.
      </p>
      <p>
        EU Taxonomy Reports are primarily used by investors and financial
        institutions for SFDR compliance and sustainable investment decisions.
      </p>

      <h2>The Connection</h2>
      <p>
        BER data forms part of the EU Taxonomy assessment. A building&apos;s
        energy performance is one factor in determining EU Taxonomy alignment
        for climate mitigation. However, the EU Taxonomy assessment goes beyond
        energy to consider adaptation measures and other environmental factors.
      </p>
    </>
  ),
  'preparing-building-air-leakage-test': (
    <>
      <p className="lead">
        Proper preparation before an air leakage test can make the difference
        between a pass and a fail. Here&apos;s what you need to do to ensure
        your building is ready for airtightness testing.
      </p>

      <h2>Before the Test Day</h2>
      <p>
        Discuss preparation requirements with your assessor when booking the test.
        Every building is different, and they can advise on specific areas that
        need attention.
      </p>
      <ul>
        <li>Complete all planned sealing works</li>
        <li>Install all final window and door seals</li>
        <li>Ensure all penetrations are sealed</li>
        <li>Check service entry points</li>
      </ul>

      <h2>On Test Day</h2>
      <p>
        When we arrive to conduct the test, ensure:
      </p>
      <ul>
        <li>All windows and external doors are closed</li>
        <li>Internal doors are open</li>
        <li>Ventilation systems are switched off or sealed</li>
        <li>Drainage traps are filled with water</li>
        <li>Access is available to all areas</li>
      </ul>

      <h2>What If You Fail?</h2>
      <p>
        If initial results indicate issues, we can help identify leak sources.
        Thermal imaging or smoke testing can pinpoint problem areas for remediation
        before retesting.
      </p>
    </>
  ),
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = postContent[slug]
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <JsonLd
        data={[
          getArticleSchema({
            title: post.title,
            description: post.metaDescription,
            url: `${SITE.url}/resources/${post.slug}`,
            datePublished: post.date,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Resources', url: `${SITE.url}/resources` },
            { name: post.title, url: `${SITE.url}/resources/${post.slug}` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: post.title },
        ]}
      />

      <article className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="primary">{post.category}</Badge>
                <span className="text-sm text-slate-500">{post.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {post.title}
              </h1>
              <time className="text-slate-500">
                {new Date(post.date).toLocaleDateString('en-IE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </header>

            {/* Content */}
            <div className="prose prose-slate prose-lg max-w-none mb-12">
              {content || (
                <p className="text-slate-600">
                  Full article content coming soon. This is a stub article for
                  demonstration purposes.
                </p>
              )}
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 bg-primary-50 rounded-2xl mb-12">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Need Professional Advice?
              </h3>
              <p className="text-primary-800 mb-4">
                Contact us for expert guidance on EU Taxonomy, BER assessments,
                or any building energy compliance questions.
              </p>
              <Button
                href="/contact"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Get in Touch
              </Button>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-slate-200 pt-10">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/resources/${relatedPost.slug}`}
                      className="group block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <Badge variant="default" className="mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>

      <CTABanner
        variant="minimal"
        title="Ready for Your Assessment?"
        subtitle="Contact us to discuss your energy compliance requirements."
      />
    </>
  )
}
