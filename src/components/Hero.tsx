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

      <div className="relative z-10 text-center px-6 max-w-6xl -mt-20 md:-mt-32">
        <div className="mb-8 md:mb-6 animate-fade-in relative">
          <div className="absolute inset-0 animate-holo-ring" />
          <div className="absolute inset-0 animate-holo-ring-delayed" />
          <div className="relative holographic-frame">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00ff41]/20 via-[#C0C0C0]/20 to-[#6C63FF]/20 blur-2xl animate-pulse-slow" />
            <img
              src="/logo_bek.png"
              alt="THISISBEKA Logo"
              className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-6 md:mb-4 animate-breathe relative z-10"
              style={{
                filter: 'brightness(1.3) contrast(1.1) drop-shadow(0 0 40px rgba(192, 192, 192, 0.5))'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -inset-4 border-2 border-[#C0C0C0]/30 retro-corners animate-corner-glow" />
          </div>
        </div>

        <div className="relative mb-6 md:mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6C63FF]/20 via-[#00ff41]/20 to-[#C0C0C0]/20 blur-3xl animate-color-shift" />
          <AuroraText
            text={t('hero.title')}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] md:tracking-[0.25em] relative z-10 retro-chrome-text"
          />
          <div className="absolute inset-0 retro-scan-effect pointer-events-none" />
        </div>

        <div className="min-h-[80px] md:min-h-[120px] flex items-center justify-center mb-8 md:mb-12">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff41] via-[#6C63FF] to-[#C0C0C0] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-tilt" />
            <div className="relative glass-morphism px-6 sm:px-8 md:px-12 py-5 md:py-8 rounded-xl crt-effect border-2 border-[#00ff41]/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 via-transparent to-[#6C63FF]/5 rounded-xl" />
              <p className="text-xl sm:text-2xl md:text-4xl text-[#C0C0C0] font-light tracking-wider font-['IBM_Plex_Sans'] relative z-10">
                <span className="text-[#00ff41] neon-text-green font-bold">&gt;_</span>
                <span className="inline-block ml-2">{text}</span>
                <span className="animate-terminal-blink opacity-60 neon-text-green">█</span>
              </p>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff41]/60 to-transparent animate-scan-top" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6C63FF]/60 to-transparent animate-scan-bottom" />
            </div>
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 justify-center flex-wrap">
          <a
            href="https://github.com/thisisbeka"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C0C0C0] to-[#00ff41] rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500 animate-tilt" />
            <div className="relative px-8 md:px-12 py-4 md:py-5 glass-morphism rounded-xl overflow-hidden border-2 border-[#C0C0C0]/40 backdrop-blur-xl group-hover:border-[#00ff41]/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-[#C0C0C0] font-bold tracking-[0.2em] font-['Rajdhani'] text-base md:text-lg uppercase group-hover:text-[#00ff41] transition-colors duration-300 flex items-center gap-2">
                <span className="text-2xl">◢</span>
                {t('hero.projects')}
                <span className="text-2xl">◣</span>
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C0C0C0] to-[#00ff41] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </a>
          <button
            onClick={() => setShowContactModal(true)}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] via-[#00ff41] to-[#6C63FF] rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-tilt" />
            <div className="relative px-8 md:px-12 py-4 md:py-5 glass-morphism rounded-xl overflow-hidden border-2 border-[#6C63FF]/50 backdrop-blur-xl group-hover:border-[#00ff41]/70 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-[#6C63FF] font-bold tracking-[0.2em] font-['Rajdhani'] text-base md:text-lg uppercase neon-text-violet group-hover:text-[#00ff41] transition-colors duration-300 flex items-center gap-2">
                <span className="text-2xl">◢</span>
                {t('hero.contact')}
                <span className="text-2xl">◣</span>
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6C63FF] via-[#00ff41] to-[#6C63FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="absolute inset-0 retro-glitch-effect opacity-0 group-hover:opacity-30 pointer-events-none" />
            </div>
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
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(1deg); }
          50% { transform: scale(1.08) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-1deg); }
        }

        @keyframes holo-ring {
          0% { transform: scale(0.95); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes color-shift {
          0%, 100% { opacity: 0.3; filter: hue-rotate(0deg); }
          50% { opacity: 0.6; filter: hue-rotate(30deg); }
        }

        @keyframes tilt {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        @keyframes scan-top {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes scan-bottom {
          0% { transform: translateX(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        .animate-terminal-blink {
          animation: terminal-blink 0.8s infinite;
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        .animate-holo-ring {
          position: absolute;
          inset: -20px;
          border: 2px solid #00ff41;
          border-radius: 50%;
          animation: holo-ring 3s ease-out infinite;
        }

        .animate-holo-ring-delayed {
          position: absolute;
          inset: -20px;
          border: 2px solid #6C63FF;
          border-radius: 50%;
          animation: holo-ring 3s ease-out 1.5s infinite;
        }

        .animate-corner-glow {
          animation: corner-glow 2s ease-in-out infinite;
        }

        .animate-color-shift {
          animation: color-shift 8s ease-in-out infinite;
        }

        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-scan-top {
          animation: scan-top 3s ease-in-out infinite;
        }

        .animate-scan-bottom {
          animation: scan-bottom 3s ease-in-out 1.5s infinite;
        }

        .retro-corners {
          clip-path: polygon(
            0 0, 20px 0, 20px 2px, 2px 2px, 2px 20px, 0 20px,
            0 100%, 20px 100%, 20px calc(100% - 2px), 2px calc(100% - 2px), 2px calc(100% - 20px), 0 calc(100% - 20px),
            100% calc(100% - 0), calc(100% - 20px) 100%, calc(100% - 20px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 20px), 100% calc(100% - 20px),
            100% 0, calc(100% - 20px) 0, calc(100% - 20px) 2px, calc(100% - 2px) 2px, calc(100% - 2px) 20px, 100% 20px
          );
        }

        .holographic-frame {
          position: relative;
        }

        .retro-chrome-text {
          background: linear-gradient(to bottom, #ffffff 0%, #C0C0C0 40%, #00ff41 70%, #6C63FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 30px rgba(0, 255, 65, 0.5)) drop-shadow(0 0 60px rgba(108, 99, 255, 0.3));
        }

        .retro-scan-effect {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.03) 2px,
            rgba(0, 255, 65, 0.03) 4px
          );
        }

        .neon-text-green {
          text-shadow:
            0 0 5px #00ff41,
            0 0 10px #00ff41,
            0 0 20px #00ff41,
            0 0 40px #00ff41;
        }

        .neon-text-violet {
          text-shadow:
            0 0 5px #6C63FF,
            0 0 10px #6C63FF,
            0 0 20px #6C63FF,
            0 0 40px #6C63FF;
        }

        .retro-glitch-effect {
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.1) 2px,
            rgba(0, 255, 65, 0.1) 4px
          );
        }
      `}</style>
    </section>
  );
}

function RetroGrid() {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, color: string}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      color: ['#00ff41', '#6C63FF', '#C0C0C0'][Math.floor(Math.random() * 3)]
    }));
    setParticles(newParticles);
  }, []);

  const codeSnippets = [
    '> INITIALIZING NEURAL NETWORK...',
    '> AI.MATRIX.LOAD()',
    '> QUANTUM_COMPUTE()',
    '> BLOCKCHAIN_VERIFY()',
    '> ML_ALGORITHM.EXECUTE()',
    '> DATA_STREAM.ACTIVE',
    '> CYBERSECURITY.SCAN()',
    '> DEEP_LEARNING.OPTIMIZE()',
    '> PREDICTIVE_ANALYTICS()',
    '> CLOUD_SYNC.ONLINE',
    '> EDGE_COMPUTING.RUN()',
    '> API.QUANTUM.CONNECT()',
    '> NEURAL.PROCESS.COMPLETE',
    '> REAL_TIME.ANALYTICS()',
    '> CRYPTO.SECURE.HASH()',
    '> BIG_DATA.PIPELINE()',
    '> TENSOR_FLOW.ACTIVE',
    '> AUTONOMOUS.AI.READY',
    '> DISTRIBUTED_SYSTEM.OK',
    '> HYPER_CONVERGED.SYNC',
  ];

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 retro-grid opacity-40" style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}>
        <div
          className="absolute inset-0 retro-grid"
          style={{
            transform: 'rotateX(65deg) translateZ(-600px)',
            transformOrigin: 'center bottom',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 255, 65, 0.15) 40%, rgba(108, 99, 255, 0.15) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            transform: 'rotateX(65deg) translateZ(-600px)',
            transformOrigin: 'center bottom',
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
              animation: `float-particle ${15 / particle.speed}s linear ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, i) => {
          const colors = ['#00ff41', '#6C63FF', '#C0C0C0'];
          const color = colors[i % 3];
          return (
            <div
              key={i}
              className="absolute font-mono text-xs md:text-sm whitespace-nowrap font-bold tracking-wider"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: color,
                opacity: Math.random() * 0.4 + 0.2,
                animation: `float-code ${Math.random() * 25 + 20}s linear ${Math.random() * 8}s infinite`,
                textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
                filter: 'blur(0.3px)',
              }}
            >
              {code}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff41]/50 to-transparent animate-scan-line" style={{ boxShadow: '0 0 20px #00ff41' }} />
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent animate-scan-line-delayed" style={{ boxShadow: '0 0 20px #6C63FF' }} />
          <div className="absolute top-3/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-transparent animate-scan-line-delayed-2" style={{ boxShadow: '0 0 20px #C0C0C0' }} />
        </div>

        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#00ff41]/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#6C63FF]/30 animate-spin-slow" style={{ animationDuration: '25s', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-[#C0C0C0]/30 animate-spin-slow" style={{ animationDuration: '30s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
      </div>

      <style>{`
        @keyframes float-code {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes scan-line {
          0%, 100% {
            transform: translateY(-20vh);
            opacity: 0;
          }
          50% {
            transform: translateY(60vh);
            opacity: 1;
          }
        }

        @keyframes scan-line-delayed {
          0%, 100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
          50% {
            transform: translateY(50vh);
            opacity: 1;
          }
        }

        @keyframes scan-line-delayed-2 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(40vh);
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-scan-line {
          animation: scan-line 6s ease-in-out infinite;
        }

        .animate-scan-line-delayed {
          animation: scan-line-delayed 8s ease-in-out 2s infinite;
        }

        .animate-scan-line-delayed-2 {
          animation: scan-line-delayed-2 10s ease-in-out 4s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float-particle {
          animation: float-particle 15s linear infinite;
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
