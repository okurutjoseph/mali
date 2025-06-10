'use client';
import { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="relative" style={{ minHeight: '100vh' }}>
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
                src="/images/imgs-55.png"
                alt="About Ziza Digital"
                width={768}
                height={512}
                className="shadow-md"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-4">About Mali Digital Agency</h2>
              <p className="mb-4">We are a full-service digital marketing agency focused on helping businesses grow. We work with specialized product brands and professional services firms that need to attract new prospects, engage with customers, and generate leads.</p>
              <p className="mb-4">With offices in Uganda, Mali Digital Agency leverages its multidisciplinary team's unique skill sets and broad experience across industries to help clients across the world.</p>
              <p className="mb-4">Need help with creating awareness for your brand, connecting with your target audience, or generating leads?</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition text-lg">Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '437.5px', height: '125px', width: '1px', background: '#fff' }}></div>

      {/* Our Services Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-orange-500 block">Our</span> Services
          </h2>
          <Slider {...settings}>
            {/* Service Card 1: Digital Marketing */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/digital-marketing.png" alt="Digital Marketing Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">Your customers and prospects are on Social media. Your brand should be too.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>

            {/* Service Card 2: Social Media Management */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/social-media-management.png" alt="Social Media Management Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Social Media Management</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">Your website is your online office address and your 24-hour sales tool.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>

            {/* Service Card 3: Content Production */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/content-production.png" alt="Content Production Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Content Production</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">There are 3.5 billion searches on Google daily. Clearly, consumers are turning more to search engines help them take buying decisions.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>

            {/* Service Card 4 Media Buying */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/media-buying.png" alt="Media Buying Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Media Buying</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">Reach your customers on the go with a custom mobile application.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>

            {/* Service Card 5 Website Design */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/website-design.png" alt="Website Design Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Website Design</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">Make informed decisions with powerful data insights.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>

            {/* Service Card 6 Digital Skills Training */}
            <div className="px-2">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center justify-between h-[350px]">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <Image src="/images/icons/digital-skills-training.png" alt="Digital Skills Training Icon" width={32} height={32} /> 
                </div>
                <h3 className="text-2xl font-semibold mb-4">Digital Skills Training</h3>
                <p className="text-gray-600 mb-6 min-h-[70px]">Engage your audience with compelling and SEO-friendly content.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mt-auto">READ MORE</button>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Some of Our Clients Section Wrapper */}
      <div className="relative z-10 rounded-lg shadow-xl mx-auto w-11/12 -mt-16" style={{ background: '#ff6900' }}>
        <section className="py-16 text-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Some of Our Clients</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
              {/* Client Logo 1 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo1.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 2 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo2.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 3 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo3.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 4 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo4.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 5 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo5.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 6 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo6.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 7 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo7.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 8 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo8.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 9 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo9.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
              {/* Client Logo 10 */}
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-full">
                <Image src="/images/clients/logo10.png" alt="Client Logo" width={120} height={60} objectFit="contain" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Get Started Section */}
      <section className="relative w-full py-20 overflow-hidden bg-blue-900 text-white flex flex-col items-center justify-center" style={{ minHeight: '700px' }}>
        {/* Background Image */}
        <Image
          src="/images/get-startsec.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Started with Marketing<br />for your brand</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Transform your business with professional marketing ideated and implemented by experts with deep market experience.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition text-lg">GET STARTED</button>
        </div>

        {/* Person Image */}
        <div className="relative z-20 mt-12">
          <Image
            src="/images/image.png"
            alt="Person with laptop"
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
      </section>
    </div>
  );
}
