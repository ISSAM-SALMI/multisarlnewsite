import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Catalog } from './components/Catalog';
import { References } from './components/References';
import { Commitments } from './components/Commitments';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Phone, CheckCircle, Zap } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-slate-900 dark:text-white bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />

      {/* Main Content */}
      <main className="flex-grow">
        <section id="accueil">
          <Hero />
        </section>

        <section id="services" className="bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
          <Services />
        </section>

        <section id="vente-location" className="bg-white dark:bg-navy-950 transition-colors duration-300">
          <Catalog />
        </section>

        <section id="references" className="bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
          <References />
        </section>

        <section id="engagements" className="bg-slate-100 dark:bg-navy-900 transition-colors duration-300">
          <Commitments />
        </section>

        <section id="contact" className="bg-slate-50 dark:bg-navy-950 relative overflow-hidden transition-colors duration-300">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
             </svg>
          </div>
          <QuoteForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Action */}
      <WhatsAppButton />
    </div>
  );
}