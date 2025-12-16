import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

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
    { label: 'Références', href: '#references' },
    { label: 'Engagements', href: '#engagements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar - Professional Info */}
      <div className={`fixed top-0 left-0 w-full z-[60] bg-navy-950 text-gray-400 text-xs border-b border-white/5 transition-transform duration-300 hidden lg:block ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl h-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-3 h-3 text-electric-red" /> info@multireseaux.ma</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors"><MapPin className="w-3 h-3 text-electric-red" /> Casablanca, Maroc</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-electric-red" /> Lun - Sam: 8h00 - 18h00</span>
            <a href="https://wa.me/212694934280" target="_blank" rel="noopener noreferrer" className="text-electric-red font-bold hover:text-white transition-colors">Service Urgence 24/7</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
          isScrolled 
            ? 'top-0 bg-navy-950/95 backdrop-blur-md py-2 border-white/10 shadow-2xl' 
            : 'top-10 bg-gradient-to-b from-navy-900/80 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center relative">
            
            {/* Logo Section (Left) */}
            <div className="flex justify-start -ml-4">
              <a href="#" className="flex items-center gap-3 group relative z-50">
                <div className="relative">
                  <div className="absolute inset-0 bg-electric-red/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Logo className={`transition-all duration-300 relative z-10 drop-shadow-lg ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'}`} />
                </div>
              </a>
            </div>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-24 z-40 items-center justify-center gap-1 bg-navy-900/50 backdrop-blur-sm px-1.5 py-1 rounded-full border border-white/10 shadow-lg shadow-black/20">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="relative px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group whitespace-nowrap flex items-center justify-center"
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA (Right) */}
            <div className="hidden lg:flex justify-end items-center gap-4 -mr-12">
              <div className="flex flex-col items-end text-right">
                <a href="tel:+212694934280" className="text-xs font-bold text-white hover:text-electric-red transition-colors flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric-red group-hover:border-electric-red transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono tracking-wide">06 94 93 42 80</span>
                </a>
              </div>
              
              <a 
                href="#contact" 
                className="relative overflow-hidden bg-electric-red hover:bg-red-600 text-white text-[10px] font-bold py-2.5 px-5 rounded-sm uppercase tracking-wider transition-all duration-300 group shadow-lg shadow-electric-red/20 hover:shadow-electric-red/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Devis Gratuit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="pl-2 border-l border-white/10">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Toggle Button (Right) */}
            <div className="lg:hidden flex justify-end items-center gap-4">
              <ThemeToggle />
              <button 
                className="relative z-50 p-2 text-white hover:text-electric-red transition-colors bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 relative overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-electric-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col gap-6 relative z-10">
            {navLinks.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-3xl font-bold text-white hover:text-electric-red transition-all duration-500 flex items-center gap-6 group ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-sm text-electric-red font-mono border border-electric-red/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className={`mt-12 pt-12 border-t border-white/10 flex flex-col gap-8 transition-all duration-700 delay-300 ${
             isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
             <div className="flex items-center gap-4 text-white p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-electric-red flex items-center justify-center text-white shadow-lg shadow-electric-red/30">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Service Client</p>
                  <p className="text-2xl font-bold font-mono">06 94 93 42 80</p>
                </div>
             </div>
             
             <a 
              href="#contact" 
              className="bg-white text-navy-950 text-center font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DEMANDER UN DEVIS <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};