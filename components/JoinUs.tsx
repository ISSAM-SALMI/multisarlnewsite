import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, GraduationCap, HardHat, Mail, CheckCircle2, Search, Filter, MapPin, Calendar, Clock } from 'lucide-react';

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
          <div className="max-w-6xl mx-auto">
            <button 
              onClick={() => navigate('/nous-rejoindre')}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-electric-red mb-8 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Retour aux offres
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Header Card */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-navy-700">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 text-electric-red border border-slate-100 dark:border-navy-700 shrink-0">
                      {job && <job.icon className="w-10 h-10" />}
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4 leading-tight">
                        {job?.title}
                      </h1>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300">
                          <Briefcase className="w-4 h-4" />
                          {job?.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300">
                          <MapPin className="w-4 h-4" />
                          Casablanca
                        </span>
                        {job && (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border ${getStatusColor(job.status)}`}>
                            <div className={`w-2 h-2 rounded-full ${job.status === 'Ouvert' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            {job.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description / Missions */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-navy-700">
                  <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-1 h-6 bg-electric-red rounded-full"></div>
                    Missions & Responsabilités
                  </h2>
                  <ul className="space-y-4">
                    {job?.missions.map((mission, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <div className="mt-1.5 w-6 h-6 rounded-full bg-electric-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-red/20 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-electric-red" />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-navy-700">
                  <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-1 h-6 bg-electric-red rounded-full"></div>
                    Profil Recherché
                  </h2>
                  <ul className="space-y-4">
                    {job?.profile.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <div className="mt-1.5 w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Apply Card */}
                  <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-xl text-navy-900 dark:text-white relative overflow-hidden border border-slate-100 dark:border-navy-700">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric-red/5 dark:bg-electric-red/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">Intéressé(e) ?</h3>
                      <p className="text-slate-600 dark:text-gray-300 text-sm mb-6">
                        Envoyez-nous votre candidature dès maintenant.
                      </p>
                      
                      {job?.status !== 'Clôturé' ? (
                        <>
                          <p className="text-sm text-slate-500 dark:text-gray-400 mb-2">Postulez à cette adresse :</p>
                          <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-slate-200 dark:border-white/10 text-center">
                            <a 
                              href={`mailto:info@multireseaux.ma?subject=Candidature - ${job?.title}`}
                              className="text-lg font-bold text-electric-red hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center justify-center gap-2"
                            >
                              <Mail className="w-4 h-4" />
                              info@multireseaux.ma
                            </a>
                          </div>
                        </>
                      ) : (
                        <button disabled className="w-full bg-slate-100 dark:bg-slate-700 text-slate-400 font-bold py-4 px-6 rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                          Offre Clôturée
                        </button>
                      )}
                      
                      <p className="text-xs text-center text-slate-400 dark:text-gray-500 mt-4">
                        Réponse sous 2 à 3 semaines
                      </p>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-navy-700">
                    <h3 className="font-bold text-navy-900 dark:text-white mb-4">Informations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-navy-700">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Contrat</span>
                        <span className="font-medium text-navy-900 dark:text-white">{job?.type}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-navy-700">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Lieu</span>
                        <span className="font-medium text-navy-900 dark:text-white">Casablanca</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-navy-700">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Date de publication</span>
                        <span className="font-medium text-navy-900 dark:text-white">Récent</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Référence</span>
                        <span className="font-medium text-navy-900 dark:text-white text-xs font-mono bg-slate-100 dark:bg-navy-900 px-2 py-1 rounded">
                          {job?.id.split('-')[1]?.toUpperCase() || 'REF'}
                        </span>
                      </div>
                    </div>
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
