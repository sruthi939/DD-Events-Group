import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface EventBannerProps {
  onOpenBooking?: () => void;
}

export const EventBanner: React.FC<EventBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-950 p-8 sm:p-12 shadow-2xl">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-semibold text-rose-300">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Exclusive Seasonal Offer • 2025 Booking Window</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
          Reserve Your Luxury Celebration & Receive Complimentary Bespoke Concierge
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          Book your 2025 event dates today to unlock dedicated event director support, tailored 3D floor plan rendering, and VIP priority vendor access.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white rounded-xl text-sm font-semibold shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all flex items-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>Claim Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 px-4 py-3 glass-card rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Guaranteed Perfection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
