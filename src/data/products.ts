export interface Product {
  id: number;
  name: string;
  points: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "McFlurry Ovomaltine", points: 4000, category: "6000", image: "🍦" },
  { id: 2, name: "Casquinha", points: 2000, category: "6000", image: "🍦" },
  { id: 3, name: "Sundae Caramelo", points: 3500, category: "6000", image: "🍨" },
  { id: 4, name: "Torta de Maçã", points: 3000, category: "6000", image: "🥧" },
  { id: 5, name: "Cookie", points: 2500, category: "6000", image: "🍪" },
  { id: 6, name: "Big Mac", points: 15000, category: "18000", image: "🍔" },
  { id: 7, name: "McChicken", points: 12000, category: "18000", image: "🍔" },
  { id: 8, name: "Quarterão", points: 14000, category: "18000", image: "🍔" },
  { id: 9, name: "McNuggets 10", points: 13000, category: "18000", image: "🍗" },
  { id: 10, name: "McOferta Big Mac", points: 18000, category: "18000", image: "🍔" },
];

export interface PointsHistoryItem {
  id: number;
  description: string;
  date: string;
  points: number;
  type: "earned" | "spent";
}

export const pointsHistory: PointsHistoryItem[] = [
  { id: 1, description: "Compra no restaurante", date: "10/02/2026", points: 500, type: "earned" },
  { id: 2, description: "McFlurry Ovomaltine", date: "08/02/2026", points: -4000, type: "spent" },
  { id: 3, description: "Compra no restaurante", date: "05/02/2026", points: 1200, type: "earned" },
  { id: 4, description: "Casquinha", date: "01/02/2026", points: -2000, type: "spent" },
  { id: 5, description: "Compra no restaurante", date: "28/01/2026", points: 800, type: "earned" },
  { id: 6, description: "Compra no restaurante", date: "25/01/2026", points: 3000, type: "earned" },
  { id: 7, description: "Big Mac", date: "20/01/2026", points: -15000, type: "spent" },
  { id: 8, description: "Compra no restaurante", date: "15/01/2026", points: 2500, type: "earned" },
];
