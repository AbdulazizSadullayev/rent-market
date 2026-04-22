import { headerIcons, headerLinks } from "@/data"
import { Phone, Menu, ChevronDown, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "@/hooks/useCart"
import { useFavorites } from "@/hooks/useFavorites"
import { useEffect, useState } from "react"
import ConsultationModal from "./ConsultationModal"

const Header = () => {
  const { getTotalItems } = useCart()
  const { favorites } = useFavorites()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"ru" | "en">("ru")

  useEffect(() => {
    if (!isMobileMenuOpen) return
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="bg-transparent pt-2 sm:pt-3">
      <div className="container">
        <div className="flex items-center justify-between rounded-b-2xl bg-white px-3 py-2 shadow-sm sm:rounded-b-3xl sm:px-4 sm:py-3">
          <div className="flex gap-1 items-center text-gray-700">
            <Phone size={16} />
            <span className="text-xs font-medium sm:text-sm">+998 71 200 14 41</span>
          </div>
          <select
            aria-label="Select language"
            value={language}
            onChange={(event) => setLanguage(event.target.value as "ru" | "en")}
            className="cursor-pointer bg-transparent text-xs font-medium outline-none sm:text-sm"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-2xl bg-white px-3 py-3 shadow-sm sm:mt-2.5 sm:rounded-3xl sm:px-4">
          <Link to="/" className="flex items-center gap-1">
            <span className="inline-flex rounded-full border border-green-500 px-2 py-0.5 text-base font-bold text-green-600 sm:px-2 sm:py-1 sm:text-lg">
              rent
            </span>
            <span className="text-lg font-bold text-[#1F1F1F] sm:text-xl">market</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {headerLinks.map((el) => (
              <NavLink
                key={el.id}
                to={el.to}
                className={({ isActive }) =>
                  `mx-3 transition-all duration-200 text-[#1F1F1F] text-sm ${
                    isActive ? "font-bold border-b-2 border-green-500" : "hover:text-green-500"
                  }`
                }
              >
                {el.text}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setLanguage((prev) => (prev === "ru" ? "en" : "ru"))}
            >
              {language.toUpperCase()}
              <ChevronDown size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {headerIcons.map((el) => {
              const Icon = el.icon

              if (el.id === 2) {
                return (
                  <button
                    key={el.id}
                    onClick={() => setIsModalOpen(true)}
                    className="p-1 hover:scale-110 transition-transform outline-none relative"
                  >
                    <Icon />
                  </button>
                )
              }

              let linkTo = "/"
              if (el.id === 0) linkTo = "/cart"
              if (el.id === 1) linkTo = "/favorites"

              return (
                <Link
                  key={el.id}
                  to={linkTo}
                  className="p-1 hover:scale-110 transition-transform outline-none relative"
                >
                  <Icon />

                  {el.id === 0 && getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                      {getTotalItems()}
                    </span>
                  )}

                  {el.id === 1 && favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                      {favorites.length}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div
              className="absolute right-0 top-0 h-full w-[78%] max-w-72 overflow-y-auto bg-white p-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded hover:bg-gray-100">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {headerLinks.map((el) => (
                  <NavLink
                    key={el.id}
                    to={el.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium p-2 rounded-lg ${
                        isActive ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {el.text}
                  </NavLink>
                ))}

                <div className="border-t pt-3 mt-3">
                  {headerIcons.map((el) => {
                    const Icon = el.icon
                    if (el.id === 2) {
                      return (
                        <button
                          key={el.id}
                          onClick={() => {
                            setIsModalOpen(true)
                            setIsMobileMenuOpen(false)
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                          <Icon /> Profile
                        </button>
                      )
                    }

                    let linkTo = "/"
                    if (el.id === 0) linkTo = "/cart"
                    if (el.id === 1) linkTo = "/favorites"

                    return (
                      <Link
                        key={el.id}
                        to={linkTo}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        <Icon />
                        {el.id === 0 ? "Cart" : el.id === 1 ? "Favorites" : "Profile"}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header