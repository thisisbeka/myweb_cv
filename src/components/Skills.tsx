import { Code2, Brain, Database, Cloud, BarChart3, Box } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';

const skillCategories = [
  {
    category: 'Programming',
    icon: <Code2 className="w-8 h-8" />,
    skills: ['Python', 'R', 'SQL', 'JavaScript', 'C++'],
    color: '#C0C0C0',
    proficiency: 95,
  },
  {
    category: 'Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    skills: ['NLP', 'LLM Fine-tuning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
    color: '#6C63FF',
    proficiency: 90,
  },
  {
    category: 'Data Analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    skills: ['Power BI', 'Tableau', 'Excel', 'Statistical Analysis', 'ETL'],
    color: '#C0C0C0',
    proficiency: 92,
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-8 h-8" />,
    skills: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    color: '#6C63FF',
    proficiency: 85,
  },
  {
    category: 'Databases',
    icon: <Database className="w-8 h-8" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Databricks', 'BigQuery'],
    color: '#C0C0C0',
    proficiency: 88,
  },
  {
    category: 'Frameworks',
    icon: <Box className="w-8 h-8" />,
    skills: ['React', 'FastAPI', 'Flask', 'Streamlit', 'LangChain'],
    color: '#6C63FF',
    proficiency: 87,
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <BinaryMatrixBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <AuroraText
          text={t('nav.skills')}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-aluminum mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BinaryMatrixBackground() {
  const columns = 30;
  const binaryStrings = Array.from({ length: columns }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    left: (i / columns) * 100,
  }));

  const generateBinary = () => {
    return Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  return (
    <div className="absolute inset-0 pointer-events-none opacity-15">
      <div className="absolute inset-0 overflow-hidden">
        {binaryStrings.map((col) => (
          <div
            key={col.id}
            className="absolute font-mono text-xs md:text-sm"
            style={{
              left: `${col.left}%`,
              top: '-20%',
              color: '#00ff00',
              textShadow: '0 0 8px rgba(0, 255, 0, 0.8)',
              animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
              writingMode: 'vertical-rl',
              letterSpacing: '0.5em',
            }}
          >
            {generateBinary()}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 font-mono text-green-500/60 text-xs md:text-sm">
        C:\SKILLS&gt; _
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-green-500/20 text-6xl md:text-8xl font-bold">
        01
      </div>

      <style>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = category.proficiency;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setProgress(end);
        clearInterval(timer);
      } else {
        setProgress(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, category.proficiency]);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        isVisible ? 'animate-fade-scale' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div style={{ color: category.color }} className="w-6 h-6 md:w-8 md:h-8">{category.icon}</div>
          <div className="text-2xl md:text-3xl font-bold" style={{ color: category.color }}>
            {progress}%
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-wider" style={{ color: category.color }}>
          {category.category}
        </h3>

        <div className="mb-3 md:mb-4 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
            style={{
              width: `${progress}%`,
              backgroundColor: category.color,
            }}
          >
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 md:px-3 py-1 text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

      <style>{`
        @keyframes fade-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-fade-scale {
          animation: fade-scale 0.6s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
