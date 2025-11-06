export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  modelPath: string;
  category: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  material: string;
  color: string;
  features: string[];
  inStock: boolean;
  rating: number;
}