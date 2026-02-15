import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Home = () => {
  const services = [
    {
      title: 'Strategic Intelligence',
      description: 'Real-time customer analytics and market intelligence that inform smarter business decisions.',
    },
    {
      title: 'Customer Experience',
      description: 'Transform customer journeys through choice analytics and behavioral insights.',
    },
    {
      title: 'Brand Positioning',
      description: 'Strategic brand development informed by predictive customer behavior data.',
    }
  ];

  const testimonials = [
    {
      quote: "Brackett elevated our strategic thinking. They deliver the intelligence that powers our competitive advantage.",
      author: 'Founder',
      company: 'Fast-Casual Food Brand'
    },
    {
      quote: "Their strategic intelligence capabilities transformed how we approach market opportunities.",
      author: 'CEO',
      company: 'Healthcare Technology'
    },
    {
      quote: "The Brackett team distills complexity into clarity. Their execution brought our vision to life.",
      author: 'Executive Leader',
      company: 'Global MedTech'
    }
  ];

  const platforms = [
    {
      name: 'o360',
      tagline: 'Customer Intelligence',
      description: 'Real-time analytics platform delivering comprehensive insights about your customers.'
    },
    {
      name: 'PatientX360',
      tagline: 'Healthcare Intelligence',
      description: 'Understanding patient choice and behavior to transform patient-centricity.'
    },
    {
      name: 'ASEMAP',
      tagline: 'Choice Analytics',
      description: 'Revealing the behavioral drivers behind customer decisions.'
    }
  ];

  return (
    <div data-testid="home-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden" data-testid="hero-section">
        {/* Decorative shapes */}
        <div className="shape-circle w-96 h-96 -top-20 -right-20" />
        <div className="shape-square w-64 h-64 bottom-20 -left-10" />
        
        <div className="section-container relative z-10">
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
              Strategic Intelligence & Advisory
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Smarter decisions start with better intelligence.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-xl mb-8 leading-relaxed"
            >
              We help brands understand their customers, predict behavior, 
              and build lasting competitive advantage through data-driven strategy.
            </motion.p>
            
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="hero-cta-primary"
              >
                Start a Conversation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link
                to="/services"
                className="btn-secondary"
                data-testid="hero-cta-secondary"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Quick Overview */}
      <section className="py-20 md:py-28" data-testid="services-overview">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Intelligence that drives results
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="classic-card service-card p-8"
                >
                  <div className="accent-line mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#2D5A4A] font-medium hover:underline"
                data-testid="view-all-services"
              >
                View all services
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Platforms */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="intelligence-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">Our Intelligence Engine</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Powered by advanced analytics
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed">
                We leverage industry-leading platforms to deliver insights that go beyond 
                surface-level data, revealing the real drivers behind customer decisions.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)]"
                >
                  <p className="text-xs font-semibold text-[#2D5A4A] uppercase tracking-wider mb-2">
                    {platform.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {platform.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Question */}
      <section className="py-20 md:py-28" data-testid="key-question">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Why should anyone buy from you?"
            </h2>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              We help you find the answer—then use it to change customer behavior. 
              That's strategic intelligence in action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="testimonials-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">Client Stories</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                What our clients say
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="testimonial-card classic-card p-8"
                >
                  <span className="quote-mark">"</span>
                  <p className="text-[#1A1A1A] text-lg leading-relaxed mb-6 -mt-6">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                    <p className="font-semibold text-[#1A1A1A]">{testimonial.author}</p>
                    <p className="text-[#6B6B6B] text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-[#2D5A4A] rounded-2xl p-10 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how strategic intelligence can drive your organization's growth.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2D5A4A] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                data-testid="cta-connect"
              >
                Connect With Us
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
