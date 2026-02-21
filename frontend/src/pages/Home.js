import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, X, Target, Zap, Brain, Shield, BarChart3, Users } from 'lucide-react';
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
      icon: X,
      title: 'Unclear Growth Levers',
      description: 'You know revenue could be higher, but can\'t pinpoint which customer segments, channels, or products actually drive profitable growth—and which drain resources.'
    },
    {
      icon: X,
      title: 'Competitive Noise',
      description: 'Your positioning sounds like everyone else. Sales can\'t articulate why prospects should choose you in 30 seconds. Buyers default to price comparisons.'
    },
    {
      icon: X,
      title: 'Scattered Execution',
      description: 'You have a strategic plan (maybe even a great one), but six months in, results aren\'t materializing. Teams are misaligned. Resources are burning without clear ROI.'
    }
  ];

  const valueProps = [
    {
      icon: Target,
      title: 'Fractional Strategic Executives',
      description: 'Senior strategic thinking when you need it—without full-time salary, benefits, and equity overhead. Direct access to battle-tested executives who\'ve led Fortune 500 transformations.'
    },
    {
      icon: Brain,
      title: 'Proprietary Intelligence Technology',
      description: 'AI-powered Customer Choice Intelligence™ and behavioral analytics that predict what drives customer decisions with exceptional accuracy. Not consultant opinions—data-driven insights.'
    },
    {
      icon: Zap,
      title: 'Outcomes, Not Overhead',
      description: 'Structured programs with measurable outcomes. Revenue intelligence roadmaps. Positioning transformations. Execution partnerships. Real results, not endless retainers.'
    }
  ];

  const techPillars = [
    {
      name: 'Customer Choice Intelligence™',
      description: 'Predictive tradeoff methodology that measures the magnitude of customer decisions—not just preferences. Stanford-born behavioral science.'
    },
    {
      name: 'Brackett Intelligence Engine™',
      description: 'AI/ML-powered analytics platform consolidating structured and unstructured data. Real-time dashboards, predictive modeling, and behavioral analytics.'
    },
    {
      name: 'Customer Experience Analytics™',
      description: 'Advanced NPS+ methodology measuring sentiment drivers and engagement triggers. Journey mapping with behavioral nudge identification.'
    }
  ];

  const comparisonData = [
    { traditional: 'Hourly billing, scope creep', brackett: 'Fixed programs, clear outcomes' },
    { traditional: 'Junior teams do the work', brackett: 'Senior executives lead directly' },
    { traditional: 'Generic frameworks', brackett: 'Proprietary AI/ML technology' },
    { traditional: 'Recommendations you implement', brackett: 'Strategic partnership through execution' },
    { traditional: 'Uncertain timelines', brackett: '90-120 day transformations' },
  ];

  const stats = [
    { value: 500, suffix: 'M+', label: 'Revenue Influenced' },
    { value: 50, suffix: '+', label: 'Strategic Projects' },
    { value: 95, suffix: '%', label: 'Client Retention' },
    { value: 12, suffix: '+', label: 'Industries Served' }
  ];

  const auditFeatures = [
    'Proprietary Customer Choice Intelligence™ technology access',
    'Facilitated session with senior strategists',
    'Comprehensive Strategic Intelligence Brief',
    'Prioritized action roadmap',
    'Follow-up strategy consultation'
  ];

  return (
    <div data-testid="home-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-20 pb-16 relative overflow-hidden" data-testid="hero-section">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF] to-[#FAFAF8]" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#2C2C2C]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Stop Leaving Millions on the Table.
              <br />
              <span className="text-[#8B6F47]">Get the Strategic Intelligence You Need—</span>
              <br />
              Without the Full-Time Overhead.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mb-8 leading-relaxed"
            >
              Fractional strategic executives backed by AI-powered intelligence 
              for mid-market B2B companies who need clarity, not more consultants.
            </motion.p>
            
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="hero-cta-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Strategic Consultation
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/how-we-work"
                  className="btn-secondary"
                  data-testid="hero-cta-secondary"
                >
                  Explore Our Approach
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28" data-testid="problem-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
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
                  className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)]"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <problem.icon className="text-red-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {problem.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="solution-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#B8975A] mb-3 uppercase tracking-wider">What You Actually Need</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Intelligence That Executes.
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
                  className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#2D7B7B]/10 flex items-center justify-center mb-4">
                    <prop.icon className="text-[#2D7B7B]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {prop.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 md:py-28" data-testid="comparison-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#B8975A] mb-3 uppercase tracking-wider">How We're Different</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Not Consultants. Strategic Partners.
              </h2>
            </motion.div>
            
            <motion.div
              variants={fadeUpVariant}
              className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden border border-[rgba(0,0,0,0.05)]"
            >
              <div className="grid grid-cols-2">
                <div className="bg-[#6B6B6B] text-white p-4 font-semibold text-center text-sm">
                  Traditional Consultants
                </div>
                <div className="bg-[#2D7B7B] text-white p-4 font-semibold text-center text-sm">
                  Brackett Agency
                </div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-2 border-t border-[rgba(0,0,0,0.05)]">
                  <div className="p-4 text-[#6B6B6B] text-sm">{row.traditional}</div>
                  <div className="p-4 text-[#2C2C2C] font-medium text-sm bg-[#F5F3EF]/50">{row.brackett}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20 md:py-28 bg-[#2C2C2C] text-white" data-testid="technology-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-2xl mb-16">
              <p className="text-sm font-semibold text-[#B8975A] mb-3 uppercase tracking-wider">Technology</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Powered by Brackett Intelligence Engine™
              </h2>
              <p className="text-white/70 leading-relaxed">
                Enterprise-grade AI/ML analytics powered by our strategic partnership with OSG Analytics.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {techPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/5 rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-3 text-[#B8975A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {pillar.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="mt-10 flex items-center gap-4">
              <Link
                to="/intelligence"
                className="inline-flex items-center gap-2 text-[#B8975A] font-medium hover:underline"
                data-testid="view-intelligence"
              >
                See Our Intelligence Capabilities
                <ArrowRight size={16} />
              </Link>
              <span className="text-white/30">|</span>
              <span className="text-white/50 text-sm">In strategic partnership with OSG Analytics</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F3EF]" data-testid="stats-section">
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
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[#6B6B6B] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 md:py-28" data-testid="leadership-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#B8975A] mb-3 uppercase tracking-wider">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Battle-Tested Leadership. Enterprise-Grade Results.
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Erania Brackett, CEO
                </h3>
                <ul className="text-[#6B6B6B] text-sm space-y-2">
                  <li>• Former CMO & Chief Customer Experience Officer, Dentsply Sirona (NYSE: XRAY)</li>
                  <li>• Former Independent Board Director, Knowles Corporation (NYSE: KN)</li>
                  <li>• Led Fortune 500 transformations across MedTech, Healthcare, Consumer sectors</li>
                  <li>• Award-winning marketer with people-first leadership approach</li>
                </ul>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-bold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Dr. R. Sukumar, President & Global CEO
                </h3>
                <ul className="text-[#6B6B6B] text-sm space-y-2">
                  <li>• 25+ years academia and global corporations</li>
                  <li>• Former Associate Dean, Indian School of Business</li>
                  <li>• Taught at Rutgers, Thunderbird, University of Maryland, Rice University</li>
                  <li>• Founder of Stanford-born ASEMAP™ methodology</li>
                  <li>• President & Global CEO, Optimal Strategix Group (OSG Analytics)</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-6">
              {['Stanford-Born Methodology', 'NYSE Company Leadership', 'GDPR/HIPAA Compliant', 'OSG Analytics Partnership'].map((badge, i) => (
                <span key={i} className="bg-[#F5F3EF] text-[#6B6B6B] px-4 py-2 rounded-full text-sm font-medium">
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to See What You're Missing?
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-[#8B6F47]" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Strategic Blindspot Audit™
            </h3>
            <p className="text-[#6B6B6B] mb-8 leading-relaxed">
              Half-day intensive revealing the strategic gaps costing your business significant annual opportunity.
            </p>
            
            <div className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)] text-left mb-8">
              <h4 className="font-semibold text-[#2C2C2C] mb-4">What You Get:</h4>
              <ul className="space-y-3">
                {auditFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6B6B6B]">
                    <ArrowRight size={16} className="text-[#B8975A] mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[#6B6B6B] italic">
                Premium diagnostic intensive using AI-powered intelligence technology. Investment fully credited toward full engagement.
              </p>
            </div>
            
            <motion.a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="cta-audit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Your Strategic Audit
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
