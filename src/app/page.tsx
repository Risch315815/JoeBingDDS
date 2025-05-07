import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to Dr. Joe Bing's Dental Practice</h1>
            <p className="text-xl mb-8">Providing exceptional dental care with a focus on your comfort and satisfaction.</p>
            <a href="/appointments" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Book an Appointment
            </a>
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