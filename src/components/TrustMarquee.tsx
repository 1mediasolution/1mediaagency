import React from 'react';
import { CLIENT_BRANDS } from '../data/clients';
import { ShieldCheck } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Verified Trust Proof · Selected Enterprise & High-Growth Clients</span>
          </div>
          <span className="text-xs text-slate-500">
            Across EdTech, B2B SaaS, Corporate Training & Professional Services
          </span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] gap-8 py-2">
          {/* Repeat twice for continuous loop */}
          {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/80 transition-all shrink-0 select-none group"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-600 transition-colors" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-600 font-medium">
                  {brand.category}
                </span>
              </div>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100 ml-2 whitespace-nowrap">
                {brand.impactTag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
