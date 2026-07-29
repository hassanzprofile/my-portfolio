import { Project, BlogPost, Service, Testimonial, Experience, SkillItem, PricingPlan, FaqItem, StatItem, GalleryItem } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'cyberpunk-character-rig-2026',
    title: 'Aetheria - Cyberpunk Character & Rig',
    category: 'Character Animation',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-moving-41584-large.mp4',
    threeModelType: 'cyber-helmet',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&auto=format&fit=crop&q=80'
    ],
    description: 'A full quad-mesh cinematic character equipped with modular facial blendshapes, cloth simulation setup, and custom FK/IK spine rigging for AAA game integration.',
    fullDetails: 'Engineered for real-time rendering in Unreal Engine 5.5, Aetheria features over 180 facial blendshapes for photorealistic emotional performance. Built with Substance Painter procedural skin shaders, hair groom simulation, and auto-IK foot placement.',
    technologies: ['Blender', 'ZBrush', 'Unreal Engine 5.5', 'Substance Painter', 'Marvelous Designer'],
    client: 'Nexus Interactive Studios',
    year: '2026',
    liveUrl: 'https://aetheria-3d.example.com',
    githubUrl: 'https://github.com/example/aetheria-rig',
    featured: true,
    stats: [
      { label: 'Facial Blendshapes', value: '184 Custom Keys' },
      { label: 'Polygon Count', value: '82,000 Quads' },
      { label: 'Render Speed', value: '60 FPS Realtime' }
    ]
  },
  {
    id: 'p2',
    slug: 'lumina-holographic-watch-reveal',
    title: 'Lumina - Holographic Smartwatch Commercial',
    category: 'Product Animation',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-digital-globe-41582-large.mp4',
    threeModelType: 'sneaker-3d',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1200&auto=format&fit=crop&q=80'
    ],
    description: '3D CAD explode-view product reel showcasing titanium wrist casing, floating OLED holographic lens, and magnetic strap assembly.',
    fullDetails: 'Created high-fidelity CAD imports with clean topology refinement in Cinema 4D. Applied custom Octane metallic refraction materials and GPU raytraced depth of field.',
    technologies: ['Cinema 4D', 'Octane Render', 'After Effects', 'RizomUV', 'MoGraph'],
    client: 'Lumina Tech Inc',
    year: '2025',
    liveUrl: 'https://lumina-reveal.example.com',
    featured: true,
    stats: [
      { label: 'CAD Accuracy', value: '0.01mm Sub-D' },
      { label: 'Material Layers', value: '18 Complex Shaders' }
    ]
  },
  {
    id: 'p3',
    slug: 'quantum-title-sequence-vfx',
    title: 'Quantum Realm - Cinematic Title Sequence',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-glowing-digital-cube-41586-large.mp4',
    threeModelType: 'crystal-orb',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&auto=format&fit=crop&q=80'
    ],
    description: 'Abstract particle-driven 3D title design featuring fluid dynamics, volumetric light rays, and kinetic typography.',
    fullDetails: 'Simulated 12 million quantum particles using Houdini Axiom solver and rendered with Redshift GPU. Integrated custom 3D text typography extruded with procedural noise maps.',
    technologies: ['Houdini', 'Redshift', 'After Effects', 'Nuke', 'Cinema 4D'],
    client: 'Vanguard Film Studio',
    year: '2026',
    liveUrl: 'https://quantum-vfx.example.com',
    featured: true,
    stats: [
      { label: 'Particle Count', value: '12 Million' },
      { label: 'Resolution', value: '4K DCI HDR' }
    ]
  },
  {
    id: 'p4',
    slug: 'mecha-spider-game-asset-pack',
    title: 'Chatbot',
    category: 'Agentic AI',
    thumbnail: 'chatbot.jpeg',
    videoUrl: '',
    threeModelType: 'mech-arm',
    gallery: [
      'chatbot-blur.jpeg',
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: [''],
    client: 'Edupath.co',
    year: '2025',
    featured: false,
    stats: [
      { label: 'LOD Levels', value: '1' },
      { label: 'Texel Density', value: '3-5 sec' }
    ]
  },
  {
    id: 'p5',
    slug: 'nebula-portal-vfx-breakdown',
    title: 'Hyperdrive - Interstellar Portal VFX',
    category: 'VFX',
    thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-spinning-around-a-digital-globe-41582-large.mp4',
    threeModelType: 'drone-core',
    gallery: [
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80'
    ],
    description: 'Complex visual effects sequence featuring gravitational lensing, pyro simulations, and camera motion tracking.',
    fullDetails: 'Full green-screen plate compositing with 3D camera tracking in SynthEyes. Simulated black hole gravitational distortion using custom Nuke ray-marching shaders.',
    technologies: ['Nuke', 'Houdini', 'Maya', 'SynthEyes', 'Davinci Resolve'],
    client: 'Orion FX',
    year: '2026',
    featured: false,
    stats: [
      { label: 'VFX Passes', value: '34 Deep AOVs' }
    ]
  },
  {
    id: 'p6',
    slug: 'geometry-nodes-environment-blender',
    title: 'Overgrown Ruins - Procedural Blender Environment',
    category: 'Blender Projects',
    thumbnail: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-glowing-digital-cube-41586-large.mp4',
    threeModelType: 'crystal-orb',
    gallery: [
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&auto=format&fit=crop&q=80'
    ],
    description: '100% procedural moss, vine growth, and ancient ruin generator created with Blender Geometry Nodes.',
    fullDetails: 'A powerful tool preset that scatters procedural foliage with realistic gravity drooping, seasonal color variation, and automatic obstacle avoidance.',
    technologies: ['Blender 4.3', 'Geometry Nodes', 'Cycles Render', 'Photoshop'],
    client: 'OpenSource CG Community',
    year: '2026',
    githubUrl: 'https://github.com/example/blender-geometry-ruins',
    featured: true,
    stats: [
      { label: 'Node Tree', value: '420 Sub-nodes' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'mastering-3d-character-rigging-blender-2026',
    title: 'Mastering Advanced 3D Character Rigging in Blender 4.3+',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    category: 'Rigging & Animation',
    tags: ['Blender', 'Rigging', 'Character Design', 'Tutorial', 'GameDev'],
    description: 'A comprehensive deep-dive into bone constraints, weight painting workflows, driver expressions, and non-destructive facial setups.',
    contentMarkdown: `
# Mastering Advanced 3D Character Rigging in Blender 4.3+

Character rigging is the critical bridge between static 3D sculpting and lifelike animation. In this guide, we explore modern rigging methodologies that guarantee clean mesh deformations and high-speed animator workflows.

## 1. Establishing an Optimal Armature Hierarchy
Before placing your first bone, ensure your character mesh is aligned to world origin with normalized scales (\`Ctrl + A -> Apply Scale\`).

### Key Guidelines for Bone Alignment:
- **Spine**: Use 5-segment Bendy Bones (B-Bones) for seamless natural curvature.
- **Knees and Elbows**: Slightly bend joints in rest pose to ensure Reverse Foot IK solvers determine pole targets effortlessly.
- **Facial Rigging**: Separate facial rig layers into secondary deformers and primary control shapes.

\`\`\`python
# Sample Blender Python snippet to normalize bone transforms
import bpy

def reset_bone_transforms(armature_obj):
    for pose_bone in armature_obj.pose.bones:
        pose_bone.location = (0, 0, 0)
        pose_bone.rotation_euler = (0, 0, 0)
        pose_bone.scale = (1, 1, 1)
\`\`\`

## 2. Weight Painting Without Stress
Weight painting doesn't have to be tedious. Use **Auto-Weights with Bone Envelopes** for initial passes, followed by **Smooth Vertex Groups** with a radius of 0.1m around high-flex zones like armpits and elbows.

## 3. Preserving Volume with Dual Quaternion Skinning
Avoid the classic "candy wrapper" twist defect when wrist bones rotate by applying Dual Quaternion deformation in Blender's Armature Modifier settings.

---

### Key Takeaways:
1. Keep control rigs modular.
2. Utilize Driver Expressions for corrective shape keys.
3. Test extremities in extreme poses before locking textures.
`,
    date: 'July 18, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    readingTime: '6 min read',
    commentsCount: 2,
    featured: true,
    views: 1420
  },
  {
    id: 'b2',
    slug: 'unreal-engine-5-realtime-cinematics-guide',
    title: 'Building Next-Gen Realtime Cinematics in Unreal Engine 5.5',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
    category: 'Real-Time Rendering',
    tags: ['Unreal Engine', 'Lumen', 'Nanite', 'Cinematics', 'VFX'],
    description: 'How to utilize Lumen dynamic global illumination, Nanite tessellation, and Sequencer to craft film-quality animation sequences without offline rendering delays.',
    contentMarkdown: `
# Building Next-Gen Realtime Cinematics in Unreal Engine 5.5

Real-time rendering has forever transformed the filmmaking industry. What used to take hours per frame in traditional offline renders can now render at 60 FPS directly inside Unreal Engine 5.5.

## Understanding Lumen & Nanite Workflows
Lumen delivers sub-frame dynamic bounce lighting. Combined with Substrate materials, complex translucent surfaces like tinted glass or wet skin reflections are computed instantly.

### Optimization Tips:
- **Virtual Shadow Maps (VSM)**: Set shadow bias to prevent contact hardening glitches.
- **Movie Render Queue**: Export 16-bit EXR frames with multi-pass motion blur.
`,
    date: 'July 10, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    readingTime: '8 min read',
    commentsCount: 5,
    featured: false,
    views: 980
  },
  {
    id: 'b3',
    slug: 'procedural-node-trees-cinema4d-redshift',
    title: 'Procedural Shader Creation in Redshift & Cinema 4D',
    coverImage: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1200&auto=format&fit=crop&q=80',
    category: 'Motion Graphics',
    tags: ['Cinema 4D', 'Redshift', 'Shaders', 'Motion Design'],
    description: 'Unlocking hyper-realistic metallic, worn, and emissive textures using node-based procedural noise blending.',
    contentMarkdown: `
# Procedural Shader Creation in Redshift & Cinema 4D

Texture mapping without UV unwrapping is the secret weapon for fast-paced commercial motion graphics. In this tutorial, we dissect curvature maps, triplanar projection, and ramp noise layering.
`,
    date: 'June 28, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    readingTime: '5 min read',
    commentsCount: 1,
    featured: false,
    views: 750
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: '3D Character & Creature Animation',
    description: 'High-octane character performances, mechanical walk cycles, lip-syncing, and cinematic combat choreography for games, film, and commercials.',
    iconName: 'Clapperboard',
    deliverables: ['Custom Character Rigging', 'Keyframe & Mocap Polishing', 'FBX / Alembic / USD Export', 'Facial Performance Capture'],
    priceStarting: '$1,200',
    turnaround: '3 - 7 Days',
    popular: true
  },
  {
    id: 's2',
    title: 'Character Rigging & Physics Setup',
    description: 'Rock-solid FK/IK body armatures, facial blendshape trees, cloth/hair physics setups, and clean weight painting built for game engines or offline renders.',
    iconName: 'Bone',
    deliverables: ['Full Body FK/IK Controls', '100+ Facial Blendshapes', 'Dynamic Cloth & Hair Physics', 'Unreal Engine Control Rig'],
    priceStarting: '$800',
    turnaround: '2 - 5 Days'
  },
  {
    id: 's3',
    title: '3D Product Visualization & Commercials',
    description: 'Photorealistic exploded-view CAD animations, studio lighting setups, liquid simulations, and broadcast-ready promotional product video spots.',
    iconName: 'Box',
    deliverables: ['High-poly Surface Refinement', 'Macro Camera Movements', '1080p / 4K Commercial Render', 'Sound Design Integration'],
    priceStarting: '$1,500',
    turnaround: '5 - 10 Days',
    popular: true
  },
  {
    id: 's4',
    title: 'Kinetic Motion Graphics & VFX Title Sequences',
    description: 'Abstract particle dynamics, futuristic broadcast openers, HUD hologram UI animations, and high-impact logo stings.',
    iconName: 'Sparkles',
    deliverables: ['Houdini Particle Dynamics', 'Custom 3D Typography', 'After Effects Compositing', 'Alpha Channel Video Formats'],
    priceStarting: '$950',
    turnaround: '3 - 6 Days'
  },
  {
    id: 's5',
    title: 'Game-Ready 3D Assets & Environments',
    description: 'Optimized low-poly props, mechanical drones, modular environment kits, PBR 4K textures, and collision mesh generation.',
    iconName: 'Gamepad2',
    deliverables: ['Sub-D Quad Topology', '4K PBR Texture Maps (PBR)', 'LOD 0-3 Generation', 'Unity & Unreal Project Files'],
    priceStarting: '$650',
    turnaround: '2 - 4 Days'
  },
  {
    id: 's6',
    title: 'High-End Video Editing & Color Grading',
    description: 'Seamless pacing, sound mixing, motion tracking, chromatic color correction, and final master encoding for digital platforms.',
    iconName: 'Video',
    deliverables: ['Timeline Editing', 'Color Pass in DaVinci Resolve', 'Sound Effects & Foley Mix', 'Social Media Format Exports'],
    priceStarting: '$500',
    turnaround: '1 - 3 Days'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Sterling',
    role: 'Creative Director',
    company: 'Apex Game Studios',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    review: 'Julian delivered unbelievable character rigging for our AAA sci-fi shooter prototype. The facial blendshapes integrated seamlessly into Unreal Engine 5 without a single hitch!',
    projectRef: 'Aetheria - Cyberpunk Character'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Product Marketing',
    company: 'Lumina Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    review: 'The 3D exploded view product commercial generated over 2.4M organic views on launch week. The lighting, camera choreography, and glass textures were absolute perfection.',
    projectRef: 'Lumina Smartwatch Reveal'
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Executive Producer',
    company: 'Vanguard Pictures',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    review: 'Julian has an exceptional eye for timing, weight, and visual polish. He completed our title VFX sequence ahead of schedule and incorporated feedback instantly.',
    projectRef: 'Quantum Realm Title VFX'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Nexus Creative Studio',
    position: 'Senior 3D Animator & Technical Lead',
    duration: '2023 - Present',
    description: 'Leading 3D character animation pipelines, supervising Houdini particle simulations, and crafting real-time UE5 commercial experiences for international clients.',
    achievements: [
      'Engineered an automated rigging pipeline reducing character turnaround time by 40%.',
      'Directed motion capture cleanup for 12 key commercial projects.',
      'Mentored 6 junior animators in topology and weight painting.'
    ],
    skills: ['Blender', 'Unreal Engine 5', 'Houdini', 'Python Scripting', 'Team Leadership']
  },
  {
    id: 'exp2',
    company: 'Aether VFX House',
    position: '3D Motion Graphics Artist',
    duration: '2021 - 2023',
    description: 'Designed broadcast openers, product launch trailers, and 3D kinetic typography sequences for Fortune 500 tech brands.',
    achievements: [
      'Won Gold Motion Award 2022 for Best Commercial Product Teaser.',
      'Created 50+ reusable procedural C4D Redshift shader packs.'
    ],
    skills: ['Cinema 4D', 'Redshift', 'After Effects', 'Octane', 'Substance Painter']
  },
  {
    id: 'exp3',
    company: 'CyberPulse Interactive',
    position: 'Junior 3D Generalist',
    duration: '2019 - 2021',
    description: 'Modeled, textured, and rigged low-poly environmental assets and weapons for Indie game titles on Unity and Steam.',
    achievements: [
      'Optimized 200+ game props for high-performance 60 FPS mobile target.',
      'Created custom PBR material libraries in Substance Designer.'
    ],
    skills: ['Maya', 'ZBrush', 'Unity', 'Photoshop', 'Texture Optimization']
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Blender 4.3+', category: '3D & Rigging', level: 98, icon: 'Box', color: '#ea580c' },
  { name: 'Unreal Engine 5.5', category: 'Real-Time Engines', level: 92, icon: 'Gamepad2', color: '#0284c7' },
  { name: 'Cinema 4D', category: '3D & Rigging', level: 90, icon: 'Layers', color: '#2563eb' },
  { name: 'Houdini & Axiom', category: 'Motion & Compositing', level: 85, icon: 'Sparkles', color: '#e11d48' },
  { name: 'Maya', category: '3D & Rigging', level: 88, icon: 'Cpu', color: '#0d9488' },
  { name: 'ZBrush Sculpting', category: 'Texturing & Sculpting', level: 91, icon: 'Flame', color: '#7c3aed' },
  { name: 'Substance Painter', category: 'Texturing & Sculpting', level: 94, icon: 'Palette', color: '#d97706' },
  { name: 'After Effects & Nuke', category: 'Motion & Compositing', level: 95, icon: 'Film', color: '#9333ea' },
  { name: 'Unity HDRP', category: 'Real-Time Engines', level: 86, icon: 'Monitor', color: '#475569' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p-basic',
    name: 'Starter Animation',
    price: '$950',
    period: 'per project',
    description: 'Perfect for short social media spots, 3D logo stings, and basic 3D asset rigs.',
    features: [
      'Up to 10 seconds of 3D Animation',
      'Full HD 1080p Resolution Render',
      'Basic Lighting & Texturing',
      '2 Revision Rounds',
      'Stock Audio & Sound Effects',
      '3-4 Days Turnaround'
    ],
    highlighted: false,
    ctaText: 'Choose Starter'
  },
  {
    id: 'p-pro',
    name: 'Professional Commercial',
    price: '$2,450',
    period: 'per project',
    description: 'Our most popular tier for product reveals, complex character rigging, and broadcast commercial clips.',
    features: [
      'Up to 30 seconds of 4K Cinema Render',
      'Complex Character / Product Rigging',
      'Photorealistic Shading & Lighting',
      'Particle Dynamics & FX Elements',
      'Unreal Engine 5 Source Scene',
      'Unlimited Revisions during Draft',
      '5-7 Days Turnaround'
    ],
    highlighted: true,
    ctaText: 'Start Pro Project'
  },
  {
    id: 'p-enterprise',
    name: 'Full Cinematic / Game Pack',
    price: '$4,800+',
    period: 'per campaign',
    description: 'Tailored for AAA game trailers, full character cast rigging, or multi-spot commercial campaigns.',
    features: [
      '60+ seconds of 4K HDR Animation',
      'Multi-character Performance & Lip-sync',
      'Houdini Fluid / Pyro VFX Simulation',
      'Dedicated Technical Director Support',
      'Full IP Ownership & Raw Project Files',
      'Priority Turnaround & 24/7 Slack Access'
    ],
    highlighted: false,
    ctaText: 'Contact Enterprise'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What software and file formats do you deliver?',
    answer: 'We deliver final high-bitrate video formats (.MP4, .MOV with ProRes/DNxHR, or EXR frame sequences). For source files, we provide .BLEND, .C4D, .MA, .FBX, .OBJ, .GLTF/GLB, or complete Unreal Engine 5 project directories depending on your license agreement.',
    category: 'General'
  },
  {
    id: 'faq2',
    question: 'How does the project process and revision workflow work?',
    answer: 'Our workflow consists of 4 clear milestones: 1) Concept Brief & Storyboard, 2) 3D Blocking & Rigging Preview, 3) Shading, Lighting & Animation Pass, and 4) Final High-Resolution Composite. You get dedicated revision checkpoints at each phase.',
    category: 'Process'
  },
  {
    id: 'faq3',
    question: 'Can you work with existing CAD models or character sculpts?',
    answer: 'Yes! We frequently ingest raw CAD data (STEP, IGES, SolidWorks) or high-poly ZBrush sculpts. We handle topology retopology, UV unwrapping, and material mapping in-house.',
    category: 'Process'
  },
  {
    id: 'faq4',
    question: 'Do I get full commercial rights to the rendered assets?',
    answer: 'Yes. Upon final payment milestone completion, you receive full perpetual commercial broadcast and digital distribution rights for all rendered outputs.',
    category: 'Licensing'
  }
];

export const STATS: StatItem[] = [
  { id: 's1', label: 'Projects Completed', value: 140, suffix: '+', icon: 'CheckCircle2' },
  { id: 's2', label: 'Happy Global Clients', value: 85, suffix: '+', icon: 'Smile' },
  { id: 's3', label: 'Industry Awards', value: 12, suffix: '', icon: 'Trophy' },
  { id: 's4', label: 'Years Experience', value: 7, suffix: ' Yrs', icon: 'Calendar' },
  { id: 's5', label: 'Render Hours Saved', value: 12500, suffix: 'h', icon: 'Zap' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Cybernetic Skull Surface Polish', category: 'Character Animation', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80', software: 'ZBrush & Substance', likes: 342 },
  { id: 'g2', title: 'Neomorphic Glass Prism Refraction', category: 'Motion Graphics', imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80', software: 'Cinema 4D Octane', likes: 289 },
  { id: 'g3', title: 'Titanium Smartwatch Casing', category: 'Product Animation', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80', software: 'Blender Cycles', likes: 512 },
  { id: 'g4', title: 'Quantum Core Energy Field', category: 'VFX', imageUrl: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=80', software: 'Houdini Axiom', likes: 418 },
  { id: 'g5', title: 'Sci-Fi Corridor Modular Kit', category: 'Agentic AI', imageUrl: 'chatbot.jpeg', software: 'Unreal Engine 5.5', likes: 305 },
  { id: 'g6', title: 'Ancient Ruin Moss Scattering', category: 'Blender Projects', imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80', software: 'Geometry Nodes', likes: 620 }
];
