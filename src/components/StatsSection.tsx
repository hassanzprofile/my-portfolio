import React, { useEffect, useState } from 'react';
import { CheckCircle2, Smile, Trophy, Calendar, Zap } from 'lucide-react';
import { STATS } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    // Simple counter animation trigger
    const timer = setTimeout(() => {
      const initial: Record<string, number> = {};
      STATS.forEach((st) => {
        initial[st.id] = st.value;
      });
      setAnimatedValues(initial);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-cyan-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-slate-900/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {STATS.map((stat) => {
            const displayVal = animatedValues[stat.id] !== undefined ? animatedValues[stat.id] : 0;

            return (
              <div
                key={stat.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl glass-panel mx-auto mb-3 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {stat.prefix || ''}
                  {displayVal.toLocaleString()}
                  {stat.suffix || ''}
                </div>

                <div className="text-xs text-slate-400 font-mono mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
