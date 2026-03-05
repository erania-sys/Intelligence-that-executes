import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Clock, TrendingUp, Users, Calendar, Target, Compass, Zap, Sparkles, Award, Shield, BarChart3 } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardHoverVariant = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } }
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const tabs = [
    { id: 'programs', label: 'Signature Programs' },
    { id: 'partnerships', label: 'Strategic Partnerships' },
    { id: 'audit', label: 'Diagnostic Audit' }
  ];

  const signaturePrograms = [
    {
      name: 'The Revenue Clarity System',
      problem: 'You know your company is leaving significant revenue on the table annually, but you can\'t pinpoint which customer segments, channels, or products actually drive profitable growth—and which drain resources.',
      outcome: '120-day intelligence-to-execution program identifying your top revenue leaks and opportunities with an executable roadmap for capturing substantial value within 12 months.',
      whoFor: [
        'B2B companies $10-50M revenue with plateaued or chaotic growth',
        'Multiple customer segments but unclear value drivers',
        'Inefficient resource allocation across channels/products',
        'Leadership asking "where should we invest?"'
      ],
      phases: [
        { name: 'Intelligence Gathering', weeks: '1-4', items: ['Customer Choice Intelligence analysis', 'Competitive positioning gap assessment', 'Revenue architecture audit', 'Customer journey friction mapping'] },
        { name: 'Strategic Synthesis', weeks: '5-8', items: ['Priority stack-rank of revenue opportunities', 'Customer segmentation by lifetime value', 'Pricing/packaging optimization', 'Channel effectiveness analysis'] },
        { name: 'Execution Planning', weeks: '9-12', items: ['12-month revenue roadmap with milestones', 'Sales enablement toolkit', 'Marketing optimization plan', 'KPI dashboard with leading indicators'] },
        { name: 'Implementation Support', weeks: '13-16', items: ['Regular strategic review sessions', 'Unlimited async counsel', 'Mid-course corrections', 'Team training on frameworks'] }
      ],
      deliverables: ['Comprehensive Revenue Intelligence Brief', 'Executive presentation for board/investors', '12-month execution playbook', 'Real-time dashboard access', 'Sales enablement toolkit', 'Quarterly review sessions'],
      timeline: '120 days',
      roi: 'Programs designed to identify opportunities that significantly exceed investment'
    },
    {
      name: 'The Market Position Reset',
      problem: 'Your positioning sounds like everyone else. Sales can\'t articulate why prospects should choose you in 30 seconds. Buyers default to price comparisons. Win rates are stagnant.',
      outcome: '90-day positioning transformation that makes you the obvious choice for your ideal customer—measurable by improvements in sales cycle velocity and win rates.',
      whoFor: [
        'Companies struggling with "me-too" positioning',
        'Sales teams losing on price instead of value',
        'Rebranding or market repositioning needed',
        'Mergers/acquisitions requiring unified positioning'
      ],
      phases: [
        { name: 'Customer Intelligence', weeks: '1-4', items: ['Customer Choice Intelligence study', 'Buyer persona deep-dive', '"Jobs to be Done" framework analysis', 'Competitive perception audit'] },
        { name: 'Positioning Strategy', weeks: '5-8', items: ['Differentiation architecture', 'Value proposition hierarchy', 'Competitive positioning map', 'Messaging framework development'] },
        { name: 'Market Activation', weeks: '9-12', items: ['Sales enablement toolkit', 'Website messaging recommendations', 'Content strategy roadmap', 'Sales team training sessions'] }
      ],
      deliverables: ['Comprehensive Positioning Playbook', 'Messaging framework (all personas)', 'Sales enablement toolkit', 'Competitive intelligence dashboard', 'Website copy recommendations', 'Sales training sessions'],
      timeline: '90 days',
      roi: '15-30% improvement in win rates and sales cycle velocity'
    },
    {
      name: 'The Growth Execution Accelerator',
      problem: 'You have a strategic plan (maybe even a great one), but six months in, results aren\'t materializing. Teams are misaligned. You\'re burning significant resources without clear progress.',
      outcome: 'Diagnostic + execution partnership turning strategy into measurable momentum with defined wins achieved within the program timeline.',
      whoFor: [
        'Funded startups with strategy but scattered execution',
        'Mid-market companies with stalled transformation',
        'Post-acquisition integration chaos',
        'Leadership teams needing fractional COO support'
      ],
      phases: [
        { name: 'Execution Diagnostic', weeks: '1-8', items: ['Strategic audit (what\'s blocking progress)', 'Priority conflict analysis', 'Resource allocation assessment', '"Must-Win Battles" identification'] },
        { name: 'Operating System Design', weeks: '9-12', items: ['Strategic priority stack-rank', 'Weekly/monthly operating rhythm', 'Decision-making framework', 'Quarterly scorecard with KPIs', 'Cross-functional alignment'] },
        { name: 'Execution Partnership', weeks: '13-24', items: ['Fractional COO strategic support', 'Regular strategic reviews', 'Real-time dashboard monitoring', 'Unlimited async guidance', 'Quarterly planning facilitation'] }
      ],
      deliverables: ['Comprehensive Execution Diagnostic Report', 'Operating rhythm templates', 'Quarterly scorecard dashboard', 'Multi-month execution roadmap', 'Regular leadership reviews', 'Fractional COO partnership'],
      timeline: '6-month program',
      roi: 'Defined strategic wins achieved, measurable momentum on key initiatives'
    }
  ];

  const strategicPartnerships = [
    {
      name: 'Strategic Intelligence Partnership - Executive',
      subtitle: 'Fractional Chief Strategy Officer on retainer',
      description: 'Senior strategic thinking when you need it, without full-time executive overhead.',
      whoFor: [
        'CEOs managing $20-100M companies',
        'Boards/investors wanting strategic oversight',
        'Companies in transition (growth, acquisition, transformation)'
      ],
      monthly: [
        'Dedicated strategic advisory time',
        'Working sessions (in-person or virtual)',
        'Priority communication access',
        'Ad-hoc strategic counsel on urgent decisions'
      ],
      quarterly: [
        'Market trends and competitive movement analysis',
        'Customer behavior shift insights',
        'Strategic opportunity identification',
        'Real-time dashboard access'
      ],
      annual: [
        'Board/leadership meeting attendance',
        'Strategic offsite facilitation',
        'Quarterly business reviews',
        'Exclusive intelligence briefings'
      ],
      premium: [
        'Priority response time on urgent matters',
        'First access for additional projects',
        'Introduction to strategic network (investors, partners)'
      ]
    },
    {
      name: 'Strategic Intelligence Partnership - Growth',
      subtitle: 'Part-time strategic counsel for high-growth companies',
      description: 'Strategic guidance for companies scaling without full executive overhead.',
      whoFor: [
        'Startups post-Series A scaling $5-20M',
        'Mid-market entering new markets',
        'PE-backed companies in growth mode'
      ],
      monthly: [
        'Strategic advisory time',
        'Regular strategy sessions',
        'Unlimited async guidance',
        'Dashboard access to intelligence platforms'
      ],
      quarterly: [
        'Competitive intelligence updates',
        'Strategic planning facilitation',
        'Performance tracking and optimization',
        'Strategic fire drill support (M&A, pivots, crises)'
      ]
    }
  ];

  const auditFeatures = [
    'Strategic questionnaire and pre-work',
    'Financial data review',
    'Customer data analysis',
    'Marketing analytics audit'
  ];

  const auditSession = [
    'Revenue architecture assessment',
    'Competitive positioning analysis',
    'Execution effectiveness review',
    'Growth blocker identification',
    'Priority opportunity stack-rank'
  ];

  const auditDeliverables = [
    'Comprehensive Strategic Blindspot Brief',
    'Priority opportunity stack-rank',
    'Quick-win action roadmap',
    'Follow-up strategy consultation'
  ];

  const auditTechnology = [
    'Customer Choice Intelligence platform preview',
    'Real-time data visualization',
    'Competitive intelligence dashboard',
    'Behavioral analytics insights'
  ];

  return (
    <div data-testid="solutions-page" className="bg-[#FAFAF8]">
      {/* Hero Section - Premium Enhanced */}
      <section className="pt-28 pb-20 bg-white relative overflow-hidden" data-testid="hero-section">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A961]/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 border border-[#C9A961]/10 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 border border-[#C9A961]/10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#C9A961] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#0A0A0A] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 border-2 border-[#C9A961] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Solution type badges */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex flex-wrap gap-3 mb-6"
              >
                <motion.span 
                  className="px-4 py-2 bg-[#0A0A0A] text-white text-xs font-bold rounded-full inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target size={12} />
                  3 Signature Programs
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-[#C9A961]/10 text-[#C9A961] text-xs font-bold rounded-full border border-[#C9A961]/30 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users size={12} />
                  Strategic Partnerships
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-white text-[#6C757D] text-xs font-bold rounded-full border border-[#E9ECEF] inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <BarChart3 size={12} />
                  Diagnostic Audits
                </motion.span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#0A0A0A]"
              >
                <span className="relative inline-block">
                  Productized
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#C9A961]/30 rounded"></span>
                </span>{' '}
                Solutions.
                <br className="hidden md:block" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#C9A961] to-[#8B7340] bg-clip-text text-transparent">Predictable</span>
                </span>{' '}
                Outcomes<span className="text-[#C9A961]">.</span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed max-w-lg"
              >
                Structured programs designed for the problems mid-market B2B companies actually face.
              </motion.p>

              {/* Quick stats - Enhanced */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex gap-6 md:gap-8 mt-8 flex-wrap"
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">90-180</div>
                  <div className="text-xs text-[#6C757D] mt-1">Day Programs</div>
                </motion.div>
                <div className="w-px bg-[#E9ECEF] hidden md:block"></div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#C9A961]">3x-10x</div>
                  <div className="text-xs text-[#6C757D] mt-1">Typical ROI</div>
                </motion.div>
                <div className="w-px bg-[#E9ECEF] hidden md:block"></div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">100%</div>
                  <div className="text-xs text-[#6C757D] mt-1">Outcome Focus</div>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex flex-wrap gap-4 mt-8"
              >
                <motion.a
                  href="https://form.jotform.com/252728460666061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Link to="/how-we-work" className="btn-secondary">
                  View Our Process
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              {/* Decorative frames */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A961]/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#0A0A0A]/10 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/7433824/pexels-photo-7433824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Business strategy meeting"
                className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
              />
              
              {/* Floating card - bottom left */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E9ECEF] z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center">
                    <Target size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6C757D]">Focus On</p>
                    <p className="font-bold text-[#0A0A0A]">Measurable Results</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - top right */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-[#0A0A0A] rounded-xl p-4 shadow-xl z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A961] flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#0A0A0A]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Average</p>
                    <p className="font-bold text-white">5x ROI</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Value Props Bar */}
      <section className="py-6 bg-[#0A0A0A]">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: Shield, text: 'Outcome Guaranteed' },
              { icon: Award, text: 'Fortune 500 Experience' },
              { icon: Sparkles, text: 'AI-Powered Intelligence' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-[#C9A961]" size={18} />
                <span className="text-white/80 font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation - Enhanced */}
      <section className="border-b border-[rgba(0,0,0,0.08)] sticky top-[72px] bg-white z-40 shadow-sm">
        <div className="section-container">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-[#0A0A0A]' 
                    : 'text-[#6C757D] hover:text-[#0A0A0A]'
                }`}
                data-testid={`tab-${tab.id}`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                    activeTab === tab.id 
                      ? 'bg-[#C9A961] text-white' 
                      : 'bg-[#E9ECEF] text-[#6C757D]'
                  }`}>
                    {index + 1}
                  </span>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A961]"
                    layoutId="activeTab"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24" data-testid="tab-content">
        <div className="section-container">
          <AnimatePresence mode="wait">
            {/* Signature Programs Tab */}
            {activeTab === 'programs' && (
              <motion.div
                key="programs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section Header */}
                <div className="text-center mb-16">
                  <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Signature Programs</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                    Intelligence-to-Execution Programs
                  </h2>
                  <p className="text-[#6C757D] max-w-2xl mx-auto">
                    Structured engagements with defined outcomes, timelines, and measurable ROI.
                  </p>
                </div>

                {signaturePrograms.map((program, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-24 last:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Program Header with Icon */}
                    <div className="flex items-start gap-4 md:gap-6 mb-10">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {index === 0 && <Target className="text-white" size={28} />}
                        {index === 1 && <Compass className="text-white" size={28} />}
                        {index === 2 && <Zap className="text-white" size={28} />}
                      </motion.div>
                      <div>
                        <span className="text-sm font-semibold text-[#C9A961] uppercase tracking-wider">
                          Program {index + 1}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mt-1">
                          {program.name}
                        </h2>
                      </div>
                    </div>

                    {/* Problem/Outcome Cards */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-10">
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl p-6 border border-red-100 relative overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          The Problem You're Facing
                        </h4>
                        <p className="text-red-700 text-sm leading-relaxed relative z-10">{program.problem}</p>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-br from-[#C9A961]/5 to-[#C9A961]/15 rounded-xl p-6 border border-[#C9A961]/20 relative overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A961]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <h4 className="font-semibold text-[#0A0A0A] mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#C9A961] rounded-full"></span>
                          The Outcome
                        </h4>
                        <p className="text-[#6C757D] text-sm leading-relaxed relative z-10">{program.outcome}</p>
                      </motion.div>
                    </div>

                    {/* Who This Is For */}
                    <motion.div 
                      className="bg-white rounded-xl p-6 border border-[#E9ECEF] mb-10 hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="font-semibold text-[#0A0A0A] mb-4 flex items-center gap-2">
                        <Users size={18} className="text-[#C9A961]" />
                        Who This Is For
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {program.whoFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* The Process - Timeline Style */}
                    <div className="mb-10">
                      <h4 className="font-semibold text-[#0A0A0A] mb-6 flex items-center gap-2">
                        <Calendar size={18} className="text-[#C9A961]" />
                        The Process
                      </h4>
                      <div className="relative">
                        {/* Connection line for desktop */}
                        <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A961] via-[#C9A961]/50 to-[#C9A961]/20"></div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {program.phases.map((phase, i) => (
                            <motion.div 
                              key={i} 
                              className="bg-white rounded-xl p-5 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all duration-300 relative"
                              whileHover={{ y: -5 }}
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] text-white text-xs flex items-center justify-center font-bold shadow-md relative z-10">
                                  {i + 1}
                                </span>
                                <span className="text-xs font-medium text-[#C9A961] bg-[#C9A961]/10 px-2 py-1 rounded-full">Weeks {phase.weeks}</span>
                              </div>
                              <h5 className="font-semibold text-[#0A0A0A] text-sm mb-3">{phase.name}</h5>
                              <ul className="space-y-1.5">
                                {phase.items.map((item, j) => (
                                  <li key={j} className="text-xs text-[#6C757D] flex items-start gap-1.5">
                                    <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Cards - Deliverables, Timeline, ROI */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="bg-white rounded-xl p-6 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-[#C9A961]/10 flex items-center justify-center">
                            <Check size={16} className="text-[#C9A961]" />
                          </div>
                          <h4 className="font-semibold text-[#0A0A0A]">What You Get</h4>
                        </div>
                        <ul className="space-y-2">
                          {program.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                              <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] rounded-xl p-6 text-white"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Clock size={18} className="text-[#C9A961]" />
                          <h4 className="font-semibold">Timeline</h4>
                        </div>
                        <p className="text-3xl font-bold text-[#C9A961]">
                          {program.timeline}
                        </p>
                        <p className="text-white/60 text-sm mt-2">Start to completion</p>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/20 rounded-xl p-6 border border-[#C9A961]/30"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp size={18} className="text-[#C9A961]" />
                          <h4 className="font-semibold text-[#0A0A0A]">Expected ROI</h4>
                        </div>
                        <p className="text-sm text-[#6C757D] leading-relaxed">{program.roi}</p>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group"
                        data-testid={`cta-${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Consultation
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                      <Link to="/how-we-work" className="btn-secondary">
                        Learn Our Process
                      </Link>
                    </div>

                    {index < signaturePrograms.length - 1 && (
                      <div className="mt-20 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E9ECEF] to-transparent"></div>
                        <div className="w-2 h-2 rounded-full bg-[#C9A961]"></div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E9ECEF] to-transparent"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Strategic Partnerships Tab */}
            {activeTab === 'partnerships' && (
              <motion.div
                key="partnerships"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section Header */}
                <div className="text-center mb-16">
                  <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Strategic Partnerships</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                    Fractional Strategic Executives On Retainer
                  </h2>
                  <p className="text-[#6C757D] max-w-2xl mx-auto">
                    Senior strategic thinking when you need it, without full-time executive overhead.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {strategicPartnerships.map((partnership, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] hover:shadow-xl hover:border-[#C9A961]/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-[#0A0A0A] to-[#1a1a1a] p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[#C9A961] flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Users className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {partnership.name}
                            </h3>
                            <p className="text-[#C9A961] font-medium text-sm">{partnership.subtitle}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-[#6C757D] mb-6 text-sm leading-relaxed">{partnership.description}</p>

                        {/* Who It's For */}
                        <div className="bg-gradient-to-br from-[#C9A961]/5 to-[#C9A961]/10 rounded-xl p-4 mb-6 border border-[#C9A961]/10">
                          <h4 className="font-semibold text-[#0A0A0A] mb-3 text-sm flex items-center gap-2">
                            <Target size={14} className="text-[#C9A961]" />
                            Who It's For
                          </h4>
                          <ul className="space-y-2">
                            {partnership.whoFor.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#6C757D]">
                                <Check size={12} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Support Tiers */}
                        <div className="space-y-4">
                          <div className="border-l-2 border-[#C9A961] pl-4">
                            <h5 className="font-semibold text-[#0A0A0A] mb-2 text-sm flex items-center gap-2">
                              <Calendar size={14} className="text-[#C9A961]" /> Monthly Support
                            </h5>
                            <ul className="space-y-1">
                              {partnership.monthly.map((item, i) => (
                                <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                  <ArrowRight size={10} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="border-l-2 border-[#C9A961]/60 pl-4">
                            <h5 className="font-semibold text-[#0A0A0A] mb-2 text-sm">Quarterly</h5>
                            <ul className="space-y-1">
                              {partnership.quarterly.map((item, i) => (
                                <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                  <ArrowRight size={10} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {partnership.annual && (
                            <div className="border-l-2 border-[#C9A961]/40 pl-4">
                              <h5 className="font-semibold text-[#0A0A0A] mb-2 text-sm">Annual</h5>
                              <ul className="space-y-1">
                                {partnership.annual.map((item, i) => (
                                  <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                    <ArrowRight size={10} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {partnership.premium && (
                            <div className="bg-[#0A0A0A] rounded-lg p-4">
                              <h5 className="font-semibold text-[#C9A961] mb-2 text-sm flex items-center gap-2">
                                <Sparkles size={14} /> Premium Access
                              </h5>
                              <ul className="space-y-1">
                                {partnership.premium.map((item, i) => (
                                  <li key={i} className="text-xs text-white/70 flex items-start gap-1">
                                    <ArrowRight size={10} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="mt-6 pt-6 border-t border-[#E9ECEF]">
                          <motion.a
                            href="https://form.jotform.com/252728460666061"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full justify-center group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Discuss Partnership
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Diagnostic Audit Tab */}
            {activeTab === 'audit' && (
              <motion.div
                key="audit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-5xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2 bg-[#C9A961]/10 text-[#C9A961] px-4 py-2 rounded-full text-sm font-medium mb-4"
                    >
                      <BarChart3 size={16} />
                      Diagnostic Service
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                      The Strategic Blindspot Audit
                    </h2>
                    <p className="text-xl text-[#C9A961] font-medium">
                      What You Can't See Is Costing You More Than You Think
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <motion.div 
                    className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border border-red-100 mb-10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <Target className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3 text-lg">The Problem</h4>
                        <p className="text-red-700 leading-relaxed">
                          Most mid-market B2B companies are leaving substantial annual opportunity on the table due to strategic blindspots they can't identify from inside the business.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Audit Process Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <motion.div 
                      className="bg-white rounded-xl p-6 border border-[#E9ECEF] hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A961]/10 flex items-center justify-center">
                          <span className="text-[#C9A961] font-bold">01</span>
                        </div>
                        <h4 className="font-semibold text-[#0A0A0A]">Pre-Work</h4>
                      </div>
                      <ul className="space-y-2">
                        {auditFeatures.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-6 border border-[#E9ECEF] hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A961]/10 flex items-center justify-center">
                          <span className="text-[#C9A961] font-bold">02</span>
                        </div>
                        <h4 className="font-semibold text-[#0A0A0A]">Intensive Facilitated Session</h4>
                      </div>
                      <ul className="space-y-2">
                        {auditSession.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-6 border border-[#E9ECEF] hover:shadow-lg hover:border-[#C9A961]/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A961]/10 flex items-center justify-center">
                          <span className="text-[#C9A961] font-bold">03</span>
                        </div>
                        <h4 className="font-semibold text-[#0A0A0A]">Post-Session Deliverables</h4>
                      </div>
                      <ul className="space-y-2">
                        {auditDeliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-br from-[#C9A961]/5 to-[#C9A961]/15 rounded-xl p-6 border border-[#C9A961]/20 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C9A961] flex items-center justify-center">
                          <Sparkles size={18} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-[#0A0A0A]">Technology Access</h4>
                      </div>
                      <ul className="space-y-2">
                        {auditTechnology.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Value Proposition */}
                  <motion.div 
                    className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 text-center mb-10 border border-[#E9ECEF]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C9A961]/10 mb-4">
                      <Award size={24} className="text-[#C9A961]" />
                    </div>
                    <h4 className="font-semibold text-[#0A0A0A] mb-4 text-lg">Value Proposition</h4>
                    <p className="text-[#6C757D] leading-relaxed mb-4 max-w-2xl mx-auto">
                      Premium diagnostic intensive using proprietary AI-powered intelligence technology. This isn't a free consultation or sales pitch—it's a strategic diagnostic using enterprise-grade analytics.
                    </p>
                    <p className="inline-flex items-center gap-2 text-[#C9A961] font-medium bg-[#C9A961]/10 px-4 py-2 rounded-full">
                      <Check size={16} />
                      Investment fully credited toward full engagement.
                    </p>
                  </motion.div>

                  {/* Final CTA Section */}
                  <motion.div 
                    className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#C9A961]/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A961] mb-6">
                        <Target size={28} className="text-white" />
                      </div>
                      <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white">
                        Why This Matters
                      </h4>
                      <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                        Think of this as insurance against making the wrong strategic bet. You get immediate clarity on where to invest resources, validated by data and senior executive judgment—before committing to a larger transformation program.
                      </p>
                      <motion.a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-8 py-4 rounded-lg hover:bg-[#d4b56e] transition-colors shadow-lg group"
                        data-testid="cta-audit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Your Strategic Audit
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
