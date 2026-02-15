import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  Briefcase, 
  Lightbulb, 
  Users, 
  Rocket, 
  Target,
  Brain,
  Database,
  LineChart,
  PieChart,
  Zap
} from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Services = () => {
  const serviceCategories = [
    {
      title: 'Strategic Intelligence Advisory',
      description: 'Data-driven insights powered by advanced customer analytics platforms that inform and accelerate executive decision-making.',
      icon: <Database size={32} strokeWidth={1.5} />,
      color: 'from-blue-500/20 to-transparent',
      services: [
        {
          icon: <BarChart3 size={24} strokeWidth={1.5} />,
          name: 'Customer Intelligence & Analytics',
          description: 'Leverage o360 platform capabilities for comprehensive, real-time customer analytics that reveal who your customers really are and what drives their decisions.'
        },
        {
          icon: <Brain size={24} strokeWidth={1.5} />,
          name: 'Choice Analytics & Behavioral Insights',
          description: 'Using ASEMAP technology to understand the cognitive and behavioral drivers behind customer choice—moving beyond ratings to true understanding.'
        },
        {
          icon: <LineChart size={24} strokeWidth={1.5} />,
          name: 'Predictive Intelligence & Personalization',
          description: 'Forward-looking analytics that predict customer behavior and enable hyper-personalized engagement strategies for your market.'
        }
      ]
    },
    {
      title: 'Customer Experience & Brand',
      description: 'Transform customer journeys and market positioning through choice analytics and experience intelligence.',
      icon: <Users size={32} strokeWidth={1.5} />,
      color: 'from-purple-500/20 to-transparent',
      services: [
        {
          icon: <Users size={24} strokeWidth={1.5} />,
          name: 'Customer Experience Strategy',
          description: 'Data-driven customer experience transformation using choice analytics to understand what customers truly want at every touchpoint.'
        },
        {
          icon: <Rocket size={24} strokeWidth={1.5} />,
          name: 'Strategic Execution Planning',
          description: 'Comprehensive execution roadmaps informed by customer intelligence, with ongoing advisory support to ensure successful implementation.'
        },
        {
          icon: <Target size={24} strokeWidth={1.5} />,
          name: 'Brand Intelligence & Positioning',
          description: 'Strategic brand development powered by competitive intelligence and customer perception analytics for market differentiation.'
        }
      ]
    },
    {
      title: 'Healthcare Intelligence',
      description: 'Specialized patient-centric intelligence for healthcare organizations seeking to understand and improve patient choice and experience.',
      icon: <PieChart size={32} strokeWidth={1.5} />,
      color: 'from-emerald-500/20 to-transparent',
      services: [
        {
          icon: <Users size={24} strokeWidth={1.5} />,
          name: 'Patient Choice Analytics',
          description: 'PatientX360 platform capabilities to understand healthcare decision-making, patient preferences, and the drivers of patient loyalty.'
        },
        {
          icon: <Zap size={24} strokeWidth={1.5} />,
          name: 'Healthcare Experience Optimization',
          description: 'Transform patient journeys through deep behavioral insights, improving patient-centricity and healthcare outcomes.'
        },
        {
          icon: <Briefcase size={24} strokeWidth={1.5} />,
          name: 'Healthcare Market Intelligence',
          description: 'Comprehensive market analysis for healthcare organizations, including competitive positioning and growth opportunity identification.'
        }
      ]
    }
  ];

  const platformCapabilities = [
    {
      title: 'Real-Time Analytics',
      description: 'Continuous insights that keep pace with changing customer behaviors and market dynamics.'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your existing platforms—CDPs, visualization tools, CRMs, and loyalty programs.'
    },
    {
      title: 'Behavioral Understanding',
      description: 'Go beyond surface metrics to understand the "why" behind customer decisions.'
    },
    {
      title: 'Actionable Recommendations',
      description: 'Data-driven recommendations that translate directly into strategic execution.'
    }
  ];

  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative" data-testid="services-hero">
        <div className="glow-orb glow-blue w-[600px] h-[600px] -top-[200px] left-1/2 -translate-x-1/2 opacity-20" />
        
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
              Our Services
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Intelligence-Driven<br />
              <span className="text-gradient">Strategic Excellence</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              We combine advanced customer analytics platforms with strategic expertise 
              to transform how organizations understand and engage their customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Question */}
      <section className="py-16 md:py-24 relative" data-testid="key-question">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              "Why should anyone buy from you?"
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              We help you find the answer—then use it to change customer behavior. 
              Through choice analytics and behavioral intelligence, we reveal what 
              truly drives customer decisions and how to influence them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-16 md:py-24 relative" data-testid="platform-capabilities">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-4">
              Our Intelligence Edge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Platform-Powered Insights
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {platformCapabilities.map((cap, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {cap.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className="py-24 md:py-32 relative"
          data-testid={`service-category-${categoryIndex}`}
        >
          {categoryIndex % 2 === 0 && (
            <div className="glow-orb glow-blue w-[400px] h-[400px] top-1/2 right-0 -translate-y-1/2 opacity-15" />
          )}
          {categoryIndex % 2 === 1 && (
            <div className="glow-orb glow-white w-[300px] h-[300px] top-1/2 left-0 -translate-y-1/2 opacity-10" />
          )}
          
          <div className="section-container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Category Header */}
              <motion.div variants={fadeUpVariant} className="mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 text-white/80">
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {category.title}
                </h2>
                <p className="text-lg text-white/60 max-w-2xl">
                  {category.description}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                variants={staggerContainer}
                className="bento-grid"
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    variants={fadeUpVariant}
                    className="glass-card service-card p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {service.name}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative" data-testid="services-cta">
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
              Ready to Unlock<br />Customer Intelligence?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Contact us to discover how our strategic intelligence capabilities 
              can transform your customer understanding and business outcomes.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="services-cta-connect"
              >
                Connect With Us
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                data-testid="services-cta-download"
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

export default Services;
