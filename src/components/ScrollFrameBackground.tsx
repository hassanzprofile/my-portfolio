import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 180;

// Generate frame paths: /frames/ezgif-frame-001.jpg through 180
const getFramePath = (index: number): string => {
  const padded = String(index).padStart(3, '0');
  return `/frames/ezgif-frame-${padded}.jpg`;
};

export const ScrollFrameBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pre-load all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = images;
        setIsLoaded(true);
        // Draw the first frame immediately
        drawFrame(0);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i + 1);
      img.onload = onLoad;
      img.onerror = onLoad; // Count errors as loaded to not block
      images[i] = img;
    }

    return () => {
      // Cleanup: cancel any pending loads
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Draw a specific frame on the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images.length) return;

    const clampedIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));
    const img = images[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Cover-fit the image to canvas (like background-size: cover)
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.naturalWidth / img.naturalHeight;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (imgAspect > canvasAspect) {
      // Image is wider — fit by height, crop sides
      drawHeight = canvas.height;
      drawWidth = drawHeight * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller — fit by width, crop top/bottom
      drawWidth = canvas.width;
      drawHeight = drawWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle scroll -> frame mapping
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollFraction * TOTAL_FRAMES)
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        // Use rAF for smooth rendering
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          drawFrame(frameIndex);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Draw initial frame
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Handle resize — update canvas dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redraw current frame at new size
      if (isLoaded) {
        drawFrame(currentFrameRef.current);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isLoaded, drawFrame]);

  return (
    <>
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="scroll-frame-loader">
          <div className="scroll-frame-loader-inner">
            <div className="scroll-frame-loader-spinner" />
            <p className="scroll-frame-loader-text">Loading cinematic experience...</p>
            <div className="scroll-frame-loader-bar-track">
              <div
                className="scroll-frame-loader-bar-fill"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="scroll-frame-loader-percent">{loadProgress}%</p>
          </div>
        </div>
      )}

      {/* Fixed background canvas */}
      <canvas
        ref={canvasRef}
        className="scroll-frame-canvas"
        aria-hidden="true"
      />

      {/* Dark overlay for text readability */}
      <div className="scroll-frame-overlay" />
    </>
  );
};
