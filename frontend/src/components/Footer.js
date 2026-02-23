import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import logoWhite from '../assets/logo-white.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Brand & Design', path: '/brand-design' },
  ];

  const moreLinks = [
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer bg-[#0A0A0A]" data-testid="footer">
      {/* CTA Banner - Gold accent */}
      <div className="bg-[#C9A961]">
        <div className="section-container py-12 md:py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A] mb-4">
            Ready to See What You're Missing?
          </h3>
          <p className="text-[#0A0A0A]/70 mb-6 max-w-xl mx-auto">
            Request your Strategic Blindspot Audit and discover the opportunities hiding in your business.
          </p>
          <a
            href="https://form.jotform.com/252728460666061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#1A1A1A] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            data-testid="footer-cta"
          >
            Request Strategic Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src={logoWhite}
              alt="Brackett Agency" 
              className="h-14 md:h-16 w-auto mb-4"
            />
            <p className="text-[#C9A961] font-medium leading-relaxed text-sm mb-4">
              Intelligence That Executes.
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Fractional strategy partners for mid-market companies who need senior strategic thinking backed by AI-powered intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C9A961] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-[#C9A961]"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C9A961] mb-6">
              More
            </h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-[#C9A961]"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C9A961] mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:erania@brackett.agency"
                  className="text-sm text-white/70 transition-colors hover:text-[#C9A961]"
                  data-testid="footer-email"
                >
                  erania@brackett.agency
                </a>
              </li>
              <li>
                <a
                  href="https://form.jotform.com/252728460666061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-2 text-white/70 transition-colors hover:text-[#C9A961]"
                  data-testid="footer-contact-form"
                >
                  Contact Form
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
            
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C9A961] mb-4 mt-8">
              Partners
            </h4>
            <p className="text-white/50 text-xs">
              Strategic Partnership with OSG Analytics
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Brackett Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-xs">
            <span>GDPR Compliant</span>
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
