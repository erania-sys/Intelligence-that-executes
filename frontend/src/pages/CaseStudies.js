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

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Fast-Casual Food Brand',
      industry: 'Food & Beverage',
      challenge: 'Needed to differentiate in a crowded market and identify growth opportunities.',
      solution: 'Comprehensive market intelligence and competitive positioning strategy.',
      result: 'Strategic framework that elevated competitive advantage and market positioning.',
      image: 'https://images.unsplash.com/photo-1652081155813-bf703fadbbaf?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      title: 'Healthcare Technology Leader',
      industry: 'Healthcare Tech',
      challenge: 'Required clarity on market opportunities amidst rapid industry transformation.',
      solution: 'Strategic intelligence advisory and market opportunity analysis.',
      result: 'Data-driven insights now power their most critical business decisions.',
      image: 'https://images.unsplash.com/photo-1761449779811-33f7c48ed367?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
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
    <div data-testid="case-studies-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F5F3EF]" data-testid="case-studies-hero">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-sm font-medium text-[#2D5A4A] mb-4"
            >
              Case Studies
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Results that speak for themselves.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-xl leading-relaxed"
            >
              Explore how we've partnered with industry leaders to transform 
              strategic challenges into competitive advantages.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" data-testid="case-studies-stats">
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
                className="classic-card p-6 md:p-8 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#2D5A4A] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </p>
                <p className="text-[#6B6B6B] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28" data-testid="case-studies-grid">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="classic-card overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <p className="text-xs font-semibold text-[#2D5A4A] uppercase tracking-wider mb-2">
                      {study.industry}
                    </p>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1">Challenge</p>
                        <p className="text-[#1A1A1A]">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1">Solution</p>
                        <p className="text-[#1A1A1A]">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1">Result</p>
                        <p className="text-[#1A1A1A]">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="case-studies-cta">
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
              Your success story starts here.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-[#6B6B6B] max-w-xl mx-auto mb-8"
            >
              Join the leaders who have transformed their strategic capabilities with Brackett.
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
