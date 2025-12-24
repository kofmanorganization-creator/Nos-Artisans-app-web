
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  PlayCircle, 
  Award, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Maximize2, 
  ChevronLeft,
  Clock,
  Gem,
  CheckCircle2,
  Sparkles,
  Leaf,
  Users,
  Star
} from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ARTISANS } from '../constants';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1590664216212-62e7637d1665?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1621506821612-421715053cc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="flex flex-col bg-surface">
      
      {/* SECTION 1: HERO SLIDER PREMIUM */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10"></div>
              <img src={HERO_IMAGES[currentImage]} className="w-full h-full object-cover" alt="Artisanat" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-6 hidden md:flex justify-between pointer-events-none">
          <button onClick={prevImage} className="size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/20 text-white transition-all flex items-center justify-center pointer-events-auto active:scale-90"><ChevronLeft className="size-6" /></button>
          <button onClick={nextImage} className="size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/20 text-white transition-all flex items-center justify-center pointer-events-auto active:scale-90"><ChevronRight className="size-6" /></button>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center gap-8">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[10px] font-black text-white uppercase tracking-[0.3em]">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span> Marketplace Phygitale d'Exception
          </motion.span>
          
          <motion.h1 key={`title-${currentImage}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-9xl font-display font-bold leading-[0.9] text-white drop-shadow-2xl">
            L'Âme de <br /><span className="text-primary italic font-medium">l'Afrique</span>.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-5 w-full justify-center pt-4">
            <Link to="/marketplace" className="h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-black uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-3 min-w-[240px] shadow-2xl">Explorer la Galerie</Link>
            <Link to="/pieces-uniques" className="h-16 px-12 rounded-full bg-white/10 backdrop-blur border border-white/30 hover:bg-white text-white hover:text-black text-base font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 min-w-[240px]"><Gem className="size-5" /> Pièces Uniques™</Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: LES DROPS EXCLUSIFS (URGENCE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2"><Clock className="size-4 animate-pulse" /> Ventes Flash : Fin dans 14h 22m</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Les Drops du Moment</h2>
            </div>
            <Link to="/marketplace" className="text-primary font-bold hover:underline flex items-center gap-2">Voir tout le drop <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {MOCK_PRODUCTS.slice(0, 3).map((p, i) => (
              <motion.div key={p.id} whileHover={{ y: -10 }} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                  <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">-20% Limited</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{p.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-primary">{p.price.toLocaleString()} F</span>
                    <button className="size-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors"><ChevronRight className="size-5" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: NAVIGATION PAR CATÉGORIES (VISUEL) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 h-[400px] bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-4xl font-display font-bold mb-4">Sculptures Royales</h3>
              <Link to="/marketplace" className="w-fit px-6 py-2 rounded-full border border-white/30 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">Découvrir</Link>
            </div>
          </div>
          <div className="h-[400px] bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1621506821612-421715053cc3?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-display font-bold mb-4">Textiles Kita</h3>
              <Link to="/marketplace" className="w-fit px-6 py-2 rounded-full border border-white/30 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">Découvrir</Link>
            </div>
          </div>
          <div className="h-[400px] bg-tropical rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-display font-bold mb-4">Mobilier Ethika</h3>
              <Link to="/marketplace" className="w-fit px-6 py-2 rounded-full border border-white/30 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">Découvrir</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARTISAN DU MOMENT (STORYTELLING) */}
      <section className="py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 size-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img src={MOCK_ARTISANS[0].image} className="w-full h-full object-cover" alt="Artisan" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><ShieldCheck /></div>
                <h4 className="font-bold">Certifié Platinum</h4>
              </div>
              <p className="text-xs text-slate-500 italic">"Chaque sculpture est une conversation avec mes ancêtres, un pont entre hier et demain."</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <span className="text-primary font-black uppercase tracking-widest text-xs">Portrait d'Excellence</span>
            <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight">Maitre Jean Kouamé</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">Artisan sculpteur depuis 40 ans à Grand-Bassam, Jean Kouamé est l'un des rares gardiens de la technique Akan "à cœur perdu". Il a été sélectionné pour représenter l'artisanat ivoirien au Pavillon International cette année.</p>
            <Link to="/marketplace" className="w-fit h-14 px-10 rounded-full border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3">Découvrir son atelier <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: GARANTIES IVOIRAMA (CONFIANCE) */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">La Confiance Ivoirama</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Votre investissement est protégé par les standards les plus élevés du marché.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Authenticité", desc: "100% fait main certifié" },
              { icon: Zap, title: "Blockchain", desc: "NFT de propriété inclus" },
              { icon: Users, title: "Éthique", desc: "Rémunération juste garantie" },
              { icon: Star, title: "Excellence", desc: "Sélection ultra-rigoureuse" }
            ].map((g, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <g.icon className="size-12 text-primary mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-2">{g.title}</h4>
                <p className="text-xs text-slate-400 font-medium">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PHYGITAL EXPLAINER (INNOVATION) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-display font-bold mb-8">Plus qu'un objet, <br /><span className="text-primary">un actif numérique.</span></h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">Chaque achat sur Nos Artisans déclenche la création d'un "Passeport Phygital". Vous recevez l'objet physique chez vous et son jumeau numérique NFT dans votre wallet, garantissant sa valeur et son authenticité à vie.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <p className="font-bold text-sm">Objet Physique d'exception</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <p className="font-bold text-sm">Certificat de Propriété NFT</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <p className="font-bold text-sm">Accès au Cercle des Collectionneurs</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square bg-slate-100 rounded-[4rem] flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1590664216212-62e7637d1665?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="NFT" />
               <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-12 text-center">
                  <Zap className="size-16 mb-6 fill-white" />
                  <h3 className="text-3xl font-display font-bold mb-4">IVR-7728-NFT</h3>
                  <p className="text-xs font-black uppercase tracking-widest border border-white/40 px-6 py-2 rounded-full">Authentifié Blockchain</p>
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 size-64 bg-primary/10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DECORA AI (ENGAGEMENT) */}
      <section className="py-24 px-6 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-12 lg:p-24 flex flex-col items-center text-center gap-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tropical/10 border border-tropical/20 text-tropical text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="size-4" /> Powered by Gemini 3.0
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl">Visualisez le prestige <br />dans votre propre espace.</h2>
          <p className="text-xl text-slate-400 max-w-2xl">Utilisez Decora AI pour projeter virtuellement nos plus belles pièces chez vous avec une précision millimétrée.</p>
          <Link to="/decora" className="h-16 px-12 rounded-full bg-white text-slate-900 font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-2xl">Essayer Decora AI <Maximize2 className="size-5" /></Link>
        </div>
      </section>

      {/* SECTION 8: SÉLECTIONNÉS POUR VOUS (TRENDING) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 flex items-center gap-4">Les Tendances du Mois <div className="h-px flex-1 bg-slate-100"></div></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><CheckCircle2 className="size-8 text-primary fill-white" /></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">{p.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-slate-500 text-sm">{p.category}</span>
                    <span className="font-black text-primary">{p.price.toLocaleString()} F</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ENGAGEMENT ETHIKA (VALEURS) */}
      <section className="py-24 px-6 bg-tropical/5 border-y border-tropical/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="size-20 bg-tropical rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-xl shadow-tropical/20"><Leaf className="size-10" /></div>
            <h2 className="text-5xl font-display font-bold mb-6">Un Impact Mesurable <br /><span className="text-tropical">Score Ethika AI</span></h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">Chaque œuvre sur notre plateforme reçoit un score Ethika calculé par notre IA. Ce score audite l'empreinte carbone, l'utilisation de matériaux durables et l'impact économique direct sur la communauté de l'artisan.</p>
            <div className="flex gap-12">
               <div><p className="text-4xl font-black text-tropical">92%</p><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Score Moyen</p></div>
               <div><p className="text-4xl font-black text-tropical">12k+</p><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Vies Impactées</p></div>
               <div><p className="text-4xl font-black text-tropical">0%</p><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Plastique Utilisé</p></div>
            </div>
          </div>
          <div className="flex-1 bg-white p-12 rounded-[3.5rem] shadow-2xl border border-tropical/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8"><CheckCircle2 className="size-12 text-tropical opacity-20" /></div>
             <h3 className="text-2xl font-display font-bold mb-8">Rapport de Transparence</h3>
             <div className="space-y-6">
                {[
                  { label: "Circuits Courts", val: "98%" },
                  { label: "Teintures Naturelles", val: "100%" },
                  { label: "Rémunération Artisan", val: "70% du prix" }
                ].map((r, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest"><span>{r.label}</span><span className="text-tropical">{r.val}</span></div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-tropical rounded-full" style={{width: r.val.includes('%') ? r.val : '70%'}}></div></div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CALL TO ACTION FINAL (RETENTION) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-primary p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(120,30,32,0.4)]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Gem className="size-16 text-accent animate-bounce" />
            <h2 className="text-5xl md:text-7xl font-display font-bold">Rejoignez l'Élite.</h2>
            <p className="text-xl text-white/80 max-w-2xl">Accédez à des ventes privées, des œuvres uniques de rang Platinum et une ligne directe avec les plus grands maîtres artisans de Côte d'Ivoire.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link to="/profile" className="h-16 px-12 bg-white text-primary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl flex items-center justify-center">Créer mon Compte</Link>
              <Link to="/pieces-uniques" className="h-16 px-12 bg-white/10 backdrop-blur border border-white/30 text-white font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"><Lock className="size-4" /> Accès Collectionneur</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default Home;
