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
  MessageSquare,
  Award,
  RefreshCw
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
      description: 'Data-driven insights that inform and accelerate executive decision-making.',
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
      color: 'from-blue-500/20 to-transparent',
      services: [
        {
          icon: <BarChart3 size={24} strokeWidth={1.5} />,
          name: 'Strategic Intelligence & Market Research',
          description: 'Advanced analytics and market intelligence that inform decision-making and reveal competitive opportunities.'
        },
        {
          icon: <Briefcase size={24} strokeWidth={1.5} />,
          name: 'Executive Strategy Development',
          description: 'Senior leader partnership for comprehensive business strategy, growth planning, and market expansion.'
        },
        {
          icon: <Lightbulb size={24} strokeWidth={1.5} />,
          name: 'Innovation Intelligence & Product Strategy',
          description: 'Market-driven innovation frameworks and product development guidance aligned with customer needs.'
        }
      ]
    },
    {
      title: 'Customer Experience & Brand',
      description: 'Transform customer journeys and market positioning through strategic insights.',
      icon: <Users size={32} strokeWidth={1.5} />,
      color: 'from-purple-500/20 to-transparent',
      services: [
        {
          icon: <Users size={24} strokeWidth={1.5} />,
          name: 'Customer Intelligence & Experience Strategy',
          description: 'Data-driven customer experience transformation, journey mapping, and satisfaction optimization.'
        },
        {
          icon: <Rocket size={24} strokeWidth={1.5} />,
          name: 'Strategic Execution Planning & Support',
          description: 'Comprehensive execution roadmaps with ongoing advisory support to ensure successful implementation.'
        },
        {
          icon: <Target size={24} strokeWidth={1.5} />,
          name: 'Brand Intelligence & Market Positioning',
          description: 'Strategic brand development, competitive positioning, and market differentiation strategies.'
        }
      ]
    },
    {
      title: 'Transformation & Leadership',
      description: 'Build organizational capabilities and develop transformational leaders.',
      icon: <RefreshCw size={32} strokeWidth={1.5} />,
      color: 'from-emerald-500/20 to-transparent',
      services: [
        {
          icon: <RefreshCw size={24} strokeWidth={1.5} />,
          name: 'Organizational Transformation Advisory',
          description: 'Change management frameworks and strategic organizational development for sustainable growth.'
        },
        {
          icon: <Award size={24} strokeWidth={1.5} />,
          name: 'Executive Leadership Development',
          description: 'Strategic leadership coaching, executive presence building, and high-performance team development.'
        },
        {
          icon: <MessageSquare size={24} strokeWidth={1.5} />,
          name: 'Strategic Communications & Reputation',
          description: 'Executive communications strategy, thought leadership development, and stakeholder engagement.'
        }
      ]
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
              Comprehensive advisory services designed to transform your organization's 
              strategic capabilities and drive measurable business outcomes.
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
              Through data-driven insight and strategic execution, we help brands 
              make smarter decisions and build lasting competitive advantage.
            </p>
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
              Ready to Elevate Your<br />Strategic Capabilities?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
            >
              Contact us to discuss which services best align with your 
              organization's goals and challenges.
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
