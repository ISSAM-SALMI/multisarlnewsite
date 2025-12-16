import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, ArrowRight, Mail, MapPin, Clock, History, User } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

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
      <div className="hidden lg:block bg-navy-950 text-gray-400 text-xs border-b border-white/5 relative z-[60]">
        <div className="w-full px-6 lg:px-12 h-10 flex justify-between items-center">
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
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700 shadow-md py-2' 
            : 'bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700 py-4'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center relative">
            
            {/* Logo Section (Left) */}
            <div className="flex-shrink-0 flex items-center w-[240px]">
              <Link to="/" className="flex items-center gap-3 group">
                <Logo className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`} />
                <div className="flex flex-col">
                  <span className={`font-bold tracking-tight leading-none text-navy-900 dark:text-white ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                    MULTI<span className="text-electric-red">RESEAUX</span>
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase mt-0.5">Solutions Techniques</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-bold uppercase tracking-wide text-navy-900 dark:text-gray-300 hover:text-electric-red dark:hover:text-white transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-red transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Dropdown-style links for extra pages */}
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

              <Link 
                to="/histoire"
                className={`text-xs font-bold uppercase tracking-wide transition-colors hover:text-electric-red ${location.pathname === '/histoire' ? 'text-electric-red' : 'text-navy-900 dark:text-gray-300'}`}
              >
                Histoire
              </Link>

              <Link 
                to="/mot-du-directeur"
                className={`text-xs font-bold uppercase tracking-wide transition-colors hover:text-electric-red ${location.pathname === '/mot-du-directeur' ? 'text-electric-red' : 'text-navy-900 dark:text-gray-300'}`}
              >
                Directeur
              </Link>
            </nav>

            {/* Desktop CTA (Right) */}
            <div className="hidden lg:flex items-center justify-end gap-4 w-[240px]">
              <div className="pr-4 border-r border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>

              <a 
                href="#contact" 
                className="bg-electric-red hover:bg-red-700 text-white text-[10px] font-bold py-2.5 px-5 uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-sm whitespace-nowrap"
              >
                Demander un devis
              </a>
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
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-sm text-electric-red font-mono border border-electric-red/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                {link.label}
              </a>
            ))}
            
            {/* Mobile History Link */}
            <Link 
              to="/histoire"
              className={`text-3xl font-bold text-white hover:text-electric-red transition-all duration-500 flex items-center gap-6 group ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            >
              <span className="text-sm text-electric-red font-mono border border-electric-red/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">0{navLinks.length + 1}</span>
              Notre Histoire
            </Link>

            {/* Mobile Director Word Link */}
            <Link 
              to="/mot-du-directeur"
              className={`text-3xl font-bold text-white hover:text-electric-red transition-all duration-500 flex items-center gap-6 group ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
            >
              <span className="text-sm text-electric-red font-mono border border-electric-red/30 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">0{navLinks.length + 2}</span>
              Mot du Directeur
            </Link>
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