import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const About = () => {
  const values = [
    {
      number: '01',
      title: 'Insight-Driven',
      description: 'Every recommendation is powered by advanced analytics platforms and real customer data.'
    },
    {
      number: '02',
      title: 'Execution-Focused',
      description: 'We don\'t just strategize — we partner with you to implement and deliver measurable results.'
    },
    {
      number: '03',
      title: 'Client-Centric',
      description: 'Your success is our priority. We align our efforts with your strategic goals and challenges.'
    },
    {
      number: '04',
      title: 'Technology-Enabled',
      description: 'We leverage industry-leading analytics platforms to deliver intelligence at scale.'
    }
  ];

  const strengths = [
    'Market complexity into strategic clarity',
    'Customer data into behavioral understanding',
    'Insights into competitive advantage'
  ];

  const platforms = [
    {
      label: 'Platform',
      name: 'o360',
      description: 'Real-time customer intelligence platform for comprehensive analytics about your customers.'
    },
    {
      label: 'Healthcare',
      name: 'PatientX360',
      description: 'Healthcare-specific intelligence for understanding patient choice and behavior.'
    },
    {
      label: 'Analytics',
      name: 'ASEMAP',
      description: 'Proprietary choice analytics technology revealing behavioral drivers behind customer decisions.'
    }
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative" data-testid="about-hero">
        <div className="glow-orb glow-blue w-[500px] h-[500px] -top-[100px] -right-[200px] opacity-30" />
        
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
              About Brackett
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Where Insight Meets<br />
              <span className="text-gradient">Execution.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              At BRACKETT, everything begins with understanding—your customers, 
              your market challenges, and your vision for transformational growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 relative" data-testid="about-story">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Strategic meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-white/10 rounded-2xl" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUpVariant}
                className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4"
              >
                Our Approach
              </motion.p>
              
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Intelligence-Powered Strategy
              </motion.h2>
              
              <motion.div variants={fadeUpVariant} className="space-y-6 text-white/70">
                <p className="leading-relaxed">
                  We partner with executive teams to cut through complexity using advanced 
                  customer analytics platforms. Our intelligence capabilities go beyond 
                  surface-level data to reveal the behavioral and cognitive drivers behind 
                  customer decisions.
                </p>
                <p className="leading-relaxed">
                  By understanding the "why" behind customer choice, we help organizations 
                  change behaviors, address individualized needs, and build lasting competitive 
                  advantage in highly personalized markets.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Platforms */}
      <section className="py-24 md:py-32 relative" data-testid="about-platforms">
        <div className="glow-orb glow-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
                Our Intelligence Engine
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Powered by Advanced Platforms
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                We leverage industry-leading customer intelligence platforms to deliver 
                insights that transform how organizations understand their customers.
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
                  className="glass-card p-8"
                >
                  <div className="mb-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-400/80 block mb-2">
                      {platform.label}
                    </span>
                    <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {platform.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strength Section */}
      <section className="py-24 md:py-32 relative" data-testid="about-strength">
        <div className="glow-orb glow-blue w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2 opacity-20" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4"
            >
              Our Strength
            </motion.p>
            
            <motion.h2
              variants={fadeUpVariant}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Turning Complexity<br />Into Clarity
            </motion.h2>
            
            <motion.div
              variants={fadeUpVariant}
              className="space-y-4"
            >
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="glass-card p-6 flex items-center gap-6"
                >
                  <span className="text-3xl font-bold text-white/20 w-12" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg text-left text-white/80">{strength}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 relative" data-testid="about-values">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our Core Values
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card p-8"
              >
                <span className="text-4xl font-bold text-white/10 block mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {value.number}
                </span>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative" data-testid="about-cta">
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
              Ready to Partner<br />With BRACKETT?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Let's explore how our intelligence capabilities can transform your 
              customer understanding and drive measurable results.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="about-cta-connect"
              >
                Start a Conversation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link
                to="/services"
                className="btn-secondary"
                data-testid="about-cta-services"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
