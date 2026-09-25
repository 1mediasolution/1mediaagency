export interface Playbook {
  id: string;
  slug: string;
  title: string;
  category: 'Ed-Tech & Creators' | 'Enterprise & B2B' | 'Professional Services' | 'Case Teardowns';
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  content: {
    sectionTitle: string;
    body: string;
  }[];
}

export const PLAYBOOKS: Playbook[] = [
  {
    id: 'pb-01',
    slug: 'anatomy-of-30-percent-conversion-webinar-funnel',
    title: 'The Anatomy of a 30% Conversion Live Webinar Funnel',
    category: 'Ed-Tech & Creators',
    readTime: '6 min read',
    summary: 'Why traditional webinar setups fail with <5% conversion, and the exact intent-filtering architecture we used to achieve a 30% attendee-to-buyer rate.',
    keyTakeaways: [
      'Stop running ads directly to cheap registration pages; introduce intent qualification friction',
      'The 4-stage psychological webinar structure: The Paradigm Shift → The Mechanism → The Proof Stack → The Reversible Risk Offer',
      'Deploying WhatsApp and SMS cadence reduces webinar no-show drop-offs by up to 64%',
      'Founder-in-the-room real-time cohort objection handling drives late-session closes'
    ],
    content: [
      {
        sectionTitle: 'The Fatal Flaw of Broad Retargeting',
        body: 'Most creators with large followings assume that more registrants equals more revenue. In practice, driving zero-friction registrations produces low-intent attendees who clog Zoom rooms without intent to purchase. Our methodology isolates buyers with purchasing capacity before they ever enter the webinar room.'
      },
      {
        sectionTitle: 'Friction as a Prequalification Weapon',
        body: 'Instead of single-click forms, we require prospects to specify their current professional challenges and goals. This simple friction increases show-up intent and filters out casual scrollers.'
      },
      {
        sectionTitle: 'The 30% Pitch Blueprint',
        body: 'Never transition abruptly into a hard sell at the 50-minute mark. The solution is introduced throughout the first 40 minutes as the only logical outcome of the diagnosis, making the checkout step an inevitable next stage.'
      }
    ]
  },
  {
    id: 'pb-02',
    slug: 'why-b2b-brands-waste-70-percent-linkedin-outreach',
    title: 'Why Most B2B Brands Waste 70% of Their LinkedIn Outreach (And How to Fix It)',
    category: 'Enterprise & B2B',
    readTime: '8 min read',
    summary: 'A forensic audit of failed corporate outreach and the 3-layer executive positioning system that generated 500+ enterprise leads for Florence Fennel.',
    keyTakeaways: [
      'InMail templates with generic calendar links yield <1.5% reply rates and damage founder reputation',
      'The "Asset First, Pitch Never" outreach model that establishes instant institutional trust',
      'How to structure C-level profile headline and featured sections into authoritative sales landing pages',
      'Transforming corporate case studies into native LinkedIn carousels that generate unsolicited inbound DMs'
    ],
    content: [
      {
        sectionTitle: 'The Death of the Automated Spray-and-Pray',
        body: 'Enterprise decision-makers receive dozens of identical pitches every week. When your first message is an ask for 15 minutes of their calendar, you signal low leverage. High-ticket buyers require upfront value and proof of peer success.'
      },
      {
        sectionTitle: 'The Executive Asset Flywheel',
        body: 'Before reaching out to any corporate accounts, leadership profiles must be engineered as authoritative landing assets. When prospects click through your name, they should encounter rigorous case studies, client outcomes, and clear perspectives.'
      },
      {
        sectionTitle: 'The Multi-Touch Inbound Protocol',
        body: 'By combining targeted thought leadership content with gentle, context-aware touchpoints, we transformed cold outreach into warm inbound inquiries across global enterprise accounts.'
      }
    ]
  },
  {
    id: 'pb-03',
    slug: 'scale-educational-brand-to-10x-roas-cold-traffic',
    title: 'How We Scaled an Educational Brand to 10x ROAS with Cold Traffic',
    category: 'Case Teardowns',
    readTime: '7 min read',
    summary: 'The step-by-step breakdown of turning Manavisual from an organic YouTube plateau into a predictable, high-ROAS paid acquisition machine.',
    keyTakeaways: [
      'How to extract the top 3% organic YouTube video moments and turn them into direct-response Meta video ads',
      'The Landing Page Framework that converted cold creative pros at 4x industry average',
      'The "Creative Decay Cycle": Why refreshing hooks bi-weekly prevents ad fatigue and preserves 8-10x ROAS',
      'Unit economics breakdown: CPA, conversion rates, and scaling without cash burn'
    ],
    content: [
      {
        sectionTitle: 'Breaking the Organic Dependency Trap',
        body: 'Creators often believe that paid advertising dilutes brand perception. In reality, paid acquisition is simply systematic amplification of proven educational resonance. The secret is formatting ads as valuable micro-lessons rather than commercial interruptions.'
      },
      {
        sectionTitle: 'The High-Intent Video Lander',
        body: 'Standard course sales pages contain pages of bloated filler. We stripped away fluff and engineered clean video landers centered around real student transformation, curriculum teardowns, and clear return-on-investment logic.'
      },
      {
        sectionTitle: 'Maintaining Sustained 8–10x ROAS',
        body: 'By rotating creative hooks systematically and using automated budget scaling, we expanded ad spend while keeping unit costs rock-solid over 6 continuous months.'
      }
    ]
  }
];
