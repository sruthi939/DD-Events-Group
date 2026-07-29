import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const Newletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl glass-card border border-slate-800 p-8 sm:p-12 text-center max-w-4xl mx-auto my-12 shadow-2xl">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-brand-600/10 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>VIP Access & Design Trends</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Subscribe to DD VIP Circle
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Receive exclusive insider event planning insights, luxury wedding trend reports, and priority early access to limited gala dates.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 glass-card px-6 py-3 rounded-2xl border border-emerald-500/30 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you! You are now subscribed to DD VIP Circle.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-2xl text-xs font-semibold shadow-lg shadow-rose-950/30 hover:scale-[1.02] transition-transform whitespace-nowrap"
            >
              Join VIP Circle
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newletter;
