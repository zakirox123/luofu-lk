# luofu.lk - Project Structure

```
luofu-lk/
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── package-lock.json            # Locked dependency versions
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tsconfig.json               # TypeScript configuration
│   ├── jsconfig.json               # JavaScript path aliases (@/*)
│   ├── .gitignore                  # Git ignore rules
│   └── README.md                   # Project documentation
│
├── 📁 pages/                        # Next.js Pages (File-based Routing)
│   ├── _app.js                     # App wrapper with Header/Footer
│   ├── index.js                    # Root page (/) - Maintenance page
│   ├── about.js                    # About page (/about)
│   ├── contact.js                  # Contact page (/contact)
│   │
│   ├── 📁 website/
│   │   └── index.js                # E-commerce homepage (/website)
│   │
│   ├── 📁 products/
│   │   └── index.js                # Products listing page (/products)
│   │
│   └── 📁 product/
│       └── [id].js                 # Dynamic product page (/product/[id])
│
├── 📁 components/                   # Reusable React Components
│   ├── Header.jsx                  # Navigation header
│   ├── Footer.jsx                  # Site footer
│   ├── Logo.jsx                    # Brand logo component
│   ├── Banner.jsx                  # Hero banner component
│   ├── ProductCard.jsx             # Product card with sale badges
│   ├── CollectionBanner.jsx       # Collection showcase banners
│   ├── FeatureCard.jsx            # Feature icons and descriptions
│   └── BlogCard.jsx                # Blog post cards
│
├── 📁 data/                         # Data Files
│   └── products.js                 # Product data array (12 products)
│
├── 📁 styles/                       # Global Styles
│   └── globals.css                 # Tailwind CSS imports
│
├── 📁 public/                       # Static Assets
│   └── logo.svg                    # Logo SVG file
│
└── 📄 index.html                    # Original HTML file (backup/reference)

```

## 📋 File Descriptions

### Configuration Files

- **package.json**: Project dependencies (React, Next.js, Tailwind CSS)
- **next.config.js**: Image domains, remote patterns for luofujo.com
- **tailwind.config.js**: Custom colors (brand-blue: #1e3c72, brand-gold: #ffd700)
- **jsconfig.json**: Path aliases (@/* points to root)

### Pages (Next.js Routing)

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.js` | Maintenance page with link to website |
| `/website` | `pages/website/index.js` | E-commerce homepage with collections, products, blog |
| `/products` | `pages/products/index.js` | All products grid view |
| `/product/[id]` | `pages/product/[id].js` | Dynamic product detail page |
| `/about` | `pages/about.js` | About page |
| `/contact` | `pages/contact.js` | Contact form page |

### Components

- **Header.jsx**: White header with logo, nav menu, search, cart icon
- **Footer.jsx**: Footer with links, contact info, social media
- **ProductCard.jsx**: Product card with image, name, price, sale badges
- **CollectionBanner.jsx**: Large banner for New/Top collections
- **FeatureCard.jsx**: Icon + title + description for features
- **BlogCard.jsx**: Blog post preview cards

### Data

- **products.js**: Array of 12 products with:
  - id, name, price, originalPrice
  - image URLs from luofujo.com
  - description, category, featured flag

## 🎨 Design System

### Colors
- **Brand Blue**: `#1e3c72`
- **Brand Gold**: `#ffd700`
- **White**: Standard white

### Typography
- Font Family: Arial, sans-serif (maintenance page)
- Tailwind default fonts (e-commerce pages)

## 🚀 Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

### Production
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `next`: ^14.0.0

### Development
- `tailwindcss`: ^3.3.5
- `autoprefixer`: ^10.4.16
- `postcss`: ^8.4.31
- TypeScript types for React, Node, etc.

## 🔗 Key Features

1. **File-based Routing**: Next.js automatically creates routes from `pages/` directory
2. **Dynamic Routes**: `/product/[id]` uses dynamic routing
3. **Image Optimization**: Next.js Image component with luofujo.com images
4. **Responsive Design**: Mobile-first with Tailwind CSS
5. **Sale Pricing**: Products show original price and discount badges

## 📝 Notes

- The `index.html` file in root is kept as backup/reference
- All routing is handled by Next.js file-based routing
- Images are loaded from `luofujo.com` (configured in `next.config.js`)
- The maintenance page (`/`) doesn't show Header/Footer (handled in `_app.js`)
