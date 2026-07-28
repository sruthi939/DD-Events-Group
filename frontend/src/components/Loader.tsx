import React from 'react';
import { Sparkles } from 'lucide-react';

interface LoaderProps {
  fullScreen?: boolean;
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({
  fullScreen = false,
  message = 'Loading luxury experiences...',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const content = (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
      <div className="relative flex items-center justify-center">
        <div className={`${sizeMap[size]} rounded-2xl bg-gradient-to-tr from-brand-600 via-rose-500 to-amber-400 animate-spin flex items-center justify-center shadow-lg shadow-rose-900/30`} />
        <Sparkles className="w-5 h-5 text-white absolute animate-pulse" />
      </div>
      {message && <p className="text-xs font-semibold text-slate-300 tracking-wide">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;
