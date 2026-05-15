import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

type ProfileFormData = {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const initialFormData: ProfileFormData = {
  firstName: "Eleanor",
  lastName: "Pena",
  displayName: "Admin",
  email: "eleanorpena@gmail.com",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const AcountTabs = () => {
  const [formData, setFormData] = useState<ProfileFormData>(initialFormData);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSaved(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hasRequiredProfileFields = useMemo(
    () =>
      formData.firstName.trim().length > 0 &&
      formData.lastName.trim().length > 0 &&
      formData.displayName.trim().length > 0 &&
      formData.email.trim().length > 0,
    [formData]
  );

  const isPasswordSectionFilled =
    formData.currentPassword || formData.newPassword || formData.confirmPassword;

  const arePasswordsValid = useMemo(() => {
    if (!isPasswordSectionFilled) return true;
    return (
      formData.currentPassword.length > 0 &&
      formData.newPassword.length >= 6 &&
      formData.newPassword === formData.confirmPassword
    );
  }, [formData, isPasswordSectionFilled]);

  const isSaveEnabled = hasRequiredProfileFields && arePasswordsValid;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSaveEnabled) return;
    setSaved(true);
    console.log("Profile saved:", formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSaved(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Имя*</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Фамилия*</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Отображаемое имя*</label>
          <input
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Почта*</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="mb-3 text-base font-semibold">Смена пароля</div>
      <div className="mb-2 grid grid-cols-1 gap-6 md:grid-cols-3">
        <input
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          type="password"
          placeholder="Текущий пароль"
          className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          type="password"
          placeholder="Новый пароль (мин. 6)"
          className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="Подтвердите"
          className="w-full rounded-lg bg-gray-100 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {!arePasswordsValid && (
        <p className="mb-6 text-sm text-red-500">
          Для смены пароля заполните текущий пароль, новый пароль (минимум 6 символов) и подтверждение.
        </p>
      )}

      {saved && <p className="mb-6 text-sm text-green-600">Изменения сохранены.</p>}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          Сбросить
        </button>
        <button
          type="submit"
          disabled={!isSaveEnabled}
          className={`rounded-lg px-8 py-3 font-medium transition-all ${
            isSaveEnabled
              ? "bg-black text-white hover:bg-gray-800"
              : "cursor-not-allowed bg-gray-200 text-gray-400"
          }`}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default AcountTabs;