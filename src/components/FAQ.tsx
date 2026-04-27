import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqData, type FaqItem } from '../data'

const FAQ: React.FC = () => {
  // faqData ni kategoriyalar bo'yicha guruhlash
  const groupedData = faqData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, FaqItem[]>)

  const categories = Object.keys(groupedData)
  const [activeTab, setActiveTab] = useState<string>(categories[0] || '')
  const [openId, setOpenId] = useState<number | null>(null)

  const items = groupedData[activeTab] || []

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto mx-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#111827]">Вопросы и ответы</h2>

        {/* FAQ Karta */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
          
          {/* Tablar (Kategoriyalar) */}
          <div className="flex gap-8 border-b border-gray-100 pb-0 mb-8 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat)
                  setOpenId(null)
                }}
                className={`pb-4 text-lg font-medium whitespace-nowrap transition-all duration-300 relative ${
                  activeTab === cat
                    ? 'text-[#22C55E]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#22C55E]" />
                )}
              </button>
            ))}
          </div>

          {/* Akkordeon Ro'yxati */}
          <div className="divide-y divide-gray-100">
            {items.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id} className="py-2">
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between py-6 text-left group transition-all"
                  >
                    <span className="text-lg font-medium text-[#111827] pr-8 group-hover:text-gray-700 transition-colors">
                      {item.question}
                    </span>
                    <div className={`flex items-center justify-center min-w-[40px] h-[40px] rounded-full bg-[#F3F4F6] transition-all duration-300 ${isOpen ? 'bg-[#22C55E]/10' : ''}`}>
                      <Plus
                        size={20}
                        className={`transition-transform duration-300 text-gray-900 ${
                          isOpen ? 'rotate-45 text-[#22C55E]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Javob qismi animatsiyasi */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-gray-500 leading-relaxed max-w-4xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ