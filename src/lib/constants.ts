// Company Information
export const COMPANY = {
  name: 'Efficient Energy Consultancy',
  legalName: 'Efficient Energy Consultancy',
  person: 'Shane Flanagan',
  phone: '087 2595798',
  phoneClean: '+353872595798', // For tel: links
  phoneWhatsApp: '353872595798', // For WhatsApp (no + prefix)
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
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://efficientenergy.ie',
  description: 'Professional EU Taxonomy Reports, BER Certificates, and energy assessment services across Ireland. 20+ years experience. Qualified HPI Assessor.',
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
      { href: '/services/ber-certificates', label: 'BER Certificates' },
      { href: '/services/ventilation-validation', label: 'Ventilation Validation' },
      { href: '/services/air-leakage-testing', label: 'Air Leakage Testing' },
      { href: '/services/acoustic-testing', label: 'Acoustic Testing' },
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
    { href: '/services/ber-certificates', label: 'BER Certificates' },
    { href: '/services/ventilation-validation', label: 'Ventilation Validation' },
    { href: '/services/air-leakage-testing', label: 'Air Leakage Testing' },
    { href: '/services/acoustic-testing', label: 'Acoustic Testing' },
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

// WhatsApp link
export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneWhatsApp}?text=${encodeURIComponent('Hi, I\'m interested in your energy consultancy services.')}`

// Phone link
export const PHONE_URL = `tel:${COMPANY.phoneClean}`
