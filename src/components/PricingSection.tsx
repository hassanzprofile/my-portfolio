import React from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transparent Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simple & Predictable <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparent milestone pricing with no hidden rendering surprise fees. Full commercial rights included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlighted
                  ? 'border-purple-500/60 shadow-2xl shadow-purple-500/25 bg-gradient-to-b from-purple-900/30 via-slate-900 to-slate-900 scale-105 z-10'
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-300 mt-1">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-mono">{plan.period}</span>
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/30 hover:scale-[1.02]'
                      : 'glass-panel text-slate-200 hover:text-white border border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
