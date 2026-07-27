export interface EventCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  imageUrl: string;
  tagline: string;
  features: string[];
}

export interface EventGalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  guestCount: number;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  date: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budgetRange: string;
  notes: string;
}
