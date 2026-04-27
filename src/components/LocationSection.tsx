import React from 'react'
import { MapPin, Clock, Bus, Footprints } from 'lucide-react'

const LocationSection: React.FC = () => {
  return (
    <div className="mt-24 mb-12">
      <h2 className="text-4xl font-bold text-[#222222] mb-8">Мы находимся по адресу</h2>
      
      <div className="grid grid-cols-2 gap-2">
        
        {/* Left Side - Address Information */}
        <div className="flex flex-col gap-8 bg-white p-6 border rounded-3xl">
          
          {/* Showroom Section */}
          <div>
            <h3 className="text-xl font-bold text-[#222222] mb-4">Шоурум и Пункт выдаче</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-700 leading-relaxed">
                Бешагач, 55/1 Чилонзарский Район,<br />
                Ташкент, 100066
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">График Работы:</h4>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <p className="text-sm text-gray-700">Пн-Вс 9:00 ~ 19:00</p>
            </div>
          </div>

          {/* Walking Directions */}
          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">Как добраться пешком</h3>
            <div className="flex items-start gap-3">
              <Footprints className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-700 leading-relaxed">
                Находится в З 3 Минутах Ходьбы От Magic City Park.
              </p>
            </div>
          </div>

          {/* Public Transport */}
          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">Как доехать общественным транспортом?</h3>
            <div className="flex items-start gap-3">
              <Bus className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-700 leading-relaxed">
                11,13,51,76,100,103,118,196 Автобус.<br />
                Метро Узбекистанска и Дружбы Народов
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="flex items-center justify-center  bg-white p-3 border rounded-3xl">
          <iframe
            title="RentMarket Location Map"
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2482555627823!2d69.27777!3d41.32583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef56f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sMagic%20City%20Park!5e0!3m2!1sen!2s!4v1234567890"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default LocationSection
