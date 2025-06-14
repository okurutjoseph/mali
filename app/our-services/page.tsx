'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function OurServices() {
  const services = [
    {
      title: "Content Creation",
      description: "The right content helps you connect with your target audience, build trust and drive conversions. We create content that resonates with your audience.",
      icon: "/images/services/content-creation.png"
    },
    {
      title: "Social Media Marketing",
      description: "If your customers and prospects are on Social media, your brand should be too. We help you build and maintain a strong social media presence.",
      icon: "/images/services/social-media.png"
    },
    {
      title: "Digital Marketing",
      description: "Transform your online presence with our comprehensive digital marketing solutions tailored to your business goals.",
      icon: "/images/services/digital-marketing.png"
    },
    {
      title: "Digital Sales",
      description: "Generate more leads and convert them into customers with our proven digital sales strategies and techniques.",
      icon: "/images/services/digital-sales.png"
    },
    {
      title: "Digital Marketing Training",
      description: "Learn the latest digital marketing skills and strategies from our expert trainers and take your business to the next level.",
      icon: "/images/services/digital-training.png"
    },
    {
      title: "Branding",
      description: "Build a strong and memorable brand identity that sets you apart from your competitors and resonates with your target audience.",
      icon: "/images/services/branding.png"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Breadcrumb 
        pageName="Our Services"
        bgImage="/images/breadcrumb/services-banner.jpg"
      />
      <div className="bg-white">
        <ServiceTemplate 
          title="Digital Marketing Services"
          description="We provide comprehensive digital marketing solutions to help businesses grow their online presence, engage with their target audience, and achieve their marketing goals."
          image="/images/service-1.png"
          buttonLink="/book-consultation"
        />

        {/* Services Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
              className="text-center mb-12"
        >
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions to help your business grow
          </p>
        </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
                  initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-[#2a1842] rounded-lg overflow-hidden text-white text-center group hover:bg-[#3a2357] transition-colors duration-300"
                >
                  <div className="p-8">
                    <div className="mb-6">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="mx-auto"
                      />
        </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <Link 
                      href={`/our-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block px-6 py-2 bg-white text-[#2a1842] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Need Help Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Need help with marketing but not sure where to start?</h2>
              <p className="text-gray-600 mb-8">
                Schedule a free consultation with our digital marketing experts to discuss your business goals and how we can help you achieve them.
              </p>
              <Link 
                href="/book-consultation"
                className="inline-block bg-[#2a1842] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#3a2357] transition-colors duration-300"
              >
                Book a Consultation
              </Link>
        </motion.div>
          </div>
      </section>
      </div>
    </main>
  );
} 