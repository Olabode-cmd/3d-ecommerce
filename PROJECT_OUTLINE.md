# 3D E-Commerce Chair Store - Development Outline

## Project Overview
A React + TypeScript application featuring 4 chair products with 3D visualization and AR capabilities.

## Required Packages

### Core Dependencies
- `react-router-dom` - Client-side routing for Products and Product Details pages
- `@react-three/fiber` - React renderer for Three.js (3D graphics)
- `@react-three/drei` - Useful helpers for React Three Fiber
- `three` - 3D graphics library
- `@types/three` - TypeScript definitions for Three.js

### 3D Model Loading
- `@react-three/drei` (includes GLTF loader)
- `three-stdlib` - Additional Three.js utilities

### AR Functionality
- `@google/model-viewer` - Web component for 3D models with AR support
- `@types/google.maps` - For potential location-based AR features

### UI/Styling (Optional but Recommended)
- `tailwindcss` - Utility-first CSS framework
- `@headlessui/react` - Unstyled UI components
- `lucide-react` - Icon library

## Development Steps

### Phase 1: Project Setup
- [ ] Install required packages
- [ ] Configure routing with React Router
- [ ] Set up basic project structure
- [ ] Create data models for chair products

### Phase 2: Products Page
- [ ] Create ProductsPage component
- [ ] Implement product grid layout (4 chairs)
- [ ] Add product cards with images and basic info
- [ ] Implement navigation to product details

### Phase 3: Product Details Page
- [ ] Create ProductDetailsPage component
- [ ] Implement image gallery/carousel
- [ ] Add product information display
- [ ] Create 3D viewer button functionality

### Phase 4: 3D Visualization
- [ ] Set up Three.js scene with React Three Fiber
- [ ] Create 3D model viewer component
- [ ] Implement touch/mouse controls for rotation
- [ ] Create iframe modal for 3D viewer

### Phase 5: AR Integration
- [ ] Integrate Google Model Viewer
- [ ] Implement AR button functionality
- [ ] Configure camera access permissions
- [ ] Test AR placement in environment

### Phase 6: Polish & Optimization
- [ ] Add loading states
- [ ] Implement error handling
- [ ] Optimize 3D model loading
- [ ] Add responsive design
- [ ] Performance testing

## File Structure
```
src/
├── components/
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── ThreeDViewer.tsx
│   └── ARViewer.tsx
├── pages/
│   ├── ProductsPage.tsx
│   └── ProductDetailsPage.tsx
├── data/
│   └── products.ts
├── types/
│   └── product.ts
└── hooks/
    └── useAR.ts
```

## Key Implementation Notes

### 3D Viewer
- Use iframe to isolate Three.js context
- Implement touch gestures for mobile
- Add loading spinner for model loading

### AR Functionality
- Requires HTTPS for camera access
- Test on mobile devices primarily
- Fallback for unsupported devices

### Performance
- Lazy load 3D models
- Optimize GLB file sizes
- Use React.Suspense for loading states

## Testing Checklist
- [ ] Products page loads all 4 chairs
- [ ] Navigation between pages works
- [ ] 3D viewer opens in iframe
- [ ] Touch controls work on mobile
- [ ] AR button triggers camera
- [ ] Models place correctly in AR
- [ ] Responsive design on all devices