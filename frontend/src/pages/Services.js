import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Services = () => {
  const serviceCategories = [
    {
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
              className="text-sm font-medium text-[#2D5A4A] mb-4"
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

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 md:py-28 ${categoryIndex % 2 === 1 ? 'bg-[#F5F3EF]' : ''}`}
          data-testid={`service-category-${categoryIndex}`}
        >
          <div className="section-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Category Header */}
              <motion.div variants={fadeUpVariant} className="mb-12">
                <div className="accent-line mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h2>
                <p className="text-lg text-[#6B6B6B] max-w-2xl">
                  {category.description}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    variants={fadeUpVariant}
                    className="classic-card p-8"
                  >
                    <div className="accent-dot mb-4" />
                    <h3 className="text-lg font-bold mb-3 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.name}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-28" data-testid="services-cta">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-[#2D5A4A] rounded-2xl p-10 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to unlock customer intelligence?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us to discover how our strategic intelligence can transform your business outcomes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2D5A4A] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                data-testid="services-cta-connect"
              >
                Connect With Us
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
