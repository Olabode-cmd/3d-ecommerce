import { useState } from 'react';
import { Camera } from 'lucide-react';
import { type Product } from '../types/product';
import ARModelViewer from './ARModelViewer';

interface ARViewerProps {
  product: Product;
  compact?: boolean;
}

export default function ARViewer({ product, compact = false }: ARViewerProps) {
  const [isAROpen, setIsAROpen] = useState(false);
  // const [isARSupported, setIsARSupported] = useState(true);

  const handleARClick = () => {
    setIsAROpen(true);
  };

  if (compact) {
    return (
      <>
        <button
          onClick={handleARClick}
          className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors flex items-center justify-center flex-col"
        >
          <Camera size={16} className="text-green-600" />
          <span className="text-xs text-green-600 mt-1">AR</span>
        </button>
        {isAROpen && (
          <ARModelViewer 
            product={product} 
            onClose={() => setIsAROpen(false)} 
          />
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleARClick}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Camera size={20} />
        <span>View in AR</span>
      </button>
      {isAROpen && (
        <ARModelViewer 
          product={product} 
          onClose={() => setIsAROpen(false)} 
        />
      )}
    </>
  );
}