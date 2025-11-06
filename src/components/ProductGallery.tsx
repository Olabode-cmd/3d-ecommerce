import { useState } from 'react';
import { type Product } from '../types/product';
import ThreeDViewer from './ThreeDViewer';
import ARViewer from './ARViewer';

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="mb-4">
        <img 
          src={product.images[selectedImage]} 
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl border-2 border-gray-200"
        />
      </div>
      <div className="flex space-x-3">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img 
              src={image} 
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        
        <div className="flex space-x-2">
          <ThreeDViewer product={product} compact />
          <ARViewer product={product} compact />
        </div>
      </div>
    </div>
  );
}