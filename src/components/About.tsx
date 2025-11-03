import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="relative pb-16 md:pb-20 px-6 overflow-hidden">
      <CRTTerminalBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <AuroraText
          text={t('about.title')}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-aluminum mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="mb-10 md:mb-16 max-w-4xl mx-auto">
          <div className="retro-code-window">
            <div className="retro-window-header">
              <div className="flex items-center gap-2">
                <div className="retro-window-button" style={{ backgroundColor: '#ff5f56' }}></div>
                <div className="retro-window-button" style={{ backgroundColor: '#ffbd2e' }}></div>
                <div className="retro-window-button" style={{ backgroundColor: '#27c93f' }}></div>
              </div>
              <div className="retro-window-title">developer_query.sql</div>
              <div className="retro-window-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="pixelated">
                  <rect x="6" y="6" width="3" height="3" fill="currentColor"/>
                  <rect x="9" y="6" width="3" height="3" fill="currentColor"/>
                  <rect x="12" y="6" width="3" height="3" fill="currentColor"/>
                  <rect x="15" y="6" width="3" height="3" fill="currentColor"/>
                  <rect x="6" y="9" width="3" height="3" fill="currentColor"/>
                  <rect x="15" y="9" width="3" height="3" fill="currentColor"/>
                  <rect x="6" y="12" width="3" height="3" fill="currentColor"/>
                  <rect x="9" y="12" width="3" height="3" fill="currentColor"/>
                  <rect x="12" y="12" width="3" height="3" fill="currentColor"/>
                  <rect x="15" y="12" width="3" height="3" fill="currentColor"/>
                  <rect x="6" y="15" width="3" height="3" fill="currentColor"/>
                  <rect x="15" y="15" width="3" height="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="retro-window-content">
              <div className="font-mono text-left">
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
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <StatCard
            icon={<TrendingUpIcon />}
            number={4}
            label={t('about.stat1.label')}
            suffix="+"
            color="#EDEDED"
          />
          <StatCard
            icon={<MedalIcon />}
            number={50}
            label={t('about.stat2.label')}
            suffix="+"
            color="#7B61FF"
          />
          <StatCard
            icon={<CustomerIcon />}
            number={100}
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
      <div className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
        <span className="retro-number">[{count}{suffix}]</span>
      </div>
      <div className="text-gray-400 uppercase text-xs md:text-sm tracking-wider">{label}</div>
    </div>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z" fill="currentColor" opacity="0.8"/>
      <path d="M18 34.411C22.078 32.463 23.62 27 23.62 27H12.38s1.542 5.463 5.62 7.411z" fill="currentColor"/>
      <path d="M17.944 5.069c4.106 0 10.948 2.053 10.948 10.948s0 10.948-2.053 10.948c-2.054 0-4.79-2.053-8.896-2.053-4.105 0-6.784 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948.002-8.895 6.844-10.948 10.949-10.948" fill="currentColor" opacity="0.9"/>
      <path d="M9.734 15.717c0-5.834 3.676-10.563 8.21-10.563 4.534 0 8.211 4.729 8.211 10.563 0 5.833-3.677 10.286-8.211 10.286-4.534 0-8.21-4.452-8.21-10.286" fill="currentColor"/>
      <path d="M32.104 3.511l-14-3a.491.491 0 0 0-.209 0l-14 3a.5.5 0 0 0-.032.97l4.944 1.413C8.615 6.489 8.5 7.176 8.5 8c0 2.29 3.285 3.5 9.5 3.5s9.5-1.21 9.5-3.5c0-.824-.115-1.511-.307-2.106l4.945-1.413a.5.5 0 0 0-.034-.97z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 503.607 503.607" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M384.521 192.049l-142.689 41.967L200.704 30.056c-3.357-10.911 4.197-22.662 15.948-22.662h105.757c6.715 0 13.43 4.197 15.948 10.911l56.236 151.921c2.518 9.233-1.679 19.305-10.072 20.823" fill="currentColor" opacity="0.9"/>
      <path d="M252.744 301.164c-18.466 0-33.574-15.108-33.574-33.574s15.108-33.574 33.574-33.574 33.574 15.108 33.574 33.574-15.108 33.574-33.574 33.574zm0-50.361c-9.233 0-16.787 7.554-16.787 16.787s7.554 16.787 16.787 16.787c9.233 0 16.787-7.554 16.787-16.787s-7.554-16.787-16.787-16.787z" fill="currentColor"/>
      <path d="M319.891 393.492c0-55.397-33.574-100.721-75.541-100.721s-75.541 45.325-75.541 100.721 33.574 100.721 75.541 100.721 75.541-44.836 75.541-100.721" fill="currentColor" opacity="0.8"/>
      <path d="M244.35 317.951l16.787 50.36h50.361l-41.967 33.574 16.787 50.361-41.968-25.18-41.967 25.18 16.787-50.361-41.967-33.574h50.36l16.787-50.36z" fill="currentColor"/>
    </svg>
  );
}

function CustomerIcon() {
  return (
    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M304.892 216.838v-29.421H207.11v29.421c0 5.042-3.468 9.421-8.376 10.575l-67.221 15.817c-9.816 2.311-16.754 11.069-16.754 21.153v44.583c0 9.751 7.904 17.655 17.655 17.655h247.172c9.751 0 17.655-7.904 17.655-17.655v-44.583c0-10.083-6.937-18.842-16.753-21.152l-67.221-15.817c-4.908-1.154-8.376-5.533-8.376-10.575z" fill="currentColor" opacity="0.8"/>
      <path d="M185.38 59.756l4.734 104.146c.442 9.729 5.213 18.752 13.004 24.595l22.462 16.846c5.642 4.232 12.504 6.519 19.556 6.519h21.729c7.052 0 13.914-2.287 19.556-6.519l22.462-16.846c7.791-5.844 12.562-14.866 13.004-24.595l4.734-104.146H185.38z" fill="currentColor"/>
      <path d="M174.515 54.324v5.432l5.432 59.756h10.865l10.865-32.594s70.621 0 108.648-21.729l10.865 54.324h10.865l5.432-59.756v-5.432C337.485 24.321 313.164 0 283.162 0h-54.324c-30.002 0-54.323 24.321-54.323 54.324z" fill="currentColor" opacity="0.9"/>
    </svg>
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
