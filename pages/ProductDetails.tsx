
import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Share2, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Leaf, 
  Truck, 
  ShoppingBag,
  Maximize2,
  ChevronRight,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ARTISANS } from '../constants';
import { AppContext } from '../App';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartCount, setCartCount } = useContext(AppContext);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];
  const artisan = MOCK_ARTISANS.find(a => a.id === product.artisanId) || MOCK_ARTISANS[0];

  // Logic for related products (same category, different ID)
  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  // If no related in same category, show trending
  const suggestions = relatedProducts.length > 0 
    ? relatedProducts 
    : MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQty(1);
  }, [id]);

  const handleAddToCart = () => {
    setCartCount(cartCount + qty);
    alert("Produit ajouté au panier !");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
      <div className="flex flex-wrap gap-2 mb-8 items-center text-sm font-bold uppercase tracking-widest text-slate-400">
        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
        <ChevronRight className="size-4" />
        <Link to="/marketplace" className="hover:text-primary transition-colors">Marché</Link>
        <ChevronRight className="size-4" />
        <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-xl border border-slate-100 dark:border-slate-800">
            <motion.img 
              key={activeImg + (id || '')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={product.images[activeImg] || product.image} 
              className="w-full h-full object-cover" 
              alt={product.name} 
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-black text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 uppercase tracking-widest">
                <Zap className="size-4 text-primary fill-primary" />
                NFT Inclus
              </span>
            </div>
            <button className="absolute bottom-6 right-6 size-12 glass rounded-full flex items-center justify-center text-white"><Maximize2 className="size-6" /></button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden ring-offset-4 dark:ring-offset-slate-900 transition-all ${activeImg === idx ? 'ring-2 ring-primary' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="Gallery" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">{product.name}</h1>
              <button className="p-3 rounded-full text-slate-400 hover:text-red-500 transition-colors bg-slate-50 dark:bg-slate-800"><Heart className="size-6" /></button>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-[20px]">star</span>)}
              </div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">(32 avis vérifiés)</span>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-2xl shadow-slate-100 dark:shadow-none">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-4xl font-black text-slate-900 dark:text-white">{product.price.toLocaleString()} FCFA</span>
              <span className="text-xl font-medium text-slate-400">~ {product.ethPrice} ETH</span>
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">Taxes et frais de gas inclus</p>
            
            <div className="flex items-center gap-4 p-4 bg-tropical/5 rounded-2xl border border-tropical/10 mb-8">
              <div className="size-10 bg-tropical rounded-full flex items-center justify-center text-white"><ShieldCheck className="size-6" /></div>
              <div>
                <p className="text-tropical font-black text-sm uppercase tracking-widest">Label Ivoirama Vérifié</p>
                <p className="text-tropical/70 text-xs font-medium">Authenticité & Traçabilité garanties sur la blockchain.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Minus className="size-4" /></button>
                  <span className="w-10 text-center font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Plus className="size-4" /></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="size-5" /> Ajouter au panier
                </button>
              </div>
              <button className="h-14 w-full bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3">
                <Zap className="size-5" /> Acheter en Crypto
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group cursor-pointer">
            <div className="relative shrink-0">
              <img src={artisan.image} className="size-16 rounded-full object-cover border-2 border-primary p-0.5" alt={artisan.name} />
              <div className="absolute bottom-0 right-0 size-5 bg-primary rounded-full border-4 border-white dark:border-slate-800"></div>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Maître Artisan</p>
              <h4 className="text-xl font-display font-bold dark:text-white">{artisan.name}</h4>
              <p className="text-sm text-slate-500 flex items-center gap-1 font-medium mt-1"><MapPin className="size-3" /> {artisan.location}</p>
            </div>
            <ChevronRight className="size-6 text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1" />
          </div>

          {/* Ethika Score */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-tropical/5 to-white dark:from-tropical/10 dark:to-slate-900 border border-tropical/20 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full border-4 border-tropical flex items-center justify-center text-tropical font-black text-lg">
                {product.ethikaScore}%
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Leaf className="size-4 text-tropical" /> Score Ethika AI
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Impact environnemental minime.</p>
              </div>
            </div>
            <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline">Analyse</button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <section className="mt-20">
        <div className="border-b border-slate-100 dark:border-slate-800 flex gap-12 mb-12 overflow-x-auto no-scrollbar">
          <button className="pb-6 border-b-2 border-primary text-slate-900 dark:text-white font-bold uppercase tracking-widest text-sm whitespace-nowrap">Histoire</button>
          <button className="pb-6 text-slate-400 font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors whitespace-nowrap">Détails Techniques</button>
          <button className="pb-6 text-slate-400 font-bold uppercase tracking-widest text-sm hover:text-slate-900 transition-colors whitespace-nowrap">Livraison & Retours</button>
        </div>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-display font-bold mb-6">Le Récit de la Pièce</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
              {product.description} Confectionnée selon les rituels sacrés Akan, cette œuvre est le fruit de 40 heures de travail minutieux. Chaque détail a été documenté et gravé sur la blockchain pour préserver l'héritage culturel de la région.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2">Matériau</p>
                <p className="font-bold dark:text-white">{product.material || 'Non spécifié'}</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2">Dimensions</p>
                <p className="font-bold dark:text-white">{product.dimensions || 'Standard'}</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2">Temps de Création</p>
                <p className="font-bold dark:text-white">~ 40 Heures</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
             {/* Staging Tool Promo */}
             <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden h-full flex flex-col justify-between group">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black tracking-[0.2em] mb-6 uppercase border border-white/10">Decora AI ™</span>
                  <h3 className="text-3xl font-display font-bold mb-4">Essayez-le dans votre salon</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">Utilisez notre IA de réalité augmentée pour projeter cette œuvre chez vous avec une précision de 98%.</p>
                </div>
                <Link to="/decora" className="relative z-10 w-full h-14 bg-white text-slate-900 font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 transition-transform group-hover:scale-105 shadow-2xl">
                  Lancer Decora AI <Maximize2 className="size-4" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="mt-32 pt-20 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-2">Vous pourriez aussi aimer</h2>
            <p className="text-slate-500 dark:text-slate-400">Des créations similaires sélectionnées par nos experts.</p>
          </div>
          <Link to="/marketplace" className="text-primary font-bold hover:underline flex items-center gap-1 group">
            Tout explorer <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/product/${p.id}`} className="group block bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-1 shadow-md">
                      <Zap className="size-3 text-primary fill-primary" /> Phygital
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold dark:text-white leading-tight mb-1 truncate">{p.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-black text-primary">{p.price.toLocaleString()} F</span>
                    <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <ChevronRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
