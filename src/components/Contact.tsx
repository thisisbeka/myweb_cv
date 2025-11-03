import { Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const floatingBubbles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 60 + 40,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <LiquidGlassBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <AuroraText
          text={t('contact.title')}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6"
        />
        <div className="h-1 w-24 md:w-32 bg-gradient-violet mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="text-center">
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-['IBM_Plex_Sans']">
            <span className="text-[#6C63FF]">&gt;_</span> {t('contact.subtitle')}{' '}
            <span className="text-[#C0C0C0] font-semibold">{t('contact.cta')}</span>
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-6 md:mb-8">
            <ContactCard
              icon={<Mail className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.email.label')}
              value="bekpasha.dursunov@gmail.com"
              href="mailto:bekpasha.dursunov@gmail.com"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<Phone className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.phone.label')}
              value="+7 702 399 7525"
              href="tel:+77023997525"
              color="#6C63FF"
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.linkedin.label')}
              value="thisisbeka"
              href="https://www.linkedin.com/in/thisisbeka"
              color="#C0C0C0"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<Instagram className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.instagram.label')}
              value="@thisisbeka"
              href="https://instagram.com/thisisbeka"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.whatsapp.label')}
              value="+7 702 399 7525"
              href="https://wa.me/77023997525"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<Github className="w-6 h-6 md:w-8 md:h-8" />}
              label={t('contact.github.label')}
              value="thisisbeka"
              href="https://github.com/thisisbeka"
              color="#C0C0C0"
            />
          </div>
        </div>

        <footer className="mt-12 md:mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logo_bek.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14 animate-breathe-slow" />
          </div>
          <p className="text-gray-500 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] font-['Rajdhani']">
            <span className="text-[#6C63FF]">&gt;_</span> THISISBEKA 2025<span className="animate-terminal-cursor">█</span>
          </p>
          <style>{`
            @keyframes terminal-cursor {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            @keyframes breathe-slow {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            .animate-terminal-cursor {
              animation: terminal-cursor 1s infinite;
            }
            .animate-breathe-slow {
              animation: breathe-slow 4s ease-in-out infinite;
            }
          `}</style>
        </footer>
      </div>


    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

function ContactCard({ icon, label, value, href, color }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group transition-all duration-300 flex flex-col items-center"
    >
      <div className="flex justify-center items-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color }}>
        <div className="w-12 h-12 md:w-16 md:h-16">{icon}</div>
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center">{label}</div>
    </a>
  );
}

function LiquidGlassBackground() {
  const codeSnippets = [
    'const connect = async () => {',
    '  await collaborate();',
    '};',
    'function innovate()',
    'return success;',
    'export { ideas }',
    'import creativity',
    'let partnership',
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
