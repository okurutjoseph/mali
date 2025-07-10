'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import PrimaryButton from '@/components/PrimaryButton';
import BlogSection from '../components/BlogSection';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const testimonials = useQuery(api.testimonials.list)?.filter(t => t.isActive) || [];
  const testimonialSliderRef = useRef<Slider>(null);

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    ],
    className: "py-8"
  };

  const handlePrevTestimonial = () => {
    testimonialSliderRef.current?.slickPrev();
  };

  const handleNextTestimonial = () => {
    testimonialSliderRef.current?.slickNext();
  };

  return (
    <div className="relative overflow-x-hidden" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-start justify-center" style={{ minHeight: '500px' }}>
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
        <div className="relative z-20 flex flex-col items-start w-full max-w-6xl px-4 py-16 mx-auto">
          <div className="w-full max-w-xl">
            <Image 
              src="/images/hero.png" 
              alt="Mali Digital Agency" 
              width={600} 
              height={200} 
              className="mb-8"
              priority
            />
            <motion.button 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 150,
                damping: 15,
                duration: 0.4
              }}
              className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-full transition text-lg"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-16 pb-0 relative">
        <div className="absolute inset-0 bg-[#0e155b]"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[url('/images/clients.png')] bg-no-repeat bg-left bg-contain opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-full hidden sm:block">
              <Image
                src="/images/imgs-55.png"
                alt="About Mali Digital"
                width={768}
                height={512}
                className="shadow-md h-full object-contain"
              />
            </div>
            <div className="text-left text-white">
              <h3 className="text-[60px] font-[400] mb-6 leading-[1]">
                About<br />
                Mali Digital Agency
              </h3>
              <p className="mb-4">We are a full-service digital marketing agency focused on helping businesses grow. We work with specialized product brands and professional services firms that need to attract new prospects, engage with customers, and generate leads.</p>
              <p className="mb-4">With offices in Uganda, Mali Digital Agency leverages its multidisciplinary team's unique skill sets and broad experience across industries to help clients across the world.</p>
              <p className="mb-4">Need help with creating awareness for your brand, connecting with your target audience, or generating leads?</p>
              <PrimaryButton>Book a Consultation</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '437.5px', height: '125px', width: '1px', background: '#fff' }}></div>

      {/* Our Services Section */}
      <section className="py-16 pb-32 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 flex flex-col items-center">
            <span className="text-orange-500 text-6xl font-bold">Our</span>
            <span className="text-[#2c2c52] text-6xl -mt-2">Services</span>
          </h2>
          <Slider {...settings}>
            {/* Service Card 1: Digital Marketing */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/digital-marketing.png" alt="Digital Marketing Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Digital Marketing</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Your customers and prospects are on Social media. Your brand should be too.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 2: Digital Sales & Leads */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/digital-sales-&-leads.png" alt="Digital Marketing Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Digital Sales & Leads</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Your customers and prospects are on Social media. Your brand should be too.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 3: Social Media Management */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/social-media-management.png" alt="Social Media Management Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Social Media Management</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Your website is your online office address and your 24-hour sales tool.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 4: Content Production */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/content-production.png" alt="Content Production Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Content Production</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">There are 3.5 billion searches on Google daily. Clearly, consumers are turning more to search engines help them take buying decisions.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 5 Media Buying */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/media-buying.png" alt="Media Buying Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Media Buying</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Reach your customers on the go with a custom mobile application.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 6 Website Design */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/website-design.png" alt="Website Design Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Website Design</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Make informed decisions with powerful data insights.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>

            {/* Service Card 7 Digital Skills Training */}
            <div className="px-2 mb-8">
              <div className="bg-[#e9eaf0] rounded-[25px] px-[15px] py-[35px] pb-[45px] mx-3 mb-10 min-h-[380px] block text-center relative">
                <div className="flex items-center justify-center mb-6">
                  <Image src="/images/services/digital-skills-training.png" alt="Digital Skills Training Icon" width={64} height={64} /> 
                </div>
                <h4 className="mb-4">Digital Skills Training</h4>
                <p className="text-gray-600 mb-6 min-h-[70px]">Engage your audience with compelling and SEO-friendly content.</p>
                <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                  <PrimaryButton>READ MORE</PrimaryButton>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Some of Our Clients Section Wrapper */}
      <div className="relative z-10 rounded-lg shadow-xl mx-auto w-[95%] max-w-[1400px] -mt-16" style={{ background: '#ff6900' }}>
        <section className="py-10 text-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h3 className="!text-white mb-12 text-[60px] font-[400] leading-[62px] font-lato">
              <strong>Some</strong> of Our Clients
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-center mx-auto max-w-[1200px]">
              {/* Client Logo 1 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/macho.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 2 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/nishati.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 3 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/level0.png" 
                  alt="Client Logo" 
                  width={80} 
                  height={40} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 4 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/easy-housing.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 5 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/true-african.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 6 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/precision-hr.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 7 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/trenic-properties.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 8 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/mint-africa.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 9 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/nishati-business.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Client Logo 10 */}
              <div className="bg-white p-4 flex items-center justify-center h-24 w-full">
                <Image 
                  src="/images/clients/logo10.png" 
                  alt="Client Logo" 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Get Started Section */}
      <section className="relative w-full pt-95 pb-96 overflow-visible bg-blue-900 -mt-64" style={{ minHeight: '700px', zIndex: 2 }}>
        {/* Background Image */}
        <Image
          src="/images/get-started.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 mb-12 -mt-20">
          {/* Vertical Line */}
          <div className="w-[1px] h-[40px] bg-[#ffffff] mb-6"></div>
          
          <h2 className="!text-white mb-4">Get Started with Marketing<br />for your brand</h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">Transform your business with professional marketing ideated and implemented by experts with deep market experience.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition text-lg">GET STARTED</button>
        </div>

        {/* Person Image */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2" style={{ zIndex: 9999 }}>
          <div className="relative">
            <Image
              src="/images/image.png"
              alt="Person with laptop"
              width={600}
              height={600}
              className="drop-shadow-2xl"
              priority
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* Marketing Insights Blog Section */}
      <section className="relative pt-56 pb-20 bg-gray-50" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl mb-4 flex flex-col items-center">
              <span className="text-orange-500 font-bold">Marketing</span>
              <span className="text-[#2c2c52] -mt-2">Insights</span>
            </h2>
          </div>

          <BlogSection />
        </div>
      </section>

      {/* Our Happy Clients Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0e155b]"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[url('/images/clients.png')] bg-no-repeat bg-left-bottom bg-contain opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center mb-16">
            <span className="text-[#ff6900] text-6xl font-bold">Our Happy</span>
            <span className="text-white text-6xl font-bold ml-4">Clients</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <Slider ref={testimonialSliderRef} {...testimonialSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="px-4">
                  <div className="bg-[#272d6c] rounded-xl border border-[#8c4661] p-10 h-full backdrop-blur">
                    <div className="mb-4">
                      <h3 className="text-white text-2xl font-semibold">{testimonial.clientName}</h3>
                      <p className="text-gray-400">{testimonial.company}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, star) => (
                          <svg key={star} className="w-5 h-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-white italic">{testimonial.testimonial}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-12 gap-4">
            <button 
              onClick={handlePrevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group hover:border-white/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/30 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group hover:border-white/50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/30 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
