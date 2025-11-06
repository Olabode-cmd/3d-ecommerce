import { useEffect } from 'react';
import { type Product } from '../types/product';

interface ARModelViewerProps {
  product: Product;
  onClose: () => void;
}


export default function ARModelViewer({ product, onClose }: ARModelViewerProps) {
  // const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Import model-viewer script
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  // const scaleValue = Math.max(product.dimensions.width, product.dimensions.height, product.dimensions.depth) / 100;

  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
        >
          Close AR
        </button>
      </div>
      
      <div 
        style={{ width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{
          __html: `
            <model-viewer
              src="${product.modelPath}"
              ar
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              touch-action="pan-y"
              loading="eager"
              reveal="auto"
              auto-rotate
              shadow-intensity="1"
              style="width: 100%; height: 100%; background-color: #6b7280;"
              ios-src="${product.modelPath}"
            >
              <button 
                slot="ar-button"
                style="position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); background: white; color: black; padding: 16px 32px; border-radius: 12px; border: none; font-weight: bold; font-size: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
              >
                View in your space
              </button>
            </model-viewer>
          `
        }}
      />
    </div>
  );
}