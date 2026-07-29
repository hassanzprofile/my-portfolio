import React, { useState, useMemo } from 'react';
import { Search, Filter, Play, ExternalLink, Eye, Box, Sparkles, Disc } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Character Animation',
    'Product Animation',
    'Motion Graphics',
    'Game Assets',
    'VFX',
    'Blender Projects'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Disc className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
             <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore our latest chatbot templates, agentic automation, customize advertizement ads.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-3 rounded-2xl border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md shadow-purple-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-3 rounded-xl bg-purple-600 text-white hover:bg-purple-500 shadow-xl transition-transform hover:scale-110 flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick Preview</span>
                  </button>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-panel text-[11px] font-mono font-medium text-cyan-300 border border-white/15">
                  {project.category}
                </div>

                {project.videoUrl && (
                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg glass-panel text-purple-300">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900/60 hover:bg-purple-600/20 text-xs font-semibold text-slate-200 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>View Details & 3D Model</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400 font-mono text-sm">
            No projects found matching "{searchQuery}" in category "{selectedCategory}".
          </div>
        )}

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
