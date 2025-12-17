import React from 'react';
import { Award, TrendingUp, CheckCircle2 } from 'lucide-react';

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

  // Duplicate clients to create seamless loop (4 sets ensures coverage on wide screens)
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="py-12 md:py-24 bg-slate-50 dark:bg-navy-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-red/10 text-electric-red font-bold text-sm uppercase tracking-wider mb-6">
          <Award className="w-4 h-4" />
          <span>Nos Références</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-900 dark:text-white">
          Ils Nous Font Confiance
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          Nous sommes fiers d'accompagner ces entreprises leaders dans leur développement technologique et infrastructurel.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Partenariats Durables</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Expertise Reconnue</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Support Premium</span>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full py-10">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-navy-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-navy-900 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee hover:pause">
          {marqueeClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="mx-4 md:mx-8 w-40 h-24 md:w-52 md:h-32 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center p-6 group transition-all duration-300 hover:shadow-md hover:border-electric-red/30 hover:-translate-y-1"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
