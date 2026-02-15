import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Target, TrendingUp, Users, Sparkles, Database, Brain, BarChart3 } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Home = () => {
  const services = [
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: 'Strategic Intelligence',
      description: 'Real-time customer analytics and market intelligence powered by advanced behavioral data platforms.',
      link: '/services'
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: 'Customer Experience',
      description: 'Data-driven transformation of customer journeys through choice analytics and experience mapping.',
      link: '/services'
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: 'Brand & Market Positioning',
      description: 'Strategic brand development informed by predictive customer behavior insights.',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      quote: "Brackett elevated our strategic thinking. They don't just provide recommendations—they deliver the intelligence that powers our competitive advantage.",
      author: 'Founder',
      company: 'Fast-Casual Food Brand'
    },
    {
      quote: "Their strategic intelligence capabilities transformed how we approach market opportunities. Their insights drive our most critical business decisions.",
      author: 'CEO',
      company: 'Healthcare Technology Leader'
    },
    {
      quote: "The Brackett team has an unmatched ability to distill complexity into clarity. Their execution brought our vision to life in ways we couldn't have imagined.",
      author: 'Executive Leader',
      company: 'Global MedTech Company'
    }
  ];

  const intelligenceFeatures = [
    {
      icon: <BarChart3 size={24} strokeWidth={1.5} />,
      title: 'o360',
      description: 'Comprehensive customer intelligence platform delivering real-time analytics about your customers, enabling data-driven decisions at every touchpoint.'
    },
    {
      icon: <Users size={24} strokeWidth={1.5} />,
      title: 'PatientX360',
      description: 'Healthcare-specific intelligence for understanding patient choice and behavior, transforming how organizations approach patient-centricity.'
    },
    {
      icon: <Brain size={24} strokeWidth={1.5} />,
      title: 'ASEMAP',
      description: 'Proprietary choice analytics technology that reveals the behavioral and cognitive drivers behind customer decisions—not just ratings, but real understanding.'
    }
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1736858405207-fa4dca877d6d?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Strategic consulting"
          />
        </div>
        
        {/* Glow Orbs */}
        <div className="glow-orb glow-blue w-[600px] h-[600px] -top-[200px] -right-[200px] animate-pulse-glow" />
        <div className="glow-orb glow-white w-[400px] h-[400px] bottom-[100px] left-[100px] opacity-50" />
        
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
              Strategic Intelligence & Advisory
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Strategic Intelligence<br />
              <span className="text-gradient">for the Modern Age.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
            >
              We transform executive vision into measurable business advantage. 
              Powered by advanced customer analytics platforms, we help brands 
              understand choice, predict behavior, and build lasting competitive advantage.
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
                Transform Your Vision
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link
                to="/services"
                className="btn-secondary"
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Platform Section */}
      <section className="py-24 md:py-32 relative" data-testid="intelligence-section">
        <div className="glow-orb glow-blue w-[500px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-20" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl mb-16">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
                Our Intelligence Engine
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Powered by Advanced<br />
                <span className="text-white/60">Analytics Platforms</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We leverage industry-leading customer intelligence platforms to deliver insights 
                that go beyond surface-level data. Our strategic intelligence reveals the behavioral 
                and cognitive drivers behind customer decisions.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {intelligenceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="glass-card p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 relative" data-testid="philosophy-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUpVariant}>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
                Our Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Intelligence with Intention.<br />
                <span className="text-white/60">Excellence in Execution.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="space-y-6">
              <p className="text-lg text-white/70 leading-relaxed">
                We don't chase trends — we set trajectories. Strategy is strongest 
                when grounded in real customer intelligence, not instinct or assumptions.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                The best advisory doesn't just consult — it transforms. By understanding 
                the "why" behind customer choice, we help you change behaviors and address 
                individualized needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white link-underline"
                data-testid="philosophy-learn-more"
              >
                Learn more about us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 relative" data-testid="services-overview">
        <div className="glow-orb glow-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our Services
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card service-card p-8 md:p-10"
              >
                <div className="text-white/80 mb-6">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  data-testid={`service-card-${index}`}
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="btn-secondary"
              data-testid="view-all-services"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 relative" data-testid="testimonials-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              Client Success
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              What Leaders Say
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card testimonial-card p-8"
              >
                <Sparkles size={24} className="text-white/30 mb-6" strokeWidth={1.5} />
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-white/50 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative" data-testid="cta-section">
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
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Ready to Transform Your<br />
              Strategic Capabilities?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Let's discuss how our strategic intelligence advisory can help 
              drive your organization's growth and transformation.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="cta-connect"
              >
                Connect With Us
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                data-testid="cta-download"
              >
                Download Overview
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
