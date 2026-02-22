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
                {signaturePrograms.map((program, index) => (
                  <div key={index} className="mb-20 last:mb-0">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-14 h-14 rounded-xl bg-[#0A0A0A]/10 flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Target className="text-[#0A0A0A]" size={28} />}
                        {index === 1 && <Compass className="text-[#0A0A0A]" size={28} />}
                        {index === 2 && <Zap className="text-[#0A0A0A]" size={28} />}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" >
                          {program.name}
                        </h2>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <h4 className="font-semibold text-red-800 mb-3">The Problem You're Facing</h4>
                        <p className="text-red-700 text-sm leading-relaxed">{program.problem}</p>
                      </div>
                      <div className="bg-[#0A0A0A]/5 rounded-xl p-6 border border-[#0A0A0A]/10">
                        <h4 className="font-semibold text-[#0A0A0A] mb-3">The Outcome</h4>
                        <p className="text-[#6C757D] text-sm leading-relaxed">{program.outcome}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-[#E9ECEF] mb-8">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Who This Is For</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {program.whoFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">The Process</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {program.phases.map((phase, i) => (
                          <div key={i} className="bg-[#F8F9FA] rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-6 h-6 rounded-full bg-[#C9A961] text-white text-xs flex items-center justify-center font-semibold">
                                {i + 1}
                              </span>
                              <span className="text-xs text-[#6C757D]">Weeks {phase.weeks}</span>
                            </div>
                            <h5 className="font-semibold text-[#0A0A0A] text-sm mb-2">{phase.name}</h5>
                            <ul className="space-y-1">
                              {phase.items.map((item, j) => (
                                <li key={j} className="text-xs text-[#6C757D] flex items-start gap-1">
                                  <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                        <h4 className="font-semibold text-[#0A0A0A] mb-4">What You Get</h4>
                        <ul className="space-y-2">
                          {program.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                              <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                        <div className="flex items-center gap-2 mb-4">
                          <Clock size={18} className="text-[#C9A961]" />
                          <h4 className="font-semibold text-[#0A0A0A]">Timeline</h4>
                        </div>
                        <p className="text-2xl font-bold text-[#0A0A0A]" >
                          {program.timeline}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp size={18} className="text-[#0A0A0A]" />
                          <h4 className="font-semibold text-[#0A0A0A]">Expected ROI</h4>
                        </div>
                        <p className="text-sm text-[#6C757D] leading-relaxed">{program.roi}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        data-testid={`cta-${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Request Consultation
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>

                    {index < signaturePrograms.length - 1 && (
                      <hr className="mt-16 border-[rgba(0,0,0,0.08)]" />
                    )}
                  </div>
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
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4" >
                    Fractional Strategic Executives On Retainer
                  </h2>
                </div>

                {strategicPartnerships.map((partnership, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <div className="bg-white rounded-xl p-8 border border-[#E9ECEF]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#C9A961]/10 flex items-center justify-center flex-shrink-0">
                          <Users className="text-[#C9A961]" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0A0A0A]" >
                            {partnership.name}
                          </h3>
                          <p className="text-[#C9A961] font-medium">{partnership.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-[#6C757D] mb-6">{partnership.description}</p>

                      <div className="bg-[#F8F9FA] rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-[#0A0A0A] mb-3">Who It's For</h4>
                        <ul className="grid md:grid-cols-3 gap-2">
                          {partnership.whoFor.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                              <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-[#0A0A0A] mb-3 flex items-center gap-2">
                            <Calendar size={16} className="text-[#C9A961]" /> Monthly Support
                          </h5>
                          <ul className="space-y-2">
                            {partnership.monthly.map((item, i) => (
                              <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#0A0A0A] mb-3">Quarterly</h5>
                          <ul className="space-y-2">
                            {partnership.quarterly.map((item, i) => (
                              <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {partnership.annual && (
                          <div>
                            <h5 className="font-semibold text-[#0A0A0A] mb-3">Annual</h5>
                            <ul className="space-y-2">
                              {partnership.annual.map((item, i) => (
                                <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                  <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {partnership.premium && (
                          <div>
                            <h5 className="font-semibold text-[#0A0A0A] mb-3">Premium Access</h5>
                            <ul className="space-y-2">
                              {partnership.premium.map((item, i) => (
                                <li key={i} className="text-xs text-[#6C757D] flex items-start gap-1">
                                  <ArrowRight size={10} className="text-[#C9A961] mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t border-[#E9ECEF]">
                        <a
                          href="https://form.jotform.com/252728460666061"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          Discuss Partnership
                          <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4" >
                      The Strategic Blindspot Audit
                    </h2>
                    <p className="text-xl text-[#C9A961]" >
                      What You Can't See Is Costing You More Than You Think
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-8">
                    <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
                    <p className="text-red-700 leading-relaxed">
                      Most mid-market B2B companies are leaving substantial annual opportunity on the table due to strategic blindspots they can't identify from inside the business.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Pre-Work</h4>
                      <ul className="space-y-2">
                        {auditFeatures.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Intensive Facilitated Session</h4>
                      <ul className="space-y-2">
                        {auditSession.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Post-Session Deliverables</h4>
                      <ul className="space-y-2">
                        {auditDeliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                      <h4 className="font-semibold text-[#0A0A0A] mb-4">Technology Access</h4>
                      <ul className="space-y-2">
                        {auditTechnology.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] rounded-xl p-8 text-center mb-8">
                    <h4 className="font-semibold text-[#0A0A0A] mb-4">Value Proposition</h4>
                    <p className="text-[#6C757D] leading-relaxed mb-4">
                      Premium diagnostic intensive using proprietary AI-powered intelligence technology. This isn't a free consultation or sales pitch—it's a strategic diagnostic using enterprise-grade analytics.
                    </p>
                    <p className="text-[#C9A961] font-medium">
                      Investment fully credited toward full engagement.
                    </p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-xl p-8 text-center text-white">
                    <h4 className="font-bold text-xl mb-4" >
                      Why This Matters
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-6">
                      Think of this as insurance against making the wrong strategic bet. You get immediate clarity on where to invest resources, validated by data and senior executive judgment—before committing to a larger transformation program.
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
                  </div>
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
