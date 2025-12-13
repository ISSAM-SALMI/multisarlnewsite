import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Expertises', href: '#services' },
    { label: 'Location & Vente', href: '#vente-location' },
    { label: 'Engagements', href: '#engagements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
          isScrolled 
            ? 'bg-navy-950/80 backdrop-blur-md py-4 border-white/10 shadow-lg shadow-black/20' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-electric-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Logo className="w-16 h-16 md:w-24 md:h-24 relative z-10" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="relative px-5 py-2.5 text-base font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Hover Line Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electric-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex flex-col items-end text-right">
                <a href="tel:0522603621" className="text-base font-bold text-white hover:text-electric-red transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 05 22 60 36 21
                </a>
              </div>
              
              <a 
                href="#contact" 
                className="relative overflow-hidden bg-white/5 hover:bg-electric-red text-white border border-white/20 hover:border-electric-red text-sm font-bold py-3.5 px-8 rounded transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  DEVIS GRATUIT <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className="lg:hidden relative z-50 p-2 text-white hover:text-electric-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 relative">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-electric-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-3xl font-bold text-white hover:text-electric-red transition-colors flex items-center gap-4 group"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-sm text-gray-600 font-mono">0{idx + 1}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-6">
             <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-electric-red">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Service Client</p>
                  <p className="text-xl font-bold">05 22 60 36 21</p>
                </div>
             </div>
             
             <a 
              href="#contact" 
              className="bg-electric-red text-white text-center font-bold py-4 rounded hover:bg-electric-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};