import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, DollarSign, Users, CheckCircle, BarChart3, Zap } from 'lucide-react';
import IntelligenceAdvantage from '../components/IntelligenceAdvantage';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Single-Use Medical Device Launch',
      subtitle: 'Optimizing Pricing Strategy for Market Entry',
      industry: 'Medical Devices',
      product: 'Single-Use Cystoscope',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDY2fDB8MXxzZWFyY2h8Mnx8bWVkaWNhbCUyMGRldmljZXxlbnwwfHx8fDE3MDk4MjEyMDB8MA&ixlib=rb-4.0.3&q=85',
      challenge: {
        title: 'The Challenge',
        points: [
          'Entering a market dominated by established reusable scope manufacturers',
          'A significant first-mover competitor already in the single-use space',
          'Limited technical differentiation between competing single-use offerings',
          'Conflicting market intelligence on customer price sensitivity',
          'Need to validate optimal pricing strategy before launch'
        ]
      },
      intelligenceInsight: {
        title: 'The Predictive Intelligence Insight',
        intro: 'Our fractional CSO deployed ASEMAP™ intelligence to reveal what traditional research would have missed:',
        findings: [
          'Mid-size hospital systems showed 68% conversion probability vs. 22% for large academic centers',
          '"Workflow efficiency" ranked 4x higher in actual trade-offs than in survey responses',
          'Cultural response bias had inflated European market interest by 35%'
        ],
        whyMattered: 'Instead of pursuing large prestigious accounts (the obvious target), we focused on mid-size systems where barriers to adoption were lowest.',
        result: 'First three customers closed in 8 weeks instead of projected 6 months.'
      },
      approach: {
        title: 'Our Approach',
        description: 'We deployed our proprietary ASEMAP™ behavioral analytics platform to decode the true drivers of purchasing decisions in this complex B2B healthcare environment.',
        methods: [
          {
            name: 'Behavioral Segmentation',
            description: 'Identified distinct decision-making profiles between urologists and healthcare administrators'
          },
          {
            name: 'Customer Mind Mapping',
            description: 'Mapped the complete decision journey from awareness to purchase'
          },
          {
            name: 'Advanced Choice Modeling',
            description: 'Quantified the tradeoffs customers make between price, features, and brand'
          },
          {
            name: 'Conjoint Analysis (CBC)',
            description: 'Determined optimal price points that maximize both adoption and revenue'
          }
        ]
      },
      results: {
        title: 'The Results',
        metrics: [
          { label: 'Optimal Price Point Identified', value: '$200-225', description: 'Data-validated pricing to maximize revenue' },
          { label: 'Key Differentiators', value: '3', description: 'Distinct value drivers identified to capture market share' },
          { label: 'Behavioral Profiles', value: '2', description: 'Unique decision-maker segments requiring tailored messaging' }
        ],
        outcome: 'Client launched with an optimized pricing and messaging strategy, achieving strong early adoption in a highly competitive market. The data-driven approach eliminated guesswork and provided confidence to leadership and investors.'
      },
      quote: {
        text: 'The intelligence we received transformed our go-to-market strategy. We launched with confidence knowing our pricing was validated by behavioral data, not assumptions.',
        author: 'VP of Marketing',
        company: 'Medical Device Manufacturer'
      }
    },
    {
      id: 2,
      title: 'Breast Reconstruction Market Strategy',
      subtitle: 'Driving Market Share Through Evidence-Based Positioning',
      industry: 'Medical Devices',
      product: 'Surgical Mesh Portfolio',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDY2fDB8MXxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5ODIxMjAwfDA&ixlib=rb-4.0.3&q=85',
      intelligenceInsight: {
        title: 'The Predictive Intelligence Insight',
        intro: 'Our fractional CMO deployed ASEMAP™ intelligence to reveal what traditional research would have missed:',
        findings: [
          '55% of patients actively request specific products, directly influencing surgeon choice',
          'Reimbursement concerns ranked 2.5x higher as a barrier than product performance',
          'Peer recommendations drove 72% of surgeon adoption decisions'
        ],
        whyMattered: 'Instead of focusing on clinical messaging (the standard approach), we prioritized patient education and payer strategy to address actual adoption barriers.',
        result: 'Reduced claim denial rates by 40% and accelerated surgeon adoption through targeted peer programs.'
      },
      challenge: {
        title: 'The Challenge',
        points: [
          'Defending market footprint against aggressive competitors',
          'High rate of insurance claim denials impacting physician adoption',
          'Need to transition existing customers to next-generation product',
          'Lack of differentiated claims in a crowded market',
          'Complex stakeholder landscape: surgeons, administrators, and payers'
        ]
      },
      approach: {
        title: 'Our Approach',
        description: 'We developed a comprehensive market access and positioning strategy that addressed all stakeholder groups while building evidence-based differentiation.',
        methods: [
          {
            name: 'Awareness & Transition Strategy',
            description: 'Technical messaging and peer-to-peer programs with surgeon advocates'
          },
          {
            name: 'Reimbursement Optimization',
            description: 'Mapped payer landscape and developed strategies to reduce denial rates'
          },
          {
            name: 'Real-World Evidence Generation',
            description: 'Built clinical and economic value stories from actual patient outcomes'
          },
          {
            name: 'Stakeholder Engagement',
            description: 'Coordinated messaging across surgeons, administrators, and payers'
          }
        ]
      },
      results: {
        title: 'The Results',
        metrics: [
          { label: 'Patient Influence', value: '55%', description: 'Of patients request specific products, influencing surgeon choice' },
          { label: 'Stakeholder Groups', value: '3', description: 'Aligned messaging across surgeons, admins, and payers' },
          { label: 'Value Stories', value: '4', description: 'Evidence-based narratives for different decision-makers' }
        ],
        outcome: 'The integrated strategy successfully transitioned customers to the next-generation product while improving market access. The evidence-based approach provided surgeons with the tools to advocate for the product and reduced reimbursement barriers.'
      },
      quote: {
        text: 'The depth of customer intelligence and the actionable strategy gave us a clear roadmap to defend and grow our market position.',
        author: 'Director of Market Access',
        company: 'Life Sciences Company'
      }
    }
  ];

  return (
    <div data-testid="case-studies-page" className="bg-[#FAFAF8]">
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
                Proven Results
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Intelligence in Action.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/70 leading-relaxed"
            >
              See how our proprietary ASEMAP™ methodology and strategic intelligence drive measurable outcomes for mid-market companies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                variants={fadeUpVariant}
                data-testid={`case-study-${study.id}`}
                className="relative"
              >
                {/* Case Study Header */}
                <div className={`grid lg:grid-cols-2 gap-12 items-center mb-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#C9A961]/10 text-[#C9A961] text-xs font-semibold rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-[#6C757D] text-sm">{study.product}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-3">
                      {study.title}
                    </h2>
                    <p className="text-lg text-[#6C757D]">{study.subtitle}</p>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A961] rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-10 h-10 text-[#0A0A0A]" />
                    </div>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-2xl p-8 md:p-12 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#C9A961]" />
                    {study.challenge.title}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {study.challenge.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <span className="w-1.5 h-1.5 bg-[#C9A961] rounded-full mt-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Predictive Intelligence Insight Section */}
                {study.intelligenceInsight && (
                  <div className="bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/10 rounded-2xl p-8 md:p-12 mb-8 border border-[#C9A961]/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A961] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#0A0A0A]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A]">{study.intelligenceInsight.title}</h3>
                    </div>
                    <p className="text-[#6C757D] mb-4">{study.intelligenceInsight.intro}</p>
                    <ul className="space-y-3 mb-6">
                      {study.intelligenceInsight.findings.map((finding, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white/60 rounded-lg p-3">
                          <span className="text-[#C9A961] font-bold">•</span>
                          <span className="text-[#0A0A0A]">{finding}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <p className="text-sm text-[#6C757D]">
                        <span className="font-semibold text-[#0A0A0A]">Why this mattered:</span> {study.intelligenceInsight.whyMattered}
                      </p>
                    </div>
                    <div className="bg-[#0A0A0A] rounded-xl p-4">
                      <p className="text-sm text-[#C9A961]">
                        <span className="font-semibold">Result:</span> {study.intelligenceInsight.result}
                      </p>
                    </div>
                  </div>
                )}

                {/* Approach Section */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 border border-[#E9ECEF]">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#C9A961]" />
                    {study.approach.title}
                  </h3>
                  <p className="text-[#6C757D] mb-8">{study.approach.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {study.approach.methods.map((method, i) => (
                      <div key={i} className="bg-[#FAFAF8] rounded-xl p-6">
                        <h4 className="font-semibold text-[#0A0A0A] mb-2">{method.name}</h4>
                        <p className="text-sm text-[#6C757D]">{method.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/5 rounded-2xl p-8 md:p-12 mb-8">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-8 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#C9A961]" />
                    {study.results.title}
                  </h3>
                  
                  {/* Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {study.results.metrics.map((metric, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-[#C9A961] mb-2">
                          {metric.value}
                        </div>
                        <div className="font-semibold text-[#0A0A0A] mb-1">{metric.label}</div>
                        <div className="text-sm text-[#6C757D]">{metric.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-[#C9A961]">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-0.5" />
                      <p className="text-[#0A0A0A] leading-relaxed">{study.results.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12">
                  <div className="flex items-start gap-4">
                    <div className="text-6xl text-[#C9A961] font-serif leading-none">"</div>
                    <div>
                      <p className="text-lg md:text-xl text-white/90 italic mb-6 leading-relaxed">
                        {study.quote.text}
                      </p>
                      <div>
                        <p className="text-[#C9A961] font-semibold">{study.quote.author}</p>
                        <p className="text-white/50 text-sm">{study.quote.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-24 border-b border-[#E9ECEF]"></div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white/70 mb-8">
              Start with a Strategic Blindspot Audit to uncover the opportunities hiding in your business.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all"
              data-testid="cta-audit"
            >
              Request Strategic Audit
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

