import React from 'react';
import { Calendar, TrendingUp, ShieldCheck, Target, Award, Briefcase, Users, Building2, ArrowRight } from 'lucide-react';

export const History: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-red/20 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10">
            <Calendar className="w-4 h-4" />
            <span>Depuis 2010</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            De la petite entreprise d'installation électrique à l'acteur majeur des solutions techniques au Maroc. Une décennie d'expertise, de croissance et de confiance.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Fondée en 2010, <span className="font-bold text-navy-900 dark:text-white">MULTIRESEAUX</span> est née d’une volonté claire : offrir des solutions électriques et techniques fiables, conformes aux normes en vigueur, tout en répondant avec précision aux besoins réels des projets professionnels. Dès ses débuts, l’entreprise s’est positionnée comme un acteur de terrain, axé sur la qualité d’exécution, la sécurité des installations et le respect des engagements.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-8 container mx-auto px-4 md:px-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-red via-navy-200 dark:via-navy-700 to-electric-red/50 transform -translate-x-1/2 md:translate-x-0"></div>

        {/* 2010-2015 */}
        <div className="relative mb-12 md:flex justify-between items-center w-full group">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-navy-800 border-4 border-electric-red rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6 text-electric-red" />
          </div>
          <div className="ml-12 md:ml-0 md:w-5/12 bg-slate-50 dark:bg-navy-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-all">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
              2010 – 2015
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Les fondations d’un savoir-faire</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Concentration sur la maîtrise technique et la satisfaction client. Développement des compétences en installations basse tension, réseaux CFO/CFA et maintenance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-electric-red rounded-full"></div>
                Investissement dans l'outillage professionnel
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-electric-red rounded-full"></div>
                Rigueur organisationnelle et sécurité
              </li>
            </ul>
          </div>
        </div>

        {/* 2016-2020 */}
        <div className="relative mb-12 md:flex justify-between items-center w-full flex-row-reverse group">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-navy-800 border-4 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
            <TrendingUp className="w-6 h-6 text-blue-500" />
          </div>
          <div className="ml-12 md:ml-0 md:w-5/12 bg-slate-50 dark:bg-navy-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-all">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
              2016 – 2020
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Montée en compétence et diversification</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passage à des projets complexes intégrant études électriques, TGBT et éclairage industriel. Vision globale du projet de l'étude à la mise en service.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Bureau d'études techniques intégré
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Organisation structurée des chantiers
              </li>
            </ul>
          </div>
        </div>

        {/* 2021-2025 */}
        <div className="relative mb-12 md:flex justify-between items-center w-full group">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-navy-800 border-4 border-electric-red rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
            <Building2 className="w-6 h-6 text-electric-red" />
          </div>
          <div className="ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-xl border-l-4 border-electric-red hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-electric-red font-bold rounded-full text-sm mb-4">
              2021 – 2025
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Structuration & Références Majeures</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Structuration en SARL et gestion de projets d'envergure. Confiance renouvelée par des partenaires majeurs comme <span className="font-semibold text-navy-900 dark:text-white">OCP, STCR, PROCHECK, BCP</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-electric-red" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Équipe Ingénieurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-electric-red" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Projets Industriels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision 2026 */}
        <div className="relative md:flex justify-between items-center w-full flex-row-reverse group">
          <div className="hidden md:block w-5/12"></div>
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-electric-red text-white rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/50 animate-pulse">
            <Target className="w-6 h-6" />
          </div>
          <div className="ml-12 md:ml-0 md:w-5/12 bg-gradient-to-br from-navy-900 to-navy-800 p-6 rounded-2xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-red/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-bold mb-4 border border-white/20">
                <ArrowRight className="w-4 h-4" />
                Vision 2026
              </div>
              <h3 className="text-xl font-bold mb-4">Intégration des Marchés Publics</h3>
              <p className="text-gray-300 mb-6">
                Une étape stratégique majeure : contribuer aux projets structurants à l'échelle nationale avec un haut niveau de conformité et de qualité.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-electric-red" />
                  <span className="text-sm">Renforcement des agréments & qualifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-electric-red" />
                  <span className="text-sm">Développement durable & responsable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values Footer */}
      <div className="bg-slate-50 dark:bg-navy-900 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">Une croissance basée sur la confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Respect des normes",
              "Fiabilité des installations",
              "Transparence client",
              "Engagement délais",
              "Performance continue"
            ].map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-navy-700">
                <div className="w-2 h-2 bg-electric-red rounded-full mx-auto mb-3"></div>
                <p className="font-semibold text-sm text-navy-900 dark:text-white">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
