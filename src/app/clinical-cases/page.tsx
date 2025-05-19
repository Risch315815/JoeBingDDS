import React from 'react'

export default function ClinicalCases() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">更多臨床案例</h1>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Clinical Case 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-black text-white p-8 rounded-lg">
            <img 
              src="/JoeBingDDS/images/case-placeholder.png" 
              alt="臨床案例"
              className="w-full max-w-[300px] h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2">#Case_Title</h3>
              <p className="text-base md:text-xl font-normal">
                案例描述第一行<br />
                案例描述第二行<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療過程 1<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療過程 2<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療結果<br />
              </p>
            </div>
          </div>

          {/* Clinical Case 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-black text-white p-8 rounded-lg">
            <img 
              src="/JoeBingDDS/images/case-placeholder.png" 
              alt="臨床案例"
              className="w-full max-w-[300px] h-auto object-contain mb-4 md:mb-0 shadow-md bg-white p-2 border border-gray-200" 
            />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2">#Case_Title</h3>
              <p className="text-base md:text-xl font-normal">
                案例描述第一行<br />
                案例描述第二行<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療過程 1<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療過程 2<br />
                <span className="text-gold-400 font-semibold mr-2">→</span> 治療結果<br />
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <a href="/#clinic-cases" className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors shadow-md">
              返回首頁
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 