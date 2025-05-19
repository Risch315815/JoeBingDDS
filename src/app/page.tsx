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
            <div className="text-gray-800 text-lg mb-6">
              <p className="mb-1">台南一中</p>
              <p className="mb-1">高雄醫學大學牙醫系 畢業</p>
              <p className="mb-1">台中榮民總醫院 實習</p>
              <p className="mb-1">台北長庚紀念醫院 住院醫師</p>
            </div>
            <hr className="my-6" />
            <h2 className="text-2xl font-bold mb-4">治療項目</h2>
            <ul className="text-gray-700 text-lg space-y-1">
              <li>牙周深層清潔</li>
              <li>牙髓病症治療</li>
              <li>美學假牙贋復</li>
              <li>全口重建</li>
              <li>乳牙齲齒預防與修復</li>
              <li>一般阻生齒拔除</li>
              <li>植牙</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-gold-300 text-3xl font-bold text-center mb-12">專業認證</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gold-400 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img 
                src="/JoeBingDDS/images/TAID_implant_certificate.png" 
                alt="TAID_implant_certificate"
                className="w-auto h-auto" 
              />
            </div>
              <h3 className="text-xl font-semibold mb-2">台灣牙醫植體醫學會 會員</h3>
            </div>

            <div className="bg-gold-400 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img 
                src="/JoeBingDDS/images/IAOP2023_Presentation.png" 
                alt="IAOP2023_Presentation"
                className="w-auto h-auto" 
              />
            </div>
              <h3 className="text-xl font-normal mb-2">IAOP 2023:</h3>
              <h3 className="text-xl font-bold mb-2">21st International Congress of</h3>
              <h3 className="text-xl font-bold mb-2">Oral Pathology and Medicine</h3>
              <h3 className="text-xl font-normal mb-2">Poster Presentation</h3>
            </div>

            <div className="bg-gold-400 p-6 rounded-lg shadow-md">
              <div className="mb-4">
              <img 
                src="/JoeBingDDS/images/TADS_TMJ_Presentation.png" 
                alt="TADS_TMJ_Presentation"
                className="w-auto h-auto" 
              />
            </div>
              <h3 className="text-xl font-normal mb-2">2023年中華牙醫學年會：</h3>
              <h3 className="text-xl font-semibold mb-2">針灸減緩顳顎關節障礙症候群之疼痛</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Papers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">學術論文</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-800 mb-4">
                Hsu, C. C., Chiang, M. L., & Chen, J. K. (2025). Surgery of impacted maxillary second 
                premolar beneath first molar trifurcation via lateral window maxillary sinus 
                augmentation: A case report. <i>Journal of dental sciences, 20</i>(1), 704–706.
              </p>
              
              <p className="text-gray-800 mb-4">
                Hsu, C. C., Fang, H. M., Chiang, M. L., & Chen, J. K. (2025). Conservative management of 
                central odontogenic fibroma for tooth preservation and spontaneous eruption in a pre-
                teen. <i>Journal of dental sciences, 20</i>(1), 713–715.
              </p>
              
              <p className="text-gray-800 mb-4">
                Hsu, C. C., Chiang, M. L., & Chen, J. K. (2025). Successful treatment of mandibular central 
                dentinogenic ghost cell tumor with en bloc resection and dental rehabilitation: A case 
                report. <i>Journal of dental sciences, 20</i>(2), 1355-1357.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <img 
                src="/JoeBingDDS/images/Changeng_IRB_Certificate.png" 
                alt="Changeng IRB Certificate"
                className="w-64 h-auto object-contain" 
              />
              <div>
                <h3 className="text-xl font-semibold">長庚醫院 研究計畫主持人：</h3>
                <h3 className="text-xl font-normal">Diagnosis and treatment of dentinogenic ghost</h3>
                <h3 className="text-xl font-normal">cell tumor: a retrospective case study</h3>
              </div>
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