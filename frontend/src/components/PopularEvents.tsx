import React from 'react';
import { EventItem } from '../types';
import { EventCard } from './EventCard';
import { Flame, ArrowRight } from 'lucide-react';

interface PopularEventsProps {
  events: EventItem[];
  onBookNow?: (event: EventItem) => void;
  onViewDetails?: (event: EventItem) => void;
  onViewAll?: () => void;
}

export const PopularEvents: React.FC<PopularEventsProps> = ({
  events,
  onBookNow,
  onViewDetails,
  onViewAll,
}) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="space-y-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>Top Rated Portfolio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Popular & Featured Events
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Discover our most requested event concepts and recent signature celebrations.
          </p>
        </div>

        {onViewAll && (
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors group self-start sm:self-auto"
          >
            <span>Explore Full Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 3).map(event => (
          <EventCard
            key={event.id}
            event={event}
            onBookNow={onBookNow}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;
