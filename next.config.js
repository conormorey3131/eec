/** @type {import('next').NextConfig} */

const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // No basePath needed with custom domain (eec.ie)
  // basePath and assetPrefix removed for custom domain

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
