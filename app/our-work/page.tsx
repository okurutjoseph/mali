'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurWork() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/images/project1.jpg",
      description: "A modern e-commerce platform with advanced features and seamless user experience."
    },
    {
      title: "Mobile App Development",
      category: "Mobile Development",
      image: "/images/project2.jpg",
      description: "Cross-platform mobile application with real-time features and offline capabilities."
    },
    {
      title: "AI-Powered Analytics",
      category: "Artificial Intelligence",
      image: "/images/project3.jpg",
      description: "Advanced analytics platform using machine learning for business intelligence."
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      image: "/images/project4.jpg",
      description: "Scalable cloud infrastructure design and implementation for enterprise clients."
    },
    {
      title: "UI/UX Redesign",
      category: "Design",
      image: "/images/project5.jpg",
      description: "Complete user interface and experience redesign for a leading tech company."
    },
    {
      title: "Security System",
      category: "Cybersecurity",
      image: "/images/project6.jpg",
      description: "Enterprise-grade security system with advanced threat detection capabilities."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/images/work-hero.jpg"
          alt="Our Work"
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
            Our Work
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions that have helped businesses achieve their goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-[250px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to discuss your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </main>
  );
} 