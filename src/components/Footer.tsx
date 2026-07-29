import React, { useState } from 'react';
import { Sparkles, Github, Twitter, Linkedin, Youtube, Code2, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenZipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenZipModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleFooterNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                VANCE<span className="text-purple-400">3D</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              High-performance 3D character animation, real-time Unreal Engine 5 production, character rigging, and motion graphics for film, games, and commercial brands.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-blue-400">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl glass-panel text-slate-300 hover:text-rose-400">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-purple-300">Home</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-purple-300">Portfolio</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-purple-300">Services</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-purple-300">Blog & Tutorials</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-purple-300">About Director</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-purple-300">Contact</button></li>
            </ul>
          </div>

          {/* Quick Source Code & Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">Developer & Export</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenZipModal} className="text-cyan-400 hover:underline flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Download Code (.ZIP)</span>
                </button>
              </li>
              <li><button onClick={() => setPrivacyModalOpen(true)} className="hover:text-purple-300">Privacy Policy</button></li>
              <li><button onClick={() => setPrivacyModalOpen(true)} className="hover:text-purple-300">Terms of Service</button></li>
            </ul>
          </div>

          {/* Footer Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">Stay Updated</h4>
            <p className="text-slate-400 text-[11px]">Get our latest 3D tutorials and rigging breakdown nodes.</p>

            {subscribed && (
              <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed!</span>
              </div>
            )}

            <form onSubmit={handleFooterNewsletter} className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] font-mono gap-4">
          <div>© {new Date().getFullYear()} Julian Vance 3D Animation Studio. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Built with React & Three.js</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-cyan-400 hover:underline flex items-center gap-1">
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel p-6 rounded-3xl max-w-lg w-full border border-white/15 space-y-4">
            <h3 className="text-base font-bold text-white">Privacy & Licensing Terms</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              All 3D character rigs, models, and rendered commercials displayed on this portfolio are protected by international copyright laws. Commissions include full perpetual commercial rights upon project completion. No personal data submitted via contact forms is shared with third parties.
            </p>
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
