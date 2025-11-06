import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { type Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-colors">
        <div className="overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-3 md:p-4">
          <div className="flex items-center gap-1 mb-1 md:mb-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs md:text-sm text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400 ml-1 hidden md:inline">({Math.floor(Math.random() * 200) + 50} reviews)</span>
          </div>
          
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">{product.material}</p>
          <p className="text-xs text-gray-400 mb-2 md:mb-3">{product.color}</p>
          
          <div className="text-xs text-gray-400 mb-2 md:mb-3">
            {product.dimensions.width}" × {product.dimensions.height}" × {product.dimensions.depth}"
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-base md:text-lg font-bold text-gray-900">${product.price}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}