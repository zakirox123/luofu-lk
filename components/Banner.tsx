import Link from 'next/link';

export default function Banner(): JSX.Element {
  return (
    <div className="relative bg-gradient-to-r from-brand-blue to-blue-800 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comfortable & Stylish Slippers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Step into comfort with our premium collection of slippers. Quality crafted for your everyday relaxation.
          </p>
          <Link
            href="/products"
            className="inline-block bg-brand-gold text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
