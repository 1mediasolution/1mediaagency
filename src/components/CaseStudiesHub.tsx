import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';
import { 
  ArrowRight, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Clock, 
  Building2, 
  Quote,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface CaseStudiesHubProps {
  onBookAuditForCaseStudy: (caseStudyTitle: string) => void;
  selectedCaseStudySlug?: string;
}

export const CaseStudiesHub: React.FC<CaseStudiesHubProps> = ({
  onBookAuditForCaseStudy,
  selectedCaseStudySlug,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCaseStudy, setActiveModalCaseStudy] = useState<CaseStudy | null>(
    selectedCaseStudySlug
      ? CASE_STUDIES.find((cs) => cs.slug === selectedCaseStudySlug) || null
      : null
  );

  const categories = [
    'All',
    'Ed-Tech & Creators',
    'Enterprise & B2B',
    'Professional Services',
  ];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              <span>Verified Track Record</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-500 font-normal">Real Revenue Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Case Studies: Revenue Engines in Action
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal">
              Every client engagement is documented with our rigorous <span className="font-semibold text-slate-900">Problem → Process → Result</span> engineering methodology.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Button Tabs) */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/60 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all duration-200 group ${
                index === 0 && selectedCategory === 'All' ? 'lg:col-span-2 bg-gradient-to-br from-white to-slate-50/60' : ''
              }`}
            >
              <div>
                {/* Quiet unboxed metadata: Category · Client · Timeframe */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-blue-700">{study.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-900 font-medium">{study.client}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{study.timeframe}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-4 font-display group-hover:text-blue-600 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Primary Metric Strip */}
                <div className="flex flex-wrap items-center gap-4 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Primary Impact</p>
                    <p className="text-base sm:text-lg font-extrabold text-slate-950 tabular-nums font-display">
                      {study.metrics.primary}
                    </p>
                  </div>
                  <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Verified Milestone</p>
                    <p className="text-base sm:text-lg font-bold text-blue-700 tabular-nums">
                      {study.metrics.secondary}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {study.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  {study.metrics.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action: Open Deep Case Study Modal */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalCaseStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer group/btn"
                >
                  <span>View Complete Strategic Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  {study.results.outcomes.length} Verified Milestones
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Strategic Case Study Modal */}
      {activeModalCaseStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-slate-200 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-700">{activeModalCaseStudy.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-900 font-medium">{activeModalCaseStudy.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalCaseStudy.timeframe} Duration</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display leading-tight">
                  {activeModalCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalCaseStudy(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-4 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8">
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-500">Client Account</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{activeModalCaseStudy.client}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-500">Domain Industry</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{activeModalCaseStudy.industry}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-500">Primary Lift</p>
                <p className="text-sm font-extrabold text-blue-600 mt-0.5">{activeModalCaseStudy.metrics.primary}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-500">Sustained Scale</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{activeModalCaseStudy.metrics.secondary}</p>
              </div>
            </div>

            {/* Methodology Deep Breakdown */}
            <div className="space-y-10">
              
              {/* 1. Problem */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">
                    The Problem & Initial Bottleneck: {activeModalCaseStudy.problem.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {activeModalCaseStudy.problem.overview}
                </p>
                <div className="bg-rose-50/40 rounded-xl p-4 border border-rose-100 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    Acute Friction Points Identified:
                  </p>
                  {activeModalCaseStudy.problem.painPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-rose-950">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Process / Steps */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                    02
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">
                    The Strategic Process & Steps: {activeModalCaseStudy.process.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {activeModalCaseStudy.process.steps.map((step) => (
                    <div key={step.number} className="p-4 rounded-xl border border-slate-200 bg-white">
                      <span className="text-xs font-mono font-bold text-blue-600">
                        Step {step.number}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 mt-1 mb-2">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Results */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono text-xs font-bold">
                    03
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">
                    The Concrete Results & Verified Milestones
                  </h4>
                </div>

                <div className="bg-emerald-50/40 rounded-xl p-5 border border-emerald-100 mb-6">
                  <div className="space-y-2.5">
                    {activeModalCaseStudy.results.outcomes.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attributable Quote if present */}
                {activeModalCaseStudy.results.quote && (
                  <div className="p-5 rounded-xl bg-slate-900 text-white relative">
                    <Quote className="w-6 h-6 text-slate-600 mb-2 opacity-50" />
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-4">
                      "{activeModalCaseStudy.results.quote.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                        {activeModalCaseStudy.results.quote.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">
                          {activeModalCaseStudy.results.quote.author}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {activeModalCaseStudy.results.quote.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Want similar revenue architecture for your business?
              </span>
              <button
                onClick={() => {
                  const title = activeModalCaseStudy.title;
                  setActiveModalCaseStudy(null);
                  onBookAuditForCaseStudy(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Schedule Strategy Session for This Model →</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default CaseStudiesHub;
