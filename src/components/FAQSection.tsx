import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  id: string;
  category: 'Non-Tech Friendly' | 'Process & Timeline' | 'Budgets & ROI' | 'Ownership';
  question: string;
  answer: string;
  keyHighlight?: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Non-Tech Friendly',
    question: "I am a non-technical founder. Do I need to manage coding, server setups, or complex tracking?",
    answer: "Not at all. You don't need any technical or coding knowledge. Our team handles 100% of the technical heavy lifting: from high-converting landing page creation and CRM hooks to Meta Conversions API (CAPI), Google tracking tags, and domain DNS setup. We explain everything in plain business terms (revenue, qualified leads, and profit margins) so you always stay in complete control without the headache.",
    keyHighlight: "100% managed execution — no technical jargon or complex maintenance required from you."
  },
  {
    id: 'faq-02',
    category: 'Process & Timeline',
    question: "What actually happens during the initial Growth Audit and Discovery session?",
    answer: "During the 30-minute discovery session, we review your current customer journey, inspect your existing ad accounts or landing pages, identify where leads or sales are leaking, and show you an exact revenue model tailored to your business. It is a strategic diagnosis war-room with our senior team, not an aggressive sales pitch.",
    keyHighlight: "Actionable roadmap and funnel teardown provided within 24 hours."
  },
  {
    id: 'faq-03',
    category: 'Budgets & ROI',
    question: "How do you ensure my ad budget isn't wasted like with past agencies?",
    answer: "Most traditional agencies burn cash because they run broad, generic ads directly to broken or unoptimized pages without testing intent. We follow our 4-Pillar Growth Engine: before spending a single rupee on ads, we build pre-qualification filters and high-converting landing pages. We then launch rapid hook variations with micro-budgets to validate what converts, scaling only winning sets to protect your capital and lock in sustainable ROAS (like the 8–10x achieved for Manavisual).",
    keyHighlight: "Pre-qualification mechanisms eliminate low-intent clicks and tyre-kickers."
  },
  {
    id: 'faq-04',
    category: 'Ownership',
    question: "Who owns the ad accounts, customer data, and digital assets?",
    answer: "You maintain 100% full ownership forever. We build inside your dedicated Meta Business Suite, Google Ads account, CRM, and domain registrar. If you ever decide to bring marketing in-house, all the tracking data, customer pixel history, ad creative files, and web codes remain strictly yours. We never lock clients into proprietary black-box accounts.",
    keyHighlight: "100% Client Asset Sovereignty guarantee — your data and accounts stay in your hands."
  },
  {
    id: 'faq-05',
    category: 'Process & Timeline',
    question: "How quickly can we launch, and when will we see the first qualified leads?",
    answer: "Typically, our technical audit, funnel hygiene overhaul, and initial creative sprint are completed within 7 to 10 business days. Once campaigns go live, inbound lead flow and conversion signals begin generating within the first 48 to 72 hours. From there, we execute bi-weekly creative refreshes and audience scaling to drive steady growth.",
    keyHighlight: "Go-live within 7–10 days with initial lead traction within 48–72 hours."
  },
  {
    id: 'faq-06',
    category: 'Budgets & ROI',
    question: "What minimum marketing budget is required to work with 1 Media Solution?",
    answer: "We recommend a starting monthly paid media allocation of at least ₹50,000 to ₹1,00,000 for local or creator funnels, and ₹1,00,000+ for enterprise B2B and national multi-channel scaling. This provides sufficient statistical sample sizes for Meta and Google algorithms to find high-intent buyers efficiently.",
    keyHighlight: "Transparent brackets designed around viable unit economics and positive cash flow."
  },
  {
    id: 'faq-07',
    category: 'Non-Tech Friendly',
    question: "How do we communicate and track results week to week?",
    answer: "You get a dedicated WhatsApp group directly with Nirbhay and our senior growth architects for immediate questions, plus a clean, real-time analytics dashboard updated live. We hold weekly or bi-weekly executive review calls focusing on the only numbers that matter: Cost Per Acquisition (CPA), qualified pipeline, and net return on ad spend.",
    keyHighlight: "Direct WhatsApp war-room access and live, transparent executive dashboards."
  }
];

interface FAQSectionProps {
  onOpenAudit: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenAudit }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Non-Tech Friendly',
    'Process & Timeline',
    'Budgets & ROI',
    'Ownership'
  ];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Clear Answers · Zero Jargon</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">Founder Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Everything you need to know about our growth architecture, technical onboarding, asset ownership, and predictable revenue mechanics—simplified for non-technical leaders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center flex-wrap gap-2 mb-10 pb-4 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300/80 bg-blue-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug font-display">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-2 rounded-xl border transition-all shrink-0 mt-0.5 ${
                      isOpen
                        ? 'bg-blue-600 text-white border-blue-600 rotate-180'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-7 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4 font-normal">
                        <p className="mb-4">{faq.answer}</p>
                        {faq.keyHighlight && (
                          <div className="p-3.5 rounded-xl bg-white border border-blue-100/80 text-xs text-slate-800 flex items-start gap-2.5 shadow-2xs font-medium">
                            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{faq.keyHighlight}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Strip */}
        <div className="mt-14 max-w-4xl p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                Have a question specific to your industry or setup?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We'll walk through your exact setup in plain language during your free 30-minute discovery session.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <span>Book Growth Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
