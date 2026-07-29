import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import { BookingProvider } from './context/BookingContext';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { RestPassword } from './pages/RestPassword';
import { VerifyOTP } from './pages/VerifyOTP';
import { MyBooking } from './pages/MyBooking';
import { Profile } from './pages/Profile';
import { EventItem } from './types';

export type ViewType =
  | 'home'
  | 'about'
  | 'events'
  | 'event-detail'
  | 'contact'
  | 'login'
  | 'register'
  | 'forgot-password'
  | 'reset-password'
  | 'verify-otp'
  | 'my-bookings'
  | 'profile';

export function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleSelectEventDetail = (event: EventItem) => {
    setSelectedEvent(event);
    setCurrentView('event-detail');
  };

  // Full screen auth pages
  if (currentView === 'login') {
    return (
      <Login
        onBackToHome={() => setCurrentView('home')}
        onNavigateToRegister={() => setCurrentView('register')}
        onNavigateToForgotPassword={() => setCurrentView('forgot-password')}
      />
    );
  }

  if (currentView === 'register') {
    return (
      <Register
        onBackToHome={() => setCurrentView('home')}
        onNavigateToLogin={() => setCurrentView('login')}
        onNavigateToVerifyOTP={() => setCurrentView('verify-otp')}
      />
    );
  }

  if (currentView === 'forgot-password') {
    return (
      <ForgotPassword
        onBackToHome={() => setCurrentView('home')}
        onNavigateToResetPassword={() => setCurrentView('reset-password')}
      />
    );
  }

  if (currentView === 'reset-password') {
    return (
      <RestPassword
        onBackToHome={() => setCurrentView('home')}
        onNavigateToLogin={() => setCurrentView('login')}
      />
    );
  }

  if (currentView === 'verify-otp') {
    return (
      <VerifyOTP
        onBackToHome={() => setCurrentView('home')}
        onSuccessNavigate={() => setCurrentView('home')}
      />
    );
  }

  return (
    <MainLayout onOpenLogin={() => setCurrentView('login')}>
      {currentView === 'home' && (
        <Home
          onNavigateToEvents={() => setCurrentView('events')}
          onSelectEventDetail={handleSelectEventDetail}
        />
      )}

      {currentView === 'about' && <About />}

      {currentView === 'events' && (
        <Events onSelectEventDetail={handleSelectEventDetail} />
      )}

      {currentView === 'event-detail' && (
        <EventDetails
          event={selectedEvent}
          onBack={() => setCurrentView('events')}
        />
      )}

      {currentView === 'contact' && <Contact />}

      {currentView === 'my-bookings' && <MyBooking />}

      {currentView === 'profile' && <Profile />}
    </MainLayout>
  );
}

export function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <BookingProvider>
          <AppContent />
        </BookingProvider>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;
