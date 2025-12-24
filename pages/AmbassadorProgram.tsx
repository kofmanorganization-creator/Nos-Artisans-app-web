
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Award, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Globe2,
  HeartHandshake
} from 'lucide-react';

const AmbassadorProgram: React.FC = () => {
  const ambassadors = [
    { name: 'Sarra Sylla', country: 'Sénégal', role: 'Ambassadrice Dakar', referrals: 45, image: 'https://picsum.photos/seed/sarra/200/200' },
    { name: 'Koffi Paul', country: 'Côte d\'Ivoire', role: 'Ambassadeur Abidjan', referrals: 120, image: 'https://picsum.photos/seed/paul/200/200' },
    { name: 'Aicha Ben', country: 'Bénin', role: 'Ambassadrice Cotonou', referrals: 32, image: 'https://picsum.photos/seed/aicha/200/200' },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-20 bg-[#121212] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full border border-tropical/30 bg-tropical/10 text-tropical text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Expansion Mondiale & Impact Local
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold">Programme <span className="text-tropical italic">Ambassadeurs</span></h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl">Rejoignez le mouvement. Devenez le visage de Nos Artisans dans votre pays et participez à la renaissance de l'artisanat africain.</p>
          <button className="h-16 px-12 bg-tropical text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-tropical/20 hover:scale-105 transition-all">
            Postuler au programme
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: 'Commission Premium', desc: 'Gagnez un pourcentage sur chaque vente générée via votre réseau.' },
            { icon: Globe2, title: 'Réseau International', desc: 'Accédez à une communauté de leaders culturels et de designers.' },
            { icon: HeartHandshake, title: 'Impact Social', desc: 'Soutenez directement les artisans et préservez le patrimoine.' },
          ].map((b, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col gap-6">
              <div className="size-14 rounded-2xl bg-tropical/10 flex items-center justify-center text-tropical"><b.icon className="size-7" /></div>
              <h3 className="text-2xl font-display font-bold">{b.title}</h3>
              <p className="text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Ambassadors */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Nos Leaders Locaux</h2>
              <p className="text-slate-500">Ceux qui portent la voix de nos artisans au-delà des frontières.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ambassadors.map((a, idx) => (
              <motion.div 
                key={a.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center gap-6"
              >
                <div className="size-32 rounded-full overflow-hidden border-4 border-tropical p-1">
                  <img src={a.image} className="w-full h-full object-cover rounded-full" alt={a.name} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold">{a.name}</h4>
                  <p className="text-tropical font-black uppercase tracking-widest text-[10px] mt-1">{a.role}</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                   <div><p className="text-xl font-bold">{a.referrals}</p><p className="text-[10px] text-slate-400 font-bold uppercase">Parrainages</p></div>
                   <div><p className="text-xl font-bold">{a.country}</p><p className="text-[10px] text-slate-400 font-bold uppercase">Pays</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-slate-900 p-12 lg:p-24 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="relative z-10 flex flex-col items-center gap-8">
              <Users className="size-16 text-tropical animate-pulse" />
              <h2 className="text-5xl font-display font-bold">Prêt à porter l'héritage ?</h2>
              <p className="text-xl text-slate-400 max-w-2xl">Nous recherchons des passionnés, des curateurs et des connecteurs pour étendre notre écosystème partout en Afrique et dans le monde.</p>
              <button className="h-16 px-16 bg-white text-slate-900 font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Devenir Ambassadeur
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AmbassadorProgram;
