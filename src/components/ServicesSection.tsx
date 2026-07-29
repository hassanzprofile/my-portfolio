import React, { useState } from 'react';
import { Clapperboard, Box, Sparkles, Gamepad2, Video, Bone, ArrowRight, CheckCircle, Calculator, Send } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types/portfolio';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calcDuration, setCalcDuration] = useState(15); // seconds
  const [calcResolution, setCalcResolution] = useState<'1080p' | '4k'>('1080p');
  const [calcRigging, setCalcRigging] = useState(true);
  const [calcTurnaround, setCalcTurnaround] = useState<'standard' | 'express'>('standard');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard': return <Clapperboard className="w-6 h-6 text-purple-400" />;
      case 'Bone': return <Bone className="w-6 h-6 text-cyan-400" />;
      case 'Box': return <Box className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-emerald-400" />;
      case 'Video': return <Video className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  // Estimated Quote Calculation Formula
  const baseRatePerSecond = 60;
  const resolutionMultiplier = calcResolution === '4k' ? 1.3 : 1.0;
  const riggingFlatFee = calcRigging ? 450 : 0;
  const speedMultiplier = calcTurnaround === 'express' ? 1.4 : 1.0;

  const estimatedTotal = Math.round(
    (calcDuration * baseRatePerSecond * resolutionMultiplier + riggingFlatFee) * speedMultiplier
  );

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional 3D & Motion <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From character rigging to broadcast commercials, we deliver production-ready 3D assets and animations tailored to your creative vision.
          </p>

          <button
            onClick={() => setCalculatorOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-200 hover:bg-purple-600/50 text-xs font-mono transition-all"
          >
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Launch Interactive Pricing Estimator</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                service.popular
                  ? 'border-purple-500/50 shadow-xl shadow-purple-500/15 bg-gradient-to-b from-purple-900/20 to-slate-900/80'
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                  Most Requested
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center border border-white/10 mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-5">{service.description}</p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Deliverables Include:</span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">Starting at</span>
                  <span className="text-lg font-bold text-white font-mono">{service.priceStarting}</span>
                </div>

                <button
                  onClick={() => {
                    if (onSelectServiceForQuote) {
                      onSelectServiceForQuote(service.title);
                    } else {
                      setCalculatorOpen(true);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white text-xs font-semibold border border-purple-500/30 transition-all flex items-center gap-1.5"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Estimator Modal */}
      {calculatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 border border-purple-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">3D Animation Cost Calculator</h3>
              </div>
              <button
                onClick={() => setCalculatorOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Duration Slider */}
              <div>
                <div className="flex justify-between text-slate-300 font-mono mb-1">
                  <span>Animation Duration:</span>
                  <span className="text-cyan-400 font-bold">{calcDuration} Seconds</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={calcDuration}
                  onChange={(e) => setCalcDuration(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Resolution Toggle */}
              <div>
                <label className="text-slate-300 font-mono block mb-1">Render Resolution:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcResolution('1080p')}
                    className={`py-2 rounded-xl border font-mono text-center transition-all ${
                      calcResolution === '1080p'
                        ? 'bg-purple-600 text-white border-purple-500'
                        : 'glass-panel text-slate-400 border-white/10'
                    }`}
                  >
                    1080p Full HD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcResolution('4k')}
                    className={`py-2 rounded-xl border font-mono text-center transition-all ${
                      calcResolution === '4k'
                        ? 'bg-purple-600 text-white border-purple-500'
                        : 'glass-panel text-slate-400 border-white/10'
                    }`}
                  >
                    4K Cinema Ultra HD
                  </button>
                </div>
              </div>

              {/* Rigging Checkbox */}
              <div className="flex items-center justify-between p-3 rounded-xl glass-panel border border-white/10">
                <span className="text-slate-200">Include Custom Character Rigging (+$450)</span>
                <input
                  type="checkbox"
                  checked={calcRigging}
                  onChange={(e) => setCalcRigging(e.target.checked)}
                  className="w-4 h-4 accent-purple-500 rounded"
                />
              </div>

              {/* Speed Option */}
              <div>
                <label className="text-slate-300 font-mono block mb-1">Delivery Speed:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcTurnaround('standard')}
                    className={`py-2 rounded-xl border font-mono text-center transition-all ${
                      calcTurnaround === 'standard'
                        ? 'bg-purple-600 text-white border-purple-500'
                        : 'glass-panel text-slate-400 border-white/10'
                    }`}
                  >
                    Standard (5-7 Days)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcTurnaround('express')}
                    className={`py-2 rounded-xl border font-mono text-center transition-all ${
                      calcTurnaround === 'express'
                        ? 'bg-purple-600 text-white border-purple-500'
                        : 'glass-panel text-slate-400 border-white/10'
                    }`}
                  >
                    Express Rush (48-72h)
                  </button>
                </div>
              </div>
            </div>

            {/* Price Output box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400 font-mono uppercase">Estimated Total</div>
                <div className="text-2xl font-bold text-cyan-300 font-mono">${estimatedTotal.toLocaleString()} USD</div>
              </div>

              <button
                onClick={() => {
                  setCalculatorOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-500/30"
              >
                <span>Request Formal Quote</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
