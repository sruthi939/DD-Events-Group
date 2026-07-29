import React from 'react';
import { EventItem } from '../types';
import { EventCard } from './EventCard';
import { CalendarX } from 'lucide-react';

interface EventListProps {
  events: EventItem[];
  onBookNow?: (event: EventItem) => void;
  onViewDetails?: (event: EventItem) => void;
  loading?: boolean;
}

export const EventList: React.FC<EventListProps> = ({
  events,
  onBookNow,
  onViewDetails,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div
            key={i}
            className="glass-card rounded-3xl h-96 border border-slate-800 animate-pulse bg-slate-900/40"
          />
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-12 text-center border border-slate-800 max-w-xl mx-auto space-y-4 my-8">
        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mx-auto">
          <CalendarX className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-bold text-white">No Events Found</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          We couldn't find any events matching your selected criteria. Try resetting your search terms or choosing a different category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          onBookNow={onBookNow}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default EventList;
