import React from 'react';
import { Wrench, RotateCcw, Truck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Техническая поддержка и обслуживание',
      icon: <Wrench className="w-10 h-10" />,
    },
    {
      id: 2,
      title: 'Замена устройства при неисправности',
      icon: <RotateCcw className="w-10 h-10" />,
    },
    {
      id: 3,
      title: 'Доставка и самовывоз',
      icon: <Truck className="w-10 h-10" />,
    },
  ];

  return (
    <section className="bg-blue-700 py-20 md:py-32 px-4 my-7 rounded-3xl md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Rent Market — это удобно
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            Мы предлагаем удобный сервис подписки на аренду спортивного оборудования, велосипедов и современных гаджетов с гибкими условиями и ориентированным на клиента обслуживанием. Просто выбирайте, арендуйте и наслаждайтесь.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl -z-10" />
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="">
      <div className="bg-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 hover:bg-blue-500/40 transition-all duration-300 h-full flex flex-col items-start">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-16 h-16 bg-blue-400/40 rounded-xl mb-6 group-hover:bg-blue-400/50 transition-colors duration-300">
          <div className="text-white">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default FeaturesSection;