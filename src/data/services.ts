export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  metaDescription: string
  icon: string
  features: string[]
  benefits: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  isPrimary?: boolean
}

export const services: Service[] = [
  {
    slug: 'eu-taxonomy-reports',
    title: 'EU Taxonomy Reports',
    shortTitle: 'EU Taxonomy',
    description: 'Comprehensive EU Taxonomy alignment assessments for building acquisition, ownership, and sustainable finance compliance across Ireland.',
    metaDescription: 'Professional EU Taxonomy Reports for buildings in Ireland. Expert assessments for SFDR compliance, building acquisition, and sustainable real estate investment. Nationwide service.',
    icon: 'taxonomy',
    isPrimary: true,
    features: [
      'Full EU Taxonomy alignment assessment',
      'Climate mitigation & adaptation analysis',
      'DNSH (Do No Significant Harm) criteria evaluation',
      'Technical screening criteria verification',
      'Detailed compliance documentation',
      'Investment-ready reporting format',
    ],
    benefits: [
      'Meet SFDR disclosure requirements',
      'Support sustainable investment decisions',
      'Demonstrate ESG commitment to stakeholders',
      'Clear documentation for due diligence',
      'Identify building improvement opportunities',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your building portfolio and specific EU Taxonomy requirements.',
      },
      {
        step: 2,
        title: 'Document Collection',
        description: 'You provide building specifications, BER data, and relevant documentation.',
      },
      {
        step: 3,
        title: 'Site Assessment',
        description: 'Our qualified assessors conduct a thorough on-site evaluation.',
      },
      {
        step: 4,
        title: 'Technical Analysis',
        description: 'We analyse against EU Taxonomy technical screening criteria.',
      },
      {
        step: 5,
        title: 'Report Delivery',
        description: 'You receive a comprehensive EU Taxonomy alignment report.',
      },
    ],
    faqs: [
      {
        question: 'What is an EU Taxonomy Report?',
        answer: 'An EU Taxonomy Report assesses whether a building meets the EU\'s environmental sustainability criteria. It evaluates climate mitigation, climate adaptation, and Do No Significant Harm (DNSH) requirements to determine if a property qualifies as environmentally sustainable under EU regulations.',
      },
      {
        question: 'Who needs an EU Taxonomy Report in Ireland?',
        answer: 'EU Taxonomy Reports are required by property investors, asset managers, and financial institutions subject to SFDR (Sustainable Finance Disclosure Regulation). They\'re essential for anyone acquiring, owning, or financing commercial real estate who needs to demonstrate sustainability alignment.',
      },
      {
        question: 'How long does an EU Taxonomy assessment take?',
        answer: 'A typical EU Taxonomy assessment takes 2-4 weeks from initial consultation to final report delivery. The timeline depends on building complexity, documentation availability, and site access scheduling.',
      },
      {
        question: 'What information do you need to complete an EU Taxonomy Report?',
        answer: 'We require building BER certificates, floor plans, building specifications, HVAC system details, energy bills (12 months), and any existing environmental assessments. We\'ll provide a comprehensive checklist at the consultation stage.',
      },
      {
        question: 'How is EU Taxonomy Report pricing determined?',
        answer: 'Pricing is based on building size, complexity, and the number of properties being assessed. We offer competitive rates for portfolio assessments. Contact us for a tailored quote based on your specific requirements.',
      },
      {
        question: 'What do I receive in the final EU Taxonomy Report?',
        answer: 'You receive a detailed report including: EU Taxonomy alignment status, technical screening criteria assessment, DNSH analysis, supporting evidence documentation, and recommendations for improving alignment where applicable. The report is formatted for investor and regulatory requirements.',
      },
    ],
  },
  {
    slug: 'ber-certificates',
    title: 'BER Certificates',
    shortTitle: 'BER Certs',
    description: 'Professional Building Energy Rating certificates for residential properties across Ireland, including Part L compliance.',
    metaDescription: 'Professional BER Certificates in Ireland. Domestic BER assessments and Part L compliance by qualified assessors with 20+ years experience. Fast, reliable service nationwide.',
    icon: 'ber',
    features: [
      'Domestic BER assessments',
      'Preliminary Part L Compliance',
      'Final BER and Part L Compliance',
      'Advisory reports included',
      'Fast turnaround times',
      'SEAI registered assessor',
    ],
    benefits: [
      'Legal compliance for property sales/rentals',
      'Identify energy efficiency improvements',
      'Reduce energy costs',
      'Increase property value',
      'Access grant eligibility information',
    ],
    process: [
      {
        step: 1,
        title: 'Book Assessment',
        description: 'Contact us to schedule your BER assessment at a convenient time.',
      },
      {
        step: 2,
        title: 'Site Survey',
        description: 'Our assessor visits to measure and evaluate your property.',
      },
      {
        step: 3,
        title: 'Data Analysis',
        description: 'We process the survey data through SEAI-approved software.',
      },
      {
        step: 4,
        title: 'Certificate Issued',
        description: 'Your official BER certificate is published to the national register.',
      },
    ],
    faqs: [
      {
        question: 'How long is a BER certificate valid?',
        answer: 'A BER certificate is valid for 10 years from the date of issue, unless significant renovations are made to the property that would affect its energy rating.',
      },
      {
        question: 'Do I need a BER to sell or rent my property?',
        answer: 'Yes, a valid BER certificate is legally required when selling, renting, or advertising a property in Ireland. The BER rating must be included in all property advertisements.',
      },
      {
        question: 'How long does a BER assessment take?',
        answer: 'A typical domestic BER assessment takes 1-2 hours on-site. Your certificate is usually issued within 2-3 working days after the assessment.',
      },
    ],
  },
  {
    slug: 'ventilation-validation',
    title: 'Ventilation Validation Certificates',
    shortTitle: 'Ventilation',
    description: 'Ventilation system commissioning and validation certificates ensuring TGD Part F compliance for Irish buildings.',
    metaDescription: 'Ventilation Validation Certificates in Ireland. TGD Part F compliance testing and commissioning for new builds and renovations. Qualified assessors, nationwide service.',
    icon: 'ventilation',
    features: [
      'TGD Part F compliance verification',
      'Mechanical ventilation commissioning',
      'Air flow rate measurements',
      'System balance verification',
      'Compliance documentation',
      'Remediation recommendations',
    ],
    benefits: [
      'Building control compliance',
      'Optimal indoor air quality',
      'Energy efficient ventilation',
      'Avoid costly remediation',
      'Peace of mind for occupants',
    ],
    process: [
      {
        step: 1,
        title: 'Schedule Testing',
        description: 'We arrange testing to coincide with your project timeline.',
      },
      {
        step: 2,
        title: 'System Testing',
        description: 'Comprehensive testing of all ventilation systems and components.',
      },
      {
        step: 3,
        title: 'Analysis & Reporting',
        description: 'Results are analysed against TGD Part F requirements.',
      },
      {
        step: 4,
        title: 'Certificate Issued',
        description: 'Validation certificate provided for building control submission.',
      },
    ],
    faqs: [
      {
        question: 'When is ventilation validation required?',
        answer: 'Ventilation validation is required for new dwellings and significant renovations to demonstrate compliance with Building Regulations TGD Part F. It\'s typically needed before building control sign-off.',
      },
      {
        question: 'What does ventilation validation testing involve?',
        answer: 'Testing involves measuring air flow rates at all ventilation terminals, checking system balance, verifying controls operation, and ensuring the installed system matches design specifications.',
      },
    ],
  },
  {
    slug: 'air-leakage-testing',
    title: 'Air Leakage Test Certificates',
    shortTitle: 'Air Testing',
    description: 'Professional airtightness and air permeability testing for new builds and renovations across Ireland.',
    metaDescription: 'Air Leakage Testing in Ireland. Blower door tests and airtightness certificates for building regulations compliance. Experienced assessors, fast results, nationwide.',
    icon: 'airleakage',
    features: [
      'Blower door pressure testing',
      'Air permeability measurement',
      'Building regulations compliance',
      'Leak detection and location',
      'Pre-completion and final testing',
      'Part L compliance verification',
    ],
    benefits: [
      'Building control compliance',
      'Improved energy efficiency',
      'Enhanced comfort levels',
      'Reduced heating costs',
      'Better BER ratings',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Test Preparation',
        description: 'We advise on building preparation requirements before testing.',
      },
      {
        step: 2,
        title: 'Equipment Setup',
        description: 'Blower door equipment is installed and calibrated.',
      },
      {
        step: 3,
        title: 'Pressure Testing',
        description: 'Building is pressurised/depressurised to measure air leakage.',
      },
      {
        step: 4,
        title: 'Results & Certificate',
        description: 'Air permeability results and compliance certificate provided.',
      },
    ],
    faqs: [
      {
        question: 'What is air leakage testing?',
        answer: 'Air leakage testing (blower door testing) measures how airtight a building is by pressurising or depressurising it and measuring the air flow required to maintain the pressure difference. Results are expressed as air permeability (m³/hr/m²).',
      },
      {
        question: 'What air permeability is required for compliance?',
        answer: 'Building Regulations TGD Part L requires maximum air permeability of 7 m³/hr/m² at 50 Pa for new dwellings. Better airtightness improves energy efficiency and BER ratings.',
      },
    ],
  },
  {
    slug: 'acoustic-testing',
    title: 'Acoustic Test Reports',
    shortTitle: 'Acoustics',
    description: 'Sound insulation testing and acoustic compliance certification for residential and commercial developments in Ireland.',
    metaDescription: 'Acoustic Testing in Ireland. Sound insulation testing for Building Regulations Part E compliance. Pre-completion testing, reports for building control. Nationwide service.',
    icon: 'acoustic',
    features: [
      'Airborne sound insulation testing',
      'Impact sound insulation testing',
      'Part E compliance verification',
      'Pre-completion testing',
      'Remediation advice',
      'Building control documentation',
    ],
    benefits: [
      'Building regulations compliance',
      'Quality assurance for buyers',
      'Identify issues before completion',
      'Avoid costly post-completion fixes',
      'Professional documentation',
    ],
    process: [
      {
        step: 1,
        title: 'Project Coordination',
        description: 'We schedule testing to fit your construction programme.',
      },
      {
        step: 2,
        title: 'Sound Testing',
        description: 'Airborne and impact sound insulation tests conducted.',
      },
      {
        step: 3,
        title: 'Results Analysis',
        description: 'Test results analysed against Part E requirements.',
      },
      {
        step: 4,
        title: 'Report Delivery',
        description: 'Comprehensive acoustic test report for building control.',
      },
    ],
    faqs: [
      {
        question: 'When is acoustic testing required?',
        answer: 'Acoustic testing is required for new-build attached dwellings (semi-detached, terraced, apartments) and conversions to demonstrate compliance with Building Regulations TGD Part E for sound insulation.',
      },
      {
        question: 'What sound tests are performed?',
        answer: 'We conduct airborne sound insulation tests (measuring transmission of sounds like speech and music) and impact sound insulation tests (measuring transmission of impact sounds like footsteps) between dwellings.',
      },
    ],
  },
  {
    slug: 'thermal-imaging',
    title: 'Thermal Imaging Surveys',
    shortTitle: 'Thermal Imaging',
    description: 'Professional thermal imaging surveys to identify heat loss, insulation defects, and building envelope issues across Ireland.',
    metaDescription: 'Thermal Imaging Surveys in Ireland. Identify heat loss, insulation defects, air leakage, and moisture issues. Professional infrared surveys by qualified assessors. Nationwide service.',
    icon: 'thermal',
    features: [
      'Building envelope thermal analysis',
      'Heat loss identification',
      'Insulation defect detection',
      'Air leakage visualisation',
      'Moisture and damp detection',
      'Detailed thermal imaging reports',
    ],
    benefits: [
      'Identify hidden heat loss areas',
      'Prioritise energy improvements',
      'Detect insulation gaps and defects',
      'Find air leakage points',
      'Non-invasive investigation',
    ],
    process: [
      {
        step: 1,
        title: 'Survey Planning',
        description: 'We discuss your concerns and schedule the survey for optimal conditions.',
      },
      {
        step: 2,
        title: 'Thermal Survey',
        description: 'Professional infrared camera survey of the building interior and exterior.',
      },
      {
        step: 3,
        title: 'Image Analysis',
        description: 'Thermal images are analysed to identify defects and heat loss areas.',
      },
      {
        step: 4,
        title: 'Report Delivery',
        description: 'Comprehensive report with thermal images and recommendations provided.',
      },
    ],
    faqs: [
      {
        question: 'What can thermal imaging detect?',
        answer: 'Thermal imaging can detect heat loss through walls, roofs, windows, and doors, missing or defective insulation, air leakage points, thermal bridging, moisture and damp issues, and underfloor heating problems.',
      },
      {
        question: 'When is the best time for a thermal imaging survey?',
        answer: 'Thermal imaging surveys are most effective during the heating season (October to April) when there is a significant temperature difference between inside and outside. Ideally, the survey should be conducted in the early morning or evening.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}

export function getPrimaryService(): Service {
  return services.find((s) => s.isPrimary) || services[0]
}
