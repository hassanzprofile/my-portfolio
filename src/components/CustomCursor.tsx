import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isPointer
            ? 'w-10 h-10 -ml-5 -mt-5 bg-black-500/30 border border-black-400 scale-125'
            : 'w-8 h-8 -ml-4 -mt-4 bg-black-500/15 border border-black-400/50'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 -ml-1 -mt-1 rounded-full bg-black-400 shadow-sm shadow-black-400"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};
