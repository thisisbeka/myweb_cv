import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';

const aiProjects = [
  {
    title: { en: 'Enterprise AI Chatbot Platform', ru: 'Корпоративная AI Чат-бот Платформа' },
    description: { en: 'Multi-tenant conversational AI system with NLP integration, supporting 10,000+ daily interactions', ru: 'Мультитенантная система разговорного AI с интеграцией NLP, поддерживающая 10,000+ ежедневных взаимодействий' },
    tags: ['Python', 'LangChain', 'Azure', 'React'],
    color: '#C0C0C0',
    category: 'ai',
  },
  {
    title: { en: 'Real-Time Analytics Dashboard', ru: 'Дашборд Аналитики в Реальном Времени' },
    description: { en: 'Interactive data visualization platform processing millions of records with sub-second latency', ru: 'Интерактивная платформа визуализации данных с обработкой миллионов записей за доли секунды' },
    tags: ['Power BI', 'SQL', 'Databricks', 'ETL'],
    color: '#6C63FF',
    category: 'ai',
  },
  {
    title: { en: 'LLM Fine-Tuning Pipeline', ru: 'Конвейер Дообучения LLM' },
    description: { en: 'Automated fine-tuning infrastructure for domain-specific language models with performance optimization', ru: 'Автоматизированная инфраструктура дообучения для специализированных языковых моделей с оптимизацией производительности' },
    tags: ['PyTorch', 'Hugging Face', 'Docker', 'MLOps'],
    color: '#C0C0C0',
    category: 'ai',
  },
  {
    title: { en: 'Predictive Maintenance System', ru: 'Система Прогнозного Обслуживания' },
    description: { en: 'ML-powered predictive analytics reducing equipment downtime by 35% through anomaly detection', ru: 'ML-система прогнозной аналитики, снижающая простои оборудования на 35% за счет обнаружения аномалий' },
    tags: ['TensorFlow', 'Time Series', 'Kubernetes', 'API'],
    color: '#6C63FF',
    category: 'ai',
  },
];

const webProjects = [
  {
    title: { en: 'Ebriva - Turkish E-commerce Platform', ru: 'Ebriva - Турецкая E-commerce Платформа' },
    description: { en: 'Modern e-commerce website with responsive design and smooth animations built with React and TypeScript', ru: 'Современный e-commerce сайт с адаптивным дизайном и плавными анимациями на React и TypeScript' },
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/thisisbeka/ebriva',
    link: 'https://ebriva.com.tr/',
    color: '#3b82f6',
    category: 'web',
  },
  {
    title: { en: 'Rosella - Flower Shop Website', ru: 'Rosella - Сайт Цветочного Магазина' },
    description: { en: 'SEO-optimized flower shop website with TypeScript, React, and Supabase integration for content management', ru: 'SEO-оптимизированный сайт цветочного магазина с TypeScript, React и интеграцией Supabase для управления контентом' },
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'SEO'],
    github: 'https://github.com/thisisbeka/rosella',
    link: 'https://inegolcicekci.com.tr/',
    color: '#06b6d4',
    category: 'web',
  },
  {
    title: { en: 'Soyuzmetall - Metal Products Supplier', ru: 'Союзметалл - Поставщик Металлопродукции' },
    description: { en: 'Corporate website for metal products supplier with multilingual support (Russian/Kazakh), modern animations using Framer Motion, and WhatsApp integration', ru: 'Корпоративный сайт поставщика металлопродукции с поддержкой нескольких языков (русский/казахский), современными анимациями на Framer Motion и интеграцией WhatsApp' },
    tags: ['React', 'TypeScript', 'Framer Motion', 'Supabase', 'i18n'],
    github: 'https://github.com/thisisbeka/soyuzmetall.kz',
    link: 'https://soyuzmetall.kz/',
    color: '#a855f7',
    category: 'web',
  },
];

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <SQLBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <AuroraText
          text={language === 'ru' ? 'ПРОЕКТЫ' : 'PROJECTS'}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-violet mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3" style={{ color: '#3b82f6' }}>
            {language === 'ru' ? 'WEB-РАЗРАБОТКА' : 'WEB-DEV'}
          </h3>
          <div className="h-0.5 w-16 md:w-20 bg-blue-500 mb-6 md:mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} language={language} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3" style={{ color: '#a855f7' }}>
            {language === 'ru' ? 'AI & АНАЛИТИКА ДАННЫХ' : 'AI & DATA ANALYTICS'}
          </h3>
          <div className="h-0.5 w-16 md:w-20 bg-purple-500 mb-6 md:mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {aiProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SQLBackground() {
  const codeSnippets = [
    'SELECT * FROM projects',
    'WHERE status = "completed"',
    'JOIN technologies',
    'ORDER BY impact DESC',
    'INSERT INTO achievements',
    'UPDATE portfolio SET',
    'CREATE TABLE success',
    'ALTER TABLE skills ADD',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-purple-600/10 animate-liquid-shift" />

      <div className="absolute inset-0">
        {codeSnippets.map((code, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs md:text-sm whitespace-nowrap backdrop-blur-xl"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + i * 10}%`,
              color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#a855f7',
              opacity: 0.15,
              animation: `liquid-float ${8 + i * 2}s ease-in-out ${i * 0.5}s infinite`,
              textShadow: `0 0 20px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#a855f7'}`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full backdrop-blur-2xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              width: `${150 + i * 30}px`,
              height: `${150 + i * 30}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3b82f680' : i % 3 === 1 ? '#06b6d480' : '#a855f780'
              }, transparent)`,
              animation: `liquid-blob ${10 + i * 2}s ease-in-out ${i * 0.7}s infinite`,
              filter: 'blur(60px)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes liquid-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes liquid-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.25;
          }
        }

        @keyframes liquid-blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.4;
          }
        }

        .animate-liquid-shift {
          animation: liquid-shift 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}

interface ProjectCardProps {
  project: typeof webProjects[0] | typeof aiProjects[0];
  index: number;
  language: 'en' | 'ru';
}

function ProjectCard({ project, index, language }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        isVisible ? 'animate-reveal' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
        <div className="flex items-start justify-between mb-4 gap-3">
          <h3 className="text-lg md:text-2xl font-bold uppercase tracking-wider" style={{ color: project.color }}>
            {typeof project.title === 'string' ? project.title : project.title[language]}
          </h3>
          <div className="flex gap-3">
            {'github' in project && project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 glass-morphism rounded-lg hover:scale-110 transition-transform duration-300">
                <Github className="w-4 h-4 md:w-5 md:h-5" style={{ color: project.color }} />
              </a>
            )}
            {'link' in project && project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 glass-morphism rounded-lg hover:scale-110 transition-transform duration-300">
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" style={{ color: project.color }} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
          {typeof project.description === 'string' ? project.description : project.description[language]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full glass-morphism text-gray-300 hover:text-white transition-all duration-300"
              style={{
                borderColor: project.color,
                borderWidth: '1px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      <style>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
