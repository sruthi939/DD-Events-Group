import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface BookEventProps {
  initialService?: string;
  onBackToHome?: () => void;
}

export const BookEvent: React.FC<BookEventProps> = ({ initialService, onBackToHome }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Turnkey Event Management Proposal</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Schedule Your Luxury Event Consultation
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Fill out your event details below to receive a personalized proposal, 3D floor plan layout, and custom pricing estimate within 2 hours.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
        <BookingForm initialService={initialService} onCancel={onBackToHome} />
      </div>
    </div>
  );
};

export default BookEvent;
