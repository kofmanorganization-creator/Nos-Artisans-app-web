
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X, 
  Home as HomeIcon, 
  Grid, 
  Award, 
  Maximize2,
  Heart,
  ChevronRight,
  Gem,
  BarChart3,
  ShieldCheck,
  Users,
  Briefcase
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import DecoraAI from './pages/DecoraAI';
import LabelIvoirama from './pages/LabelIvoirama';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UniquePiecesPage from './pages/UniquePiecesPage';
import InvestorDashboard from './pages/InvestorDashboard';
import NFTVerification from './pages/NFTVerification';
import AmbassadorProgram from './pages/AmbassadorProgram';
import B2BPortal from './pages/B2BPortal';
import B2BDashboard from './pages/B2BDashboard';
import B2BRequestQuote from './pages/B2BRequestQuote';

// Context
export const AppContext = React.createContext<{
  cartCount: number;
  setCartCount: (n: number) => void;
  isDarkMode: boolean;
  setIsDarkMode: (b: boolean) => void;
}>({
  cartCount: 0,
  setCartCount: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {}
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, isDarkMode, setIsDarkMode } = React.useContext(AppContext);
  const location = useLocation();
  const isLabelPage = location.pathname === '/ivoirama';
  const isInvestorPage = location.pathname.startsWith('/admin/investors');
  const isB2BPage = location.pathname.startsWith('/b2b');

  const navClass = isLabelPage || isInvestorPage || isB2BPage
    ? 'bg-[#121212]/80 backdrop-blur-xl border-white/5' 
    : 'glass border-white/10';

  const textColor = isLabelPage || isInvestorPage || isB2BPage ? 'text-white' : 'text-primary dark:text-white';
  const navItemColor = (path: string) => location.pathname === path ? 'text-primary' : isLabelPage || isInvestorPage || isB2BPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-primary';

  return (
    <nav className={`fixed top-0 w-full z-[100] border-b transition-all duration-500 ${navClass} px-6 py-4 flex items-center justify-between`}>
      <Link to="/" className="flex items-center gap-2 group">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-display text-xl font-bold shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">N</div>
        <span className={`font-display text-2xl font-bold tracking-tight ${textColor}`}>Nos Artisans</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <Link to="/" className={`text-xs font-black uppercase tracking-widest transition-colors ${navItemColor('/')}`}>Accueil</Link>
        <Link to="/marketplace" className={`text-xs font-black uppercase tracking-widest transition-colors ${navItemColor('/marketplace')}`}>Boutique</Link>
        <Link to="/ivoirama" className={`text-xs font-black uppercase tracking-widest transition-colors ${location.pathname === '/ivoirama' ? 'text-accent' : isLabelPage || isInvestorPage || isB2BPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-primary'}`}>Label Ivoirama</Link>
        <Link to="/pieces-uniques" className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${location.pathname === '/pieces-uniques' ? 'text-amber-600' : isLabelPage || isInvestorPage || isB2BPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-amber-600'}`}>
          Pièces Uniques™
        </Link>
        <Link to="/b2b" className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${isB2BPage ? 'text-blue-400' : isLabelPage || isInvestorPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>
          <Briefcase className="size-3" /> B2B / Entreprises
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className={`p-2 transition-colors ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-primary'}`}>
          <Search className="size-5" />
        </button>
        <Link to="/cart" className={`relative p-2 transition-colors ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-primary'}`}>
          <ShoppingBag className="size-5" />
          {cartCount > 0 && <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold size-4 rounded-full flex items-center justify-center">{cartCount}</span>}
        </Link>
        <Link to="/profile" className={`hidden md:flex items-center justify-center h-10 px-6 rounded-full font-black uppercase tracking-widest text-[10px] transition-all shadow-lg ${isLabelPage || isInvestorPage || isB2BPage ? 'bg-accent hover:bg-accent/90 text-white' : 'bg-primary hover:bg-primary/90 text-white shadow-primary/20'}`}>
          Connexion
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full border-b p-6 flex flex-col gap-4 lg:hidden shadow-xl ${isLabelPage || isInvestorPage || isB2BPage ? 'bg-[#121212] border-white/5' : 'bg-white border-slate-100'}`}
          >
            <Link to="/" onClick={() => setIsOpen(false)} className={`text-sm font-black uppercase tracking-widest ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white' : ''}`}>Accueil</Link>
            <Link to="/marketplace" onClick={() => setIsOpen(false)} className={`text-sm font-black uppercase tracking-widest ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white' : ''}`}>Boutique</Link>
            <Link to="/ivoirama" onClick={() => setIsOpen(false)} className="text-sm font-black uppercase tracking-widest text-accent">Label Ivoirama</Link>
            <Link to="/pieces-uniques" onClick={() => setIsOpen(false)} className={`text-sm font-black uppercase tracking-widest ${isLabelPage || isInvestorPage || isB2BPage ? 'text-white' : 'text-amber-600'}`}>Pièces Uniques™</Link>
            <Link to="/b2b" onClick={() => setIsOpen(false)} className={`text-sm font-black uppercase tracking-widest text-blue-400`}>Entreprises (B2B)</Link>
            <Link to="/admin/investors" onClick={() => setIsOpen(false)} className={`text-sm font-black uppercase tracking-widest ${isLabelPage || isInvestorPage || isB2BPage ? 'text-blue-400' : 'text-blue-600'}`}>Investisseurs</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ cartCount, setCartCount, isDarkMode, setIsDarkMode }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/decora" element={<DecoraAI />} />
              <Route path="/ivoirama" element={<LabelIvoirama />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pieces-uniques" element={<UniquePiecesPage />} />
              <Route path="/admin/investors" element={<InvestorDashboard />} />
              <Route path="/verify-nft/:hash" element={<NFTVerification />} />
              <Route path="/ambassadors" element={<AmbassadorProgram />} />
              <Route path="/b2b" element={<B2BPortal />} />
              <Route path="/b2b/dashboard" element={<B2BDashboard />} />
              <Route path="/b2b/rfq" element={<B2BRequestQuote />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
