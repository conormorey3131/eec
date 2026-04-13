export interface FAQ {
  question: string
  answer: string
}

// General FAQs for the company
export const generalFaqs: FAQ[] = [
  {
    question: 'What areas of Ireland do you cover?',
    answer: 'We provide services nationwide across Ireland. Based in Ennis, Co. Clare, we regularly work throughout Munster, Connacht, and travel to Dublin and other locations for larger projects.',
  },
  {
    question: 'How do I get a quote for your services?',
    answer: 'Contact us via phone at 087 2595798, email, or use our online contact form. Provide details about your property and requirements, and we\'ll respond with a tailored quote within 24 hours.',
  },
  {
    question: 'What qualifications do your assessors have?',
    answer: 'Our lead assessor, Shane Flanagan, has over 20 years of experience as a domestic BER assessor and is a qualified HPI (Home Performance Index) Assessor — Ireland\'s national certification system for new residential developments, managed by the Irish Green Building Council. We are members of the BER Assessors Association of Ireland.',
  },
  {
    question: 'How quickly can you complete an assessment?',
    answer: 'For standard BER assessments, we can typically schedule within 1-2 weeks and deliver certificates within 2-3 days of the site visit. EU Taxonomy Reports and specialist testing timelines depend on project complexity.',
  },
]

// EU Taxonomy specific FAQs (comprehensive for the landing page)
export const euTaxonomyFaqs: FAQ[] = [
  {
    question: 'What is an EU Taxonomy Report?',
    answer: 'An EU Taxonomy Report assesses whether a building meets the EU\'s environmental sustainability criteria. It evaluates climate mitigation, climate adaptation, and Do No Significant Harm (DNSH) requirements to determine if a property qualifies as environmentally sustainable under EU regulations.',
  },
  {
    question: 'Who needs an EU Taxonomy Report in Ireland?',
    answer: 'EU Taxonomy Reports are required by property investors, asset managers, real estate funds, and financial institutions subject to SFDR (Sustainable Finance Disclosure Regulation). They\'re essential for anyone acquiring, owning, or financing commercial real estate who needs to demonstrate sustainability alignment to investors or regulators.',
  },
  {
    question: 'How long does an EU Taxonomy assessment take?',
    answer: 'A typical EU Taxonomy assessment takes 2-4 weeks from initial consultation to final report delivery. The timeline depends on building complexity, the number of properties, documentation availability, and site access scheduling. Portfolio assessments may take longer.',
  },
  {
    question: 'What information do you need to complete an EU Taxonomy Report?',
    answer: 'We require: existing BER certificates, building floor plans and specifications, HVAC and building services details, 12 months of energy consumption data, water consumption records, and any existing environmental or sustainability assessments. We provide a comprehensive checklist at the consultation stage.',
  },
  {
    question: 'How is EU Taxonomy Report pricing determined?',
    answer: 'Pricing is based on building size (square metres), building type and complexity, the number of properties in a portfolio, documentation completeness, and location. We offer competitive rates for multi-property portfolios. Contact us for a tailored quote.',
  },
  {
    question: 'What do I receive in the final EU Taxonomy Report?',
    answer: 'You receive a comprehensive report including: overall EU Taxonomy alignment status, detailed technical screening criteria assessment against climate mitigation objectives, DNSH (Do No Significant Harm) analysis across all environmental objectives, supporting evidence and methodology documentation, recommendations for improving alignment where applicable, and an executive summary formatted for investor and regulatory reporting.',
  },
  {
    question: 'What is the difference between EU Taxonomy and BER?',
    answer: 'A BER (Building Energy Rating) measures a building\'s energy performance on an A-G scale. The EU Taxonomy is broader, assessing alignment with EU environmental sustainability criteria including climate mitigation, climate adaptation, water, pollution, biodiversity, and circular economy. BER data informs part of the EU Taxonomy assessment, but they serve different purposes.',
  },
  {
    question: 'Can a building with a low BER rating be EU Taxonomy aligned?',
    answer: 'Generally, buildings need to be in the top 15% of energy performance in their national stock to meet EU Taxonomy climate mitigation criteria. For Irish buildings, this typically requires a BER of B3 or better. However, buildings may qualify through renovation activities or other pathways.',
  },
]
