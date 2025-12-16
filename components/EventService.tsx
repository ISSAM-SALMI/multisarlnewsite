import React, { useState } from 'react';
import { Mic2, Zap, Box, Droplets, Building2, Map, ArrowRight, CheckCircle2, Maximize2, X, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <BatteryCharging className="w-6 h-6 text-electric-red" />,
      title: "Groupes électrogènes",
      description: "Alimentation autonome et continue, solutions insonorisées pour VIP, gestion des charges et équilibrage."
    },
    {
      icon: <Box className="w-6 h-6 text-electric-red" />,
      title: "Coffrets & Distribution",
      description: "Coffrets provisoires normalisés, protection complète (disjoncteurs, différentiels) et distribution multi-départs."
    },
    {
      icon: <Droplets className="w-6 h-6 text-electric-red" />,
      title: "Toilettes VIP & Sanitaires",
      description: "Raccordement électrique, éclairage et ventilation pour sanitaires mobiles, solutions discrètes et conformes."
    },
    {
      icon: <Building2 className="w-6 h-6 text-electric-red" />,
      title: "Bureaux Mobiles",
      description: "Alimentation des bases de vie, éclairage, prises, informatique et climatisation pour équipes techniques."
    },
    {
      icon: <Map className="w-6 h-6 text-electric-red" />,
      title: "PIC – Plan d’Installation",
      description: "Élaboration complète du PIC, schémas de distribution, implantation des équipements et étude de sécurité."
    }
  ];

  const galleryImages = [
    "171b869d44f58efd4fa03f4a6bb3afda.jpg",
    "2.jpg",
    "2350c8a3db86997eca466b5c56660d34.jpg",
    "46874b19b0fa75cf218117aa2b64c6ee.jpg",
    "7c4e4623081f93284ce85b573c54e995.jpg",
    "80c50d1bd453fbbd19864f21e2d8f2fd.jpg",
    "Containers-solutions-Bungalow-chantier-standard.jpg",
    "energie1.jpg.webp"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-6">
            <Mic2 className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Solutions pour Événementiel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Installation électrique événementielle – Courant fort & distribution sécurisée
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
                MULTIRESAUX propose des solutions complètes d’installation électrique temporaire pour tous types d’événements (salons, foires, expositions, manifestations culturelles et sportives) ainsi que pour les chantiers provisoires, dans le strict respect des normes de sécurité et de performance.
              </p>
              <p>
                Nous assurons la conception, l’installation, la mise en service et l’exploitation des réseaux électriques temporaires, en garantissant une alimentation fiable, continue et sécurisée pour l’ensemble des équipements.
              </p>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Nos engagements</h3>
                {[
                  "Alimentation fiable et continue",
                  "Respect strict des normes de sécurité",
                  "Solutions silencieuses pour VIP",
                  "Coordination avec les autres corps d'état",
                  "Assistance technique dédiée"
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
              src="/images/SolutionEvn/2.jpg" 
              alt="Installation Événementielle" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Nos Solutions Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                onClick={() => setSelectedImage(`/images/SolutionEvn/${imgName}`)}
              >
                <img 
                  src={`/images/SolutionEvn/${imgName}`} 
                  alt={`Réalisation Événementielle ${index + 1}`} 
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Un événement à organiser ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Confiez-nous la gestion électrique de votre événement pour une tranquillité d'esprit totale.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/50"
            >
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
