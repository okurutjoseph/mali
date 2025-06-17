'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceTemplateProps {
  title: string;
  description: string;
  image: string;
  buttonLink: string;
}

const ServiceTemplate = ({ title, description, image, buttonLink }: ServiceTemplateProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
          <Link 
            href={buttonLink}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate; 