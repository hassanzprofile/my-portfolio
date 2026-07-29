import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-500 relative overflow-hidden bg-slate-1000">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        {/* <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            <span className="gradient-text"></span>
          </h2>
        </div> */}

        {/* Carousel Card */}
        {/* <div className="mt-12 relative">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
            <Quote className="w-16 h-16 text-purple-500/10 absolute -top-2 -left-2 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8"> */}
              {/* Avatar */}
              {/* <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 shadow-xl">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div> */}

              {/* Review details */}
              {/* <div className="flex-1 space-y-4 text-center md:text-left">
                {/* Rating Stars */}
                {/* <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div> */}

                {/* <p className="text-base sm:text-lg text-slate-200 italic font-light leading-relaxed">
                  "{current.review}"
                </p> */}

                {/* <div>
                  <h4 className="text-base font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-purple-300 font-mono">
                    {current.role} • {current.company}
                  </p>
                  {current.projectRef && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-cyan-300 border border-purple-500/30">
                      Project: {current.projectRef}
                    </span>
                  )}
                </div> */}
              {/* </div>
            </div> */}

            {/* Slider Controls */}
            {/* <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10"> */}
              {/* <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'w-8 bg-purple-500' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div> */}

              {/* <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                > */}
                  {/* <ChevronLeft className="w-5 h-5" />
                </button>
                <button */}
                  {/* onClick={nextTestimonial}
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div> */}
            {/* </div>
          </div> */}
        {/* </div> */}

      </div>
    </section>
  );
};
