import React from 'react'
import { cardThree } from '@/data'

const PartnersGrid: React.FC = () => {
  return (
    <div className="mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold text-[#222222] mb-6">Наши партнеры</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cardThree.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl h-40 flex items-center justify-center shadow-sm"
          >
            <img
              src={p.imageSource}
              alt={`partner-${p.id}`}
              className="object-contain max-h-[70%]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersGrid
