import { Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9 10a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v.5z" fill="currentColor" />
      <path d="M9.5 12.5c.5 1 1.5 2 3 2s2.5-1 3-2" />
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
  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <LiquidGlassBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6 glow-violet">
          LET'S CONNECT
        </h2>
        <div className="h-1 w-24 md:w-32 bg-gradient-violet mx-auto mb-8 md:mb-12 rounded-full" />

        <div className="text-center">
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-['IBM_Plex_Sans']">
            <span className="text-[#6C63FF]">&gt;_</span> Ready to build something extraordinary?{' '}
            <span className="text-[#C0C0C0] font-semibold">Let's talk.</span>
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-6 md:mb-8">
            <ContactCard
              icon={<Mail className="w-6 h-6 md:w-8 md:h-8" />}
              label="Email"
              value="bekpasha.dursunov@gmail.com"
              href="mailto:bekpasha.dursunov@gmail.com"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<Phone className="w-6 h-6 md:w-8 md:h-8" />}
              label="Phone"
              value="+7 702 399 7525"
              href="tel:+77023997525"
              color="#6C63FF"
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6 md:w-8 md:h-8" />}
              label="LinkedIn"
              value="thisisbeka"
              href="https://www.linkedin.com/in/thisisbeka"
              color="#C0C0C0"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<Instagram className="w-6 h-6 md:w-8 md:h-8" />}
              label="Instagram"
              value="@thisisbeka"
              href="https://instagram.com/thisisbeka"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />}
              label="WhatsApp"
              value="+7 702 399 7525"
              href="https://wa.me/77023997525"
              color="#C0C0C0"
            />
            <ContactCard
              icon={<Github className="w-6 h-6 md:w-8 md:h-8" />}
              label="GitHub"
              value="thisisbeka"
              href="https://github.com/thisisbeka"
              color="#C0C0C0"
            />
          </div>
        </div>

        <footer className="mt-12 md:mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logo_bek.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 animate-pulse-slow" style={{ filter: 'drop-shadow(0 0 20px rgba(192, 192, 192, 0.5))' }} />
          </div>
          <p className="text-gray-500 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] font-['Rajdhani']">
            <span className="text-[#6C63FF]">&gt;_</span> THISISBEKA 2025<span className="animate-terminal-cursor">█</span>
          </p>
          <style>{`
            @keyframes terminal-cursor {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            .animate-terminal-cursor {
              animation: terminal-cursor 1s infinite;
            }
          `}</style>
        </footer>
      </div>


      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes pulse-glow-slow {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(192, 192, 192, 0.6)) drop-shadow(0 0 60px rgba(108, 99, 255, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(192, 192, 192, 0.8)) drop-shadow(0 0 80px rgba(108, 99, 255, 0.6));
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-slow {
          animation: pulse-glow-slow 3s ease-in-out infinite;
        }
      `}</style>
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
      className="group transition-all duration-300 block text-center"
    >
      <div className="flex justify-center mb-3 md:mb-4" style={{ color }}>
        <div className="w-6 h-6 md:w-8 md:h-8">{icon}</div>
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-2">{label}</div>
      <div className="text-sm md:text-base text-gray-300 font-medium break-words group-hover:text-white transition-colors duration-300">
        {value}
      </div>
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
