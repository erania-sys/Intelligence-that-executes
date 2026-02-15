import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Eye, Target } from 'lucide-react';

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
      icon: <Eye size={28} strokeWidth={1.5} />,
      title: 'Insight-Driven',
      description: 'Every recommendation is backed by rigorous research and data analysis.'
    },
    {
      icon: <Target size={28} strokeWidth={1.5} />,
      title: 'Execution-Focused',
      description: 'We don\'t just strategize — we partner with you to implement and deliver results.'
    },
    {
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We align our efforts with your strategic goals.'
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: 'Transformative',
      description: 'We challenge conventions and push boundaries to create lasting impact.'
    }
  ];

  const strengths = [
    'Market complexity into strategic clarity',
    'Executive vision into operational velocity',
    'Bold ideas into business results that endure'
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
              At BRACKETT, everything begins with you—your strategic goals, 
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
                Partnership-Driven Strategy
              </motion.h2>
              
              <motion.div variants={fadeUpVariant} className="space-y-6 text-white/70">
                <p className="leading-relaxed">
                  We partner with executive teams to cut through complexity and uncover 
                  clarity in dynamic markets, translating insight into intelligent strategy 
                  that drives real, measurable advantage.
                </p>
                <p className="leading-relaxed">
                  Whether accelerating growth, navigating digital transformation, or harnessing 
                  advanced market intelligence, our senior advisors collaborate directly with 
                  leadership to craft strategies that deliver lasting impact.
                </p>
              </motion.div>
            </motion.div>
          </div>
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
              className="space-y-6"
            >
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="glass-card p-6 flex items-center gap-4"
                >
                  <CheckCircle size={24} className="text-blue-500 flex-shrink-0" strokeWidth={1.5} />
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
                className="glass-card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-6 text-white/80">
                  {value.icon}
                </div>
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
              Let's explore how we can turn your strategic vision into measurable results.
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
