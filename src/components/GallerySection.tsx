import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types/portfolio';
import { Maximize2, Heart, Sparkles, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});

  const categories = ['All', '4k Ads', '3D Webs', 'Voice Ai', 'Chatbots', 'Ai Content Calenders','Ai buisness Automation'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const toggleLike = (id: string, currentLikes: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || currentLikes) + 1
    }));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>High-Res Stills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            3D Concept Render <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A curated masonry grid of high-fidelity 3D renders, material studies, and topology frame passes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => {
            const itemLikes = likes[item.id] !== undefined ? likes[item.id] : item.likes;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 break-inside-avoid"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-cyan-300 border border-purple-500/30">
                      {item.software}
                    </span>

                    <button
                      onClick={() => setLightboxItem(item)}
                      className="p-2 rounded-xl glass-panel text-white hover:bg-white/20"
                      title="Expand Lightbox"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs">
                      <span className="text-slate-400 font-mono">{item.category}</span>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(item.id, item.likes);
                        }}
                        className="flex items-center gap-1 text-rose-400 font-mono hover:scale-110 transition-transform"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span>{itemLikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-5xl w-full max-h-[90vh] glass-panel rounded-3xl overflow-hidden border border-white/20 flex flex-col">
            <div className="p-4 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">{lightboxItem.title}</h3>
                <span className="text-xs text-cyan-400 font-mono">{lightboxItem.software}</span>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 bg-black overflow-hidden flex items-center justify-center p-2">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
