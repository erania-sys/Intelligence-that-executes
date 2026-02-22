import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Building2, Heart, Landmark, Monitor, ShoppingBag } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const HowWeWork = () => {
  const phases = [
    {
      number: '01',
      title: 'Intelligence Gathering',
      subtitle: 'We don\'t start with assumptions. We start with proprietary AI-powered intelligence.',
      color: '#C9A961',
      whatHappens: [
        'Customer Choice Intelligence analysis (understanding decision drivers)',
        'Competitive positioning gap assessment',
        'Behavioral analytics and journey mapping',
        'Market trend and opportunity identification'
      ],
      technology: [
        'OSG Intelligence Engine platform access',
        'Customer Experience Analytics tracking',
        'Predictive modeling and segmentation'
      ],
      deliverables: [
        'Intelligence briefs with data visualizations',
        'Customer decision frameworks',
        'Competitive landscape maps',
        'Real-time dashboards'
      ]
    },
    {
      number: '02',
      title: 'Strategy Development',
      subtitle: 'Intelligence without strategy is just interesting data. We turn insights into executable plans.',
      color: '#C9A961',
      whatHappens: [
        'Priority stack-ranking (high-impact opportunities)',
        'Strategic roadmap development',
        'Positioning and messaging frameworks',
        'Resource allocation recommendations'
      ],
      different: [
        'Senior executives lead strategy (not delegated to junior teams)',
        'Proprietary frameworks, not generic consulting playbooks',
        'Behavioral science integration',
        'Fixed outcomes, not endless scope'
      ],
      deliverables: [
        'Strategic playbooks',
        'Executive presentations for boards/investors',
        'Messaging and positioning toolkits',
        'Financial impact modeling'
      ]
    },
    {
      number: '03',
      title: 'Execution Partnership',
      subtitle: 'We don\'t hand you a deck and disappear. We partner through implementation.',
      color: '#C9A961',
      whatHappens: [
        'Regular strategic reviews',
        'Real-time course corrections',
        'Team training and enablement',
        'Performance tracking and optimization'
      ],
      models: [
        'Signature Programs (90-120 day intensives)',
        'Ongoing Retainers (fractional CSO partnerships)',
        'Hybrid Models (diagnostic + execution support)'
      ],
      deliverables: [
        'Implementation roadmaps',
        'KPI dashboards with leading indicators',
        'Sales enablement toolkits',
        'Quarterly business reviews'
      ]
    }
  ];

  const guarantees = [
    {
      title: 'Outcome Commitment',
      description: 'Our programs are designed to identify and capture opportunities that significantly exceed the program investment. We stand behind our methodology with measurable outcomes.'
    },
    {
      title: 'Technology Advantage',
      description: 'You get access to enterprise-grade AI/ML analytics powered by our strategic partnership with OSG Analytics—technology that most companies would spend significant resources to build in-house.'
    },
    {
      title: 'Senior Execution',
      description: 'You work directly with battle-tested executives who\'ve led Fortune 500 transformations—not junior consultants.'
    }
  ];

  const industries = [
    {
      icon: Heart,
      name: 'Healthcare & MedTech',
      description: 'Product-market fit intelligence, customer journey optimization, digital transformation for providers and medical device companies.'
    },
    {
      icon: Building2,
      name: 'Pharmaceutical',
      description: 'Market research, competitive intelligence, launch strategy, and behavioral analytics for commercial teams.'
    },
    {
      icon: Landmark,
      name: 'Financial Services',
      description: 'Customer lifetime value optimization, retention strategy, brand positioning, and regulatory-compliant intelligence platforms.'
    },
    {
      icon: Monitor,
      name: 'B2B Technology',
      description: 'Revenue architecture, market positioning, sales enablement, and growth execution for SaaS and enterprise software.'
    },
    {
      icon: ShoppingBag,
      name: 'Consumer Goods & Retail',
      description: 'Omnichannel journey mapping, brand differentiation, innovation pipeline, and loyalty program design.'
    }
  ];

  return (
    <div data-testid="how-we-work-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-white" data-testid="hero-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#0A0A0A]"
              >
                Intelligence → Strategy → Execution
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
              >
                Our proven methodology turns customer data into competitive advantage.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwwfHx8fDE3NzE3MDc4ODJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Team collaboration in modern office"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Framework */}
      <section className="py-20 md:py-28" data-testid="methodology-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="mb-20 last:mb-0"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${phase.color}15` }}
                  >
                    <phase.icon size={28} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider">
                      Phase {phase.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mt-1" >
                      {phase.title}
                    </h2>
                    <p className="text-[#6C757D] mt-2 max-w-2xl">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 ml-0 md:ml-22">
                  <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                    <h4 className="font-semibold text-[#0A0A0A] mb-4">What Happens</h4>
                    <ul className="space-y-2">
                      {phase.whatHappens.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                          <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                    <h4 className="font-semibold text-[#0A0A0A] mb-4">
                      {phase.technology ? 'Technology Used' : phase.different ? 'How We\'re Different' : 'Engagement Models'}
                    </h4>
                    <ul className="space-y-2">
                      {(phase.technology || phase.different || phase.models).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                          <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                    <h4 className="font-semibold text-[#0A0A0A] mb-4">Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                          <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white" data-testid="guarantee-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Why Choose Brackett</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Guarantee
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/5 rounded-xl p-8 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3 text-[#C9A961]" >
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 md:py-28" data-testid="industries-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Industries</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]" >
                Industries We Serve
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-6 border border-[#E9ECEF] hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] flex items-center justify-center mb-4">
                    <industry.icon className="text-[#C9A961]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0A0A0A]" >
                    {industry.name}
                  </h3>
                  <p className="text-[#6C757D] text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0A0A]" >
              Ready to Transform Strategy into Results?
            </h2>
            <p className="text-[#6C757D] mb-8 leading-relaxed">
              Schedule a consultation to discuss how our methodology can address your specific strategic challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="cta-consultation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Consultation
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <Link to="/solutions" className="btn-secondary">
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
