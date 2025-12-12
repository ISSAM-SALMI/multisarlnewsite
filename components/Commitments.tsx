import React from 'react';
import { Shield, Clock, Award, PenTool, CheckCircle, HeartHandshake, History, FileCheck } from 'lucide-react';

export const Commitments: React.FC = () => {
  const items = [
    {
      icon: <Shield className="w-10 h-10 mb-4 text-electric-red" />,
      title: "Qualité des installations",
      text: "Excellence technique et finitions soignées pour des installations durables."
    },
    {
      icon: <CheckCircle className="w-10 h-10 mb-4 text-electric-red" />,
      title: "Sécurité & Conformité",
      text: "Respect strict des normes de sécurité et réglementations en vigueur."
    },
    {
      icon: <Clock className="w-10 h-10 mb-4 text-electric-red" />,
      title: "Rapidité d’exécution",
      text: "Respect des délais et intervention rapide pour vos urgences."
    },
    {
      icon: <Award className="w-10 h-10 mb-4 text-electric-red" />,
      title: "Matériel certifié et durable",
      text: "Utilisation exclusive de composants de marques reconnues."
    },
    {
      icon: <PenTool className="w-10 h-10 mb-4 text-electric-red" />,
      title: "Solutions clés en main",
      text: "Prise en charge globale de l'étude à la mise en service."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Nos Engagements
        </h2>
        <div className="h-1 w-20 bg-electric-red mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg">
          Votre confiance est notre priorité absolue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left mb-16">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start group p-4 rounded-lg hover:bg-navy-800/50 transition-colors">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-white leading-tight">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Guarantees Bar */}
      <div className="border-t border-navy-700 pt-10">
        <h3 className="text-xl font-bold text-center text-white mb-8">Nos Garanties</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 bg-navy-800 px-6 py-3 rounded-full border border-navy-700">
             <FileCheck className="text-blue-400 w-5 h-5" />
             <span className="font-semibold text-gray-200">Certification BT</span>
          </div>
          <div className="flex items-center gap-3 bg-navy-800 px-6 py-3 rounded-full border border-navy-700">
             <HeartHandshake className="text-blue-400 w-5 h-5" />
             <span className="font-semibold text-gray-200">Équipe qualifiée</span>
          </div>
           <div className="flex items-center gap-3 bg-navy-800 px-6 py-3 rounded-full border border-navy-700">
             <History className="text-blue-400 w-5 h-5" />
             <span className="font-semibold text-gray-200">15 ans d’expérience</span>
          </div>
           <div className="flex items-center gap-3 bg-navy-800 px-6 py-3 rounded-full border border-navy-700">
             <Shield className="text-blue-400 w-5 h-5" />
             <span className="font-semibold text-gray-200">Assurance RC</span>
          </div>
        </div>
      </div>
    </div>
  );
};