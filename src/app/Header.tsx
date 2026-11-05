'use client'

import { usePathname } from 'next/navigation'

const nav = {
  zh: {
    title: '徐振傑 牙醫師',
    home: '首頁',
    certificates: '專業認證',
    schedule: '看診時段',
    education: '作品集',
    homeHref: '/JoeBingDDS/',
    certificatesHref: '/JoeBingDDS/#certificate',
    scheduleHref: '/JoeBingDDS/#schedule',
    educationHref: 'https://risch315815.github.io/Animal_Hospital_Dental_Department/en',
  },
  en: {
    title: 'JoeBing D.D.S.',
    home: 'Home',
    certificates: 'Certifications',
    schedule: 'Consultation Hours',
    education: 'Portfolio',
    homeHref: '/JoeBingDDS/en',
    certificatesHref: '/JoeBingDDS/en#certificate',
    scheduleHref: '/JoeBingDDS/en#schedule',
    educationHref: 'https://risch315815.github.io/Animal_Hospital_Dental_Department/en',
  },
  jp: {
    title: '徐振傑 牙醫師',
    home: 'ホーム',
    certificates: '専門資格',
    schedule: '診療時間',
    education: '衛生教育',
    homeHref: '/JoeBingDDS/jp',
    certificatesHref: '/JoeBingDDS/jp#certificate',
    scheduleHref: '/JoeBingDDS/jp#schedule',
    educationHref: 'https://risch315815.github.io/Animal_Hospital_Dental_Department/',
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
            {t.title}
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-6">
            <a href={t.homeHref} className="text-gray-300 hover:text-gold-400 inline-flex items-center">{t.home}</a>
            <a href={t.certificatesHref} className="text-gray-300 hover:text-gold-400 inline-flex items-center">{t.certificates}</a>
            {lang === 'jp' && (
              <a href={t.scheduleHref} className="text-gray-300 hover:text-gold-400 inline-flex items-center">{t.schedule}</a>
            )}
            <a
              href={t.educationHref}
              target="_blank"
              rel="noopener noreferrer"
              className={lang === 'jp'
                ? 'text-gray-300 hover:text-gold-400 inline-flex items-center'
                : 'inline-flex items-center justify-center bg-white text-black px-3 py-2 min-w-[4.5rem] font-semibold'}
            >
              {t.education}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
