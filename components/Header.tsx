'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const services = [
    ['Growth Marketing Services', 'Search Engine Optimisation'],
    ['Lead Generation Projects', 'Brand Development'],
    ['Professional Services Marketing', 'Pay Per Click Advertising'],
    ['Mobile Marketing', 'Email Marketing'],
    ['Social Media Marketing', 'Content Marketing'],
    ['Website Development', ''],
  ];

  return (
    <>
      {/* Top Header */}
      <div className="w-full" style={{ backgroundColor: '#ff2a0f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-10">
          <div className="flex space-x-4 text-white text-sm">
            <Link href="#" className="hover:text-gray-200">Contact Us</Link>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-white w-full shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/mali-logo.webp" alt="Ziza Digital" width={160} height={60} className="h-12 w-auto object-contain" priority />
          </Link>
          
          {/* Navigation and Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                href="/our-services" 
                className="text-gray-800 hover:text-gray-600 font-medium py-8"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                Our Services
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className={`absolute top-full left-0 mt-4 w-[600px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-md border-[1px] border-gray-300 overflow-hidden ${isServicesHovered ? 'block' : 'hidden'}`}
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <div className="grid grid-cols-2 gap-4 p-2">
                  <div className="flex flex-col">
                    {services.map((row, rowIndex) => (
                      row[0] && (
                        <Link
                          key={`left-${rowIndex}`}
                          href={`/our-services/${row[0].toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-3 text-gray-700 hover:bg-gray-50 block font-medium relative"
                        >
                          {row[0]}
                          {rowIndex !== services.length - 1 && (
                            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-200"></div>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                  <div className="flex flex-col">
                    {services.map((row, rowIndex) => (
                      row[1] && (
                        <Link
                          key={`right-${rowIndex}`}
                          href={`/our-services/${row[1].toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-3 text-gray-700 hover:bg-gray-50 block font-medium relative"
                        >
                          {row[1]}
                          {rowIndex !== services.length - 1 && (
                            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-200"></div>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/our-work" className="text-gray-800 hover:text-gray-600 font-medium">Our Work</Link>
            <Link href="/about-us" className="text-gray-800 hover:text-gray-600 font-medium">About Us</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">Blog</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium">Resources</Link>
            <Link href="#" className="bg-purple-900 text-white px-4 py-2 rounded-full font-bold flex items-center hover:bg-purple-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;