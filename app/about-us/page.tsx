'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "ADRONS IPENYE",
      role: "Digital Marketing Specialist",
      image: "/images/team/team1.jpg"
    },
    {
      name: "DONNA D'AMICO",
      role: "Content Strategist",
      image: "/images/team/team2.jpg"
    },
    {
      name: "UJUNWA ONUSOGU",
      role: "Social Media Manager",
      image: "/images/team/team3.jpg"
    },
    {
      name: "SAYO ALONGE",
      role: "Web Developer",
      image: "/images/team/team4.jpg"
    },
    {
      name: "ADEDOYIN ADEFISAN",
      role: "SEO Specialist",
      image: "/images/team/team5.jpg"
    },
    {
      name: "KEHINDE AKINOLA",
      role: "Project Manager",
      image: "/images/team/team6.jpg"
    }
  ];

  return (
    <>
      <Breadcrumb 
        pageName="About Us"
        bgImage="/images/breadcrumb/about-banner.jpg"
      />
      <ServiceTemplate 
        title="About Mali Digital Agency"
        description="Mali Digital Agency is a full-service digital marketing agency focused on helping businesses grow. We work with specialized product brands and professional services firms that need to attract new prospects, engage with customers, and generate leads."
        image="/images/about-left-img.png"
        buttonLink="/book-consultation"
      />

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Work With Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-r from-[#251146] to-[#aa2b4c] p-[40px_47px_34px] min-h-[400px] my-[15px] shadow-lg text-center text-white"
            >
              <Image
                src="/images/experience.png"
                alt="Our Experience"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">OUR EXPERIENCE</h3>
              <p className="text-white">Some of our team members have been in the marketing and technology industry for at least 10 years. This blend of traditional marketing experience ensures that Ziza Digital understands the language of the past, yet fluent in the lingo of the future</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-[#251146] to-[#aa2b4c] p-[40px_47px_34px] min-h-[400px] mt-[58px] ml-[1%] shadow-lg text-center text-white"
            >
              <Image
                src="/images/expertise.png"
                alt="Our Expertise"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">OUR EXPERTISE</h3>
              <p className="text-white">We are powered by a multidisciplinary team of expert marketers, Content Writers, Social Media Managers, Art Directors, Web Developers, Strategists etc. We leverage on their unique skill sets to develop communications that meet the need of discerning clients.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-[#251146] to-[#aa2b4c] p-[40px_47px_34px] min-h-[400px] my-[15px] ml-[1%] shadow-lg text-center text-white"
            >
                <Image
                src="/images/work-model.png"
                alt="Our Work Model"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">OUR WORK MODEL</h3>
              <p className="text-white">We learn about your business from you, we learn about your prospects from research and we learn about your competitors from experience. We combine these insights to create unique marketing experiences for your prospects and clients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet our talented team of professionals who are dedicated to delivering exceptional results for our clients.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 