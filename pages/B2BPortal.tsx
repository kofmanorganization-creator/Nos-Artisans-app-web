
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Hotel, 
  Building2, 
  Palmtree, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  FileText,
  Gem
} from 'lucide-react';

const B2BPortal: React.FC = () => {
  const sectors = [
    { icon: Hotel, title: "Hôtellerie & Hospitality", desc: "Équipement de chambres, lobby et restaurants avec des pièces authentiques." },
    { icon: Building2, title: "Promoteurs & Bureaux", desc: "Décoration corporate et aménagement d'espaces de travail prestige." },
    { icon: Palmtree, title: "Résidences & Villas", desc: "Collections exclusives pour projets immobiliers haut de gamme." },
    { icon: Briefcase, title: "Cadeaux d'Affaires", desc: "Objets d'exception personnalisés pour vos partenaires stratégiques." }
  ];

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Hero B2B */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] w-fit">
              Service Corporate & Wholesale
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              L'Artisanat d'Excellence pour votre <span className="text-blue-500 italic">Entreprise.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Devenez partenaire de Nos Artisans et accédez à des commandes en volume, des devis personnalisés et un accompagnement dédié pour vos projets d'aménagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/b2b/rfq" className="h-16 px-10 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 hover:scale-105 transition-all">
                Demander un Devis <FileText className="size-5" />
              </Link>
              <Link to="/b2b/dashboard" className="h-16 px-10 border border-white/20 bg-white/5 text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                Espace Client B2B
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Corporate" />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 bg-blue-600 rounded-[2.5rem] shadow-2xl max-w-xs border border-white/20">
              <Gem className="size-10 mb-4 text-white" />
              <p className="text-lg font-display font-bold">Sélection Ivoirama Gold+</p>
              <p className="text-xs text-white/70 mt-2">Uniquement les maîtres artisans les plus fiables pour vos projets.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-24 px-6 lg:px-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Secteurs & Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Nous accompagnons les professionnels dans la valorisation du patrimoine ivoirien au sein de leurs espaces.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((s, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-600/30 transition-all flex flex-col gap-6 group">
                <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <s.icon className="size-7" />
                </div>
                <h3 className="text-xl font-display font-bold">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages B2B */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Pourquoi choisir Nos Artisans B2B ?</h2>
            <div className="grid gap-8">
              {[
                { icon: ShieldCheck, title: "Qualité Institutionnelle", desc: "Audit rigoureux de chaque pièce avant expédition." },
                { icon: Truck, title: "Logistique Dédiée", desc: "Livraison multi-sites et gestion douanière facilitée." },
                { icon: CheckCircle2, title: "Paiements Sécurisés", desc: "Système de séquestre et facturation transparente." }
              ].map((a, i) => (
                <div key={i} className="flex gap-6">
                  <div className="size-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0"><a.icon className="size-6" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{a.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-12 rounded-[4rem] bg-blue-600 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="relative z-10 text-center flex flex-col items-center gap-8">
                <h3 className="text-3xl font-display font-bold">Lancez votre premier projet B2B</h3>
                <p className="text-white/80">Nos conseillers vous répondent sous 24h ouvrées pour toute demande de devis groupé.</p>
                <Link to="/b2b/rfq" className="h-16 px-12 bg-white text-blue-600 font-black uppercase tracking-widest rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-all">
                  Obtenir un Devis <ArrowRight className="size-5" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BPortal;
