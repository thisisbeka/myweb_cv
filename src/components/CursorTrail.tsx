import { useEffect, useState } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-[#C0C0C0] animate-pulse-ring-fast" />
      </div>

      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-40 rounded-full mix-blend-screen"
          style={{
            left: trail.x,
            top: trail.y,
            width: '6px',
            height: '6px',
            background: `radial-gradient(circle, ${
              index % 2 === 0 ? '#C0C0C0' : '#6C63FF'
            }, transparent)`,
            opacity: (index + 1) / trails.length,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}

      <style>{`
        @keyframes pulse-ring-fast {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-pulse-ring-fast {
          animation: pulse-ring-fast 1s ease-out infinite;
        }
      `}</style>
    </>
  );
}
