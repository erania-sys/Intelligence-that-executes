import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Contact = () => {
  const resources = [
    {
      title: 'Advisory Overview',
      description: 'Comprehensive deck on our strategic intelligence services and methodology.',
      link: 'https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf',
      cta: 'Download PDF'
    },
    {
      title: 'One Page Brochure',
      description: 'Quick overview of Brackett services and value proposition.',
      link: 'https://brackett.agency/s/brackett_agency_one_pager_1.pdf',
      cta: 'Download PDF'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery Call',
      description: 'We learn about your challenges, goals, and vision for transformation.'
    },
    {
      number: '2',
      title: 'Custom Proposal',
      description: 'We develop a tailored engagement plan aligned with your needs.'
    },
    {
      number: '3',
      title: 'Strategic Partnership',
      description: 'We collaborate to deliver insights and drive measurable results.'
    }
  ];

  return (
    <div data-testid="contact-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F5F3EF]" data-testid="contact-hero">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-sm font-medium text-[#2D5A4A] mb-4"
            >
              Get In Touch
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's transform your strategic vision.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-xl mx-auto leading-relaxed"
            >
              Ready to elevate your strategic capabilities? Contact us to discuss 
              your organization's unique challenges and opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact CTA */}
      <section className="py-20 md:py-28" data-testid="contact-main-cta">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-[#2D5A4A] rounded-2xl p-10 md:p-16 text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Start the conversation
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Complete our brief inquiry form and a senior advisor will 
              reach out within 24 hours to discuss your needs.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2D5A4A] font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
              data-testid="contact-form-button"
            >
              Connect With Us
              <ArrowRight size={20} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="what-to-expect">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">What to Expect</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our engagement process
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="classic-card p-8 text-center"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E8F0ED] text-[#2D5A4A] font-bold text-xl mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 md:py-28" data-testid="contact-resources">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">Resources</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Learn more about Brackett
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {resources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUpVariant}
                  className="classic-card p-8 group cursor-pointer block"
                  data-testid={`resource-${index}`}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#2D5A4A] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {resource.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#2D5A4A] text-sm font-medium">
                    {resource.cta}
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="contact-final-cta">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to begin?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-[#6B6B6B] max-w-xl mx-auto mb-8"
            >
              Your strategic transformation journey starts with a single conversation.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
                data-testid="final-cta-button"
              >
                Transform Your Vision
                <ArrowRight size={20} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
