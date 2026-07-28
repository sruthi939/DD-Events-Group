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

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  price: number;
  guestCount: number;
  imageUrl: string;
  description: string;
  rating: number;
  isPopular?: boolean;
  isUpcoming?: boolean;
  features?: string[];
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

export interface Booking {
  id: string;
  bookingNumber: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: number;
  budget: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  totalAmount?: number;
  depositPaid?: number;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role?: 'user' | 'admin';
  createdAt?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface FilterOptions {
  category: string;
  searchQuery: string;
  sortBy: 'popular' | 'date' | 'price-low' | 'price-high';
}
