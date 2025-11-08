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
              src="${window.location.origin}${product.modelPath}"
              ar
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              touch-action="pan-y"
              loading="eager"
              reveal="auto"
              auto-rotate
              shadow-intensity="1"
              ar-scale="fixed"
              style="width: 100%; height: 100%; background-color: #6b7280;"
              ios-src="${window.location.origin}${product.modelPath}"
              onerror="alert('Model loading error: ' + event.detail || 'Unknown error')"
              onload="console.log('Model loaded successfully')"
            >
              <div slot="ar-button" style="display: none;"></div>
              <button 
                id="custom-ar-button"
                style="position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); background: white; color: black; padding: 16px 32px; border-radius: 12px; border: none; font-weight: bold; font-size: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
              >
                View in your space
              </button>
              <div id="error-display" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,0,0,0.8); color: white; padding: 16px; border-radius: 8px; display: none; max-width: 80%; text-align: center;"></div>
            </model-viewer>
            <script>
              const modelViewer = document.querySelector('model-viewer');
              const errorDisplay = document.getElementById('error-display');
              const arButton = document.getElementById('custom-ar-button');
              
              // Browser detection for AR support
              function isARSupported() {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                const isAndroid = /Android/.test(navigator.userAgent);
                const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
                const isChrome = /Chrome/.test(navigator.userAgent);
                
                return (isIOS && isSafari) || (isAndroid && isChrome);
              }
              
              // Custom AR button click handler - always visible
              arButton.addEventListener('click', () => {
                if (!isARSupported()) {
                  alert('AR is not supported on this browser. Please use:\n\n• Safari on iPhone/iPad\n• Chrome on Android\n\nMake sure you\'re using HTTPS.');
                  return;
                }
                
                // Activate AR on supported browsers
                try {
                  modelViewer.activateAR();
                } catch (error) {
                  alert('AR activation failed: ' + error.message);
                }
              });
              
              modelViewer.addEventListener('error', (event) => {
                const errorMsg = 'AR Model Error: ' + (event.detail?.message || 'Failed to load model');
                errorDisplay.textContent = errorMsg;
                errorDisplay.style.display = 'block';
                alert(errorMsg);
              });
              
              modelViewer.addEventListener('load', () => {
                errorDisplay.style.display = 'none';
              });
            </script>
          `
        }}
      />
    </div>
  );
}