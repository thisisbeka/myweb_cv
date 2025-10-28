import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      document.body.style.setProperty('pointer-events', 'none');

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.style.removeProperty('pointer-events');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }

      @media (prefers-reduced-motion: no-preference) {
        * {
          scroll-behavior: smooth;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
