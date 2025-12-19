import React, { useState, useEffect } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Sector } from '../types';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '' as Sector | '',
    eventType: '',
    installType: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Prepare message for admin (including extra details)
      const adminMessage = `
Société: ${formData.company}
Secteur: ${formData.sector}
${formData.eventType ? `Type d'événement: ${formData.eventType}` : ''}
${formData.installType ? `Type d'installation: ${formData.installType}` : ''}

Message original:
${formData.message}
      `.trim();

      // 1. Auto-reply to client
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_CLIENT_AUTOREPLY,
        {
          to_name: formData.name,
          email: formData.email,
          message: formData.message
        }
      );

      // 2. Notification to company
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_COMPANY_NOTIFY,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: adminMessage
        }
      );

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        sector: '',
        eventType: '',
        installType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Info */}
        <div className="bg-navy-900 dark:bg-navy-800 p-6 md:p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden transition-colors text-center md:text-left">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Recevez une estimation détaillée sous 24h. Nos ingénieurs analysent votre besoin pour vous proposer la solution technique la plus adaptée.
            </p>
            
            <div className="space-y-6 md:space-y-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-12 h-1 md:w-1 md:h-12 bg-electric-red rounded-full"></div>
                <div>
                  <h4 className="font-bold text-lg md:text-base">Bureau d'étude</h4>
                  <p className="text-sm text-gray-400">Analyse technique & plans</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-12 h-1 md:w-1 md:h-12 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-lg md:text-base">Installation</h4>
                  <p className="text-sm text-gray-400">Équipes qualifiées</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:w-3/5 bg-white dark:bg-navy-900 transition-colors">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Nom Complet</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" 
                  placeholder="Votre nom" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Société</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" 
                  placeholder="Nom de l'entreprise" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" 
                  placeholder="email@entreprise.ma" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Téléphone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors" 
                  placeholder="06 00 00 00 00" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Secteur d'activité</label>
              <select 
                name="sector"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors appearance-none"
                value={formData.sector}
                onChange={handleChange}
              >
                <option value="" disabled>Sélectionnez votre secteur</option>
                {Object.values(Sector).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Dynamic Field based on Sector */}
            {formData.sector === Sector.EVENT && (
              <div className="bg-blue-50 dark:bg-navy-800 p-4 rounded border border-blue-100 dark:border-navy-700 animate-fade-in transition-colors">
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Type d'événement</label>
                <input 
                  type="text" 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded outline-none transition-colors" 
                  placeholder="Concert, Festival, Mariage..." 
                />
              </div>
            )}
            
            {formData.sector === Sector.INDUSTRIE && (
              <div className="bg-blue-50 dark:bg-navy-800 p-4 rounded border border-blue-100 dark:border-navy-700 animate-fade-in transition-colors">
                <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Type d'installation</label>
                <select 
                  name="installType"
                  value={formData.installType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded outline-none transition-colors"
                >
                  <option value="">Sélectionnez le type</option>
                  <option value="Nouveau raccordement">Nouveau raccordement</option>
                  <option value="Maintenance TGBT">Maintenance TGBT</option>
                  <option value="Pose de Transformateur">Pose de Transformateur</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-navy-900 dark:text-white mb-2 transition-colors">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4} 
                className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white rounded focus:border-electric-red focus:ring-1 focus:ring-electric-red outline-none transition-colors"
                placeholder="Décrivez votre besoin..."
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded flex items-center gap-3 text-red-700 dark:text-red-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded flex items-center gap-3 text-green-700 dark:text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">Votre demande a bien été envoyée. Nous vous répondrons sous 24h.</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className={`w-fit mx-auto px-8 font-bold py-3 text-sm rounded shadow-lg transition-all transform flex items-center justify-center gap-2 ${
                status === 'loading' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : status === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-electric-red hover:bg-electric-dark text-white hover:-translate-y-1 shadow-red-200 dark:shadow-none'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  ENVOI EN COURS...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  MESSAGE ENVOYÉ
                </>
              ) : (
                <>
                  ENVOYER LA DEMANDE <Send className="w-4 h-4" />
                </>
              )}
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