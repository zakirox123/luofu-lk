import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import CollectionBanner from '@/components/CollectionBanner';
import FeatureCard from '@/components/FeatureCard';
import BlogCard from '@/components/BlogCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newProducts = products.slice(0, 8);
  const topProducts = products.slice(4, 12);

  return (
    <div>
      {/* Hero Section with Collections */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <CollectionBanner
              title="New Collection"
              subtitle="Discover the latest styles"
              image="https://luofujo.com/wp-content/uploads/2025/08/gal2-4.jpg"
              link="/products"
              position="left"
            />
            <CollectionBanner
              title="Top Collection"
              subtitle="Best sellers this season"
              image="https://luofujo.com/wp-content/uploads/2025/08/gal2-3-1024x1024.jpg"
              link="/products"
              position="right"
            />
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            20% Off For Sports Men
          </h2>
          <p className="text-lg md:text-xl mb-4">Limited time offer - Don't miss out!</p>
          <Link
            href="/products"
            className="inline-block bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our best slippers for your comfort and style
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Latest Products
              </h2>
              <p className="text-gray-600">Check out our newest arrivals</p>
            </div>
            <Link
              href="/products"
              className="hidden md:block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              href="/products"
              className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
              title="Free Shipping"
              description="Free shipping on all orders over $50"
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="24 Hour Support"
              description="24/7 online customer support"
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Money Back"
              description="5-day money-back guarantee"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and tips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="How to Choose the Perfect Slippers"
              excerpt="Finding the right slippers can make all the difference in your daily comfort. Here are our top tips for selecting the perfect pair."
              image="https://luofujo.com/wp-content/uploads/2025/08/gal2-4.jpg"
              date="February 15, 2026"
            />
            <BlogCard
              title="The Benefits of EVA Material"
              excerpt="Discover why EVA material is the perfect choice for comfortable, durable slippers that support your feet all day long."
              image="https://luofujo.com/wp-content/uploads/2025/08/gal2-3-1024x1024.jpg"
              date="February 10, 2026"
            />
            <BlogCard
              title="Caring for Your Slippers"
              excerpt="Learn how to maintain and care for your slippers to keep them looking and feeling great for years to come."
              image="https://luofujo.com/wp-content/uploads/2025/08/iron-gate-1.jpg"
              date="February 5, 2026"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, new arrivals, and the latest updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button
              type="submit"
              className="bg-brand-gold text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
