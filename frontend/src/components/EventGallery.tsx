import React, { useState } from 'react';
import { Sparkles, MapPin, Users, Calendar as CalendarIcon, Eye, X } from 'lucide-react';
import { EventGalleryItem } from '../types';

const GALLERY_ITEMS: EventGalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand Coastal Wedding Gala',
    category: 'Weddings',
    date: 'June 2025',
    location: 'Malibu, CA',
    guestCount: 280,
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'An elegant beachfront wedding featuring a customized glass marquee, sunset cocktail hour, and bespoke 5-course dining.'
  },
  {
    id: 'g2',
    title: 'Tech Horizon Executive Summit',
    category: 'Corporate',
    date: 'April 2025',
    location: 'San Francisco, CA',
    guestCount: 450,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Annual corporate leadership summit with custom stage lighting, keynote AV production, and networking lounge setup.'
  },
  {
    id: 'g3',
    title: 'Golden Horizon 50th Birthday Jubilee',
    category: 'Milestones',
    date: 'May 2025',
    location: 'Beverly Hills, CA',
    guestCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'A lavish Gatsby-themed birthday party complete with live jazz band, champagne tower, and custom ice sculptures.'
  },
  {
    id: 'g4',
    title: 'Royal Vineyard Reception',
    category: 'Weddings',
    date: 'October 2025',
    location: 'Napa Valley, CA',
    guestCount: 200,
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Intimate wine-country nuptials surrounded by lush vineyards, artisanal tablescapes, and acoustic orchestra performance.'
  },
  {
    id: 'g5',
    title: 'Aviation Brand Launch Soirée',
    category: 'Corporate',
    date: 'November 2025',
    location: 'Dallas, TX',
    guestCount: 320,
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    description: 'Private hangar transformation featuring aerial acrobats, high-end mixology bars, and interactive 360 photo experiences.'
  },
  {
    id: 'g6',
    title: 'Enchanted Secret Garden Soirée',
    category: 'Milestones',
    date: 'July 2025',
    location: 'Miami, FL',
    guestCount: 120,
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Bespoke outdoor celebration featuring fairy-light canopy, custom floral installations, and personalized dessert lounge.'
  }
];

const CATEGORIES = ['All', 'Weddings', 'Corporate', 'Milestones'];

export const EventGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<EventGalleryItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            A Glimpse into Our <span className="text-gradient-gold">Celebrations</span>
          </h2>
          <p className="text-slate-400 text-base">
            Explore a curated selection of events designed and executed by the DD Events Group team.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-lg shadow-brand-600/30'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer border border-slate-800 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-brand-400 border border-slate-700/60 uppercase">
                  {item.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.guestCount} Guests</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-3xl w-full glass-card rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-80 overflow-hidden relative">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase">
                {selectedItem.category}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">{selectedItem.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> {selectedItem.location}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-amber-400" /> {selectedItem.guestCount} Guests</span>
                <span className="flex items-center gap-1.5"><CalendarIcon className="w-4 h-4 text-purple-400" /> {selectedItem.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery;

