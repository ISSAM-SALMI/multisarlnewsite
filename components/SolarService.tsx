import React, { useState } from 'react';
import { Sun, Ruler, Battery, Zap, Plug, HardHat, Activity, Wrench, ArrowRight, CheckCircle2, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolarService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <Ruler className="w-6 h-6 text-orange-500" />,
      title: "Études & ingénierie",
      description: "Analyse de consommation, étude de faisabilité, dimensionnement et plans d'implantation."
    },
    {
      icon: <Sun className="w-6 h-6 text-orange-500" />,
      title: "Installation",
      description: "Panneaux haute performance, structures adaptées (toiture, sol, ombrière) et câblage sécurisé."
    },
    {
      icon: <Battery className="w-6 h-6 text-orange-500" />,
      title: "Onduleurs & Stockage",
      description: "Onduleurs hybrides/centralisés, batteries lithium/gel et gestion de l'autoconsommation."
    },
    {
      icon: <Plug className="w-6 h-6 text-orange-500" />,
      title: "Systèmes Hybrides",
      description: "Couplage réseau/groupes électrogènes, gestion intelligente et continuité pour sites sensibles."
    },
    {
      icon: <HardHat className="w-6 h-6 text-orange-500" />,
      title: "Solutions Chantiers",
      description: "Alimentation solaire pour bases de vie, réduction carburant et solutions mobiles."
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      title: "Mise en service",
      description: "Tests de performance, paramétrage, supervision à distance et formation utilisateurs."
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      title: "Maintenance",
      description: "Nettoyage panneaux, diagnostic performance et maintenance préventive/corrective."
    }
  ];

  const galleryImages = [
    "image (1).jpeg",
    "image (2).jpeg",
    "image (3).jpeg",
    "image (4).jpeg",
    "image (5).jpeg",
    "image (6).jpeg",
    "image (7).jpeg",
    "image (8).jpeg"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-6">
            <Sun className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Service Énergie Solaire
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Solutions photovoltaïques performantes, durables et économiques
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
              Présentation générale
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Le service Énergie Solaire de MULTIRESAUX propose des solutions complètes de production d’électricité photovoltaïque, destinées aux bâtiments résidentiels, tertiaires, industriels, agricoles, chantiers et sites isolés.
              </p>
              <p>
                Notre objectif est de permettre à nos clients de réduire leurs coûts énergétiques, d’assurer une autonomie électrique partielle ou totale, et de contribuer à une transition énergétique durable.
              </p>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Nos engagements</h3>
                {[
                  "Solutions fiables et durables",
                  "Réduction significative des coûts",
                  "Respect des normes internationales",
                  "Équipements certifiés et performants",
                  "Accompagnement technique complet"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/EnergieS/image (1).jpeg" 
              alt="Installation Solaire" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Expertise Photovoltaïque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Réalisations en Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((imgName, index) => (
              <div 
                key={index} 
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(`/images/EnergieS/${imgName}`)}
              >
                <img 
                  src={`/images/EnergieS/${imgName}`} 
                  alt={`Réalisation Solaire ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-10 h-10 opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-electric-red transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <img 
              src={selectedImage} 
              alt="Agrandissement" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Passez à l'énergie solaire</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Réduisez votre facture et gagnez en autonomie avec nos solutions photovoltaïques clé en main.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/50"
            >
              Demander une étude solaire <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
