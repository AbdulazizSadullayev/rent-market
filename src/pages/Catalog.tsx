import { Filter, Star } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { CardOneObject } from "@/data"

const SORT_OPTIONS = [
    "Популярные",
    "Сначала дешевые",
    "Сначала дорогие",
]

const Catalog = () => {
    const products = CardOneObject

    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0])

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    // click‑outside handler (optional requirement)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isDropdownOpen &&
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isDropdownOpen])

    const toggleDropdown = () => setDropdownOpen((o) => !o)
    const selectOption = (option: string) => {
        setCurrentSort(option)
        setDropdownOpen(false)
    }

    return (
        <div className="px-4 py-6">
            {/* Header */}
            <header className="container mb-8">
                <div className="text-center py-5 bg-white rounded-3xl">
                    <h1 className="text-3xl font-bold text-[#1F1F1F]">
                        Каталог
                        </h1>
                        <span className="text-base font-normal text-gray-600">
                            (124 Товар)
                        </span>
                </div>
                
                <div className="container mt-4 flex flex-wrap gap-3 justify-between items-center">
                    <button className="mt-2 flex items-center gap-2 bg-white p-3 rounded-2xl hover:bg-gray-500">
                        <Filter size={16} />
                        Фильтр
                    </button>

                    {/* sort button with dropdown wrapper */}
                    <div className="relative mt-2" ref={wrapperRef}>
                        <button
                            ref={buttonRef}
                            onClick={toggleDropdown}
                            className="flex items-center gap-2 bg-white p-3 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                            <Star size={16} />
                            {currentSort}
                        </button>

                        {isDropdownOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                                {SORT_OPTIONS.map((opt) => (
                                    <li
                                        key={opt}
                                        onClick={() => selectOption(opt)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </header>

            {/* Product grid */}
            <main>
                <div className="container">
                    <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((p) => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Catalog
