import { Project, BlogPost, Service, Testimonial, Experience, SkillItem, PricingPlan, FaqItem, StatItem, GalleryItem } from '../types/portfolio';
import p1 from '../asserts/p1.png'
import p2 from '../asserts/p2.png'
import p3 from '../asserts/p3.jpeg'
import p4 from '../asserts/p4.jpeg'
import p5 from '../asserts/p5.png'
import p6 from '../asserts/p6.png'

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: '4k Ads',
    title: 'Custom Product Advertisement Ads',
    category: '4k Ads',
    thumbnail: p1,
    videoUrl: '',
    threeModelType: 'cyber-helmet',
    gallery: [
      '',
      '',
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['VFX', 'Adobe', 'Blender', , ''],
    client: '',
    year: '2026',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    stats: [
      { label: '', value: '' },
      { label: '', value: '' },
      { label: '', value: '60 FPS ' }
    ]
  },
  {
    id: 'p2',
    slug: 'Web Dev',
    title: '3d-Website Animation',
    category: 'Web Dev',
    thumbnail: 'p2.png',
    videoUrl: '',
    threeModelType: '',
    gallery: [
      '',
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['React', 'Node', 'Typescript', 'Canva', 'Javascript'],
    client: '',
    year: '',
    liveUrl: '',
    featured: true,
    stats: [
      { label: '', value: '' },
      { label: '', value: '' }
    ]
  },
  {
    id: 'p3',
    slug: 'Voice AI',
    title: 'Voice Agent; Receptionist and Cold caller',
    category: 'Voice AI',
    thumbnail: 'p3.jpeg',
    videoUrl: '',
    threeModelType: '',
    gallery: [
      '',
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['Twilio', 'n8n', 'API', '', ''],
    client: '',
    year: '2026',
    liveUrl: '',
    featured: true,
    stats: [
      { label: '', value: '' },
      { label: '', value: '' }
    ]
  },
  {
    id: 'p4',
    slug: 'Agentic AI',
    title: 'Conversational Chatbot For Buisnesses',
    category: 'Agentic AI',
    thumbnail: 'p4.jpeg',
    videoUrl: '',
    threeModelType: '',
    gallery: [
      'chatbot-blur.jpeg',
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['n8n', 'social platform', 'API'],
    client: '',
    year: '2025',
    featured: false,
    stats: [
      { label: '', value: '' },
      { label: '', value: '' }
    ]
  },
  {
    id: 'p5',
    slug: 'AI Calender',
    title: 'AI Content Calender for Creator ',
    category: 'AI Calender',
    thumbnail: 'p5.png',
    videoUrl: '',
    threeModelType: '',
    gallery: [
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['n8n', 'Integrated Calender', 'API', '', ''],
    client: '',
    year: '2026',
    featured: false,
    stats: [
      { label: '', value: '' }
    ]
  },
  {
    id: 'p6',
    slug: 'AI Automation Workflows',
    title: 'Overgrown Ruins - Procedural Blender Environment',
    category: 'AI Automation Workflows',
    thumbnail: 'p6.png',
    videoUrl: '',
    threeModelType: '',
    gallery: [
      ''
    ],
    description: '',
    fullDetails: '',
    technologies: ['n8n', 'API Keys', 'AI Models', 'Backend Integration'],
    client: '',
    year: '2026',
    githubUrl: '',
    featured: true,
    stats: [
      { label: '', value: '' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'mastering-3d-character-rigging-blender-2026',
    title: 'Mastering Advanced 3D Character Rigging in Blender 4.3+',
    coverImage: 'yyy.jpeg',
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
      name: 'Hassan',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'yyy.jpeg'
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
    coverImage: 'yyy.jpeg',
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
      name: '',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'yyy.jpeg'
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
    coverImage: 'yyy.jpeg',
    category: 'Motion Graphics',
    tags: ['Cinema 4D', 'Redshift', 'Shaders', 'Motion Design'],
    description: 'Unlocking hyper-realistic metallic, worn, and emissive textures using node-based procedural noise blending.',
    contentMarkdown: `
# Procedural Shader Creation in Redshift & Cinema 4D

Texture mapping without UV unwrapping is the secret weapon for fast-paced commercial motion graphics. In this tutorial, we dissect curvature maps, triplanar projection, and ramp noise layering.
`,
    date: 'June 28, 2026',
    author: {
      name: '',
      role: 'Lead 3D Animator & Technical Director',
      avatar: 'yyy.jpeg'
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
    title: '4K AI Ads & Commercials',
    description: 'Cinematic 4K AI-powered video ads, UGC style creatives, and product commercials that stop the scroll and convert. Built for TikTok, Reels, and YouTube Ads.',
    iconName: 'Clapperboard',
    deliverables: [
      '4K AI Video Ad - 15s to 60s',
      'AI UGC Creator + Voiceover',
      'Script + Hook + CTA Optimization',
      'Multi-format Export for Ads'
    ],
    priceStarting: '$499',
    turnaround: '3 - 5 Days',
    popular: true
  },
  {
    id: 's2',
    title: '3D Interactive Websites',
    description: 'Next-gen 3D web experiences with WebGL, Three.js, and Spline. Immersive portfolios, product showcases, and landing pages that feel like a game.',
    iconName: 'Box',
    deliverables: [
      'Interactive 3D Hero Section',
      'Product 3D Model Integration',
      'Scroll Animations + Parallax',
      'Mobile Optimized + Fast Loading'
    ],
    priceStarting: '$600',
    turnaround: '7 - 14 Days',
    popular: true
  },
  {
    id: 's3',
    title: 'AI Voice Agents',
    description: 'Human-like AI voice agents for calls, support, and sales. 24/7 phone answering with GPT-4 + ElevenLabs. Speaks 30+ languages with emotion.',
    iconName: 'Mic',
    deliverables: [
      'Custom AI Voice + Personality',
      'CRM + Calendar Integration',
      'Call Recording + Transcripts',
      'Multi-language Support'
    ],
    priceStarting: '$350',
    turnaround: '5 - 7 Days',
    popular: true
  },
  {
    id: 's4',
    title: 'AI Chatbot Agents',
    description: 'Train GPT-4 chatbots on your business data. Website chat, WhatsApp, and Instagram DMs that qualify leads and close sales automatically.',
    iconName: 'Bot',
    deliverables: [
      'Custom GPT Trained on Your Data',
      'Website + WhatsApp + IG Integration',
      'Lead Capture + Auto Follow-up',
      'Analytics Dashboard'
    ],
    priceStarting: '$299',
    turnaround: '3 - 5 Days'
  },
  {
    id: 's5',
    title: 'AI Content Calendar',
    description: '30-day AI-generated content calendar with hooks, captions, and hashtags. For LinkedIn, Instagram, TikTok. Never run out of ideas again.',
    iconName: 'Calendar',
    deliverables: [
      '30 Days Content Strategy',
      'AI Generated Captions + Hashtags',
      'Viral Hook Templates',
      'Canva Design Templates Included'
    ],
    priceStarting: '$199',
    turnaround: '2 - 3 Days'
  },
  {
    id: 's6',
    title: 'AI Automation Workflows',
    description: 'Zapier, Make, n8n automations to save 10+ hours/week. Connect ChatGPT, Sheets, Email, CRM. Full business automation on autopilot.',
    iconName: 'Brain',
    deliverables: [
      'Custom n8n Workflow',
      'GPT Integration + Data Processing',
      'Email + CRM + Sheet Automation',
      '1 Month Support + Documentation'
    ],
    priceStarting: '$450',
    turnaround: '5 - 10 Days'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Sterling',
    role: 'Creative Director',
    company: 'Apex Game Studios',
    avatar: '',
    rating: 5,
    review: 'delivered unbelievable character rigging for our AAA sci-fi shooter prototype. The facial blendshapes integrated seamlessly into Unreal Engine 5 without a single hitch!',
    projectRef: 'Aetheria - Cyberpunk Character'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Product Marketing',
    company: 'Lumina Tech',
    avatar: '',
    rating: 5,
    review: 'The 3D exploded view product commercial generated over 2.4M organic views on launch week. The lighting, camera choreography, and glass textures were absolute perfection.',
    projectRef: 'Lumina Smartwatch Reveal'
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Executive Producer',
    company: 'Vanguard Pictures',
    avatar: '',
    rating: 5,
    review: ' has an exceptional eye for timing, weight, and visual polish. He completed our title VFX sequence ahead of schedule and incorporated feedback instantly.',
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
    id: 'p-starter',
    name: 'Starter Pack',
    price: '$499',
    period: 'per project',
    description: 'Perfect for creators and small businesses starting with AI + 3D.',
    features: [
      '1x 4k Product Advertisement Ad - 15s',
      'Basic 3d-Website Animation Landing Section',
      'AI Content Calendar - 1 Month',
      '2 Revision Rounds',
      'Email Support',
      '5-7 Days Turnaround'
    ],
    highlighted: true,
    ctaText: 'Choose'
  },
  {
    id: 'p-standard',
    name: 'Standard Pack',
    price: '$1,499',
    period: 'per project',
    description: 'Most popular for businesses needing automation + web + ads.',
    features: [
      'Full 3d-Website Animation - 5 Pages',
      'Voice AI Agent: Receptionist + Cold Caller',
      'Conversational Chatbot for Website/Social',
      '2x 4k Product Advertisement Ads',
      'Unlimited Revisions during Draft',
      'Priority Support + n8n Setup',
      '10-14 Days Turnaround'
    ],
    highlighted: true,
    ctaText: 'Choose'
  },
  {
    id: 'p-pro',
    name: 'Pro Agency Pack',
    price: '$3,999+',
    period: 'per campaign',
    description: 'Full-stack solution for brands. All 6 services + custom workflows.',
    features: [
      'All 6 Services Included',
      'AI Automation Workflows - Unlimited',
      'AI Content Calendar - 3 Months',
      'Custom Voice AI + Chatbot Training',
      'Advanced 3D Website + Animations',
      'Monthly Ads + VFX Package',
      'Dedicated Manager + 24/7 Slack Access',
      'Full IP Ownership & Source Files'
    ],
    highlighted: true,
    ctaText: 'Choose'
  }
];
export const FAQS: FaqItem[] = [
  {
    id: '',
    question: '',
    answer: '',
    category: '',
  },
  {
    id: '',
    question: '',
    answer: '',
    category: '',
  },
  {
    id: '',
    question: '',
    answer: '',
    category: '',
  },
  {
    id: '',
    question: '',
    answer: '',
    category: '',
  }
];

export const STATS: StatItem[] = [
  { id: 's1', label: 'Projects Completed', value: 20, suffix: '+', icon: 'CheckCircle2' },
  { id: 's2', label: 'Happy Global Clients', value: 9, suffix: '', icon: 'Smile' },
  { id: 's3', label: 'Industry Awards', value:2, suffix: '', icon: 'Trophy' },
  { id: 's4', label: 'Years Experience', value: 2, suffix: ' Yrs', icon: 'Calendar' },
  { id: 's5', label: 'Render Hours Saved', value: 125, suffix: 'h', icon: 'Zap' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {id:'g1',title:'Custom Product Advertisement Ads',category:'4k Ads',imageUrl:'p1.png',software:'VFX, Adobe, Blender +2'},
  {id:'g2',title:'3d-Website Animation',category:'Web Dev',imageUrl:'p2.png',software:'React, Node, Typescript +2'},
  {id:'g3',title:'Voice Agent: Receptionist and Cold caller',category:'Voice AI',imageUrl:'p3.jpeg',software:'Twilio, n8n, API +2'},
  {id:'g4',title:'Conversational Chatbot For Businesses',category:'Agentic AI',imageUrl:'p4.jpeg',software:'n8n, social platform, API'},
  {id:'g5',title:'AI Content Calender for Creator',category:'AI Calender',imageUrl:'p5.png',software:'n8n, Integrated Calender, API +2'},
  {id:'g6',title:'Overgrown Ruins - Procedural Blender Environment',category:'AI Automation Workflows',imageUrl:'p6.png',software:'n8n, API Keys, AI Models +1'},
];
