import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';
import { RetroArrowUp, RetroMedal, RetroCode } from './ui/retro-icons';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <CRTTerminalBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <AuroraText
          text={t('about.title')}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-aluminum mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="mb-10 md:mb-16 max-w-4xl mx-auto">
          <div className="font-mono text-left px-4">
            <div className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed space-y-2">
              <div>
                <span className="text-[#6C63FF]">SELECT</span>{' '}
                <span className="text-[#C0C0C0]">*</span>
              </div>
              <div>
                <span className="text-[#6C63FF]">FROM</span>{' '}
                <span className="text-white">developers</span>
              </div>
              <div>
                <span className="text-[#6C63FF]">WHERE</span>
              </div>
              <div className="pl-4">
                <span className="text-white">expertise</span>{' '}
                <span className="text-[#C0C0C0]">IN</span>{' '}
                <span className="text-[#00ff41]">(</span>
                <span className="text-[#FFD700]">'AI Chatbots'</span>
                <span className="text-[#C0C0C0]">,</span>{' '}
                <span className="text-[#FFD700]">'NLP'</span>
                <span className="text-[#C0C0C0]">,</span>{' '}
                <span className="text-[#FFD700]">'Data Analytics'</span>
                <span className="text-[#00ff41]">)</span>
              </div>
              <div className="pl-4">
                <span className="text-[#6C63FF]">AND</span>{' '}
                <span className="text-white">skills</span>{' '}
                <span className="text-[#C0C0C0]">LIKE</span>{' '}
                <span className="text-[#FFD700]">'%ML Model Deployment%'</span>
              </div>
              <div className="pl-4">
                <span className="text-[#6C63FF]">AND</span>{' '}
                <span className="text-white">experience_years</span>{' '}
                <span className="text-[#C0C0C0]">&gt;=</span>{' '}
                <span className="text-[#00ff41]">4</span>
              </div>
              <div>
                <span className="text-[#6C63FF]">ORDER BY</span>{' '}
                <span className="text-white">passion</span>{' '}
                <span className="text-[#6C63FF]">DESC</span>
                <span className="text-[#C0C0C0]">;</span>
              </div>
              <div className="mt-4 text-[#00ff41] text-xs md:text-sm">
                <span className="text-gray-500">-- Query returned 1 row</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <StatCard
            icon={<RetroArrowUp className="w-8 h-8 md:w-10 md:h-10" color="#EDEDED" />}
            number={4}
            label={t('about.stat1.label')}
            suffix="+"
            color="#EDEDED"
          />
          <StatCard
            icon={<RetroMedal className="w-8 h-8 md:w-10 md:h-10" color="#7B61FF" />}
            number={50}
            label={t('about.stat2.label')}
            suffix="+"
            color="#7B61FF"
          />
          <StatCard
            icon={<RetroCode className="w-8 h-8 md:w-10 md:h-10" color="#EDEDED" />}
            number={15}
            label={t('about.stat3.label')}
            suffix="+"
            color="#EDEDED"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  color: string;
}

function StatCard({ icon, number, label, suffix = '', color }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group transition-all duration-300">
      <div className="flex justify-center mb-3 md:mb-4" style={{ color }}>
        <div className="w-8 h-8 md:w-10 md:h-10">{icon}</div>
      </div>
      <div className="flex justify-center mb-2 md:mb-3">
        <div
          className="px-3 py-2 md:px-4 md:py-2 bg-black/60 border-2 rounded"
          style={{
            borderColor: color,
            boxShadow: `0 0 15px ${color}60, inset 0 0 10px ${color}20`
          }}
        >
          <div
            className="text-2xl md:text-3xl font-bold font-mono"
            style={{
              color,
              textShadow: `0 0 10px ${color}, 0 0 20px ${color}80`,
              fontFamily: "'Courier New', 'Consolas', monospace",
              letterSpacing: '0.15em'
            }}
          >
            [{count}{suffix}]
          </div>
        </div>
      </div>
      <div className="text-gray-400 uppercase text-xs md:text-sm tracking-wider">{label}</div>
    </div>
  );
}

function CRTTerminalBackground() {
  const terminalLines = [
    '> SYSTEM INITIALIZED...',
    '> LOADING PROFILE DATA...',
    '> AI_DEVELOPER.EXE',
    '> ANALYZING EXPERIENCE...',
    '> STATUS: OPERATIONAL',
    '> READY_',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,255,0,0.03) 3px)',
        animation: 'crt-flicker 0.15s infinite alternate',
      }} />

      <div className="absolute inset-0 overflow-hidden">
        {terminalLines.map((line, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs md:text-sm"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${15 + i * 12}%`,
              color: '#00ff41',
              textShadow: '0 0 10px rgba(0, 255, 65, 0.7), 0 0 20px rgba(0, 255, 65, 0.5)',
              animation: `terminal-typing ${2 + i * 0.5}s ease-out ${i * 0.3}s infinite`,
              opacity: 0.6,
            }}
          >
            {line}
          </div>
        ))}
      </div>

      <div
        className="absolute w-full h-0.5 bg-green-500/30"
        style={{
          top: '50%',
          animation: 'scan-horizontal 3s linear infinite',
          boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
        }}
      />

      <div className="absolute bottom-10 right-10 font-mono text-green-500 text-xs md:text-sm animate-pulse">
        _
      </div>

      <style>{`
        @keyframes crt-flicker {
          0%, 100% { opacity: 0.95; }
          50% { opacity: 0.85; }
        }

        @keyframes terminal-typing {
          0%, 90%, 100% { opacity: 0.6; }
          45% { opacity: 0.9; }
        }

        @keyframes scan-horizontal {
          0% { transform: translateY(-100vh); opacity: 0; }
          10%, 90% { opacity: 0.3; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
