export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: 'Ed-Tech & Creators' | 'Enterprise & B2B' | 'Professional Services';
  timeframe: string;
  metrics: {
    primary: string;
    secondary: string;
    highlights: string[];
  };
  summary: string;
  problem: {
    title: string;
    overview: string;
    painPoints: string[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  results: {
    title: string;
    outcomes: string[];
    quote?: {
      text: string;
      author: string;
      title: string;
    };
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-01',
    slug: 'manavisual-creator-academy-10x-roas',
    client: 'Manavisual',
    industry: 'Ed-Tech & Digital Education',
    category: 'Ed-Tech & Creators',
    title: 'Scaling a Creator Academy from Organic Plateau to 10x ROAS',
    timeframe: '6 Months',
    metrics: {
      primary: '4x Total Revenue Growth',
      secondary: '8–10x Sustained ROAS',
      highlights: [
        '4x Total Revenue Scaled in 6 Months',
        '8–10x Sustained Return on Ad Spend',
        'Zero Ad Fatigue with Bi-Weekly Refreshes',
        'Independent of YouTube Algorithm Changes'
      ]
    },
    summary: 'How we audited course offerings, engineered high-converting video landers, and deployed cold direct-response Meta ads to multiply course revenue without burning brand goodwill.',
    problem: {
      title: 'The Organic Ceiling & Paid Media Skepticism',
      overview: 'Manavisual had built a loyal YouTube following and generated steady student enrollments organically. However, organic reach reached a natural plateau. Scaling required paid advertising, but past exposure to misleading agency promises created deep skepticism. Without an existing paid advertising structure, the brand risked burning capital on low-intent clicks.',
      painPoints: [
        'Organic YouTube reach had plateaued despite consistent publishing',
        'Burned capital and past disillusionment with broad-targeting agencies',
        'Lack of conversion-optimized video landing pages and tracking taxonomy',
        'Course enrollment velocity tied entirely to unpredictable platform algorithms'
      ]
    },
    process: {
      title: 'The 4-Step Acquisition & ROAS Architecture',
      steps: [
        {
          number: '01',
          title: 'Offer Packaging & Funnel Hygiene',
          description: 'Audited the course pricing structure and established high-converting video landers that clearly separated casual learners from career-focused creative professionals with validated willingness to pay.'
        },
        {
          number: '02',
          title: 'Non-Disruptive Creative Deployment',
          description: 'Extracted high-performing educational hooks from existing long-form content, formatting them into high-CTR Meta video ad variations that educated cold viewers first.'
        },
        {
          number: '03',
          title: 'Algorithmic Cold Audience Acquisition',
          description: 'Implemented clean lookalike models and interest-stacking ad sets without polluting the core brand audience, focusing strictly on bottom-of-funnel direct-response purchases.'
        },
        {
          number: '04',
          title: 'Continuous Attribution & Scaling',
          description: 'Kept ad fatigue near zero through bi-weekly creative refreshes, dynamic testing frameworks, and automated budget shifts to top-performing ad sets.'
        }
      ]
    },
    results: {
      title: 'Measurable Financial Impact',
      outcomes: [
        'Scaled course enrollments to 4x total revenue within just 6 months',
        'Maintained a consistent 8–10x ROAS across varying seasonality cycles',
        'Established a predictable, profitable customer acquisition machine completely detached from organic algorithms',
        'Built evergreen video creative assets with an average hook retention rate exceeding 42%'
      ],
      quote: {
        text: 'I was generating students and business solely through YouTube videos, but our leads remained limited. I never trusted paid ads before meeting Nirbhay; his systematic, focused lead generation framework and result-driven execution completely changed my mind. Working with 1 Media Solution gave us the exact scale we were missing without any false promises.',
        author: 'Manav Kwatra',
        title: 'Founder, Manavisual'
      }
    }
  },
  {
    id: 'cs-02',
    slug: 'florence-fennel-enterprise-lead-flow',
    title: 'Transforming Corporate Training Lead Flow & Global Authority',
    client: 'Florence Fennel Informatica',
    industry: 'Corporate Training & Enterprise IT Consulting',
    category: 'Enterprise & B2B',
    timeframe: '12 Months',
    metrics: {
      primary: '250% Organic LinkedIn Growth',
      secondary: '500+ Enterprise Leads',
      highlights: [
        '250% Growth in Executive Reach & Inquiries',
        '500+ Enterprise-Grade Qualified Leads in 1 Year',
        'Zero Ad-Spend Customer Pipeline',
        'Evergreen Global Authority Foundation'
      ]
    },
    summary: 'Transforming leadership LinkedIn presence and deploying high-value B2B content engines to generate 500+ corporate decision-maker leads with zero ad spend.',
    problem: {
      title: 'Inconsistent Corporate Pipeline & Lack of Executive Authority',
      overview: 'Florence Fennel faced inconsistent lead pipelines and lacked an automated, systemized organic acquisition process. Operating in the high-ticket corporate training domain, generic outreach damaged executive credibility. They required an authoritative digital presence and a system to reach enterprise decision-makers without relying exclusively on paid ad budgets.',
      painPoints: [
        'Generic, uninspired outbound messaging burning credibility with C-suite executives',
        'Absence of a structured inbound content distribution system',
        'Unpredictable enterprise training cohorts dependent on legacy referrals',
        'Sub-optimal website conversion paths and outdated corporate pitch collateral'
      ]
    },
    process: {
      title: 'The B2B Thought Leadership & Inbound Protocol',
      steps: [
        {
          number: '01',
          title: 'Executive Profile Restructuring',
          description: 'Overhauled leadership LinkedIn profiles to position company executives as top-tier corporate training authorities with proven institutional credentials.'
        },
        {
          number: '02',
          title: 'High-Value B2B Content Engine',
          description: 'Designed and deployed industry-specific whitepapers, thought leadership posts, and slide carousels highlighting case studies and enterprise transformation.'
        },
        {
          number: '03',
          title: 'Multi-Touch Inbound & Email Nurturing',
          description: 'Built an organic lead engine using personalized outbound messaging sequences coupled with systematic email follow-ups and warm qualification calls.'
        },
        {
          number: '04',
          title: 'Collateral & Web Transformation',
          description: 'Consulted on website conversion optimization and built an executive business pitch deck tailored for institutional enterprise clients.'
        }
      ]
    },
    results: {
      title: 'Enterprise Pipeline Milestones',
      outcomes: [
        'Grew total LinkedIn reach and executive engagement by 250% year-over-year',
        'Produced 500+ pre-qualified corporate leads within a single year through zero ad-spend channels',
        'Established an evergreen global digital asset foundation that continues to drive corporate inquiries autonomously',
        'Decreased enterprise sales cycles by 35% through pre-nurtured collateral touchpoints'
      ],
      quote: {
        text: 'The team at 1 Media Solution is exceptional across content creation, lead generation, and overall digital presence management. They helped establish Florence Fennel on a global scale and significantly expanded our business presence across the web. I am completely satisfied with their strategic execution in helping us dominate the Corporate Training domain.',
        author: 'Rajiv Goel',
        title: 'Managing Director, Florence Fennel'
      }
    }
  },
  {
    id: 'cs-03',
    slug: 'cool-mitra-webinar-conversion-breakthrough',
    title: 'Engineering a 30% Live Webinar Conversion Rate for a 3.5M+ Creator',
    client: 'Cool Mitra (3.5M+ Community)',
    industry: 'Ed-Tech & Personal Development',
    category: 'Ed-Tech & Creators',
    timeframe: 'Cohort Sprint',
    metrics: {
      primary: '30% Verified Webinar Conversion',
      secondary: 'Zero Ad Spend Wastage',
      highlights: [
        '30% Live Webinar Conversion Rate (All-Time Record)',
        'Zero Ad Spend Wastage on Low-Intent Clicks',
        'Profitable Cohort Unit Economics Unlocked',
        'Round-the-Clock Founder Advisory Access'
      ]
    },
    summary: 'Re-engineering cold traffic pre-qualification and live masterclass offer sequences for a 3.5M+ creator to achieve a record-breaking 30% attendee-to-buyer conversion.',
    problem: {
      title: 'High Audience Volume, Low Purchasing Intent',
      overview: 'Despite commanding an audience of over 3.5 Million subscribers, past agencies burned substantial ad budgets driving low-intent subscribers who were unable or unwilling to invest in paid education. Funnel drop-offs were severe, and webinar conversion rates were consistently missing growth targets.',
      painPoints: [
        'Massive subscriber base producing low webinar attendance and high no-show rates',
        'Past agency campaigns targeted broad follower lists rather than buyers with capital',
        'Webinar pitch suffered from drop-offs right at the pricing revelation slide',
        'Fragmented communication between marketing agency and creator team'
      ]
    },
    process: {
      title: 'The Intent-Isolated Masterclass Re-Architecture',
      steps: [
        {
          number: '01',
          title: 'Intent-Based Audience Isolation',
          description: 'Bypassed broad subscriber retargeting. Designed fresh cold-audience acquisition funnels targeting career-oriented professionals with validated purchasing power.'
        },
        {
          number: '02',
          title: 'Frictionless Landing Page Overhaul',
          description: 'Rebuilt registration pages focusing on strict pre-qualification, highlighting curriculum depth rather than quick-fix promises.'
        },
        {
          number: '03',
          title: 'Conversion-Engineered Webinar Flow',
          description: 'Re-architected the entire live session sequence: structuring hook introductions, objection-handling intervals, and a revised closing offer pitch.'
        },
        {
          number: '04',
          title: 'Dynamic Direct Communication',
          description: 'Maintained round-the-clock advisory access between marketing leadership and the creator to pivot messaging rapidly based on real-time cohort feedback.'
        }
      ]
    },
    results: {
      title: 'Unprecedented Cohort Performance',
      outcomes: [
        'Achieved an unprecedented 30% webinar conversion rate, setting an all-time record for the creator’s business',
        'Completely eliminated wasted marketing budget, unlocking profitable unit economics for every subsequent cohort launch',
        'Increased live show-up rates by 64% via multi-channel SMS and WhatsApp calendar automation',
        'Solidified a repeatable launch blueprint reusable for every quarter'
      ],
      quote: {
        text: 'After facing frustrating experiences with previous agencies, I connected with 1 Media Solution through a mutual creator reference. They delivered an incredible turnaround with the right strategy, continuous consultation, and an extraordinary 30% conversion rate on our webinars. Nirbhay was consistently available whenever strategic consultation was needed. Truly outstanding service.',
        author: 'Shakeel (Cool Mitra)',
        title: 'Creator & Educator (3.5M+ Subscribers)'
      }
    }
  },
  {
    id: 'cs-04',
    slug: 'astrological-services-market-repositioning',
    title: 'Market Repositioning & 4x Revenue Scale for Astrology Services',
    client: 'Astrological Consultation Brand',
    industry: 'Holistic Services & Professional Astrology',
    category: 'Professional Services',
    timeframe: '90 Days',
    metrics: {
      primary: '4x Revenue in First 3 Months',
      secondary: '1,200+ Leads in Month 1',
      highlights: [
        '4x Total Revenue Scaled within 90 Days',
        '1,200+ High-Intent Leads Generated in Month 1',
        '>20% Retained Recurring Consultation Rate',
        'Stabilized CAC with High-Ticket Packaging'
      ]
    },
    summary: 'Modernizing an established traditional consultancy to beat venture-backed aggregator apps, driving 1,200+ leads in 30 days and 4x business revenue.',
    problem: {
      title: 'Disruption by Aggregator Apps & Outdated Workflow',
      overview: 'The emergence of venture-backed aggregator apps (such as AstroTalk) disrupted traditional astrology practices. The client suffered major revenue drops due to outdated consultation workflows, generic branding, and low-trust marketing strategies that failed to compete with modern digital-first platforms.',
      painPoints: [
        'Severe price undercutting by heavily-funded mass aggregator apps',
        'Outdated manual appointment booking and payment workflows',
        'Zero digital authority or modern social media positioning',
        'Reliance on one-off transactional consultations without retention mechanisms'
      ]
    },
    process: {
      title: 'The Premium Authority & Modernization Protocol',
      steps: [
        {
          number: '01',
          title: 'Complete Digital Brand Modernization',
          description: 'Upgraded UI/UX across web and mobile touchpoints, shifting the brand image from traditional obscurity to modern, premium guidance.'
        },
        {
          number: '02',
          title: 'Credibility & Digital PR Campaign',
          description: 'Deployed strategic digital PR features and high-value social media content to re-establish the founder\'s authentic authority.'
        },
        {
          number: '03',
          title: 'Multi-Platform Targeted Lead Generation',
          description: 'Launched laser-targeted Meta and Google Search campaigns targeting high-intent seekers of premium, personalized consultations.'
        },
        {
          number: '04',
          title: 'Client Retention Ecosystem',
          description: 'Integrated CRM automations and local SEO dominance (Google Maps optimization) to turn single-session consults into long-term subscribers.'
        }
      ]
    },
    results: {
      title: 'Turnaround Results & Financial Stability',
      outcomes: [
        'Generated 1,200+ high-intent leads and 150 immediate paying clients in Month 1 on an initial ₹1,00,000 spend',
        'Stabilized future ad spend at ₹30k–₹40k per month while maintaining over 20% retained recurring clients',
        'Achieved 4x overall business revenue in the first 3 months through diversified multi-channel digital deployment',
        'Positioned founder as a premium, trusted advisor commanding 3x higher consultation fees'
      ],
      quote: {
        text: 'We were trapped in traditional business models and struggling against aggressive industry shifts, particularly from platforms like AstroTalk. 1 Media Solution completely repositioned our business, professionalized our digital presence, and drove 4x revenue growth in our first three months through sharp digital execution.',
        author: 'Principal Astrologer & Managing Director',
        title: 'Astrological Consultation Brand'
      }
    }
  },
  {
    id: 'cs-05',
    slug: 'enterprise-b2b-saas-gtm',
    title: 'Enterprise Go-To-Market for B2B HR & Payroll SaaS',
    client: 'B2B Enterprise SaaS',
    industry: 'HR-Tech & Enterprise Software',
    category: 'Enterprise & B2B',
    timeframe: '75 Days',
    metrics: {
      primary: '1,500+ Qualified Leads in 75 Days',
      secondary: '15 Days Ahead of Target',
      highlights: [
        '1,500+ Verified C-Suite & HR Director Leads',
        'Delivered 15 Days Ahead of 90-Day Target',
        '60–80% Inbound Demo Pre-Qualification Rate',
        '5–10% Demo-to-Contract Closure Rate'
      ]
    },
    summary: 'Engineering a zero-to-one Go-To-Market acquisition engine capturing enterprise payroll & HR software evaluations ahead of schedule.',
    problem: {
      title: 'Crowded Market & Zero Brand Footprint',
      overview: 'Entering a crowded enterprise software space from complete scratch with zero existing brand footprint. The client required high-intent C-suite and HR-director leads under a strict 90-day proof-of-concept window without exhausting their runway.',
      painPoints: [
        'Zero domain authority or inbound organic organic search presence',
        'Crowded landscape dominated by legacy enterprise HR/payroll incumbents',
        'Need for strictly qualified enterprise leads (50+ employee organizations)',
        'Tight 90-day board proof-of-concept deadline'
      ]
    },
    process: {
      title: 'The Multi-Channel B2B Inbound Velocity Engine',
      steps: [
        {
          number: '01',
          title: 'Omnichannel Digital Footprint Build',
          description: 'Deployed an enterprise-grade web presence, clean conversion tracking, technical SEO schemas, and LinkedIn executive infrastructure.'
        },
        {
          number: '02',
          title: 'Authority PR & Cold Inbound Sequencing',
          description: 'Published targeted digital PR pieces highlighting payroll compliance and deployed personalized B2B outreach sequences to verified HR decision-makers.'
        },
        {
          number: '03',
          title: 'High-Intent Google Search & In-Feed B2B Ads',
          description: 'Captured active software evaluation traffic on Google Search while deploying retargeting sequences across professional channels.'
        }
      ]
    },
    results: {
      title: 'Enterprise Go-To-Market Milestones',
      outcomes: [
        'Delivered 1,500+ verified leads within 75 days, comfortably beating the original 90-day timeline',
        'Generated a 60–80% pre-qualification rate on all inbound demo requests',
        'Achieved a 5–10% demo-to-contract closure rate with enterprise ARR contracts',
        'Created a permanent paid search moat capturing high-intent software comparisons'
      ]
    }
  }
];
