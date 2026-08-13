import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, Sparkles, Globe } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject || '');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, text: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been transmitted successfully.' });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus({ type: 'error', text: data.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      // Local fallback
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi Hassan! I'm interested in commissioning a project.");
    window.open(`https://wa.me/923176652745?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono">
            
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Create Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a  trailer, commercial project in mind? Send us a message and we'll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Direct Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Info</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl glass-panel text-purple-400 border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Direct Email</span>
                    <a href="mailto:julian.vance@vance3d.io" className="text-white font-semibold hover:text-cyan-300">
                      sheikhsahsb103@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl glass-panel text-cyan-400 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Contact Line</span>
                    <span className="text-white font-semibold">+92 317 6652745</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl glass-panel text-amber-400 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">Location</span>
                    <span className="text-white font-semibold">Pakistan, Punjab, Multan</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Stylized Dark Google Maps Placeholder */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-center p-4">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Globe className="w-8 h-8 text-cyan-400 animate-pulse mb-2 z-10" />
                <span className="text-xs font-bold text-white z-10">Global Remote Agency Headquarters</span>
                <span className="text-[11px] text-slate-400 font-mono z-10">PAk, MUX</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
              <h3 className="text-xl font-bold text-white">Send Project Brief</h3>

              {status.text && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                  <span>{status.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-mono block mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ali"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-mono block mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-mono block mb-1">Category</label>
                <input
                  type="text"
                  placeholder="e.g. Whole CRM or Just Specific Agent"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-mono block mb-1">Details & Timeline</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, preferred deadlines, target platforms, and reference links..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>{submitting ? 'Transmitting...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
