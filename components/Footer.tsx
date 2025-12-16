import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-navy-900 to-navy-950 text-white overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-red via-red-500 to-transparent opacity-70"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <Logo className="w-16 h-16" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight block leading-none mb-1">MULTIRESAUX</span>
                <span className="text-sm font-medium text-electric-red tracking-widest uppercase">SARL</span>
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Votre partenaire d'excellence pour les solutions électriques, réseaux informatiques et aménagements événementiels au Maroc. Engagement qualité et expertise technique.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.linkedin.com/company/multireseaux/posts/?feedView=all" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://www.instagram.com/multi.reseaux/" icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-electric-red rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-6">
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                text={<>Bat B, Etage 3, Km 8.5, Boulvard Chefchaouni,<br/>Quartier Ain Sebaa, 20250 Casablanca</>}
              />
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                content={<a href="mailto:info@multireseaux.ma" className="hover:text-electric-red transition-colors">info@multireseaux.ma</a>}
              />
              <ContactItem 
                icon={<Phone className="w-5 h-5" />}
                content={<a href="tel:+212694934280" className="hover:text-electric-red transition-colors font-mono text-lg">06 94 93 42 80</a>}
              />
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-electric-red rounded-full"></span>
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Expertises', href: '#services' },
                { label: 'Catalogue', href: '#vente-location' },
                { label: 'Engagements', href: '#engagements' },
                { label: 'Devis Gratuit', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-red/50 group-hover:bg-electric-red transition-colors"></span>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-electric-red rounded-full"></span>
              Informations
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-electric-red mb-4">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold text-sm">Entreprise Certifiée</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-400 font-mono">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>RC:</span> <span className="text-white">123456</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Patente:</span> <span className="text-white">789012</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>IF:</span> <span className="text-white">34567890</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>CNSS:</span> <span className="text-white">1234567</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} MULTIRESAUX SARL. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-electric-red hover:text-white hover:border-electric-red transition-all duration-300 transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

const ContactItem: React.FC<{ icon: React.ReactNode; text?: React.ReactNode; content?: React.ReactNode }> = ({ icon, text, content }) => (
  <li className="flex items-start gap-4 group">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-electric-red flex-shrink-0 group-hover:bg-electric-red group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div className="text-gray-400 text-sm leading-relaxed pt-2 group-hover:text-gray-300 transition-colors">
      {text || content}
    </div>
  </li>
);