import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { Calendar, Users, DollarSign, User, Mail, Phone, FileText, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
  onSubmitSuccess?: (data: BookingFormData) => void;
  onCancel?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  onSubmitSuccess,
  onCancel,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: initialService || 'Luxury Weddings',
    eventDate: '',
    guestCount: '100-250',
    budgetRange: '$25,000 - $50,000',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API network call delay
    await new Promise(res => setTimeout(res, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center space-y-6 animate-scale-up">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-white">Consultation Requested!</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our lead event director will reach out within 2 hours to confirm your custom proposal for <span className="text-rose-300 font-semibold">{formData.eventType}</span>.
          </p>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
          <div className="flex justify-between border-b border-slate-800/80 pb-2">
            <span className="text-slate-400">Target Date:</span>
            <span className="font-semibold text-white">{formData.eventDate || 'Flexible'}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800/80 pb-2">
            <span className="text-slate-400">Guest Count:</span>
            <span className="font-semibold text-white">{formData.guestCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Estimated Budget:</span>
            <span className="font-semibold text-amber-300">{formData.budgetRange}</span>
          </div>
        </div>

        {onCancel && (
          <button
            onClick={onCancel}
            className="px-6 py-2.5 glass-card text-xs font-semibold text-slate-200 rounded-xl hover:text-white transition-colors"
          >
            Done & Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-rose-400" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Victoria Sterling"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="victoria@example.com"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all"
          />
        </div>
      </div>

      {/* Phone & Event Category Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Phone Number *</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (800) 555-0199"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Event Service *</span>
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500 transition-all cursor-pointer"
          >
            <option value="Luxury Weddings">Luxury Weddings</option>
            <option value="Corporate Summits">Corporate Summits</option>
            <option value="Milestones & Galas">Milestones & Galas</option>
            <option value="Live Concerts & Shows">Live Concerts & Shows</option>
            <option value="Bespoke Private Soirée">Bespoke Private Soirée</option>
          </select>
        </div>
      </div>

      {/* Date, Guest Count & Budget Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Target Date</span>
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-rose-400" />
            <span>Estimated Guests</span>
          </label>
          <select
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500 transition-all cursor-pointer"
          >
            <option value="Under 50">Under 50 Guests</option>
            <option value="50-100">50 - 100 Guests</option>
            <option value="100-250">100 - 250 Guests</option>
            <option value="250-500">250 - 500 Guests</option>
            <option value="500+">500+ Guests</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>Budget Range</span>
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500 transition-all cursor-pointer"
          >
            <option value="$10,000 - $25,000">$10k - $25k</option>
            <option value="$25,000 - $50,000">$25k - $50k</option>
            <option value="$50,000 - $100,000">$50k - $100k</option>
            <option value="$100,000+">$100k+</option>
          </select>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-slate-400" />
          <span>Special Requirements or Theme Ideas</span>
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Describe your vision, preferred venue aesthetic, or special performance requests..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all resize-none"
        />
      </div>

      {/* Action Submit Button */}
      <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800/80">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-3 glass-card text-xs font-semibold text-slate-400 hover:text-white rounded-xl transition-colors"
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-rose-950/40 hover:shadow-rose-900/60 hover:scale-[1.01] transition-all flex items-center gap-2"
        >
          {isSubmitting ? (
            <span>Sending Proposal Request...</span>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
