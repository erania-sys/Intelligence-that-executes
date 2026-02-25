import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Target, TrendingUp, Zap, BarChart3, Heart, MessageSquare, LineChart, Layers, RefreshCw, Shield } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const CustomerExperience = () => {
  const cxChallenges = [
    {
      problem: 'NPS Plateau',
      description: 'Your Net Promoter Score has flatlined despite significant investment in customer experience initiatives.'
    },
    {
      problem: 'Survey Fatigue',
      description: 'Response rates are dropping, and the feedback you get doesn\'t translate into actionable improvements.'
    },
    {
      problem: 'Touchpoint Confusion',
      description: 'You have dozens of customer touchpoints but no clarity on which ones actually drive loyalty and lifetime value.'
    },
    {
      problem: 'Assumption-Based Decisions',
      description: 'CX investments are based on internal assumptions about what customers want—not behavioral data.'
    }
  ];

  const methodology = [
    {
      icon: Target,
      title: 'Behavioral Preference Mapping',
      description: 'Using ASEMAP™ conjoint methodology, we reveal what customers actually value through forced trade-offs—not what they say in surveys. This eliminates response bias and social desirability effects.',
      outcome: 'True preference hierarchy ranked by behavioral impact'
    },
    {
      icon: Layers,
      title: 'Journey Intelligence Analysis',
      description: 'We overlay behavioral data onto your customer journey to identify which touchpoints truly influence decisions. Not all moments matter equally—we quantify which ones drive conversion and loyalty.',
      outcome: 'Prioritized touchpoint optimization roadmap'
    },
    {
      icon: Users,
      title: 'Needs-Based Segmentation',
      description: 'Traditional demographics miss the point. We segment customers by behavioral patterns and unmet needs, revealing distinct experience expectations for each group.',
      outcome: 'Actionable segments with tailored CX strategies'
    },
    {
      icon: LineChart,
      title: 'Predictive Experience Modeling',
      description: 'Our models predict which experience improvements will have the greatest impact on retention, satisfaction, and lifetime value—before you invest.',
      outcome: 'ROI-prioritized improvement recommendations'
    }
  ];

  const traditionalVsBrackett = [
    { traditional: 'Ask customers what they want', brackett: 'Reveal what customers actually value through trade-offs' },
    { traditional: 'Survey-based insights', brackett: 'Behavioral analytics that eliminate bias' },
    { traditional: 'Treat all touchpoints equally', brackett: 'Prioritize touchpoints by behavioral impact' },
    { traditional: 'One-size-fits-all journey maps', brackett: 'Segment-specific experience strategies' },
    { traditional: 'Reactive improvements', brackett: 'Predictive optimization based on data' },
    { traditional: 'NPS as the primary metric', brackett: 'Multi-dimensional CX measurement framework' }
  ];

  const deliverables = [
    {
      title: 'Customer Experience Intelligence Brief',
      description: 'Comprehensive analysis of customer preferences, pain points, and experience expectations with confidence scores.'
    },
    {
      title: 'Behavioral Journey Map',
      description: 'Visual journey map overlaid with behavioral data showing true touchpoint importance and friction points.'
    },
    {
      title: 'Preference Hierarchy Report',
      description: 'Ranked list of experience attributes by actual customer value—what they\'ll pay for, stay for, and advocate for.'
    },
    {
      title: 'Experience Gap Analysis',
      description: 'Identification of gaps between customer expectations and current experience delivery, prioritized by impact.'
    },
    {
      title: 'Segment-Specific CX Strategies',
      description: 'Tailored experience improvement recommendations for each behavioral segment.'
    },
    {
      title: 'CX Metrics Dashboard',
      description: 'Custom metrics framework with leading indicators that predict business outcomes.'
    }
  ];

  const useCases = [
    {
      title: 'Retention & Loyalty',
      description: 'Identify the experience factors that drive customer retention and reduce churn.',
      results: ['Pinpoint why customers leave', 'Prioritize retention investments', 'Design loyalty-building experiences']
    },
    {
      title: 'Digital Transformation',
      description: 'Ensure digital experiences meet true customer needs, not internal assumptions.',
      results: ['Validate digital feature priorities', 'Optimize self-service experiences', 'Balance digital and human touchpoints']
    },
    {
      title: 'Service Design',
      description: 'Design service experiences that differentiate and drive preference.',
      results: ['Define service standards that matter', 'Train teams on high-impact behaviors', 'Create memorable moments']
    },
    {
      title: 'Voice of Customer Programs',
      description: 'Build VoC programs that generate actionable intelligence, not just data.',
      results: ['Design effective feedback loops', 'Move from metrics to insights', 'Connect VoC to business outcomes']
    }
  ];

  return (
    <div data-testid="customer-experience-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#C9A961]/20 text-[#C9A961] text-xs font-semibold tracking-wider uppercase rounded-full">
                Behavioral CX Intelligence
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Customer Experience{' '}
              <span className="bg-gradient-to-r from-[#C9A961] to-[#8B7340] bg-clip-text text-transparent">
                That Converts.
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8"
            >
              Stop guessing what customers want. Our behavioral analytics reveal the experiences that actually drive loyalty, conversion, and lifetime value—with confidence scores that prioritize your investments.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all"
              >
                Start CX Assessment
                <ArrowRight size={18} />
              </a>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                View CX Program
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The CX Intelligence Gap
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Most companies invest heavily in customer experience but struggle to connect those investments to business outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cxChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="text-red-400 font-semibold mb-2">{challenge.problem}</div>
                  <p className="text-white/60 text-sm">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#C9A961]/10 text-[#C9A961] text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Behavioral Analytics, Not Surveys
              </h2>
              <p className="text-[#6C757D] max-w-2xl mx-auto">
                Powered by ASEMAP™ technology, we reveal what customers actually value through forced trade-off methodology—eliminating the bias that plagues traditional CX research.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {methodology.map((method, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-2xl p-8 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/10 flex items-center justify-center flex-shrink-0">
                      <method.icon size={28} className="text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{method.title}</h3>
                      <p className="text-[#6C757D] mb-4 leading-relaxed">{method.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-[#C9A961]" />
                        <span className="text-[#0A0A0A] font-medium">{method.outcome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traditional vs Brackett Comparison */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Beyond Traditional CX Research
              </h2>
              <p className="text-[#6C757D] max-w-2xl mx-auto">
                See how behavioral CX intelligence compares to conventional approaches.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] shadow-lg"
            >
              <div className="grid grid-cols-2">
                <div className="bg-[#6C757D] text-white p-4 font-semibold text-center">
                  Traditional CX Research
                </div>
                <div className="bg-[#0A0A0A] text-white p-4 font-semibold text-center">
                  Behavioral CX Intelligence
                </div>
              </div>
              {traditionalVsBrackett.map((row, index) => (
                <div key={index} className="grid grid-cols-2 border-b border-[#E9ECEF] last:border-b-0">
                  <div className="p-4 text-[#6C757D] text-sm bg-[#F8F9FA]">{row.traditional}</div>
                  <div className="p-4 text-[#0A0A0A] text-sm font-medium flex items-center gap-2">
                    <Check size={16} className="text-[#C9A961] flex-shrink-0" />
                    {row.brackett}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#C9A961]/10 text-[#C9A961] text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                CX Intelligence Use Cases
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-2xl p-8 border border-[#E9ECEF]"
                >
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{useCase.title}</h3>
                  <p className="text-[#6C757D] mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#6C757D]">
                        <div className="w-1.5 h-1.5 bg-[#C9A961] rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#C9A961]/20 text-[#C9A961] text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                What You Receive
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                CX Intelligence Deliverables
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A961]/20 flex items-center justify-center mb-4">
                    <BarChart3 size={20} className="text-[#C9A961]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUpVariant}>
              <span className="inline-block px-4 py-1.5 bg-[#C9A961]/10 text-[#C9A961] text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                Technology Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Powered by ASEMAP™
              </h2>
              <p className="text-[#6C757D] mb-6 leading-relaxed">
                Our CX intelligence is powered by OSG Analytics' proprietary ASEMAP™ platform—Stanford-born technology validated across 60+ countries that eliminates the cultural and response biases plaguing traditional customer research.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Conjoint methodology reveals true preferences through trade-offs',
                  'Eliminates social desirability bias in customer feedback',
                  'Validated across 60+ countries and diverse markets',
                  'Real-time intelligence monitoring via o360™ platform'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6C757D]">
                    <Check size={18} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/intelligence"
                className="inline-flex items-center gap-2 text-[#C9A961] font-semibold hover:gap-3 transition-all"
              >
                Learn more about our technology
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-[#0A0A0A] rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: 'Bias Elimination', desc: 'Removes cultural and response bias' },
                  { icon: RefreshCw, label: 'Real-Time Updates', desc: 'o360™ continuous monitoring' },
                  { icon: Target, label: 'Precision Targeting', desc: 'Confidence scores on all insights' },
                  { icon: Heart, label: 'True Preferences', desc: 'What customers value, not say' }
                ].map((item, i) => (
                  <div key={i} className="bg-[#1A1A1A] rounded-xl p-4">
                    <item.icon size={24} className="text-[#C9A961] mb-3" />
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-[#6C757D] mb-8">
              Discover what your customers actually value—not what they say they want. Start with a CX intelligence assessment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1A1A1A] transition-all"
              >
                Start CX Assessment
                <ArrowRight size={18} />
              </a>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold px-8 py-4 rounded-xl hover:bg-[#0A0A0A] hover:text-white transition-all"
              >
                View Full CX Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerExperience;
