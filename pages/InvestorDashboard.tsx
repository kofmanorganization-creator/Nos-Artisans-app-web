
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Globe, 
  DollarSign, 
  Download, 
  ArrowUpRight, 
  PieChart, 
  Activity,
  Calendar,
  FileText,
  ShieldAlert,
  Wifi
} from 'lucide-react';
import { useAdminEvents } from '../hooks/useAdminEvents';

const InvestorDashboard: React.FC = () => {
  const { events, loading } = useAdminEvents();

  const stats = [
    { label: 'GMV Global', value: '1.2B FCFA', trend: '+18.4%', icon: Globe, color: 'text-blue-500' },
    { label: 'Revenu Plateforme', value: '245M FCFA', trend: '+12.2%', icon: DollarSign, color: 'text-tropical' },
    { label: 'Taux de Croissance', value: '24.5%', trend: '+4.1%', icon: TrendingUp, color: 'text-accent' },
    { label: 'Artisans Actifs', value: '450', trend: '+5.5%', icon: Activity, color: 'text-primary' },
  ];

  const countries = [
    { name: 'Côte d\'Ivoire', gmv: '780M', share: '65%', color: 'bg-primary' },
    { name: 'Sénégal', gmv: '180M', share: '15%', color: 'bg-tropical' },
    { name: 'Bénin', gmv: '120M', share: '10%', color: 'bg-accent' },
    { name: 'Autres', gmv: '120M', share: '10%', color: 'bg-slate-500' },
  ];

  // Mock data si le Firestore est vide ou en cours de chargement
  const defaultEvents = [
    { id: 'TX-88219-IVR', createdAt: '2024-05-20', country: 'CI', amount: '185,000 F', comm: '18,500 F', type: 'Vente' },
    { id: 'TX-88218-SN', createdAt: '2024-05-19', country: 'SN', amount: '45,000 F', comm: '4,500 F', type: 'Vente' },
    { id: 'TX-88217-CI', createdAt: '2024-05-18', country: 'CI', amount: '320,000 F', comm: '73,600 F', type: 'Vente' },
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  return (
    <div className="bg-[#121212] min-h-screen text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 flex items-center gap-2">
              <ShieldAlert className="size-3" /> Accès Investisseur Sécurisé
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">Reporting Financier</h1>
            <p className="text-slate-500">Données agrégées en temps réel via Google Cloud Platform.</p>
          </div>
          <div className="flex gap-4">
            <button className="h-12 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              <Calendar className="size-4" /> Mai 2024
            </button>
            <button className="h-12 px-6 rounded-xl bg-blue-500 text-white font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
              <Download className="size-4" /> Rapport PDF
            </button>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-4 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <s.icon className="size-20" />
              </div>
              <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center">
                <s.icon className={`size-6 ${s.color}`} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{s.label}</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <h3 className="text-3xl font-bold">{s.value}</h3>
                  <span className="text-tropical text-xs font-bold flex items-center"><ArrowUpRight className="size-3" /> {s.trend}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Analytics Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* GMV by Country */}
          <div className="lg:col-span-8 p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-display font-bold">Performance par Pays</h3>
              <PieChart className="size-6 text-slate-500" />
            </div>
            <div className="space-y-8">
              {countries.map(c => (
                <div key={c.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.gmv} FCFA de volume</p>
                    </div>
                    <span className="text-sm font-bold">{c.share}</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: c.share }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${c.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Forecasts */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
              <div className="relative z-10">
                <div className="size-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="size-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Prévisions IA</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Selon Gemini 3.0, l'expansion vers le Ghana en Q3 2024 pourrait générer une croissance additionnelle de 22%.
                </p>
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Target Q4 2024</p>
                  <p className="text-2xl font-bold">2.5B FCFA</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
              <h4 className="font-bold mb-6 flex items-center gap-2"><FileText className="size-4 text-slate-500" /> Rapports Mensuels</h4>
              <div className="space-y-4">
                {['Avril 2024', 'Mars 2024', 'Février 2024'].map(m => (
                  <div key={m} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
                    <span className="text-sm">{m}</span>
                    <Download className="size-4 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Transparency Logs */}
        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-display font-bold">Audit Immuable (Live Firestore)</h3>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tropical opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tropical"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-tropical">Connecté au Nucleus Artisans Core</span>
              </div>
            </div>
            {loading && <Activity className="size-5 text-blue-400 animate-spin" />}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-left border-b border-white/10">
                  <th className="pb-4 font-black uppercase tracking-widest text-[10px]">Date</th>
                  <th className="pb-4 font-black uppercase tracking-widest text-[10px]">ID Transaction</th>
                  <th className="pb-4 font-black uppercase tracking-widest text-[10px]">Origine</th>
                  <th className="pb-4 font-black uppercase tracking-widest text-[10px]">Montant</th>
                  <th className="pb-4 font-black uppercase tracking-widest text-[10px] text-right">Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {displayEvents.map((row, i) => (
                  <motion.tr 
                    key={row.id || i} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 text-slate-400">{row.createdAt?.split('T')[0] || row.createdAt}</td>
                    <td className="py-4 font-mono text-xs">{row.id}</td>
                    <td className="py-4 font-bold">{row.country}</td>
                    <td className="py-4 font-bold">{row.amount}</td>
                    <td className="py-4 text-right font-black text-tropical">{row.comm}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
             <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-slate-500 flex items-center gap-2">
               <Wifi className="size-3" /> Synchronisé avec la blockchain Polygon
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvestorDashboard;
