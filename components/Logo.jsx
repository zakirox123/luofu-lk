import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-2xl font-bold">
        <span className="text-brand-blue">luofu</span>
        <span className="text-brand-gold">.lk</span>
      </div>
    </div>
  );
}
