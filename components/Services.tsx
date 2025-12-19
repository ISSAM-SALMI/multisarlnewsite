import React from 'react';
import { Zap, Server, Factory, Mic2, BatteryCharging, Wrench, ArrowUpRight, Building2, PackageCheck, Sun, CheckCircle, TrendingDown, ShieldCheck, Leaf } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'cfo',
      title: 'Installation Électrique CFO',
      description: 'Installation complète des réseaux pour logements, bâtiments administratifs et industries. Tirage de câbles, distribution, éclairage, armoires électriques et TGBT. Mise en conformité et rénovation.',
      icon: <Zap className="w-8 h-8 text-electric-red" />,
      colSpan: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 'cfa',
      title: 'Installation Informatique et CFA',
      description: 'Réseaux informatiques : baies de brassage, câblage RJ45, fibre optique. Systèmes de sécurité : vidéosurveillance, contrôle d’accès, alarmes et détection incendie. Domotique pour bâtiments intelligents.',
      icon: <Server className="w-6 h-6 text-blue-400" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'mt',
      title: 'Moyenne Tension (MT)',
      description: 'Installation et mise en service de postes de transformation 20 kV. Raccordement MT/BT, installation TGBT & TGMT. Maintenance préventive et corrective.',
      icon: <Factory className="w-6 h-6 text-orange-500" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'events',
      title: 'Solutions pour Événementiel',
      description: 'Réseaux électriques temporaires. Location et vente de groupes, multiprises, rallonges, DMX, coffrets de sécurité. Alimentation rapide et sécurisée pour festivals et salons.',
      icon: <Mic2 className="w-6 h-6 text-purple-500" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'ev',
      title: 'Bornes de Recharge VE',
      description: 'Étude, installation et maintenance de bornes standard, rapides et ultra rapides. Intégration dans parkings, villas et entreprises. Mise en conformité normes marocaines.',
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'bureaux',
      title: 'Bureaux et Hangars',
      description: 'Aménagement complet : CFO / CFA / informatique. Conception et installation d’armoires, tableaux généraux et réseaux internes. Éclairage industriel et optimisation énergétique.',
      icon: <Building2 className="w-6 h-6 text-indigo-500" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Assistance',
      description: 'Contrats de maintenance pour bâtiments et industries. Dépannage rapide 24/7 selon contrat. Suivi, rapport technique et optimisation des installations.',
      icon: <Wrench className="w-6 h-6 text-gray-400" />,
      colSpan: 'md:col-span-1 md:row-span-1'
    },
  ];

  return (
    <div className="py-12 md:py-24 container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4 transition-colors">
          Nos Domaines d'Intervention
        </h2>
        <div className="h-1 w-20 bg-electric-red mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
          Expertise technique complète : de l'étude à la maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`
              ${service.colSpan}
              bg-white dark:bg-navy-800 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-navy-700 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 group relative overflow-hidden
            `}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gray-50 dark:bg-navy-700 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 dark:bg-navy-900 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-navy-700">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                
                <h3 className="text-lg md:text-2xl font-bold text-navy-900 dark:text-white mb-3 md:mb-4 group-hover:text-electric-red transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm transition-colors">
                  {service.description}
                </p>
              </div>

              {['cfo', 'cfa', 'events', 'mt', 'ev', 'maintenance', 'bureaux'].includes(service.id) ? (
                <Link to={service.id === 'bureaux' ? '/services/offices' : `/services/${service.id}`} className="inline-flex items-center text-xs md:text-sm font-bold text-navy-900 dark:text-white hover:text-electric-red dark:hover:text-electric-red transition-colors uppercase tracking-wider z-20 relative">
                  En savoir plus <ArrowUpRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              ) : (
                <a href="#contact" className="inline-flex items-center text-xs md:text-sm font-bold text-navy-900 dark:text-white hover:text-electric-red dark:hover:text-electric-red transition-colors uppercase tracking-wider z-20 relative">
                  En savoir plus <ArrowUpRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </a>
              )}
              
              {/* Make the whole card clickable for CFO, CFA, Events, MT, EV, Maintenance and Offices */}
              {['cfo', 'cfa', 'events', 'mt', 'ev', 'maintenance', 'bureaux'].includes(service.id) && (
                <Link to={service.id === 'bureaux' ? '/services/offices' : `/services/${service.id}`} className="absolute inset-0 z-10" aria-label={`Voir les détails de ${service.title}`} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Solar Photovoltaic Section - Redesigned */}
      <div className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-navy-900 dark:bg-navy-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Content Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sun className="w-3.5 h-3.5" />
              <span>Transition Énergétique</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Passez à l'énergie <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">solaire</span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Transformez votre toiture en source de revenus et d'économies. MULTIRESEAUX conçoit des installations photovoltaïques performantes pour réduire durablement votre facture énergétique.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10 w-full">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Autoconsommation" },
                { icon: <TrendingDown className="w-5 h-5" />, text: "Réduction facture" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Installation garantie" },
                { icon: <Leaf className="w-5 h-5" />, text: "Impact écologique" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors text-center md:text-left">
                  <div className="text-orange-400">{item.icon}</div>
                  <span className="text-gray-200 font-medium text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div>
              <Link 
                to="/services/solar" 
                className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/50"
              >
                <span>En savoir plus</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative min-h-[400px] lg:min-h-full group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 lg:bg-gradient-to-l"></div>
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
              alt="Installation Solaire" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">Performance</p>
                    <p className="text-white font-bold text-xl">Rentabilité Maximale</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                    <Sun className="w-6 h-6 animate-pulse-slow" />
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-1.5 rounded-full w-[99%]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Efficacité énergétique</span>
                  <span>99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packs Section */}
      <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Nos Packs Solutions</h3>
          <p className="text-gray-300">Des offres packagées pour simplifier vos projets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pack Event */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mb-4">
              <PackageCheck className="text-electric-red w-6 h-6" />
              <h4 className="text-xl font-bold text-electric-red">Pack Événementiel</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm w-full">
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Câblage complet</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Coffrets de distribution</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Groupe électrogène dimensionné</li>
            </ul>
          </div>

          {/* Pack Bureau */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mb-4">
              <PackageCheck className="text-blue-400 w-6 h-6" />
              <h4 className="text-xl font-bold text-blue-400">Pack Bureau</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm w-full">
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Câblage informatique & RJ45</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Armoires électriques</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Éclairage technique optimisé</li>
            </ul>
          </div>

          {/* Pack Recharge VE */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mb-4">
              <PackageCheck className="text-green-500 w-6 h-6" />
              <h4 className="text-xl font-bold text-green-500">Pack Recharge VE</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm w-full">
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Borne de recharge adaptée</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Installation sécurisée</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><span className="hidden md:inline">•</span> Contrat de maintenance inclus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};