import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [location]);

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'How We Work', path: '/how-we-work' },
  ];

  const solutionsSubLinks = [
    { name: 'All Solutions', path: '/solutions' },
    { name: 'Brand & Design', path: '/brand-design' },
    { name: 'Customer Experience', path: '/customer-experience' },
  ];

  const afterSolutionsLinks = [
    { name: 'Our Approach', path: '/our-approach' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isSolutionsActive = ['/solutions', '/brand-design', '/customer-experience'].includes(location.pathname);

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`nav-container ${isScrolled ? 'shadow-sm' : ''}`}
        data-testid="desktop-navigation"
      >
        <div className="nav-inner">
          <Link to="/" data-testid="nav-logo">
            <img 
              src={logo}
              alt="Brackett Agency" 
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`nav-link flex items-center gap-1 ${isSolutionsActive ? 'active' : ''}`}
                data-testid="nav-link-solutions"
              >
                Solutions
                <ChevronDown size={14} className={`transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#E9ECEF] py-2 z-50"
                  >
                    {solutionsSubLinks.map((subLink) => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        className={`block px-4 py-2.5 text-sm hover:bg-[#FAFAF8] transition-colors ${
                          location.pathname === subLink.path 
                            ? 'text-[#C9A961] font-medium' 
                            : 'text-[#0A0A0A]'
                        }`}
                        data-testid={`nav-dropdown-${subLink.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {afterSolutionsLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A0A0A] text-white font-semibold py-2 px-4 text-xs rounded-md hover:bg-[#1A1A1A] transition-all duration-300"
              data-testid="nav-cta"
            >
              Request Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav"
            data-testid="mobile-navigation"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <Link to="/" className="mb-8">
              <img 
                src={logo}
                alt="Brackett Agency" 
                className="h-14 w-auto"
              />
            </Link>
            
            {/* Home and How We Work */}
            {mainNavLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`mobile-nav-link text-xl ${
                    location.pathname === link.path ? 'text-[#C9A961]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Solutions with expandable sub-menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: mainNavLinks.length * 0.05 }}
            >
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className={`mobile-nav-link text-xl flex items-center gap-2 w-full text-left ${
                  isSolutionsActive ? 'text-[#C9A961]' : ''
                }`}
              >
                Solutions
                <ChevronDown size={18} className={`transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMobileSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#C9A961]/30">
                      {solutionsSubLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`block py-2 text-lg ${
                            location.pathname === subLink.path 
                              ? 'text-[#C9A961]' 
                              : 'text-[#6C757D]'
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Remaining links */}
            {afterSolutionsLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: (mainNavLinks.length + 1 + index) * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`mobile-nav-link text-xl ${
                    location.pathname === link.path ? 'text-[#C9A961]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (mainNavLinks.length + 1 + afterSolutionsLinks.length) * 0.05 }}
            >
              Request Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
