import Link from 'next/link';
import Image from 'next/image';

export default function CollectionBanner({ title, subtitle, image, link, position = 'left' }) {
  return (
    <Link href={link || '/products'}>
      <div className="relative h-80 md:h-96 rounded-lg overflow-hidden group cursor-pointer shadow-lg">
        <div className="absolute inset-0">
          <Image
            src={image || 'https://luofujo.com/wp-content/uploads/2025/08/gal2-4.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={`absolute inset-0 ${position === 'left' ? 'bg-gradient-to-r from-black/70 via-black/50 to-transparent' : 'bg-gradient-to-l from-black/70 via-black/50 to-transparent'}`}></div>
        </div>
        <div className={`absolute inset-0 flex items-center ${position === 'left' ? 'justify-start pl-8 md:pl-12' : 'justify-end pr-8 md:pr-12'}`}>
          <div className="text-white z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-200">{subtitle}</p>
            <button className="bg-brand-gold text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
