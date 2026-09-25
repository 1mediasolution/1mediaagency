import React from 'react';
import { Layers, ShieldCheck, Filter, Globe2, ArrowRight } from 'lucide-react';

interface BentoPhilosophyProps {
  onLearnMoreServices: () => void;
}

export const BentoPhilosophy: React.FC<BentoPhilosophyProps> = ({
  onLearnMoreServices,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <span>Operating Framework</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">Methodology Over Fluff</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            The 4-Pillar Growth Engine: How We Eliminate Agency Guesswork
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Growth isn't an accident of luck or viral trends. It is the predictable consequence of synchronizing marketing psychology, ad mechanics, and operational sales velocity.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Pillar 01: Full-Funnel Alignment (Col Span 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-600 font-mono">
                  Pillar 01
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-display">
                Full-Funnel Alignment
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Traffic without conversion is vanity. We integrate ad creatives, custom landing pages, and automated sales mechanisms before spending a single rupee. Every touchpoint is engineered to remove buying friction.
              </p>

              {/* Concrete operational mechanism visualization */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 grid grid-cols-3 gap-3 text-center">
                <div className="p-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Step 1</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">High-CTR Creative</p>
                </div>
                <div className="p-2 border-x border-slate-200/80">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Step 2</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">Frictionless Lander</p>
                </div>
                <div className="p-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Step 3</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">Automated Close</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Zero capital leakage across transitions</span>
              <span className="font-mono text-blue-600 font-semibold">100% Attributable</span>
            </div>
          </div>

          {/* Pillar 02: Founder-Led Precision (Col Span 5) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-600 font-mono">
                  Pillar 02
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-display">
                Founder-Led Precision
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Strategy is never handed off to inexperienced interns. Every account is architected with 8+ years of direct industry leadership, constant founder availability, and direct accountability.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center font-display">
                  1M
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Direct Senior Leadership</p>
                  <p className="text-[11px] text-slate-500">No junior pass-offs · Strategic War-Rooming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 03: Prequalified Acquisition (Col Span 5) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-600 font-mono">
                  Pillar 03
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Filter className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-display">
                Prequalified Acquisition
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We design multi-step filtration mechanisms into campaigns so your sales team talks only to paying prospects, not casual scrollers or tyre-kickers with zero budget.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Intent-Based Filtration</span>
              <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                High Close Velocity
              </span>
            </div>
          </div>

          {/* Pillar 04: Platform-Agnostic Execution (Col Span 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-600 font-mono">
                  Pillar 04
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Globe2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 font-display">
                Platform-Agnostic Execution
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                Whether dominating Google Search, scaling Meta algorithms, or building organic B2B authority on LinkedIn, we execute where high-intent buyers congregate—not where it’s easiest for an agency to run templates.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Meta Direct Response', 'Google Intent Search', 'LinkedIn Executive B2B', 'YouTube Masterclasses', 'Local Google Maps Pack'].map((channel) => (
                  <span
                    key={channel}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-md"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Unified cross-channel tracking & attribution
              </span>
              <button
                onClick={onLearnMoreServices}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:underline"
              >
                <span>Explore 9 Service Architectures</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoPhilosophy;
