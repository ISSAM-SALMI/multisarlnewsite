import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Sector } from '../types';

export const QuoteForm: React.FC = () => {
  const [sector, setSector] = useState<Sector | ''>('');
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Info */}
        <div className="bg-navy-900 p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Recevez une estimation détaillée sous 24h. Nos ingénieurs analysent votre besoin pour vous proposer la solution technique la plus adaptée.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-electric-red"></div>
                <div>
                  <h4 className="font-bold">Bureau d'étude</h4>
                  <p className="text-sm text-gray-400">Analyse technique & plans</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-gray-700"></div>
                <div>
                  <h4 className="font-bold">Installation</h4>
                  <p className="text-sm text-gray-400">Équipes qualifiées</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-electric-red rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:w-3/5 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Nom Complet</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Société</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" placeholder="Nom de l'entreprise" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" placeholder="email@entreprise.ma" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Téléphone</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" placeholder="06 00 00 00 00" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">Secteur d'activité</label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors appearance-none"
                value={sector}
                onChange={(e) => setSector(e.target.value as Sector)}
              >
                <option value="" disabled>Sélectionnez votre secteur</option>
                {Object.values(Sector).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Dynamic Field based on Sector */}
            {sector === Sector.EVENT && (
              <div className="bg-blue-50 p-4 rounded border border-blue-100 animate-fade-in">
                <label className="block text-sm font-bold text-navy-900 mb-2">Type d'événement</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-gray-200 rounded outline-none" placeholder="Concert, Festival, Mariage..." />
              </div>
            )}
            
            {sector === Sector.INDUSTRIE && (
              <div className="bg-blue-50 p-4 rounded border border-blue-100 animate-fade-in">
                <label className="block text-sm font-bold text-navy-900 mb-2">Type d'installation</label>
                <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded outline-none">
                  <option>Nouveau raccordement</option>
                  <option>Maintenance TGBT</option>
                  <option>Pose de Transformateur</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">Message</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors"
                placeholder="Décrivez votre besoin..."
              ></textarea>
            </div>

            <button type="button" className="w-full bg-electric-red hover:bg-electric-dark text-white font-bold py-4 rounded shadow-lg shadow-red-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              ENVOYER LA DEMANDE <Send className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-500 text-center">
              Vos données sont confidentielles. Réponse sous 24h ouvrées.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};