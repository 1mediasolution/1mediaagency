import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICES } from '../data/services';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  TrendingUp,
  Layers,
  Code,
  Share2,
  Search,
  Award,
  Mail,
  Palette,
  Compass
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAudit: (serviceSlug?: string) => void;
  onSelectService: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAudit,
  onSelectService,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-indigo-600 shrink-0" />;
      case 'Code': return <Code className="w-4 h-4 text-cyan-600 shrink-0" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-blue-500 shrink-0" />;
      case 'Search': return <Search className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Award': return <Award className="w-4 h-4 text-amber-600 shrink-0" />;
      case 'Mail': return <Mail className="w-4 h-4 text-violet-600 shrink-0" />;
      case 'Palette': return <Palette className="w-4 h-4 text-rose-500 shrink-0" />;
      default: return <Compass className="w-4 h-4 text-slate-600 shrink-0" />;
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'work', label: 'Work' },
    { id: 'insights-portfolio', label: 'Insights/Portfolio' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'work') {
      setActiveTab('case-studies');
    } else {
      setActiveTab(id);
    }
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (slug: string) => {
    setActiveTab('services');
    onSelectService(slug);
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single element brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
            aria-label="1 Media Solution - Home"
          >
            <BrandLogo size="md" showTagline={!isScrolled} />
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-600">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`inline-flex items-center gap-1.5 py-1 transition-colors hover:text-slate-950 ${
                        activeTab === 'services' ? 'text-blue-600 font-semibold' : ''
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isServicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Services Mega-Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full -left-20 w-[580px] bg-white rounded-xl shadow-2xl border border-slate-200/90 p-5 mt-1 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            9 Dedicated Service Architectures
                          </span>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                          >
                            <span>View All Architectures</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                        {SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.slug)}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg text-left hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-1.5 rounded-md bg-slate-100 group-hover:bg-blue-50 transition-colors mt-0.5">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-[13px] font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                                {service.title}
                              </p>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {service.shortDescription}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-1 transition-colors hover:text-slate-950 whitespace-nowrap ${
                    activeTab === link.id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary conversion actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAudit()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-blue-600 transition-colors duration-150 whitespace-nowrap shadow-sm group"
            >
              <span>Contact Us / Book Growth Audit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenAudit()}
              className="px-2.5 py-1.5 text-[11px] font-semibold text-white bg-slate-950 rounded-md whitespace-nowrap"
            >
              Book Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Book Free Growth Audit →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
