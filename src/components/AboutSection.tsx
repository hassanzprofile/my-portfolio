import React from 'react';
import { Download, Award, Briefcase, CheckCircle2, Disc } from 'lucide-react';
import { EXPERIENCES, SKILLS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Generate a downloadable plain text CV file
    const cvText = `
JULIAN VANCE - 3D ANIMATION DIRECTOR & TECHNICAL RIGGER
Email: julian.vance@vance3d.io | Portfolio: https://vance3d.io
------------------------------------------------------------

SUMMARY:
Over 7 years of high-performance 3D character animation, real-time Unreal Engine 5 production, character rigging, and motion graphics for global clients.

CORE SKILLS:
- Blender 4.3+ (98%)
- Unreal Engine 5.5 (92%)
- Cinema 4D & Octane (90%)
- Houdini & Axiom Particles (85%)
- Maya (88%)
- ZBrush & Substance Painter (94%)

EXPERIENCE:
- Senior 3D Animator & Technical Lead @ Nexus Creative Studio (2023 - Present)
- 3D Motion Graphics Artist @ Aether VFX House (2021 - 2023)
- Junior 3D Generalist @ CyberPulse Interactive (2019 - 2021)
`;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Julian_Vance_3D_Animator_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-3000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
      <section className="py-3  overflow bg-slate-900">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Disc className="w-3.5 h-3.5 text-purple-400" />
            <span>Behind The Scenes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About <span className="gradient-text">Hassan Imran</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Technical 3D Web Animator, Workflows and Customize Agents Creator
          </p>
        </div>
      </section>
        {/* Profile & Bio Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image with animated glow */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 blur-xl opacity-60 animate-pulse" />
              <div className="relative w-full h-full glass-panel rounded-3xl p-3 border border-white/20 overflow-hidden shadow-2xl">
                <img
                  src="yyy.jpeg"
                  alt="Hassan Imran;3D Animation Director"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 text-xs backdrop-blur-md"> */}
                  {/* <div className="flex items-center gap-2 font-bold text-white"> */}
                    {/* <Award className="w-4 h-4 text-amber-400" />
                    <span>Motion Award Winner 2022 & 2024</span> */}
                  {/* </div> */}
                  {/* <div className="text-slate-300 text-[11px] mt-0.5">Gold Commercial Product Teaser</div> */}
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl text-white">
              Crafting 3D Experiences with Precision & Rhythm
            </h3>

            <h4 className="text-slate-300 text-sm sm:text-base leading-relaxed">
              With over 2 years in the computer graphics industry, I specialize in combining art and technical rigging. My focus is delivering cinematic quality at maximum performance.
            </h4>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl glass-panel border border-white/10">
                <span className="text-slate-400 font-mono block">Primary Engine</span>
                <span className="text-white font-semibold">Unreal Engine 5</span>
              </div>
              {/* <div className="p-3 rounded-xl glass-panel border border-white/10">
                <span className="text-slate-400 font-mono block">Rigging Standard</span>
                <span className="text-white font-semibold">Quad Topology & Dual Quaternion</span>
              </div> */}
            </div>

            {/* Action Download CV */}
            {/* <div>
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (CV)</span>
              </button>
            </div> */}
          </div>

        </div>

       
       </div>
     </section>
  );
};
