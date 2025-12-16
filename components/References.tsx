import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

export function References() {
  const clients = [
    {
      name: 'AutoPlus Maghreb Accessoires',
      logo: '/images/References/autoplus_maghrebaccessoires_logo.jpg',
    },
    {
      name: 'Distrigo Parts Distribution',
      logo: '/images/References/distrigo parts distribution.png',
    },
    {
      name: 'Smart Tourisme',
      logo: '/images/References/logo-smart-tourisme.png',
    },
    {
      name: 'OCP',
      logo: '/images/References/OCP-logo.jpg',
    },
    {
      name: 'ProCheck',
      logo: '/images/References/ProCheck.png',
    },
    {
      name: 'SICR',
      logo: '/images/References/SICR-logo.png',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-red to-orange-500 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
          <Award className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-900 to-navy-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Ils Nous Font Confiance
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Fiers de collaborer avec des entreprises leaders qui nous font confiance pour leurs besoins en équipements électriques et informatiques
        </p>

        {/* Stats Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 bg-navy-50 dark:bg-navy-800/50 px-6 py-3 rounded-full">
            <TrendingUp className="w-5 h-5 text-electric-red" />
            <span className="font-semibold text-navy-900 dark:text-white">+50 Projets Réalisés</span>
          </div>
          <div className="flex items-center gap-2 bg-navy-50 dark:bg-navy-800/50 px-6 py-3 rounded-full">
            <Award className="w-5 h-5 text-electric-red" />
            <span className="font-semibold text-navy-900 dark:text-white">100% Satisfaction Client</span>
          </div>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-red/5 to-transparent blur-3xl"></div>
        
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-red/0 via-electric-red/0 to-electric-red/0 group-hover:from-electric-red/10 group-hover:via-transparent group-hover:to-blue-500/10 rounded-2xl transition-all duration-500"></div>
              
              {/* Logo container */}
              <div className="relative aspect-square flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with company name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl p-4">
                <p className="text-white text-sm font-semibold text-center">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-gradient-to-r from-navy-900 to-navy-700 dark:from-navy-800 dark:to-navy-700 text-white px-8 py-4 rounded-2xl shadow-xl">
          <p className="text-lg font-semibold">
            Rejoignez nos clients satisfaits et bénéficiez de notre expertise
          </p>
          <p className="text-sm text-slate-300 mt-2">
            Des solutions personnalisées pour chaque projet
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
