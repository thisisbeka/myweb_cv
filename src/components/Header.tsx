import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LeverSwitch } from './ui/lever-switch';

const navItems = [
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.experience', href: '#experience' },
  { labelKey: 'nav.skills', href: '#skills' },
  { labelKey: 'nav.projects', href: '#projects' },
  { labelKey: 'nav.education', href: '#education' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            <div className="flex items-center gap-3 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/logo_bek.png"
                alt="THISISBEKA"
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(192, 192, 192, 0.5)) drop-shadow(0 0 30px rgba(108, 99, 255, 0.3))',
                }}
              />
              <div className="hidden sm:block whitespace-nowrap">
                <div className="text-lg md:text-xl font-bold text-[#C0C0C0] tracking-[0.2em] font-['Orbitron']">
                  THISISBEKA
                </div>
                <div className="text-xs text-[#6C63FF] font-['Rajdhani'] tracking-wider">
                  <span>&gt;_</span> AI DEVELOPER
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.labelKey}
                  onClick={() => scrollToSection(item.href)}
                  className="btn-retro group relative text-[#C0C0C0] hover:text-white transition-colors duration-300 font-['Rajdhani'] text-[0.7rem] lg:text-xs xl:text-sm tracking-wide border border-white/20 px-2 lg:px-3 py-2 uppercase whitespace-nowrap"
                >
                  <span className="relative z-10">{t(item.labelKey)}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <LeverSwitch
                checked={language === 'ru'}
                onToggle={toggleLanguage}
                leftLabel="EN"
                rightLabel="RU"
              />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:scale-105 transition-transform duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#C0C0C0]" />
                ) : (
                  <div className="text-[#C0C0C0] font-mono text-xl font-bold">&lt;/&gt;</div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-4 mb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.labelKey}
                  onClick={() => scrollToSection(item.href)}
                  className="btn-retro-mobile group relative px-6 py-3 text-left text-[#C0C0C0] hover:text-white transition-all duration-300 font-['Rajdhani'] tracking-wider border border-white/20 uppercase text-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-[#6C63FF] mr-2">&gt;_</span>
                  {t(item.labelKey)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20" />

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes retroHover {
          0%, 100% { box-shadow: 0 0 0 1px #7B61FF; }
          50% { box-shadow: 0 0 8px 2px #7B61FF; }
        }

        .btn-retro:hover {
          animation: retroHover 0.8s infinite alternate;
          border-color: #7B61FF;
        }

        .btn-retro-mobile:hover {
          animation: retroHover 0.8s infinite alternate;
          border-color: #7B61FF;
        }
      `}</style>
    </>
  );
}
