import { Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';
import { RetroBriefcase } from './ui/retro-icons';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('experience.job1.company'),
      role: t('experience.job1.role'),
      period: t('experience.job1.period'),
      description: t('experience.job1.description'),
      color: '#C0C0C0',
    },
    {
      company: t('experience.job2.company'),
      role: t('experience.job2.role'),
      period: t('experience.job2.period'),
      description: t('experience.job2.description'),
      color: '#6C63FF',
    },
    {
      company: t('experience.job3.company'),
      role: t('experience.job3.role'),
      period: t('experience.job3.period'),
      description: t('experience.job3.description'),
      color: '#C0C0C0',
    },
    {
      company: t('experience.job4.company'),
      role: t('experience.job4.role'),
      period: t('experience.job4.period'),
      description: t('experience.job4.description'),
      color: '#6C63FF',
    },
  ];

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <JavaCodeBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <AuroraText
          text={t('nav.experience')}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-violet mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C0C0C0] via-[#6C63FF] to-[#C0C0C0] hidden md:block" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JavaCodeBackground() {
  const javaSnippets = [
    'public class Experience {',
    '  private int years = <span class="retro-number">4</span>;',
    '  @Override',
    '  public void develop() {',
    '    System.out.println("AI");',
    '  }',
    '  // TODO: Innovate',
    '  protected String role;',
    '  import java.util.*;',
    '  extends Developer',
    '  implements Innovation',
    '}',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute inset-0 overflow-hidden">
        {javaSnippets.map((line, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs md:text-sm whitespace-nowrap"
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + i * 7}%`,
              color: i.toString().includes('public') || line.includes('class') || line.includes('@') ? '#ff7b00' :
                     line.includes('//') ? '#6a9955' :
                     line.includes('import') || line.includes('extends') || line.includes('implements') ? '#c586c0' :
                     '#d4d4d4',
              animation: `java-fade ${3 + i * 0.5}s ease-in-out ${i * 0.2}s infinite`,
              textShadow: '0 0 5px rgba(212, 212, 212, 0.3)',
            }}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-8 h-full border-r border-orange-500/20"
           style={{ background: 'linear-gradient(90deg, rgba(255,123,0,0.05), transparent)' }} />

      <div className="absolute top-4 right-4 font-mono text-orange-500/40 text-xs">
        /* Experience.java */
      </div>

      <style>{`
        @keyframes java-fade {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-8 items-center ${
        isVisible ? 'animate-slide-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {isEven ? (
        <>
          <div className="md:text-right">
            <ExperienceContent experience={experience} />
          </div>
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          <div>
            <ExperienceContent experience={experience} />
          </div>
        </>
      )}

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <div
          className="w-6 h-6 rounded-full animate-pulse-ring"
          style={{ backgroundColor: experience.color }}
        />
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0px ${experience.color}80;
          }
          100% {
            box-shadow: 0 0 0 20px ${experience.color}00;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

function ExperienceContent({ experience }: { experience: typeof experiences[0] }) {
  return (
    <div className="group transition-all duration-300">
      <div className="flex items-center gap-2 md:gap-3 mb-3">
        <RetroBriefcase className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" color={experience.color} />
        <h3 className="text-lg md:text-2xl font-bold break-words" style={{ color: experience.color }}>
          {experience.company}
        </h3>
      </div>

      <h4 className="text-base md:text-xl text-gray-300 mb-3 font-semibold">{experience.role}</h4>

      <div className="flex items-center gap-2 mb-4 text-gray-400">
        <Calendar className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: experience.period.replace(/(\d+)/g, '<span class="retro-number">$1</span>') }} />
      </div>

      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{experience.description}</p>
    </div>
  );
}
