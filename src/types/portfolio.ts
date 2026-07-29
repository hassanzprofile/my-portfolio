export type ProjectCategory =
  | 'All'
  | 'Character Animation'
  | 'Product Animation'
  | 'Motion Graphics'
  | 'Agentic AI'
  | 'VFX'
  | 'Blender Projects';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl?: string;
  threeModelType?: 'cyber-helmet' | 'mech-arm' | 'crystal-orb' | 'sneaker-3d' | 'drone-core';
  gallery: string[];
  description: string;
  fullDetails: string;
  technologies: string[];
  client: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  category: string;
  tags: string[];
  description: string;
  contentMarkdown: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readingTime: string;
  commentsCount: number;
  featured?: boolean;
  views?: number;
}

export interface Comment {
  id: string;
  postId: string;
  name: string;
  email: string;
  content: string;
  date: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  priceStarting: string;
  turnaround: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  projectRef?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: '3D & Rigging' | 'Motion & Compositing' | 'Real-Time Engines' | 'Texturing & Sculpting';
  level: number; // 0 to 100
  icon: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Licensing';
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  software: string;
  likes: number;
}
