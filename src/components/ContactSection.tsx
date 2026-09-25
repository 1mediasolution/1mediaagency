import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { BrandIcon } from './BrandLogo';
import { submitLead } from '../lib/api';

interface ContactSectionProps {
  initialObjective?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialObjective,
  initialNotes,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    companyName: '',
    websiteUrl: '',
    primaryObjective: initialObjective || 'Full-Funnel Scaling',
    budgetAllocation: '₹1,00,000 – ₹3,00,000',
    notes: initialNotes || '',
  });

  useEffect(() => {
    if (initialObjective) {
      setFormData((prev) => ({ ...prev, primaryObjective: initialObjective }));
    }
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialObjective, initialNotes]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid work email';
    }
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Direct WhatsApp number is required for session coordination';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / Brand name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});
    submitLead({
      formType: 'contact',
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      companyName: formData.companyName,
      websiteUrl: formData.websiteUrl,
      objective: formData.primaryObjective,
      budget: formData.budgetAllocation,
      notes: formData.notes,
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => {
        setErrors({ form: error instanceof Error ? error.message : 'Unable to submit. Please try again.' });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Growth Audit & Discovery</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">Founder War Room</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            Ready to Build a Predictable Acquisition Engine?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Share your current business objectives. We will review your existing presence, analyze your funnels, and provide an actionable growth blueprint within 24 hours.
          </p>
        </div>

        {/* Form and Contact Meta Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Main Form Container (Col Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  Growth Audit Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our senior growth architects are reviewing <span className="font-semibold text-slate-900">{formData.companyName}</span>. We will reach out via WhatsApp & email within 24 hours with your preliminary teardown.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2 text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Next Steps in the Review Pipeline:</span>
                  </div>
                  <p>1. Technical funnel & tracking attribution scan</p>
                  <p>2. Competitor creative & keyword arbitrage audit</p>
                  <p>3. 30-minute private strategy briefing session</p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-blue-600 hover:underline pt-2 inline-block cursor-pointer"
                >
                  Submit another inquiry or update brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email & WhatsApp Two-Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Direct WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-rose-600 mt-1">{errors.whatsapp}</p>
                    )}
                  </div>
                </div>

                {/* Company Name & Website URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Tech"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://company.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Primary Objective */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Objective
                  </label>
                  <select
                    value={formData.primaryObjective}
                    onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="B2B Leads">B2B Leads & Enterprise Pipeline</option>
                    <option value="Creator Funnel">Creator Funnel & Webinar Scaling</option>
                    <option value="Web-App Build">High-Converting Web / App Build</option>
                    <option value="Full-Funnel Scaling">Full-Funnel Scaling (End-to-End)</option>
                    <option value="Paid Media / ROAS">Paid Media Optimization (Meta & Google)</option>
                  </select>
                </div>

                {/* Monthly Marketing Allocation */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current Monthly Marketing Allocation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      '₹50,000 – ₹1,00,000',
                      '₹1,00,000 – ₹3,00,000',
                      '₹3,00,000+',
                    ].map((bracket) => (
                      <button
                        type="button"
                        key={bracket}
                        onClick={() => setFormData({ ...formData, budgetAllocation: bracket })}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                          formData.budgetAllocation === bracket
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {bracket}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Notes / Context */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Specific Challenge or Funnel Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your current CAC, conversion rate, or past agency bottlenecks..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Direct Contact CTA */}
                {errors.form && (
                  <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">{errors.form}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-xl transition-all duration-150 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Strategy Parameters...</span>
                    ) : (
                      <>
                        <span>Schedule Strategy Session</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Strict NDA protection. No spam. 100% confidential.</span>
                </div>

              </form>
            )}
          </div>

          {/* Location & Direct Agency Contacts (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <BrandIcon variant="color" size={30} />
                <div>
                  <h4 className="text-base font-bold text-white">Direct Agency Contact</h4>
                  <p className="text-[11px] text-slate-400">1 Media Solution HQ</p>
                </div>
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 text-xs font-mono uppercase">Headquarters</p>
                    <p className="font-semibold text-white text-sm mt-0.5">Delhi, India</p>
                    <p className="text-slate-400 text-xs mt-0.5">Operating Globally across APAC, EMEA, and US timezones</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 text-xs font-mono uppercase">Direct Founder Email</p>
                    <a
                      href="mailto:hello@1mediasolution.com"
                      className="font-semibold text-blue-400 hover:text-blue-300 text-sm mt-0.5 inline-block"
                    >
                      hello@1mediasolution.com
                    </a>
                    <p className="text-slate-400 text-xs mt-0.5">Average response time: &lt; 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 text-xs font-mono uppercase">Executive Hours</p>
                    <p className="font-semibold text-white text-sm mt-0.5">Mon – Sat: 9:00 AM – 8:00 PM IST</p>
                    <p className="text-slate-400 text-xs mt-0.5">Round-the-clock priority launch war-rooms</p>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="mailto:hello@1mediasolution.com?subject=Growth%20Audit%20Inquiry%20-%201%20Media%20Solution"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email to Founders</span>
                </a>
              </div>
            </div>

            {/* Direct Assurance Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>What Happens in Your Discovery Session?</span>
              </div>
              <p className="leading-relaxed">
                We don't do high-pressure sales pitches. We review your ad accounts, calculate your funnel conversion leakage, and tell you directly whether we can profitably beat your current benchmarks.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
