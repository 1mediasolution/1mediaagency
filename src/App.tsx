/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import BentoPhilosophy from './components/BentoPhilosophy';
import CaseStudiesHub from './components/CaseStudiesHub';
import ServicesSection from './components/ServicesSection';
import GrowthCalculator from './components/GrowthCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import PlaybooksSection from './components/PlaybooksSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import { AnimatedSection, AnimatedDiv } from './components/AnimatedSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditDefaultService, setAuditDefaultService] = useState<string>('');
  const [auditDefaultNotes, setAuditDefaultNotes] = useState<string>('');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>();
  const [selectedCaseStudySlug, setSelectedCaseStudySlug] = useState<string | undefined>();

  const openAuditWithContext = (serviceOrTopic?: string, notes?: string) => {
    if (serviceOrTopic) {
      setAuditDefaultService(serviceOrTopic);
    }
    if (notes) {
      setAuditDefaultNotes(notes);
    }
    setIsAuditModalOpen(true);
  };

  const handleSelectService = (slug: string) => {
    setSelectedServiceSlug(slug);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCaseStudy = (slug: string) => {
    setSelectedCaseStudySlug(slug);
    setActiveTab('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyCalculatorProjection = (data: {
    budget: number;
    model: string;
    projectedPipeline: string;
  }) => {
    const notes = `Calculator Projection Applied:\n- Budget: ₹${data.budget.toLocaleString('en-IN')}/mo\n- Model: ${data.model}\n- Target Pipeline: ${data.projectedPipeline}`;
    openAuditWithContext(data.model, notes);
  };

  // Motion variants for smooth view transitions
  const pageVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' as const } },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAudit={(service) => openAuditWithContext(service)}
        onSelectService={handleSelectService}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* Home View */}
          {activeTab === 'home' && (
            <motion.div
              key="home-view"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Hero
                onScheduleSession={() => openAuditWithContext('Discovery Session')}
                onExploreCaseStudies={() => {
                  const caseSec = document.getElementById('case-studies');
                  if (caseSec) {
                    caseSec.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActiveTab('case-studies');
                  }
                }}
              />

              <AnimatedDiv delay={0.05}>
                <TrustMarquee />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <BentoPhilosophy
                  onLearnMoreServices={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <CaseStudiesHub
                  onBookAuditForCaseStudy={(title) =>
                    openAuditWithContext(title, `Interested in replicating the model from: ${title}`)
                  }
                  selectedCaseStudySlug={selectedCaseStudySlug}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <GrowthCalculator
                  onApplyProjection={handleApplyCalculatorProjection}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <ServicesSection
                  onSelectServiceForAudit={(serviceTitle) =>
                    openAuditWithContext(serviceTitle, `Direct inquiry for Architecture: ${serviceTitle}`)
                  }
                  selectedSlug={selectedServiceSlug}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <TestimonialsSection
                  onViewCaseStudy={handleViewCaseStudy}
                  onBookSession={() => openAuditWithContext('General Growth Audit')}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <PlaybooksSection
                  onOpenAudit={(topic) => openAuditWithContext(topic)}
                  onViewCaseStudy={handleViewCaseStudy}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <FAQSection
                  onOpenAudit={() => openAuditWithContext('FAQ Discovery Session')}
                />
              </AnimatedDiv>

              <AnimatedDiv delay={0.08}>
                <ContactSection
                  initialObjective={auditDefaultService}
                  initialNotes={auditDefaultNotes}
                />
              </AnimatedDiv>
            </motion.div>
          )}

          {/* About View */}
          {activeTab === 'about' && (
            <motion.div
              key="about-view"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-24"
            >
              <AboutSection
                onScheduleCall={() => openAuditWithContext('Founder Advisory Call')}
              />
              <AnimatedDiv delay={0.08}>
                <TrustMarquee />
              </AnimatedDiv>
              <AnimatedDiv delay={0.1}>
                <ContactSection
                  initialObjective="Executive Growth Consultation"
                  initialNotes="Inquiry originating from About page."
                />
              </AnimatedDiv>
            </motion.div>
          )}

          {/* Services View */}
          {activeTab === 'services' && (
            <motion.div
              key="services-view"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-24"
            >
              <ServicesSection
                onSelectServiceForAudit={(serviceTitle) =>
                  openAuditWithContext(serviceTitle, `Direct inquiry for: ${serviceTitle}`)
                }
                selectedSlug={selectedServiceSlug}
              />
              <AnimatedDiv delay={0.08}>
                <GrowthCalculator
                  onApplyProjection={handleApplyCalculatorProjection}
                />
              </AnimatedDiv>
              <AnimatedDiv delay={0.1}>
                <ContactSection
                  initialObjective={selectedServiceSlug || 'Custom Architecture Setup'}
                />
              </AnimatedDiv>
            </motion.div>
          )}

          {/* Case Studies View */}
          {activeTab === 'case-studies' && (
            <motion.div
              key="case-studies-view"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-24"
            >
              <CaseStudiesHub
                onBookAuditForCaseStudy={(title) =>
                  openAuditWithContext(title, `Replicate the architecture of: ${title}`)
                }
                selectedCaseStudySlug={selectedCaseStudySlug}
              />
              <AnimatedDiv delay={0.08}>
                <TestimonialsSection
                  onViewCaseStudy={handleViewCaseStudy}
                  onBookSession={() => openAuditWithContext('Case Study Re-Architecture')}
                />
              </AnimatedDiv>
              <AnimatedDiv delay={0.1}>
                <ContactSection
                  initialObjective="Performance Architecture Implementation"
                />
              </AnimatedDiv>
            </motion.div>
          )}

          {/* Insights / Portfolio View */}
          {activeTab === 'insights-portfolio' && (
            <motion.div
              key="insights-view"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-24"
            >
              <PlaybooksSection
                onOpenAudit={(topic) => openAuditWithContext(topic)}
                onViewCaseStudy={handleViewCaseStudy}
              />
              <AnimatedDiv delay={0.08}>
                <CaseStudiesHub
                  onBookAuditForCaseStudy={(title) =>
                    openAuditWithContext(title, `Case breakdown replication: ${title}`)
                  }
                />
              </AnimatedDiv>
              <AnimatedDiv delay={0.1}>
                <ContactSection
                  initialObjective="Playbook Implementation"
                />
              </AnimatedDiv>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAudit={() => openAuditWithContext('Footer Quick Audit')}
        onSelectService={handleSelectService}
      />

      {/* Global Instant Growth Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        defaultService={auditDefaultService}
        defaultNotes={auditDefaultNotes}
      />
    </div>
  );
}
