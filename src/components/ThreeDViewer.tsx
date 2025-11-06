import { useState } from 'react';
import { Box } from 'lucide-react';
import { type Product } from '../types/product';
import Scene3D from './Scene3D';

interface ThreeDViewerProps {
  product: Product;
  compact?: boolean;
}

export default function ThreeDViewer({ product, compact = false }: ThreeDViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (compact) {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-blue-50 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition-colors flex items-center justify-center flex-col"
        >
          <Box size={16} className="text-blue-600" />
          <span className="text-xs text-blue-600 mt-1">3D</span>
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">3D View - {product.name}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <Scene3D product={product} />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Box size={20} />
        <span>View in 3D</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">3D View - {product.name}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Scene3D product={product} />
          </div>
        </div>
      )}
    </>
  );
}