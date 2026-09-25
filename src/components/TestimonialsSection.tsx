import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  onViewCaseStudy: (slug: string) => void;
  onBookSession: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onViewCaseStudy,
  onBookSession,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <span>Client Endorsements</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">Direct Founder Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Verified Proof from Founders, Creators & Enterprise Leaders
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
            Real outcomes from partners who trusted us to engineer their acquisition systems after hitting plateaus or burning budgets with traditional agencies.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-150 relative group"
            >
              <div>
                {/* Result Tag */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100/80">
                    {t.resultBadge}
                  </span>
                  <Quote className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed italic mb-8 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center font-display shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {t.role}, <span className="font-semibold text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>

                {t.featuredCaseStudySlug && (
                  <button
                    onClick={() => onViewCaseStudy(t.featuredCaseStudySlug!)}
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:underline cursor-pointer"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-950">
              Ready to eliminate marketing guesswork?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Join the ambitious brands scaling predictable revenue engines with 1 Media Solution.
            </p>
          </div>
          <button
            onClick={onBookSession}
            className="px-6 py-3 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Schedule Strategy Session →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
