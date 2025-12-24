
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Zap, Award, User, MapPin, Hash, CheckCircle2, QrCode } from 'lucide-react';
import { UNIQUE_PIECES } from '../constants';

const NFTVerification: React.FC = () => {
  const { hash } = useParams();
  const [loading, setLoading] = useState(true);

  // Simuler une vérification blockchain
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const piece = UNIQUE_PIECES[0]; // Démo

  return (
    <div className="bg-stone-50 dark:bg-slate-900 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Verification Status */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className={`size-24 rounded-full flex items-center justify-center transition-all ${loading ? 'bg-slate-100 animate-pulse' : 'bg-tropical text-white shadow-2xl shadow-tropical/30'}`}>
            {loading ? <ShieldCheck className="size-12 text-slate-300" /> : <CheckCircle2 className="size-12" />}
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold dark:text-white">Vérification de l'Héritage</h1>
            <p className="text-slate-500 mt-2">Certificat d'authenticité numérique immuable.</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center p-20 glass rounded-[3rem] border border-slate-100">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400 animate-pulse">Interrogation du Smart Contract...</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Asset Details */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-xl">
              <div className="aspect-square rounded-2xl overflow-hidden mb-8">
                <img src={piece.image} className="w-full h-full object-cover" alt={piece.name} />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2 dark:text-white">{piece.name}</h2>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-tropical/10 text-tropical text-[10px] font-black uppercase tracking-widest rounded-full border border-tropical/20">Platinum Cert</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">Origine CI</span>
              </div>
              
              <div className="mt-8 space-y-4 pt-8 border-t border-slate-50 dark:border-slate-700">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 flex items-center gap-2"><User className="size-4" /> Propriétaire</span>
                  <span className="font-bold font-mono">0x71...8976F</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 flex items-center gap-2"><Award className="size-4" /> Maître Artisan</span>
                  <span className="font-bold">{piece.artisanName}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 flex items-center gap-2"><MapPin className="size-4" /> Pays</span>
                  <span className="font-bold">Côte d'Ivoire</span>
                </div>
              </div>
            </div>

            {/* Blockchain Details */}
            <div className="flex flex-col gap-6">
              <div className="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><QrCode className="size-24" /></div>
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2"><Zap className="size-5 text-amber-600" /> Blockchain Data</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Transaction Hash</p>
                    <div className="p-4 bg-white/5 rounded-xl font-mono text-xs break-all border border-white/10 flex justify-between items-center">
                      {hash} <ExternalLink className="size-4 text-slate-500" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Smart Contract</p>
                    <p className="font-mono text-sm">0x88219...4412c</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Royalties Artisan</p>
                    <p className="text-2xl font-black text-amber-600">10% à vie</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-tropical/10 border border-tropical/20 rounded-[2.5rem] flex flex-col gap-4">
                <h4 className="font-bold text-tropical flex items-center gap-2"><ShieldCheck className="size-5" /> Garanti par Nos Artisans</h4>
                <p className="text-sm text-tropical/70 leading-relaxed">Cette œuvre est enregistrée de manière permanente. Toute revente future déclenchera automatiquement des royalties pour l'artisan créateur.</p>
                <Link to="/marketplace" className="text-xs font-black uppercase tracking-widest text-tropical hover:underline mt-2">Retour au marché</Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NFTVerification;
