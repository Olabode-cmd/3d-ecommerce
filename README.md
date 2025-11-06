# 3D E-Commerce Chair Store

A modern React + TypeScript e-commerce application featuring 4 chair products with advanced 3D visualization and Augmented Reality (AR) capabilities.

## Features

- **Product Catalog**: Browse 4 different chair models with high-quality images
- **3D Visualization**: Interactive 3D model viewer with touch/mouse controls
- **Augmented Reality**: Place chairs in your real environment using AR technology
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **AR Technology**: Google Model Viewer
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Headless UI
- **Build Tool**: Vite with SWC for fast refresh

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-ecommerce
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Install additional packages for 3D and AR features:
```bash
npm install react-router-dom @react-three/fiber @react-three/drei three @types/three @google/model-viewer tailwindcss @headlessui/react lucide-react
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── ThreeDViewer.tsx
│   └── ARViewer.tsx
├── pages/              # Page components
│   ├── ProductsPage.tsx
│   └── ProductDetailsPage.tsx
├── data/               # Static data
│   └── products.ts
├── types/              # TypeScript definitions
│   └── product.ts
├── assets/             # Static assets
│   └── images/         # Product images and 3D models
└── hooks/              # Custom React hooks
    └── useAR.ts
```

## Features Overview

### Products Page
- Grid layout displaying 4 chair products
- Product cards with images, names, and prices
- Navigation to individual product details

### Product Details Page
- Image gallery with multiple product photos
- Detailed product information
- 3D model viewer with interactive controls
- AR functionality for real-world placement

### 3D Visualization
- Interactive 3D models using Three.js
- Touch and mouse controls for rotation
- Realistic lighting and materials
- Optimized loading and performance

### Augmented Reality
- Camera-based AR using Google Model Viewer
- Real-world model placement
- Cross-platform mobile support
- Automatic device capability detection

## Browser Support

- **3D Features**: Modern browsers with WebGL support
- **AR Features**: Mobile browsers with camera access (iOS Safari 12+, Android Chrome 81+)
- **Fallbacks**: Graceful degradation for unsupported features

## Development Notes

See `PROJECT_OUTLINE.md` for development steps and `DETAILED_IMPLEMENTATION_NOTES.txt` for comprehensive implementation details.

## Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## License

MIT License - see LICENSE file for details.