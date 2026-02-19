import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-brand-blue mb-4">Product Not Found</h1>
        <Link href="/products" className="text-brand-blue hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart! (This is a demo)`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link href="/products" className="text-brand-blue hover:underline mb-6 inline-block">
          ← Back to Products
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 md:h-full min-h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <p className="text-3xl font-bold text-brand-blue">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <p className="text-xl text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </p>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-brand-gold mr-2">✓</span>
                    Premium quality materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-gold mr-2">✓</span>
                    Comfortable fit for all-day wear
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-gold mr-2">✓</span>
                    Durable construction
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-gold mr-2">✓</span>
                    Easy to clean and maintain
                  </li>
                </ul>
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-brand-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-lg mb-4"
              >
                Add to Cart
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Free shipping on orders over $50
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48 w-full bg-gray-100">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-lg font-bold text-brand-blue">
                        ${relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
