import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BrandIcon } from './BrandLogo';
import { submitLead } from '../lib/api';
import { isValidEmail, isValidIndianMobile } from '../lib/validation';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultNotes?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultNotes,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    companyName: '',
    objective: defaultService || 'Full-Funnel Scaling',
    budget: '₹1,00,000 – ₹3,00,000',
    notes: defaultNotes || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, objective: defaultService }));
    }
    if (defaultNotes) {
      setFormData((prev) => ({ ...prev, notes: defaultNotes }));
    }
  }, [defaultService, defaultNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!isValidEmail(formData.email)) {
      setError('Please provide a valid work email.');
      return;
    }
    if (!isValidIndianMobile(formData.whatsapp)) {
      setError('Please provide a valid 10-digit Indian WhatsApp number.');
      return;
    }
    setIsSubmitting(true);
    submitLead({
      formType: 'growth_audit',
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      companyName: formData.companyName,
      objective: formData.objective,
      budget: formData.budget,
      notes: formData.notes,
    })
      .then(() => setIsSubmitted(true))
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Unable to submit. Please try again.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
              Discovery Session Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Our growth team will review your parameters for <strong className="text-slate-900">{formData.companyName}</strong> and send your tailored blueprint over WhatsApp and email within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-colors cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1.5">
              <BrandIcon size={18} />
              <span>1 Media Solution · Growth War Room</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
              Book a Growth Audit & Strategy Session
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6 leading-relaxed">
              Let's analyze your funnels, eliminate ad waste, and architect a predictable customer pipeline.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Manav Kwatra"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@brand.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Direct WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Manavisual or Acme SaaS"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Primary Growth Focus
                </label>
                <select
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                >
                  <option value="Full-Funnel Scaling">Full-Funnel Scaling (End-to-End)</option>
                  <option value="Paid Ads & Performance Marketing">Paid Ads (Meta & Google 8-10x ROAS)</option>
                  <option value="Webinar & Creator Scaling">Creator & 30% Webinar Funnel</option>
                  <option value="B2B Enterprise Pipeline">B2B Enterprise Pipeline (Zero Ad Spend or Paid)</option>
                  <option value="High-Converting Web & App">High-Converting Web / App Build</option>
                  <option value="Market Repositioning">Service Repositioning & Modernization</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Monthly Marketing Spend Bracket
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['₹50k – ₹1L', '₹1L – ₹3L', '₹3L+'].map((br) => (
                    <button
                      type="button"
                      key={br}
                      onClick={() => setFormData({ ...formData, budget: br })}
                      className={`py-1.5 px-2 text-xs rounded border text-center transition-all cursor-pointer ${
                        formData.budget === br
                          ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {br}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">{error}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Structuring Growth Dossier...</span>
                  ) : (
                    <>
                      <span>Schedule Discovery Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Founder-level review. Zero spam guaranteed.</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default AuditModal;
