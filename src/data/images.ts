// Local images - place in /public/images/ folder
// Download the images from the URLs in comments and save locally
//
// Quick download script (run in terminal):
// mkdir -p public/images && cd public/images
// curl -o hero-main.jpg "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
// curl -o hero-eu-taxonomy.jpg "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
// (etc. for all images)

export const images = {
  // Hero images
  hero: {
    // https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80
    home: '/images/hero-main.jpg',
    // https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80
    euTaxonomy: '/images/hero-eu-taxonomy.jpg',
    // https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80
    contact: '/images/hero-contact.jpg',
  },

  // Service images
  services: {
    // https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80
    euTaxonomy: '/images/service-eu-taxonomy.jpg',
    // https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80
    ber: '/images/service-ber.jpg',
    // https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80
    ventilation: '/images/service-ventilation.jpg',
    // https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80
    airLeakage: '/images/service-air-leakage.jpg',
    // https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80
    acoustic: '/images/service-acoustic.jpg',
  },

  // About/team
  about: {
    // https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80
    team: '/images/about-team.jpg',
    // https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80
    office: '/images/about-office.jpg',
  },

  // Location images
  locations: {
    // https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80
    ennis: '/images/location-ennis.jpg',
    // https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80
    ireland: '/images/location-ireland.jpg',
    // https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=800&q=80
    dublin: '/images/location-dublin.jpg',
  },

  // Property types
  properties: {
    // https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80
    commercial: '/images/property-commercial.jpg',
    // https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80
    residential: '/images/property-residential.jpg',
    // https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80
    industrial: '/images/property-industrial.jpg',
    // https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80
    apartment: '/images/property-apartment.jpg',
  },

  // Sustainability/green
  sustainability: {
    // https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80
    green: '/images/sustainability-green.jpg',
    // https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80
    solar: '/images/sustainability-solar.jpg',
    // https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80
    nature: '/images/sustainability-nature.jpg',
  },

  // Blog/resources
  blog: {
    // https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80
    euTaxonomy: '/images/blog-eu-taxonomy.jpg',
    // https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80
    comparison: '/images/blog-comparison.jpg',
    // https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80
    airTest: '/images/blog-air-test.jpg',
  },
} as const
