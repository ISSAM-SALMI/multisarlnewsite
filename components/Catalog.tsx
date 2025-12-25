import React from 'react';
import { Package, Truck, ShieldCheck, Droplets, Container, Zap } from 'lucide-react';

export const Catalog: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Groupes Électrogènes & Accessoires",
      desc: "Groupes électrogènes toutes puissances. Accessoires électriques : multiprises, rallonges, DMX, câbles, coffrets. Solutions pour événements et chantiers.",
      image: "/images/products/image1.png",
      tag: "Vente & Location",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Matériel Sanitaire",
      desc: "Matériel sanitaire de chantier : WC mobiles, lavabos.",
      image: "/images/products/image2.png",
      tag: "Vente & Location",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Conteneurs de Stockage",
      desc: "Conteneurs de stockage pour chantiers BTP et industries.",
      image: "/images/products/image3.png",
      tag: "Vente & Location",
      icon: <Container className="w-5 h-5" />
    }
  ];

  return (
    <div className="py-12 md:py-24 container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <span className="text-electric-red font-bold tracking-wider uppercase text-sm mb-2 block">Catalogue Professionnel</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white transition-colors">
            Vente & Location de Matériel
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg transition-colors">
            Matériel certifié et disponible immédiatement pour vos besoins temporaires ou durables.
          </p>
        </div>
        <a
          href="/pdf/catalogue.pdf"
          download
          className="inline-flex px-6 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-bold rounded hover:bg-navy-800 dark:hover:bg-gray-100 transition-colors mt-6 md:mt-0 mx-auto md:mx-0"
        >
          Demander le catalogue PDF
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.id} className="group cursor-pointer flex flex-col h-full text-center md:text-left">
            <div className="relative h-64 overflow-hidden rounded-lg mb-6 shadow-md">
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur text-navy-900 dark:text-white text-xs font-bold px-3 py-1 rounded shadow-sm z-10 flex items-center gap-2 transition-colors">
                {item.icon} {item.tag}
              </div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-electric-red transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow transition-colors">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 dark:bg-navy-800 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-slate-200 dark:border-navy-700 transition-colors">
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <div className="p-2 bg-white dark:bg-navy-900 rounded-full text-electric-red shadow-sm transition-colors">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base text-navy-900 dark:text-white transition-colors">Stock disponible</h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm transition-colors">Disponibilité immédiate sur Casablanca.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <div className="p-2 bg-white dark:bg-navy-900 rounded-full text-electric-red shadow-sm transition-colors">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base text-navy-900 dark:text-white transition-colors">Livraison sur site</h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm transition-colors">Partout au Maroc.</p>
          </div>
        </div>
        <a href="https://wa.me/212694934280" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white dark:bg-navy-900 border border-gray-300 dark:border-navy-600 text-navy-900 dark:text-white font-bold text-xs rounded hover:border-navy-900 dark:hover:border-white hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors w-auto text-center">
          Contacter le service commercial
        </a>
      </div>
    </div>
  );
};