import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const filters = [
    { id: 'all', label: 'All Insights' },
    { id: 'revenue', label: 'Revenue Strategy' },
    { id: 'positioning', label: 'Market Positioning' },
    { id: 'intelligence', label: 'Customer Intelligence' },
    { id: 'execution', label: 'Execution Excellence' }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Revenue Leaks Most B2B Companies Miss',
      excerpt: 'Discover the hidden patterns that drain profitability—and how strategic intelligence can help you plug the gaps before they cost millions.',
      category: 'revenue',
      readTime: '8 min read',
      featured: true,
      date: 'December 2025',
      image: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      title: 'If Your Sales Team Can\'t Pitch You in 30 Seconds, You Have a Positioning Problem',
      excerpt: 'Why clear positioning isn\'t just a marketing issue—it\'s the foundation of your competitive advantage.',
      category: 'positioning',
      readTime: '6 min read',
      featured: false,
      date: 'December 2025',
      image: 'https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      title: 'What Your Customer Data Isn\'t Telling You',
      excerpt: 'Traditional analytics show what customers did. Predictive intelligence reveals what they\'ll do next—and why.',
      category: 'intelligence',
      readTime: '7 min read',
      featured: false,
      date: 'November 2025',
      image: 'https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzE4MTMzNTN8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 4,
      title: 'Why Strategic Plans Fail (And How to Fix Yours)',
      excerpt: 'The execution gap kills more strategies than bad ideas. Here\'s the operating system that drives high-growth companies.',
      category: 'execution',
      readTime: '10 min read',
      featured: false,
      date: 'November 2025',
      image: 'https://images.pexels.com/photos/9304682/pexels-photo-9304682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 5,
      title: 'Why Customer Segmentation May Be Costing You Millions',
      excerpt: 'Most segmentation strategies optimize for the wrong metrics. Learn how to segment by what actually drives lifetime value.',
      category: 'revenue',
      readTime: '7 min read',
      featured: false,
      date: 'October 2025',
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzE4MTMzNTN8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 6,
      title: 'Why "Me-Too" Positioning Kills B2B Companies',
      excerpt: 'In crowded markets, differentiation isn\'t optional—it\'s survival. Here\'s how to find your unique strategic position.',
      category: 'positioning',
      readTime: '5 min read',
      featured: false,
      date: 'October 2025',
      image: 'https://images.pexels.com/photos/7172856/pexels-photo-7172856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 7,
      title: 'Beyond NPS: Why Measuring Sentiment Isn\'t Enough',
      excerpt: 'Net Promoter Score tells you how customers feel. It doesn\'t tell you what to do about it. That\'s where behavioral analytics comes in.',
      category: 'intelligence',
      readTime: '6 min read',
      featured: false,
      date: 'September 2025',
      image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 8,
      title: 'The Operating Rhythm That Drives High-Growth Companies',
      excerpt: 'Strategic planning is worthless without execution discipline. Here\'s the weekly/monthly cadence that turns strategy into results.',
      category: 'execution',
      readTime: '8 min read',
      featured: false,
      date: 'September 2025',
      image: 'https://images.unsplash.com/photo-1758691736498-422201cc57da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 9,
      title: 'From $10M to $50M: The Strategic Inflection Points',
      excerpt: 'Growing mid-market companies hit predictable walls. Here\'s how to anticipate them—and break through.',
      category: 'revenue',
      readTime: '9 min read',
      featured: false,
      date: 'August 2025',
      image: 'https://images.pexels.com/photos/6476787/pexels-photo-6476787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured || activeFilter !== 'all');

  const getCategoryLabel = (category) => {
    const labels = {
      revenue: 'Revenue Strategy',
      positioning: 'Market Positioning',
      intelligence: 'Customer Intelligence',
      execution: 'Execution Excellence'
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category) => {
    const colors = {
      revenue: '#0A0A0A',
      positioning: '#C9A961',
      intelligence: '#C9A961',
      execution: '#4A7C59'
    };
    return colors[category] || '#6C757D';
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real implementation, this would send to a newsletter service
    alert('Thank you for subscribing! You\'ll receive our weekly strategic intelligence.');
    setEmail('');
  };

  return (
    <div data-testid="insights-page" className="bg-[#FAFAF8]">
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
                Strategic Intelligence. Delivered Weekly.
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="text-lg md:text-xl text-[#6C757D] leading-relaxed"
              >
                Insights on customer intelligence, market positioning, and execution excellence.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Data analytics visualization"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-8 border-b border-[rgba(0,0,0,0.08)]" data-testid="newsletter-section">
        <div className="section-container">
          <motion.form
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <p className="text-[#6C757D] text-sm">Get weekly strategic intelligence delivered to your inbox:</p>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 border border-[rgba(0,0,0,0.1)] rounded-lg text-sm focus:outline-none focus:border-[#C9A961] w-full md:w-64"
                required
                data-testid="newsletter-email"
              />
              <button
                type="submit"
                className="btn-primary py-2 px-4 text-sm"
                data-testid="newsletter-submit"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-[rgba(0,0,0,0.08)] sticky top-[72px] bg-[#FAFAF8] z-40">
        <div className="section-container">
          <div className="flex gap-0 overflow-x-auto py-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`tab-button whitespace-nowrap ${activeFilter === filter.id ? 'active' : ''}`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20" data-testid="articles-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Featured Article */}
            {activeFilter === 'all' && featuredArticle && (
              <motion.article
                variants={fadeUpVariant}
                className="mb-12"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-[#E9ECEF] hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="md:flex">
                    <div className="md:w-1/2 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-12 flex items-center justify-center">
                      <div className="text-center">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                          style={{ backgroundColor: `${getCategoryColor(featuredArticle.category)}20`, color: getCategoryColor(featuredArticle.category) }}
                        >
                          {getCategoryLabel(featuredArticle.category)}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white" >
                          Featured Article
                        </h2>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#6C757D] text-sm">{featuredArticle.date}</span>
                        <span className="flex items-center gap-1 text-[#6C757D] text-sm">
                          <Clock size={14} />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4" >
                        {featuredArticle.title}
                      </h3>
                      <p className="text-[#6C757D] leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:underline">
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Regular Articles Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {regularArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={fadeUpVariant}
                  className="bg-white rounded-xl overflow-hidden border border-[#E9ECEF] hover:shadow-lg transition-shadow cursor-pointer group"
                  data-testid={`article-${article.id}`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${getCategoryColor(article.category)}15`, color: getCategoryColor(article.category) }}
                      >
                        <Tag size={12} />
                        {getCategoryLabel(article.category)}
                      </span>
                      <span className="flex items-center gap-1 text-[#6C757D] text-xs">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] mb-3 group-hover:text-[#C9A961] transition-colors" >
                      {article.title}
                    </h3>
                    <p className="text-[#6C757D] text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C757D] text-xs">{article.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#C9A961] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Empty State */}
            {regularArticles.length === 0 && (
              <motion.div
                variants={fadeUpVariant}
                className="text-center py-16"
              >
                <p className="text-[#6C757D]">No articles found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8F9FA]" data-testid="cta-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4" >
              Want Strategic Intelligence Applied to Your Business?
            </h2>
            <p className="text-[#6C757D] mb-6">
              Request a Strategic Blindspot Audit to uncover the opportunities hiding in your data.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="cta-audit"
            >
              Request Strategic Audit
              <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
