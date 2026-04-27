import { useState } from "react";
import { ChevronDown, Truck, MapPin, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Apply = () => {
  const { cartItems, getTotalPrice } = useCart();

  // Form State
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "courier">("pickup");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [telegram, setTelegram] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Validation
  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    phoneNumber.length > 4 &&
    telegram.trim();

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " сум.";
  };

  const totalPrice = getTotalPrice();
  const deliveryFee = shippingMethod === "courier" ? 50000 : 0;
  const finalTotal = totalPrice + deliveryFee - discount;

  const handleApplyPromo = () => {
    // Simple promo code logic for demo
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(Math.floor(totalPrice * 0.1)); // 10% discount
    } else if (promoCode.toLowerCase() === "save20") {
      setDiscount(Math.floor(totalPrice * 0.2)); // 20% discount
    } else {
      setDiscount(0);
      alert("Промокод не найден");
    }
    setPromoCode("");
  };

  const handlePlaceOrder = () => {
    if (isFormValid) {
      console.log({
        shippingMethod,
        firstName,
        lastName,
        phoneNumber,
        telegram,
        paymentMethod,
        totalPrice: finalTotal,
      });
      alert("Заказ успешно оформлен!");
    }
  };

  return (
    <div className="mt-5 min-h-screen py-6 sm:mt-7 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <h1 className="mb-6 text-2xl font-bold text-[#1F1F1F] sm:mb-8 sm:text-4xl">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Checkout Form */}
          <div className="lg:col-span-2">
            {/* Shipping Method */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                <Truck size={24} />
                Способ получения
              </h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-green-500 transition-colors"
                  style={{ borderColor: shippingMethod === "pickup" ? "#22C55E" : "" }}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    checked={shippingMethod === "pickup"}
                    onChange={() => setShippingMethod("pickup")}
                    className="w-5 h-5 text-green-600"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-[#1F1F1F]">Пункт выдачи Rentmarket</p>
                    <p className="text-sm text-gray-600">Время работы: 10:00 - 20:00, бесплатно</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-green-500 transition-colors"
                  style={{ borderColor: shippingMethod === "courier" ? "#22C55E" : "" }}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value="courier"
                    checked={shippingMethod === "courier"}
                    onChange={() => setShippingMethod("courier")}
                    className="w-5 h-5 text-green-600"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-[#1F1F1F]">Курьером до двери</p>
                    <p className="text-sm text-gray-600">Доставим 25 августа, 30 000 сум</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                <MapPin size={24} />
                Адрес доставки
              </h2>

              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold text-[#1F1F1F]">
                  {shippingMethod === "pickup"
                    ? "Пункт выдачи Rentmarket"
                    : "Доставка до двери"}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {shippingMethod === "pickup"
                    ? "Бешкарын, Б5/1, Чиланзарский район, Ташкент, 100066"
                    : "Выберите адрес при оформлении"}
                </p>
                <button className="text-sm text-green-600 hover:underline mt-2 font-medium">
                  Изменить
                </button>
              </div>
            </div>

            {/* Recipient Info */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1F1F1F] mb-4">Получатель заказа</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Имя*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Фамилия*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона*"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Telegram*"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                <CreditCard size={24} />
                Способ оплаты
              </h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-green-500 transition-colors"
                  style={{ borderColor: paymentMethod === "card" ? "#22C55E" : "" }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-5 h-5 text-green-600"
                  />
                  <div className="ml-3 flex-1">
                    <p className="font-semibold text-[#1F1F1F]">Картой онлайн</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">UZCARD</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">HUMO</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Visa</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">MasterCard</span>
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-green-500 transition-colors"
                  style={{ borderColor: paymentMethod === "cash" ? "#22C55E" : "" }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="w-5 h-5 text-green-600"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-[#1F1F1F]">Оплата при получении</p>
                    <p className="text-sm text-gray-600">Курьеру - только Payme, Click и наличными</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-4">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Ваш заказ</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Товары ({cartItems.length})</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium">
                    {deliveryFee > 0 ? formatPrice(deliveryFee) : "Бесплатно"}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Скидка</span>
                    <span className="font-medium text-green-600">-{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              {/* Promo Code Accordion */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <button
                  onClick={() => setIsPromoOpen(!isPromoOpen)}
                  className="flex items-center justify-between w-full text-left font-medium text-[#1F1F1F] hover:text-green-600 transition-colors"
                >
                  <span>Есть промокод?</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${isPromoOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isPromoOpen && (
                  <div className="mt-4 space-y-2">
                    <input
                      type="text"
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-sm"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Применить
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                      Попробуйте: save10 или save20
                    </p>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1F1F1F]">Итого</span>
                  <span className="text-lg font-bold text-[#1F1F1F]">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-300 active:scale-[0.98] ${
                  isFormValid
                    ? "bg-[#1F1F1F] text-white hover:bg-[#22C55E]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Оформить заказ
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Размещая заказ, вы соглашаетесь на обработку персональных данных в соответствии с{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Соглашением о конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;