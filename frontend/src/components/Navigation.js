import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Brand & Design', path: '/brand-design' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
            {navLinks.map((link) => (
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
              className="btn-dark py-2 px-4 text-xs"
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
            
            {navLinks.map((link, index) => (
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
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
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
              transition={{ delay: navLinks.length * 0.05 }}
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
