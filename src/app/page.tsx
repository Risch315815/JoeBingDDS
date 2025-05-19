import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img src="/JoeBingDDS/images/banner.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center z-20">
          <div className="text-white max-w-2xl">
            <h4 className="text-5xl font-normal mb-4">實證醫學。微創治療</h4>
          </div>
        </div>
      </section>

      {/* Doctor Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/JoeBingDDS/images/doctor.png" className="rounded-lg object-cover max-w-full h-auto max-h-[500px]" alt="徐振傑醫師" />
          </div>
          <div>
            <div className="text-gray-800 text-lg mb-6 whitespace-pre-line">
              <li>台南一中</li>
              <li>高雄醫學大學牙醫系2022年畢業</li>
              <li>台中榮民總醫院實習</li>
              <li>台北長庚紀念醫院住院醫師</li>
            </div>
            <hr className="my-6" />
            <h2 className="text-2xl font-bold mb-4">治療項目</h2>
            <ul className="text-gray-700 text-lg space-y-1">
              <li>牙周治療</li>
              <li>根管治療</li>
              <li>美學假牙贋復</li>
              <li>全口重建</li>
              <li>兒童牙科</li>
              <li>阻生齒拔除</li>
              <li>人工植牙</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-2">General Dentistry</h3>
              <p className="text-gray-600">Comprehensive dental care including cleanings, fillings, and preventive treatments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">😁</div>
              <h3 className="text-xl font-semibold mb-2">Cosmetic Dentistry</h3>
              <p className="text-gray-600">Transform your smile with our cosmetic procedures including whitening and veneers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-2">Restorative Care</h3>
              <p className="text-gray-600">Advanced solutions for damaged or missing teeth, including crowns and implants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Our team of dental professionals brings years of experience and expertise to every procedure.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                <p className="text-gray-600">We utilize the latest dental technology to ensure the best possible care for our patients.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comfortable Environment</h3>
                <p className="text-gray-600">We prioritize your comfort with a welcoming atmosphere and gentle care approach.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Convenient Location</h3>
                <p className="text-gray-600">Easy to find and accessible with ample parking for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8">Schedule your appointment today and take the first step towards a healthier, more beautiful smile.</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
} 