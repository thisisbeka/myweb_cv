import React, { useEffect, useRef } from 'react';

interface AuroraTextProps {
  text: string;
  className?: string;
}

export const AuroraText: React.FC<AuroraTextProps> = ({ text, className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const auroraTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const auroraText = auroraTextRef.current;

    if (!hero || !auroraText) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = hero;

      const x = (clientX / offsetWidth - 0.5) * 2;
      const y = (clientY / offsetHeight - 0.5) * 2;

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
      <h1
        ref={auroraTextRef}
        className={`aurora-text relative z-10 ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};
