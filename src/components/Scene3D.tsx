import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { type Product } from '../types/product';
import ChairModel from './ChairModel';

interface Scene3DProps {
  product: Product;
}

export default function Scene3D({ product }: Scene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ height: '400px', backgroundColor: '#6b7280' }}
    >
      <color attach="background" args={['#6b7280']} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />
      
      <Suspense fallback={null}>
        <ChairModel product={product} />
      </Suspense>
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </Canvas>
  );
}