import React, { useState } from 'react';
import { PLAYBOOKS, Playbook } from '../data/playbooks';
import { CASE_STUDIES } from '../data/caseStudies';
import { BookOpen, ArrowRight, X, Clock, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

interface PlaybooksSectionProps {
  onOpenAudit: (topic?: string) => void;
  onViewCaseStudy: (slug: string) => void;
}

export const PlaybooksSection: React.FC<PlaybooksSectionProps> = ({
  onOpenAudit,
  onViewCaseStudy,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);

  const filters = [
    'All Projects',
    'Ed-Tech & Creators',
    'Enterprise & B2B',
    'Professional Services',
    'Case Teardowns',
  ];

  const filteredPlaybooks =
    activeFilter === 'All Projects'
      ? PLAYBOOKS
      : PLAYBOOKS.filter((pb) => pb.category === activeFilter);

  const filteredCases =
    activeFilter === 'All Projects'
      ? CASE_STUDIES.slice(0, 3)
      : CASE_STUDIES.filter((cs) => cs.category === activeFilter || activeFilter === 'Case Teardowns');

  return (
    <section id="insights-portfolio" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              <span>Strategic Knowledge Base</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-500 font-normal">Playbooks & Teardowns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Insights & Strategic Growth Playbooks
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal">
              Direct frameworks, funnel blueprints, and unvarnished performance breakdowns engineered for founders who respect quantitative rigor over vanity metrics.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/60">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === f
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Growth Playbooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {filteredPlaybooks.map((pb) => (
            <div
              key={pb.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-700">{pb.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{pb.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-3 font-display group-hover:text-blue-600 transition-colors leading-snug">
                  {pb.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {pb.summary}
                </p>

                {/* Key Takeaways preview */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Core Blueprint Insight
                  </p>
                  <p className="text-xs text-slate-700 font-medium line-clamp-2">
                    {pb.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedPlaybook(pb)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer py-1"
                >
                  <span>Read Complete Growth Playbook</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacent Project Demonstrations Strip */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-lg font-bold text-slate-950">
                Tested Implementations Across Featured Accounts
              </h4>
              <p className="text-xs text-slate-500">
                Playbook methodologies validated in actual client revenue deployments
              </p>
            </div>
            <button
              onClick={() => onOpenAudit()}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Request Custom Funnel Teardown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {filteredCases.map((study) => (
              <div
                key={study.id}
                onClick={() => onViewCaseStudy(study.slug)}
                className="p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-400">{study.client}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {study.title}
                </h5>
                <p className="text-xs font-extrabold text-blue-600 mt-1 font-mono">
                  {study.metrics.primary}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Playbook Reader Modal */}
      {selectedPlaybook && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10">
            
            <div className="flex items-start justify-between pb-6 border-b border-slate-200 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-700">{selectedPlaybook.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPlaybook.readTime}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 font-display">
                  {selectedPlaybook.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPlaybook(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-4 cursor-pointer"
                aria-label="Close playbook"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Key Takeaways */}
            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-3">
                Key Strategic Takeaways & Framework Invariants:
              </p>
              <div className="space-y-2">
                {selectedPlaybook.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Playbook Body Content */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
              {selectedPlaybook.content.map((sec, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0">
                  <h4 className="text-base font-bold text-slate-950 mb-2 font-display">
                    {idx + 1}. {sec.sectionTitle}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Want this exact framework engineered for your business?
              </span>
              <button
                onClick={() => {
                  const title = selectedPlaybook.title;
                  setSelectedPlaybook(null);
                  onOpenAudit(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              >
                Book Strategy Session on This Model →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default PlaybooksSection;
