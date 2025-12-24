
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  Gem, 
  Check, 
  ArrowRight, 
  Search,
  CheckCircle2,
  Lock,
  Leaf,
  Sparkles,
  Smartphone,
  Globe,
  Star,
  ShoppingBag,
  Handshake,
  UserCheck
} from 'lucide-react';

const LabelIvoirama: React.FC = () => {
  const levels = [
    {
      title: 'Argent',
      subtitle: "L'AUTHENTICITÉ VÉRIFIÉE",
      icon: ShieldCheck,
      features: ['Identité vérifiée', 'Origine ivoirienne certifiée', '10 produits listés max'],
      color: 'text-slate-400',
      badge: null
    },
    {
      title: 'Or',
      subtitle: "L'EXCELLENCE ARTISANALE",
      icon: Award,
      features: ['Tout du niveau Argent', 'Qualité matériaux supérieure', 'Certificat NFT inclus', 'Visibilité accrue'],
      color: 'text-accent',
      badge: 'Populaire'
    },
    {
      title: 'Platinum',
      subtitle: "L'IMPACT DURABLE",
      icon: Leaf,
      features: ['Tout du niveau Or', 'Pratiques éco-responsables', 'Impact social prouvé', 'Accès prioritaire Web3'],
      color: 'text-blue-400',
      badge: null
    },
    {
      title: 'Diamant',
      subtitle: "LE MAÎTRE ARTISAN",
      icon: Gem,
      features: ['Excellence absolue', 'Reconnaissance internationale', 'Mentoring & Formation', 'Boutique Metaverse dédiée'],
      color: 'text-cyan-400',
      badge: null
    }
  ];

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
          >
            Excellence Certifiée & Authenticité
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Le Label <span className="text-accent">Ivoirama</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Le standard d'or pour l'artisan ivoirien. Une certification rigoureuse qui garantit l'origine, la qualité et l'impact social de chaque création, sécurisée par la blockchain.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="h-14 px-10 rounded-full bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              Obtenir le Label
            </button>
            <button className="h-14 px-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all">
              Découvrir les Artisans
            </button>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section className="py-24 px-6 bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Niveaux de Certification</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Notre système de classification valorise l'expertise et l'engagement. Chaque niveau débloque des avantages exclusifs sur la marketplace.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((l, idx) => (
              <motion.div 
                key={l.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#1d1d1d] border border-white/5 hover:border-accent/30 transition-all duration-500"
              >
                {l.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {l.badge}
                  </div>
                )}
                <div className={`size-14 rounded-2xl bg-white/5 flex items-center justify-center ${l.color} mb-8 shadow-inner`}>
                  <l.icon className="size-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1">{l.title}</h3>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-8 ${l.color}`}>{l.subtitle}</p>
                
                <ul className="space-y-4 mb-10">
                  {l.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-xs font-medium text-slate-400">
                      <Check className="size-4 text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                
                <button className="text-accent text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA SECTION */}
      <section className="py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Critères d'Évaluation Rigueur & Transparence</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">Le label Ivoirama s'appuie sur une grille d'évaluation stricte combinant expertise humaine et intelligence artificielle pour garantir l'équité.</p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0"><CheckCircle2 className="size-6" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Authenticité & Traçabilité</h4>
                  <p className="text-slate-500 text-sm">Vérification de l'origine des matières premières et du savoir-faire traditionnel ivoirien.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-tropical/10 flex items-center justify-center text-tropical shrink-0"><Leaf className="size-6" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Impact Durable</h4>
                  <p className="text-slate-500 text-sm">Utilisation responsable des ressources et impact positif sur les communautés locales.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><Sparkles className="size-6" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Innovation & Design</h4>
                  <p className="text-slate-500 text-sm">Qualité esthétique, finitions et capacité à innover tout en respectant la tradition.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1590664216212-62e7637d1665?auto=format&fit=crop&w=1000&q=80" className="w-full aspect-[4/3] object-cover" alt="Artisan" />
            </div>
            <div className="absolute bottom-10 left-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl">
              <div className="size-10 rounded-full bg-tropical/20 flex items-center justify-center text-tropical"><ShieldCheck /></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Confiance</p>
                <p className="text-sm font-bold">Blockchain Secured</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 italic">Chaque label est un NFT unique.</p>
          </div>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="py-32 px-6 bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20">Pourquoi obtenir le Label ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-[#1d1d1d] border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent"><ShoppingBag /></div>
                <h3 className="text-2xl font-display font-bold">Pour les Artisans</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Augmentation moyenne de 40% des ventes grâce à la confiance client.",
                  "Accès au marché international et aux collectionneurs Web3.",
                  "Protection de la propriété intellectuelle via la blockchain."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                    <CheckCircle2 className="size-5 text-accent shrink-0" /> {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 rounded-[2.5rem] bg-[#1d1d1d] border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-tropical/10 flex items-center justify-center text-tropical"><UserCheck /></div>
                <h3 className="text-2xl font-display font-bold">Pour les Clients</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Garantie d'acheter une pièce authentique et de qualité.",
                  "Réception d'un certificat d'authenticité numérique (NFT) transférable.",
                  "Soutien direct à l'économie locale et aux pratiques durables."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                    <CheckCircle2 className="size-5 text-tropical shrink-0" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-accent mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Prêt à rejoindre l'élite de l'artisanat ?</h2>
          <p className="text-xl text-white/80 mb-12">Commencez votre processus de labellisation aujourd'hui et ouvrez les portes d'un marché mondial valorisant votre savoir-faire unique.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="h-16 px-12 rounded-full bg-white text-accent font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
              Demander la Labellisation
            </button>
            <button className="h-16 px-12 rounded-full border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Télécharger le Guide
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LabelIvoirama;
