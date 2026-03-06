import { images } from './images'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  date: string
  category: string
  readTime: string
  image: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-eu-taxonomy-ireland-property',
    title: 'What is EU Taxonomy and Why It Matters for Irish Property',
    excerpt: 'Understanding the EU Taxonomy regulation and its implications for property owners, investors, and asset managers in Ireland.',
    metaDescription: 'Learn what EU Taxonomy means for Irish property. Understand compliance requirements, building assessments, and sustainable finance implications for real estate in Ireland.',
    date: '2024-01-15',
    category: 'EU Taxonomy',
    readTime: '5 min read',
    image: images.blog.euTaxonomy,
    featured: true,
  },
  {
    slug: 'eu-taxonomy-vs-ber-understanding-difference',
    title: 'EU Taxonomy vs BER: Understanding the Key Differences',
    excerpt: 'While both relate to building sustainability, EU Taxonomy and BER certificates serve different purposes. Here\'s what you need to know.',
    metaDescription: 'EU Taxonomy vs BER certificates explained. Understand how these sustainability assessments differ and when you need each for Irish property compliance.',
    date: '2024-01-08',
    category: 'EU Taxonomy',
    readTime: '4 min read',
    image: images.blog.comparison,
    featured: false,
  },
  {
    slug: 'preparing-building-air-leakage-test',
    title: 'Preparing Your Building for an Air Leakage Test',
    excerpt: 'A practical guide to preparing your new build or renovation for airtightness testing to ensure you pass first time.',
    metaDescription: 'How to prepare for air leakage testing in Ireland. Practical steps to ensure your building passes airtightness requirements for Building Regulations compliance.',
    date: '2024-01-01',
    category: 'Air Testing',
    readTime: '6 min read',
    image: images.blog.airTest,
    featured: false,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}
