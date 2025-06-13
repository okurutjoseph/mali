'use client';
import Image from 'next/image';
import Link from 'next/link';

interface BreadcrumbProps {
  pageName: string;
  bgImage: string;
}

const Breadcrumb = ({ pageName, bgImage }: BreadcrumbProps) => {
  return (
    <div className="relative py-32">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt="Breadcrumb Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{pageName}</h1>
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="text-white mx-2">›</span>
            <span className="text-orange-400">
              {pageName}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb; 