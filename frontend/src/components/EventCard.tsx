import React from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import { EventItem } from '../types';

interface EventCardProps {
  event: EventItem;
  onBookNow?: (event: EventItem) => void;
  onViewDetails?: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onBookNow,
  onViewDetails,
}) => {
  return (
    <div className="group glass-card rounded-3xl border border-slate-800/80 overflow-hidden hover:border-brand-500/40 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-1">
      {/* Image Thumbnail Header */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-semibold text-rose-300 flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{event.category}</span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{event.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-white group-hover:text-rose-300 transition-colors line-clamp-1 mb-2">
            {event.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {event.description}
          </p>

          {/* Quick Info Grid */}
          <div className="space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5 text-brand-400" />
                <span>Up to {event.guestCount} guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Est. Budget</span>
            <span className="text-base font-bold text-white font-serif">${event.price.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-2">
            {onViewDetails && (
              <button
                onClick={() => onViewDetails(event)}
                className="px-3.5 py-2 glass-card text-xs font-semibold text-slate-300 rounded-xl hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                Details
              </button>
            )}

            {onBookNow && (
              <button
                onClick={() => onBookNow(event)}
                className="px-4 py-2 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-md hover:shadow-brand-500/30 flex items-center gap-1.5 group/btn transition-all"
              >
                <span>Reserve</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
