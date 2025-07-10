'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function AboutUsPage() {
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
    </>
  );
} 