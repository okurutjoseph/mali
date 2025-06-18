'use client';

import Link from 'next/link';
import Image from 'next/image';

const MainFooter = () => {
  return (
    <>
      {/* Top Footer */}
      <div className="relative w-full bg-[#0e155b]">
        <Image
            src="/images/footertop.jpg"
            alt="Footer Top Image"
            width={1920}
            height={400}
            className="w-full"
            priority
            quality={100}
          />
      </div>

      <footer className="w-full bg-[#0e155b] text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Info Column */}
            <div className="flex flex-col space-y-6">
              <Link href="/" className="flex items-center mb-4">
                <Image src="/images/mali-logo.webp" alt="Ziza Digital" width={160} height={60} className="h-12 w-auto object-contain" priority />
              </Link>
              <div className="text-sm">
                <p className="mb-4">We are a full-service Digital Marketing Agency. We work with brands that are looking to grow and need to create awareness, engage with prospects and generate leads to fuel that growth.</p>
                <p className="mb-2">+256 772 515 972 | +256 702 384 328</p>
                <p className="mb-4"><a href="mailto:info@malidigitalagency.com" className="hover:text-gray-300">info@malidigitalagency.com</a></p>
              </div>
            </div>
            
            {/* Services Column 1 */}
            <div className="services-column flex flex-col md:border-l md:border-r border-gray-600 md:px-6">
              <h3 className="text-xl mb-6 pb-2 border-b border-gray-600">Services</h3>
              <div className="grid grid-cols-1 gap-4">
                <Link href="/our-services/digital-marketing" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>DIGITAL MARKETING</span>
                </Link>
                <Link href="/our-services/digital-sales-leads" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>DIGITAL SALES & LEADS</span>
                </Link>
                <Link href="/our-services/social-media-management" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>SOCIAL MEDIA MANAGEMENT</span>
                </Link>
                <Link href="/our-services/content-production" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>CONTENT PRODUCTION</span>
                </Link>
              </div>
            </div>
            
            {/* Services Column 2 */}
            <div className="services-column flex flex-col">
              <h3 className="text-xl mb-6 pb-2 border-b border-gray-600 md:opacity-0">Services</h3> {/* Invisible header for alignment with border */}
              <div className="grid grid-cols-1 gap-4">
                <Link href="/our-services/media-buying" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>MEDIA BUYING</span>
                </Link>
                <Link href="/our-services/website-design" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>WEBSITE DESIGN</span>
                </Link>
                <Link href="/our-services/digital-skills-training" className="flex items-center">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span>DIGITAL SKILLS TRAINING</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Border before social icons */}
          <div className="border-t border-gray-600 mb-8"></div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="#" className="rounded-full border border-white p-2 hover:bg-white hover:text-[#2a2a4a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="#" className="rounded-full border border-white p-2 hover:bg-white hover:text-[#2a2a4a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </Link>
            <Link href="#" className="rounded-full border border-white p-2 hover:bg-white hover:text-[#2a2a4a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </Link>
            <Link href="#" className="rounded-full border border-white p-2 hover:bg-white hover:text-[#2a2a4a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>
          
          {/* Footer Bottom */}
          <div className="text-center text-sm border-t border-gray-600 pt-6">
            <div className="flex justify-center space-x-4 mb-2">
              <Link href="#" className="hover:text-gray-300">PRIVACY POLICY</Link>
              <span>|</span>
              <Link href="#" className="hover:text-gray-300">SITE MAP</Link>
            </div>
            <p className="text-gray-400">COPYRIGHT © 2025 MALI DIGITAL AGENCY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter; 