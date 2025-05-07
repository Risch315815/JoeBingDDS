import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Dr. Joe Bing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Meet Dr. Joe Bing</h2>
            <p className="text-gray-600 mb-4">
              Dr. Joe Bing is a highly skilled and compassionate dentist with over 15 years of experience in providing exceptional dental care. After graduating from [Dental School] with honors, Dr. Bing completed advanced training in cosmetic and restorative dentistry.
            </p>
            <p className="text-gray-600 mb-4">
              His commitment to continuing education ensures that he stays at the forefront of dental technology and techniques, providing his patients with the most advanced and effective treatments available.
            </p>
            <p className="text-gray-600">
              Dr. Bing's philosophy centers around creating a comfortable, stress-free environment while delivering personalized care that meets each patient's unique needs.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Education & Credentials</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Doctor of Dental Surgery (DDS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Advanced Training in Cosmetic Dentistry</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Member of American Dental Association</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Certified in Advanced Life Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Practice Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We believe in treating each patient as an individual, taking the time to understand their unique needs and concerns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Preventive Focus</h3>
              <p className="text-gray-600">
                Our approach emphasizes preventive care and education to help patients maintain optimal oral health.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Comfort & Safety</h3>
              <p className="text-gray-600">
                We prioritize patient comfort and safety, using the latest technology and techniques to ensure the best possible experience.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Experience Exceptional Dental Care?</h2>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Visit
          </a>
        </div>
      </div>
    </div>
  )
} 