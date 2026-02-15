import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
  const resources = [
    {
      id: '01',
      title: 'Advisory Overview',
      description: 'Comprehensive deck on our strategic intelligence services and methodology.',
      link: 'https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf',
      cta: 'Download PDF'
    },
    {
      id: '02',
      title: 'One Page Brochure',
      description: 'Quick overview of BRACKETT services and value proposition.',
      link: 'https://brackett.agency/s/brackett_agency_one_pager_1.pdf',
      cta: 'Download PDF'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your strategic challenges, goals, and vision for transformation.'
    },
    {
      step: '02',
      title: 'Custom Proposal',
      description: 'We develop a tailored engagement plan aligned with your specific needs.'
    },
    {
      step: '03',
      title: 'Strategic Partnership',
      description: 'We collaborate closely to deliver insights and drive measurable results.'
    }
  ];

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative" data-testid="contact-hero">
        <div className="glow-orb glow-blue w-[600px] h-[600px] top-0 right-0 opacity-20" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-6"
            >
              Get In Touch
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Let's Transform Your<br />
              <span className="text-gradient">Strategic Vision.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to elevate your strategic capabilities? Contact us to discuss 
              your organization's unique challenges and opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact CTA */}
      <section className="py-16 relative" data-testid="contact-main-cta">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="glow-orb glow-blue w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            
            <div className="relative z-10">
              <div className="mb-8">
                <span className="text-7xl font-bold text-white/10 block" style={{ fontFamily: 'Syne, sans-serif' }}>
                  &
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Start the Conversation
              </h2>
              
              <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
                Complete our brief inquiry form and a senior advisor will 
                reach out within 24 hours to discuss your needs.
              </p>
              
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-5"
                data-testid="contact-form-button"
              >
                Connect With Us
                <ArrowUpRight size={20} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 md:py-32 relative" data-testid="contact-resources">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Learn More About BRACKETT
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpVariant}
                className="glass-card p-8 group cursor-pointer block"
                data-testid={`resource-${index}`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-bold text-white/10 flex-shrink-0" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {resource.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {resource.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-medium">
                      {resource.cta}
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 md:py-32 relative" data-testid="what-to-expect">
        <div className="glow-orb glow-blue w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2 opacity-15" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
                What to Expect
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Our Engagement Process
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="glass-card p-8"
                >
                  <span className="text-4xl font-bold text-white/10 mb-4 block" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative" data-testid="contact-final-cta">
        <div className="glow-orb glow-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Ready to Begin?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Your strategic transformation journey starts with a single conversation.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-5"
                data-testid="final-cta-button"
              >
                Transform Your Vision
                <ArrowUpRight size={20} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
