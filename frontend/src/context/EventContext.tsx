import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { EventItem, EventCategory, FilterOptions } from '../types';

export const INITIAL_CATEGORIES: EventCategory[] = [
  {
    id: 'all',
    name: 'All Events',
    description: 'Explore our full spectrum of luxury event management services.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    tagline: 'Complete Turnkey Solutions',
    features: ['Custom Planning', 'Full Execution', 'Dedicated Director']
  },
  {
    id: 'weddings',
    name: 'Luxury Weddings',
    description: 'Bespoke weddings crafted with romance, elegance, and perfection.',
    iconName: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tagline: 'Unforgettable Romances',
    features: ['Venue Curation', 'Floral Architecture', 'Bridal Concierge']
  },
  {
    id: 'corporate',
    name: 'Corporate Summits',
    description: 'Executive galas, product reveals, and international summits.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tagline: 'High-Impact Brand Moments',
    features: ['AV & Stage Lighting', 'VIP Security', 'Media Broadcast']
  },
  {
    id: 'milestones',
    name: 'Milestones & Galas',
    description: 'Anniversaries, milestone birthdays, and exclusive private celebrations.',
    iconName: 'PartyPopper',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Private Luxury Parties',
    features: ['Celebrity Acts', 'Custom Catering', 'Bespoke Themes']
  },
  {
    id: 'concerts',
    name: 'Live Concerts & Shows',
    description: 'Large-scale stage management, festival sound, and crowd control.',
    iconName: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    tagline: 'Spectacular Arena Experiences',
    features: ['Pyrotechnics', 'Stage Design', 'Ticketing Logistics']
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt_1',
    title: 'Grand Coastal Wedding Gala',
    category: 'Weddings',
    date: '2025-06-15',
    time: '4:00 PM PST',
    location: 'Malibu Oceanfront Resort, CA',
    price: 25000,
    guestCount: 280,
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'An elegant beachfront wedding featuring custom glass marquees, sunset cocktail hour, and bespoke 5-course dining.',
    rating: 4.9,
    isPopular: true,
    isUpcoming: true,
    features: ['Beachfront Marquee', 'Bespoke Floral Arch', 'Live Symphony']
  },
  {
    id: 'evt_2',
    title: 'Tech Horizon Executive Summit 2025',
    category: 'Corporate',
    date: '2025-04-20',
    time: '9:00 AM PST',
    location: 'San Francisco Palace Hotel, CA',
    price: 45000,
    guestCount: 450,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Annual corporate leadership summit with high-tech stage lighting, keynote AV production, and networking lounge setup.',
    rating: 4.95,
    isPopular: true,
    isUpcoming: true,
    features: ['LED Video Wall', 'Simultaneous Translation', 'VIP Lounge']
  },
  {
    id: 'evt_3',
    title: 'Golden Horizon 50th Birthday Jubilee',
    category: 'Milestones',
    date: '2025-05-10',
    time: '7:00 PM PST',
    location: 'Beverly Hills Estate, CA',
    price: 18000,
    guestCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'A lavish Gatsby-themed birthday party complete with live jazz band, champagne tower, and custom ice sculptures.',
    rating: 4.88,
    isPopular: false,
    isUpcoming: true,
    features: ['Gatsby Theme', 'Champagne Tower', 'Ice Sculptures']
  },
  {
    id: 'evt_4',
    title: 'Royal Vineyard Autumn Reception',
    category: 'Weddings',
    date: '2025-10-08',
    time: '3:30 PM PST',
    location: 'Napa Valley Estate Winery, CA',
    price: 32000,
    guestCount: 200,
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Intimate wine-country nuptials surrounded by lush vineyards, artisanal tablescapes, and acoustic orchestra performance.',
    rating: 4.92,
    isPopular: true,
    isUpcoming: false,
    features: ['Private Vineyard Access', 'Wine Pairing Menu', 'Acoustic Quartet']
  },
  {
    id: 'evt_5',
    title: 'Aviation Brand Global Launch Soirée',
    category: 'Corporate',
    date: '2025-11-18',
    time: '6:30 PM CST',
    location: 'Dallas Executive Hangar, TX',
    price: 55000,
    guestCount: 320,
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    description: 'Private hangar transformation featuring aerial acrobats, high-end mixology bars, and interactive 360 photo experiences.',
    rating: 4.97,
    isPopular: false,
    isUpcoming: true,
    features: ['Hangar Transformation', 'Aerialist Performers', 'Interactive 360 Photo']
  },
  {
    id: 'evt_6',
    title: 'Enchanted Secret Garden Masquerade',
    category: 'Milestones',
    date: '2025-07-25',
    time: '8:00 PM EST',
    location: 'Central Park Conservatory, NY',
    price: 22000,
    guestCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    description: 'Fairytale garden masquerade ball filled with glowing lanterns, botanical cocktails, and classical waltz dancers.',
    rating: 4.85,
    isPopular: true,
    isUpcoming: true,
    features: ['Luminous Canopy', 'Masquerade Decor', 'Botanical Mixology']
  }
];

interface EventContextType {
  events: EventItem[];
  categories: EventCategory[];
  filters: FilterOptions;
  selectedEvent: EventItem | null;
  setCategoryFilter: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: FilterOptions['sortBy']) => void;
  selectEvent: (event: EventItem | null) => void;
  filteredEvents: EventItem[];
  popularEvents: EventItem[];
  upcomingEvents: EventItem[];
}

export const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events] = useState<EventItem[]>(INITIAL_EVENTS);
  const [categories] = useState<EventCategory[]>(INITIAL_CATEGORIES);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    searchQuery: '',
    sortBy: 'popular',
  });

  const setCategoryFilter = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const setSearchQuery = (searchQuery: string) => {
    setFilters(prev => ({ ...prev, searchQuery }));
  };

  const setSortBy = (sortBy: FilterOptions['sortBy']) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const selectEvent = (event: EventItem | null) => {
    setSelectedEvent(event);
  };

  const filteredEvents = useMemo(() => {
    return events
      .filter(item => {
        const matchesCategory =
          filters.category === 'all' ||
          item.category.toLowerCase() === filters.category.toLowerCase();
        const matchesSearch =
          !filters.searchQuery ||
          item.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          item.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'popular') return b.rating - a.rating;
        if (filters.sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (filters.sortBy === 'price-low') return a.price - b.price;
        if (filters.sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [events, filters]);

  const popularEvents = useMemo(() => events.filter(e => e.isPopular), [events]);
  const upcomingEvents = useMemo(() => events.filter(e => e.isUpcoming), [events]);

  return (
    <EventContext.Provider
      value={{
        events,
        categories,
        filters,
        selectedEvent,
        setCategoryFilter,
        setSearchQuery,
        setSortBy,
        selectEvent,
        filteredEvents,
        popularEvents,
        upcomingEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
