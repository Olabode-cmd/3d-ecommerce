import { useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { products } from '../data/products';
import ProductGallery from '../components/ProductGallery';

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery product={product} />
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 text-sm font-medium rounded-full border ${
              product.inStock 
                ? 'bg-green-50 text-green-700 border-green-200' 
                : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">{product.name}</h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">{product.description}</p>
          
          <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm">
              <div>
                <span className="text-gray-500">Material:</span>
                <p className="font-medium text-gray-900">{product.material}</p>
              </div>
              <div>
                <span className="text-gray-500">Color:</span>
                <p className="font-medium text-gray-900">{product.color}</p>
              </div>
              <div>
                <span className="text-gray-500">Dimensions:</span>
                <p className="font-medium text-gray-900">{product.dimensions.width}" × {product.dimensions.height}" × {product.dimensions.depth}"</p>
              </div>
              <div>
                <span className="text-gray-500">Weight:</span>
                <p className="font-medium text-gray-900">{product.weight} lbs</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-4 md:pt-6">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">${product.price}</p>
            <button className="w-full bg-gray-900 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}