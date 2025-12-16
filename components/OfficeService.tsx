import React, { useState } from 'react';
import { Building2, Ruler, Layout, Lightbulb, Network, Fan, ArrowRight, CheckCircle2, Maximize2, X, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OfficeService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <Layout className="w-6 h-6 text-indigo-500" />,
      title: "Conception & Aménagement",
      description: "Étude complète des implantations électriques et réseaux pour optimiser vos espaces de travail."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
      title: "Éclairage Professionnel",
      description: "Solutions d'éclairage LED performantes, ergonomiques et économes en énergie pour bureaux et ateliers."
    },
    {
      icon: <Network className="w-6 h-6 text-indigo-500" />,
      title: "Réseaux VDI",
      description: "Câblage informatique structuré, baies de brassage et connectivité haut débit pour tous les postes."
    },
    {
      icon: <Fan className="w-6 h-6 text-indigo-500" />,
      title: "Confort & Climatisation",
      description: "Alimentation et gestion des systèmes de CVC (Chauffage, Ventilation, Climatisation)."
    },
    {
      icon: <Ruler className="w-6 h-6 text-indigo-500" />,
      title: "Plans & Schémas",
      description: "Réalisation de plans d'exécution précis et conformes aux normes pour l'ensemble des lots techniques."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      title: "Espaces Industriels",
      description: "Équipement électrique robuste pour hangars, zones de stockage et ateliers de production."
    }
  ];

  const galleryImages = [
    "image (1).png",
    "image (2).png",
    "image (3).jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-6">
            <Building2 className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Bureaux et Hangars
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Conception et aménagement technique de vos espaces professionnels
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
              Des espaces de travail performants
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Que ce soit pour des bureaux administratifs modernes ou des hangars industriels fonctionnels, MULTIRESEAUX conçoit et réalise l'intégralité de vos installations techniques. Nous comprenons que l'environnement de travail impacte directement la productivité et le bien-être de vos équipes.
              </p>
              <p>
                Notre approche globale intègre la distribution électrique (CFO), les réseaux informatiques (CFA) et l'éclairage pour créer des espaces cohérents, évolutifs et conformes aux dernières normes de sécurité et d'efficacité énergétique.
              </p>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Nos atouts</h3>
                {[
                  "Conception sur mesure adaptée à votre activité",
                  "Optimisation de l'espace et des flux",
                  "Solutions d'éclairage ergonomiques",
                  "Réseaux informatiques fiables et rapides",
                  "Respect des délais et des contraintes d'exploitation"
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
              src="/images/Conce/image (1).png" 
              alt="Aménagement Bureau" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Notre Expertise Aménagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Conceptions & Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((imgName, index) => (
              <div 
                key={index} 
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(`/images/Conce/${imgName}`)}
              >
                <img 
                  src={`/images/Conce/${imgName}`} 
                  alt={`Conception ${index + 1}`} 
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Un projet d'aménagement ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Confiez-nous la conception technique de vos futurs locaux pour un résultat optimal.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-900/50"
            >
              Discuter de mon projet <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
