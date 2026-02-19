# luofu.lk - E-commerce Website

A modern, responsive e-commerce website for luofu.lk slipper brand built with Next.js and Tailwind CSS.

## Features

- 🏠 **Homepage** (`/website`) - Landing page with hero banner and featured products
- 🛍️ **Products Page** (`/products`) - Browse all available slipper products
- 📦 **Product Detail** (`/product/[id]`) - Individual product pages with details
- 📄 **About Page** (`/about`) - Information about the brand
- 📧 **Contact Page** (`/contact`) - Contact form and information

## Tech Stack

- **Next.js 14** - React framework with routing
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Next/Image** - Optimized image handling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
luofu-lk/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Banner.jsx      # Hero banner component
│   └── ProductCard.jsx # Product card component
├── data/               # Data files
│   └── products.js     # Product data array
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper with layout
│   ├── website/        # Homepage
│   ├── products/       # Products listing
│   ├── product/        # Dynamic product pages
│   ├── about.js        # About page
│   └── contact.js      # Contact page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
└── public/             # Static assets
```

## Color Scheme

- **Brand Blue**: `#1e3c72`
- **Brand Gold**: `#ffd700`
- **White**: Standard white background

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with hover effects
- Product image placeholders from Unsplash
- Dummy product data (12 products)
- Smooth navigation between pages
- Add to cart functionality (demo)

## Notes

- All product images use Unsplash placeholders
- Product data is stored in `data/products.js`
- Add to cart functionality is a demo (no backend)
- Contact form is a demo (no backend integration)

## License

© 2026 luofu.lk. All Rights Reserved.
