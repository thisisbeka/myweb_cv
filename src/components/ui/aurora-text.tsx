import React, { useEffect, useRef } from 'react';

interface AuroraTextProps {
  text: string;
  className?: string;
}

export const AuroraText: React.FC<AuroraTextProps> = ({ text, className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const auroraTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stars = starsRef.current;
    const auroraText = auroraTextRef.current;

    if (!hero || !stars || !auroraText) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = hero;

      const x = (clientX / offsetWidth - 0.5) * 2;
      const y = (clientY / offsetHeight - 0.5) * 2;

      stars.style.transform = `translateX(${x * -20}px) translateY(${y * -20}px)`;

      const bgPosX = 50 + x * 20;
      const bgPosY = 50 + y * 20;
      auroraText.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    };

    hero.addEventListener('mousemove', handleMouseMove);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative inline-block">
      <div ref={starsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      <h1
        ref={auroraTextRef}
        className={`aurora-text relative z-10 ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};
