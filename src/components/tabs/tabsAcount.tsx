import { useState, type ChangeEvent, type FormEvent } from "react";
// ChangeEvent
const AcountTabs = () => {
    // 1. State: Barcha inputlar uchun bitta obyekt
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    // 2. O'zgarishlarni kuzatish funksiyasi
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Formani yuborish
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Forma ma'lumotlari:", formData);
        alert("O'zgarishlar saqlandi!");
    };

    // 4. Tugma holati (agar biror maydon to'ldirilgan bo'lsa, "Сохранить" faollashadi)
    const isFormValid = Object.values(formData).some(val => val.length > 0);

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Ism va Familiya */}
                <div>
                    <label className="block text-sm font-medium mb-2">Имя*</label>
                    <input 
                        name="firstName" value={formData.firstName} onChange={handleChange}
                        type="text" placeholder="Eleanor" 
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Фамилия*</label>
                    <input 
                        name="lastName" value={formData.lastName} onChange={handleChange}
                        type="text" placeholder="Pena" 
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" 
                    />
                </div>
                {/* Displey nomi va Email */}
                <div>
                    <label className="block text-sm font-medium mb-2">Отображаемое имя*</label>
                    <input 
                        name="displayName" value={formData.displayName} onChange={handleChange}
                        type="text" placeholder="Admin" 
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Почта*</label>
                    <input 
                        name="email" value={formData.email} onChange={handleChange}
                        type="email" placeholder="Eleanorpena@gmail.com" 
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" 
                    />
                </div>
            </div>

            {/* Parolni o'zgartirish qismi */}
            <div className="mb-8">
                <div className="text-base font-semibold mb-4">Смена пароля</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input name="currentPassword" value={formData.currentPassword} onChange={handleChange} type="password" placeholder="Текущий пароль" className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    <input name="newPassword" value={formData.newPassword} onChange={handleChange} type="password" placeholder="Новый пароль" className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                    <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="Подтвердите" className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>
            </div>

            {/* Saqlash tugmasi */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`px-8 py-3 rounded-lg font-medium transition-all ${
                        isFormValid 
                        ? "bg-black text-white hover:bg-gray-800" 
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                >
                    Сохранить
                </button>
            </div>
        </form>
    );
};

export default AcountTabs;