
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Fixed missing ShieldCheck import
import { 
  FileText, 
  Send, 
  Building2, 
  Calendar, 
  Briefcase, 
  Target, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const B2BRequestQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#121212] text-white">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="size-32 bg-blue-600 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-600/40"
        >
          <CheckCircle2 className="size-16" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Demande Envoyée !</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-lg">Votre demande de devis (RFQ-2024-88) a été transmise à notre équipe B2B. Un conseiller vous contactera sous 24h.</p>
        <div className="flex gap-4">
          <Link to="/b2b/dashboard" className="h-16 px-10 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest shadow-xl flex items-center justify-center">Suivre mon projet</Link>
          <Link to="/b2b" className="h-16 px-10 rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest flex items-center justify-center">Retour au portail</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] min-h-screen text-white py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Request for Quote (RFQ)</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Lancez votre Projet</h1>
          <p className="text-slate-500">Précisez vos besoins et recevez une offre sur mesure sous 24h.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Company Info */}
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3"><Building2 className="size-5 text-blue-500" /> Informations Entreprise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nom de l'Entreprise</label>
                <input required className="w-full h-14 bg-white/5 rounded-xl px-6 border border-white/10 focus:border-blue-500 outline-none transition-all" placeholder="Ex: Groupe ACCOR" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secteur d'Activité</label>
                <select className="w-full h-14 bg-[#1d1d1d] rounded-xl px-6 border border-white/10 focus:border-blue-500 outline-none transition-all">
                  <option>Hôtellerie</option>
                  <option>Immobilier</option>
                  <option>Gouvernement</option>
                  <option>Cadeaux Corporate</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3"><Target className="size-5 text-blue-500" /> Détails du Projet</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Titre du Projet</label>
                <input required className="w-full h-14 bg-white/5 rounded-xl px-6 border border-white/10 focus:border-blue-500 outline-none transition-all" placeholder="Ex: Décoration 20 suites juniors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Description du besoin</label>
                <textarea required rows={4} className="w-full bg-white/5 rounded-xl p-6 border border-white/10 focus:border-blue-500 outline-none transition-all" placeholder="Quelles pièces recherchez-vous ? Quantités estimées ? Matériaux privilégiés ?"></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Budget estimé (FCFA)</label>
                  <select className="w-full h-14 bg-[#1d1d1d] rounded-xl px-6 border border-white/10 focus:border-blue-500 outline-none transition-all">
                    <option>1,000,000 - 5,000,000</option>
                    <option>5,000,000 - 15,000,000</option>
                    <option>15,000,000 - 50,000,000</option>
                    <option>50,000,000 +</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Délai de livraison souhaité</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
                    <input type="date" className="w-full h-14 bg-white/5 rounded-xl pl-16 pr-6 border border-white/10 focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-blue-600/10 border border-blue-600/20 flex gap-4 items-start">
             <ShieldCheck className="size-6 text-blue-500 shrink-0" />
             <p className="text-xs text-blue-400 font-medium leading-relaxed">
               En soumettant cette demande, vous accédez au programme B2B Nos Artisans. Vos données seront traitées par notre département Corporate pour vous fournir l'offre la plus adaptée.
             </p>
          </div>

          <button type="submit" className="w-full h-16 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-blue-600/20 hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95">
            Envoyer ma demande de devis <Send className="size-5" />
          </button>
        </form>

      </div>
    </div>
  );
};

export default B2BRequestQuote;
