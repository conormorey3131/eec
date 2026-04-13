// Company Information
export const COMPANY = {
  name: 'Efficient Energy Consultancy',
  legalName: 'Efficient Energy Consultancy',
  person: 'Shane Flanagan',
  phone: '065 679 4005',
  phoneClean: '+353656794005', // For tel: links
  mobile: '087 2595798',
  mobileClean: '+353872595798',
  email: 'info@eec.ie',
  address: {
    street: 'Ennis',
    city: 'Ennis',
    county: 'Co. Clare',
    country: 'Ireland',
  },
  coordinates: {
    lat: 52.8463,
    lng: -8.9864,
  },
} as const

// Site configuration
export const SITE = {
  name: 'Efficient Energy Consultancy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eec.ie',
  description: 'Professional EU Taxonomy Reports, Home Performance Index (HPI) certification, BER Certificates, and energy assessment services across Ireland. 20+ years experience.',
} as const

// Trust signals
export const TRUST_SIGNALS = [
  {
    text: '20+ Years Experience',
    icon: 'experience',
  },
  {
    text: 'Qualified HPI Assessor',
    icon: 'qualification',
  },
  {
    text: 'BER Assessors Association',
    icon: 'membership',
  },
  {
    text: 'Nationwide Coverage',
    icon: 'coverage',
  },
] as const

// Navigation
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/eu-taxonomy-reports', label: 'EU Taxonomy Reports', highlight: true },
  {
    label: 'Services',
    children: [
      { href: '/services/home-performance-index', label: 'Home Performance Index' },
      { href: '/services/ber-certificates', label: 'BER Certificates' },
      { href: '/services/ventilation-validation', label: 'Ventilation Validation' },
      { href: '/services/air-leakage-testing', label: 'Air Leakage Testing' },
      { href: '/services/acoustic-testing', label: 'Acoustic Testing' },
      { href: '/services/thermal-imaging', label: 'Thermal Imaging' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
] as const

// Footer links
export const FOOTER_LINKS = {
  services: [
    { href: '/eu-taxonomy-reports', label: 'EU Taxonomy Reports' },
    { href: '/services/home-performance-index', label: 'Home Performance Index' },
    { href: '/services/ber-certificates', label: 'BER Certificates' },
    { href: '/services/ventilation-validation', label: 'Ventilation Validation' },
    { href: '/services/air-leakage-testing', label: 'Air Leakage Testing' },
    { href: '/services/acoustic-testing', label: 'Acoustic Testing' },
    { href: '/services/thermal-imaging', label: 'Thermal Imaging' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/resources', label: 'Resources' },
  ],
  locations: [
    { href: '/locations/ennis', label: 'Ennis, Co. Clare' },
    { href: '/locations/ireland', label: 'Nationwide Ireland' },
  ],
} as const

// Phone link
export const PHONE_URL = `tel:${COMPANY.phoneClean}`
