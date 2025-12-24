
import React from 'react';
import { motion } from 'framer-motion';
// Fixed missing Users and ArrowRight imports
import { 
  LayoutDashboard, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Briefcase, 
  DollarSign, 
  ChevronRight,
  MessageSquare,
  Users,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const B2BDashboard: React.FC = () => {
  const projects = [
    { 
      id: 'PRJ-102', 
      title: "Aménagement Lobby Hôtel Ivoire", 
      status: 'contract_signed', 
      value: '12,500,000 F', 
      progress: 40,
      nextAction: 'Validation Acompte 30%'
    },
    { 
      id: 'PRJ-105', 
      title: "Cadeaux Fin d'Année GIZ", 
      status: 'quoted', 
      value: '4,200,000 F', 
      progress: 15,
      nextAction: 'Signature du devis'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'contract_signed': return 'text-blue-400 bg-blue-400/10';
      case 'quoted': return 'text-accent bg-accent/10';
      case 'completed': return 'text-tropical bg-tropical/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'contract_signed': return 'Contrat Signé';
      case 'quoted': return 'Devis Reçu';
      case 'completed': return 'Terminé';
      default: return 'En attente';
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Espace Entreprise</h1>
            <p className="text-slate-500">Gestionnaire de projets B2B & Wholesale.</p>
          </div>
          <Link to="/b2b/rfq" className="h-14 px-8 bg-blue-600 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-blue-600/20">
            <Plus className="size-5" /> Nouveau Projet
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Projets Actifs', val: '2', icon: Briefcase, color: 'text-blue-500' },
            { label: 'Total Commandé', val: '16.7M F', icon: DollarSign, color: 'text-tropical' },
            { label: 'Artisans Mobiles', val: '14', icon: Users, color: 'text-accent' },
          ].map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-6">
              <div className={`size-14 rounded-2xl bg-white/5 flex items-center justify-center ${s.color}`}><s.icon /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.label}</p>
                <p className="text-3xl font-bold">{s.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold flex items-center gap-2">
            <LayoutDashboard className="size-6 text-slate-500" /> Projets en cours
          </h2>
          
          <div className="grid gap-6">
            {projects.map(p => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-600/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-slate-500">{p.id}</span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(p.status)}`}>
                        {getStatusLabel(p.status)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{p.title}</h3>
                    <div className="flex items-center gap-8 text-sm text-slate-400">
                      <div className="flex items-center gap-2"><DollarSign className="size-4" /> {p.value}</div>
                      <div className="flex items-center gap-2"><Clock className="size-4" /> Initié le 12/05</div>
                    </div>
                  </div>

                  <div className="w-full md:w-64 flex flex-col gap-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1">
                      <span>Progression</span>
                      <span className="text-blue-400">{p.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${p.progress}%` }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                    <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-600/20 text-[10px] font-bold text-blue-400 flex items-center gap-2">
                      <Clock className="size-3" /> {p.nextAction}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="size-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-slate-400 hover:text-white">
                      <MessageSquare className="size-5" />
                    </button>
                    <button className="size-12 rounded-xl bg-blue-600 flex items-center justify-center hover:scale-105 transition-all">
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2"><FileText className="size-5 text-slate-500" /> Documents & Factures B2B</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Facture_F2024-001.pdf', type: 'Invoice', date: '20/05/2024' },
              { name: 'Contrat_Aménagement.pdf', type: 'Contract', date: '15/05/2024' },
              { name: 'Devis_Mobilier_GIZ.pdf', type: 'Quote', date: '10/05/2024' }
            ].map((doc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                   <div className="size-10 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500"><FileText className="size-5" /></div>
                   <div>
                     <p className="text-sm font-bold group-hover:text-blue-400 transition-colors">{doc.name}</p>
                     <p className="text-[10px] text-slate-500 font-bold uppercase">{doc.type} • {doc.date}</p>
                   </div>
                </div>
                <ArrowRight className="size-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default B2BDashboard;
