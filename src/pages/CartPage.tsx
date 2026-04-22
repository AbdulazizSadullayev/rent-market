import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../context/CartContext"
import { useCart } from "@/hooks/useCart"
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate()
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    selectAll,
    toggleSelectAll,
    selectedItems,
    toggleItemSelection
  } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' сум.';
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-2 py-6 sm:px-4 sm:py-8">
        <h1 className="mb-6 text-2xl font-bold text-[#1F1F1F] sm:mb-8 sm:text-4xl">Корзина</h1>
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Ваша корзина пуста</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-6 sm:px-4 sm:py-8">
      <h1 className="mb-6 text-2xl font-bold text-[#1F1F1F] sm:mb-8 sm:text-4xl">Корзина</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2">
          {/* Select All */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="text-lg font-medium text-[#1F1F1F]">
              {selectAll ? "Снять все" : "Выбрать все"}
            </label>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItemSelection(item.id)}
                    className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />

                  {/* Product Image */}
                  <div className="h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-40 flex-1">
                    <h3 className="mb-1 text-base font-bold text-[#1F1F1F] sm:mb-2 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-base font-semibold text-[#1F1F1F] sm:text-lg">
                      {item.currentPrice}
                    </p>
                    <p className="text-sm text-gray-500">{item.rentalText}</p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-4">
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Ваш заказ</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Товары ({cartItems.length})</span>
                <span className="font-medium">{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Доставка</span>
                <span className="font-medium">Бесплатно</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#1F1F1F]">Итого</span>
                <span className="text-lg font-bold text-[#1F1F1F]">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/howtoapply')}
              className="w-full bg-[#1F1F1F] text-white py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:bg-[#22C55E] active:scale-[0.98]"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;