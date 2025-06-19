'use client';

import Breadcrumb from '@/components/Breadcrumb';

export default function ContactUs() {
  return (
    <>
      <Breadcrumb 
        pageName="Contact Us"
        bgImage="/images/breadcrumb/contact.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[40px] font-bold text-[#2c2c52] mb-8 text-center">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>+256 772 515 972, +256 702 384 328</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email address</h3>
                    <p>info@malidigitalagency.com</p>
                  </div>
        </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p>Plot 66, Luthuli Avenue - Buglolobi, Kampala.</p>
                  </div>
                </div>
              </div>
        </div>

          {/* Contact Form */}
            <div className="bg-gradient-to-r from-[#251146] to-[#aa2b4c] p-8 rounded-xl text-white">
                             <h3 className="text-[35px] font-[800] mb-[15px] text-white leading-[40px] text-center">Contact Us</h3>
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
                  <label className="block text-sm text-white">Message</label>
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
                    Contact Us
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