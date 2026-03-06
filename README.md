# Efficient Energy Consultancy Website

A professional, mobile-first website for an Irish energy consultancy specializing in EU Taxonomy Reports, BER Certificates, and building energy compliance services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (static export)

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
# Install dependencies
npm install

# Download images (one-time)
chmod +x scripts/download-images.sh
./scripts/download-images.sh

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

### Option 1: Automatic (GitHub Actions)

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Under "Build and deployment", select "GitHub Actions"
4. Push to main branch - it will auto-deploy

### Option 2: Manual

```bash
# Build the static site
npm run build

# The static files are in the /out folder
# Push the /out folder contents to your gh-pages branch
```

### Custom Domain

1. Add your domain in GitHub repo Settings > Pages > Custom domain
2. Create a `public/CNAME` file with your domain:
   ```
   efficientenergy.ie
   ```
3. Update `NEXT_PUBLIC_SITE_URL` in `.env.local`

### Using a Subdirectory (e.g., username.github.io/repo-name)

If not using a custom domain, update `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  trailingSlash: true,
  // ...
}
```

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) (free, no signup required):

1. Go to https://web3forms.com
2. Enter your email and get an access key
3. Update the access key in `src/components/forms/ContactForm.tsx`:
   ```tsx
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── eu-taxonomy-reports/
│   ├── services/          # Service pages
│   ├── locations/         # Location pages
│   ├── resources/         # Blog/resources
│   └── ...
├── components/
│   ├── layout/            # Header, Footer, MobileStickyBar
│   ├── sections/          # Page sections (Hero, FAQs, etc.)
│   ├── ui/                # UI primitives (Button, Card, etc.)
│   ├── forms/             # Form components
│   └── seo/               # JSON-LD schemas
├── data/                  # Static data (services, FAQs, blog posts)
└── lib/                   # Utilities and constants
public/
└── images/                # Downloaded images
```

## Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://efficientenergy.ie
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Customization

### Company Information

Update `src/lib/constants.ts`:
- Company name, phone, email
- Address
- Navigation links

### Colors & Design

- `tailwind.config.ts` - Colors (forest green, copper, ivory), typography
- `src/app/globals.css` - Global styles, animations

### Content

- Services: `src/data/services.ts`
- FAQs: `src/data/faqs.ts`
- Blog posts: `src/data/blog-posts.ts`

### Images

Replace images in `public/images/` with your own. Use the same filenames or update `src/data/images.ts`.

## SEO

### Built-in Features

- Per-page meta tags
- OpenGraph & Twitter Cards
- JSON-LD structured data
- Auto-generated sitemap.xml
- robots.txt

### SEO Strategy

See `seo/notes.md` for keyword strategy.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run lint     # Run ESLint
```

## Adding Content

### New Service Page

1. Add to `src/data/services.ts`
2. Create `src/app/services/[slug]/page.tsx`
3. Update nav in `src/lib/constants.ts`

### New Blog Post

1. Add to `src/data/blog-posts.ts`
2. Add content in `src/app/resources/[slug]/page.tsx`

## License

Private - All rights reserved.
