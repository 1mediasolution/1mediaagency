import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { BrandIcon } from './BrandLogo';

interface HeroProps {
  onScheduleSession: () => void;
  onExploreCaseStudies: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScheduleSession,
  onExploreCaseStudies,
}) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-38 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      {/* Subtle brand glow in upper corner (restrained, anti-slop) */}
      <div 
        className="absolute top-10 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-32 left-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow: Clean unboxed metadata discipline (NO PILLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wider uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Enterprise Growth Architecture & Performance Systems</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Founder-Led Execution</span>
          </motion.div>

          {/* Headline: Strict type scale & text-wrap balance */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] text-balance mb-6"
          >
            We Engineer Scalable Revenue Engines for Ambitious Brands.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto mb-10 text-balance"
          >
            Eliminating agency guesswork with systematic full-funnel execution. Backed by 8+ years of battle-tested marketing intelligence, we turn fragmented digital presence into measurable pipeline, qualified clients, and sustained market authority.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onScheduleSession}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-slate-950 rounded-xl hover:bg-blue-600 transition-all duration-150 shadow-md hover:shadow-lg shadow-slate-950/10 group whitespace-nowrap cursor-pointer"
            >
              <span>Schedule a Discovery Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreCaseStudies}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer hover:border-slate-300 shadow-sm"
            >
              <span>Explore Real Results & Case Studies</span>
            </button>
          </motion.div>

          {/* Key Assurance Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 mb-14"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Zero Strategy Outsourcing</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>100% Client Asset Ownership</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Direct Founder Direction</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Live Authority Metric Strip: Tabular figures, hairline dividers */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">
                8+ Years
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Proven Scaling Intelligence
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">
                ₹20Cr+
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Managed Revenue & Pipeline
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-display tabular-nums">
                30%
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Record Webinar Conversion Rate
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tabular-nums">
                1,200+
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Leads Scaled in 30 Days
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
