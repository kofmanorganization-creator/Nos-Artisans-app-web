
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Truck, Landmark, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Checkout: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [method, setMethod] = useState<'card' | 'momo' | 'crypto'>('card');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="size-32 bg-primary rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-primary/40"
        >
          <CheckCircle2 className="size-16" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">Félicitations !</h2>
        <p className="text-xl text-slate-500 mb-8 max-w-lg">✅ Votre paiement a bien été pris en compte. Vous recevrez une notification dès que l'artisan aura validé l'expédition.</p>
        <div className="flex gap-4">
          <button className="h-14 px-8 rounded-full bg-primary text-white font-bold uppercase tracking-widest shadow-xl">Suivre ma commande</button>
          <button className="h-14 px-8 rounded-full border-2 border-slate-200 dark:text-white font-bold uppercase tracking-widest">Retourner à l'accueil</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 w-full">
       <h1 className="text-4xl font-display font-bold mb-12 dark:text-white">Paiement Sécurisé</h1>

       <form onSubmit={handlePay} className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Shipping Info */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white"><Truck className="size-5 text-primary" /> Informations de Livraison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Prénom</label>
                  <input required className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm" placeholder="Ex: Koffi" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nom</label>
                  <input required className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm" placeholder="Ex: Kouamé" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Adresse de Livraison (Abidjan)</label>
                  <input required className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm" placeholder="Quartier, Rue, Porte" />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 dark:text-white"><CreditCard className="size-5 text-primary" /> Moyen de Paiement</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button 
                  type="button"
                  onClick={() => setMethod('card')}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${method === 'card' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'}`}
                >
                  <CreditCard className={`size-6 ${method === 'card' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${method === 'card' ? 'text-primary' : 'text-slate-400'}`}>Carte</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setMethod('momo')}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${method === 'momo' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'}`}
                >
                  <Smartphone className={`size-6 ${method === 'momo' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${method === 'momo' ? 'text-primary' : 'text-slate-400'}`}>M-Money</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setMethod('crypto')}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${method === 'crypto' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'}`}
                >
                  <Wallet className={`size-6 ${method === 'crypto' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${method === 'crypto' ? 'text-primary' : 'text-slate-400'}`}>Crypto</span>
                </button>
              </div>

              {method === 'card' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Numéro de Carte</label>
                    <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm font-mono" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Date d'expiration</label>
                      <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm" placeholder="MM/YY" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">CVV</label>
                      <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}

              {method === 'momo' && (
                <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/20 animate-fade-in">
                  <p className="text-sm font-bold text-orange-800 dark:text-orange-400 mb-4">Paiement Orange / MTN / Wave</p>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-orange-400">Numéro de téléphone</label>
                    <div className="flex gap-2">
                      <div className="h-12 px-4 rounded-xl bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-900/30 flex items-center text-sm font-bold">+225</div>
                      <input className="flex-1 h-12 rounded-xl bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-900/30 px-4 text-sm" placeholder="00 00 00 00 00" />
                    </div>
                    <p className="text-[10px] text-orange-600 mt-2">Un message USSD sera envoyé sur votre téléphone pour valider.</p>
                  </div>
                </div>
              )}

              {method === 'crypto' && (
                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 animate-fade-in flex flex-col items-center gap-4">
                  <div className="size-32 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NosArtisansWeb3" alt="QR" className="w-full h-full" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-blue-800 dark:text-blue-400">Payer avec votre Wallet</p>
                    <p className="text-xs text-blue-600 font-mono mt-1 break-all">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
             <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl sticky top-24">
                <h3 className="text-xl font-bold mb-8 dark:text-white">Récapitulatif</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-bold uppercase tracking-widest">Articles (2)</span>
                    <span className="font-bold dark:text-white">230 000 FCFA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-bold uppercase tracking-widest">Commission Plateforme</span>
                    <span className="font-bold dark:text-white">23 000 FCFA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-bold uppercase tracking-widest">Expédition</span>
                    <span className="text-tropical font-bold">Gratuit</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-700 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold dark:text-white">Total</span>
                    <div className="text-right">
                      <p className="text-3xl font-black text-primary">253 000 FCFA</p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                  <ShieldCheck className="size-6" /> Payer maintenant
                </button>
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">Transactions sécurisées par le protocole Ivoirama</p>
             </div>
          </div>
       </form>
    </div>
  );
};

export default Checkout;
