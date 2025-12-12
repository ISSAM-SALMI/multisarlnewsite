import React from 'react';
import { Zap, Server, Factory, Mic2, BatteryCharging, Wrench, ArrowUpRight, Building2, PackageCheck } from 'lucide-react';
import { ServiceItem } from '../types';

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
    <div className="py-24 container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Nos Domaines d'Intervention
        </h2>
        <div className="h-1 w-20 bg-electric-red mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg">
          Expertise technique complète : de l'étude à la maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6 mb-24">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`
              ${service.colSpan}
              bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden
            `}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 group-hover:bg-blue-50/50"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                  {service.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 group-hover:text-electric-red transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center text-sm font-bold text-navy-900 hover:text-electric-red transition-colors uppercase tracking-wider">
                En savoir plus <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Packs Section */}
      <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Nos Packs Solutions</h3>
          <p className="text-gray-300">Des offres packagées pour simplifier vos projets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pack Event */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="text-electric-red w-6 h-6" />
              <h4 className="text-xl font-bold text-electric-red">Pack Événementiel</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">• Câblage complet</li>
              <li className="flex items-start gap-2">• Coffrets de distribution</li>
              <li className="flex items-start gap-2">• Groupe électrogène dimensionné</li>
            </ul>
          </div>

          {/* Pack Bureau */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="text-blue-400 w-6 h-6" />
              <h4 className="text-xl font-bold text-blue-400">Pack Bureau</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">• Câblage informatique & RJ45</li>
              <li className="flex items-start gap-2">• Armoires électriques</li>
              <li className="flex items-start gap-2">• Éclairage technique optimisé</li>
            </ul>
          </div>

          {/* Pack Recharge VE */}
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:bg-navy-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="text-green-500 w-6 h-6" />
              <h4 className="text-xl font-bold text-green-500">Pack Recharge VE</h4>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">• Borne de recharge adaptée</li>
              <li className="flex items-start gap-2">• Installation sécurisée</li>
              <li className="flex items-start gap-2">• Contrat de maintenance inclus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};