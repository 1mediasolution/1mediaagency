export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  resultBadge: string;
  initials: string;
  featuredCaseStudySlug?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    quote: "I was generating students and business solely through YouTube videos, but our leads remained limited. I never trusted paid ads before meeting Nirbhay; his systematic, focused lead generation framework and result-driven execution completely changed my mind. Working with 1 Media Solution gave us the exact scale we were missing without any false promises.",
    author: "Manav Kwatra",
    role: "Founder",
    company: "Manavisual",
    resultBadge: "4x Revenue & 8–10x ROAS",
    initials: "MK",
    featuredCaseStudySlug: "manavisual-creator-academy-10x-roas"
  },
  {
    id: 't-02',
    quote: "The team at 1 Media Solution is exceptional across content creation, lead generation, and overall digital presence management. They helped establish Florence Fennel on a global scale and significantly expanded our business presence across the web. I am completely satisfied with their strategic execution in helping us dominate the Corporate Training domain.",
    author: "Rajiv Goel",
    role: "Managing Director",
    company: "Florence Fennel",
    resultBadge: "250% Organic Growth & 500+ Enterprise Leads",
    initials: "RG",
    featuredCaseStudySlug: "florence-fennel-enterprise-lead-flow"
  },
  {
    id: 't-03',
    quote: "After facing frustrating experiences with previous agencies, I connected with 1 Media Solution through a mutual creator reference. They delivered an incredible turnaround with the right strategy, continuous consultation, and an extraordinary 30% conversion rate on our webinars. Nirbhay was consistently available whenever strategic consultation was needed. Truly outstanding service.",
    author: "Shakeel (Cool Mitra)",
    role: "Creator & Educator (3.5M+ Subscribers)",
    company: "Cool Mitra",
    resultBadge: "30% Live Webinar Conversion Record",
    initials: "SM",
    featuredCaseStudySlug: "cool-mitra-webinar-conversion-breakthrough"
  },
  {
    id: 't-04',
    quote: "We were trapped in traditional business models and struggling against aggressive industry shifts, particularly from platforms like AstroTalk. 1 Media Solution completely repositioned our business, professionalized our digital presence, and drove 4x revenue growth in our first three months through sharp digital execution.",
    author: "Principal Astrologer & Managing Director",
    role: "Founding Director",
    company: "Astro Consultation Services",
    resultBadge: "4x Revenue in 3 Months & 1,200+ Leads",
    initials: "AS",
    featuredCaseStudySlug: "astrological-services-market-repositioning"
  }
];
