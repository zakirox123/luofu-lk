import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, excerpt, image, date, link = '#' }) {
  return (
    <Link href={link}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
