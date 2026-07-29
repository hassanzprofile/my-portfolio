import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, MessageSquare, Send, CheckCircle2, Bookmark, ThumbsUp } from 'lucide-react';
import { BlogPost, Comment } from '../types/portfolio';

interface SingleBlogPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectTag: (tag: string) => void;
}

export const SingleBlogPage: React.FC<SingleBlogPageProps> = ({ post, onBack, onSelectTag }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likesCount, setLikesCount] = useState(24);
  const [liked, setLiked] = useState(false);

  // Fetch comments from backend API
  useEffect(() => {
    fetch(`/api/comments/${post.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.comments) {
          setComments(data.comments);
        }
      })
      .catch(() => {
        // Fallback default sample comment
        setComments([
          {
            id: 'c1',
            postId: post.id,
            name: 'Sarah Connor',
            email: 'sarah@skynet.org',
            content: 'Incredible breakdown on bone constraints! This saved me hours during character setup.',
            date: '2026-07-21',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
          }
        ]);
      });
  }, [post.slug, post.id]);

  // Track scroll reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/comments/${post.slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, content })
      });
      const data = await res.json();

      if (data.comment) {
        setComments((prev) => [data.comment, ...prev]);
        setName('');
        setEmail('');
        setContent('');
        setCommentSuccess(true);
        setTimeout(() => setCommentSuccess(false), 4000);
      }
    } catch {
      // Local fallback
      const newC: Comment = {
        id: 'c_' + Date.now(),
        postId: post.id,
        name,
        email,
        content,
        date: new Date().toISOString().split('T')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`
      };
      setComments((prev) => [newC, ...prev]);
      setName('');
      setEmail('');
      setContent('');
      setCommentSuccess(true);
      setTimeout(() => setCommentSuccess(false), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out "${post.title}" by Julian Vance`);

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="pt-28 pb-24 relative min-h-screen bg-slate-950">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 text-xs font-mono transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-purple-400" />
          <span>Back to All Posts</span>
        </button>

        {/* Post Meta Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center justify-between py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
              />
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400 font-mono">{post.author.role}</div>
              </div>
            </div>

            {/* Like & Share triggers */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setLiked(!liked);
                  setLikesCount(liked ? likesCount - 1 : likesCount + 1);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                  liked
                    ? 'bg-purple-600 text-white border-purple-500'
                    : 'glass-panel text-slate-300 border-white/10 hover:text-white'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{likesCount}</span>
              </button>

              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 border border-white/10 text-xs"
                title="Share on X / Twitter"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Markdown Content Body */}
        <div className="prose prose-invert max-w-none text-slate-200 space-y-6 text-sm sm:text-base leading-relaxed glass-panel p-6 sm:p-10 rounded-3xl border border-white/10">
          <p className="text-base sm:text-lg text-purple-200 font-light italic border-l-4 border-purple-500 pl-4 py-1 bg-purple-950/20 rounded-r-xl">
            {post.description}
          </p>

          <div className="space-y-4 whitespace-pre-line">
            {post.contentMarkdown}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-purple-400" />
            {post.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag(tag)}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-700 hover:border-cyan-400 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comments Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Community Discussion ({comments.length})</h3>
            </div>
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handlePostComment} className="space-y-4 bg-slate-900/60 p-5 rounded-2xl border border-white/10">
            <h4 className="text-sm font-semibold text-slate-200">Leave a Reply</h4>

            {commentSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Your comment has been posted successfully!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              rows={3}
              placeholder="Share your thoughts or technical questions..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-purple-500/25 transition-all"
            >
              <span>{submitting ? 'Posting...' : 'Post Comment'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-4 pt-2">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-8 h-8 rounded-full bg-purple-950 border border-purple-500/30"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">{comment.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{comment.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pl-10">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};
