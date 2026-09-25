import React from 'react';
import { 
  ShieldCheck, 
  Key, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users,
  Compass,
  Cpu
} from 'lucide-react';
import { BrandLogo, BrandIcon } from './BrandLogo';

interface AboutSectionProps {
  onScheduleCall: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScheduleCall }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <span>The Agency Narrative</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">8+ Years of Battle-Tested Marketing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            We Don't Sell Fragmented Tactics. We Engineer Predictable Systems.
          </h2>
        </div>

        {/* Narrative Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Story (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-slate-900 font-semibold text-xl leading-relaxed">
              Most businesses struggle not from a lack of effort, but from disconnected execution.
            </p>
            <p>
              One agency handles social media, a freelancer runs ads, a third party builds an unoptimized website—and the founder is left managing chaos without clear attribution or revenue accountability.
            </p>
            <p>
              <strong className="text-slate-950 font-bold">1 Media Solution</strong> was built to eliminate this friction. We operate as your dedicated growth and execution arm. Led by founder-level direction with <strong className="text-blue-700 font-bold">8+ years of hands-on digital growth experience</strong>, we combine engineering discipline with creative performance marketing.
            </p>
            <p>
              We do not chase empty impressions or social media vanity metrics; we align every single creative asset, ad set, and landing page directly with pipeline, qualified leads, and measurable revenue.
            </p>

            {/* Direct Founder Access Guarantee */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-display font-black text-lg shrink-0">
                  1M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Founder-Level Account Stewardship
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Directed by Nirbhay and our senior performance architects. You communicate directly with the minds designing your revenue mechanics, ensuring zero dilution of intent and lightning-fast pivots.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Agency Invariants (Col Span 5) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800 mb-6">
              <BrandIcon variant="color" size={32} />
              <div>
                <p className="text-sm font-bold text-white tracking-tight">1 Media Solution</p>
                <p className="text-[11px] text-slate-400 font-mono">Operating Invariants</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold">01 / MANDATE</span>
                <h5 className="text-sm font-bold text-white mt-0.5">Full-Funnel Ownership</h5>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  We take responsibility for the entire conversion chain from cold impression to closed transaction.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-400 font-bold">02 / DISCIPLINE</span>
                <h5 className="text-sm font-bold text-white mt-0.5">Economics First</h5>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every recommendation is grounded in Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Customer Lifetime Value (LTV).
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-blue-400 font-bold">03 / VELOCITY</span>
                <h5 className="text-sm font-bold text-white mt-0.5">Bi-Weekly Creative Refreshes</h5>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Preventing ad decay before it eats into unit economics with continuous testing iterations.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onScheduleCall}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                <span>Schedule Founder Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* The 3 Core Working Principles */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-slate-950 font-display">
              Our Non-Negotiable Working Principles
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Built on transparency, engineering rigor, and client sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Principle 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 mb-2 font-display">
                1. Zero Outsourcing of Strategy
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Your campaigns are never handed down to unverified third-party contractors or junior interns. Every ad account, media strategy, and funnel wireframe is directed by senior growth architects with proven track records.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 mb-2 font-display">
                2. Complete Asset Ownership
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                You maintain 100% control over all ad accounts, tracking data, code repositories, creative files, and customer lists. We work inside your ecosystem so your intellectual property remains yours forever.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 mb-2 font-display">
                3. Pragmatic, Transparent Reporting
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Custom live analytics dashboards that prioritize cost-per-acquisition (CPA), qualified opportunities, and net revenue. No vanity metric inflation, no smoke and mirrors.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
