import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle, Send, User, Mail, Phone, Users, DollarSign } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: initialService || 'Luxury Weddings',
    eventDate: '',
    guestCount: '100-250',
    budgetRange: '$15,000 - $30,000',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative max-w-xl w-full glass-card rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Event Consultation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Plan Your Event with <span className="text-gradient-rose">DD Events Group</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Fill out the form below and our lead event coordinator will contact you within 24 hours with a custom proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-400" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-rose-400" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    <option value="Luxury Weddings">Luxury Weddings</option>
                    <option value="Corporate Galas & Summits">Corporate Galas & Summits</option>
                    <option value="Milestone Birthdays">Milestone Birthdays</option>
                    <option value="Private Soirées & Anniversaries">Private Soirées & Anniversaries</option>
                    <option value="Other Custom Event">Other Custom Event</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" /> Target Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    <option value="Under 50">Under 50</option>
                    <option value="50 - 100">50 - 100</option>
                    <option value="100 - 250">100 - 250</option>
                    <option value="250 - 500">250 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    <option value="$5,000 - $15,000">$5k - $15k</option>
                    <option value="$15,000 - $30,000">$15k - $30k</option>
                    <option value="$30,000 - $60,000">$30k - $60k</option>
                    <option value="$60,000+">$60k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Event Vision / Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your venue preferences, theme ideas, or specific requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 bg-gradient-to-r from-brand-600 via-rose-600 to-amber-500 text-white rounded-xl font-bold text-base shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Event Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <span className="text-rose-400 font-semibold">{formData.name}</span>! Our lead event coordinator has received your request for <span className="text-amber-300 font-semibold">{formData.eventType}</span> on <span className="text-purple-300 font-semibold">{formData.eventDate || 'your date'}</span>.
            </p>
            <p className="text-xs text-slate-400">
              We have sent a confirmation email to <span className="text-slate-200">{formData.email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-slate-800 text-slate-200 rounded-xl font-medium text-xs hover:bg-slate-700 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
