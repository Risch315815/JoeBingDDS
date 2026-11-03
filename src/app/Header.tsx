'use client'

import { usePathname } from 'next/navigation'

const nav = {
  zh: {
    home: '首頁',
    certificates: '專業認證',
    schedule: '看診時段',
    education: '衛教專區',
    homeHref: '/JoeBingDDS/',
    certificatesHref: '/JoeBingDDS/#certificate',
    scheduleHref: '/JoeBingDDS/#schedule',
  },
  en: {
    home: 'Home',
    certificates: 'Certifications',
    schedule: 'Consultation Hours',
    education: 'Patient Education',
    homeHref: '/JoeBingDDS/en',
    certificatesHref: '/JoeBingDDS/en#certificate',
    scheduleHref: '/JoeBingDDS/en#schedule',
  },
  jp: {
    home: 'ホーム',
    certificates: '専門資格',
    schedule: '診療時間',
    education: '衛生教育',
    homeHref: '/JoeBingDDS/jp',
    certificatesHref: '/JoeBingDDS/jp#certificate',
    scheduleHref: '/JoeBingDDS/jp#schedule',
  },
}

export default function Header() {
  const pathname = usePathname() || '/'
  const lang = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/jp') ? 'jp' : 'zh'
  const t = nav[lang]

  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-2xl font-normal text-white text-center sm:text-left mb-4 sm:mb-0">
            徐振傑 牙醫師 <br className="sm:hidden" />
            <span className="hidden sm:inline">| </span>
            <span className="sm:hidden">Dr.</span>Chen-Chieh Hsu D.D.S.<br className="sm:hidden" />
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href={t.homeHref} className="text-gray-300 hover:text-gold-400">{t.home}<br className="sm:hidden" /></a>
            <a href={t.certificatesHref} className="text-gray-300 hover:text-gold-400">{t.certificates}<br className="sm:hidden" /></a>
            <a href={t.scheduleHref} className="text-gray-300 hover:text-gold-400">{t.schedule}<br className="sm:hidden" /></a>
            <a href="https://risch315815.github.io/Animal_Hospital_Dental_Department/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-400">{t.education}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
