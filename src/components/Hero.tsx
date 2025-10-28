import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AuroraText } from './ui/aurora-text';

export default function Hero() {
  const [text, setText] = useState('');
  const { t } = useLanguage();
  const fullText = t('hero.subtitle');
  const [isComplete, setIsComplete] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    setText('');
    setIsComplete(false);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <RetroGrid />

      <div className="relative z-10 text-center px-6 max-w-5xl -mt-20 md:-mt-32">
        <div className="mb-8 md:mb-6 animate-fade-in">
          <img
            src="/logo_bek.png"
            alt="THISISBEKA Logo"
            className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-6 md:mb-4 animate-breathe"
            style={{ filter: 'brightness(1.2)' }}
          />
        </div>

        <AuroraText
          text={t('hero.title')}
          className="text-4xl sm:text-6xl md:text-6xl font-bold mb-6 md:mb-8 tracking-[0.15em] md:tracking-[0.2em]"
        />

        <div className="min-h-[80px] md:min-h-[100px] flex items-center justify-center mb-8 md:mb-12">
          <div className="glass-morphism px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-lg crt-effect">
            <p className="text-lg sm:text-xl md:text-3xl text-[#C0C0C0] font-light tracking-wider font-['IBM_Plex_Sans']">
              <span className="text-[#6C63FF]">&gt;_</span> {text}<span className="animate-terminal-blink opacity-40">|</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
          <a
            href="https://github.com/thisisbeka"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 md:px-8 py-3 md:py-4 glass-morphism rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 crt-effect"
          >
            <span className="relative z-10 text-[#C0C0C0] font-semibold tracking-wider font-['Rajdhani'] text-sm md:text-base">
              {t('hero.projects')}
            </span>
            <div className="absolute inset-0 bg-gradient-aluminum opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          <button
            onClick={() => setShowContactModal(true)}
            className="group relative px-6 md:px-8 py-3 md:py-4 glass-morphism rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 crt-effect"
          >
            <span className="relative z-10 text-[#6C63FF] font-semibold tracking-wider font-['Rajdhani'] text-sm md:text-base">
              {t('hero.contact')}
            </span>
            <div className="absolute inset-0 bg-gradient-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}

      <style>{`
        @keyframes terminal-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-terminal-blink {
          animation: terminal-blink 1s infinite;
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function RetroGrid() {
  const codeSnippets = [
    'const AI = () => {}',
    'function analyze(data)',
    'import { ML }',
    'neural.network()',
    'async predict()',
    'class DataModel',
    'export default',
    'return result',
    'if (condition)',
    'for (let i = 0)',
    'map(item => {})',
    'filter(data)',
    'reduce(acc)',
    'await fetch()',
    'try { catch }',
    'switch (case)',
    'console.log()',
    'useState()',
    'useEffect()',
    '=> { return }',
  ];

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 retro-grid opacity-30" style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}>
        <div
          className="absolute inset-0 retro-grid"
          style={{
            transform: 'rotateX(60deg) translateZ(-500px)',
            transformOrigin: 'center bottom',
            background: 'linear-gradient(180deg, transparent 0%, rgba(192, 192, 192, 0.1) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs md:text-sm whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 3 === 0 ? '#C0C0C0' : i % 3 === 1 ? '#6C63FF' : '#8B82FF',
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float-code ${Math.random() * 20 + 15}s linear ${Math.random() * 5}s infinite`,
              textShadow: '0 0 10px rgba(192, 192, 192, 0.3)',
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/30 to-transparent animate-scan-line" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent animate-scan-line-delayed" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/30 to-transparent animate-scan-line-delayed-2" />
      </div>

      <style>{`
        @keyframes float-code {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }

        @keyframes scan-line {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(50vh);
            opacity: 0.6;
          }
        }

        @keyframes scan-line-delayed {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(40vh);
            opacity: 0.5;
          }
        }

        @keyframes scan-line-delayed-2 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(30vh);
            opacity: 0.4;
          }
        }

        .animate-scan-line {
          animation: scan-line 8s ease-in-out infinite;
        }

        .animate-scan-line-delayed {
          animation: scan-line-delayed 10s ease-in-out 2s infinite;
        }

        .animate-scan-line-delayed-2 {
          animation: scan-line-delayed-2 12s ease-in-out 4s infinite;
        }
      `}</style>
    </div>
  );
}

interface ContactModalProps {
  onClose: () => void;
}

function ContactModal({ onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/77023997525?text=${whatsappMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md glass-morphism rounded-2xl p-6 md:p-8 border border-[#C0C0C0]/20 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#6C63FF] font-mono">&gt;_</span>
            <h3 className="text-xl md:text-2xl font-bold text-[#C0C0C0] font-['Rajdhani']">
              {t('modal.title')}
            </h3>
          </div>
          <p className="text-sm text-gray-400 font-mono">{t('modal.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-mono">
              <span className="text-[#6C63FF]">const</span> {t('modal.name')} <span className="text-[#C0C0C0]">=</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-[#C0C0C0]/20 rounded-lg text-white focus:outline-none focus:border-[#6C63FF] transition-colors duration-300 font-mono"
              placeholder={t('modal.placeholder.name')}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 font-mono">
              <span className="text-[#6C63FF]">const</span> {t('modal.email')} <span className="text-[#C0C0C0]">=</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-[#C0C0C0]/20 rounded-lg text-white focus:outline-none focus:border-[#6C63FF] transition-colors duration-300 font-mono"
              placeholder={t('modal.placeholder.email')}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 font-mono">
              <span className="text-[#6C63FF]">const</span> {t('modal.message')} <span className="text-[#C0C0C0]">=</span>
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-black/50 border border-[#C0C0C0]/20 rounded-lg text-white focus:outline-none focus:border-[#6C63FF] transition-colors duration-300 font-mono resize-none"
              placeholder={t('modal.placeholder.message')}
            />
          </div>

          <button
            type="submit"
            className="group relative w-full px-4 py-2.5 bg-black border-2 border-[#6C63FF] text-[#6C63FF] font-bold hover:bg-[#6C63FF] hover:text-black transition-all duration-300 font-mono tracking-wider text-sm uppercase overflow-hidden retro-button"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-xs">[</span>
              {t('modal.submit')}
              <span className="text-xs">]</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
            </span>
            <div className="absolute inset-0 bg-[#6C63FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent animate-scan-horizontal" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent animate-scan-horizontal-delayed" />
          </button>
        </form>

        <style>{`
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scan-horizontal {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes scan-horizontal-delayed {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(-100%);
              opacity: 0;
            }
          }

          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }

          .animate-scan-horizontal {
            animation: scan-horizontal 3s ease-in-out infinite;
          }

          .animate-scan-horizontal-delayed {
            animation: scan-horizontal-delayed 3s ease-in-out 1.5s infinite;
          }

          .retro-button {
            box-shadow:
              0 0 5px rgba(108, 99, 255, 0.3),
              inset 0 0 5px rgba(108, 99, 255, 0.1);
          }

          .retro-button:hover {
            box-shadow:
              0 0 15px rgba(108, 99, 255, 0.6),
              0 0 30px rgba(108, 99, 255, 0.3),
              inset 0 0 10px rgba(108, 99, 255, 0.2);
          }
        `}</style>
      </div>
    </div>
  );
}
