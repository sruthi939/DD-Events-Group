import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EventGallery } from './components/EventGallery';
import { Testimonials } from './components/Testimonials';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <EventGallery />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
