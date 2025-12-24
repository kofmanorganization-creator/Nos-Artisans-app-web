
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Fixed missing ShieldCheck import
import { Trash2, Plus, Minus, ArrowRight, Zap, Info, ShieldCheck } from 'lucide-react';
import { AppContext } from '../App';
import { MOCK_PRODUCTS } from '../constants';

const Cart: React.FC = () => {
  const { cartCount, setCartCount } = useContext(AppContext);
  
  // Fake cart items for demo
  const cartItems = MOCK_PRODUCTS.slice(0, 2);
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  if (cartCount === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-8">
          <ShoppingBag className="size-10" />
        </div>
        <h2 className="text-4xl font-display font-bold mb-4 dark:text-white">Votre panier est vide</h2>
        <p className="text-slate-500 mb-8 max-w-sm">Découvrez nos pièces uniques et commencez votre collection aujourd'hui.</p>
        <Link to="/marketplace" className="h-14 px-10 rounded-full bg-primary text-white font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-primary/20">
          Explorer les Collections <ArrowRight className="size-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 w-full">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-10">Votre Panier</h1>
      
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 hidden md:grid grid-cols-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <div className="col-span-6">Produit</div>
              <div className="col-span-2 text-center">Quantité</div>
              <div className="col-span-2 text-right">Prix</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 flex items-center gap-6">
                    <div className="relative size-24 md:size-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold dark:text-white">{item.name}</h3>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-1">{item.category}</p>
                      {item.isNFT && <div className="flex items-center gap-1 text-[10px] text-primary font-black mt-2"><Zap className="size-3 fill-primary" /> NFT Digital Inclus</div>}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <button className="px-3 py-1 text-slate-400 hover:text-primary transition-colors"><Minus className="size-3" /></button>
                      <span className="w-6 text-center text-sm font-bold dark:text-white">1</span>
                      <button className="px-3 py-1 text-slate-400 hover:text-primary transition-colors"><Plus className="size-3" /></button>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-right text-sm font-bold dark:text-white">
                    {item.price.toLocaleString()} F
                  </div>
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center gap-4">
                    <span className="text-lg font-black text-slate-900 dark:text-white">{item.price.toLocaleString()} F</span>
                    <button className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 className="size-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/marketplace" className="flex items-center gap-2 text-primary font-bold hover:underline">
            <ArrowRight className="size-4 rotate-180" /> Continuer vos achats
          </Link>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 sticky top-24">
            <h2 className="text-2xl font-display font-bold mb-8 dark:text-white">Résumé de la commande</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 text-sm">
                <span>Sous-total (2 articles)</span>
                <span className="font-bold text-slate-900 dark:text-white">{subtotal.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 text-sm">
                <span>Livraison estimée</span>
                <span className="font-bold text-slate-900 dark:text-white">Gratuit</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400 text-sm">
                <span>TVA (18%)</span>
                <span className="font-bold text-slate-900 dark:text-white">Inclus</span>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 flex gap-4 items-start mb-8">
              <Info className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-primary font-medium">Vous bénéficiez de la livraison offerte sur les pièces de collection Ivoirama.</p>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-700 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold dark:text-white">Total</span>
                <div className="text-right">
                  <p className="text-3xl font-black text-primary">{subtotal.toLocaleString()} FCFA</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">~ 0.12 ETH (Web3 Wallet)</p>
                </div>
              </div>
            </div>

            <Link to="/checkout" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
              Procéder au paiement <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-700 flex flex-col items-center gap-4">
              <div className="flex gap-4 grayscale opacity-40">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfP7cJ1EbfCxwDWdG9GFaFZAAOpC1HXTiOgGJYm_NbCnlL6uGlVC3r1Zxk_lYuZcyzE-4ScUU41cGvJL94Ffvnb6D_HkCeenBxo4CN1kXA5Z5wFNQW-NfhqsgOzsdKw6zg56quNKjDM3AYObp3SsC4w0L6EERPS_RbetgVfQYGoyS8QViFgi5o09ES0qU8OPJio3bFFzKtlxz3aCZCxJBANpE1TQF1qq4Wxv9HHIDjaHw_skqKREjnKWDqIc4C514rmAUZlkqYPgml" className="h-6" alt="Mastercard" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7kU59xFzXg_KQIrASpqZxFESe6BLaYm1LSAFMwoyFVPjVzES93MAuGbYCSeU6vAogcs3hcWjJHIerzIZfJ3xa07vuTZTNOfLI5kF7aQnlZa8HLEXNUF9FG1QywnxWV_rM1cMmwZHt2URdgicjwazOQxWzKEEKAfE6ynY8X7w8uhw88ZIO9mv0UZH1mZiwzb7ARRaF9amKW07wpiIhn2aWw28ibI551wto4WHBGrANPtZnLN3QLGWyoHsouauHpKV--8Nhnh7-dEqx" className="h-6" alt="Visa" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><ShieldCheck className="size-3" /> Paiement 100% Sécurisé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export default Cart;
