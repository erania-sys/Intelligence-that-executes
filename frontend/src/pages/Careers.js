import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Target, TrendingUp, Zap, Briefcase, Globe } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Careers = () => {
  const whyJoin = [
    {
      icon: Zap,
      title: 'Predictive Intelligence Advantage',
      description: 'Lead with Stanford-born ASEMAP™ technology that reveals which strategies will succeed before clients invest—capabilities traditional fractional executives don\'t have.'
    },
    {
      icon: Users,
      title: 'Premium Client Engagements',
      description: 'Work with mid-market to enterprise companies on high-impact strategic initiatives, not tactical busywork. Our clients value senior expertise.'
    },
    {
      icon: Globe,
      title: 'Flexible, Senior-Level Work',
      description: 'Design your ideal engagement model. Work with multiple clients, set your schedule, and focus on strategic leadership—not office politics.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Access to cutting-edge AI tools, peer collaboration with other senior executives, and ongoing professional development opportunities.'
    }
  ];

  const roles = [
    {
      title: 'Fractional Chief Strategy Officer',
      type: 'Fractional / Contract',
      description: 'Lead strategic planning, market positioning, and growth initiatives for mid-market companies. Deploy predictive intelligence to identify highest-probability opportunities.',
      responsibilities: [
        'Develop and execute corporate and business unit strategies',
        'Lead market entry and expansion initiatives',
        'Drive M&A strategy and integration planning',
        'Deploy ASEMAP™ intelligence for data-driven decision making',
        'Present strategic recommendations to boards and investors'
      ],
      requirements: [
        '15+ years of strategic leadership experience',
        'Former CSO, VP Strategy, or senior consulting partner',
        'Track record of driving measurable business outcomes',
        'Experience with mid-market or enterprise companies',
        'Strong executive presence and communication skills'
      ]
    },
    {
      title: 'Fractional Chief Marketing Officer',
      type: 'Fractional / Contract',
      description: 'Transform marketing organizations and drive revenue growth through intelligence-backed strategies. Lead positioning, demand generation, and customer experience initiatives.',
      responsibilities: [
        'Develop comprehensive marketing strategies aligned with business goals',
        'Lead brand positioning and messaging initiatives',
        'Drive demand generation and pipeline acceleration',
        'Deploy predictive customer intelligence for targeting',
        'Build and mentor high-performing marketing teams'
      ],
      requirements: [
        '15+ years of marketing leadership experience',
        'Former CMO, VP Marketing, or agency leadership',
        'Proven track record of revenue impact',
        'Experience across B2B and B2C environments',
        'Data-driven approach to marketing decisions'
      ]
    },
    {
      title: 'Fractional Chief Revenue Officer',
      type: 'Fractional / Contract',
      description: 'Align sales, marketing, and customer success to accelerate revenue growth. Use predictive intelligence to optimize the entire revenue engine.',
      responsibilities: [
        'Unify revenue-generating functions under cohesive strategy',
        'Optimize sales processes and go-to-market motions',
        'Drive customer acquisition and expansion revenue',
        'Implement predictive analytics for forecasting',
        'Build scalable revenue operations infrastructure'
      ],
      requirements: [
        '15+ years of revenue leadership experience',
        'Former CRO, VP Sales, or Chief Commercial Officer',
        'Track record of scaling revenue organizations',
        'Experience with complex B2B sales cycles',
        'Strong analytical and operational skills'
      ]
    }
  ];

  const benefits = [
    'Access to ASEMAP™ predictive intelligence platform',
    'o360™ real-time market monitoring tools',
    'Collaborative network of senior executives',
    'Flexible engagement structures',
    'Competitive compensation models',
    'Business development support',
    'Professional liability coverage',
    'Ongoing training and certification'
  ];

  return (
    <div data-testid="careers-page" className="bg-[#FAFAF8]">
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
                Join Our Team
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Lead with Intelligence.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8"
            >
              We're building a network of elite fractional executives who want to deliver exceptional results—powered by predictive intelligence that traditional consultants don't have.
            </motion.p>

            <motion.a
              variants={fadeUpVariant}
              href="#open-roles"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all"
            >
              View Open Roles
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Why Brackett</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                The Fractional Executive Advantage
              </h2>
              <p className="text-[#6C757D] max-w-2xl mx-auto">
                Join a select group of senior executives equipped with technology and support that amplifies your impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyJoin.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-2xl p-8 border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/10 flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-[#C9A961]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{item.title}</h3>
                  <p className="text-[#6C757D] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Advantage Banner */}
      <section className="py-12 bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#C9A961]/20 flex items-center justify-center">
                <Target size={32} className="text-[#C9A961]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Secret Weapon</h3>
                <p className="text-white/60">Stanford-born ASEMAP™ + o360™ platforms</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Predictive Intelligence', '60+ Country Validation', 'Real-Time Monitoring'].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                  <Check size={14} className="text-[#C9A961]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Opportunities</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Open Roles
              </h2>
              <p className="text-[#6C757D] max-w-2xl mx-auto">
                We're seeking experienced executives ready to deliver transformational results for our clients.
              </p>
            </motion.div>

            <div className="space-y-8">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] hover:shadow-xl transition-all"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase size={20} className="text-[#C9A961]" />
                          <span className="text-sm text-[#C9A961] font-medium">{role.type}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A0A0A]">{role.title}</h3>
                      </div>
                      <a
                        href="https://form.jotform.com/252728460666061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1A1A1A] transition-all"
                      >
                        Apply Now
                        <ArrowRight size={16} />
                      </a>
                    </div>
                    
                    <p className="text-[#6C757D] mb-8 leading-relaxed">{role.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-[#0A0A0A] mb-4">Responsibilities</h4>
                        <ul className="space-y-3">
                          {role.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#6C757D]">
                              <Check size={16} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A0A0A] mb-4">Requirements</h4>
                        <ul className="space-y-3">
                          {role.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#6C757D]">
                              <Check size={16} className="text-[#C9A961] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
                Partner Benefits
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#E9ECEF]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-[#C9A961]" />
                    </div>
                    <span className="text-sm text-[#0A0A0A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Ready to Lead with Intelligence?
            </h2>
            <p className="text-white/70 mb-8">
              Join our network of elite fractional executives and transform how strategic decisions are made.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all"
              data-testid="cta-careers"
            >
              Start the Conversation
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
