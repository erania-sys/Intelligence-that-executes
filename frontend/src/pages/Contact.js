import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Mail, MapPin, Clock } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const auditFeatures = [
    'Intensive facilitated session',
    'Customer Choice Intelligence technology access',
    'Comprehensive Strategic Intelligence Brief',
    'Prioritized action roadmap',
    'Follow-up consultation'
  ];

  const faqs = [
    {
      question: 'Who is the Strategic Blindspot Audit for?',
      answer: 'CEOs and leadership teams of B2B companies ($10-50M revenue) who need strategic clarity on growth levers, competitive positioning, or execution effectiveness. Also ideal for PE firms evaluating portfolio company strategic needs.'
    },
    {
      question: 'What makes this different from a free consultation?',
      answer: 'This isn\'t a sales pitch. It\'s a premium diagnostic intensive using proprietary AI-powered intelligence technology. You get immediate strategic insights from senior executives using enterprise-grade analytics—and the investment is fully credited if you proceed with a full engagement.'
    },
    {
      question: 'What if I\'m not ready for a full engagement?',
      answer: 'No problem. The Strategic Blindspot Audit delivers immediate value regardless of whether we work together further. You\'ll leave with a comprehensive intelligence brief and action plan you can implement yourself or with your existing team.'
    },
    {
      question: 'How long does a typical engagement last?',
      answer: 'Our signature programs range from 90-120 days for positioning or revenue intelligence projects. The Growth Execution Accelerator is a 6-month diagnostic + execution partnership. Strategic Intelligence Partnerships (retainers) have minimum commitments with ongoing renewal options.'
    },
    {
      question: 'Do you work remotely or on-site?',
      answer: 'Both. We conduct strategic sessions and workshops on-site or virtually based on your preference. Most intelligence gathering and analysis happens remotely, with strategic working sessions scheduled at key milestones.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We specialize in mid-market B2B companies across Healthcare, MedTech, Pharmaceutical, Financial Services, and B2B Technology. Our proprietary intelligence platforms are built for complex, regulated industries with demanding data security requirements.'
    },
    {
      question: 'Can you help with implementation, or just strategy?',
      answer: 'Both. Unlike traditional consultants who hand you a deck and disappear, we offer execution partnership through our Growth Execution Accelerator and Strategic Intelligence Partnerships. You get strategic thinking plus hands-on support through implementation.'
    },
    {
      question: 'What makes your intelligence technology different?',
      answer: 'Our Customer Choice Intelligence methodology doesn\'t just measure what customers say they want—it predicts what will drive their future decisions with exceptional accuracy. Through our strategic partnership with OSG Analytics, we bring Stanford-born behavioral science combined with AI/ML analytics—technology typically available only to Fortune 500 companies.'
    },
    {
      question: 'How do you work with OSG Analytics?',
      answer: 'OSG Analytics (Optimal Strategix Group) is our strategic technology partner. Dr. R. Sukumar serves as President & Global CEO of OSG and strategic partner to Brackett Agency. This partnership gives our clients access to OSG\'s enterprise-grade ASEMAP and o360 platforms, along with AI/ML analytics infrastructure.'
    }
  ];

  return (
    <div data-testid="contact-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F8F9FA] to-[#FAFAF8]" data-testid="hero-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A2B4A]"
              >
                Ready to See What You're Missing?
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
              >
                Request a strategic consultation and discover the opportunities hiding in your business.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/7793715/pexels-photo-7793715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Team collaboration and discussion"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20" data-testid="contact-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form CTA */}
              <motion.div variants={fadeUpVariant}>
                <div className="bg-white rounded-xl p-8 border border-[#E9ECEF] mb-8">
                  <h2 className="text-2xl font-bold text-[#1A2B4A] mb-4" >
                    Request Strategic Consultation
                  </h2>
                  <p className="text-[#6C757D] mb-6 leading-relaxed">
                    Tell us about your strategic challenges and we'll schedule a conversation to explore how we can help.
                  </p>
                  
                  <a
                    href="https://form.jotform.com/252728460666061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                    data-testid="contact-form-cta"
                  >
                    Open Consultation Request Form
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                  
                  <p className="text-[#6C757D] text-xs mt-4 text-center">
                    Your information is secure and will never be shared.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-[#F8F9FA] rounded-xl p-8">
                  <h3 className="text-lg font-bold text-[#1A2B4A] mb-6" >
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-[#C9A961] mt-1" />
                      <div>
                        <p className="text-sm text-[#6C757D]">Email</p>
                        <a href="mailto:erania@brackett.agency" className="text-[#1A2B4A] font-medium hover:text-[#C9A961] transition-colors">
                          erania@brackett.agency
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-[#C9A961] mt-1" />
                      <div>
                        <p className="text-sm text-[#6C757D]">Office Hours</p>
                        <p className="text-[#1A2B4A] font-medium">Monday-Friday, 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Strategic Blindspot Audit */}
              <motion.div variants={fadeUpVariant}>
                <div className="bg-[#1A2B4A] rounded-xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2" >
                    The Strategic Blindspot Audit
                  </h2>
                  <p className="text-white/80 mb-6">
                    Premium diagnostic intensive using AI-powered intelligence technology.
                  </p>
                  
                  <h4 className="font-semibold mb-4">What You Get:</h4>
                  <ul className="space-y-3 mb-6">
                    {auditFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-white mt-1 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <p className="text-white/80 text-sm">
                      <span className="font-semibold text-white">Value:</span> Premium diagnostic intensive with full credit toward engagement.
                    </p>
                  </div>
                  
                  <a
                    href="https://form.jotform.com/252728460666061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#1A2B4A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center"
                    data-testid="cta-audit"
                  >
                    Request Your Strategic Audit
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]" data-testid="faq-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]" >
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
    </div>
  );
};

export default Contact;
