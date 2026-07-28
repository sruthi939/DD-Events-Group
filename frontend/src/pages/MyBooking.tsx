import React from 'react';
import { useBooking } from '../hooks/useBooking';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Calendar, MapPin, Users, FileText, CheckCircle2, Clock, XCircle, Download, ArrowRight } from 'lucide-react';

interface MyBookingProps {
  onOpenNewBooking?: () => void;
}

export const MyBookingContent: React.FC<MyBookingProps> = ({ onOpenNewBooking }) => {
  const { bookings, cancelBooking } = useBooking();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">My Event Reservations</h1>
          <p className="text-xs text-slate-400 mt-1">Track active proposals, event dates, and deposit receipts.</p>
        </div>

        {onOpenNewBooking && (
          <button
            onClick={onOpenNewBooking}
            className="px-5 py-2.5 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-semibold shadow-md flex items-center gap-2 self-start sm:self-auto"
          >
            <Calendar className="w-4 h-4" />
            <span>Book New Event</span>
          </button>
        )}
      </div>

      {/* Bookings List */}
      {bookings.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center border border-slate-800 space-y-4 max-w-md mx-auto my-12">
          <Calendar className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-white">No Event Bookings Found</h3>
          <p className="text-xs text-slate-400">You haven't scheduled any event consultations yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map(booking => {
            const statusConfig = {
              Confirmed: { bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400', icon: <CheckCircle2 className="w-4 h-4" /> },
              Pending: { bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400', icon: <Clock className="w-4 h-4" /> },
              Completed: { bg: 'bg-brand-500/10 border-brand-500/30 text-brand-400', icon: <CheckCircle2 className="w-4 h-4" /> },
              Cancelled: { bg: 'bg-red-500/10 border-red-500/30 text-red-400', icon: <XCircle className="w-4 h-4" /> },
            }[booking.status];

            return (
              <div key={booking.id} className="glass-card rounded-3xl p-6 border border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-rose-300">{booking.bookingNumber}</span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${statusConfig.bg}`}>
                      {statusConfig.icon}
                      <span>{booking.status}</span>
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">Booked on {new Date(booking.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 block font-semibold">Event Type</span>
                    <span className="font-bold text-white text-sm">{booking.eventType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Scheduled Date</span>
                    <span className="text-amber-300 font-semibold">{booking.eventDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Guest Count</span>
                    <span>{booking.guestCount} Guests</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Budget Range</span>
                    <span className="text-emerald-400 font-bold">{booking.budget}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
                  <button className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white glass-card px-3.5 py-2 rounded-xl border border-slate-800">
                    <Download className="w-3.5 h-3.5 text-rose-400" />
                    <span>Download Proposal Invoice (PDF)</span>
                  </button>

                  {booking.status === 'Pending' || booking.status === 'Confirmed' ? (
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                    >
                      Cancel Reservation
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const MyBooking: React.FC<MyBookingProps> = props => (
  <ProtectedRoute>
    <MyBookingContent {...props} />
  </ProtectedRoute>
);

export default MyBooking;
