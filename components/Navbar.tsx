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
      if (window.innerWidth >= 1280) {
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', href: '/#accueil' },
    { label: 'Expertises', href: '/#services' },
    { label: 'Location & Vente', href: '/#vente-location' },
    { label: 'Références', href: '/#references' },
    { label: 'Engagements', href: '/#engagements' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Bar - Professional Info */}
      <div className="hidden xl:block bg-navy-950 text-gray-400 text-xs border-b border-white/5 relative z-[60]">
        <div className="w-full px-6 xl:px-12 h-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-3 h-3 text-electric-red" /> info@multireseaux.ma</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors"><MapPin className="w-3 h-3 text-electric-red" /> Ain Sebaa, Casablanca</span>
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
            : 'bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700 py-3 md:py-4'
        }`}
      >
        <div className="w-full px-4 xl:px-12">
          <div className="flex justify-between items-center relative">
            
            {/* Logo Section (Left) */}
            <div className="flex-shrink-0 flex items-center w-auto xl:w-[240px]">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <Logo className={`transition-all duration-300 ${isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'} brightness-0 dark:brightness-100`} />
                <div className="hidden xl:flex flex-col">
                  <span className={`font-bold tracking-tight leading-none text-navy-900 dark:text-white ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                    MULTI<span className="text-electric-red">RESEAUX</span>
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase mt-0.5">Solutions Techniques</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden xl:flex items-center justify-center gap-6 flex-1 px-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.href}
                  className="text-xs font-bold uppercase tracking-wide text-navy-900 dark:text-gray-300 hover:text-electric-red dark:hover:text-white transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-red transition-all duration-300 group-hover:w-full"></span>
                </Link>
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

              <Link 
                to="/nous-rejoindre"
                className={`text-xs font-bold uppercase tracking-wide transition-colors hover:text-electric-red ${location.pathname.startsWith('/nous-rejoindre') ? 'text-electric-red' : 'text-navy-900 dark:text-gray-300'}`}
              >
                Nous rejoindre
              </Link>
            </nav>

            {/* Desktop CTA (Right) */}
            <div className="hidden xl:flex items-center justify-end gap-4 w-[240px]">
              <div className="pr-4 border-r border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>

              <Link 
                to="/#contact" 
                className="bg-electric-red hover:bg-red-700 text-white text-[10px] font-bold py-2.5 px-5 uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-sm whitespace-nowrap"
              >
                Demander un devis
              </Link>
            </div>

            {/* Mobile Toggle Button (Right) */}
            <div className="xl:hidden flex justify-end items-center gap-2 sm:gap-3">
              <div className="scale-90 sm:scale-100 origin-right">
                <ThemeToggle />
              </div>
              <button 
                className={`relative z-50 p-1.5 sm:p-2 transition-colors rounded-lg backdrop-blur-sm border ${
                  isMobileMenuOpen 
                    ? 'text-navy-900 dark:text-white bg-gray-100 dark:bg-white/10 border-gray-200 dark:border-white/20' 
                    : 'text-navy-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-white/5 border-gray-200 dark:border-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
           </div>
           <div className="absolute top-0 right-0 w-80 h-80 bg-electric-red/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 pt-24 pb-4">
            <div className="flex flex-col gap-1 relative z-10">
              {navLinks.map((link, idx) => (
                <Link 
                  key={link.label} 
                  to={link.href}
                  className={`group relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  } hover:bg-gray-50 dark:hover:bg-white/5 active:scale-[0.98]`}
                  onClick={handleNavClick}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="text-[10px] font-mono font-medium text-gray-400 group-hover:text-electric-red transition-colors w-6 border-r border-gray-200 dark:border-white/10 h-full flex items-center">0{idx + 1}</span>
                  <span className="text-base font-bold text-navy-900 dark:text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300 uppercase">{link.label}</span>
                  <div className="ml-auto w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-electric-red group-hover:text-white transition-all duration-300">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
              
              <div className="h-px bg-gray-100 dark:bg-white/5 my-2 mx-4"></div>

              {/* Secondary Links */}
              {[
                { to: "/histoire", label: "Notre Histoire", idx: navLinks.length },
                { to: "/mot-du-directeur", label: "Mot du Directeur", idx: navLinks.length + 1 },
                { to: "/nous-rejoindre", label: "Nous rejoindre", idx: navLinks.length + 2 }
              ].map((item, i) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className={`group relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  } hover:bg-gray-50 dark:hover:bg-white/5 active:scale-[0.98]`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${item.idx * 50}ms` }}
                >
                  <span className="text-[10px] font-mono font-medium text-gray-400 group-hover:text-electric-red transition-colors w-6 border-r border-gray-200 dark:border-white/10 h-full flex items-center">0{item.idx + 1}</span>
                  <span className="text-sm font-bold text-navy-900 dark:text-gray-200 tracking-tight group-hover:translate-x-1 transition-transform duration-300 uppercase">{item.label}</span>
                  <div className="ml-auto w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-electric-red group-hover:text-white transition-all duration-300">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Fixed Area */}
          <div className={`p-6 bg-white/80 dark:bg-navy-950/80 backdrop-blur-md border-t border-gray-100 dark:border-white/5 transition-all duration-700 delay-200 ${
             isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
             {/* Empty bottom area as requested */}
          </div>
        </div>
      </div>
    </>
  );
};