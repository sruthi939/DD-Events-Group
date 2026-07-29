import React from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

interface UpcomingEventsProps {
  events: EventItem[];
  onSelectEvent?: (event: EventItem) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, onSelectEvent }) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="glass-card rounded-3xl border border-slate-800/80 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white">Upcoming Open Dates</h3>
            <p className="text-xs text-slate-400">Next available luxury production windows</p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold hidden sm:inline-block">
          Booking Open
        </span>
      </div>

      {/* List items */}
      <div className="divide-y divide-slate-800/80">
        {events.slice(0, 4).map(event => (
          <div
            key={event.id}
            onClick={() => onSelectEvent && onSelectEvent(event)}
            className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer hover:bg-slate-900/40 px-3 rounded-2xl transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-slate-800">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-200 group-hover:text-rose-300 transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {event.location.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-xs font-bold text-white font-serif">${event.price.toLocaleString()}</span>
              <div className="w-8 h-8 rounded-xl glass-card flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-rose-500/50 transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
