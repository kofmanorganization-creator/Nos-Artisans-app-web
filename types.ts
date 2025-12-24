
export enum CertificationLevel {
  SILVER = 'Silver',
  GOLD = 'Gold',
  DIAMOND = 'Diamond',
  PLATINUM = 'Platinum'
}

export interface Artisan {
  id: string;
  name: string;
  role: string;
  location: string;
  story: string;
  image: string;
  certification: CertificationLevel;
  rating: number;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // in XOF
  ethPrice: number;
  image: string;
  images: string[];
  artisanId: string;
  artisanName: string;
  ethikaScore: number;
  isNFT: boolean;
  description: string;
  dimensions?: string;
  material?: string;
  nftHash?: string;
  royalties?: number;
}

export interface UniquePiece extends Product {
  currentBid: number;
  startingPrice: number;
  endTime: string; // ISO date
  bidHistory: { user: string; amount: number; time: string }[];
  heritageStory: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type AccessStatus = 'none' | 'pending' | 'approved';

// --- Nouveaux Types Stratégiques ---

export interface InvestorKPIs {
  gmvTotal: number;
  revenueTotal: number;
  activeArtisans: number;
  growthRate: number;
  countryPerformance: { country: string; gmv: number; color: string }[];
}

export interface Ambassador {
  id: string;
  name: string;
  country: string;
  referrals: number;
  commissionEarned: number;
  badge: string;
  image: string;
}

// --- Module B2B ---

export type RFQStatus = 'pending' | 'quoted' | 'accepted' | 'contract_signed' | 'completed';

export interface B2BProject {
  id: string;
  title: string;
  clientName: string;
  companyName: string;
  budgetRange: string;
  status: RFQStatus;
  createdAt: string;
  milestones: { label: string; completed: boolean; date?: string }[];
  totalValue?: number;
}
