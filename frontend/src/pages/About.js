import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Award, GraduationCap, Shield, Building } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const About = () => {
  const eraniaExpertise = [
    'Executive strategy and growth planning',
    'Customer experience transformation',
    'Brand positioning and market intelligence',
    'Board governance and strategic oversight',
    'Healthcare, MedTech, and Consumer sectors'
  ];

  const sukumarExpertise = [
    'Customer intelligence and behavioral analytics',
    'Market research methodology',
    'Predictive analytics and AI/ML applications',
    'Academic research and peer-reviewed publications',
    'Global business strategy'
  ];

  const beliefs = [
    { title: 'Intelligence First', desc: 'Strategy without data is guessing. We start with proprietary AI-powered intelligence.' },
    { title: 'Outcomes Over Hours', desc: 'You shouldn\'t pay for our time. You should pay for transformation.' },
    { title: 'Senior Execution', desc: 'You deserve to work with battle-tested executives, not junior consultants.' },
    { title: 'Technology Advantage', desc: 'Enterprise-grade analytics shouldn\'t be limited to Fortune 500 companies.' },
    { title: 'Partnership, Not PowerPoints', desc: 'We don\'t hand you a deck and disappear. We partner through execution.' }
  ];

  const credentials = {
    leadership: [
      'NYSE Company C-Suite Executives',
      'Independent Board Directors',
      'Fortune 500 Transformation Leaders'
    ],
    academic: [
      'Stanford-Born Methodology (ASEMAP)',
      'Top-Tier Business School Faculty',
      'Peer-Reviewed Research Publications'
    ],
    technology: [
      'GDPR Compliant',
      'HIPAA Compliant',
      'SOC 2 Certified Infrastructure'
    ],
    industries: [
      'Healthcare & MedTech',
      'Pharmaceutical',
      'Financial Services',
      'B2B Technology',
      'Consumer Goods & Retail'
    ]
  };

  return (
    <div data-testid="about-page" className="bg-[#FAFAF8]">
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
                Battle-Tested Leadership. Enterprise-Grade Results.
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
              >
                Senior strategic executives who've led Fortune 500 transformations.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc3MTcwNzg4N3ww&ixlib=rb-4.1.0&q=85"
                alt="Professional leadership team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28" data-testid="leadership-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]" >
                Meet Our Team
              </h2>
            </motion.div>

            {/* Erania Brackett */}
            <motion.div variants={fadeUpVariant} className="mb-16">
              <div className="bg-white rounded-xl overflow-hidden border border-[#E9ECEF] hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#C9A961] to-[#6B5A3A] p-8 md:p-12 flex items-center justify-center">
                    <div className="text-center group">
                      <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/30 group-hover:border-white/60 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <img 
                          src="https://customer-assets.emergentagent.com/job_7baffe86-c194-4b68-b67d-b7c4d0c7407e/artifacts/71yeaiw8_Erania%20HeadsShot.jpg"
                          alt="Erania Brackett"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white" >
                        Erania Brackett
                      </h3>
                      <p className="text-white/80">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <p className="text-[#6C757D] leading-relaxed mb-6">
                      Erania is a seasoned C-suite executive and former independent board director for Knowles Corporation (NYSE: KN). As former CMO and Chief Customer Experience Officer at Dentsply Sirona (NYSE: XRAY), she led enterprise-wide transformations across marketing, customer experience, and strategic growth initiatives.
                    </p>
                    <p className="text-[#6C757D] leading-relaxed mb-6">
                      With a proven track record leading Fortune 500 companies through complex market transitions, Erania brings people-first leadership focused on building high-performing teams and driving measurable business outcomes. She's an award-winning marketer who combines strategic thinking with execution excellence.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0A0A0A] mb-3">Expertise</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {eraniaExpertise.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <a href="mailto:erania@brackett.agency" className="text-[#C9A961] hover:underline">
                        erania@brackett.agency
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dr. R. Sukumar */}
            <motion.div variants={fadeUpVariant}>
              <div className="bg-white rounded-xl overflow-hidden border border-[#E9ECEF] hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-8 md:p-12 flex items-center justify-center">
                    <div className="text-center group">
                      <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#C9A961]/30 group-hover:border-[#C9A961]/70 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,97,0.4)]">
                        <img 
                          src="https://customer-assets.emergentagent.com/job_7baffe86-c194-4b68-b67d-b7c4d0c7407e/artifacts/7ugskw9k_Sukumar%20Headshot.png"
                          alt="Dr. R. Sukumar"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white" >
                        Dr. R. Sukumar
                      </h3>
                      <p className="text-[#C9A961] text-sm">President & Global CEO, OSG Analytics</p>
                      <p className="text-white/60 text-xs mt-1">Strategic Technology Partner</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <p className="text-[#6C757D] leading-relaxed mb-6">
                      Dr. Sukumar brings over 25 years of experience spanning academia and global corporations. He has taught at top institutions including Rutgers Business School, Thunderbird School of Global Management, University of Maryland, and Rice University, and served as Associate Dean at the Indian School of Business.
                    </p>
                    <p className="text-[#6C757D] leading-relaxed mb-6">
                      As President & Global CEO of OSG Analytics and strategic technology partner to Brackett Agency, Dr. Sukumar is the architect of the Stanford-born ASEMAP methodology and OSG's AI/ML analytics platforms. His proprietary intelligence frameworks have been academically validated and are used by Fortune 500 companies across CPG, Financial Services, Pharmaceutical, and Healthcare industries.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0A0A0A] mb-3">Expertise</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {sukumarExpertise.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                            <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="story-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6" >
                Why We Founded Brackett Agency
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 md:p-12 border border-[#E9ECEF] mb-12">
                <p className="text-[#6C757D] leading-relaxed mb-6">
                  Mid-market B2B companies face an impossible choice: hire a full-time strategic executive (with lengthy searches, significant salary expectations, and equity), or work with traditional consultants who bill hourly, delegate to junior teams, and hand you a deck without execution support.
                </p>
                <p className="text-[#6C757D] leading-relaxed mb-6">
                  We built Brackett Agency to offer a third option: <span className="font-semibold text-[#0A0A0A]">fractional strategic executives backed by proprietary AI-powered intelligence technology.</span>
                </p>
                <p className="text-[#6C757D] leading-relaxed">
                  You get senior strategic thinking, enterprise-grade analytics, and execution partnership—at a fraction of the cost of full-time hires, with structured outcomes instead of hourly uncertainty.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#0A0A0A] mb-6 text-center" >
                What We Believe
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {beliefs.map((belief, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpVariant}
                    className="bg-white rounded-xl p-6 border border-[#E9ECEF]"
                  >
                    <div className="flex items-start gap-3">
                      <Check size={18} className="text-[#0A0A0A] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0A0A0A] mb-1">{belief.title}</h4>
                        <p className="text-[#6C757D] text-sm">{belief.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnership */}
      <section className="py-20 md:py-28" data-testid="partnership-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Technology Partner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6" >
                OSG Analytics (Optimal Strategix Group)
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto">
              <div className="bg-[#C9A961]/5 rounded-xl p-8 border border-[#C9A961]/10">
                <p className="text-[#6C757D] leading-relaxed mb-6">
                  Brackett Agency partners strategically with OSG Analytics, a global leader in AI/ML-powered customer intelligence and behavioral analytics. This partnership enables us to offer enterprise-grade technology platforms to mid-market companies.
                </p>
                
                <h4 className="font-semibold text-[#0A0A0A] mb-4">OSG Analytics Capabilities:</h4>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {[
                    'ASEMAP: Stanford-born predictive tradeoff methodology',
                    'o360: Advanced customer experience analytics',
                    'AI/ML analytics platform with real-time dashboards',
                    '25+ years of research methodology innovation',
                    'Trusted by Fortune 500 companies across industries'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                      <Check size={14} className="text-[#C9A961] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white rounded-lg p-4 border border-[#E9ECEF]">
                  <h5 className="font-semibold text-[#0A0A0A] mb-2">Why This Partnership Matters</h5>
                  <p className="text-[#6C757D] text-sm">
                    Most mid-market companies can't afford to build or license enterprise-grade intelligence technology. Through our strategic partnership with OSG Analytics, Brackett clients get access to platforms typically reserved for Fortune 500 organizations—at a fraction of the cost.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credentials & Recognition */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white" data-testid="credentials-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold" >
                Credentials & Recognition
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Award className="text-[#C9A961] mb-4" size={28} />
                <h4 className="font-semibold text-white mb-3">Leadership Experience</h4>
                <ul className="space-y-2">
                  {credentials.leadership.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <GraduationCap className="text-[#C9A961] mb-4" size={28} />
                <h4 className="font-semibold text-white mb-3">Academic Foundation</h4>
                <ul className="space-y-2">
                  {credentials.academic.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Shield className="text-[#C9A961] mb-4" size={28} />
                <h4 className="font-semibold text-white mb-3">Technology Standards</h4>
                <ul className="space-y-2">
                  {credentials.technology.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Building className="text-[#C9A961] mb-4" size={28} />
                <h4 className="font-semibold text-white mb-3">Industries Served</h4>
                <ul className="space-y-2">
                  {credentials.industries.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-[#6C757D] mb-8 leading-relaxed">
              Schedule a strategic consultation to discuss how we can help transform your business.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="cta-consultation"
            >
              Request Strategic Consultation
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
