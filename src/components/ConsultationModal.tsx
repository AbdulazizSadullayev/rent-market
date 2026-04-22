import { useState } from "react";
import { X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, agreePolicy, agreeMarketing });
    onClose();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith("+998")) {
      setPhone(value);
    } else if (value === "") {
      setPhone("+998");
    }
  };

  if (!isOpen) return null;

  return (
    /* O'zgarish bu yerda: 
       1. bg-black/50 o'rniga bg-white/10 (juda shaffof oq) yoki bg-transparent qildik.
       2. backdrop-blur-md orqali orqa fonni chiroyli xiralashtirdik.
    */
    <div className="fixed inset-0 bg-white/5 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-all duration-300">
      
      {/* Modal tashqarisini bossa yopilishi uchun (Backdrop click) */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="bg-white rounded-[32px] max-w-md w-full p-8 relative shadow-2xl border border-gray-100 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#1F1F1F] mb-8 text-center">
          Получить Консультацию
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Имя <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
              placeholder="Ваше имя"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Номер телефона <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
              placeholder="+998 XX XXX XX XX"
              required
            />
          </div>

          <div className="space-y-4 pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreePolicy}
                onChange={(e) => setAgreePolicy(e.target.checked)}
                className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded-lg focus:ring-green-500 accent-green-600"
                required
              />
              <span className="text-sm text-gray-500 leading-snug group-hover:text-gray-700 transition-colors">
                Я ознакомился с <a href="#" className="text-green-600 underline font-medium">Политикой Конфиденциальности</a> и даю Согласие на обработку персональных данных
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreeMarketing}
                onChange={(e) => setAgreeMarketing(e.target.checked)}
                className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded-lg focus:ring-green-500 accent-green-600"
              />
              <span className="text-sm text-gray-500 leading-snug group-hover:text-gray-700 transition-colors">
                Я хочу получить информационные и рекламные уведомления
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white py-4 rounded-[20px] font-bold text-base uppercase tracking-widest shadow-lg shadow-green-200 hover:bg-[#1da850] hover:shadow-green-300 active:scale-[0.97] transition-all duration-300 mt-4"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;