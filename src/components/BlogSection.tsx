import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Clock, Calendar, ArrowRight, Mail, Tag, Send, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';
import { SingleBlogPage } from './SingleBlogPage';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const postsPerPage = 6;

  const categories = ['All', 'Rigging & Animation', 'Real-Time Rendering', 'Motion Graphics'];

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return ['All', ...Array.from(tagsSet)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    } catch {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  if (selectedPost) {
    return (
      <SingleBlogPage
        post={selectedPost}
        onBack={() => setSelectedPost(null)}
        onSelectTag={(tag) => {
          setSelectedPost(null);
          setSelectedTag(tag);
        }}
      />
    );
  }

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Animation Insights & Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            3D Studio <span className="gradient-text">Blog & Tutorials</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Deep-dive tutorials on Blender rigging, Unreal Engine 5 cinematics, procedural shader nodes, and production workflows.
          </p>
        </div>

        {/* Featured Post Banner */}
        {featuredPost && selectedCategory === 'All' && selectedTag === 'All' && !searchQuery && (
          <div
            onClick={() => setSelectedPost(featuredPost)}
            className="cursor-pointer group glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 hover:border-purple-500/60 shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider">
                Featured Article
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readingTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {featuredPost.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-purple-400 group-hover:text-cyan-300">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Controls: Search & Tag Filter */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white font-semibold shadow-md'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

          </div>

          {/* Tag Cloud Pills */}
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Tag className="w-3 h-3 text-purple-400" />
              <span>Tags:</span>
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all ${
                  selectedTag === tag
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {tag === 'All' ? 'All Tags' : `#${tag}`}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="cursor-pointer group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-panel text-[10px] font-mono text-cyan-300 border border-white/15">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-[11px] text-slate-300 font-mono">{post.author.name}</span>
                </div>

                <span className="text-xs font-semibold text-purple-400 group-hover:text-cyan-300 flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-xl font-mono text-xs font-semibold transition-all ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'glass-panel text-slate-300 hover:bg-white/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <div className="glass-panel p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 via-slate-900 to-blue-900/30 text-center max-w-2xl mx-auto space-y-4">
          <Mail className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="text-2xl font-bold text-white">Subscribe to 3D Technical Newsletter</h3>
          <p className="text-xs text-slate-300">
            Get bi-weekly breakdown nodes, Blender rigging scripts, and UE5 optimization tips delivered directly to your inbox.
          </p>

          {newsletterSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed! Check your email for our free Rigging Cheat Sheet.</span>
            </div>
          )}

          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-purple-500/30"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
