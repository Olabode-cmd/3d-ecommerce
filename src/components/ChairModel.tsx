import { useGLTF } from '@react-three/drei';
import { type Product } from '../types/product';

interface ChairModelProps {
  product: Product;
}

export default function ChairModel({ product }: ChairModelProps) {
  const { scene } = useGLTF(product.modelPath);
  
  return (
    <primitive 
      object={scene} 
      scale={[2, 2, 2]} 
      position={[0, -1, 0]}
    />
  );
}