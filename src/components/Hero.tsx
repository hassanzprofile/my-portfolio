import React from 'react';
import { Play, Send, ChevronDown, DiscAlbumIcon, Box, ShieldCheck, Film, Code2 } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

interface HeroProps {
  onViewPortfolio: () => void;
  onContactMe: () => void;
  onOpenZipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPortfolio, onContactMe, onOpenZipModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
              <DiscAlbumIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>3D  Animation Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Can Create <span className="gradient-text">Stunning 3D</span> Animations & Motion Graphics
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Have skills to make 3D animations on wesite via backend and frontend skills
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewPortfolio}
                className="px-6 py-3.5 rounded-xl glass-panel border border-white/15 text-slate-200 font-semibold text-sm hover:border-black-400/50 hover:text-white transition-all duration-200 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onContactMe}
                className="px-6 py-3.5 rounded-xl glass-panel border border-black/15 text-slate-200 font-bold text-sm hover:border-black-400/50 hover:text-black transition-all duration-200 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-black-400" />
                <span>Contact Me</span>
              </button>

 
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-3xl font-bold text-black font-mono">20+</div>
                <div className="text-s text-slate-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-1xl font text-silver-400 font-mono"></div>
                <div className="text-xs text-slate-400"></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black font-mono">4.9 ★</div>
                <div className="text-x text-slate-300">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Interactive 3D Canvas Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto glass-panel rounded-3xl p-4 border border-white/10 glow-silver overflow-hidden">
              <ThreeCanvas type="hero" interactive={true} wireframeToggle={true} colorTheme="black" />
              
              {/* Floating overlay badge */}
              <div className="absolute top-6 left-6 px-3 py-2 rounded-lg glass-panel border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 backdrop-blur-md">
                <Box className="w-3.5 h-3.5 text-silver-400 animate-spin" style={{ animationDuration: '12s' }} />
                <span></span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 px-4 py-2.5 rounded-xl glass-panel border border-white/10 text-xs text-slate-300 flex items-center justify-between backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span>Procedural Geometry Shader</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Drag to Tilt</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-slate-400 text-xs font-mono">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-silver-100 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
