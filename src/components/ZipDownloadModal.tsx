import React, { useState } from 'react';
import { Download, Code2, Terminal, CheckCircle2, Sparkles, X, FileText, Play } from 'lucide-react';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleTriggerZipDownload = () => {
    setDownloading(true);
    // Direct link trigger to server zip download endpoint
    const link = document.createElement('a');
    link.href = '/api/download-zip';
    link.download = '3d-animation-portfolio-source.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Full Project Source Code (.ZIP)</h3>
              <span className="text-xs text-slate-400 font-mono">React + Three.js + Express Backend</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Download Trigger Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white">Download Complete Source Archive</h4>
              <p className="text-xs text-slate-300 mt-0.5">Includes all components, 3D canvas shaders, Express API server, and setup scripts.</p>
            </div>

            <button
              onClick={handleTriggerZipDownload}
              disabled={downloading}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-purple-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Packing .ZIP...' : 'Download ZIP File'}</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>ZIP file download started! Check your downloads folder.</span>
            </div>
          )}
        </div>

        {/* Instructions Guide */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>How to Extract & Preview Locally</span>
          </h4>

          <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-purple-900 text-purple-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <span className="text-white font-bold">Unzip the Archive:</span>
                <p className="text-slate-400 text-[11px] mt-0.5">Extract <code className="text-cyan-300">3d-animation-portfolio-source.zip</code> to any folder on your computer.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-purple-900 text-purple-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <span className="text-white font-bold">Install Dependencies:</span>
                <p className="text-slate-400 text-[11px] mt-0.5">Open Terminal / Command Prompt in that directory and run:</p>
                <div className="mt-1 p-2 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                  npm install
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-purple-900 text-purple-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <span className="text-white font-bold">Start Dev Server & Get Live Preview:</span>
                <p className="text-slate-400 text-[11px] mt-0.5">Execute the development command:</p>
                <div className="mt-1 p-2 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                  npm run dev
                </div>
                <p className="text-slate-400 text-[11px] mt-1">Open browser at <code className="text-amber-300">http://localhost:3000</code> to view the full interactive 3D app!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-mono"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
