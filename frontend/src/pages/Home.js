import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Home = () => {
  const problems = [
    {
      title: 'Unclear Growth Levers',
      description: 'You know revenue could be higher, but can\'t pinpoint which customer segments, channels, or products actually drive profitable growth—and which drain resources.'
    },
    {
      title: 'Competitive Noise',
      description: 'Your positioning sounds like everyone else. Sales can\'t articulate why prospects should choose you in 30 seconds. Buyers default to price comparisons.'
    },
    {
      title: 'Scattered Execution',
      description: 'You have a strategic plan (maybe even a great one), but six months in, results aren\'t materializing. Teams are misaligned. Resources are burning without clear ROI.'
    }
  ];

  const valueProps = [
    {
      title: 'Fractional Strategic & Marketing Executives',
      description: 'Senior strategic thinking when you need it—without full-time salary, benefits, and equity overhead. Direct access to battle-tested executives who\'ve led Fortune 500 transformations.'
    },
    {
      title: 'Proprietary Intelligence Technology',
      description: 'AI-powered Customer Choice Intelligence and behavioral analytics that predict what drives customer decisions with exceptional accuracy. Not consultant opinions—data-driven insights.'
    },
    {
      title: 'Outcomes, Not Overhead',
      description: 'Structured programs with measurable outcomes. Revenue intelligence roadmaps. Positioning transformations. Execution partnerships. Real results, not endless retainers.'
    }
  ];

  const techPillars = [
    {
      name: 'Intelligence',
      description: 'Powered by OSG Analytics\' ASEMAP™ platform—validated across 60+ countries—that eliminates cultural bias and reveals true customer preferences through forced trade-off methodology.'
    },
    {
      name: 'Strategy',
      description: 'Your fractional CSO/CMO uses predictive personalization to identify which customers to target first, which value propositions will resonate strongest, and where your path of least resistance lies.'
    },
    {
      name: 'Execution',
      description: 'With o360™ platform access, strategies stay current through real-time market intelligence—enabling rapid adaptation as conditions evolve.'
    }
  ];

  const comparisonData = [
    { traditional: 'Experience + Intuition alone', brackett: 'Experience + Predictive Intelligence' },
    { traditional: 'Best guess strategies', brackett: 'Probability-based decisions' },
    { traditional: 'Reactive adjustments', brackett: 'Proactive adaptation' },
    { traditional: 'Hope for success', brackett: 'Confidence scores & validation' },
    { traditional: 'Junior teams do the work', brackett: 'Senior executives lead directly' },
  ];

  const stats = [
    { value: 500, suffix: 'M+', label: 'Revenue Influenced' },
    { value: 50, suffix: '+', label: 'Strategic Projects' },
    { value: 95, suffix: '%', label: 'Client Retention' },
    { value: 12, suffix: '+', label: 'Industries Served' }
  ];

  const auditFeatures = [
    'Proprietary Customer Choice Intelligence technology access',
    'Facilitated session with senior strategists',
    'Comprehensive Strategic Intelligence Brief',
    'Prioritized action roadmap',
    'Follow-up strategy consultation'
  ];

  return (
    <div data-testid="home-page" className="bg-white">
      {/* Hero Section - Now with black accents */}
      <section className="min-h-[80vh] pt-28 pb-16 relative overflow-hidden bg-white" data-testid="hero-section">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#0A0A0A]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#C9A961]/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUpVariant}
                className="text-sm font-semibold text-[#C9A961] mb-4 uppercase tracking-wider"
              >
                Solving Your 3 AM Problem
              </motion.p>
              
              <motion.h1
                variants={fadeUpVariant}
                className="text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.15] mb-6 text-[#0A0A0A]"
              >
                Stop Leaving{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#C9A961] to-[#8B7340] bg-clip-text text-transparent">Millions</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#C9A961]/20 -z-10 rounded"></span>
                </span>{' '}
                on the Table.{' '}
                <br className="hidden md:block" />
                Get the{' '}
                <span className="relative inline-block">
                  <span className="text-[#0A0A0A]" style={{ textShadow: '2px 2px 0px rgba(201, 169, 97, 0.3)' }}>Strategic Intelligence</span>
                </span>{' '}
                You Need—
                <br className="hidden lg:block" />
                <span className="relative">
                  <span className="text-[#6C757D] font-normal italic">Without</span>
                </span>{' '}
                the{' '}
                <span className="relative inline-block group">
                  <span className="relative z-10">Full-Time Overhead</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A961] via-[#D4B87A] to-[#C9A961] rounded-full"></span>
                </span>
                <span className="text-[#C9A961]">.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeUpVariant}
                className="text-lg text-[#6C757D] max-w-xl mb-4 leading-relaxed"
              >
                Fractional Chief Strategy & Marketing Officers equipped with Stanford-born predictive intelligence that identifies which customers will convert, which markets to enter first, and how to win.
              </motion.p>
              
              <motion.p
                variants={fadeUpVariant}
                className="text-base text-[#6C757D] max-w-xl mb-8 leading-relaxed"
              >
                The questions keeping you up at night—unclear growth levers, competitive noise, scattered execution—we solve them. Intelligence-backed fractional executives for mid-market companies who need clarity, not more consultants.
              </motion.p>
              
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="https://form.jotform.com/252728460666061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-black group"
                  data-testid="hero-cta-primary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Strategic Consultation
                  <ArrowRight size={18} className="ml-2 arrow-slide" />
                </motion.a>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/how-we-work"
                    className="btn-secondary border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A]"
                    data-testid="hero-cta-secondary"
                  >
                    Explore Our Approach
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block img-zoom rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGV4ZWN1dGl2ZXxlbnwwfHx8fDE3NzE3MDQwNjV8MA&ixlib=rb-4.1.0&q=85"
                alt="Business strategy meeting"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section - Black background */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]" data-testid="problem-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-4">
                You're Making Million-Dollar Decisions in the Dark
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-[#1A1A1A] rounded-md p-8 border border-[#2A2A2A] card-hover-lift"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center mb-4">
                    <span className="text-[#0A0A0A] font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 md:py-28 bg-white" data-testid="solution-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">What You Actually Need</p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0A0A0A]">
                Intelligence That Executes
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-white rounded-md p-8 border border-[#E9ECEF] shadow-sm hover:shadow-xl hover:border-[#C9A961] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A]">
                    {prop.title}
                  </h3>
                  <p className="text-[#6C757D] leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Differentiator Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/5" data-testid="differentiator-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">The Intelligence Advantage</p>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#0A0A0A] mb-6">
              What Differentiates Our Fractional Executives?
            </h2>
            <p className="text-lg text-[#6C757D] leading-relaxed">
              While others rely on experience and intuition alone, our CSOs and CMOs leverage proprietary predictive intelligence from OSG Analytics. This Stanford-born technology reveals which strategies will succeed before you invest—dramatically de-risking growth initiatives and increasing probability of success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We're Different - Comparison */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="comparison-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Intelligence-Backed Leadership</p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0A0A0A]">
                Traditional vs. Intelligence-Equipped Executives
              </h2>
            </motion.div>
            
            <motion.div
              variants={fadeUpVariant}
              className="max-w-3xl mx-auto bg-white rounded-md overflow-hidden border border-[#E9ECEF] shadow-lg"
            >
              <div className="grid grid-cols-2">
                <div className="bg-[#6C757D] text-white p-4 font-semibold text-center text-sm">
                  Traditional Fractional Executive
                </div>
                <div className="bg-[#0A0A0A] text-white p-4 font-semibold text-center text-sm">
                  Brackett Fractional Executive
                </div>
              </div>
              {comparisonData.map((row, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-2 border-t border-[#E9ECEF] hover:bg-[#F8F9FA] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-4 text-[#6C757D] text-sm">{row.traditional}</div>
                  <div className="p-4 text-[#0A0A0A] font-medium text-sm bg-[#F8F9FA]">{row.brackett}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Partner Section */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]" data-testid="technology-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeUpVariant}>
                <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Technology Partner</p>
                <h2 className="text-[28px] md:text-[36px] font-semibold mb-4 text-white">
                  Powered by OSG Analytics
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our fractional executives are equipped with proprietary predictive intelligence technology developed at Stanford University—IP-protected capabilities that traditional fractional leaders simply don't have access to.
                </p>
                <Link
                  to="/intelligence"
                  className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:gap-3 transition-all"
                >
                  Learn more about our technology advantage
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A961]/20 flex items-center justify-center">
                    <span className="text-[#C9A961] font-bold text-lg">OSG</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">OSG Analytics</p>
                    <p className="text-white/50 text-sm">Strategic Technology Partner</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {['Stanford-born AI platform', '60+ country validation', 'Cultural bias elimination', 'Real-time intelligence monitoring'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check size={16} className="text-[#C9A961]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUpVariant} className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">How We Work</h3>
              <p className="text-white/60">Intelligence → Strategy → Execution</p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {techPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-[#1A1A1A] rounded-md p-8 border border-[#2A2A2A] hover:border-[#C9A961] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-[#C9A961]">
                    {pillar.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="mt-10 flex items-center gap-4">
              <Link
                to="/intelligence"
                className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:underline"
                data-testid="view-intelligence"
              >
                See Our Intelligence Capabilities
                <ArrowRight size={16} />
              </Link>
              <span className="text-white/30">|</span>
              <span className="text-white/60 text-sm">In strategic partnership with OSG Analytics</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - More dynamic */}
      <section className="py-16 bg-white border-y border-[#E9ECEF]" data-testid="stats-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="text-[36px] md:text-[48px] font-bold text-[#0A0A0A]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[#6C757D] text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="leadership-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Leadership</p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0A0A0A]">
                Battle-Tested Leadership. Enterprise-Grade Results.
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                variants={fadeUpVariant} 
                whileHover={{ y: -6 }}
                className="bg-white rounded-md p-8 border border-[#E9ECEF] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0A0A0A]">
                  Erania Brackett, CEO
                </h3>
                <ul className="text-[#6C757D] text-sm space-y-2">
                  <li>Former CMO & Chief Customer Experience Officer, Dentsply Sirona (NYSE: XRAY)</li>
                  <li>Former Independent Board Director, Knowles Corporation (NYSE: KN)</li>
                  <li>Led Fortune 500 transformations across MedTech, Healthcare, Consumer sectors</li>
                  <li>Award-winning marketer with people-first leadership approach</li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={fadeUpVariant} 
                whileHover={{ y: -6 }}
                className="bg-white rounded-md p-8 border border-[#E9ECEF] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#0A0A0A]">
                  Dr. R. Sukumar, President & Global CEO
                </h3>
                <ul className="text-[#6C757D] text-sm space-y-2">
                  <li>25+ years academia and global corporations</li>
                  <li>Former Associate Dean, Indian School of Business</li>
                  <li>Taught at Rutgers, Thunderbird, University of Maryland, Rice University</li>
                  <li>Founder of Stanford-born ASEMAP methodology</li>
                  <li>President & Global CEO, Optimal Strategix Group (OSG Analytics)</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4">
              {['Stanford-Born Methodology', 'NYSE Company Leadership', 'GDPR/HIPAA Compliant', 'OSG Analytics Partnership'].map((badge, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.05, backgroundColor: '#0A0A0A', color: '#fff' }}
                  className="bg-white text-[#0A0A0A] px-4 py-2 rounded-md text-sm font-medium border border-[#E9ECEF] cursor-default transition-all duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Black background */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-[28px] md:text-[36px] font-semibold mb-4 text-white">
              Ready to See What You're Missing?
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-[#C9A961]">
              The Strategic Blindspot Audit
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Half-day intensive revealing the strategic gaps costing your business significant annual opportunity.
            </p>
            
            <div className="bg-[#1A1A1A] rounded-md p-8 border border-[#2A2A2A] text-left mb-8">
              <h4 className="font-semibold text-white mb-4">What You Get:</h4>
              <ul className="space-y-3">
                {auditFeatures.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3 text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check size={16} className="text-[#C9A961] mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/50 italic">
                Premium diagnostic intensive using AI-powered intelligence technology. Investment fully credited toward full engagement.
              </p>
            </div>
            
            <motion.a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-semibold rounded-md hover:bg-[#B8985F] transition-all duration-300 group"
              data-testid="cta-audit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Your Strategic Audit
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
