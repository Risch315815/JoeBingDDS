import React from 'react'

export default function HomeJP() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img src="/JoeBingDDS/images/banner.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Language Navigation */}
        <div className="absolute top-4 right-4 z-30">
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              中文
            </a>
            <a href="/en" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              English
            </a>
            <a href="/jp" className="text-white hover:text-gold-300 font-semibold px-3 py-2 rounded-lg border border-white hover:border-gold-300 transition-colors">
              日本語
            </a>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center z-20">
          <div className="text-white max-w-2xl">
            <h4 className="text-4xl font-normal mb-4">
              エビデンスベース医療。<br className="sm:hidden" />低侵襲治療
            </h4>
          </div>
        </div>
      </section>

      {/* Doctor Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/JoeBingDDS/images/徐振傑-牙醫師.png" className="object-cover max-w-full h-auto max-h-[500px]" alt="徐振傑医師" />
          </div>
          <div>

            {/* Past Training */}
            <div className="text-gray-800 text-lg mb-6">
              <p className="mb-1">台北長庚記念病院 研修医</p>
              <p className="mb-1">台中栄民総病院 インターン</p>
              <p className="mb-1">高雄医学大学歯学部 卒業</p>
              <p className="mb-1">台南一中</p>
            </div>

            <hr className="my-6" />
            
            {/* Treatment */}
            <h2 className="text-2xl font-bold mb-4">治療項目</h2>
            <ul className="text-gray-700 text-lg space-y-1">
              <li>歯周病の深部清掃</li>
              <li>歯内療法</li>
              <li>審美補綴歯科</li>
              <li>全顎再建</li>
              <li>乳歯齲蝕の予防と修復</li>
              <li>一般的な埋伏歯抜歯</li>
              <li>インプラント</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-gold-300 text-3xl font-bold text-center mb-12">専門資格</h2>
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
              <h3 className="text-xl font-semibold mb-2">高雄医学大学歯学部 卒業証書</h3>
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
              <h3 className="text-xl font-normal mb-2">ポスター発表</h3>
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
              <h3 className="text-xl font-normal mb-2">2023年台湾歯科医学会年次大会：</h3>
              <h3 className="text-xl font-semibold mb-2">鍼灸による顎関節症候群の疼痛緩和</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Papers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">学術論文</h2>
          
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
                <h3 className="text-lg md:text-xl font-semibold mb-2">長庚病院 研究計画責任者：</h3>
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
          <h2 className="text-white text-3xl font-bold text-center mb-12">臨床症例</h2>

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
                右下第一大臼歯が咬合時に痛む<br />
                充填物を除去後、歯髄底部に3つの大きな穴を発見<br />
                <span className="text-white font-semibold mr-2">→</span> 全ての根管を特定し、バイオセラミックで大きな穴を修復<br />
                <span className="text-white font-semibold mr-2">→</span> 2週間後の経過観察で、正常に咬合可能
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
                左上第二小臼歯が食物を詰まりやすく、齲蝕痛がある<br />
                歯が歯肉下1-2mmまで重度に齲蝕し、歯髄が無活力<br />
                <span className="text-white font-semibold mr-2">→</span> 初診60分：遠心側歯肉を調整し、歯質を再構築して炎症性神経を除去<br />
                <span className="text-white font-semibold mr-2">→</span> 再診40分：根管治療を完了<br />
                <span className="text-white font-semibold mr-2">→</span> 1週間後の経過観察で、正常に咬合可能<br />
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
                左上側切歯の頬側歯肉の歯根部に膿瘍が半年間続き、異臭がある<br />
                根管充填が緻密でなく、根尖に明らかな炎症があり、歯冠頬側に穿孔<br />
                <span className="text-white font-semibold mr-2">→</span> 1診60分：まず頬側穿孔を修復し、古い根管充填物を除去；根管除菌後、バイオセラミックで緻密な封鎖を達成<br />
                <span className="text-white font-semibold mr-2">→</span> 2週間後の経過観察で、膿瘍が消退し、異臭なし
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
                上顎左右中切歯の間に逆生した過剰歯が挟まっており、後続の歯の配列不整を引き起こす可能性<br />
                <span className="text-white font-semibold mr-2">→</span> 最も低侵襲的な方法で上顎歯肉を開き、過剰歯を完全に摘出<br />
                <span className="text-white font-semibold mr-2">→</span> 歯肉を正確に元の位置に戻し、術後の傷口がほとんど見えない
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
                左上第二大臼歯が食物を詰まりやすいが、痛みはない<br />
                歯が歯肉下2mmまで重度に齲蝕し、歯髄が有活力<br />
                <span className="text-white font-semibold mr-2">→</span> 全ての齲蝕歯質を除去し、歯髄露出径を1mm以内に<br />
                <span className="text-white font-semibold mr-2">→</span> Sealapex (Kerr)で歯髄を保護し、Fuji II (GC)を基底材として、最上部にレジンで永久充填<br />
                <span className="text-white font-semibold mr-2">→</span> 3ヶ月後の経過観察で、歯髄が有活力で、不快感なし
              </p>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href="/clinical-cases" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
              もっと見る
            </a>
          </div>
          
        </div>
      </section>


      {/* Service Hours Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">診療時間</h2>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border border-gray-700">
                  <th className="p-3 text-center"></th>
                  <th className="p-3 text-center border border-gray-700">火曜日</th>
                  <th className="p-3 text-center border border-gray-700">水曜日</th>
                  <th className="p-3 text-center border border-gray-700">木曜日</th>
                  <th className="p-3 text-center border border-gray-700"></th>
                  <th className="p-3 text-center border border-gray-700">金曜日</th>
                  <th className="p-3 text-center border border-gray-700">土曜日</th>
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
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐楽歯科" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    14:30<br />|<br />17:30
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700">
                    14:15<br />|<br />17:15
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐楽歯科" className="w-16 h-16 mx-auto" />
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="p-3 text-center border border-gray-700">
                    18:30<br />|<br />21:00
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
                  </td>
                  <td className="p-3 text-center border border-gray-700 bg-gray-800">
                    <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科" className="w-16 h-16 mx-auto" />
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
                <img src="/JoeBingDDS/images/Ideal_logo.jpg" alt="理想歯科医院" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">理想歯科医院</h3>
                <p className="text-xl mb-2">高雄市楠梓区旗楠路86号</p>
                <p className="text-xl mb-2">(07)3553083</p>
                <p className="text-xl mb-2">
                  <a href="https://lin.ee/qrLZRzm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://lin.ee/qrLZRzm
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Ideal_Line.png" alt="理想歯科医院LINE QRコード" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* 楓鄰歯科医院 */}
          <div className="max-w-5xl mx-auto bg-gold-200 p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/FL_logo.png" alt="楓鄰歯科医院" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">楓鄰歯科医院</h3>
                <p className="text-xl mb-2">台南市永康区東橋一路416号</p>
                <p className="text-xl mb-2">(06) 3023485</p>
                <p className="text-xl mb-2">
                  <a href="https://line.me/R/ti/p/@970jqmky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://line.me/R/ti/p/@970jqmky
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/FL_line.jpg" alt="楓鄰歯科医院LINE QRコード" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>

          {/* 沐楽歯科医院 */}
          <div className="max-w-5xl mx-auto bg-gold-100 p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img src="/JoeBingDDS/images/Mula_logo.jpg" alt="沐楽歯科医院" className="w-48 h-48 mx-auto mb-4" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">沐楽歯科医院</h3>
                <p className="text-xl mb-2">台南市安南区安中路一段239号</p>
                <p className="text-xl mb-2">(06) 2551933</p>
                <p className="text-xl mb-2">
                  <a href="https://liff.line.me/2005566375-124Z8WKX?channel=2005564145&liffid=2005566375-124Z8WKX&c=3705370139&d=&p=iDjCnjFx&t=&escapeBind=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LINE公式アカウント
                  </a>
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <img src="/JoeBingDDS/images/Mula_Line.png" alt="沐楽歯科医院LINE QRコード" className="w-48 h-48 mx-auto md:ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
