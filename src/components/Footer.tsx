
import React from 'react';
import { Send, Facebook, Instagram, Youtube } from 'lucide-react'; // WhatsApp uchun o'ziga xos SVG ishlatamiz

// index.tsx dan keladigan ma'lumotlar strukturasi
export const footerData = {
  workingHours: {
    label: "График работы:",
    days: "Ежедневно",
    time: "10:00 - 20:00"
  },
  address: "Бешагач, 55/1 Чиланзарский район, Ташкент, 100066",
  phone: "+998 71 200 14 41",
  navLinks: [
    { title: "Велосипеды", href: "#" },
    { title: "Спортивный тренажеры", href: "#" },
    { title: "Гаджеты и другие", href: "#" },
    { title: "Мы заботимся о вас", href: "#" },
    { title: "Наши партнеры", href: "#" },
  ],
  infoLinks: [
    { title: "Каталог", href: "#" },
    { title: "Как оформить", href: "#" },
    { title: "О компании", href: "#" },
    { title: "Блог", href: "#" },
    { title: "Вопросы и ответы", href: "#" },
  ],
  companyName: 'OOO "GETNOW"',
  inn: "ИНН: 310169464"
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-12 font-sans mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="mb-12">
          <div className="flex items-center text-2xl font-semibold tracking-tight">
            <span className="border-2 border-[#22C55E] rounded-full px-3 py-0.5 mr-1 text-white">rent</span>
            <span>market</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Contacts */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">{footerData.workingHours.label}</p>
              <p className="text-sm">{footerData.workingHours.days}</p>
              <p className="text-sm">{footerData.workingHours.time}</p>
            </div>
            <p className="text-sm leading-relaxed max-w-[220px]">
              {footerData.address}
            </p>
            <p className="text-lg font-medium">{footerData.phone}</p>
          </div>

          {/* Column 2: Nav Links */}
          <ul className="space-y-4">
            {footerData.navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-sm hover:text-[#22C55E] transition-colors border-b border-transparent hover:border-[#22C55E] pb-0.5">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 3: Info Links */}
          <ul className="space-y-4">
            {footerData.infoLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-sm hover:text-[#22C55E] transition-colors border-b border-transparent hover:border-[#22C55E] pb-0.5">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 4: Socials & Apps */}
          <div className="space-y-10">
            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialCircleIcon icon={<Send size={18} fill="currentColor" />} />
              <SocialCircleIcon icon={<WhatsAppIcon />} />
              <SocialCircleIcon icon={<Facebook size={18} fill="currentColor" />} />
              <SocialCircleIcon icon={<Instagram size={18} />} />
              <SocialCircleIcon icon={<Youtube size={18} fill="currentColor" />} />
            </div>

            {/* App Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <AppBadge store="google" />
              <AppBadge store="apple" />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{footerData.companyName}</p>
          <p>{footerData.inn}</p>
        </div>
      </div>
    </footer>
  );
};

// Yordamchi komponentlar
const SocialCircleIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
    {icon}
  </a>
);

const AppBadge = ({ store }: { store: 'google' | 'apple' }) => (
  <a href="#" className="flex items-center gap-2 border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-900 transition-colors w-max">
    <img 
      src={store === 'google' ? "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" : "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"} 
      alt={store} 
      className="h-6"
    />
  </a>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default Footer;
