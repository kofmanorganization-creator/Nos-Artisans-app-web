
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Grid2X2, List, Heart, Zap, MapPin, ChevronRight, Loader2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { useRealtimeProducts } from '../hooks/useRealtimeProducts';

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const { items: realtimeProducts, loading } = useRealtimeProducts();
  const categories = ['Tous', 'Sculpture', 'Textile', 'Décoration', 'Bijoux'];

  // Combine mock products with realtime ones for the demo environment
  const allProducts = [...realtimeProducts, ...MOCK_PRODUCTS];
  
  // Basic deduplication if IDs match
  const uniqueProducts = Array.from(new Map(allProducts.map(item => [item.id, item])).values());

  const filteredProducts = filter === 'Tous' 
    ? uniqueProducts 
    : uniqueProducts.filter(p => p.category === filter);

  return (
    <div className="px-6 lg:px-20 py-12 max-w-[1600px] mx-auto min-h-screen">
      <div className="flex flex-col gap-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white">Explorer la Collection</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Découvrez des pièces uniques authentifiées sur la blockchain.</p>
          </div>
          <div className="flex items-center gap-3">
            {loading && <Loader2 className="size-5 text-primary animate-spin" />}
            <button className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"><Grid2X2 className="size-5" /></button>
            <button className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"><List className="size-5" /></button>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20"><SlidersHorizontal className="size-4" /> Filtres</button>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
          {categories.map(c => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${filter === c ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              {c}
            </button>
          ))}
          <div className="flex-1"></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{filteredProducts.length} Résultats trouvés</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/product/${p.id}`} className="group block bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-1 shadow-md">
                      <Zap className="size-3 text-primary fill-primary" /> Phygital
                    </span>
                    {p.ethikaScore > 90 && (
                      <span className="px-3 py-1 rounded-full bg-tropical/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1 shadow-md">
                        Eco {p.ethikaScore}%
                      </span>
                    )}
                  </div>

                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <Heart className="size-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl shadow-xl">Aperçu rapide</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-display font-bold dark:text-white">{p.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1"><MapPin className="size-3" /> Artisan: {p.artisanName}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-primary">{p.price.toLocaleString()} <span className="text-sm font-normal">XOF</span></span>
                      <span className="text-xs text-slate-400 font-medium tracking-wide">~ {p.ethPrice} ETH</span>
                    </div>
                    <div className="size-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center transition-transform hover:scale-110">
                      <ChevronRight className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <p className="text-slate-400 text-sm font-medium">Vous avez vu {filteredProducts.length} créations</p>
          <div className="w-64 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4 rounded-full"></div>
          </div>
          <button className="mt-4 px-10 h-14 rounded-full border-2 border-slate-200 dark:border-slate-700 font-bold hover:border-primary hover:text-primary transition-all">Charger plus</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
