import React from 'react';
import { Sparkles, Calendar, Award, Star, ArrowRight, Heart, Users, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-600/20 via-rose-500/15 to-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Grid Lines Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-500/30 text-xs font-semibold text-rose-300 mb-8 animate-fade-in shadow-lg shadow-rose-950/20 hover:border-brand-500/60 transition-colors">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Premier Event Planning & Luxury Management</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] mb-6">
          Making Every <span className="text-gradient-rose">Celebration</span> Extraordinary & <span className="text-gradient-gold">Unforgettable</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          We plan, organize, and manage weddings, corporate galas, milestone birthdays, and private events with care, creativity, and flawless attention to detail — so you can enjoy every moment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white rounded-2xl font-semibold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 glass-card text-slate-200 rounded-2xl font-semibold text-base hover:bg-slate-800/80 hover:text-white border border-slate-700/60 transition-all flex items-center justify-center gap-3 group"
          >
            <Play className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform fill-brand-400/20" />
            <span>Explore Past Events</span>
          </a>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl glass-card text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif">500+</div>
              <div className="text-xs text-slate-400 font-medium">Events Managed</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Star className="w-5 h-5 fill-amber-400/30" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif">4.95 / 5</div>
              <div className="text-xs text-slate-400 font-medium">Client Rating</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif">100%</div>
              <div className="text-xs text-slate-400 font-medium">Stress-Free</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-serif">12+ Yrs</div>
              <div className="text-xs text-slate-400 font-medium">Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
