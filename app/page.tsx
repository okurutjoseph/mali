'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-center justify-center" style={{ minHeight: '500px' }}>
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Content over background */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital Marketing Agency</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">We help businesses grow through strategic digital marketing and creative solutions</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-full transition text-lg">Get Started</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/values.webp"
                alt="About Ziza Digital"
                width={768}
                height={512}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">About Ziza Digital</h2>
              <p className="mb-4">We are a full-service digital marketing agency focused on helping businesses grow. We work with specialized product brands and professional services firms that need to attract new prospects, engage with customers, and generate leads.</p>
              <p className="mb-4">With offices in Lagos, Nigeria, and Ontario, Canada, Ziza Digital leverages its multidisciplinary team's unique skill sets and broad experience across industries to help clients across the world.</p>
              <p className="mb-4">Need help with creating awareness for your brand, connecting with your target audience, or generating leads?</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition text-lg">Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
