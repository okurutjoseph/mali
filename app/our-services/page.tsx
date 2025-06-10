'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurServices() {
  const services = [
    {
      title: "Web Development",
      icon: "🌐",
      description: "Custom web applications and responsive websites built with modern technologies.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Store Optimization"
      ]
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable cloud infrastructure and migration services.",
      features: [
        "Cloud Migration",
        "Serverless Architecture",
        "DevOps Implementation",
        "Cloud Security"
      ]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "User-centered design solutions that enhance user experience.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing"
      ]
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      description: "Comprehensive digital marketing strategies to grow your business.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics & Reporting"
      ]
    },
    {
      title: "IT Consulting",
      icon: "💡",
      description: "Expert technology consulting to drive business growth.",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Strategy",
        "Process Optimization"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/images/services-hero.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help businesses grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and objectives"
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a detailed roadmap for success"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with precision"
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploying and supporting your project"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-600 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business grow and succeed.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </motion.div>
      </section>
    </main>
  );
} 