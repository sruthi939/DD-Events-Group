import React, { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { ScrollToTop } from '../components/ScrollToTop';
import { useBooking } from '../hooks/useBooking';

interface MainLayoutProps {
  children: ReactNode;
  onOpenLogin?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, onOpenLogin }) => {
  const { isModalOpen, closeBookingModal, initialService, openBookingModal } = useBooking();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar
        onOpenBooking={() => openBookingModal()}
        onOpenLogin={onOpenLogin || (() => {})}
      />

      {/* Main Page Body */}
      <main className="flex-grow pt-24 sm:pt-28">
        {children}
      </main>

      {/* Scroll Back To Top Floating Action Button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />

      {/* Global Interactive Booking Drawer Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        initialService={initialService}
      />
    </div>
  );
};

export default MainLayout;
