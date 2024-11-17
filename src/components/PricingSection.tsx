import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Контент-мейкер',
    description: 'Идеально для создателей, публикующих 1-3 видео в неделю.',
    price: 17,
    features: [
      'Библиотека 1M+ Reels',
      '60 токенов в месяц',
      '1 целевая аудитория',
      '1 фирменный стиль',
      'Чат-поддержка',
      '30-дневная гарантия возврата'
    ]
  },
  {
    title: 'Бизнес',
    description: 'Идеально для бизнесов с ежедневными публикациями.',
    price: 37,
    features: [
      'Библиотека 1M+ Reels',
      '250 токенов в месяц',
      '4 целевых аудитории',
      '1 фирменный стиль',
      'Приоритетная поддержка',
      '30-дневная гарантия возврата'
    ],
    isPopular: true
  },
  {
    title: 'Агентство',
    description: 'Идеально для креативных агентств с множеством клиентов.',
    price: 97,
    features: [
      'Библиотека 1M+ Reels',
      'Безлимитные токены',
      '20 целевых аудиторий',
      '20 фирменных стилей',
      'Эксклюзивная поддержка',
      '30-дневная гарантия возврата'
    ]
  }
];

export function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <div className="inline-block bg-gray-800/50 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
          <span className="text-[#AAFF00] text-sm md:text-base">Тарифы</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Простые и прозрачные тарифы
        </h2>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
          Все тарифы включают бесплатный пробный период с 10 токенами и 30-дневную гарантию возврата средств.
        </p>
        <button className="bg-[#AAFF00] text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-[#88CC00] transition-colors mt-6 md:mt-8 text-sm md:text-base">
          Присоединиться к бете
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className={`bg-gray-800/30 rounded-2xl p-6 md:p-8 ${
              plan.isPopular ? 'ring-2 ring-[#AAFF00]' : ''
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">{plan.title}</h3>
              <p className="text-gray-400 text-sm md:text-base min-h-[48px]">{plan.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-bold text-[#AAFF00]">${plan.price}</span>
                <span className="text-gray-400 text-sm md:text-base">/ месяц</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-[#AAFF00] flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 md:py-3 rounded-full font-medium transition-colors mt-6 md:mt-8 text-sm md:text-base ${
                  plan.isPopular
                    ? 'bg-[#AAFF00] text-black hover:bg-[#88CC00]'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                Начать бесплатно
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}