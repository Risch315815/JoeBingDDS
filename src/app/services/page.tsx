import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* General Dentistry */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">General Dentistry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Comprehensive Exams</h3>
              <p className="text-gray-600 mb-4">
                Regular dental check-ups including oral cancer screening, gum disease evaluation, and cavity detection.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Digital X-rays</li>
                <li>Oral cancer screening</li>
                <li>Gum disease evaluation</li>
                <li>Cavity detection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Professional Cleanings</h3>
              <p className="text-gray-600 mb-4">
                Thorough cleaning and polishing to remove plaque and tartar buildup.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Plaque removal</li>
                <li>Tartar removal</li>
                <li>Teeth polishing</li>
                <li>Fluoride treatment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cosmetic Dentistry */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Cosmetic Dentistry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Teeth Whitening</h3>
              <p className="text-gray-600 mb-4">
                Professional teeth whitening treatments to brighten your smile.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>In-office whitening</li>
                <li>Take-home whitening kits</li>
                <li>Custom trays</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Veneers</h3>
              <p className="text-gray-600 mb-4">
                Custom-made porcelain veneers to transform your smile.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Porcelain veneers</li>
                <li>Composite veneers</li>
                <li>Smile makeovers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Restorative Dentistry */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Restorative Dentistry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Dental Crowns</h3>
              <p className="text-gray-600 mb-4">
                Custom-made crowns to restore damaged or decayed teeth.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Porcelain crowns</li>
                <li>Ceramic crowns</li>
                <li>Same-day crowns</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Dental Implants</h3>
              <p className="text-gray-600 mb-4">
                Permanent solution for missing teeth with dental implants.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Single tooth implants</li>
                <li>Full arch restoration</li>
                <li>Implant-supported dentures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation to discuss your dental needs and create a personalized treatment plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  )
} 