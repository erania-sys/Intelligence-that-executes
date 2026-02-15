import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-16 md:py-20" data-testid="footer">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_agency-refresh-8/artifacts/w4rp0d42_Rainy082003%20final-01%20%281%29.jpg" 
              alt="Brackett" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-white/60 max-w-md leading-relaxed text-sm">
              Strategic Intelligence for the Modern Age. We transform executive vision into 
              measurable business advantage through data-driven insights and strategic execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm transition-colors"
                    data-testid={`footer-link-${link.toLowerCase().replace(' ', '-')}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-2 transition-colors"
                  data-testid="footer-advisory-overview"
                >
                  Advisory Overview
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://brackett.agency/s/brackett_agency_one_pager_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-2 transition-colors"
                  data-testid="footer-one-pager"
                >
                  One Page Brochure
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://form.jotform.com/252728460666061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-2 transition-colors"
                  data-testid="footer-contact-form"
                >
                  Contact Form
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {currentYear} Brackett Agency
          </p>
          <p className="text-white/40 text-sm">
            Strategic Intelligence & Advisory
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
