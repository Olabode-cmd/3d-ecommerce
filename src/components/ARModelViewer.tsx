import { useEffect, useRef } from 'react';
import { type Product } from '../types/product';

interface ARModelViewerProps {
  product: Product;
  onClose: () => void;
}


export default function ARModelViewer({ product, onClose }: ARModelViewerProps) {
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Import model-viewer script
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }

    // Function to trigger AR when component mounts
    const timer = setTimeout(() => {
      if (modelViewerRef.current) {
        modelViewerRef.current.activateAR();
      }
    }, 1000);

    return () => clearTimeout(timer);
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
        ref={modelViewerRef}
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
              style="width: 100%; height: 100%; background-color: #000;"
              ios-src="${product.modelPath}"
            >
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <button 
                  onclick="this.parentElement.parentElement.activateAR()"
                  style="background: white; color: black; padding: 12px 24px; border-radius: 8px; border: none; font-weight: bold; font-size: 18px;"
                >
                  Tap to Start AR
                </button>
              </div>
            </model-viewer>
          `
        }}
      />
    </div>
  );
}