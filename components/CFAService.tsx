import React, { useState } from 'react';
import { Network, Shield, Lock, Flame, Cpu, HardHat, Wrench, ArrowRight, CheckCircle2, Maximize2, X, FileText, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CFAService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-electric-red" />,
      title: "Études & ingénierie CFA",
      description: "Analyse des besoins, études de couverture, schémas synoptiques et coordination avec les lots CFO."
    },
    {
      icon: <Network className="w-6 h-6 text-electric-red" />,
      title: "Réseaux informatiques",
      description: "Câblage structuré RJ45, fibre optique, baies de brassage et certification des liaisons."
    },
    {
      icon: <Shield className="w-6 h-6 text-electric-red" />,
      title: "Vidéosurveillance",
      description: "Caméras IP/analogiques, enregistreurs, supervision et accès à distance sécurisé."
    },
    {
      icon: <Lock className="w-6 h-6 text-electric-red" />,
      title: "Contrôle d’accès",
      description: "Badges, biométrie, interphonie audio/vidéo et gestion des droits d'accès."
    },
    {
      icon: <Flame className="w-6 h-6 text-electric-red" />,
      title: "Détection incendie",
      description: "Systèmes conventionnels et adressables, détecteurs et alarmes sonores/visuelles."
    },
    {
      icon: <Cpu className="w-6 h-6 text-electric-red" />,
      title: "GTB / GTC",
      description: "Supervision technique, gestion intelligente de l'éclairage et optimisation énergétique."
    },
    {
      icon: <HardHat className="w-6 h-6 text-electric-red" />,
      title: "Installations provisoires",
      description: "Réseaux temporaires, vidéosurveillance de chantier et contrôle d'accès provisoire."
    },
    {
      icon: <Wrench className="w-6 h-6 text-electric-red" />,
      title: "Maintenance",
      description: "Tests fonctionnels, mise en service, formation et maintenance préventive/corrective."
    }
  ];

  const galleryImages = [
    "image1 (1).jpeg",
    "image1 (1).jpg",
    "image1 (2).jpeg",
    "image1 (2).jpg",
    "image1 (3).jpeg",
    "image1 (3).jpg",
    "image1 (4).jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-20 pb-10 md:pt-24 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
            <Wifi className="w-8 h-8 text-electric-blue" />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Service CFA – Courant Faible
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Réseaux de communication, sécurité et systèmes intelligents
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-6">
              Présentation générale
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4 text-base md:text-lg">
              <p>
                Le service CFA – Courant Faible de MULTIRESAUX regroupe l’ensemble des réseaux de communication, de sécurité et de gestion intelligente des bâtiments.
              </p>
              <p>
                Nous concevons, installons et mettons en service des solutions fiables, évolutives et sécurisées, adaptées aux bâtiments tertiaires, industriels, résidentiels, événementiels et chantiers provisoires.
              </p>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Nos engagements CFA</h3>
                {[
                  "Fiabilité et performance des systèmes",
                  "Sécurité des données et des personnes",
                  "Respect des normes et bonnes pratiques",
                  "Solutions évolutives et pérennes",
                  "Équipe qualifiée et réactive"
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[250px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/CFA/image1 (1).jpg" 
              alt="Installation CFA" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 dark:text-white mb-8 md:mb-12">Nos Domaines d'Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1 text-center md:text-left">
                <div className="w-12 h-12 bg-blue-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
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
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 dark:text-white mb-8 md:mb-12">Réalisations en Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((imgName, index) => (
              <div 
                key={index} 
                className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(`/images/CFA/${imgName}`)}
              >
                <img 
                  src={`/images/CFA/${imgName}`} 
                  alt={`Réalisation CFA ${index + 1}`} 
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
        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Un projet de réseau ou sécurité ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nos experts CFA vous accompagnent de la conception à la maintenance de vos installations.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/50 text-sm md:text-base"
            >
              Demander une étude <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
