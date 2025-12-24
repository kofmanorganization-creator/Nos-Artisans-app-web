
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Heart, Award, MapPin, Settings, LogOut, ChevronRight, Zap, Loader2 } from 'lucide-react';
import { MOCK_ARTISANS } from '../constants';
import { useRealtimeOrdersClient } from '../hooks/useRealtimeOrdersClient';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const user = {
    id: 'user-123', // Mock ID
    name: 'Jean-Pierre',
    level: 'Collectionneur VIP',
    avatar: 'https://picsum.photos/seed/jp/200/200',
    ethBalance: '0.45 ETH',
  };

  const { orders: realtimeOrders, loading: loadingOrders } = useRealtimeOrdersClient(user.id);

  // Combine mock orders with realtime ones
  const mockOrders = [
    { id: 'CMD-881', amount: 120000, date: '15/05/2024', status: 'Livré' },
    { id: 'CMD-882', amount: 45000, date: '10/05/2024', status: 'En cours' },
  ];

  const allOrders = [...realtimeOrders, ...mockOrders];

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12 flex flex-col gap-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-800 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-sm">
        <div className="relative">
          <img src={user.avatar} className="size-28 rounded-full object-cover border-4 border-primary p-1" alt="Avatar" />
          <div className="absolute bottom-1 right-1 size-6 bg-tropical rounded-full border-4 border-white dark:border-slate-800"></div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Ravi de vous revoir, {user.name}</h1>
          <p className="text-primary font-black uppercase tracking-widest text-xs mt-1">{user.level}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <span className="px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-xs font-bold text-slate-500 border border-slate-100 dark:border-slate-700 flex items-center gap-2">
              <Zap className="size-3 text-primary fill-primary" /> {user.ethBalance}
            </span>
            <span className="px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-xs font-bold text-slate-500 border border-slate-100 dark:border-slate-700 flex items-center gap-2">
              <Package className="size-3" /> {allOrders.length} Objets Possédés
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-primary transition-all"><Settings className="size-5" /></button>
          <button className="p-3 rounded-2xl bg-red-50 dark:red-900/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"><LogOut className="size-5" /></button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Stats Area */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 dark:text-white">Ma Collection NFT</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 flex gap-4 hover:shadow-xl transition-all">
                  <div className="size-20 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/coll${i}/200/200`} className="w-full h-full object-cover" alt="Art" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 dark:text-white">Masque Akan Royal #{i}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Acquis le 12/03/24</p>
                    <button className="mt-2 text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:underline">Voir certificat <ChevronRight className="size-3" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold dark:text-white">Commandes Récentes</h2>
              {loadingOrders && <Loader2 className="size-4 animate-spin text-primary" />}
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden">
               {allOrders.map((o, i) => (
                 <div key={o.id || i} className="p-6 border-b border-slate-50 dark:border-slate-700 last:border-0 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="size-10 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                         <Package className="size-5 text-slate-400" />
                       </div>
                       <div>
                          <p className="font-bold dark:text-white text-sm">Commande #{o.id}</p>
                          <p className="text-xs text-slate-400 font-medium">{o.date || 'Récemment'} • {o.amount?.toLocaleString() || o.totalValue?.toLocaleString() || '---'} FCFA</p>
                       </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border transition-colors ${o.status === 'Livré' ? 'bg-tropical/10 text-tropical border-tropical/20' : 'bg-accent/10 text-accent border-accent/20'}`}>
                      {o.status}
                    </span>
                 </div>
               ))}
               {allOrders.length === 0 && !loadingOrders && (
                 <div className="p-12 text-center text-slate-400">Aucune commande trouvée.</div>
               )}
            </div>
          </section>
        </div>

        {/* Sidebar widgets */}
        <div className="flex flex-col gap-6">
           <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Staging Virtuel</h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">Projetez les œuvres de votre wishlist dans votre salon avec Decora AI.</p>
              <Link to="/decora" className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl relative z-10 transition-transform active:scale-95 text-center block">Démarrer Decora AI</Link>
           </div>

           <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Artisans Favoris</h3>
              <div className="space-y-4">
                {MOCK_ARTISANS.map(a => (
                  <div key={a.id} className="flex items-center gap-4 group cursor-pointer">
                    <img src={a.image} className="size-10 rounded-full object-cover" alt={a.name} />
                    <div className="flex-1">
                      <p className="font-bold text-sm dark:text-white group-hover:text-primary transition-colors">{a.name}</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{a.location}</p>
                    </div>
                    <Heart className="size-4 text-red-500 fill-red-500" />
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
