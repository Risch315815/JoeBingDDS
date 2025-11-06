import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img src="/JoeBingDDS/images/banner.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Language Navigation */}
        <div className="absolute top-4 right-4 z-30">
          <div className="flex space-x-4">
            <a href="https://risch315815.github.io/JoeBingDDS/" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              中文
            </a>
            <a href="https://risch315815.github.io/JoeBingDDS/en" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              English
            </a>
            <a href="https://risch315815.github.io/JoeBingDDS/jp" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              日本語
            </a>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center z-20">
          <div className="text-white max-w-2xl">
            <h4 className="text-5xl font-normal mb-4">
              實證醫學。<br className="sm:hidden" />微創治療
            </h4>
          </div>
        </div>
      </section>

      {/* Doctor Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/JoeBingDDS/images/徐振傑-牙醫師.png" className="object-cover max-w-full h-auto max-h-[500px]" alt="徐振傑醫師" />
          </div>
          <div>

            {/* Past Training */}
            <div className="text-gray-800 text-lg mb-6">
              <p className="mb-1">台北長庚紀念醫院 住院醫師</p>
              <p className="mb-1">台中榮民總醫院 實習</p>
              <p className="mb-1">高雄醫學大學牙醫系 畢業</p>
              <p className="mb-1">台南一中</p>
            </div>

            <hr className="my-6" />
            
            {/* Treatment */}
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

      {/* Certificate Section */}
      <section id="certificate" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-gold-300 text-3xl font-bold text-center mb-12">專業認證</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Implant Certificate */}
            <div className="bg-gold-200 p-6 shadow-md">
            <div className="mb-4">
              <img 
                src="/JoeBingDDS/images/KMU_Graduation.png" 
                alt="KMU_Graduation.png"
                className="w-auto h-auto" 
              />
            </div>
              <h3 className="text-xl font-semibold mb-2">高雄醫學大學牙醫系 畢業證書</h3>
            </div>

            {/* IAOP Presentation */}
            <div className="bg-gold-200 p-6 shadow-md">
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

            {/* Presentation of TMD Research */}
            <div className="bg-gold-200 p-6 shadow-md">
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
          
          {/* Sinus Augmentation Case */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-800 mb-4">
                <a href="https://doi.org/10.1016/j.jds.2024.09.020" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">
                  Hsu, C. C., Chiang, M. L., & Chen, J. K. (2025). Surgery of impacted maxillary second 
                  premolar beneath first molar trifurcation via lateral window maxillary sinus 
                  augmentation: A case report. <i>Journal of dental sciences, 20</i>(1), 704–706.
                </a>
              </p>
              
              {/* Adolescent Tumor Conservative Removal Case */}
              <p className="text-gray-800 mb-4">
                <a href="https://doi.org/10.1016/j.jds.2024.08.022" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">
                  Hsu, C. C., Fang, H. M., Chiang, M. L., & Chen, J. K. (2025). Conservative management of 
                  central odontogenic fibroma for tooth preservation and spontaneous eruption in a pre-
                  teen. <i>Journal of dental sciences, 20</i>(1), 713–715.
                </a>
              </p>

              <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />
              
              {/* Dentinogenic Ghost Cell Tumor Case */}
              <p className="text-gray-800 mb-4">
                <a href="https://doi.org/10.1016/j.jds.2024.12.012" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">
                  Hsu, C. C., Chiang, M. L., & Chen, J. K. (2025). Successful treatment of mandibular central 
                  dentinogenic ghost cell tumor with en bloc resection and dental rehabilitation: A case 
                  report. <i>Journal of dental sciences, 20</i>(2), 1355-1357.
                </a>
              </p>
            </div>
            
            {/* Changeng IRB Research Host */}
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <img 
                src="/JoeBingDDS/images/Changeng_IRB_Certificate.png" 
                alt="Changeng IRB Certificate"
                className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
              />
              <div className="flex flex-col justify-center text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-2">長庚醫院 研究計畫主持人：</h3>
                <p className="text-base md:text-xl font-normal">
                  Diagnosis and treatment of dentinogenic ghost <br className="hidden md:block" />
                  cell tumor: a retrospective case study
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Clinical Cases Section */}
      <section id="clinic-cases" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-bold text-center mb-12">臨床案例</h2>

          {/* Difficult Endo Retreatment Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/Uncle_Brian.jpg"
              alt="Uncle_Brian"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Uncle_Brian</h3>
              <p className="text-white text-base md:text-xl font-normal">
                特殊案例: 根管穿孔之治療<br />
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Extensive Caries Restoration Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/ClinicalCase/Aunt_Lily/Aunt_Lily.jpg" 
              alt="Aunt_Lily"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Aunt_Lily</h3>
              <p className="text-white text-base md:text-xl font-normal">
                嚴重缺損齒質重建<br />
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* 15YO Tommy Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/ClinicalCase/Tommy/Tommy.png" 
              alt="15YO_Tommy"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#15YO_Tommy</h3>
              <p className="text-white text-base md:text-xl font-normal">
                C型根管治療<br />
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Jason Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/ClinicalCase/Jason/Jason.png" 
              alt="Jason"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Jason</h3>
              <p className="text-white text-base md:text-xl font-normal">
                大型根尖周圍病灶治療<br />
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Direct Pulp Capping Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/ClinicalCase/Aunt_Jennie/Aunt_Jennie.jpg" 
              alt="Aunt_Jennie"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Aunt_Jennie</h3>
              <p className="text-white text-base md:text-xl font-normal">
                可逆性牙髓炎-直接牙髓覆蓋案例<br />
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href="/JoeBingDDS/clinical-cases" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
              看更多
            </a>
          </div>
          
        </div>
      </section>


      {/* Service Hours Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">看診時段</h2>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border border-gray-700">
                  <th className="p-3 text-center"></th>
                  <th className="p-3 text-center border border-gray-700">星期二</th>
                  <th className="p-3 text-center border border-gray-700">星期三</th>
                  <th className="p-3 text-center border border-gray-700">星期四</th>
                  <th className="p-3 text-center border border-gray-700"></th>
                  <th className="p-3 text-center border border-gray-700">星期五</th>
                  <th className="p-3 text-center border border-gray-700">星期六</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700"></td>
                  <td className="p-3 text-center border border-gray-700"></td>
                  <td className="p-3 text-center border border-gray-700"></td>
                  <td className="p-3 text-center border border-gray-700"></td>
                  <td className="p-3 text-center border border-gray-700">
                    09:00<br />|<br />12:00
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐樂牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    14:30<br />|<br />17:30
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700">
                    14:15<br />|<br />17:15
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐樂牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    18:30<br />|<br />21:00
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700">
                    18:00<br />|<br />21:00
                  </td>
                  <td className="p-3 text-center border border-gray-700"></td>
                  <td className="p-3 text-center border border-gray-700"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Clinic Information */}
          <div className="max-w-5xl mx-auto bg-gold-300 p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想牙醫診所" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">理想牙醫診所</h3>
                <p className="text-xl mb-2">高雄市楠梓區旗楠路 86 號</p>
                <p className="text-xl mb-2">(07)3553083</p>
                <p className="text-xl mb-2">
                  <a href="https://lin.ee/qrLZRzm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://lin.ee/qrLZRzm
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Ideal_Line.png" alt="理想牙醫診所LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* 楓鄰牙醫診所 */}
          <div className="max-w-5xl mx-auto bg-gold-200 p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰牙醫診所" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">楓鄰牙醫診所</h3>
                <p className="text-xl mb-2">臺南市永康區東橋一路416號</p>
                <p className="text-xl mb-2">(06) 3023485</p>
                <p className="text-xl mb-2">
                  <a href="https://line.me/R/ti/p/@970jqmky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://line.me/R/ti/p/@970jqmky
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/FL_line.jpg" alt="楓鄰牙醫診所LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* 沐樂牙醫診所 */}
          <div className="max-w-5xl mx-auto bg-gold-100 p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐樂牙醫診所" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">沐樂牙醫診所</h3>
                <p className="text-xl mb-2">台南市安南區安中路一段239號</p>
                <p className="text-xl mb-2">(06) 2551933</p>
                <p className="text-xl mb-2">
                  <a href="https://liff.line.me/2005566375-124Z8WKX?channel=2005564145&liffid=2005566375-124Z8WKX&c=3705370139&d=&p=iDjCnjFx&t=&escapeBind=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LINE 官方帳號
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Mula_Line.png" alt="沐樂牙醫診所LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 