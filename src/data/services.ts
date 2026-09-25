export interface ServiceArchitecture {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  strategicRole: string;
  problem: string;
  framework: {
    step: string;
    action: string;
  }[];
  deliverables: string[];
  featuredProject: {
    name: string;
    metric: string;
    caseStudyId?: string;
  };
  iconName: string;
}

export const SERVICES: ServiceArchitecture[] = [
  {
    id: 's-01',
    slug: 'end-to-end-digital-business-growth',
    number: '01',
    title: 'End-to-End Digital Business Growth (From Scratch)',
    shortDescription: 'Unifying branding, tech stack, acquisition funnels, and retention systems into a single cohesive engine.',
    strategicRole: 'Unifying branding, tech stack, acquisition funnels, and retention systems into a single cohesive revenue machine built to scale.',
    problem: 'Founders face fragmented execution when multiple disconnected agencies and freelancers manage ads, design, and web separately—resulting in zero attribution, conflicting incentives, and burned budgets.',
    framework: [
      { step: 'Phase 1: Full-Funnel Architecture Audit', action: 'Diagnose current leaks across user touchpoints, messaging gaps, and attribution tracking.' },
      { step: 'Phase 2: Core Conversion Asset Engineering', action: 'Design and deploy high-converting landing pages, booking mechanisms, and lead capture workflows.' },
      { step: 'Phase 3: Omnichannel Paid Acquisition Setup', action: 'Structure high-intent Google and Meta campaigns designed for direct revenue attribution.' },
      { step: 'Phase 4: Retention & CRM Automation', action: 'Connect automated follow-up sequences, appointment reminders, and customer re-engagement.' }
    ],
    deliverables: [
      'Comprehensive Full-Funnel Growth Blueprint',
      'Conversion-Optimized Web & Mobile Landers',
      'Multi-Channel Paid Acquisition Infrastructure',
      'Automated CRM Lead Routing & Notification Triggers',
      'Live Executive Analytics Dashboard'
    ],
    featuredProject: {
      name: 'B2B Enterprise HR SaaS & Astrology Revamp',
      metric: '0 to 1,500+ Enterprise Leads & 4x Revenue Growth',
      caseStudyId: 'cs-05'
    },
    iconName: 'Layers'
  },
  {
    id: 's-02',
    slug: 'paid-ads-performance-marketing',
    number: '02',
    title: 'Paid Ads & Performance Marketing (Meta & Google)',
    shortDescription: 'High-intent media buying engineered for ROAS and CAC reduction, eliminating ad fatigue and untargeted spend.',
    strategicRole: 'High-intent media buying engineered for predictable ROAS and sustained CAC reduction across Meta and Google ecosystems.',
    problem: 'Ad budgets get burned on vanity traffic, generic broad targeting, and rapidly fatiguing ad creatives that fail to generate profitable bottom-of-funnel customer purchases.',
    framework: [
      { step: 'Phase 1: Intent-Driven Audience Segmentation', action: 'Build custom intent audiences, lookalike models, and high-converting keyword stacks.' },
      { step: 'Phase 2: High-CTR Direct-Response Creatives', action: 'Engineer dynamic video hooks, objection-busting statics, and benefit-led ad variations.' },
      { step: 'Phase 3: Algorithmic Budget Scaling', action: 'Deploy automated bid strategies and programmatic budget allocation to winning ad sets.' },
      { step: 'Phase 4: Server-Side Tracking & Attribution', action: 'Configure Meta CAPI and Google Enhanced Conversions to eliminate signal loss.' }
    ],
    deliverables: [
      'Meta (Facebook/Instagram) & Google Ads Management',
      'Bi-Weekly Creative Refresh & Hook Testing Matrix',
      'First-Party Conversion API (CAPI) & Pixel Setup',
      'Negative Keyword Sculpting & Exclusion Rules',
      'Weekly ROAS & CAC Performance Teardowns'
    ],
    featuredProject: {
      name: 'Manavisual & Astro Mukti',
      metric: '8–10x Sustained ROAS & 1,200+ Qualified Inquiries in Month 1',
      caseStudyId: 'cs-01'
    },
    iconName: 'TrendingUp'
  },
  {
    id: 's-03',
    slug: 'high-converting-web-app-development',
    number: '03',
    title: 'High-Converting Web & App Development',
    shortDescription: 'Lightning-fast UI/UX designed for conversion optimization, automated CRM hooks, and mobile responsiveness.',
    strategicRole: 'Lightning-fast, conversion-first digital experiences engineered to turn casual visitors into committed buyers.',
    problem: 'Most websites are digital brochures built by designers who don’t understand direct-response economics, resulting in slow load times, high bounce rates, and invisible call-to-actions.',
    framework: [
      { step: 'Phase 1: Wireframing & Conversion Scaffolding', action: 'Map information architecture prioritizing customer objections, proof points, and friction-free actions.' },
      { step: 'Phase 2: Performance-First Engineering', action: 'Develop sub-second loading web applications with perfect Core Web Vitals score.' },
      { step: 'Phase 3: Deep CRM & Payment Gateway Hooks', action: 'Integrate Stripe, Razorpay, HubSpot, and WhatsApp webhooks for instant lead ingestion.' },
      { step: 'Phase 4: Behavioral Heatmapping & A/B Testing', action: 'Deploy live session recordings to pinpoint conversion drop-offs and optimize CTA placement.' }
    ],
    deliverables: [
      'Custom Responsive Web Platform / Landing Pages',
      'Sub-Second Page Load Optimization (<1.2s)',
      'Direct CRM & WhatsApp Integration',
      'A/B Split-Testing Framework Setup',
      'Full Codebase & Asset Ownership'
    ],
    featuredProject: {
      name: 'Cool Mitra Funnel Overhaul & Braj Urja Web Portal',
      metric: '30% Record Live Conversion & Enterprise Platform Speed',
      caseStudyId: 'cs-03'
    },
    iconName: 'Code'
  },
  {
    id: 's-04',
    slug: 'social-media-management-brand-authority',
    number: '04',
    title: 'Social Media Management & Brand Authority',
    shortDescription: 'Strategic visual communication, thought-leadership carousels, and inbound DM workflows.',
    strategicRole: 'Transforming passive social accounts into high-authority client acquisition engines with institutional credibility.',
    problem: 'Posting generic quotes and stock graphics produces zero pipeline. Brands waste months creating low-impact content without clear executive positioning or lead capture.',
    framework: [
      { step: 'Phase 1: Brand Positioning & Narrative Design', action: 'Define the founder or enterprise perspective, proprietary frameworks, and core industry stance.' },
      { step: 'Phase 2: High-Value Educational Carousels & Reels', action: 'Package complex domain expertise into scannable, save-worthy social assets.' },
      { step: 'Phase 3: Inbound DM & Comment Automation', action: 'Capture engaged followers into private conversations with automated resource delivery.' },
      { step: 'Phase 4: Platform-Specific Distribution Cadence', action: 'Execute targeted distribution rhythms across LinkedIn, Instagram, and YouTube.' }
    ],
    deliverables: [
      'Executive Thought-Leadership Content Calendars',
      'High-Production Slide Carousels & Short-Form Video',
      'Community Management & Inbound Lead Routing',
      'Profile Optimization for High-Ticket Trust',
      'Monthly Brand Sentiment & Reach Analytics'
    ],
    featuredProject: {
      name: 'Florence Fennel & PRM Lifecare',
      metric: '250% Organic Growth & Tier-1 Industry Recognition',
      caseStudyId: 'cs-02'
    },
    iconName: 'Share2'
  },
  {
    id: 's-05',
    slug: 'seo-local-domination',
    number: '05',
    title: 'Search Engine Optimization (SEO) & Local Domination',
    shortDescription: 'Technical Core Web Vitals, programmatic content architectures, and Google Maps Local Pack dominance.',
    strategicRole: 'Capturing intent-rich searchers at the exact moment they look for your products and services.',
    problem: 'Relying solely on paid ads makes customer acquisition increasingly expensive over time, while competitors slowly corner non-brand organic search real estate.',
    framework: [
      { step: 'Phase 1: Technical & Schema Infrastructure', action: 'Audit crawlability, indexation, Core Web Vitals, and implement rich structured data schemas.' },
      { step: 'Phase 2: High-Intent Commercial Keyword Clustering', action: 'Map keyword topics with validated transactional intent to dedicated service landers.' },
      { step: 'Phase 3: Google Business Profile & Local 3-Pack', action: 'Optimize local citation consistency and review velocity to capture top map positions.' },
      { step: 'Phase 4: Authoritative Backlink Acquisition', action: 'Build high-domain-authority contextual citations across relevant industry publications.' }
    ],
    deliverables: [
      'Comprehensive Technical SEO Architecture Audit',
      'Commercial Keyword Strategy & Content Briefs',
      'Google Business Profile (GBP) Local Pack Dominance',
      'Schema.org Rich Snippets Implementation',
      'Monthly Search Visibility & Keyword Tracking'
    ],
    featuredProject: {
      name: 'Eye Mandi & Local Professional Consultations',
      metric: 'Top 3 Google Maps Placement & Predictable Organic Inbound',
      caseStudyId: 'cs-04'
    },
    iconName: 'Search'
  },
  {
    id: 's-06',
    slug: 'pr-influencer-marketing',
    number: '06',
    title: 'PR & Influencer Marketing',
    shortDescription: 'High-authority digital publication coverage, Tier-1 media validation, and vetted creator partnerships.',
    strategicRole: 'Accelerating market authority and trust through targeted digital media validation and aligned creator partnerships.',
    problem: 'New brands struggle to close high-ticket clients because prospective buyers find no external third-party credibility or institutional press validation online.',
    framework: [
      { step: 'Phase 1: Angle Development & Newsworthy Pitching', action: 'Formulate compelling editorial stories around founder insights, company growth, or market studies.' },
      { step: 'Phase 2: Tier-1 & Tier-2 Digital Publication Placement', action: 'Secure high-impact press features across recognized business and industry publications.' },
      { step: 'Phase 3: Vetted Influencer & Creator Partnerships', action: 'Identify niche creators with verified engagement rather than inflated fake follower numbers.' },
      { step: 'Phase 4: Trust Asset Integration', action: 'Display "As Seen In" press trust badges across landing pages, pitch decks, and ad campaigns.' }
    ],
    deliverables: [
      'Guaranteed Digital PR & Publication Coverage',
      'Vetted Influencer Outreach & Negotiation',
      'Press Release Crafting & Distribution',
      'Media Asset Kit & Trust Badges for Funnels',
      'Brand Verification & Authority Defense'
    ],
    featuredProject: {
      name: 'The Founder Grid & Genix Chief Campaigns',
      metric: 'National Media Presence & High-Ticket Trust Uplift',
      caseStudyId: 'cs-05'
    },
    iconName: 'Award'
  },
  {
    id: 's-07',
    slug: 'email-marketing-retention-systems',
    number: '07',
    title: 'Email Marketing & Retention Systems',
    shortDescription: 'Behavioral nurture flows, pre-qualification workflows, and automated client lifetime value (LTV) maximization.',
    strategicRole: 'Monetizing existing audience attention and turning single buyers into recurring lifetime accounts.',
    problem: 'Over 80% of generated leads never convert immediately. Without automated, high-value nurture sequences, businesses leak up to 60% of their total addressable pipeline.',
    framework: [
      { step: 'Phase 1: Lifecycle Audit & Segmentation', action: 'Segment your contact base into cold subscribers, active evaluators, and past buyers.' },
      { step: 'Phase 2: Automated Welcome & Objection-Busting Sequences', action: 'Write behavioral email flows addressing common hesitations before sales calls.' },
      { step: 'Phase 3: High-Converting Weekly Broadcasts', action: 'Deploy thought-provoking case studies and tactical breakdowns that keep your brand top-of-mind.' },
      { step: 'Phase 4: Deliverability & Domain Health Engineering', action: 'Configure SPF, DKIM, DMARC, and custom tracking domains to stay out of the spam tab.' }
    ],
    deliverables: [
      'Custom Behavioral Lifecycle Automation Flows',
      'High-Converting Copywriting & Clean HTML Email Templates',
      'Email Deliverability Hardening (SPF, DKIM, DMARC)',
      'Lead Scoring & Sales Notification Triggers',
      'Monthly Revenue Attribution & Open/Click Optimization'
    ],
    featuredProject: {
      name: 'Florence Fennel Enterprise Nurture & SaaS Lead Workflows',
      metric: '35% Shortened Enterprise Sales Cycle & 40%+ Open Rates',
      caseStudyId: 'cs-02'
    },
    iconName: 'Mail'
  },
  {
    id: 's-08',
    slug: 'graphic-design-video-editing-ai-creatives',
    number: '08',
    title: 'Graphic Design, Video Editing & AI-Powered Creatives',
    shortDescription: 'High-converting dynamic video hooks, performance ad creatives, AI-assisted video assets, and presentation pitch decks.',
    strategicRole: 'Producing scroll-stopping direct response creative assets that outperform industry benchmark CTRs.',
    problem: 'Generic stock imagery and bland graphic templates fail to stop users scrolling on TikTok, Meta, or LinkedIn, inflating customer acquisition costs.',
    framework: [
      { step: 'Phase 1: Visual Competitor Teardown & Hook Ideation', action: 'Analyze top 50 performing industry ad variations to map visual patterns and whitespace.' },
      { step: 'Phase 2: Fast-Paced Short-Form Video Editing', action: 'Edit raw footage with kinetic subtitles, sound effects, motion graphics, and high-impact hooks.' },
      { step: 'Phase 3: AI-Assisted Creative Asset Augmentation', action: 'Deploy generative asset tools for rapid background staging, split-testing, and localization.' },
      { step: 'Phase 4: Institutional Presentation & Deck Design', action: 'Craft investor pitch decks and enterprise sales collateral that win high-ticket contracts.' }
    ],
    deliverables: [
      'High-CTR Meta & TikTok Video Ad Assets',
      'Dynamic Static & Carousel Ad Variations',
      'Executive Pitch Decks & Sales Presentation Collateral',
      'Brand Identity Systems & Visual Style Guides',
      'Rapid Turnaround Ad Refresh Pipeline'
    ],
    featuredProject: {
      name: 'Manavisual Performance Creatives & Corporate Pitch Decks',
      metric: 'Over 42% Hook Retention Rate & Multiplied Ad Lifespan',
      caseStudyId: 'cs-01'
    },
    iconName: 'Palette'
  },
  {
    id: 's-09',
    slug: 'content-growth-marketing',
    number: '09',
    title: 'Content & Growth Marketing',
    shortDescription: 'Omnichannel inbound systems designed to attract, educate, and convert enterprise accounts.',
    strategicRole: 'Building systematic content machines that educate target buyers and shorten sales conversations.',
    problem: 'Producing content for the sake of publishing without commercial alignment results in tired teams and zero pipeline generation.',
    framework: [
      { step: 'Phase 1: Content-Market Fit Mapping', action: 'Identify the exact questions and buying criteria your high-ticket prospects evaluate before purchasing.' },
      { step: 'Phase 2: Flagship Asset Creation', action: 'Write comprehensive guides, teardowns, and comparison matrices that solve acute industry problems.' },
      { step: 'Phase 3: Repurposing & Multi-Channel Distribution', action: 'Transform one flagship asset into 15+ micro-assets across video, newsletter, and social.' },
      { step: 'Phase 4: Lead Magnet Gating & Ingestion', action: 'Capture high-intent email subscribers through high-value calculators and playbooks.' }
    ],
    deliverables: [
      'Quarterly Strategic Growth Marketing Roadmaps',
      'Flagship Inbound Guides & Playbook Assets',
      'Multi-Format Content Repurposing Workflow',
      'Commercial Landing Page Copywriting',
      'Inbound Revenue Attribution Tracking'
    ],
    featuredProject: {
      name: 'Cool Mitra Course Funnels & Florence Fennel',
      metric: 'Consistent Inbound Corporate Inquiries with Zero Cold Calling',
      caseStudyId: 'cs-03'
    },
    iconName: 'Compass'
  }
];
