import React, { useState, useEffect } from 'react';
import { SERVICES, ServiceArchitecture } from '../data/services';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Code, 
  Share2, 
  Search, 
  Award, 
  Mail, 
  Palette, 
  Compass,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForAudit: (serviceTitle: string) => void;
  selectedSlug?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForAudit,
  selectedSlug,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  useEffect(() => {
    if (selectedSlug) {
      const match = SERVICES.find((s) => s.slug === selectedSlug);
      if (match) {
        setActiveServiceId(match.id);
      }
    }
  }, [selectedSlug]);

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'Code': return <Code className="w-5 h-5 text-cyan-600" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-blue-500" />;
      case 'Search': return <Search className="w-5 h-5 text-emerald-600" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-600" />;
      case 'Mail': return <Mail className="w-5 h-5 text-violet-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-500" />;
      default: return <Compass className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <span>Execution Capabilities</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">9 Modular Growth Engines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Dedicated Service Architectures
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
            We don’t offer vague retainers or generic advisory. Each module is a battle-tested engineering sprint with concrete deliverables, clear timelines, and verified revenue models.
          </p>
        </div>

        {/* Master-Detail Interactive Service Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 9 Service Selectors (Col Span 4) */}
          <div className="lg:col-span-4 space-y-2 bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Architecture
            </div>
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                    isSelected
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold mt-0.5 ${
                      isSelected ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-900'
                    }`}
                  >
                    {service.number}.
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-bold leading-tight truncate ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {service.title}
                    </p>
                    <p
                      className={`text-[11px] mt-1 line-clamp-1 ${
                        isSelected ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architecture Dossier (Col Span 8) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm relative">
            
            {/* Header Lockup */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 shrink-0 mt-0.5">
                  {getServiceIcon(activeService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">
                    Architecture Module {activeService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mt-0.5">
                    {activeService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Strategic Role Statement */}
            <div className="mb-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
                Strategic Mandate
              </p>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                {activeService.strategicRole}
              </p>
            </div>

            {/* The Problem Addressed */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>The Core Bottleneck We Eradicate</span>
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-100">
                {activeService.problem}
              </p>
            </div>

            {/* Step-by-Step Framework */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Systematic 4-Phase Execution Framework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeService.framework.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
                    <p className="text-xs font-bold text-blue-700">{step.step}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Deliverables Checklist */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Included Deliverables & Engineering Artifacts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project Reference & Action Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl">
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-500">Featured Reference Project</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                  {activeService.featuredProject.name}
                </p>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">
                  {activeService.featuredProject.metric}
                </p>
              </div>

              <button
                onClick={() => onSelectServiceForAudit(activeService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-blue-600 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Deploy This Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
