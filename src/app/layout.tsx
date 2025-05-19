import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Joe Bing Dental Practice',
  description: 'Professional dental care services by Dr. Joe Bing',
  icons: {
    icon: '/icons/logo-徐振傑-牙醫.png',
    apple: '/icons/logo-徐振傑-牙醫.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">徐振傑 牙醫師 | Chen-Chieh Hsu D.D.S.</div>
              <div className="space-x-6">
                <a href="/" className="text-gray-600 hover:text-blue-600">首頁</a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">認證</a>
                <a href="/services" className="text-gray-600 hover:text-blue-600">看診時段</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>123 Dental Street</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@joebingdds.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/appointments" className="hover:text-blue-400">Book Appointment</a></li>
                  <li><a href="/insurance" className="hover:text-blue-400">Insurance Information</a></li>
                  <li><a href="/patient-forms" className="hover:text-blue-400">Patient Forms</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Dr. Joe Bing DDS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 