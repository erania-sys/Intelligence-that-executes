import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Clock, TrendingUp, Users, Calendar, Target, Compass, Zap } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
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
      {/* Hero Section - Enhanced */}
      <section className="pt-28 pb-16 bg-white relative overflow-hidden" data-testid="hero-section">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A961]/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#C9A961] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#0A0A0A] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
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
                <span className="px-4 py-2 bg-[#0A0A0A] text-white text-xs font-bold rounded-full">
                  3 Signature Programs
                </span>
                <span className="px-4 py-2 bg-[#C9A961]/10 text-[#C9A961] text-xs font-bold rounded-full border border-[#C9A961]/30">
                  Strategic Partnerships
                </span>
                <span className="px-4 py-2 bg-white text-[#6C757D] text-xs font-bold rounded-full border border-[#E9ECEF]">
                  Diagnostic Audits
                </span>
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

              {/* Quick stats */}
              <motion.div 
                variants={fadeUpVariant}
                className="flex gap-8 mt-8"
              >
                <div>
                  <div className="text-2xl font-bold text-[#0A0A0A]">90-180</div>
                  <div className="text-xs text-[#6C757D]">Day Programs</div>
                </div>
                <div className="w-px bg-[#E9ECEF]"></div>
                <div>
                  <div className="text-2xl font-bold text-[#C9A961]">3x-10x</div>
                  <div className="text-xs text-[#6C757D]">Typical ROI</div>
                </div>
                <div className="w-px bg-[#E9ECEF]"></div>
                <div>
                  <div className="text-2xl font-bold text-[#0A0A0A]">100%</div>
                  <div className="text-xs text-[#6C757D]">Outcome Focus</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A961]/20 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/7433824/pexels-photo-7433824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Business strategy meeting"
                className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
              />
              {/* Floating card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E9ECEF] z-20"
                animate={{ y: [0, -5, 0] }}
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
            </motion.div>
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
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Our Core Programs</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
                    Signature Programs for Transformative Results
                  </h2>
                  <p className="text-[#6C757D] mt-4 max-w-2xl mx-auto">
                    Each program is designed to solve specific growth challenges with measurable outcomes.
                  </p>
                </motion.div>

                {signaturePrograms.map((program, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-24 last:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Program Header */}
                    <div className="relative mb-10">
                      <div className="flex items-start gap-6">
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
                          <span className="text-xs font-bold text-[#C9A961] uppercase tracking-wider mb-1 block">
                            Program {String(index + 1).padStart(2, '0')}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                            {program.name}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Problem & Outcome Cards */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-10">
                      <motion.div 
                        className="relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border border-red-200 overflow-hidden group"
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                              <span className="text-red-600 text-lg">!</span>
                            </div>
                            <h4 className="font-bold text-red-800">The Problem You're Facing</h4>
                          </div>
                          <p className="text-red-700 leading-relaxed">{program.problem}</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="relative bg-gradient-to-br from-[#C9A961]/5 to-[#C9A961]/15 rounded-2xl p-8 border border-[#C9A961]/30 overflow-hidden group"
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A961]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#C9A961]/30 flex items-center justify-center">
                              <TrendingUp size={18} className="text-[#8B7340]" />
                            </div>
                            <h4 className="font-bold text-[#0A0A0A]">The Outcome</h4>
                          </div>
                          <p className="text-[#6C757D] leading-relaxed">{program.outcome}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Who This Is For */}
                    <motion.div 
                      className="bg-white rounded-2xl p-8 border border-[#E9ECEF] mb-10 hover:border-[#C9A961]/40 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                          <Users size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0A0A0A] text-lg">Who This Is For</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {program.whoFor.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3 p-3 rounded-lg bg-[#F8F9FA] hover:bg-[#C9A961]/10 transition-colors group cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A961] transition-colors">
                              <Check size={12} className="text-[#C9A961] group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-[#6C757D] text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* The Process - Enhanced Timeline */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center">
                          <Calendar size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-[#0A0A0A] text-lg">The Process</h4>
                      </div>
                      <div className="relative">
                        {/* Connection line */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A961] via-[#C9A961]/50 to-[#C9A961]/20"></div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {program.phases.map((phase, i) => (
                            <motion.div 
                              key={i} 
                              className="relative bg-white rounded-2xl p-6 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-xl transition-all duration-300 group"
                              whileHover={{ y: -8 }}
                            >
                              {/* Phase number badge */}
                              <div className="absolute -top-4 left-6">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                                  {i + 1}
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <Clock size={14} className="text-[#C9A961]" />
                                  <span className="text-xs font-semibold text-[#C9A961]">Weeks {phase.weeks}</span>
                                </div>
                                <h5 className="font-bold text-[#0A0A0A] mb-4 group-hover:text-[#C9A961] transition-colors">{phase.name}</h5>
                                <ul className="space-y-2">
                                  {phase.items.map((item, j) => (
                                    <li key={j} className="text-xs text-[#6C757D] flex items-start gap-2">
                                      <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Deliverables, Timeline, ROI Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="bg-white rounded-2xl p-6 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-5">
                          <div className="w-8 h-8 rounded-lg bg-[#C9A961]/20 flex items-center justify-center">
                            <Check size={16} className="text-[#C9A961]" />
                          </div>
                          <h4 className="font-bold text-[#0A0A0A]">What You Get</h4>
                        </div>
                        <ul className="space-y-3">
                          {program.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-2xl p-6 text-white"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-5">
                          <div className="w-8 h-8 rounded-lg bg-[#C9A961]/30 flex items-center justify-center">
                            <Clock size={16} className="text-[#C9A961]" />
                          </div>
                          <h4 className="font-bold text-white">Timeline</h4>
                        </div>
                        <p className="text-3xl font-bold text-[#C9A961] mb-2">
                          {program.timeline}
                        </p>
                        <p className="text-white/60 text-sm">Program Duration</p>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/20 rounded-2xl p-6 border border-[#C9A961]/30"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-2 mb-5">
                          <div className="w-8 h-8 rounded-lg bg-[#C9A961]/30 flex items-center justify-center">
                            <TrendingUp size={16} className="text-[#8B7340]" />
                          </div>
                          <h4 className="font-bold text-[#0A0A0A]">Expected ROI</h4>
                        </div>
                        <p className="text-sm text-[#6C757D] leading-relaxed">{program.roi}</p>
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group"
                        data-testid={`cta-${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Consultation
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
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
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Ongoing Partnerships</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                    Fractional Strategic Executives On Retainer
                  </h2>
                  <p className="text-[#6C757D] max-w-2xl mx-auto">
                    Senior strategic thinking when you need it, without full-time executive overhead.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {strategicPartnerships.map((partnership, index) => (
                    <motion.div 
                      key={index} 
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                        index === 0 ? 'border-[#C9A961]' : 'border-[#E9ECEF] hover:border-[#C9A961]/50'
                      }`}>
                        {/* Partnership Badge */}
                        {index === 0 && (
                          <div className="bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-white text-center py-2 text-sm font-semibold">
                            RECOMMENDED FOR ENTERPRISE
                          </div>
                        )}
                        
                        <div className="p-8 md:p-10">
                          {/* Header */}
                          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                            <motion.div 
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center flex-shrink-0 shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Users className="text-white" size={28} />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">
                                {partnership.name}
                              </h3>
                              <p className="text-[#C9A961] font-semibold mb-3">{partnership.subtitle}</p>
                              <p className="text-[#6C757D] leading-relaxed">{partnership.description}</p>
                            </div>
                          </div>

                          {/* Who It's For */}
                          <div className="bg-gradient-to-r from-[#F8F9FA] to-white rounded-xl p-6 mb-8 border border-[#E9ECEF]">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center">
                                <Target size={16} className="text-white" />
                              </div>
                              <h4 className="font-bold text-[#0A0A0A]">Who It's For</h4>
                            </div>
                            <div className="grid md:grid-cols-3 gap-3">
                              {partnership.whoFor.map((item, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-start gap-2 p-3 rounded-lg bg-white border border-[#E9ECEF] hover:border-[#C9A961]/50 transition-colors"
                                  whileHover={{ x: 3 }}
                                >
                                  <Check size={14} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-[#6C757D]">{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Support Grid */}
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <motion.div 
                              className="bg-[#0A0A0A] rounded-xl p-5 text-white"
                              whileHover={{ y: -5 }}
                            >
                              <div className="flex items-center gap-2 mb-4">
                                <Calendar size={18} className="text-[#C9A961]" />
                                <h5 className="font-semibold text-white">Monthly</h5>
                              </div>
                              <ul className="space-y-2">
                                {partnership.monthly.map((item, i) => (
                                  <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                                    <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div 
                              className="bg-white rounded-xl p-5 border border-[#E9ECEF]"
                              whileHover={{ y: -5 }}
                            >
                              <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={18} className="text-[#C9A961]" />
                                <h5 className="font-semibold text-[#0A0A0A]">Quarterly</h5>
                              </div>
                              <ul className="space-y-2">
                                {partnership.quarterly.map((item, i) => (
                                  <li key={i} className="text-xs text-[#6C757D] flex items-start gap-2">
                                    <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                            {partnership.annual && (
                              <motion.div 
                                className="bg-white rounded-xl p-5 border border-[#E9ECEF]"
                                whileHover={{ y: -5 }}
                              >
                                <div className="flex items-center gap-2 mb-4">
                                  <Compass size={18} className="text-[#C9A961]" />
                                  <h5 className="font-semibold text-[#0A0A0A]">Annual</h5>
                                </div>
                                <ul className="space-y-2">
                                  {partnership.annual.map((item, i) => (
                                    <li key={i} className="text-xs text-[#6C757D] flex items-start gap-2">
                                      <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                            {partnership.premium && (
                              <motion.div 
                                className="bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/20 rounded-xl p-5 border border-[#C9A961]/30"
                                whileHover={{ y: -5 }}
                              >
                                <div className="flex items-center gap-2 mb-4">
                                  <Zap size={18} className="text-[#C9A961]" />
                                  <h5 className="font-semibold text-[#0A0A0A]">Premium</h5>
                                </div>
                                <ul className="space-y-2">
                                  {partnership.premium.map((item, i) => (
                                    <li key={i} className="text-xs text-[#6C757D] flex items-start gap-2">
                                      <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>

                          {/* CTA */}
                          <div className="flex flex-wrap gap-4 pt-6 border-t border-[#E9ECEF]">
                            <motion.a
                              href="https://form.jotform.com/252728460666061"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary group"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Discuss Partnership
                              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                              href="#audit"
                              onClick={(e) => { e.preventDefault(); setActiveTab('audit'); }}
                              className="btn-secondary"
                              whileHover={{ scale: 1.02 }}
                            >
                              Start with an Audit
                            </motion.a>
                          </div>
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
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Target size={16} className="text-[#C9A961]" />
                      Starting Point
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                      The Strategic Blindspot Audit
                    </h2>
                    <p className="text-xl text-[#C9A961] font-semibold">
                      What You Can't See Is Costing You More Than You Think
                    </p>
                  </motion.div>

                  {/* Problem Statement */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border border-red-200 mb-10 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-red-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                          <span className="text-red-600 text-xl font-bold">!</span>
                        </div>
                        <h4 className="font-bold text-red-800 text-lg">The Problem</h4>
                      </div>
                      <p className="text-red-700 leading-relaxed text-lg">
                        Most mid-market B2B companies are leaving substantial annual opportunity on the table due to strategic blindspots they can't identify from inside the business.
                      </p>
                    </div>
                  </motion.div>

                  {/* Audit Process */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <motion.div 
                      className="bg-white rounded-2xl p-8 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#C9A961] flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <h4 className="font-bold text-[#0A0A0A] text-lg">Pre-Work</h4>
                      </div>
                      <ul className="space-y-3">
                        {auditFeatures.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 p-3 rounded-lg bg-[#F8F9FA] hover:bg-[#C9A961]/10 transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                              <Check size={12} className="text-[#C9A961]" />
                            </div>
                            <span className="text-[#6C757D]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-2xl p-8 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#C9A961] flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <h4 className="font-bold text-[#0A0A0A] text-lg">Intensive Session</h4>
                      </div>
                      <ul className="space-y-3">
                        {auditSession.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 p-3 rounded-lg bg-[#F8F9FA] hover:bg-[#C9A961]/10 transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                              <Check size={12} className="text-[#C9A961]" />
                            </div>
                            <span className="text-[#6C757D]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <motion.div 
                      className="bg-gradient-to-br from-[#C9A961]/5 to-[#C9A961]/15 rounded-2xl p-8 border border-[#C9A961]/30"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#C9A961] flex items-center justify-center">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <h4 className="font-bold text-[#0A0A0A] text-lg">Post-Session Deliverables</h4>
                      </div>
                      <ul className="space-y-3">
                        {auditDeliverables.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                              <ArrowRight size={12} className="text-[#8B7340]" />
                            </div>
                            <span className="text-[#6C757D]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-[#0A0A0A] rounded-2xl p-8 text-white"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#C9A961]/30 flex items-center justify-center">
                          <Zap size={20} className="text-[#C9A961]" />
                        </div>
                        <h4 className="font-bold text-white text-lg">Technology Access</h4>
                      </div>
                      <ul className="space-y-3">
                        {auditTechnology.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                              <ArrowRight size={12} className="text-[#C9A961]" />
                            </div>
                            <span className="text-white/80">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Value Proposition */}
                  <motion.div 
                    className="bg-gradient-to-r from-[#F8F9FA] to-white rounded-2xl p-10 text-center mb-10 border border-[#E9ECEF] relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A961] to-[#8B7340] mb-6 shadow-lg">
                        <TrendingUp size={26} className="text-white" />
                      </div>
                      <h4 className="font-bold text-[#0A0A0A] mb-4 text-xl">Value Proposition</h4>
                      <p className="text-[#6C757D] leading-relaxed mb-6 max-w-2xl mx-auto">
                        Premium diagnostic intensive using proprietary AI-powered intelligence technology. This isn't a free consultation or sales pitch—it's a strategic diagnostic using enterprise-grade analytics.
                      </p>
                      <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 text-[#8B7340] px-6 py-3 rounded-full font-semibold">
                        <Check size={18} />
                        Investment fully credited toward full engagement
                      </div>
                    </div>
                  </motion.div>

                  {/* Why This Matters CTA */}
                  <motion.div 
                    className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-2xl p-10 text-center text-white relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
                    <div className="absolute top-20 right-10 w-32 h-32 bg-[#C9A961]/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#C9A961]/10 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <h4 className="font-bold text-2xl mb-6 text-white">
                        Why This Matters
                      </h4>
                      <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
                        Think of this as insurance against making the wrong strategic bet. You get immediate clarity on where to invest resources, validated by data and senior executive judgment—before committing to a larger transformation program.
                      </p>
                      <motion.a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all duration-300 group"
                        data-testid="cta-audit"
                        whileHover={{ scale: 1.02 }}
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

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#C9A961]/5 rounded-full blur-2xl"></div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Target size={16} className="text-[#C9A961]" />
              Ready to Transform?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Find Your Strategic Advantage
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed text-lg">
              Whether you need a focused 90-day program, an ongoing strategic partnership, or a diagnostic audit to identify your biggest opportunities—we have a solution designed for your specific challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all duration-300 group"
                data-testid="final-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
            <p className="text-white/50 text-sm mt-8">
              Contact: erania@brackett.agency
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
