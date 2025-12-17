import React from 'react';
import { Quote, Award, Target, Users, ArrowRight } from 'lucide-react';

export const DirectorWord: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-navy-900 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-red/20 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4" />
            <span>Leadership</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
            Mot du Directeur
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une vision portée par l'excellence et l'engagement durable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white dark:bg-navy-800 rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-100 dark:border-navy-700 overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-electric-red/5 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-tl-full"></div>
            <Quote className="absolute top-12 left-12 w-24 h-24 text-slate-100 dark:text-navy-700 -z-0 transform -rotate-12" />

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-6">
                  Chers partenaires et clients,
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Depuis la fondation de <span className="font-bold text-navy-900 dark:text-white">MULTIRESEAUX</span>, une conviction guide chacune de nos actions : l'excellence technique ne vaut que si elle est bâtie sur une relation de confiance inébranlable.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Notre parcours n'est pas seulement une succession de chantiers, mais une histoire d'engagements tenus. Que ce soit pour des installations industrielles complexes ou des infrastructures tertiaires, nous ne faisons aucun compromis sur la qualité, la sécurité et la conformité normative. C'est cette rigueur qui constitue aujourd'hui notre signature.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Votre confiance a été le moteur de notre croissance et de notre structuration. Elle nous pousse aujourd'hui à voir plus grand, à innover et à nous positionner sur les projets structurants qui façonneront le Maroc de demain.
                </p>

                <div className="bg-slate-50 dark:bg-navy-900/50 p-6 rounded-xl border-l-4 border-electric-red my-8">
                  <p className="text-xl font-medium text-navy-900 dark:text-white italic">
                    "L'avenir se construit ensemble. Soyez assurés que toute l'équipe MULTIRESEAUX restera mobilisée pour transformer vos défis en réussites techniques."
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white">Le Directeur Général</h3>
                  <p className="text-electric-red font-medium">MULTIRESEAUX SARL</p>
                </div>
              </div>

              {/* Image/Profile Section */}
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative w-64 h-64 mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-red to-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-navy-900 rounded-2xl -rotate-6 opacity-10 group-hover:-rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-full h-full bg-slate-200 dark:bg-navy-700 rounded-2xl overflow-hidden shadow-xl">
                     <img 
                       src="/pdg.png" 
                       alt="Directeur Général" 
                       className="w-full h-full object-cover"
                     />
                  </div>
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-navy-900 rounded-lg">
                    <Award className="w-5 h-5 text-electric-red" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Engagement Qualité</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-navy-900 rounded-lg">
                    <Target className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vision Stratégique</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 dark:bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">Prêt à collaborer avec nous ?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut servir vos projets les plus ambitieux.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-electric-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-red-500/30"
          >
            Contactez-nous <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
