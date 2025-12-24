
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] py-20 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-display text-xl font-bold">N</div>
            <span className="font-display text-2xl font-bold text-white">Nos Artisans</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            La première marketplace phygitale dédiée à l'artisanat ivoirien d'excellence. 
            Connectant tradition et innovation Web3 pour un impact durable.
          </p>
          <div className="flex gap-4 opacity-50">
            {['FB', 'IN', 'TW', 'LK'].map(s => (
              <span key={s} className="text-[10px] font-black text-white hover:text-primary cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Plateforme</h5>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li><Link to="/marketplace" className="hover:text-primary transition-colors">Boutique</Link></li>
            <li><Link to="/pieces-uniques" className="hover:text-primary transition-colors">Pièces Uniques</Link></li>
            <li><Link to="/decora" className="hover:text-primary transition-colors">Decora AI</Link></li>
            <li><Link to="/profile" className="hover:text-primary transition-colors">Mon Compte</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Label Ivoirama</h5>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li><Link to="/ivoirama" className="hover:text-primary transition-colors">Critères de sélection</Link></li>
            <li><Link to="/ivoirama" className="hover:text-primary transition-colors">Processus de certification</Link></li>
            <li><Link to="/ivoirama" className="hover:text-primary transition-colors">Avantages artisans</Link></li>
            <li><Link to="/ivoirama" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact & Support</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              <a href="mailto:contact@nosartisans.ci" className="hover:text-white transition-colors">contact@nosartisans.ci</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <span>+225 07 00 00 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              <span>Abidjan, Côte d'Ivoire</span>
            </li>
          </ul>
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <ShieldCheck className="size-3 text-primary" /> Certifié Blockchain
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <p>© 2024 Nos Artisans. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Confidentialité</span>
            <span className="hover:text-slate-400 cursor-pointer">Conditions</span>
          </div>
        </div>
        
        {/* SIGNATURE SECTION */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2">
            <span className="text-sm font-display font-bold text-white">Nos Artisans initié par</span>
            <a 
              href="https://www.kofmann.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="koffmann-group-text text-base"
            >
              Koffmann Group
            </a>
            <div className="size-1.5 rounded-full bg-accent animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
