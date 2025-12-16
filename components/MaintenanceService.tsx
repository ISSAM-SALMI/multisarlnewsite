import React from 'react';
import { Wrench, Clock, ShieldCheck, FileText, Activity, Zap, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MaintenanceService: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Maintenance Préventive",
      description: "Visites programmées, contrôle thermographique, resserrage des connexions et nettoyage des équipements pour prévenir les pannes."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-blue-500" />,
      title: "Maintenance Corrective",
      description: "Intervention rapide sur panne, remplacement de composants défectueux et remise en service sécurisée des installations."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Dépannage 24/7",
      description: "Service d'astreinte pour les sites critiques. Intervention d'urgence pour garantir la continuité de votre activité."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Audit & Conformité",
      description: "Vérification de la conformité aux normes en vigueur, levée des réserves suite aux contrôles réglementaires."
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-500" />,
      title: "Suivi & Reporting",
      description: "Rapports d'intervention détaillés, carnet de maintenance numérique et traçabilité des opérations effectuées."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Optimisation Énergétique",
      description: "Analyse des consommations, propositions d'amélioration pour réduire la facture énergétique et l'empreinte carbone."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gray-200 dark:bg-gray-800 rounded-xl mb-6">
            <Wrench className="w-8 h-8 text-gray-600 dark:text-gray-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Maintenance & Assistance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Garantir la fiabilité, la sécurité et la pérennité de vos installations électriques
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white dark:bg-navy-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-navy-700 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-6 leading-tight">
                  Pourquoi la maintenance est <span className="text-blue-600 dark:text-blue-400">essentielle ?</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Une installation électrique, aussi performante soit-elle, nécessite un entretien régulier pour conserver ses caractéristiques initiales de sécurité et de fonctionnement.
                  </p>
                  <p>
                    Le service <span className="font-semibold text-navy-900 dark:text-white">Maintenance & Assistance</span> de MULTIRESAUX vous accompagne pour prévenir les risques, éviter les arrêts de production coûteux et prolonger la durée de vie de vos équipements.
                  </p>
                  <p>
                    Nous proposons des contrats de maintenance sur mesure, adaptés à la typologie de votre site (industriel, tertiaire, résidentiel) et à vos contraintes d'exploitation.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-navy-900/50 rounded-2xl p-8 border border-slate-100 dark:border-navy-700">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Nos Engagements
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Réactivité et disponibilité",
                    "Expertise technique multimarque",
                    "Transparence des interventions",
                    "Respect des délais et sécurité",
                    "Conseil et accompagnement",
                    "Optimisation des coûts"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-navy-800 rounded-lg shadow-sm border border-slate-100 dark:border-navy-700 hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="font-medium text-navy-900 dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-navy-900 dark:text-white mb-12">Nos Prestations de Maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 dark:bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* CTA */}
        <div className="bg-navy-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Besoin d'un contrat de maintenance ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ne laissez pas une panne paralyser votre activité. Contactez-nous pour définir ensemble le plan de maintenance adapté à vos besoins.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-gray-900/50"
            >
              Nous contacter <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
