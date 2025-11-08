import { type Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Arm Chair',
    description: 'Comfortable modern arm chair with premium upholstery and ergonomic design.',
    price: 299.99,
    images: [
      '/images/product1/image1.png',
      '/images/product1/image2.png',
      '/images/product1/image3.png'
    ],
    modelPath: '/images/product1/arm_chair__furniture.glb',
    category: 'Living Room',
    dimensions: { width: 32, height: 34, depth: 30 },
    weight: 25,
    material: 'Fabric & Steel',
    color: 'Charcoal Gray',
    features: ['Ergonomic Design', 'Premium Upholstery', 'Steel Frame'],
    inStock: true,
    rating: 4.5
  },
  // {
  //   id: '2',
  //   name: 'Gaming Office Chair',
  //   description: 'High-performance gaming chair with lumbar support and adjustable height.',
  //   price: 399.99,
  //   images: [
  //     '/images/product2/image1.png',
  //     '/images/product2/image2.png',
  //     '/images/product2/image3.png'
  //   ],
  //   modelPath: '/images/product2/office_chair_gaming_chair.glb',
  //   category: 'Office',
  //   dimensions: { width: 28, height: 48, depth: 32 },
  //   weight: 35,
  //   material: 'PU Leather & Mesh',
  //   color: 'Black & Red',
  //   features: ['Lumbar Support', 'Height Adjustable', '360° Swivel', 'Tilt Function'],
  //   inStock: true,
  //   rating: 4.7
  // },
  {
    id: '3',
    name: 'Executive Office Chair',
    description: 'Professional executive chair with leather finish and premium comfort.',
    price: 499.99,
    images: [
      '/images/product3/image1.png',
      '/images/product3/image2.png',
      '/images/product3/image3.png'
    ],
    modelPath: '/images/product3/office_chair_gaming_chair.glb',
    category: 'Office',
    dimensions: { width: 30, height: 46, depth: 34 },
    weight: 40,
    material: 'Genuine Leather',
    color: 'Brown Leather',
    features: ['Genuine Leather', 'Executive Design', 'Padded Armrests', 'Gas Lift'],
    inStock: false,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Ergonomic Task Chair',
    description: 'Ergonomic task chair designed for long hours of comfortable work.',
    price: 349.99,
    images: [
      '/images/product4/image1.png',
      '/images/product4/image2.png',
      '/images/product4/image3.png'
    ],
    modelPath: '/images/product4/office_chair_gaming_chair.glb',
    category: 'Office',
    dimensions: { width: 26, height: 42, depth: 28 },
    weight: 22,
    material: 'Mesh & Plastic',
    color: 'White & Gray',
    features: ['Breathable Mesh', 'Ergonomic Support', 'Lightweight', 'Easy Assembly'],
    inStock: true,
    rating: 4.3
  }
];