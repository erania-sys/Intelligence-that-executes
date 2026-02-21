import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Palette, PenTool, Megaphone, Users, Sparkles, Heart, Landmark, Monitor, ShoppingBag } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const BrandDesign = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const differentiators = [
    { title: 'Intelligence-Driven', desc: 'Brand strategy built on Customer Choice Intelligence™ data, not creative whims' },
    { title: 'Strategic Foundation', desc: 'Led by former Fortune 500 CMO with NYSE company brand leadership' },
    { title: 'Complete Systems', desc: 'From strategic positioning to visual identity to go-to-market execution' },
    { title: 'Industry Expertise', desc: 'Specialized in Healthcare, MedTech, Financial Services, and B2B Technology' }
  ];

  const serviceCategories = [
    {
      icon: PenTool,
      title: 'Brand Strategy & Positioning',
      services: [
        { name: 'Brand Audit', desc: 'Deep dive into current brand equity, market perception, and alignment with business goals.' },
        { name: 'Competitive Landscape Analysis', desc: 'Market and competitor benchmarking to identify whitespace and positioning opportunities.' },
        { name: 'Brand Strategy Development', desc: 'Comprehensive positioning, value proposition, mission/vision, tone of voice, and narrative development.' },
        { name: 'Brand Architecture', desc: 'Portfolio/hierarchy strategy for multiple brands, sub-brands, or product lines.' }
      ]
    },
    {
      icon: Palette,
      title: 'Visual Identity & Brand Design',
      services: [
        { name: 'Logo Design & Wordmark', desc: 'Strategic logo development that captures your positioning and resonates with target audiences.' },
        { name: 'Visual Identity System', desc: 'Complete brand identity including color palette, typography, iconography, and brand elements.' },
        { name: 'Brand Guidelines', desc: 'Comprehensive brand book with usage rules, voice, design system, and brand storytelling.' },
        { name: 'Naming & Tagline Development', desc: 'Strategic naming through ideation, vetting, shortlist testing, and final recommendation.' }
      ]
    },
    {
      icon: Megaphone,
      title: 'Campaign & Messaging Strategy',
      services: [
        { name: 'Campaign Strategy', desc: 'Integrated campaign concepting, funnel planning, and multichannel roadmap.' },
        { name: 'Messaging Framework', desc: 'Key messages by audience, tier, or product with internal alignment sessions.' },
        { name: 'Go-To-Market Strategy', desc: 'Launch plans for new product, brand, or repositioning with comprehensive communications plan.' }
      ]
    },
    {
      icon: Users,
      title: 'Consulting & Advisory',
      services: [
        { name: 'CMO Advisory Retainer', desc: 'Ongoing access to strategic marketing leadership, brand counsel, and planning.' },
        { name: 'Workshops & Facilitation', desc: 'Brand strategy or positioning workshops with stakeholder teams.' },
        { name: 'Executive Presentations', desc: 'Executive-ready decks and leadership alignment deliverables.' }
      ]
    }
  ];

  const signaturePackages = [
    {
      name: 'Startup Brand Foundation',
      subtitle: 'Perfect for startups ready to professionalize their brand',
      includes: ['Brand strategy and positioning', 'Logo design and wordmark', 'Visual identity system (color, typography, basic elements)', 'Messaging starter kit', 'Basic brand guidelines', 'Business card and letterhead templates'],
      timeline: '8-10 weeks',
      ideal: 'Series A+ startups, new business ventures, spin-offs'
    },
    {
      name: 'Corporate Rebrand',
      subtitle: 'Perfect for established companies undergoing transformation',
      includes: ['Full brand strategy development', 'Naming (if needed) or name evolution', 'Complete visual identity system', 'Comprehensive brand book', 'Internal and external launch plan', 'Brand governance framework', 'Stakeholder engagement strategy'],
      timeline: '12-16 weeks',
      ideal: 'Mid-market companies, M&A integration, market repositioning'
    },
    {
      name: 'Campaign Launch Kit',
      subtitle: 'Perfect for product or brand launches with integrated campaigns',
      includes: ['Campaign strategy and positioning', 'Messaging framework', 'Creative direction and concepting', 'Channel strategy and activation plan', 'Asset production coordination', 'Success metrics and tracking plan'],
      timeline: '10-12 weeks',
      ideal: 'Product launches, new market entry, rebranding campaigns'
    }
  ];

  const industries = [
    {
      icon: Heart,
      name: 'Healthcare & MedTech',
      expertise: 'Brand strategy for medical devices, digital health platforms, healthcare providers, and MedTech innovators navigating regulated markets.',
      services: ['Thought leadership positioning', 'Clinical value proposition development', 'Stakeholder messaging (physicians, administrators, patients)', 'Regulatory-compliant brand guidelines']
    },
    {
      icon: Landmark,
      name: 'Financial Services',
      expertise: 'Brand development for banks, fintechs, credit unions, lending institutions, and wealth management firms establishing trust and differentiation.',
      services: ['Trust and credibility positioning', 'Regulatory-compliant messaging', 'Customer journey mapping', 'Digital transformation branding']
    },
    {
      icon: Monitor,
      name: 'B2B Technology',
      expertise: 'Brand strategy for SaaS, enterprise software, and technology companies cutting through competitive noise.',
      services: ['Technical value proposition translation', 'Category creation/leadership positioning', 'Product marketing alignment', 'Sales enablement integration']
    },
    {
      icon: ShoppingBag,
      name: 'Consumer & Retail',
      expertise: 'Brand development for lifestyle, beauty, food & beverage, and DTC brands seeking growth in saturated categories.',
      services: ['Consumer insights and segmentation', 'Lifestyle brand positioning', 'Omnichannel experience design', 'Social-first brand building']
    }
  ];

  const approach = [
    { num: '01', title: 'Intelligence Foundation', desc: 'We don\'t start with creative concepts. We start with Customer Choice Intelligence™—understanding what actually drives customer decisions in your category.' },
    { num: '02', title: 'Strategic Rigor', desc: 'Every visual decision is backed by strategic positioning. Your logo, colors, typography—all stem from differentiation strategy, not design trends.' },
    { num: '03', title: 'Behavioral Science', desc: 'We integrate OSG Analytics\' behavioral research into brand development—understanding how visual systems influence perception and decision-making.' },
    { num: '04', title: 'Measurable Impact', desc: 'Brand work isn\'t subjective. We track awareness, perception, preference, and conversion metrics to ensure your brand drives business results.' },
    { num: '05', title: 'System Thinking', desc: 'We build brand systems that scale—not just pretty logos. Your brand should work across every touchpoint, channel, and audience.' }
  ];

  const promises = [
    'Senior Leadership: Direct access to former Fortune 500 CMO Erania Brackett—not delegated to junior designers',
    'Strategic Foundation: Every design decision backed by market intelligence and positioning strategy',
    'Complete Systems: From strategy to visual identity to implementation—not piecemeal services',
    'Industry Expertise: Deep experience in Healthcare, MedTech, Financial Services, and B2B Technology',
    'Intelligence Integration: Brand development powered by Customer Choice Intelligence™ and behavioral analytics',
    'Execution Partnership: We don\'t hand you a brand book and disappear—we support implementation'
  ];

  const faqs = [
    {
      question: 'Do you only do brand work for companies using your strategic intelligence services?',
      answer: 'No. While our brand services integrate beautifully with our strategic intelligence programs, we also work with clients who specifically need brand strategy, visual identity, or campaign development as standalone services.'
    },
    {
      question: 'What\'s included in a typical brand project?',
      answer: 'It depends on your needs, but typical projects include strategic positioning, visual identity (logo, colors, typography), brand guidelines, and initial applications (business cards, letterhead, digital templates). We tailor scope to your business objectives and budget.'
    },
    {
      question: 'How is your brand work different from design agencies?',
      answer: 'We\'re led by a former Fortune 500 CMO, not junior designers. Every brand decision is backed by market intelligence and strategic positioning data—using our Customer Choice Intelligence™ technology. You get senior strategic thinking plus design excellence.'
    },
    {
      question: 'Do you handle brand implementation (website, collateral production)?',
      answer: 'We develop the strategy and design systems, then partner with you on implementation. For websites, we provide design direction, messaging, and content strategy—then work with your development team or recommend partners. For collateral, we can produce initial assets and provide templates for your team.'
    },
    {
      question: 'Can you help with naming?',
      answer: 'Yes. We offer strategic naming services including creative ideation, trademark screening, and customer testing. Naming is typically 6-8 weeks as a standalone project or integrated into rebrand timelines.'
    },
    {
      question: 'What if we need a brand refresh, not a complete rebrand?',
      answer: 'We offer brand evolution services—refreshing your visual identity while maintaining brand equity. This is often the right approach for established companies wanting to modernize without starting from scratch.'
    }
  ];

  return (
    <div data-testid="brand-design-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-[#FAFAF8]" data-testid="hero-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A2B4A]"
              style={{  }}
            >
              Build Brands That Command Attention.
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6C757D] leading-relaxed mb-8"
            >
              Strategic brand development and visual identity systems 
              that differentiate you in competitive markets.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="hero-cta-primary"
              >
                Request Brand Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#approach" className="btn-secondary">
                View Our Approach
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 border-b border-[#E9ECEF]" data-testid="intro-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="max-w-3xl mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4A] mb-4" style={{  }}>
                Your Brand Is Your Strategic Advantage
              </h2>
              <p className="text-[#6C757D] leading-relaxed">
                In crowded B2B markets, your brand isn't just a logo—it's the strategic clarity that helps customers choose you over competitors. Brackett Agency combines strategic intelligence with brand design excellence to create identity systems that position you for growth.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-6 border border-[#E9ECEF]"
                >
                  <div className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-[#C9A961] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1A2B4A] mb-1">{item.title}</h4>
                      <p className="text-[#6C757D] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 md:py-28" data-testid="services-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" style={{  }}>
                Brand & Design Services
              </h2>
            </motion.div>

            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A961]/10 flex items-center justify-center">
                    <category.icon className="text-[#C9A961]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2B4A]" style={{  }}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 pl-0 md:pl-16">
                  {category.services.map((service, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                      <h4 className="font-semibold text-[#1A2B4A] mb-2">{service.name}</h4>
                      <p className="text-[#6C757D] text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signature Packages */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="packages-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Packages</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" style={{  }}>
                Signature Packages
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {signaturePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-8 border border-[#E9ECEF] hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A961]/10 mb-4">
                    <Sparkles className="text-[#C9A961]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2B4A] mb-1" style={{  }}>
                    {pkg.name}
                  </h3>
                  <p className="text-[#C9A961] text-sm mb-4">{pkg.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                        <Check size={14} className="text-[#1A2B4A] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-[#E9ECEF]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#6C757D]">Timeline</span>
                      <span className="font-semibold text-[#1A2B4A]">{pkg.timeline}</span>
                    </div>
                    <p className="text-xs text-[#6C757D]">
                      <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="py-20 md:py-28" data-testid="industries-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Specialization</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" style={{  }}>
                Industry Expertise
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-6 border border-[#E9ECEF]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                      <industry.icon className="text-[#C9A961]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A2B4A]" style={{  }}>
                        {industry.name}
                      </h3>
                      <p className="text-[#6C757D] text-sm mt-1">{industry.expertise}</p>
                    </div>
                  </div>
                  <div className="pl-14">
                    <ul className="space-y-1">
                      {industry.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6C757D]">
                          <ArrowRight size={12} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20 md:py-28 bg-[#1A2B4A]" data-testid="approach-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Approach</p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-white">
                Intelligence-Driven Design
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Where Data Meets Design
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/10 rounded-md p-6 border border-white/20"
                >
                  <span className="text-[#C9A961] font-bold text-2xl">
                    {item.num}
                  </span>
                  <h4 className="font-semibold text-white mt-3 mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Brackett Brand Promise */}
      <section className="py-20 md:py-28" data-testid="promise-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" style={{  }}>
                The Brackett Brand Promise
              </h2>
              <p className="text-[#6C757D] mt-4">What You Can Expect</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto">
              <div className="bg-[#F8F9FA] rounded-xl p-8">
                <ul className="space-y-4">
                  {promises.map((promise, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-[#1A2B4A] mt-1 flex-shrink-0" />
                      <span className="text-[#6C757D]">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]" data-testid="faq-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" style={{  }}>
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl border border-[#E9ECEF] overflow-hidden">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#E9ECEF] last:border-b-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF8] transition-colors"
                      data-testid={`faq-${index}`}
                    >
                      <span className="font-semibold text-[#1A2B4A] pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-[#C9A961] flex-shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-[#6C757D] leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#C9A961] to-[#C9A961] text-white" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{  }}>
              Your Brand Is Your Competitive Advantage. Let's Build It.
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Whether you're launching a new brand, repositioning for growth, or refreshing an established identity—Brackett Agency combines strategic intelligence with design excellence to create brands that drive business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1A2B4A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                data-testid="cta-consultation"
              >
                Request Brand Consultation
                <ArrowRight size={16} />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Contact: erania@brackett.agency
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandDesign;
