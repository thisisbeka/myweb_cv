import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'ABOUT',
    'nav.experience': 'EXPERIENCE',
    'nav.skills': 'SKILLS',
    'nav.projects': 'PROJECTS',
    'nav.education': 'EDUCATION',
    'nav.contact': 'CONTACT',

    'hero.title': 'THISISBEKA',
    'hero.subtitle': 'AI Chatbot Developer & Data Analyst',
    'hero.projects': 'PROJECTS',
    'hero.contact': 'CONTACT',

    'about.title': 'ABOUT ME',
    'about.description': 'Passionate AI developer specializing in intelligent chatbots and data-driven solutions. Expert in building scalable conversational AI systems, NLP-driven conversational agents, data analytics, and ML model deployment.',
    'about.stat1.label': 'Years of Experience',
    'about.stat2.label': 'Projects Completed',
    'about.stat3.label': 'Happy Clients',

    'experience.title': 'EXPERIENCE',
    'experience.job1.title': 'AI Developer',
    'experience.job1.company': 'Tech Corporation',
    'experience.job1.period': '2022 - Present',
    'experience.job1.desc': 'Led development of enterprise AI chatbot solutions, implementing NLP models and conversational AI systems.',
    'experience.job2.title': 'Data Analyst',
    'experience.job2.company': 'Data Solutions Inc',
    'experience.job2.period': '2020 - 2022',
    'experience.job2.desc': 'Analyzed complex datasets, created predictive models, and delivered actionable insights for business growth.',
    'experience.job3.title': 'Junior Developer',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.desc': 'Built web applications and automated data processing pipelines for various clients.',

    'skills.title': 'SKILLS',
    'skills.category1': 'AI & Machine Learning',
    'skills.category2': 'Programming Languages',
    'skills.category3': 'Tools & Frameworks',
    'skills.category4': 'Databases',

    'projects.title': 'PROJECTS',
    'projects.project1.title': 'AI Customer Support Bot',
    'projects.project1.desc': 'Intelligent chatbot with NLP capabilities for automated customer service.',
    'projects.project2.title': 'Data Analytics Dashboard',
    'projects.project2.desc': 'Real-time analytics platform for business intelligence and reporting.',
    'projects.project3.title': 'Sentiment Analysis Tool',
    'projects.project3.desc': 'ML-powered tool for analyzing customer feedback and social media sentiment.',

    'education.title': 'EDUCATION',
    'education.degree1.title': 'Master of Science in Artificial Intelligence',
    'education.degree1.school': 'Tech University',
    'education.degree1.period': '2021 - 2023',
    'education.degree1.desc': 'Specialized in Machine Learning, Neural Networks, and Natural Language Processing.',
    'education.degree2.title': 'Bachelor of Computer Science',
    'education.degree2.school': 'State University',
    'education.degree2.period': '2017 - 2021',
    'education.degree2.desc': 'Focus on Software Engineering, Data Structures, and Algorithms.',

    'contact.title': "LET'S CONNECT",
    'contact.subtitle': 'Ready to build something extraordinary?',
    'contact.cta': "Let's talk.",
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.linkedin.label': 'LinkedIn',
    'contact.instagram.label': 'Instagram',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.github.label': 'GitHub',
    'contact.footer': 'Designed & Built by THISISBEKA',

    'modal.title': 'Contact Form',
    'modal.subtitle': '// Fill the form to send message via WhatsApp',
    'modal.name': 'name',
    'modal.email': 'email',
    'modal.message': 'message',
    'modal.submit': 'SEND TO WHATSAPP',
    'modal.placeholder.name': '"Your Name"',
    'modal.placeholder.email': '"your@email.com"',
    'modal.placeholder.message': '"Your message here..."',
  },
  ru: {
    'nav.about': 'ОБО МНЕ',
    'nav.experience': 'ОПЫТ',
    'nav.skills': 'НАВЫКИ',
    'nav.projects': 'ПРОЕКТЫ',
    'nav.education': 'ОБРАЗОВАНИЕ',
    'nav.contact': 'КОНТАКТЫ',

    'hero.title': 'THISISBEKA',
    'hero.subtitle': 'Разработчик AI чат-ботов и Аналитик данных',
    'hero.projects': 'ПРОЕКТЫ',
    'hero.contact': 'СВЯЗАТЬСЯ',

    'about.title': 'ОБО МНЕ',
    'about.description': 'Увлеченный AI разработчик, специализирующийся на интеллектуальных чат-ботах и решениях на основе данных. Эксперт в создании масштабируемых систем разговорного AI, NLP-агентов, аналитики данных и развертывания ML моделей.',
    'about.stat1.label': 'Лет Опыта',
    'about.stat2.label': 'Завершенных Проектов',
    'about.stat3.label': 'Довольных Клиентов',

    'experience.title': 'ОПЫТ РАБОТЫ',
    'experience.job1.title': 'AI Разработчик',
    'experience.job1.company': 'Tech Corporation',
    'experience.job1.period': '2022 - Настоящее время',
    'experience.job1.desc': 'Руководил разработкой корпоративных AI чат-бот решений, внедрял NLP модели и системы разговорного AI.',
    'experience.job2.title': 'Аналитик Данных',
    'experience.job2.company': 'Data Solutions Inc',
    'experience.job2.period': '2020 - 2022',
    'experience.job2.desc': 'Анализировал сложные наборы данных, создавал прогнозные модели и предоставлял практические идеи для роста бизнеса.',
    'experience.job3.title': 'Junior Разработчик',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.desc': 'Создавал веб-приложения и автоматизированные конвейеры обработки данных для различных клиентов.',

    'skills.title': 'НАВЫКИ',
    'skills.category1': 'AI и Машинное Обучение',
    'skills.category2': 'Языки Программирования',
    'skills.category3': 'Инструменты и Фреймворки',
    'skills.category4': 'Базы Данных',

    'projects.title': 'ПРОЕКТЫ',
    'projects.project1.title': 'AI Бот Поддержки Клиентов',
    'projects.project1.desc': 'Интеллектуальный чат-бот с NLP возможностями для автоматизированного обслуживания клиентов.',
    'projects.project2.title': 'Дашборд Аналитики Данных',
    'projects.project2.desc': 'Платформа аналитики в реальном времени для бизнес-анализа и отчетности.',
    'projects.project3.title': 'Инструмент Анализа Настроений',
    'projects.project3.desc': 'ML-инструмент для анализа отзывов клиентов и настроений в социальных сетях.',

    'education.title': 'ОБРАЗОВАНИЕ',
    'education.degree1.title': 'Магистр наук в области искусственного интеллекта',
    'education.degree1.school': 'Tech University',
    'education.degree1.period': '2021 - 2023',
    'education.degree1.desc': 'Специализация на машинном обучении, нейронных сетях и обработке естественного языка.',
    'education.degree2.title': 'Бакалавр компьютерных наук',
    'education.degree2.school': 'State University',
    'education.degree2.period': '2017 - 2021',
    'education.degree2.desc': 'Фокус на программной инженерии, структурах данных и алгоритмах.',

    'contact.title': 'ДАВАЙТЕ СВЯЖЕМСЯ',
    'contact.subtitle': 'Готовы создать что-то выдающееся?',
    'contact.cta': 'Давайте поговорим.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Телефон',
    'contact.linkedin.label': 'LinkedIn',
    'contact.instagram.label': 'Instagram',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.github.label': 'GitHub',
    'contact.footer': 'Разработано THISISBEKA',

    'modal.title': 'Форма Связи',
    'modal.subtitle': '// Заполните форму для отправки сообщения через WhatsApp',
    'modal.name': 'имя',
    'modal.email': 'email',
    'modal.message': 'сообщение',
    'modal.submit': 'ОТПРАВИТЬ В WHATSAPP',
    'modal.placeholder.name': '"Ваше имя"',
    'modal.placeholder.email': '"your@email.com"',
    'modal.placeholder.message': '"Ваше сообщение здесь..."',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
