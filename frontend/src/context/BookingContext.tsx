import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Booking, BookingFormData } from '../types';

interface BookingContextType {
  bookings: Booking[];
  isModalOpen: boolean;
  initialService: string;
  openBookingModal: (serviceName?: string) => void;
  closeBookingModal: () => void;
  createBooking: (data: BookingFormData) => Promise<Booking>;
  cancelBooking: (id: string) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

const BOOKINGS_STORAGE_KEY = 'dd_events_user_bookings';

const DEFAULT_BOOKINGS: Booking[] = [
  {
    id: 'bk_101',
    bookingNumber: 'DD-2025-9842',
    userName: 'Alex Morgan',
    userEmail: 'alex.m@example.com',
    userPhone: '+1 (800) 555-0199',
    eventType: 'Luxury Weddings',
    eventDate: '2025-08-22',
    location: 'Santa Barbara Villa, CA',
    guestCount: 200,
    budget: '$30,000 - $50,000',
    status: 'Confirmed',
    createdAt: '2025-01-14T10:30:00Z',
    totalAmount: 35000,
    depositPaid: 10000,
    notes: 'Requires outdoor lighting canopy and vegan dessert catering.'
  },
  {
    id: 'bk_102',
    bookingNumber: 'DD-2025-4421',
    userName: 'Alex Morgan',
    userEmail: 'alex.m@example.com',
    userPhone: '+1 (800) 555-0199',
    eventType: 'Corporate Summits',
    eventDate: '2025-11-05',
    location: 'San Jose Tech Center, CA',
    guestCount: 350,
    budget: '$50,000+',
    status: 'Pending',
    createdAt: '2025-02-01T15:45:00Z',
    totalAmount: 48000,
    depositPaid: 5000,
    notes: 'Keynote audio-visual staging and live streaming stream configuration.'
  }
];

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_BOOKINGS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  useEffect(() => {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const openBookingModal = (serviceName?: string) => {
    if (serviceName) {
      setInitialService(serviceName);
    }
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setInitialService('');
  };

  const createBooking = async (data: BookingFormData): Promise<Booking> => {
    const newBooking: Booking = {
      id: 'bk_' + Math.random().toString(36).substring(2, 9),
      bookingNumber: 'DD-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
      userName: data.name,
      userEmail: data.email,
      userPhone: data.phone,
      eventType: data.eventType || 'Custom Event',
      eventDate: data.eventDate,
      location: 'Custom Venue / Client Location',
      guestCount: parseInt(data.guestCount) || 100,
      budget: data.budgetRange,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      notes: data.notes,
    };

    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: 'Cancelled' as const } : b))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        isModalOpen,
        initialService,
        openBookingModal,
        closeBookingModal,
        createBooking,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
