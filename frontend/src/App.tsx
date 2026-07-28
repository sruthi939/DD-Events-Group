import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EventGallery } from './components/EventGallery';
import { Testimonial } from './components/Testimonial';
import { BookingModal } from './components/BookingModal';
import { Login } from './pages/Login';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login'>('home');
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

  if (currentView === 'login') {
    return <Login onBackToHome={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenLogin={() => setCurrentView('login')}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <EventGallery />
        <Testimonial />
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
