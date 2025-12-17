import React, { useState } from 'react';
import { Zap, ShieldCheck, Ruler, Settings, BatteryCharging, Cable, ArrowRight, CheckCircle2, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CFOService: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <Ruler className="w-6 h-6 text-electric-red" />,
      title: "Études & Conception",
      description: "Dimensionnement précis, notes de calcul et schémas unifilaires pour une installation optimisée."
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: "Tableaux & TGBT",
      description: "Installation d'armoires, tableaux divisionnaires et protections conformes aux normes."
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      title: "Sources & Continuité",
      description: "Raccordement réseau, groupes électrogènes et inverseurs de source pour une énergie ininterrompue."
    },
    {
      icon: <Cable className="w-6 h-6 text-orange-500" />,
      title: "Distribution & Câblage",
      description: "Tirage de câbles, pose de chemins de câbles et distribution verticale/horizontale sécurisée."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Force Motrice",
      description: "Alimentation des machines industrielles et circuits dédiés pour charges spécifiques."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Sécurité & Mise à la terre",
      description: "Protection des personnes et équipements, réseaux de terre et parafoudres."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-navy-900 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-red/20 opacity-90"></div>
        {/* Use one of the CFO images as background if suitable, or a generic one. Using a generic one for hero to ensure text readability, gallery will show specific images. */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Expertise Technique</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
            Service CFO – Courant Fort
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Installation, distribution et sécurisation de l’énergie électrique pour vos projets résidentiels, tertiaires et industriels.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
              Une énergie fiable et sécurisée
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Le service <span className="font-bold text-navy-900 dark:text-white">CFO – Courant Fort</span> de MULTIRESEAUX couvre l’ensemble des travaux liés à la production, la distribution et l’utilisation de l’énergie électrique. De la source d’alimentation jusqu’aux points d’utilisation finaux, nous garantissons une installation performante et durable.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Nous intervenons sur des projets variés : résidentiels, tertiaires, industriels, événementiels et chantiers provisoires, avec un engagement ferme sur la sécurité, la fiabilité et la conformité aux normes en vigueur.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-navy-900 rounded-lg border-l-4 border-electric-red">
                <CheckCircle2 className="w-6 h-6 text-electric-red flex-shrink-0" />
                <span className="font-medium text-navy-900 dark:text-white">Conformité stricte aux normes de sécurité</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-navy-900 rounded-lg border-l-4 border-blue-500">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-navy-900 dark:text-white">Solutions adaptées à chaque secteur d'activité</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/CFO/image1.jpeg" 
              alt="Installation CFO" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white font-bold text-xl">Expertise Terrain</p>
              <p className="text-gray-300">Nos équipes qualifiées en action</p>
            </div>
          </div>
        </div>

        {/* Detailed Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Nos Domaines d'Intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-navy-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num} 
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(`/images/CFO/image${num}.jpeg`)}
              >
                <img 
                  src={`/images/CFO/image${num}.jpeg`} 
                  alt={`Réalisation CFO ${num}`} 
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-red/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Besoin d'une installation électrique fiable ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nos ingénieurs sont à votre disposition pour étudier votre projet et vous proposer les meilleures solutions techniques.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-electric-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/50"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
