import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, GraduationCap, HardHat, Mail, CheckCircle2, Search, Filter } from 'lucide-react';

// Job Data
const jobs = [
  {
    id: 'stage-assistant-responsable-technique',
    title: 'STAGE – Assistant Responsable Technique (H/F)',
    type: 'Stage',
    status: 'Ouvert',
    icon: GraduationCap,
    missions: [
      'Assistance au suivi des chantiers électriques (CFO / CFA)',
      'Aide à l’organisation des équipes terrain',
      'Participation à la gestion du matériel et outillage',
      'Contrôle de l’avancement des travaux',
      'Appui au responsable technique sur les aspects sécurité et qualité'
    ],
    profile: [
      'Étudiant(e) ou jeune diplômé(e) en électricité / électrotechnique',
      'Intérêt pour le terrain et la gestion de chantier',
      'Sérieux(se), motivé(e), organisé(e)',
      'Stage PFE / stage long / stage d’initiation'
    ]
  },
  {
    id: 'stage-charge-etudes-electriques',
    title: 'STAGE – Chargé d’Études Électriques (H/F)',
    type: 'Stage',
    status: 'Ouvert',
    icon: Briefcase,
    missions: [
      'Réalisation des études techniques et dimensionnement',
      'Conception des plans et schémas électriques (AutoCAD)',
      'Participation à l\'élaboration des devis et chiffrages',
      'Veille normative et technique',
      'Support aux équipes opérationnelles'
    ],
    profile: [
      'Formation supérieure en génie électrique',
      'Maîtrise des outils informatiques et logiciels de CAO',
      'Esprit d\'analyse et de synthèse',
      'Curiosité technique et rigueur'
    ]
  },
  {
    id: 'recrutement-ouvriers-electriciens',
    title: 'RECRUTEMENT – Ouvriers Électriciens (H/F)',
    type: 'Emploi',
    status: 'Ouvert',
    icon: HardHat,
    missions: [
      'Installation et raccordement des équipements électriques',
      'Pose de chemins de câbles et tirage de câbles',
      'Montage et câblage d\'armoires électriques',
      'Maintenance préventive et curative',
      'Respect des consignes de sécurité sur chantier'
    ],
    profile: [
      'CAP/BEP/Bac Pro Électrotechnique',
      'Expérience confirmée sur des chantiers similaires',
      'Habilitations électriques à jour',
      'Permis B apprécié',
      'Esprit d\'équipe et ponctualité'
    ]
  }
];

export const JoinUs: React.FC = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');
  
  const job = jobs.find(j => j.id === jobId);

  // Scroll to top when component mounts or jobId changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.missions.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'Tous' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ouvert': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'En cours': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800';
      case 'Clôturé': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  if (jobId && !job) {
      return (
          <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Offre introuvable</h2>
              <Link to="/nous-rejoindre" className="text-electric-red hover:underline">Retour aux offres</Link>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {!jobId ? (
          // LIST VIEW
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-black text-navy-900 dark:text-white mb-4">
                REJOIGNEZ <span className="text-electric-red">L'ÉQUIPE</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Construisez votre carrière avec nous. Découvrez nos opportunités de stages et d'emplois.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white dark:bg-navy-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-navy-700 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Rechercher un poste, une compétence..." 
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-600 text-navy-900 dark:text-white focus:ring-2 focus:ring-electric-red focus:border-transparent outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  <Filter className="text-slate-400 w-5 h-5 flex-shrink-0" />
                  {['Tous', 'Ouvert', 'Clôturé'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        statusFilter === status 
                          ? 'bg-electric-red text-white shadow-md' 
                          : 'bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-600'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((jobItem) => (
                  <div 
                    key={jobItem.id}
                    onClick={() => navigate(`/nous-rejoindre/${jobItem.id}`)}
                    className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-electric-red/30 group relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-navy-700 text-electric-red group-hover:bg-electric-red group-hover:text-white transition-colors">
                        <jobItem.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-electric-red transition-colors">
                            {jobItem.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300">
                            {jobItem.type}
                          </span>
                          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(jobItem.status)}`}>
                            {jobItem.status}
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:block self-center">
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-electric-red group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400 text-lg">Aucune offre ne correspond à votre recherche.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setStatusFilter('Tous'); }}
                    className="mt-4 text-electric-red font-bold hover:underline"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          // DETAIL VIEW
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => navigate('/nous-rejoindre')}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-electric-red mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Retour aux offres
            </button>

            <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-navy-700">
              <div className="p-8 md:p-10">
                <div className="flex items-start sm:items-center gap-4 mb-6">
                   <div className="p-3 rounded-lg bg-electric-red/10 text-electric-red">
                      {job && <job.icon className="w-8 h-8" />}
                   </div>
                   <div className="flex-grow">
                       <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white leading-tight">
                         {job?.title}
                       </h1>
                       <div className="flex flex-wrap gap-2 mt-3">
                         <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300">
                          {job?.type}
                         </span>
                         {job && (
                           <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(job.status)}`}>
                            {job.status}
                           </span>
                         )}
                       </div>
                   </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-electric-red" /> Missions
                    </h2>
                    <ul className="space-y-3">
                      {job?.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric-red flex-shrink-0"></span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-electric-red" /> Profil recherché
                    </h2>
                    <ul className="space-y-3">
                      {job?.profile.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric-red flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="pt-8 mt-8 border-t border-slate-100 dark:border-navy-700">
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-4">
                      {job?.status === 'Clôturé' ? 'Cette offre est actuellement clôturée' : 'Intéressé(e) ? Envoyez votre candidature'}
                    </h3>
                    {job?.status !== 'Clôturé' ? (
                      <div className="bg-slate-50 dark:bg-navy-900/50 p-6 rounded-xl border border-slate-200 dark:border-navy-600">
                        <p className="text-lg text-navy-900 dark:text-white font-medium text-center">
                          Merci d'envoyer votre <span className="font-bold text-electric-red">CV</span> à l'adresse suivante :
                        </p>
                        <a 
                          href={`mailto:info@multireseaux.ma?subject=Candidature - ${job?.title}`}
                          className="block text-center text-2xl md:text-3xl font-bold text-electric-red hover:underline mt-2 break-all"
                        >
                          info@multireseaux.ma
                        </a>
                      </div>
                    ) : (
                      <button 
                        disabled
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-300 dark:bg-navy-700 text-slate-500 dark:text-slate-400 font-bold rounded-lg cursor-not-allowed w-full sm:w-auto"
                      >
                        <Mail className="w-5 h-5" />
                        OFFRE CLÔTURÉE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
