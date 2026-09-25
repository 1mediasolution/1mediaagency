import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface GrowthCalculatorProps {
  onApplyProjection: (data: {
    budget: number;
    model: string;
    projectedPipeline: string;
  }) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({
  onApplyProjection,
}) => {
  const [budget, setBudget] = useState<number>(100000); // 1 Lakh INR default
  const [model, setModel] = useState<'creator' | 'b2b' | 'consulting'>('creator');
  const [dealValue, setDealValue] = useState<number>(15000);

  // Model-specific benchmarks based on 1 Media Solution verified case studies
  const modelConfig = {
    creator: {
      name: 'Creator Academy & Ed-Tech Funnel',
      benchmarkRoas: '8x – 10x',
      roasMultiplier: 8.5,
      cpaPercent: 0.12,
      leadsMultiplier: 0.012, // leads per rupee
      note: 'Modeled after Manavisual & Cool Mitra (30% webinar conversion & direct response)'
    },
    b2b: {
      name: 'Enterprise B2B & Corporate Services',
      benchmarkRoas: '5x – 7x',
      roasMultiplier: 6.0,
      cpaPercent: 0.18,
      leadsMultiplier: 0.005,
      note: 'Modeled after Florence Fennel Informatica & Enterprise SaaS pipeline'
    },
    consulting: {
      name: 'High-Ticket Professional Consultations',
      benchmarkRoas: '6x – 8x',
      roasMultiplier: 7.0,
      cpaPercent: 0.15,
      leadsMultiplier: 0.012,
      note: 'Modeled after Holistic Consultations (1,200+ leads in Month 1 with 20%+ retention)'
    }
  };

  const currentConfig = modelConfig[model];
  const projectedRevenue = Math.round(budget * currentConfig.roasMultiplier);
  const estimatedQualifiedLeads = Math.round(budget * currentConfig.leadsMultiplier);
  const estimatedClients = Math.max(1, Math.round(projectedRevenue / dealValue));

  const formatINR = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  const handleApply = () => {
    onApplyProjection({
      budget,
      model: currentConfig.name,
      projectedPipeline: formatINR(projectedRevenue)
    });
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Modeling</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">Real Case-Study Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Calculate Your Predictable Pipeline & ROAS
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Simulate your revenue velocity based on 8+ years of empirical performance data across Ed-Tech, Enterprise B2B, and Professional Consultations.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          
          {/* Controls Column (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Model Selector Tabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Growth Architecture Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setModel('creator');
                    setDealValue(15000);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    model === 'creator'
                      ? 'bg-white border-blue-600 shadow-sm text-slate-950 ring-1 ring-blue-600'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <p className="text-xs font-bold leading-tight">Ed-Tech & Creators</p>
                  <p className="text-[10px] text-slate-500 mt-1">Courses & Webinars</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setModel('b2b');
                    setDealValue(75000);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    model === 'b2b'
                      ? 'bg-white border-blue-600 shadow-sm text-slate-950 ring-1 ring-blue-600'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <p className="text-xs font-bold leading-tight">Enterprise & B2B</p>
                  <p className="text-[10px] text-slate-500 mt-1">SaaS & Corporate IT</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setModel('consulting');
                    setDealValue(25000);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    model === 'consulting'
                      ? 'bg-white border-blue-600 shadow-sm text-slate-950 ring-1 ring-blue-600'
                      : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <p className="text-xs font-bold leading-tight">High-Ticket Consults</p>
                  <p className="text-[10px] text-slate-500 mt-1">Services & Practices</p>
                </button>
              </div>
            </div>

            {/* Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Monthly Paid Acquisition Allocation
                </label>
                <span className="text-sm font-extrabold text-blue-600 font-mono">
                  {formatINR(budget)}/month
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>₹50,000</span>
                <span>₹5,00,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>

            {/* Deal Value Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Average Customer / Cohort Value
                </label>
                <span className="text-sm font-extrabold text-slate-950 font-mono">
                  {formatINR(dealValue)}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>₹5,000</span>
                <span>₹1,00,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{currentConfig.note}</span>
            </div>

          </div>

          {/* Projection Output Card (Col Span 5) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Target Projection
                </span>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  {currentConfig.benchmarkRoas} ROAS Range
                </span>
              </div>

              <div className="mb-6">
                <p className="text-xs text-slate-400 font-medium">Projected Monthly Pipeline / Revenue</p>
                <p className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1 tabular-nums">
                  {formatINR(projectedRevenue)}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  At benchmark 8+ years scaling efficiency
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800 mb-6">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-mono">Estimated Inbound Leads</p>
                  <p className="text-lg font-bold text-white mt-0.5 tabular-nums">
                    ~{estimatedQualifiedLeads.toLocaleString()} qualified
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 uppercase font-mono">Estimated Closes</p>
                  <p className="text-lg font-bold text-white mt-0.5 tabular-nums">
                    ~{estimatedClients.toLocaleString()} clients
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Intent filtration prevents low-value inquiries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Includes full conversion tracking & CAPI setup</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-white hover:bg-blue-50 rounded-xl transition-colors cursor-pointer group"
            >
              <span>Apply This Blueprint to My Business</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GrowthCalculator;
