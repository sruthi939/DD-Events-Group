import React from 'react';
import { Sparkles, ArrowLeft, Home as HomeIcon } from 'lucide-react';

interface NotFoundProps {
  onBackToHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-md mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>404 Page Not Found</span>
        </div>

        <h1 className="font-serif text-6xl sm:text-8xl font-bold text-white tracking-tight">404</h1>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-200">
          This Page Has Left the Gala
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is currently undergoing event decoration.
        </p>

        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="px-7 py-3.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-2xl text-xs font-semibold shadow-xl shadow-rose-950/40 hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NotFound;
