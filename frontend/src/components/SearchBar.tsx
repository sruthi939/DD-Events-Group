import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  sortBy?: string;
  onSortChange?: (sort: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search weddings, corporate summits, galas, locations...',
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <div className="relative flex-1 w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all shadow-inner"
        />
        {value && (
          <button
            onClick={() => {
              onChange('');
              if (onClear) onClear();
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Sort By Dropdown */}
      {onSortChange && (
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <SlidersHorizontal className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={sortBy || 'popular'}
              onChange={e => onSortChange(e.target.value)}
              className="w-full sm:w-auto bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold rounded-2xl pl-10 pr-8 py-3.5 appearance-none focus:outline-none focus:border-rose-500 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="date">Upcoming Date</option>
              <option value="price-low">Budget: Low to High</option>
              <option value="price-high">Budget: High to Low</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
