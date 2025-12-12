import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold tracking-tight">MULTIRESAUX SARL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous travaux d'électricité, réseaux informatiques et aménagements événementiels au Maroc.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/multireseaux/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded bg-navy-800 flex items-center justify-center hover:bg-electric-red transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/multi.reseaux/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded bg-navy-800 flex items-center justify-center hover:bg-electric-red transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-electric-red pl-3">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric-red flex-shrink-0 mt-1" />
                <span className="text-sm">Hay Arsalan Rue 8, N° 14 Appt 4,<br/>Aïn Borja, Casablanca</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-electric-red flex-shrink-0" />
                <a href="mailto:info@multireseaux.ma" className="text-sm hover:text-white transition-colors">info@multireseaux.ma</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-electric-red flex-shrink-0" />
                <span className="text-sm">05 22 60 36 21</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-electric-red pl-3">Liens Rapides</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Nos Services', href: '#services' },
                { label: 'Catalogue', href: '#vente-location' },
                { label: 'À Propos', href: '#engagements' },
                { label: 'Demander un devis', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-electric-red" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="text-lg font-bold mb-6 border-l-4 border-electric-red pl-3">Mentions Légales</h4>
             <ul className="space-y-2 text-xs text-gray-500 font-mono">
               <li>RC: 123456</li>
               <li>Patente: 789012</li>
               <li>IF: 34567890</li>
               <li>CNSS: 1234567</li>
               <li className="pt-4 text-gray-400 font-sans">© 2025 MULTIRESAUX SARL. Tous droits réservés.</li>
             </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};