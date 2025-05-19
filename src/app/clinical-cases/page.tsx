import React from 'react'

export default function ClinicalCases() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">更多臨床案例</h1>

        <div className="max-w-5xl mx-auto space-y-16">

          {/* Direct Pulp Capping Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/Aunt_Jennie.png" 
                alt="直接覆髓案例"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/clinical-cases/Aunt_Jennie/002.png" 
                alt="追蹤"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
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

          {/* Root Canal Retreatment - Uncle Brian Case */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-black text-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px]">
              <img 
                src="/JoeBingDDS/images/Uncle_Brian.png" 
                alt="根管重新治療案例"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ima-13.jpg" 
                alt="根管治療前X光"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ima-3.jpg" 
                alt="根管治療過程"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
              <img 
                src="/JoeBingDDS/images/ima-0-2.jpg" 
                alt="根管治療完成"
                className="w-full h-auto object-contain shadow-md bg-white p-1 border border-gray-200" 
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2">#Uncle_Brian</h3>
              <p className="text-base md:text-xl font-normal">
                右下第一大臼齒咬到就會痛<br />
                移除填補物發現牙髓底部有三個大洞<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 找到所有根管並用生物陶瓷修補大洞<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 M3-Pro Gold系統 清潔根管至 #25/.06<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 以 VERICOM Well-Root ST 做根管封填<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 兩星期追蹤，可以正常咬東西<br />
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <a href="/JOEBINGDDS/" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
              返回首頁
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 