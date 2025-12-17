import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Zap, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Image - Right Aligned with Parallax feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center center'
        }}
      >
      </div>

      {/* Advanced Gradient Overlay - Centered focus */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950/90 z-10"></div>
      
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center -mt-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-navy-800/50 backdrop-blur-md border border-navy-700/50 rounded-full pl-2 pr-4 py-1 mb-6 animate-fade-in-up mx-auto" style={{animationDelay: '0.1s'}}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-red"></span>
            </span>
            <span className="text-gray-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase">Intervention 24/7 au Maroc</span>
          </div>

          {/* Typography */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
              VOTRE PARTENAIRE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">ÉLECTRICITÉ</span> <br/>
              <span className="text-outline text-lg sm:text-xl md:text-4xl lg:text-5xl">& TECHNOLOGIES CONNECTÉES</span>
            </h1>
          </div>
          
          <p className="animate-fade-in-up text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{animationDelay: '0.4s'}}>
            Solutions d'ingénierie clés en main pour le Bâtiment, l'Industrie et l'Événementiel. 
            <span className="block mt-1 text-gray-400 text-xs sm:text-sm">Installation, Maintenance et Fourniture de matériel certifié aux normes internationales.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#services" 
              className="group relative px-6 py-3 bg-electric-red text-white font-bold text-sm sm:text-base rounded overflow-hidden shadow-lg shadow-red-900/40 transition-all hover:-translate-y-1 hover:shadow-red-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                NOS SERVICES <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group px-6 py-3 bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold text-sm sm:text-base rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              DEMANDER UN DEVIS
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Tech Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-navy-950/90 backdrop-blur-md border-t border-navy-800 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <div className="container mx-auto px-4 py-4 md:py-6">
           <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-12 text-gray-400">
             
             <div className="flex items-center gap-3 group min-w-[140px] justify-center md:justify-start">
               <div className="p-1.5 md:p-2 bg-navy-800 rounded-lg group-hover:bg-electric-red/10 transition-colors">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-electric-red" />
               </div>
               <div className="flex flex-col text-left">
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-500">Expertise</span>
                  <span className="text-xs md:text-sm text-gray-200 font-medium whitespace-nowrap">Haute & Basse Tension</span>
               </div>
             </div>
             
             <div className="hidden md:block w-px h-8 bg-navy-800"></div>

             <div className="flex items-center gap-3 group min-w-[140px] justify-center md:justify-start">
               <div className="p-1.5 md:p-2 bg-navy-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
               </div>
               <div className="flex flex-col text-left">
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-500">Qualité</span>
                  <span className="text-xs md:text-sm text-gray-200 font-medium whitespace-nowrap">Normes NFC 15-100</span>
               </div>
             </div>
             
             <div className="hidden md:block w-px h-8 bg-navy-800"></div>

              <div className="flex items-center gap-3 group min-w-[140px] justify-center md:justify-start">
               <div className="p-1.5 md:p-2 bg-navy-800 rounded-lg group-hover:bg-green-500/10 transition-colors">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
               </div>
               <div className="flex flex-col text-left">
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-gray-500">Zone</span>
                  <span className="text-xs md:text-sm text-gray-200 font-medium whitespace-nowrap">Partout au Maroc</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};