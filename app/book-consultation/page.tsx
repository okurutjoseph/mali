'use client';

import Breadcrumb from '@/components/Breadcrumb';

export default function BookConsultation() {
  return (
    <>
      <Breadcrumb 
        pageName="Book Consultation"
        bgImage="/images/breadcrumb/contact.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* We can help you section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[45px] font-bold text-[#2c2c52] mb-8">We can help you:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Grow awareness for your business</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Generate leads and guide them to become clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Increase the return on your marketing investment</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Utilise your website as a Sales tool</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Build a strategic marketing framework that will set your organisation up for long-term success</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Tailor your marketing efforts to resonate with your ideal audience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Attract more organic web traffic and drive conversions at every stage of Client acquisition program</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Nurture and engage prospects to move from visitors to clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff7a59] text-xl">►</span>
                  <p className="text-gray-700">Arm your team with the resources they need to win more deals and increase customer satisfaction</p>
                </div>
                <p className="text-[#2c2c52] mt-6 font-medium">If you are looking to achieve any of the objectives listed above, then book a free consultation and let's x-ray your business together.</p>
              </div>
        </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-r from-[#251146] to-[#aa2b4c] p-8 rounded-xl text-white">
              <h3 className="text-[35px] font-[800] mb-[15px] text-white leading-[40px] text-center">Book Consultation</h3>
              <form className="space-y-6 pb-4">
                <div className="space-y-2">
                  <label className="block text-sm text-white">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Last Name</label>
                <input
                  type="text"
                    className="w-full px-4 py-3 bg-white text-black"
                />
              </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Email Address</label>
                <input
                  type="email"
                    placeholder="e.g yo@company.com"
                    className="w-full px-4 py-3 bg-white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white text-black"
                />
              </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Phone Number</label>
                <input
                  type="tel"
                    className="w-full px-4 py-3 bg-white text-black"
                />
              </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Website URL</label>
                <input
                    type="url"
                    className="w-full px-4 py-3 bg-white text-black"
                />
              </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">What do you need help with?</label>
                <textarea
                  rows={4}
                    className="w-full px-4 py-3 bg-white text-black"
                  ></textarea>
              </div>
                <div>
                  <div className="g-recaptcha mb-4" data-sitekey="your_site_key"></div>
              <button
                type="submit"
                    className="bg-[#ff7a59] border border-[#ff7a59] text-white px-8 py-3 text-[12px] leading-[12px] hover:bg-opacity-90 transition-all duration-300 rounded-md"
              >
                    Book Consultation
              </button>
                </div>
            </form>
              </div>
            </div>
        </div>
      </section>
    </>
  );
} 