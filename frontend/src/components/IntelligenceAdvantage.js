import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

/**
 * IntelligenceAdvantage - Reusable callout component for intelligence messaging
 * 
 * @param {string} variant - 'compact' | 'standard' | 'full' | 'inline'
 * @param {string} title - Custom title (optional)
 * @param {string} description - Custom description (optional)
 * @param {boolean} showLink - Whether to show the "Learn More" link (default: true)
 * @param {string} className - Additional CSS classes
 */
const IntelligenceAdvantage = ({ 
  variant = 'standard', 
  title,
  description,
  showLink = true,
  className = ''
}) => {
  const defaultContent = {
    compact: {
      title: 'Powered by Predictive Intelligence',
      description: 'Stanford-validated AI analytics that reveal what traditional consulting can\'t see.'
    },
    standard: {
      title: 'The Intelligence Advantage',
      description: 'Our strategic recommendations are powered by proprietary AI/ML analytics from OSG Analytics—the same technology trusted by Fortune 500 companies. We don\'t guess what will work. We predict it.'
    },
    full: {
      title: 'Why Intelligence Matters',
      description: 'Traditional consulting relies on experience and frameworks. We combine that with predictive intelligence that processes your actual customer data—revealing opportunities and threats that traditional analysis misses.'
    },
    inline: {
      title: 'Intelligence-Powered',
      description: 'Backed by Stanford-validated predictive analytics.'
    }
  };

  const content = {
    title: title || defaultContent[variant].title,
    description: description || defaultContent[variant].description
  };

  // Compact inline badge
  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 bg-[#C9A961]/10 text-[#C9A961] px-3 py-1.5 rounded-full text-sm font-medium ${className}`}>
        <Brain size={14} />
        <span>{content.title}</span>
      </div>
    );
  }

  // Compact callout
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r from-[#C9A961]/10 to-[#C9A961]/5 rounded-xl p-5 border border-[#C9A961]/20 ${className}`}
        data-testid="intelligence-advantage-compact"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#C9A961] flex items-center justify-center flex-shrink-0">
            <Brain size={20} className="text-[#0A0A0A]" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#0A0A0A] mb-1">{content.title}</h4>
            <p className="text-sm text-[#6C757D] leading-relaxed">{content.description}</p>
            {showLink && (
              <Link 
                to="/our-approach" 
                className="inline-flex items-center gap-1 text-[#C9A961] text-sm font-medium mt-2 hover:underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard callout
  if (variant === 'standard') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-[#0A0A0A] rounded-2xl p-8 ${className}`}
        data-testid="intelligence-advantage-standard"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#C9A961] flex items-center justify-center flex-shrink-0">
              <Brain size={28} className="text-[#0A0A0A]" />
            </div>
            <div className="md:hidden">
              <h4 className="font-bold text-white text-lg">{content.title}</h4>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="hidden md:block font-bold text-white text-lg mb-2">{content.title}</h4>
            <p className="text-white/80 leading-relaxed">{content.description}</p>
          </div>
          {showLink && (
            <Link 
              to="/our-approach" 
              className="inline-flex items-center gap-2 bg-[#C9A961] text-[#0A0A0A] font-semibold px-6 py-3 rounded-lg hover:bg-[#B8984F] transition-colors whitespace-nowrap"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </motion.div>
    );
  }

  // Full section callout
  if (variant === 'full') {
    return (
      <section 
        className={`py-16 bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/5 ${className}`}
        data-testid="intelligence-advantage-full"
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A961] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Intelligence Advantage</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4">
              {content.title}
            </h3>
            <p className="text-lg text-[#6C757D] leading-relaxed mb-8 max-w-2xl mx-auto">
              {content.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <Brain size={24} className="text-[#C9A961] mb-3 mx-auto" />
                <h4 className="font-semibold text-[#0A0A0A] mb-1">Stanford-Validated</h4>
                <p className="text-sm text-[#6C757D]">Academically peer-reviewed methodology</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <Target size={24} className="text-[#C9A961] mb-3 mx-auto" />
                <h4 className="font-semibold text-[#0A0A0A] mb-1">60+ Countries</h4>
                <p className="text-sm text-[#6C757D]">Validated across global markets</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#E9ECEF]">
                <Zap size={24} className="text-[#C9A961] mb-3 mx-auto" />
                <h4 className="font-semibold text-[#0A0A0A] mb-1">Real-Time</h4>
                <p className="text-sm text-[#6C757D]">Live dashboards, not static reports</p>
              </div>
            </div>

            {showLink && (
              <Link 
                to="/our-approach" 
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1A1A1A] transition-colors"
              >
                Explore Our Approach <ArrowRight size={18} />
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return null;
};

export default IntelligenceAdvantage;
