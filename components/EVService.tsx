import React, { useState } from 'react';
import { BatteryCharging, Ruler, Zap, Cable, Smartphone, Sun, Activity, ArrowRight, CheckCircle2, Maximize2, X, Plug } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EVService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <Ruler className="w-6 h-6 text-electric-red" />,
      title: "Études & ingénierie IRVE",
      description: "Analyse du site, étude de puissance, dimensionnement des bornes et intégration avec l'existant."
    },
    {
      icon: <Plug className="w-6 h-6 text-electric-red" />,
      title: "Types de bornes",
      description: "Bornes AC (3.7 à 22kW), DC rapides (>30kW), Wallbox résidentielles et bornes doubles."
    },
    {
      icon: <Cable className="w-6 h-6 text-electric-red" />,
      title: "Installation & Raccordement",
      description: "Création de départs dédiés, protections spécifiques, câblage et mise à la terre."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-electric-red" />,
      title: "Supervision & Contrôle",
      description: "Gestion à distance, contrôle d'accès (RFID/App), facturation et suivi des consommations."
    },
    {
      icon: <Sun className="w-6 h-6 text-electric-red" />,
      title: "Recharge Intelligente",
      description: "Couplage avec panneaux solaires, optimisation selon la production et solutions hybrides."
    },
    {
      icon: <Activity className="w-6 h-6 text-electric-red" />,
      title: "Mise en service",
      description: "Tests de sécurité, paramétrage, formation des utilisateurs et maintenance continue."
    }
  ];

  const galleryImages = [
    "image (1).jpg",
    "image (2).jpg",
    "image (3).jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mb-6">
            <BatteryCharging className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Bornes de Recharge Électrique (IRVE)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Installation, sécurisation et solutions intelligentes
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
                Le service Bornes de Recharge Électrique (IRVE) de MULTIRESAUX accompagne les entreprises, collectivités, promoteurs, hôtels, parkings, copropriétés et particuliers dans la mise en place de solutions de recharge fiables, sécurisées et évolutives pour véhicules électriques et hybrides rechargeables.
              </p>
              <p>
                Nos installations sont conçues pour répondre aux exigences de sécurité électrique, performance énergétique et confort d’utilisation.
              </p>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Nos engagements IRVE</h3>
                {[
                  "Sécurité électrique et conformité",
                  "Solutions évolutives et intelligentes",
                  "Réduction des coûts énergétiques",
                  "Équipements certifiés et performants",
                  "Accompagnement de A à Z"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/BorneC/image (1).jpg" 
              alt="Borne de Recharge" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Nos Solutions de Recharge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                onClick={() => setSelectedImage(`/images/BorneC/${imgName}`)}
              >
                <img 
                  src={`/images/BorneC/${imgName}`} 
                  alt={`Installation Borne ${index + 1}`} 
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Passez à la mobilité électrique</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Étude, installation et maintenance de vos bornes de recharge par des experts certifiés.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/50"
            >
              Demander une étude <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
