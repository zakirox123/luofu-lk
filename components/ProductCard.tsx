import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasSale 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          {hasSale && (
            <div className="absolute top-2 right-2 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              -{discountPercent}%
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2 mb-4">
            <p className="text-2xl font-bold text-brand-blue">
              ${product.price.toFixed(2)}
            </p>
            {hasSale && (
              <p className="text-lg text-gray-400 line-through">
                ${product.originalPrice!.toFixed(2)}
              </p>
            )}
          </div>
          <button className="w-full bg-brand-blue text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
            View Product
          </button>
        </div>
      </Link>
    </div>
  );
}
