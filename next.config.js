/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // For GitHub Pages - set to your repo name if not using custom domain
  // e.g., basePath: '/repo-name'
  // basePath: '',

  // Trailing slashes work better with GitHub Pages
  trailingSlash: true,

  // Disable image optimization (not available in static export)
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  poweredByHeader: false,

  // Strict mode for React
  reactStrictMode: true,
}

module.exports = nextConfig
