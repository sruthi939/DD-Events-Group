import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PopularEvents } from '../components/PopularEvents';
import { EventGallery } from '../components/EventGallery';
import { Testimonial } from '../components/Testimonial';
import { EventBanner } from '../components/EventBanner';
import { Newletter } from '../components/Newletter';
import { useEvent } from '../hooks/useEvent';
import { useBooking } from '../hooks/useBooking';
import { EventItem } from '../types';

interface HomeProps {
  onNavigateToEvents?: () => void;
  onSelectEventDetail?: (event: EventItem) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToEvents, onSelectEventDetail }) => {
  const { popularEvents } = useEvent();
  const { openBookingModal } = useBooking();

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Header Section */}
      <Hero onOpenBooking={() => openBookingModal()} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Services Showcase */}
        <Services onSelectService={service => openBookingModal(service)} />

        {/* Popular & Featured Portfolio Section */}
        <PopularEvents
          events={popularEvents}
          onBookNow={() => openBookingModal()}
          onViewDetails={onSelectEventDetail}
          onViewAll={onNavigateToEvents}
        />

        {/* Promo Offer Banner */}
        <EventBanner onOpenBooking={() => openBookingModal()} />

        {/* Event Photo & Video Gallery */}
        <EventGallery />

        {/* Client Reviews & Testimonials */}
        <Testimonial />

        {/* Newsletter Subscription */}
        <Newletter />
      </div>
    </div>
  );
};

export default Home;
