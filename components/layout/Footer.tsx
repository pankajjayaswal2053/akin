
import React from 'react';
import { Link } from 'react-router-dom';
import AkinLogo from '../ui/AkinLogo';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode, label: string }> = ({ href, children, label }) => (
  <a href={href} className="text-gray-400 hover:text-electric-blue transition-colors" aria-label={label}>
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="bg-white text-charcoal-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <AkinLogo variant="light" className="h-8 mx-auto sm:mx-0" />
            <p className="text-sm max-w-xs">
              Akin Technology builds bespoke AI operating systems that unify data, models, and operations.
            </p>
          </div>
          <div className="flex space-x-6">
            <SocialIcon href="#" label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.21-6.815-6.041 6.815h-3.308l7.73-8.805-7.993-11.24h6.797l4.634 6.436 5.549-6.436z"/></svg>
            </SocialIcon>
             <SocialIcon href="#" label="YouTube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </SocialIcon>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">&copy; 2025 Akin Technology. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
                <Link to="/privacy-policy" className="text-sm hover:text-electric-blue transition-colors">Privacy Policy</Link>
                <Link to="/cookie-policy" className="text-sm hover:text-electric-blue transition-colors">Cookie Policy</Link>
                <Link to="/careers" className="text-sm hover:text-electric-blue transition-colors">Careers</Link>
                <Link to="/contact" className="text-sm hover:text-electric-blue transition-colors">Contact</Link>
                <Link to="/sitemap" className="text-sm hover:text-electric-blue transition-colors">Sitemap</Link>
            </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
