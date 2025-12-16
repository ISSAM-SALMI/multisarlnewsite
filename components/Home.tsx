import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Catalog } from './Catalog';
import { References } from './References';
import { Commitments } from './Commitments';
import { QuoteForm } from './QuoteForm';

export const Home: React.FC = () => {
  return (
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
  );
};
