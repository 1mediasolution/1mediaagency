import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MapPin, Mail, ArrowUp } from 'lucide-react';
import { SERVICES } from '../data/services';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenAudit: () => void;
  onSelectService: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenAudit,
  onSelectService,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="white" size="md" showTagline={true} />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2 font-normal">
              Enterprise Growth Architecture & Performance Systems. Eliminating agency guesswork with systematic full-funnel execution and 8+ years of battle-tested marketing intelligence.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Headquarters: Delhi, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:hello@1mediasolution.com" className="text-slate-300 hover:text-white transition-colors">
                  hello@1mediasolution.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links Mirror (Col Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('case-studies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Case Studies & Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('insights-portfolio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Insights & Playbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavClick('home');
                    setTimeout(() => {
                      const faqEl = document.getElementById('faq');
                      if (faqEl) faqEl.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAudit()}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Book Growth Audit →
                </button>
              </li>
            </ul>
          </div>

          {/* 9 Services Direct Links (Col Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Architectures
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onSelectService(srv.slug)}
                  className="text-left text-slate-400 hover:text-white transition-colors truncate cursor-pointer py-0.5"
                >
                  {srv.number}. {srv.title.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Working Mandates (Col Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Guarantees
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>· Zero Outsourcing of Strategy</li>
              <li>· 100% Client Asset Ownership</li>
              <li>· Real Attributable Dashboards</li>
              <li>· Direct Founder Leadership</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} 1 Media Solution. All rights reserved. Crafting Digital Brilliance.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavClick('about')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy & Asset Sovereignty
            </button>
            <button
              onClick={() => onOpenAudit()}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Discovery Terms
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
