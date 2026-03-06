import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mic, Video, Headphones, ExternalLink } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Media = () => {
  const mediaAppearances = [
    {
      type: 'podcast',
      platform: 'Spotify',
      title: 'Strategic Intelligence for Leaders',
      show: 'XRaised Podcast',
      description: 'Erania Brackett discusses how mid-market B2B companies can leverage strategic intelligence to drive growth and make data-driven decisions.',
      topics: ['Customer Intelligence', 'Strategic Planning', 'B2B Growth', 'Data-Driven Decisions'],
      url: 'https://open.spotify.com/episode/3qa0kMWxuT834SaWFBlFsl?si=kHd47uRfSvCCrgrsALo7Og&nd=1&dlsi=060216a005304096',
      icon: Headphones,
      color: '#1DB954',
      bgColor: '#1DB954/10'
    },
    {
      type: 'video',
      platform: 'XRaised',
      title: 'Strategic Intelligence for Leaders',
      show: 'XRaised Video Series',
      description: 'An in-depth video interview exploring how Brackett Agency helps companies transform customer data into competitive advantage.',
      topics: ['Leadership Strategy', 'Intelligence Systems', 'Growth Execution', 'Market Positioning'],
      url: 'https://xraised.com/videos/strategic-intelligence-for-leaders/',
      icon: Video,
      color: '#C9A961',
      bgColor: '#C9A961/10',
      image: 'https://customer-assets.emergentagent.com/job_27c8f0e9-947d-4d1f-b357-54da0c22fabb/artifacts/hxzr2my9_Screenshot%202026-03-06%20at%208.46.27%E2%80%AFAM.png'
    },
    {
      type: 'podcast',
      platform: 'Amazon Music',
      title: 'Strategic Intelligence for Leaders',
      show: 'XRaised Podcast',
      description: 'Listen on Amazon Music as Erania shares insights on fractional strategic services and how intelligence-driven approaches outperform traditional consulting.',
      topics: ['Fractional Services', 'Revenue Optimization', 'Customer Analytics', 'Strategic Execution'],
      url: 'https://music.amazon.com.mx/podcasts/04efeb4a-c716-440b-a935-0a38ad4e868f/episodes/39b14e55-bf90-40c0-b01a-aeefb8b0b856/xraised-strategic-intelligence-for-leaders',
      icon: Mic,
      color: '#FF9900',
      bgColor: '#FF9900/10'
    }
  ];

  const speakingTopics = [
    {
      title: 'Intelligence-Driven Growth',
      description: 'How to leverage customer data and AI/ML platforms to identify hidden revenue opportunities'
    },
    {
      title: 'The Fractional Executive Model',
      description: 'Why mid-market companies are choosing fractional CMO and strategy support over full-time hires'
    },
    {
      title: 'From Strategy to Execution',
      description: 'Bridging the gap between strategic planning and measurable results'
    },
    {
      title: 'Competitive Positioning',
      description: 'Using customer choice intelligence to differentiate in crowded B2B markets'
    }
  ];

  return (
    <div data-testid="media-page" className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-white relative overflow-hidden" data-testid="hero-section">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A961]/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#C9A961]/10 rounded-full"></div>
        <div className="absolute bottom-10 right-40 w-32 h-32 border border-[#C9A961]/10 rounded-full"></div>
        
        {/* Floating media icons */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#1DB954]/10 rounded-full flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Headphones className="text-[#1DB954]" size={20} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/6 w-10 h-10 bg-[#C9A961]/10 rounded-full flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Video className="text-[#C9A961]" size={16} />
        </motion.div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div 
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Mic size={16} className="text-[#C9A961]" />
              Media & Speaking
            </motion.div>
            
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#0A0A0A]"
            >
              Sharing{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#C9A961] to-[#8B7340] bg-clip-text text-transparent">Intelligence</span>
              </span>
              <br className="hidden md:block" />
              Across Platforms<span className="text-[#C9A961]">.</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
            >
              Podcasts, interviews, and thought leadership on strategic intelligence, 
              growth execution, and the future of fractional executive services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Appearances */}
      <section className="py-20 md:py-28" data-testid="appearances-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
                Recent Appearances
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid gap-8"
            >
              {mediaAppearances.map((appearance, index) => (
                <motion.a
                  key={index}
                  href={appearance.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUpVariant}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] hover:border-[#C9A961]/50 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className={`grid ${appearance.image ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[auto_1fr_auto]'} items-center`}>
                    {/* Platform indicator or Image */}
                    {appearance.image ? (
                      <div className="relative overflow-hidden">
                        <img 
                          src={appearance.image}
                          alt={appearance.title}
                          className="w-full h-full object-cover aspect-video md:aspect-auto md:h-[300px] group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-[#C9A961] flex items-center justify-center">
                            <Play className="text-white ml-1" size={28} />
                          </div>
                        </div>
                        {/* Platform badge */}
                        <div 
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase"
                          style={{ backgroundColor: appearance.color, color: 'white' }}
                        >
                          {appearance.platform}
                        </div>
                      </div>
                    ) : (
                      <div 
                        className="p-8 md:p-12 flex items-center justify-center"
                        style={{ backgroundColor: `${appearance.color}10` }}
                      >
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${appearance.color}20` }}
                        >
                          <appearance.icon size={36} style={{ color: appearance.color }} />
                        </div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-8">
                      {!appearance.image && (
                        <div className="flex items-center gap-3 mb-3">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                            style={{ backgroundColor: `${appearance.color}15`, color: appearance.color }}
                          >
                            {appearance.platform}
                          </span>
                          <span className="text-xs text-[#6C757D]">{appearance.type === 'podcast' ? 'Podcast Episode' : 'Video Interview'}</span>
                        </div>
                      )}
                      
                      {appearance.image && (
                        <span className="text-xs text-[#6C757D] mb-2 block">Video Interview</span>
                      )}
                      
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#C9A961] transition-colors">
                        {appearance.title}
                      </h3>
                      <p className="text-sm text-[#C9A961] font-medium mb-3">{appearance.show}</p>
                      <p className="text-[#6C757D] text-sm leading-relaxed mb-4">
                        {appearance.description}
                      </p>
                      
                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {appearance.topics.map((topic, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-[#F8F9FA] text-[#6C757D] text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {appearance.image && (
                        <div className="flex items-center gap-2 text-[#C9A961] font-medium text-sm group-hover:gap-3 transition-all">
                          <span>Watch Interview</span>
                          <ArrowRight size={16} />
                        </div>
                      )}
                    </div>
                    
                    {/* Action - only for non-image cards */}
                    {!appearance.image && (
                      <div className="p-8 hidden md:flex items-center">
                        <div className="w-14 h-14 rounded-full bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#C9A961] transition-colors">
                          <Play className="text-white ml-1" size={24} />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white dark-section" data-testid="topics-section">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-16">
              <p className="text-sm font-semibold text-[#C9A961] mb-3 uppercase tracking-wider">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'white' }}>
                Speaking Topics
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                Available for podcasts, conferences, and leadership forums on these topics.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-[#C9A961]/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A961] transition-colors">
                      <Mic className="text-[#C9A961] group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#C9A961] mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Media Inquiry CTA */}
      <section className="py-20 md:py-28" data-testid="inquiry-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div 
              variants={fadeUpVariant}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-[#E9ECEF] shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center mx-auto mb-6">
                <Mic className="text-white" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4">
                Media & Speaking Inquiries
              </h2>
              <p className="text-[#6C757D] mb-8">
                Interested in having Erania Brackett on your podcast, at your conference, 
                or for a media interview? Let's connect.
              </p>
              <motion.a
                href="https://form.jotform.com/252728460666061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-semibold rounded-lg hover:bg-[#1A1A1A] transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Media Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
