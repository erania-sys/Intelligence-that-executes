import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Brain, Target, Zap, LineChart, Users, Shield } from 'lucide-react';
import IntelligenceAdvantage from '../components/IntelligenceAdvantage';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const OurApproach = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'We don\'t guess what customers want—we measure it. Our AI-powered analytics predict future behavior with accuracy traditional research can\'t match.',
      details: [
        'Stanford-validated ASEMAP methodology',
        'Behavioral tradeoff analysis',
        'Individual-level predictions at scale'
      ]
    },
    {
      icon: Target,
      title: 'Strategic Execution',
      description: 'Intelligence without execution is just interesting data. We combine Fortune 500 strategic experience with implementation discipline.',
      details: [
        'Fractional CSO/CMO leadership',
        '90-day execution sprints',
        'Measurable business outcomes'
      ]
    },
    {
      icon: Zap,
      title: 'Speed to Impact',
      description: 'Traditional consulting takes months. Our intelligence-first approach delivers actionable insights in weeks.',
      details: [
        'Real-time dashboards, not static reports',
        '30-day strategic clarity',
        'Continuous optimization loops'
      ]
    }
  ];

  const differentiators = [
    {
      traditional: 'Surveys and stated preferences',
      brackett: 'Behavioral analytics revealing true preferences'
    },
    {
      traditional: 'Static reports and recommendations',
      brackett: 'Real-time intelligence dashboards'
    },
    {
      traditional: 'Proven frameworks and best practices',
      brackett: 'Proprietary algorithms customized to your data'
    },
    {
      traditional: 'Project-based engagements',
      brackett: 'Fractional executives embedded with your team'
    },
    {
      traditional: 'Comprehensive analysis phases',
      brackett: 'Actionable insights in weeks'
    }
  ];

  const platforms = [
    {
      name: 'ASEMAP',
      fullName: 'Adaptive Self-Explication Methodology for Advanced Preferences',
      description: 'Stanford-born predictive tradeoff technology that measures what customers will actually do—not what they say they\'ll do.',
      capabilities: [
        'Customer choice prediction',
        'Pricing optimization',
        'Product-market fit validation',
        'Competitive positioning intelligence'
      ],
      validation: 'Academically peer-reviewed and validated across 60+ countries'
    },
    {
      name: 'o360',
      fullName: 'Customer Experience Analytics Platform',
      description: 'Goes beyond NPS to reveal why customers feel the way they do and what interventions will change behavior.',
      capabilities: [
        'Sentiment driver identification',
        'Journey touchpoint analysis',
        'Churn prediction',
        'Lifetime value optimization'
      ],
      validation: 'Trusted by Fortune 500 healthcare, CPG, and financial services companies'
    },
    {
      name: 'AI/ML Engine',
      fullName: 'Enterprise Intelligence Processing',
      description: 'Consolidates your data sources into real-time intelligence dashboards with predictive and prescriptive analytics.',
      capabilities: [
        'Multi-source data integration',
        'Automated intelligence briefs',
        'Trend identification',
        'Strategic intervention triggers'
      ],
      validation: 'GDPR and HIPAA compliant enterprise infrastructure'
    }
  ];

  return (
    <div data-testid="our-approach-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]" data-testid="hero-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider mb-4"
            >
              Why Intelligence Matters
            </motion.p>
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
            >
              The Intelligence Advantage
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-xl text-white/80 leading-relaxed max-w-3xl"
            >
              Most consultants bring experience and frameworks. We bring that plus proprietary AI-powered intelligence that reveals what traditional consulting can't see.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20" data-testid="problem-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
                The Problem with Traditional Consulting
              </h2>
              <p className="text-lg text-[#6C757D] leading-relaxed">
                You've hired consultants before. They delivered impressive presentations filled with industry benchmarks and best practices. Then they left—and nothing changed. The insights were interesting but not actionable. The recommendations were generic, not specific to your business.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white rounded-2xl p-8 md:p-12 border border-[#E9ECEF] shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#6C757D] mb-4">Traditional Approach</h3>
                  <ul className="space-y-3">
                    {differentiators.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#6C757D]">
                        <span className="w-5 h-5 rounded-full bg-[#E9ECEF] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#6C757D]"></span>
                        </span>
                        <span>{item.traditional}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">The Brackett Approach</h3>
                  <ul className="space-y-3">
                    {differentiators.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#0A0A0A]">
                        <span className="w-5 h-5 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-[#0A0A0A]" />
                        </span>
                        <span>{item.brackett}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-white" data-testid="pillars-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider mb-4">Our Foundation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
                Three Pillars of Intelligence-Driven Strategy
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-[#FAFAF8] rounded-xl p-8 border border-[#E9ECEF] hover:border-[#C9A961]/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0A0A0A] flex items-center justify-center mb-6">
                    <pillar.icon size={28} className="text-[#C9A961]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{pillar.title}</h3>
                  <p className="text-[#6C757D] mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                        <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OSG Partnership */}
      <section className="py-20 bg-[#0A0A0A]" data-testid="partnership-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeUpVariant}>
                <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider mb-4">Strategic Technology Partner</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Powered by OSG Analytics
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our intelligence capabilities come from our strategic partnership with OSG Analytics (Optimal Strategix Group)—a global leader in AI/ML-powered customer intelligence with 25+ years of research methodology innovation.
                </p>
                <p className="text-white/80 leading-relaxed mb-8">
                  This partnership gives mid-market companies access to the same enterprise-grade intelligence platforms used by Fortune 500 companies—at a fraction of the cost of direct engagement.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">25+</div>
                    <div className="text-sm text-white/60">Years Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">60+</div>
                    <div className="text-sm text-white/60">Countries Validated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">500+</div>
                    <div className="text-sm text-white/60">Enterprise Clients</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Brackett Leads Strategy</h4>
                        <p className="text-white/60 text-sm">Our fractional executives lead engagements with Fortune 500 CMO experience</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-white">OSG Powers Intelligence</h4>
                        <p className="text-white/60 text-sm">Proprietary AI/ML platforms process your data with Stanford-validated methodologies</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Intelligence Becomes Action</h4>
                        <p className="text-white/60 text-sm">Predictions drive specific interventions with measurable outcomes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="py-20" data-testid="platforms-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider mb-4">Intelligence Platforms</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Proprietary Technology Stack
              </h2>
              <p className="text-[#6C757D] max-w-2xl mx-auto">
                Three integrated platforms that transform customer data into strategic advantage.
              </p>
            </motion.div>

            <div className="space-y-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-8 border border-[#E9ECEF] hover:shadow-lg transition-shadow"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="inline-block bg-[#0A0A0A] text-[#C9A961] px-4 py-2 rounded-lg font-bold text-lg mb-3">
                        {platform.name}
                      </div>
                      <p className="text-sm text-[#6C757D] mb-4">{platform.fullName}</p>
                      <p className="text-[#0A0A0A] leading-relaxed">{platform.description}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Capabilities</h4>
                      <ul className="space-y-2">
                        {platform.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#6C757D]">
                            <Check size={16} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-[#C9A961]/10 rounded-lg p-6 h-full flex items-center">
                        <div>
                          <Shield size={24} className="text-[#C9A961] mb-3" />
                          <p className="text-sm text-[#0A0A0A] font-medium">{platform.validation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Advantage Callout */}
      <IntelligenceAdvantage 
        variant="full"
        title="Why This Matters for Your Business"
        description="Companies using predictive intelligence see 2-3x improvement in marketing ROI, customer retention, and strategic decision accuracy compared to traditional approaches."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See What Our Intelligence Can Reveal
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              The Strategic Blindspot Audit applies all three intelligence platforms to your business—revealing opportunities and threats that traditional analysis misses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:bg-[#B8984F] transition-colors"
                data-testid="cta-audit"
              >
                Request Strategic Audit
                <ArrowRight size={18} />
              </a>
              <Link
                to="/intelligence"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Technology Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
