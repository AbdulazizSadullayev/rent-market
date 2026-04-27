import React from 'react'

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Как оформить',
    description: 'Здесь всё просто: выбираете девайс и заполняете форму.'
  },
  {
    number: 2,
    title: 'Наш менеджер свяжется с вами',
    description: 'Для завершения оформления нужно будет подтвердить свои паспортные данные.'
  },
  {
    number: 3,
    title: 'Получите девайс от нашего сервиса',
    description: 'Мы доставляем, даем инструкцию по использованию и в конце срока действия договора заберём.'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <div className="mt-12 mb-12">
      <h2 className="text-4xl font-bold text-[#222222] mb-8">Как арендовать ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col h-full bg-white rounded-3xl px-6 py-8">
            <div className="font-['Prosto_One'] font-normal text-[96px] leading-[100px] tracking-normal mb-4">
              {step.number}
            </div>
            <div className="mb-6">
              <span className="inline-block border border-green-500 text-black rounded-full px-4 py-2 text-sm font-semibold">
                {step.title}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
