import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '徐振傑 牙醫師 | Dr.Chen-Chieh Hsu D.D.S.',
  description: '徐振傑,牙醫師,牙醫,高雄,台南,一般牙科,家庭牙醫,牙周治療,根管治療,假牙,全口重建,全瓷牙冠,蛀牙,兒童牙科,乳牙拔牙,拔智齒,美白,貼片,3D齒雕,植牙',
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
        <header className="bg-black shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-2xl font-normal text-white text-center sm:text-left mb-4 sm:mb-0">
                徐振傑 牙醫師 <br className="sm:hidden" /> 
                <span className="hidden sm:inline">| </span> 
                <span className="sm:hidden">Dr.</span>Chen-Chieh Hsu D.D.S.<br className="sm:hidden" />
              </div>
              <div className="flex flex-wrap justify-center space-x-6">
                <a href="/" className="text-gray-300 hover:text-gold-400">首頁<br className="sm:hidden" /></a>
                <a href="/#certificate" className="text-gray-300 hover:text-gold-400">專業認證<br className="sm:hidden" /></a>
                <a href="/#schedule" className="text-gray-300 hover:text-gold-400">看診時段</a>
              </div>
            </div>
          </nav>
        </header>


        <main className="min-h-screen">
          {children}
        </main>

        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="mt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Dr. Chen-Chieh Hsu D.D.S. Have a nice day.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 