import React from 'react';
import { EventItem } from '../types';
import { useBooking } from '../hooks/useBooking';
import { Calendar, MapPin, Users, Star, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EventDetailsProps {
  event: EventItem | null;
  onBack?: () => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event, onBack }) => {
  const { openBookingModal } = useBooking();

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-white">Event Not Found</h2>
        <p className="text-xs text-slate-400">The requested event package details could not be loaded.</p>
        {onBack && (
          <button
            onClick={onBack}
            className="px-6 py-2.5 glass-card text-xs font-semibold text-slate-200 rounded-xl hover:text-white"
          >
            Back to Catalog
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* Top Back Navigation Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events Catalog</span>
        </button>
      )}

      {/* Hero Banner Header */}
      <div className="relative rounded-3xl overflow-hidden h-[400px] border border-slate-800 shadow-2xl">
        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
              {event.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white">{event.title}</h1>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" />{event.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" />{event.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2 glass-card rounded-2xl border border-slate-800 text-right">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Client Rating</span>
              <span className="text-sm font-bold text-amber-300 flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {event.rating.toFixed(2)} / 5.0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Overview */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-4">
            <h2 className="font-serif text-xl font-bold text-white">Event Overview</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{event.description}</p>

            {event.features && event.features.length > 0 && (
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Key Package Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Reservation Box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs text-slate-400 block font-semibold">Estimated Package Budget</span>
              <span className="font-serif text-3xl font-bold text-white">${event.price.toLocaleString()}</span>
              <span className="text-[11px] text-slate-400 block mt-1">Includes venue coordination & director services</span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5"><Users className="w-4 h-4 text-brand-400" /> Guest Capacity:</span>
                <span className="font-semibold text-white">Up to {event.guestCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Guarantee:</span>
                <span className="font-semibold text-emerald-400">100% Stress-Free</span>
              </div>
            </div>

            <button
              onClick={() => openBookingModal(event.category)}
              className="w-full py-4 bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white rounded-2xl font-semibold text-xs shadow-xl shadow-rose-950/40 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Book Consultation for This Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
