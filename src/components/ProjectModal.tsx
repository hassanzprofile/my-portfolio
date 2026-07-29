import React, { useState } from 'react';
import { X, ExternalLink, Github, Play, Box, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ThreeCanvas } from './ThreeCanvas';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'video' | '3d' | 'gallery'>('video');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">{project.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{project.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Switcher Tabs */}
        <div className="px-6 pt-4 flex items-center gap-2 border-b border-white/10 bg-slate-900/40">
          {project.videoUrl && (
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 text-xs font-medium rounded-t-xl transition-all flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-purple-600 text-white font-semibold shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Video Reel</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('3d')}
            className={`px-4 py-2 text-xs font-medium rounded-t-xl transition-all flex items-center gap-1.5 ${
              activeTab === '3d'
                ? 'bg-purple-600 text-white font-semibold shadow-lg'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Interactive 3D Model</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 text-xs font-medium rounded-t-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'gallery'
                ? 'bg-purple-600 text-white font-semibold shadow-lg'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Render Stills ({project.gallery.length})</span>
          </button>
        </div>

        {/* Media Content Display */}
        <div className="relative w-full aspect-video bg-black/60 flex items-center justify-center overflow-hidden">
          {activeTab === 'video' && project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : activeTab === '3d' ? (
            <div className="w-full h-full relative">
              <ThreeCanvas
                type={project.threeModelType || 'helmet'}
                interactive={true}
                wireframeToggle={true}
                colorTheme="cyan"
              />
              <div className="absolute top-4 left-4 px-3 py-1 text-[11px] font-mono rounded-lg glass-panel text-cyan-300">
                Rotate / Zoom 3D Shader
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={project.gallery[galleryIndex]}
                alt={`${project.title} gallery ${galleryIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 p-2 rounded-full glass-panel text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 p-2 rounded-full glass-panel text-white hover:bg-white/20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Project Description & Specs Body */}
        <div className="p-6 space-y-6 max-h-[40vh] overflow-y-auto">
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-mono">Overview</h3>
            <p className="text-slate-200 text-sm mt-1 leading-relaxed">{project.fullDetails}</p>
          </div>

          {/* Stats grid */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.stats.map((st, i) => (
                <div key={i} className="p-3 rounded-xl glass-panel border border-white/10">
                  <div className="text-xs text-slate-400 font-mono">{st.label}</div>
                  <div className="text-sm font-bold text-cyan-300 mt-0.5">{st.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Software & Tools</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-cyan-300 border border-slate-700 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-purple-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Metadata & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="text-slate-400">Client: </span>
              <span className="text-white font-semibold">{project.client}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg glass-panel text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium flex items-center gap-1.5 shadow-lg shadow-purple-500/25"
                >
                  <span>Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
