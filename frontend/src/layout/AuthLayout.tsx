import React, { ReactNode } from 'react';
import { Sparkles, Award, Star, ArrowLeft } from 'lucide-react';
import { logo } from '../assets/assets';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  onBackToHome?: () => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  onBackToHome,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Dynamic Background Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 glass-card rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden">
        {/* Left Decorative Showcase Panel */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-950 p-10 flex-col justify-between relative border-r border-slate-800/60">
          <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Top Logo */}
          <div className="relative z-10">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            )}

            <div className="flex items-center gap-3">
              <img src={logo} alt="DD Events Group" className="w-10 h-10 object-cover rounded-xl shadow-lg" />
              <div>
                <h2 className="font-serif text-xl font-bold text-white tracking-tight">
                  DD <span className="text-gradient-rose">Events</span> Group
                </h2>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Luxury Event Management</p>
              </div>
            </div>
          </div>

          {/* Center Brand Tagline */}
          <div className="relative z-10 space-y-4 my-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Making Magic Happen</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-white leading-tight">
              Crafting Unforgettable Experiences & Grand Celebrations
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Join over 500+ satisfied clients who trust DD Events Group for flawless luxury weddings, corporate summits, and milestone celebrations.
            </p>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">4.95 / 5 Rating</div>
                <div className="text-[10px] text-slate-400">From 500+ Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">12+ Years</div>
                <div className="text-[10px] text-slate-400">Industry Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Content Area */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-slate-950/70 backdrop-blur-md">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="lg:hidden inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          )}

          <div className="mb-8">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
