import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardOneObject } from '@/data'
import { Gift } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = CardOneObject.find((p) => p.id === Number(id))

  const [mainImage, setMainImage] = useState(product?.img || '')
  const [rentalPeriod, setRentalPeriod] = useState<'week' | 'month'>('week')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  if (!product) {
    return <div className="p-10 text-center">Товар не найден</div>
  }

  const changeQty = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta))
  }

  const handleAdd = () => {
    if (!product) return
    // derive human-readable rental text based on selection
    const rentalText = rentalPeriod === 'week' ? 'Аренда 7 д.' : 'Аренда 30 д.'

    addToCart(
      {
        id: product.id,
        title: product.title,
        img: product.img,
        currentPrice: product.currentPrice,
        originalPrice: product.originalPrice,
        rentalText,
        rentalPeriod,
        iconImgOne: product.iconImgOne,
        iconImgTwo: product.iconImgTwo,
        iconImgThree: product.iconImgThree,
        iconLabels: product.iconLabels,
      },
      quantity
    )

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side: thumbnails + main image */}
        <div className="flex gap-8">
          {/* thumbnails column */}
          <div className="flex flex-col gap-4">
            {[product.img, product.img, product.img, product.img].map((src, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(src)}
                className="w-20 h-20 bg-gray-50 flex-shrink-0 rounded-lg overflow-hidden"
              >
                <img src={src} alt={product.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* main image container */}
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-3xl p-8">
            <img src={mainImage} alt={product.title} className="max-h-[500px] object-contain" />
          </div>
        </div>

        {/* Right side: product info */}
        <div className="space-y-6">
            {/* badge above title */}
          <span className="text-sm text-gray-500">Более 70 заказов</span>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* rental period with label */}
          <div className="space-y-1">
            <span className="text-base font-medium text-gray-700">Срок аренды:</span>
            <div className="flex items-center gap-2 bg-gray-200 rounded-full p-1">
              <button
                onClick={() => setRentalPeriod('week')}
                className={`px-6 py-2 rounded-full text-sm font-medium ${rentalPeriod === 'week' ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
              >
                Неделя
              </button>
              <button
                onClick={() => setRentalPeriod('month')}
                className={`px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${rentalPeriod === 'month' ? 'bg-gray-800 text-white' : 'text-gray-800 bg-white'}`}
              >
                Месяц
                <Gift size={16} className={`${rentalPeriod === 'month' ? 'text-green-500' : 'text-green-500'}`} />
              </button>
            </div>
          </div>

          {/* quantity selector with label */}
          <div className="space-y-1">
            <span className="text-base font-medium text-gray-700">Количество:</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeQty(-1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => changeQty(1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* price section */}
          <div className="space-y-1">
            <span className="text-base font-medium text-gray-700">Цена:</span>
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-lg text-red-500 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-4xl font-extrabold">{product.currentPrice}</span>
            </div>
          </div>

          {/* actions */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
            onClick={handleAdd}
            disabled={added}
            className="flex-1 border border-green-500 text-green-500 bg-green-50 py-4 rounded-2xl font-bold uppercase hover:bg-green-100 disabled:opacity-50"
          >
            {added ? 'ДОБАВЛЕНО' : 'В КОРЗИНУ'}
          </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-800 py-4 rounded-2xl font-bold uppercase hover:bg-gray-100">
              КУПИТЬ СЕЙЧАС
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
