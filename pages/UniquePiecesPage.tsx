
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  ChevronRight, 
  Award, 
  Zap, 
  History, 
  Gavel, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  X,
  Gem,
  CheckCircle2,
  Info
} from 'lucide-react';
import { UNIQUE_PIECES, RECENTLY_SOLD } from '../constants';
import { AccessStatus, UniquePiece } from '../types';

const UniquePiecesPage: React.FC = () => {
  const [access, setAccess] = useState<AccessStatus>('none');
  const [showModal, setShowModal] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<UniquePiece | null>(null);

  const handleRequestAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setAccess('pending');
    setShowModal(false);
  };

  // Simulation of approval for demo purposes
  useEffect(() => {
    if (access === 'pending') {
      const timer = setTimeout(() => {
        setAccess('approved');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [access]);

  if (access !== 'approved') {
    return (
      <div className="relative min-h-screen bg-stone-50 dark:bg-slate-900 overflow-hidden">
        {/* Background Blurred Content */}
        <div className="absolute inset-0 blur-[60px] opacity-30 select-none pointer-events-none">
          <div className="grid grid-cols-2 gap-20 p-20">
            {UNIQUE_PIECES.map(p => (
              <img key={p.id} src={p.image} className="w-full aspect-square object-cover rounded-[5rem]" />
            ))}
          </div>
        </div>

        {/* Access Gate Overlay */}
        <div className="relative z-50 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <div className="size-20 bg-amber-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-amber-600/20">
              {access === 'none' ? <Lock className="size-10" /> : <Clock className="size-10 animate-spin" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Pièces Uniques™</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
              {access === 'none' 
                ? "L’accès aux Pièces Uniques est réservé aux collectionneurs sérieux. Ce module exclusif présente des chefs-d'œuvre tokenisés et certifiés Platinum par le Label Ivoirama."
                : "Votre demande est en cours d'examen par nos conservateurs. Nous vérifions votre éligibilité au cercle des collectionneurs Nos Artisans."
              }
            </p>
            
            {access === 'none' && (
              <button 
                onClick={() => setShowModal(true)}
                className="h-16 px-12 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-amber-600/20 active:scale-95"
              >
                Demander un accès collectionneur
              </button>
            )}

            {access === 'pending' && (
              <div className="flex flex-col items-center gap-4">
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Validation en cours...</span>
                <div className="w-64 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="h-full bg-amber-600 w-1/3 rounded-full"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Access Form Modal */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3rem] p-10 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <button onClick={() => setShowModal(false)} className="text-slate-300 hover:text-slate-900 transition-colors"><X className="size-6" /></button>
                </div>
                <h2 className="text-3xl font-display font-bold mb-8 dark:text-white">Candidature Collectionneur</h2>
                <form onSubmit={handleRequestAccess} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nom Complet</label>
                      <input required className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 border-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profession</label>
                      <input required className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 border-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Motivation d'acquisition</label>
                    <textarea required rows={3} className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border-none" placeholder="Pourquoi souhaitez-vous acquérir une Pièce Unique ?"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Budget estimé (FCFA)</label>
                    <select className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 border-none">
                      <option>1M - 5M</option>
                      <option>5M - 15M</option>
                      <option>15M+</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-3 pt-4">
                    <input type="checkbox" required className="mt-1 accent-amber-600" id="charter" />
                    <label htmlFor="charter" className="text-xs text-slate-500 font-medium leading-relaxed">J'accepte la charte de valeurs de Nos Artisans et m'engage à préserver l'intégrité culturelle des œuvres acquises.</label>
                  </div>
                  <button className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-xl mt-4 shadow-xl active:scale-95 transition-all">Envoyer ma demande</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 dark:bg-slate-900 min-h-screen">
      {/* Premium Header */}
      <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={UNIQUE_PIECES[0].image} className="w-full h-full object-cover opacity-60" alt="Masterpiece" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border border-amber-600/50 text-amber-600 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2"
          >
            <Gem className="size-4" /> Chef-d'œuvre du mois
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold text-white leading-tight"
          >
            {UNIQUE_PIECES[0].name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-8 text-white/70"
          >
            <div className="flex items-center gap-2"><Award className="size-5 text-amber-600" /> Platinum Label</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 font-mono"><Clock className="size-5 text-amber-600" /> 47:12:08</div>
          </motion.div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">Enchère Actuelle</span>
            <span className="text-4xl font-black text-amber-600">{UNIQUE_PIECES[0].currentBid.toLocaleString()} FCFA</span>
            <button className="h-16 px-16 bg-white text-black font-black uppercase tracking-widest rounded-2xl mt-4 hover:scale-105 transition-all shadow-2xl">Placer une offre</button>
          </div>
        </div>
      </section>

      {/* Prestige Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4">La Galerie Prestige</h2>
            <p className="text-slate-500 max-w-md">Chaque pièce est unique, authentifiée sur la blockchain et certifiée par notre audit patrimonial.</p>
          </div>
          <div className="flex gap-4">
             <button className="size-14 rounded-2xl bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-amber-600 transition-colors shadow-sm"><History className="size-6" /></button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {UNIQUE_PIECES.map(p => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={p.name} />
                <div className="absolute top-8 left-8 flex flex-col gap-3">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 border border-white/20">
                    <Zap className="size-3 text-amber-600 fill-amber-600" /> Tokenized Piece
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-display font-bold text-white mb-4">{p.name}</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-1">Dernière Offre</p>
                      <p className="text-2xl font-black text-amber-600">{p.currentBid.toLocaleString()} F</p>
                    </div>
                    <button onClick={() => setSelectedPiece(p)} className="h-12 px-8 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl">Détails Enchère</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recently Sold Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Récemment vendu sur Nos Artisans</h2>
          <p className="text-slate-400 max-w-xl mx-auto">La valeur de notre patrimoine se confirme chaque jour auprès des plus grands collectionneurs mondiaux.</p>
        </div>
        <div className="flex gap-10 animate-[scroll_40s_linear_infinite] px-6">
          {[...RECENTLY_SOLD, ...RECENTLY_SOLD].map((p, i) => (
            <div key={i} className="min-w-[400px] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden p-8 flex flex-col gap-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 relative">
                <img src={p.image} className="w-full h-full object-cover grayscale opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-6 py-2 bg-amber-600/90 text-white font-black uppercase tracking-[0.2em] rounded-full text-xs shadow-2xl">Acquis</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold mb-2">{p.name}</h4>
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-400 text-xs">Vendu pour:</span>
                  <span className="text-2xl font-black text-amber-600">{p.currentBid.toLocaleString()} FCFA</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 border-t border-white/10 pt-4">
                  <span>14 Enchérisseurs</span>
                  <span>Certifié Platinum</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Side Drawer */}
      <AnimatePresence>
        {selectedPiece && (
          <div className="fixed inset-0 z-[300] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPiece(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-stone-50 dark:bg-slate-900 h-full shadow-2xl overflow-y-auto no-scrollbar"
            >
              <div className="p-12">
                <button onClick={() => setSelectedPiece(null)} className="mb-10 text-slate-400 hover:text-slate-900 flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                  <ArrowRight className="size-4 rotate-180" /> Retour à la galerie
                </button>
                
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-2xl">
                  <img src={selectedPiece.image} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="text-4xl font-display font-bold mb-4 dark:text-white">{selectedPiece.name}</h2>
                    <div className="flex gap-4">
                       <span className="px-3 py-1 bg-amber-600/10 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-600/20">Ivoirama Platinum</span>
                       <span className="px-3 py-1 bg-tropical/10 text-tropical text-[10px] font-black uppercase tracking-widest rounded-full border border-tropical/20">Art Sacré Akan</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Enchère Actuelle</span>
                      <span className="text-3xl font-black text-amber-600">{selectedPiece.currentBid.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                      <div className="flex items-center gap-2"><Gavel className="size-4" /> 12 Offres</div>
                      <div className="flex items-center gap-2"><Clock className="size-4" /> 4h 22m 10s</div>
                    </div>
                    <button className="w-full h-14 bg-amber-600 text-white font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-amber-600/20 hover:bg-amber-700 transition-all">Surenchérir (1 950 000 F)</button>
                    <p className="text-center text-[10px] text-slate-400 font-medium">Un dépôt de garantie de 10% sera bloqué sur votre compte.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold dark:text-white">L'Héritage de la Pièce</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 italic leading-relaxed">
                      "{selectedPiece.heritageStory}"
                    </p>
                    <p className="text-slate-500 leading-relaxed">
                      Cette œuvre majestueuse a nécessité plus de 150 heures de travail continu par le Maître Kouamé Jean. La technique de sculpture "à cœur perdu" utilisée ici est l'une des plus rares au monde, transmise uniquement de père en fils au sein de la lignée royale de Grand-Bassam.
                    </p>
                  </div>

                  <div className="space-y-4">
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Historique des Offres</h4>
                     <div className="space-y-2">
                        {selectedPiece.bidHistory.map((b, idx) => (
                          <div key={idx} className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 font-bold text-xs">{b.user[0]}</div>
                              <span className="font-bold text-sm dark:text-white">{b.user}</span>
                            </div>
                            <span className="font-mono font-bold text-amber-600">{b.amount.toLocaleString()} F</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <button className="w-full py-6 border-2 border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center gap-4 text-slate-900 dark:text-white font-black uppercase tracking-widest group">
                    <ShieldCheck className="size-6 text-tropical" /> Vérifier Authenticité Blockchain
                    <ChevronRight className="size-5 text-slate-300 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default UniquePiecesPage;
