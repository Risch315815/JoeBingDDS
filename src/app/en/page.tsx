import React from 'react'

export default function HomeEN() {
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
              Evidence-Based Medicine.<br className="sm:hidden" />Minimally Invasive Treatment
            </h4>
          </div>
        </div>
      </section>

      {/* Doctor Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/JoeBingDDS/images/徐振傑-牙醫師.png" className="object-cover max-w-full h-auto max-h-[500px]" alt="Dr. Hsu Chen-Chieh" />
          </div>
          <div>

            {/* Past Training */}
            <div className="text-gray-800 text-lg mb-6">
              <p className="mb-1">Resident, Taipei Chang Gung Memorial Hospital</p>
              <p className="mb-1">Intern, Taichung Veterans General Hospital</p>
              <p className="mb-1">D.D.S., School of Dentistry, Kaohsiung Medical University</p>
              <p className="mb-1">Tainan First Senior High School</p>
            </div>

            <hr className="my-6" />
            
            {/* Treatment */}
            <h2 className="text-2xl font-bold mb-4">Treatment Services</h2>
            <ul className="text-gray-700 text-lg space-y-1">
              <li>Comprehensive Periodontal Treatment</li>
              <li>Endodontic Treatment</li>
              <li>Aesthetic Prosthetic Dentistry</li>
              <li>Full Mouth Reconstruction</li>
              <li>Primary Tooth Treatment</li>
              <li>General Impacted Tooth Extraction</li>
              <li>Dental Implants</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-gold-300 text-3xl font-bold text-center mb-12">Professional Certifications</h2>
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
              <h3 className="text-xl font-semibold mb-2">Graduation Certificate, <br />School of Dentistry, <br />Kaohsiung Medical University</h3>
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
              <h3 className="text-xl font-normal mb-2">2023 Taiwan Dental Association Annual Meeting:</h3>
              <h3 className="text-xl font-semibold mb-2">Acupuncture for Pain Relief in Temporomandibular Joint Disorder Syndrome</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Papers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Academic Publications</h2>
          
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
                  central odontogenic fibroma for tooth preservation and spontaneous eruption in a pre-teen. <i>Journal of dental sciences, 20</i>(1), 713–715.
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
                <h3 className="text-lg md:text-xl font-semibold mb-2">Principal Investigator, Chang Gung Hospital Research Project:</h3>
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
          <h2 className="text-white text-3xl font-bold text-center mb-12">Clinical Cases</h2>

          {/* Difficult Endo Retreatment Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/Uncle_Brian.jpg" 
              alt="Uncle_Brian"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Uncle_Brian</h3>
              <p className="text-white text-base md:text-xl font-normal">
                Right lower first molar hurts when biting<br />
                After removing the filling, found three large holes at the pulp floor<br />
                <span className="text-white font-semibold mr-2">→</span> Located all root canals and used bioceramic to repair the large holes<br />
                <span className="text-white font-semibold mr-2">→</span> Two-week follow-up, no discomfort while biting
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Extensive Caries Restoration Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/Aunt_Lily.jpg" 
              alt="Aunt_Lily"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Aunt_Lily</h3>
              <p className="text-white text-base md:text-xl font-normal">
                Left upper second premolar easily traps food and has caries pain<br />
                Tooth severely decayed 1-2mm below the gum line, pulp non-vital<br />
                <span className="text-white font-semibold mr-2">→</span> First visit: 60 minutes to adjust distal gingiva, rebuild tooth structure and remove inflamed nerve<br />
                <span className="text-white font-semibold mr-2">→</span> Second visit: 40 minutes to complete root canal treatment<br />
                <span className="text-white font-semibold mr-2">→</span> One-week follow-up, no discomfort while biting<br />
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Casual Endo Retreatment Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/Aunt_Hollie.jpg" 
              alt="Aunt_Hollie"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Aunt_Hollie</h3>
              <p className="text-white text-base md:text-xl font-normal">
                Left upper lateral incisor buccal gingiva at root has abscess for half a year with odor<br />
                Root canal filling not dense, obvious inflammation at apex, and buccal crown perforation<br />
                <span className="text-white font-semibold mr-2">→</span> One visit 60 minutes: First repair buccal perforation, then remove old root canal filling; after root canal disinfection, achieve dense sealing with bioceramic<br />
                <span className="text-white font-semibold mr-2">→</span> Two-week follow-up, abscess subsided, no odor
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Deep Supernumerary Tooth Extraction Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/8-year-old_Abby.jpg" 
              alt="8-year-old_Abby"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#8-year-old_Abby</h3>
              <p className="text-white text-base md:text-xl font-normal">
                Inverted supernumerary tooth stuck between upper left and right central incisors, may cause subsequent tooth misalignment<br />
                <span className="text-white font-semibold mr-2">→</span> Used minimally invasive method to open upper jaw gingiva and extract the entire supernumerary tooth<br />
                <span className="text-white font-semibold mr-2">→</span> Precisely repositioned gingiva, post-operative wound almost invisible
              </p>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-300 w-full max-w-lg mx-auto" />

          {/* Direct Pulp Capping Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <img 
              src="/JoeBingDDS/images/Aunt_Jennie.jpg" 
              alt="Aunt_Jennie"
              className="w-full max-w-[250px] md:w-64 h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">#Aunt_Jennie</h3>
              <p className="text-white text-base md:text-xl font-normal">
                Left upper second molar easily traps food but no pain<br />
                Tooth severely decayed 2mm below gum line, pulp vital<br />
                <span className="text-white font-semibold mr-2">→</span> Removed all decayed tooth structure, pulp exposure diameter within 1mm<br />
                <span className="text-white font-semibold mr-2">→</span> Used Sealapex (Kerr) to protect pulp, Fuji II (GC) as base material, resin as permanent filling on top<br />
                <span className="text-white font-semibold mr-2">→</span> Three-month follow-up, pulp vital, no discomfort
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href="/clinical-cases" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
              View More
            </a>
          </div>
          
        </div>
      </section>


      {/* Service Hours Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Consultation Hours</h2>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border border-gray-700">
                  <th className="p-3 text-center"></th>
                  <th className="p-3 text-center border border-gray-700">Tuesday</th>
                  <th className="p-3 text-center border border-gray-700">Wednesday</th>
                  <th className="p-3 text-center border border-gray-700">Thursday</th>
                  <th className="p-3 text-center border border-gray-700"></th>
                  <th className="p-3 text-center border border-gray-700">Friday</th>
                  <th className="p-3 text-center border border-gray-700">Saturday</th>
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
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="Feng Lin Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="Mu Le Dental" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    14:30<br />|<br />17:30
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700">
                    14:15<br />|<br />17:15
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="Feng Lin Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="Mu Le Dental" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    18:30<br />|<br />21:00
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental" className="w-16 h-16 mx-auto" />
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
                <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="Ideal Dental Clinic" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ideal Dental Clinic</h3>
                <p className="text-xl mb-2">86 Chi Nan Road, Nanzih District, Kaohsiung City</p>
                <p className="text-xl mb-2">(07)3553083</p>
                <p className="text-xl mb-2">
                  <a href="https://lin.ee/qrLZRzm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://lin.ee/qrLZRzm
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Ideal_Line.png" alt="Ideal Dental Clinic LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* Feng Lin Dental Clinic */}
          <div className="max-w-5xl mx-auto bg-gold-200 p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/FL_logo.png" alt="Feng Lin Dental Clinic" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Feng Lin Dental Clinic</h3>
                <p className="text-xl mb-2">416 Dong Qiao Yi Road, Yongkang District, Tainan City</p>
                <p className="text-xl mb-2">(06) 3023485</p>
                <p className="text-xl mb-2">
                  <a href="https://line.me/R/ti/p/@970jqmky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://line.me/R/ti/p/@970jqmky
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/FL_line.jpg" alt="Feng Lin Dental Clinic LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* Mu Le Dental Clinic */}
          <div className="max-w-5xl mx-auto bg-gold-100 p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="Mu Le Dental Clinic" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Mu Le Dental Clinic</h3>
                <p className="text-xl mb-2">239 An Zhong Road Section 1, Annan District, Tainan City</p>
                <p className="text-xl mb-2">(06) 2551933</p>
                <p className="text-xl mb-2">
                  <a href="https://liff.line.me/2005566375-124Z8WKX?channel=2005564145&liffid=2005566375-124Z8WKX&c=3705370139&d=&p=iDjCnjFx&t=&escapeBind=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LINE Official Account
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Mula_Line.png" alt="Mu Le Dental Clinic LINE QR Code" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
