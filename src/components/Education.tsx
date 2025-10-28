import { GraduationCap, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Education() {
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

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <ASCIIArtBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6 glow-aluminum">
          EDUCATION
        </h2>
        <div className="h-1 w-24 md:w-32 bg-gradient-aluminum mx-auto mb-8 md:mb-12 rounded-full" />

        <div
          ref={ref}
          className={`group ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6">
              <div className="p-3 md:p-4 rounded-full bg-gradient-aluminum/20">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#C0C0C0]" />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-[#C0C0C0] uppercase tracking-wider">
                  Bachelor of Computer Science
                </h3>
                <p className="text-gray-400 text-base md:text-lg mt-1">2017 – 2022</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 mb-6">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#6C63FF]" />
              <p className="text-base md:text-xl text-gray-300">
                <span className="font-semibold text-[#6C63FF]">Innopolis University</span>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-gray-400">Russia</span>
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Specialized in <span className="text-[#C0C0C0] font-semibold">Artificial Intelligence</span>,{' '}
                <span className="text-[#6C63FF] font-semibold">Machine Learning</span>, and{' '}
                <span className="text-[#C0C0C0] font-semibold">Data Science</span>. Completed advanced coursework in
                NLP, Deep Learning, and Software Engineering.
              </p>
            </div>

          <style>{`
            @keyframes slide-up {
              from {
                opacity: 0;
                transform: translateY(60px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes flow {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .animate-slide-up {
              animation: slide-up 1s ease-out forwards;
            }

            .animate-flow {
              animation: flow 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function ASCIIArtBackground() {
  const codeSnippets = [
    '#include <life.h>',
    '#include <knowledge.h>',
    '// Learning never stops',
    'int main() {',
    '  Education edu;',
    '  while(true) {',
    '    edu.learn();',
    '    edu.grow();',
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
