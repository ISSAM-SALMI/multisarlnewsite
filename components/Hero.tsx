import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Zap, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy-950">
      {/* Background Image - Right Aligned with Parallax feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: '80% center'
        }}
      >
      </div>

      {/* Advanced Gradient Overlay - Creating a "Split Screen" effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/20 z-10"></div>
      
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 mt-10 md:mt-0">
        <div className="max-w-5xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-navy-800/50 backdrop-blur-md border border-navy-700/50 rounded-full pl-2 pr-4 py-1.5 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-red"></span>
            </span>
            <span className="text-gray-300 font-medium text-xs tracking-widest uppercase">Intervention 24/7 au Maroc</span>
          </div>

          {/* Typography */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tighter mb-6">
              VOTRE PARTENAIRE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ÉLECTRICITÉ</span> <br/>
              <span className="text-outline text-2xl md:text-5xl lg:text-6xl">& TECHNOLOGIES CONNECTÉES</span>
            </h1>
          </div>
          
          <p className="animate-fade-in-up text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl border-l-4 border-electric-red pl-6 py-1 bg-gradient-to-r from-navy-800/30 to-transparent" style={{animationDelay: '0.4s'}}>
            Solutions d'ingénierie clés en main pour le Bâtiment, l'Industrie et l'Événementiel. 
            <span className="block mt-2 text-gray-400 text-base">Installation, Maintenance et Fourniture de matériel certifié aux normes internationales.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#services" 
              className="group relative px-8 py-4 bg-electric-red text-white font-bold text-lg rounded overflow-hidden shadow-lg shadow-red-900/40 transition-all hover:-translate-y-1 hover:shadow-red-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-3">
                NOS SERVICES <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/80 text-white font-bold text-lg rounded hover:bg-white/5 transition-all flex items-center gap-3 backdrop-blur-sm"
            >
              DEMANDER UN DEVIS
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Tech Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-navy-950/80 backdrop-blur-md border-t border-navy-800 animate-fade-in-up hidden md:block" style={{animationDelay: '0.8s'}}>
        <div className="container mx-auto px-6 py-5 flex justify-center items-center text-sm gap-12">
           <div className="flex items-center gap-12 text-gray-400">
             <div className="flex items-center gap-3 group">
               <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-electric-red/10 transition-colors">
                  <Zap className="w-5 h-5 text-electric-red" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Expertise</span>
                  <span className="text-gray-200 font-medium">Haute & Basse Tension</span>
               </div>
             </div>
             
             <div className="w-px h-8 bg-navy-800"></div>

             <div className="flex items-center gap-3 group">
               <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Qualité</span>
                  <span className="text-gray-200 font-medium">Normes NFC 15-100</span>
               </div>
             </div>
             
             <div className="w-px h-8 bg-navy-800"></div>

              <div className="flex items-center gap-3 group">
               <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-green-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-green-500" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">Zone</span>
                  <span className="text-gray-200 font-medium">Partout au Maroc</span>
               </div>
             </div>
           </div>
           
           {/* Decorative abstract lines */}
           <div className="flex gap-1">
             <div className="w-16 h-1 bg-electric-red/20 rounded-full"></div>
             <div className="w-8 h-1 bg-electric-red/40 rounded-full"></div>
             <div className="w-4 h-1 bg-electric-red rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  );
};