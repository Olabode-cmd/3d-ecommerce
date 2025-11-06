import { Camera } from 'lucide-react';
import { Product } from '../types/product';

interface ARViewerProps {
  product: Product;
  compact?: boolean;
}

export default function ARViewer({ product, compact = false }: ARViewerProps) {
  const handleARClick = () => {
    // AR functionality will be implemented here
    console.log('AR viewer for:', product.name);
  };

  if (compact) {
    return (
      <button
        onClick={handleARClick}
        className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors flex items-center justify-center flex-col"
      >
        <Camera size={16} className="text-green-600" />
        <span className="text-xs text-green-600 mt-1">AR</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleARClick}
      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
    >
      <Camera size={20} />
      <span>View in AR</span>
    </button>
  );
}