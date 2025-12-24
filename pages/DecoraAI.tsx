
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Maximize2, Sparkles, Wand2, Info, Share2, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const DecoraAI: React.FC = () => {
  const [stage, setStage] = useState<'upload' | 'analyzing' | 'editor'>('upload');
  const [image, setImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(MOCK_PRODUCTS[0]);
  const [analysis, setAnalysis] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setStage('analyzing');
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(['Moderne Tropical', 'Lumineux', 'Plancher Bois', 'Murs Neutres']);
      setStage('editor');
    }, 3000);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Editor Main View */}
      <div className="flex-1 relative bg-slate-100 dark:bg-black overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === 'upload' && (
            <motion.div 
              key="upload"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="max-w-xl w-full p-12 text-center flex flex-col items-center gap-8 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl mx-6"
            >
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                <Upload className="size-10" />
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold mb-4 dark:text-white">Prêt à transformer votre espace ?</h2>
                <p className="text-slate-500 dark:text-slate-400">Prenez une photo de la pièce que vous souhaitez décorer. Notre IA s'occupe du reste.</p>
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="h-14 px-12 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-2xl flex items-center gap-3 transition-transform hover:scale-105"
              >
                Importer une photo <Sparkles className="size-5 text-primary" />
              </button>
              <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleUpload} />
              <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">Gemini 3.0 Pro Powered</p>
            </motion.div>
          )}

          {stage === 'analyzing' && (
            <motion.div 
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative size-40">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wand2 className="size-12 text-primary animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold dark:text-white animate-pulse">Analyse de la pièce en cours...</h2>
                <p className="text-slate-500 mt-2">Calcul de la perspective et de l'éclairage naturel</p>
              </div>
            </motion.div>
          )}

          {stage === 'editor' && (
            <motion.div 
              key="editor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full relative"
            >
              {/* The staged image */}
              <img src={image!} className="w-full h-full object-cover" alt="Staged" />
              <div className="absolute inset-0 bg-black/10"></div>
              
              {/* Draggable Product (Visual only) */}
              <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-move group"
              >
                <img 
                  src={selectedProduct.image} 
                  className="w-48 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110" 
                  alt="Product Overlay" 
                />
                <div className="absolute -top-4 -right-4 p-2 bg-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Maximize2 className="size-4" /></div>
              </motion.div>

              {/* Slider for Compare */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-full flex items-center gap-6 shadow-2xl min-w-[400px]">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Original</span>
                <input type="range" className="flex-1 accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Decora AI</span>
              </div>

              {/* Floating Tools */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {[RotateCcw, Maximize2, Share2].map((Icon, i) => (
                  <button key={i} className="size-12 glass rounded-full flex items-center justify-center text-slate-700 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl"><Icon className="size-5" /></button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sidebar: AI Analysis & Catalog */}
      <aside className="w-96 h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col z-20 shadow-2xl">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-display font-bold flex items-center gap-3 dark:text-white">
            <Wand2 className="size-6 text-primary" /> Assistant IA
          </h2>
          <p className="text-sm text-slate-500 mt-2">Personnalisez votre intérieur avec Gemini.</p>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-8 space-y-10">
          {/* Analysis Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Analyse du Style</label>
              {analysis.length > 0 && <span className="text-tropical text-[10px] font-black uppercase flex items-center gap-1"><CheckCircle2 className="size-3" /> Terminé</span>}
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-wrap gap-2">
              {analysis.length > 0 ? (
                analysis.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm">{tag}</span>
                ))
              ) : (
                <p className="text-xs text-slate-400 italic">En attente d'image...</p>
              )}
            </div>
          </div>

          {/* Catalog */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Suggestions d'œuvres</label>
              <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">Tout voir</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {MOCK_PRODUCTS.map(p => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`flex flex-col gap-3 p-3 rounded-2xl border-2 transition-all group ${selectedProduct.id === p.id ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-slate-200'}`}
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-slate-50 relative">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                    {selectedProduct.id === p.id && <div className="absolute inset-0 bg-primary/20 flex items-center justify-center"><CheckCircle2 className="size-8 text-white" /></div>}
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold truncate dark:text-white">{p.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{p.artisanName}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Sparkles className="size-5" /> Générer le Design
          </button>
          <button className="w-full h-14 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3">
            Sauvegarder en NFT
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DecoraAI;
