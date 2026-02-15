import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const About = () => {
  const values = [
    {
      title: 'Insight-Driven',
      description: 'Every recommendation is backed by advanced analytics and real customer data.'
    },
    {
      title: 'Execution-Focused',
      description: 'We don\'t just strategize—we partner with you to implement and deliver results.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We align our efforts with your strategic goals.'
    },
    {
      title: 'Technology-Enabled',
      description: 'We leverage industry-leading platforms to deliver intelligence at scale.'
    }
  ];

  const platforms = [
    {
      name: 'o360',
      tagline: 'Customer Intelligence',
      description: 'Real-time analytics platform for comprehensive customer insights.'
    },
    {
      name: 'PatientX360',
      tagline: 'Healthcare Intelligence',
      description: 'Understanding patient choice and behavior for healthcare organizations.'
    },
    {
      name: 'ASEMAP',
      tagline: 'Choice Analytics',
      description: 'Proprietary technology revealing behavioral drivers behind decisions.'
    }
  ];

  return (
    <div data-testid="about-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F5F3EF]" data-testid="about-hero">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-sm font-medium text-[#2D5A4A] mb-4"
            >
              About Brackett
            </motion.p>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where insight meets execution.
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-xl leading-relaxed"
            >
              At Brackett, everything begins with understanding—your customers, 
              your challenges, and your vision for growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28" data-testid="about-story">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Strategic meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUpVariant}
                className="text-sm font-medium text-[#2D5A4A] mb-3"
              >
                Our Approach
              </motion.p>
              
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Intelligence-powered strategy
              </motion.h2>
              
              <motion.div variants={fadeUpVariant} className="space-y-4 text-[#6B6B6B] text-lg">
                <p className="leading-relaxed">
                  We partner with executive teams to cut through complexity using advanced 
                  customer analytics. Our intelligence goes beyond surface-level data to 
                  reveal the real drivers behind customer decisions.
                </p>
                <p className="leading-relaxed">
                  By understanding the "why" behind customer choice, we help organizations 
                  change behaviors, address individual needs, and build lasting competitive advantage.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="about-platforms">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">Our Intelligence Engine</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Powered by advanced platforms
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl p-8 border border-[rgba(0,0,0,0.05)]"
                >
                  <p className="text-xs font-semibold text-[#2D5A4A] uppercase tracking-wider mb-2">
                    {platform.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {platform.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28" data-testid="about-values">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-medium text-[#2D5A4A] mb-3">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our core values
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="classic-card p-8"
                >
                  <div className="accent-dot mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]" data-testid="about-cta">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to partner with Brackett?
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-[#6B6B6B] max-w-xl mx-auto mb-8"
            >
              Let's explore how our intelligence capabilities can transform your customer understanding.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="about-cta-connect"
              >
                Start a Conversation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link
                to="/services"
                className="btn-secondary"
                data-testid="about-cta-services"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
