import React from 'react'

export default function ClinicalCases() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">

        {/* OD Section */}
        <h2 className="text-4xl font-bold text-center mb-6">牙體復型</h2>
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Direct Pulp Capping Case */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/Aunt_Jennie.jpg" 
                alt="直接覆髓案例"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Aunt_Jennie/002.png" 
                alt="追蹤"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left md:pl-4 md:flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2">#直接覆髓案例</h3>
              <p className="text-base md:text-xl font-normal">
                左上第二大臼齒有嚴重蛀牙，X光顯示接近牙髓<br />
                移除所有 infected dentin 後，已打開髓腔，但大小在1mm以內<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 牙髓開口以 2.5% NaOCl 清潔，蓋上直接覆髓材料 Sealapex (Kerr)<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以玻璃離子體 (Fuji II LC) 做基底，再用複合樹脂填補咬合面<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 3個月及6個月追蹤，病人無不適，牙髓活性仍存在<br />
              </p>
            </div>
          </div>
        </div>

        {/* Endo Section */}
        <h2 className="text-4xl font-bold text-center mb-6 mt-24">牙髓病症治療</h2>
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Difficult Root Canal Retreatment Case */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/Uncle_Brian.jpg" 
                alt="根管重新治療案例"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/001.jpg" 
                alt="根管治療前X光"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/002.jpg" 
                alt="牙髓底部破洞"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/003.jpg" 
                alt="IAF"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/004.jpg" 
                alt="MAF"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Uncle_Brian/005.jpg" 
                alt="治療完成"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left md:pl-4 md:flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2">#Uncle_Brian</h3>
              <p className="text-base md:text-xl font-normal">
                51歲男性患者自述右下第一大臼齒咬痛3週，於3年前曾經因深蛀牙牙痛做過根管治療<br />
                臨床垂直敲診有不適感，冷測試無反應，搖動度正常，頰側 furcation involvement Gr.II(Hamps et al.)<br />
                X光片顯示有三個根管未充填，牙根分岔處有骨缺損，近心牙根尖周圍有病灶，遠心窩洞邊緣接近齒槽骨<br />
                臨床診斷: tooth #46: previously initiated therapy, symptomatic apical periodontitis<br />
                建議患者重新進行根管治療並修補齒質穿通，患者同意<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Lidocaine HCL 2% with Epinephrine 1:100000, 1.7ml Cartridges一管做#46頰舌側浸潤式麻醉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 rubber dam 隔濕<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 移除填補物發現牙髓底部有三個齒質穿通孔洞<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 M3-Pro Gold系統，crown-down方式，清潔與修型根管至 #25/.05<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 5.25% NaOCl 溶液沖洗根管，17% EDTA 溶液去除鈣化成分<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Ca(OH)2 paste 做治療間根管內用藥，以 Caviton 做暫時填補<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 VERICOM Well-Root ST Bioceramic Sealer 搭配 #25/.05 GP，以 hydraulic technique 做根管封填<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 VERICOM Well-Root putty type Bioceramic Sealer 修補齒質穿通，以複合樹酯做冠部封閉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 兩星期追蹤，垂直敲診與咬合時不適感明顯減緩<br />
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
          </div>

          {/* Tommy Case */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Tommy/000.jpg" 
                alt="Tommy - 初診"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Tommy/001.jpg" 
                alt="Tommy - 治療過程1"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Tommy/002.jpg" 
                alt="Tommy - 治療過程2"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Tommy/003.jpg" 
                alt="Tommy - 治療完成"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left md:pl-4 md:flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2">#15YO_Tommy</h3>
              <p className="text-base md:text-xl font-normal">
                15歲男性患者轉診自兒童牙科醫師，左下第二大臼齒深蛀牙導致牙髓暴露，已 pulpotomy，目前無自發痛<br />
                臨床垂直敲診有微不適感，冷測試無反應，搖動度正常<br />
                X光片顯示有三個根管，遠心牙根尖周圍有些微放射透射病灶<br />
                臨床診斷: tooth #37: previously initiated therapy, symptomatic apical periodontitis<br />
                建議患者進行根管治療，患者同意<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Lidocaine HCL 2% with Epinephrine 1:100000, 1.7ml Cartridges一管做#37頰舌側浸潤式麻醉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 rubber dam 隔濕，以Komet Tungsten Carbide Bur(low speed, RAL, 0.8mm round)開闊峡部<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Protaper Ultimate系統，crown-down方式，清潔與修型根管至F2#25/.08<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 5.25% NaOCl 溶液沖洗根管，17% EDTA 溶液去除鈣化成分<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Ca(OH)2 paste 做治療間根管內用藥，以 Caviton 做暫時填補<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 VERICOM Well-Root ST Bioceramic Sealer 搭配 F2 GP，以 hydraulic technique 做根管封填<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以相同 sealer 搭配 accessory cone 以 lateral compaction technique 封填剩餘根管空間，以複合樹酯做冠部封閉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 兩星期追蹤，垂直敲診不適感減緩<br />
              </p>
            </div>
          </div>

          {/* Jason Case */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/000.webp" 
                alt="Jason - 初診"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/001.webp" 
                alt="Jason - 治療過程1"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/002.webp" 
                alt="Jason - 治療過程2"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/003.webp" 
                alt="Jason - 治療過程3"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/004.webp" 
                alt="Jason - 治療過程4"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/005.webp" 
                alt="Jason - 治療過程5"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/006.webp" 
                alt="Jason - 治療過程6"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ClinicalCase/Jason/007.webp" 
                alt="Jason - 治療完成"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left md:pl-4 md:flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">#Jason</h3>
              <p className="text-base md:text-xl font-normal">
                28歲男性患者在定期檢查時發現右側上顎側門牙根尖周圍有放射透射病灶，該牙齒2年前曾蛀牙填補，目前無不適<br />
                臨床敲診無不適感，冷測試與電髓測試無反應，搖動度正常，牙周探測深度正常<br />
                根尖片顯示牙根尖周圍有 J-shaped 放射透射病灶，大小約3*6mm；CBCT影像無發現牙根縱裂<br />
                臨床診斷: tooth #12: pulp necrosis, asymptomatic apical periodontitis<br />
                建議患者進行根管治療，患者同意<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Lidocaine HCL 2% with Epinephrine 1:100000, 1.7ml Cartridges一管做#12頰舌側浸潤式麻醉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 rubber dam 隔濕<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 K file 清潔與修型根管，WL=22.5mm，IAF=#20，MAF=#35，set back to #60<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 5.25% NaOCl 溶液沖洗根管，17% EDTA 溶液去除鈣化成分<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Ca(OH)2 paste 做治療間根管內用藥，以 Caviton 做暫時填補<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 Kerr Sealapex Root Canal Sealer 搭配 #35/.02 GP 以 lateral compaction technique 封填根管的緻密度不理想，因此調整作法:<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 VERICOM Well-Root ST Bioceramic Sealer 搭配 #35/.02 GP，以 hydraulic technique 做根管封填<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以複合樹酯做冠部封閉<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 七個月追蹤，該牙齒無不適，且根尖病灶已縮小至小於1*2mm<br />
              </p>
            </div>
          </div>

        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <a href="/JoeBingDDS/" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
            返回首頁
          </a>
        </div>

      </div>
    </div>
  )
} 