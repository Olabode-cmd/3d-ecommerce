import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">Chair Collection</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}