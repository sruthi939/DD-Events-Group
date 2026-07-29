import React from 'react';
import { EventCategory } from '../types';
import { Sparkles, Heart, Briefcase, PartyPopper, Music } from 'lucide-react';

interface CategoryFilterProps {
  categories: EventCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  PartyPopper: <PartyPopper className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none max-w-full">
      {categories.map(cat => {
        const isActive = activeCategory.toLowerCase() === cat.id.toLowerCase();
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-lg shadow-rose-950/40 border border-rose-400/40 scale-[1.02]'
                : 'glass-card text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-900/80'
            }`}
          >
            <span className={isActive ? 'text-amber-300' : 'text-rose-400'}>
              {ICON_MAP[cat.iconName] || <Sparkles className="w-4 h-4" />}
            </span>
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
