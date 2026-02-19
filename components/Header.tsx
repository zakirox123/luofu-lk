import Link from 'next/link';
import Logo from './Logo';

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/website">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/website" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-brand-blue" aria-label="Search">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-brand-blue relative" aria-label="Shopping cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
