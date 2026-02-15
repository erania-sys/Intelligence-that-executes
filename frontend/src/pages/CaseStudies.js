import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const CaseStudies = () => {
  const caseStudies = [
    {
      id: '01',
      title: 'Fast-Casual Food Brand',
      industry: 'Food & Beverage',
      challenge: 'Needed to differentiate in a crowded market and identify growth opportunities.',
      solution: 'Comprehensive market intelligence and competitive positioning strategy.',
      result: 'Strategic framework that elevated competitive advantage and market positioning.',
      image: 'https://images.unsplash.com/photo-1652081155813-bf703fadbbaf?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: '02',
      title: 'Healthcare Technology Leader',
      industry: 'Healthcare Tech',
      challenge: 'Required clarity on market opportunities amidst rapid industry transformation.',
      solution: 'Strategic intelligence advisory and market opportunity analysis.',
      result: 'Data-driven insights now power their most critical business decisions.',
      image: 'https://images.unsplash.com/photo-1761449779811-33f7c48ed367?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: '03',
      title: 'Global MedTech Company',
      industry: 'Medical Technology',
      challenge: 'Complexity in translating innovative vision into executable strategy.',
      solution: 'Executive strategy development and strategic execution planning.',
      result: 'Vision transformed into reality through clear strategic execution.',
      image: 'https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=srgb&fm=jpg&q=85'
    }
  ];

  const stats = [
    { number: '50+', label: 'Strategic Projects' },
    { number: '3x', label: 'Average ROI' },
    { number: '95%', label: 'Client Retention' },
    { number: '12+', label: 'Industries Served' }
  ];

  return (
    <div data-testid="case-studies-page">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative" data-testid="case-studies-hero">
        <div className="glow-orb glow-blue w-[500px] h-[500px] -top-[100px] -left-[200px] opacity-30" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-6"
            >
              Case Studies
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Results That<br />
              <span className="text-gradient">Speak For Themselves.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              Explore how we've partnered with industry leaders to transform 
              strategic challenges into competitive advantages.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative" data-testid="case-studies-stats">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card p-6 md:p-8 text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stat.number}
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 relative" data-testid="case-studies-grid">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card case-study-card overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-white/10" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {study.id}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-blue-400/80 block">
                          {study.industry}
                        </span>
                        <div className="h-px w-12 bg-gradient-to-r from-blue-500/50 to-transparent mt-1" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-white/40 mb-1">Challenge</p>
                        <p className="text-white/70">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-white/40 mb-1">Solution</p>
                        <p className="text-white/70">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-white/40 mb-1">Result</p>
                        <p className="text-white/70">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 md:py-32 relative" data-testid="partners-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Industry Leaders Across Sectors
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center items-center gap-12 opacity-40"
          >
            {['Healthcare', 'Technology', 'Food & Beverage', 'MedTech', 'Finance'].map((industry, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative" data-testid="case-studies-cta">
        <div className="glow-orb glow-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        
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
              Your Success Story<br />Starts Here.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Join the leaders who have transformed their strategic 
              capabilities with BRACKETT.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="case-studies-cta-connect"
              >
                Start Your Transformation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="https://brackett.agency/s/brackett_agency_one_pager_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                data-testid="case-studies-cta-download"
              >
                Download Brochure
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
