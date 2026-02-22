import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Intelligence = () => {
  const platforms = [
    {
      name: 'Customer Choice Intelligence',
      tagline: 'Predictive Tradeoff Technology',
      description: 'Measures the magnitude of customer decisions—not just preferences or rankings.',
      howItWorks: [
        'Tests multiple decision attributes without increasing survey length',
        'Pairwise tradeoff algorithm learns in real-time',
        'Captures not just choice, but conviction of choice',
        'Individual-level analysis without expanded sample sizes',
        'Predicts future behavior with exceptional accuracy'
      ],
      whyMatters: 'Traditional market research asks what customers say they want. Our technology predicts what will actually drive their future decisions. That\'s the difference between interesting data and strategic advantage.',
      benefits: [
        { title: 'Accurate', desc: 'Measures conviction, not just preference' },
        { title: 'Efficient', desc: 'Engaging respondent experience prevents fatigue' },
        { title: 'Flexible', desc: 'Handles multiple benefits with many levels each' },
        { title: 'Validated', desc: 'Stanford-born, academically peer-reviewed' }
      ],
      useCases: [
        'Product-market fit validation',
        'Pricing and packaging optimization',
        'Competitive positioning strategy',
        'Innovation pipeline prioritization',
        'Customer segmentation and targeting'
      ],
      partner: 'Powered by OSG Analytics\' ASEMAP methodology'
    },
    {
      name: 'OSG Intelligence Engine',
      tagline: 'AI/ML Analytics Platform',
      description: 'Consolidates structured and unstructured data sources into real-time intelligence dashboards.',
      capabilities: {
        dataIntegration: [
          'Multiple source consolidation (CRM, marketing, sales, product)',
          'Structured and unstructured data processing',
          'Real-time streaming and batch analysis',
          'Secure enterprise infrastructure (GDPR/HIPAA compliant)'
        ],
        aiMl: [
          'Descriptive analytics (what happened)',
          'Predictive analytics (what will happen)',
          'Prescriptive analytics (what to do about it)',
          'Behavioral modeling and cognitive analytics'
        ],
        outputs: [
          'Real-time executive dashboards',
          'Automated intelligence briefs',
          'Trend identification and anomaly detection',
          'Strategic intervention triggers'
        ]
      },
      whyMatters: 'You get live dashboards tracking the metrics that matter—not static PowerPoints collecting dust. Intelligence updates in real-time as market conditions change.',
      partner: 'Powered by OSG Analytics platform'
    },
    {
      name: 'Customer Experience Analytics',
      tagline: 'Advanced CX Measurement',
      description: 'Measures customer sentiment drivers, engagement triggers, and lifetime value optimization opportunities.',
      capabilities: {
        npsPlus: [
          'Beyond Net Promoter Score to why customers promote or detract',
          'Sentiment driver identification',
          'Engagement trigger mapping',
          'Retention and churn prediction'
        ],
        journey: [
          'Touchpoint effectiveness analysis',
          'Friction point identification',
          'Behavioral nudge design',
          'Personalization opportunity detection'
        ],
        ltv: [
          'Customer segmentation by profitability',
          'Cross-sell/up-sell opportunity identification',
          'Retention strategy recommendations',
          'Loyalty program design'
        ]
      },
      whyMatters: 'Most companies measure NPS. We tell you why customers feel that way and what interventions will change behavior. That\'s actionable intelligence, not just interesting metrics.',
      partner: 'Powered by OSG Analytics\' o360 platform'
    }
  ];

  const comparisonData = [
    { traditional: 'Survey-based opinions', brackett: 'AI-powered predictive analytics' },
    { traditional: 'Static reports', brackett: 'Real-time dashboards' },
    { traditional: 'Generic frameworks', brackett: 'Proprietary algorithms' },
    { traditional: 'Consultant judgment', brackett: 'Data-driven insights' },
    { traditional: 'One-time deliverable', brackett: 'Ongoing intelligence platform' }
  ];

  const securityFeatures = [
    'GDPR compliant (EU data protection)',
    'HIPAA compliant (healthcare data security)',
    'SOC 2 certified data centers',
    'End-to-end encryption',
    'Role-based access controls'
  ];

  return (
    <div data-testid="intelligence-page" className="bg-[#FAFAF8]">
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
                Proprietary Technology. Predictive Intelligence.
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
              >
                Enterprise-grade AI/ML analytics powered by our strategic partnership with OSG Analytics.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3N8ZW58MHx8fHwxNzcxNzA3ODg2fDA&ixlib=rb-4.1.0&q=85"
                alt="AI technology chip on circuit board"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 border-b border-[#E9ECEF]" data-testid="overview-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4" >
                What Makes Brackett Different
              </h2>
              <p className="text-[#6C757D] leading-relaxed mb-6">
                Most strategy consultants bring experience and frameworks. We bring that plus proprietary intelligence technology that processes customer behavioral data in ways traditional consulting can't.
              </p>
              <div className="bg-[#C9A961]/5 rounded-xl p-6 border border-[#C9A961]/10">
                <h4 className="font-semibold text-[#C9A961] mb-2">Our Strategic Partnership</h4>
                <p className="text-[#6C757D] text-sm leading-relaxed">
                  Brackett Agency partners strategically with OSG Analytics, a leader in AI/ML-powered customer intelligence and behavioral analytics. This partnership gives our clients access to enterprise-grade technology platforms typically reserved for Fortune 500 companies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OSG Partnership Deep Dive */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white" data-testid="osg-partnership">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'white' }}>
                  Powered by OSG Analytics
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  OSG Analytics (Optimal Strategix Group) is a global leader in AI/ML-powered customer intelligence, with 25+ years of research methodology innovation and platforms trusted by Fortune 500 companies worldwide.
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Through our exclusive partnership, Brackett Agency clients gain access to the same enterprise-grade intelligence platforms used by the world's most demanding organizations—at a fraction of the cost of direct engagement.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">25+</div>
                    <div className="text-sm text-white/60">Years of Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">500+</div>
                    <div className="text-sm text-white/60">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C9A961]">50+</div>
                    <div className="text-sm text-white/60">Countries Served</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpVariant}>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">How Brackett + OSG Works</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Brackett Leads Strategy</h4>
                        <p className="text-white/60 text-sm">Our executive team leads client engagements with Fortune 500 CMO experience</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-white">OSG Powers Intelligence</h4>
                        <p className="text-white/60 text-sm">Proprietary AI/ML platforms process customer data with Stanford-validated methodologies</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center flex-shrink-0 text-[#0A0A0A] font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Combined Execution</h4>
                        <p className="text-white/60 text-sm">Strategic recommendations powered by predictive analytics, not just experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* OSG Core Technologies */}
            <motion.div variants={fadeUpVariant} className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">OSG Core Technologies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#C9A961]/50 transition-colors">
                  <h4 className="text-lg font-bold text-[#C9A961] mb-2">ASEMAP</h4>
                  <p className="text-sm text-white/60 mb-4">Stanford-born Adaptive Self-Explication Methodology for Advanced Preferences</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Predictive tradeoff analysis
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Customer choice intelligence
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Academically peer-reviewed
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#C9A961]/50 transition-colors">
                  <h4 className="text-lg font-bold text-[#C9A961] mb-2">o360</h4>
                  <p className="text-sm text-white/60 mb-4">Advanced Customer Experience Analytics Platform</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      NPS+ methodology
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Journey mapping analytics
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Lifetime value optimization
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#C9A961]/50 transition-colors">
                  <h4 className="text-lg font-bold text-[#C9A961] mb-2">AI/ML Engine</h4>
                  <p className="text-sm text-white/60 mb-4">Enterprise Intelligence Processing Platform</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Real-time dashboards
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      Predictive modeling
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      HIPAA/GDPR compliant
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OSG Client Logos */}
      <section className="py-16 bg-white" data-testid="client-logos">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider mb-2">Trusted by Industry Leaders</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                OSG Intelligence Powers Fortune 500 Companies
              </h2>
              <p className="text-[#6C757D] mt-2 max-w-2xl mx-auto">
                Through our partnership with OSG Analytics, you get access to the same technology platforms trusted by these global leaders.
              </p>
            </motion.div>

            {/* Logo Grid - Healthcare/Pharma */}
            <motion.div variants={fadeUpVariant} className="mb-8">
              <p className="text-xs font-semibold text-[#6C757D] uppercase tracking-wider mb-4 text-center">Healthcare & Life Sciences</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                {['Medtronic', 'Philips', 'Novartis', 'Merck', 'Amgen', 'Bayer', 'Boston Scientific', 'GE Healthcare', 'Siemens Healthineers', 'Johnson & Johnson'].map((brand, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[#6C757D] font-semibold text-sm">{brand}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Logo Grid - Consumer & CPG */}
            <motion.div variants={fadeUpVariant} className="mb-8">
              <p className="text-xs font-semibold text-[#6C757D] uppercase tracking-wider mb-4 text-center">Consumer & CPG</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                {['P&G', 'Nestlé', 'PepsiCo', 'Kimberly-Clark', 'Danone', 'Red Bull', 'Natura'].map((brand, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[#6C757D] font-semibold text-sm">{brand}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Logo Grid - Financial & Tech */}
            <motion.div variants={fadeUpVariant}>
              <p className="text-xs font-semibold text-[#6C757D] uppercase tracking-wider mb-4 text-center">Financial Services & Technology</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                {['Cigna', 'BUPA', 'Amazon Pay', 'Leica', 'Metro', 'ADCB'].map((brand, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[#6C757D] font-semibold text-sm">{brand}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform 1: Customer Choice Intelligence */}
      <section className="py-20 md:py-28" data-testid="platform-1">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <div>
                <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider">Platform 1</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" >
                  {platforms[0].name}
                </h2>
                <p className="text-[#6C757D] mt-1">{platforms[0].tagline}</p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <motion.div variants={fadeUpVariant}>
                <p className="text-[#6C757D] leading-relaxed mb-6">
                  {platforms[0].description}
                </p>
                <h4 className="font-semibold text-[#0A0A0A] mb-4">How It Works</h4>
                <ul className="space-y-3">
                  {platforms[0].howItWorks.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#6C757D]">
                      <ArrowRight size={16} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={fadeUpVariant}>
                <div className="bg-[#F8F9FA] rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-[#0A0A0A] mb-3">Why It Matters</h4>
                  <p className="text-[#6C757D] text-sm leading-relaxed">
                    {platforms[0].whyMatters}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {platforms[0].benefits.map((benefit, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-[#E9ECEF]">
                      <Check size={16} className="text-[#0A0A0A] mb-2" />
                      <h5 className="font-semibold text-[#0A0A0A] text-sm">{benefit.title}</h5>
                      <p className="text-[#6C757D] text-xs">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
              <h4 className="font-semibold text-[#0A0A0A] mb-4">Use Cases</h4>
              <div className="flex flex-wrap gap-3">
                {platforms[0].useCases.map((useCase, i) => (
                  <span key={i} className="bg-[#F8F9FA] text-[#6C757D] px-4 py-2 rounded-full text-sm">
                    {useCase}
                  </span>
                ))}
              </div>
              <p className="text-[#C9A961] text-sm mt-4 font-medium">{platforms[0].partner}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform 2: OSG Intelligence Engine */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white" data-testid="platform-2">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <div>
                <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider">Platform 2</p>
                <h2 className="text-2xl md:text-3xl font-bold" >
                  {platforms[1].name}
                </h2>
                <p className="text-white/60 mt-1">{platforms[1].tagline}</p>
              </div>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="text-white/70 leading-relaxed mb-8 max-w-2xl">
              {platforms[1].description}
            </motion.p>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-[#C9A961] mb-4">Data Integration</h4>
                <ul className="space-y-2">
                  {platforms[1].capabilities.dataIntegration.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-[#C9A961] mb-4">AI/ML Analytics</h4>
                <ul className="space-y-2">
                  {platforms[1].capabilities.aiMl.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-[#C9A961] mb-4">Strategic Outputs</h4>
                <ul className="space-y-2">
                  {platforms[1].capabilities.outputs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <ArrowRight size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-3">Why It Matters</h4>
              <p className="text-white/70 leading-relaxed">
                {platforms[1].whyMatters}
              </p>
              <p className="text-[#C9A961] text-sm mt-4 font-medium">{platforms[1].partner}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform 3: Customer Experience Analytics */}
      <section className="py-20 md:py-28" data-testid="platform-3">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <div>
                <p className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider">Platform 3</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" >
                  {platforms[2].name}
                </h2>
                <p className="text-[#6C757D] mt-1">{platforms[2].tagline}</p>
              </div>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="text-[#6C757D] leading-relaxed mb-8 max-w-2xl">
              {platforms[2].description}
            </motion.p>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <h4 className="font-semibold text-[#0A0A0A] mb-4">NPS+ Methodology</h4>
                <ul className="space-y-2">
                  {platforms[2].capabilities.npsPlus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                      <ArrowRight size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <h4 className="font-semibold text-[#0A0A0A] mb-4">Journey Intelligence</h4>
                <ul className="space-y-2">
                  {platforms[2].capabilities.journey.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                      <ArrowRight size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <h4 className="font-semibold text-[#0A0A0A] mb-4">Lifetime Value Optimization</h4>
                <ul className="space-y-2">
                  {platforms[2].capabilities.ltv.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                      <ArrowRight size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-[#F8F9FA] rounded-xl p-6">
              <h4 className="font-semibold text-[#0A0A0A] mb-3">Why It Matters</h4>
              <p className="text-[#6C757D] leading-relaxed">
                {platforms[2].whyMatters}
              </p>
              <p className="text-[#C9A961] text-sm mt-4 font-medium">{platforms[2].partner}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="comparison-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" >
                Technology Advantages
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden border border-[#E9ECEF]">
              <div className="grid grid-cols-2">
                <div className="bg-[#6C757D] text-white p-4 font-semibold text-center text-sm">
                  Traditional Consulting
                </div>
                <div className="bg-[#0A0A0A] text-white p-4 font-semibold text-center text-sm">
                  OSG Intelligence
                </div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-2 border-t border-[#E9ECEF]">
                  <div className="p-4 text-[#6C757D] text-sm">{row.traditional}</div>
                  <div className="p-4 text-[#0A0A0A] font-medium text-sm bg-[#C9A961]/5">{row.brackett}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 md:py-28" data-testid="security-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" >
                  Security & Compliance
                </h2>
                <p className="text-[#6C757D] mt-1">Enterprise-Grade Infrastructure</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUpVariant}>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#6C757D]">
                      <Check size={18} className="text-[#4A7C59] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-[#F8F9FA] rounded-xl p-6">
                <h4 className="font-semibold text-[#0A0A0A] mb-3">Trusted By</h4>
                <p className="text-[#6C757D] text-sm leading-relaxed">
                  Healthcare systems, pharmaceutical companies, medical device manufacturers, financial services firms, and Fortune 500 enterprises with the most demanding security requirements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'white' }}>
              See What Our Intelligence Can Reveal About Your Business
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              The Strategic Blindspot Audit includes access to all three intelligence platforms with analysis of your customer and market data.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              data-testid="cta-audit"
            >
              Request Your Strategic Audit
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Intelligence;
