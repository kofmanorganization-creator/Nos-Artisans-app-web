
import { Artisan, Product, CertificationLevel, UniquePiece } from './types';

export const MOCK_ARTISANS: Artisan[] = [
  {
    id: 'art-1',
    name: 'Kouamé Jean',
    role: 'Maître Sculpteur',
    location: 'Grand-Bassam, Côte d\'Ivoire',
    story: 'Héritier d\'une lignée de sculpteurs Baoulé, Jean fusionne le bois d\'ébène avec une vision futuriste.',
    image: 'https://picsum.photos/seed/jean/200/200',
    certification: CertificationLevel.PLATINUM,
    rating: 4.9,
    tags: ['Bois', 'Akan', 'Tradition']
  },
  {
    id: 'art-2',
    name: 'Awa Koné',
    role: 'Tisserande Royale',
    location: 'Yamoussoukro',
    story: 'Awa préserve l\'art du Pagne Kita en utilisant des teintures organiques et des motifs ancestraux.',
    image: 'https://picsum.photos/seed/awa/200/200',
    certification: CertificationLevel.DIAMOND,
    rating: 4.8,
    tags: ['Textile', 'Kita', 'Eco']
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Masque Baoulé Royal',
    category: 'Sculpture',
    price: 185000,
    ethPrice: 0.15,
    image: 'https://images.unsplash.com/photo-1590664216212-62e7637d1665?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1590664216212-62e7637d1665?auto=format&fit=crop&w=600&q=80'],
    artisanId: 'art-1',
    artisanName: 'Kouamé Jean',
    ethikaScore: 92,
    isNFT: true,
    description: 'Une pièce unique sculptée à la main dans du bois d\'ébène royal.',
    material: 'Bois d\'Ébène',
    dimensions: '45cm x 20cm'
  },
  {
    id: 'p2',
    name: 'Pagne Kita Premium',
    category: 'Textile',
    price: 45000,
    ethPrice: 0.04,
    image: 'https://images.unsplash.com/photo-1621506821612-421715053cc3?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1621506821612-421715053cc3?auto=format&fit=crop&w=600&q=80'],
    artisanId: 'art-2',
    artisanName: 'Awa Koné',
    ethikaScore: 98,
    isNFT: true,
    description: 'Tissage traditionnel aux motifs solaires, symbole de prestige.',
    material: 'Coton bio',
    dimensions: '2m x 1.5m'
  }
];

export const UNIQUE_PIECES: UniquePiece[] = [
  {
    ...MOCK_PRODUCTS[0],
    id: 'up1',
    name: 'Le Trône de l\'Aube',
    startingPrice: 1500000,
    currentBid: 1850000,
    endTime: new Date(Date.now() + 172800000).toISOString(), // 48h from now
    bidHistory: [
      { user: 'Collector_88', amount: 1850000, time: '2024-05-20T10:00:00Z' },
      { user: 'HeritageArt', amount: 1700000, time: '2024-05-19T14:30:00Z' }
    ],
    heritageStory: "Ce trône n'est pas qu'un siège, c'est un poème gravé dans l'iroko. Il raconte la naissance du royaume et la force des ancêtres Akan."
  },
  {
    id: 'up2',
    name: 'Sceptre d\'Ebène Impérial',
    category: 'Sculpture',
    price: 2200000,
    ethPrice: 1.8,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80'],
    artisanId: 'art-1',
    artisanName: 'Kouamé Jean',
    ethikaScore: 95,
    isNFT: true,
    description: 'Une pièce d\'apparat réservée aux grandes occasions.',
    material: 'Ebène et Or',
    currentBid: 2400000,
    startingPrice: 2000000,
    endTime: new Date(Date.now() + 86400000).toISOString(),
    bidHistory: [],
    heritageStory: "Symbole de commandement, ce sceptre utilise l'ébène le plus pur des forêts sacrées de l'Est."
  }
];

export const RECENTLY_SOLD: UniquePiece[] = [
  {
    ...UNIQUE_PIECES[0],
    id: 'sold1',
    name: 'Statue de la Fécondité',
    currentBid: 4500000,
    endTime: '2024-04-12T00:00:00Z'
  },
  {
    ...UNIQUE_PIECES[1],
    id: 'sold2',
    name: 'Tenture des Rois Baoulé',
    currentBid: 3200000,
    endTime: '2024-03-28T00:00:00Z'
  }
];
