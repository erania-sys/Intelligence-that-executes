import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const serviceCategories = [
    {
      id: 'strategic',
      title: 'Strategic Intelligence Advisory',
      description: 'Data-driven insights that inform and accelerate executive decision-making.',
      services: [
        {
          name: 'Customer Intelligence & Analytics',
          description: 'Leverage o360 for real-time customer analytics that reveal who your customers are and what drives their decisions.'
        },
        {
          name: 'Choice Analytics & Behavioral Insights',
          description: 'Using ASEMAP to understand the cognitive drivers behind customer choice—moving beyond ratings to understanding.'
        },
        {
          name: 'Predictive Intelligence',
          description: 'Forward-looking analytics that predict customer behavior and enable personalized engagement strategies.'
        }
      ]
    },
    {
      id: 'experience',
      title: 'Customer Experience & Brand',
      description: 'Transform customer journeys and market positioning through experience intelligence.',
      services: [
        {
          name: 'Customer Experience Strategy',
          description: 'Data-driven experience transformation using choice analytics to understand what customers truly want.'
        },
        {
          name: 'Strategic Execution Planning',
          description: 'Comprehensive execution roadmaps with ongoing advisory support to ensure successful implementation.'
        },
        {
          name: 'Brand Intelligence & Positioning',
          description: 'Strategic brand development powered by competitive intelligence and customer perception analytics.'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Intelligence',
      description: 'Specialized patient-centric intelligence for healthcare organizations.',
      services: [
        {
          name: 'Patient Choice Analytics',
          description: 'PatientX360 capabilities to understand healthcare decision-making and the drivers of patient loyalty.'
        },
        {
          name: 'Healthcare Experience Optimization',
          description: 'Transform patient journeys through behavioral insights, improving patient-centricity and outcomes.'
        },
        {
          name: 'Healthcare Market Intelligence',
          description: 'Comprehensive market analysis including competitive positioning and growth opportunity identification.'
        }
      ]
    }
  ];

  return (
    <div data-testid="services-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F5F3EF]" data-testid="services-hero">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-sm font-medium text-[#B8956B] mb-4"
            >
              Our Services
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Intelligence-driven strategic excellence
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed"
            >
              We combine advanced customer analytics with strategic expertise to transform 
              how organizations understand and engage their customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Question */}
      <section className="py-20 md:py-28" data-testid="key-question">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto border border-[rgba(0,0,0,0.05)]"
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Why should anyone buy from you?"
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              We help you find the answer—then use it to change customer behavior. 
              Through choice analytics and behavioral intelligence, we reveal what 
              truly drives decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Categories */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={fadeUpVariant}
                className="bg-white rounded-xl overflow-hidden border border-[rgba(0,0,0,0.05)]"
              >
                {/* Category Header - Clickable */}
                <motion.button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-8 text-left flex items-center justify-between group"
                  whileHover={{ backgroundColor: "rgba(184, 149, 107, 0.05)" }}
                >
                  <div>
                    <div className="accent-line mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#B8956B] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.title}
                    </h2>
                    <p className="text-[#6B6B6B]">
                      {category.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-[#B8956B]" />
                  </motion.div>
                </motion.button>

                {/* Expandable Services */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 grid md:grid-cols-3 gap-6 border-t border-[rgba(0,0,0,0.05)] pt-6">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div
                            key={serviceIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: serviceIndex * 0.1 }}
                            className="p-6 bg-[#FAFAF8] rounded-lg"
                            whileHover={{ 
                              scale: 1.02,
                              backgroundColor: "#F5F3EF"
                            }}
                          >
                            <div className="accent-dot mb-3" />
                            <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {service.name}
                            </h3>
                            <p className="text-[#6B6B6B] text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" data-testid="services-cta">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="cta-gold rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <motion.div 
              className="absolute w-64 h-64 rounded-full bg-white/10 -top-20 -right-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to unlock customer intelligence?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                Contact us to discover how our strategic intelligence can transform your business outcomes.
              </p>
              <motion.a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1A1A1A] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                data-testid="services-cta-connect"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Connect With Us
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
