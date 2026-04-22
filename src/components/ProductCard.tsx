import { Heart } from "lucide-react"
import { useFavorites } from "@/hooks/useFavorites"
import { useCart } from "@/hooks/useCart"
import { useNavigate } from "react-router-dom"
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react"

interface ProductCardProps {
  id: number
  title: string
  img: string
  currentPrice: string
  originalPrice: string
  rentalText: string
  iconImgOne: string
  iconImgTwo: string
  iconImgThree: string
  iconLabels: string[]
}

const ProductCard = (props: ProductCardProps) => {
  const { id, title, img, currentPrice, originalPrice, rentalText, iconLabels, iconImgOne, iconImgTwo, iconImgThree } = props

  const featureItems = useMemo(() => [
    { img: iconImgOne, label: iconLabels[0] },
    { img: iconImgTwo, label: iconLabels[1] },
    { img: iconImgThree, label: iconLabels[2] },
  ], [iconImgOne, iconImgTwo, iconImgThree, iconLabels])
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const { addToCart, isInCart } = useCart()
  const navigate = useNavigate()
  const [added, setAdded] = useState(false)
  const [popped, setPopped] = useState(false)
  const addedTimeoutRef = useRef<number | null>(null)
  const poppedTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current !== null) window.clearTimeout(addedTimeoutRef.current)
      if (poppedTimeoutRef.current !== null) window.clearTimeout(poppedTimeoutRef.current)
    }
  }, [])

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites({
        id,
        title,
        img,
        currentPrice,
        originalPrice,
        rentalText,
        iconImgOne,
        iconImgTwo,
        iconImgThree,
        iconLabels
      })
    }
  }

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (isInCart(id)) {
      // already in cart – just flash feedback
      setAdded(true)
      setPopped(true)
      if (addedTimeoutRef.current !== null) window.clearTimeout(addedTimeoutRef.current)
      addedTimeoutRef.current = window.setTimeout(() => {
        setAdded(false)
        setPopped(false)
      }, 1500)
      return
    }

    setPopped(true)
    if (poppedTimeoutRef.current !== null) window.clearTimeout(poppedTimeoutRef.current)
    poppedTimeoutRef.current = window.setTimeout(() => setPopped(false), 200)

    addToCart({
      id,
      title,
      img,
      currentPrice,
      originalPrice,
      rentalText,
      iconImgOne,
      iconImgTwo,
      iconImgThree,
      iconLabels
    })

    setAdded(true)
    if (addedTimeoutRef.current !== null) window.clearTimeout(addedTimeoutRef.current)
    addedTimeoutRef.current = window.setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="group w-full cursor-pointer rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-3xl sm:p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="truncate text-lg font-bold text-[#1F1F1F] sm:text-[1.25rem]">{title}</h3>
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleFavorite()
          }}
          className="active:scale-125 transition-transform outline-none"
        >
          <Heart
            size={24}
            className={isFavorite(id) ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      <div className="mb-5 flex h-44 items-center justify-center overflow-hidden rounded-2xl sm:mb-6 sm:h-[200px]">
        <img
          src={img}
          alt={title}
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-end mb-6">
        <div className="flex flex-col">
          <span className="leading-none text-xl font-extrabold text-[#1F1F1F] sm:text-[1.35rem]">{currentPrice}</span>
          <span className="mt-1 text-xs text-[#9C9C9C] sm:text-[0.85rem]">{rentalText}</span>
        </div>
        <div className="flex flex-col items-end border-l pl-4 border-gray-100">
          <span className="text-sm font-bold leading-none text-[#1F1F1F] line-through sm:text-[1rem]">{originalPrice}</span>
          <span className="mt-1 text-xs text-[#9C9C9C] sm:text-[0.85rem]">Залог 1 мес.</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-[#F8F8F8] rounded-[20px] p-3 mb-6">
        {featureItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 text-center">
            <div className="flex w-20 items-center justify-center rounded-full bg-gray-50">
              <img src={item.img} alt={item.label} className="w-100 object-contain" />
            </div>
            <span className="text-[0.6rem] font-medium leading-tight text-[#666] sm:text-[0.65rem]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full rounded-2xl py-3 text-base font-bold tracking-wider text-white uppercase transition-transform duration-200 sm:py-4 sm:text-[1.1rem] ${popped ? 'scale-105' : 'scale-100'
          } ${isInCart(id)
            ? 'bg-[#22C55E] hover:bg-[#16A34A]' // Green when already in cart
            : 'bg-[#1F1F1F] hover:bg-[#22C55E]' // Black when not
          }`}
      >
        {isInCart(id)
          ? 'УЖЕ В КОРЗИНЕ'
          : added
            ? 'ДОБАВЛЕНО'
            : 'АРЕНДОВАТЬ'}
      </button>
    </div>
  )
}

export default ProductCard

