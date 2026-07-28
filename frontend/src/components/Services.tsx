import React from 'react';
import { Heart, Briefcase, PartyPopper, Wine, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EventCategory } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const SERVICES: EventCategory[] = [
  {
    id: 'weddings',
    name: 'Luxury Weddings',
    tagline: 'Your dream fairytale wedding brought to life with elegance & charm.',
    description: 'Full-service wedding planning including venue selection, floral design, custom catering, guest concierge, and day-of execution.',
    iconName: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Full & Partial Planning Packages',
      'Custom Floral & Decor Styling',
      'Vendor Procurement & Management',
      'Day-of Coordination Team'
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Galas & Summits',
    tagline: 'High-impact corporate experiences that inspire & celebrate success.',
    description: 'End-to-end corporate event organization for conferences, product launches, award galas, and executive team retreats.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Stage & AV Production Management',
      'Executive Hospitality & VIP Logistics',
      'Brand Identity & Theme Design',
      'Hybrid & In-Person Solutions'
    ]
  },
  {
    id: 'birthdays',
    name: 'Milestone Birthdays',
    tagline: 'Unforgettable birthday bashes customized to your unique style.',
    description: 'From sweet 16s and 21st celebrations to lavish 50th birthday jubilees, we handle theme design, live DJ, photo booths, and custom bars.',
    iconName: 'PartyPopper',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Custom Theme & Immersive Decor',
      'Entertainment & Live Artists',
      'Interactive Food Stations & Mixology',
      'Personalized Favors & Keepsakes'
    ]
  },
  {
    id: 'private-dining',
    name: 'Private Soirées & Anniversaries',
    tagline: 'Intimate, ultra-exclusive gatherings crafted to perfection.',
    description: 'Bespoke private dinners, luxury anniversary parties, engagement celebrations, and yacht gatherings tailored for discerning clients.',
    iconName: 'Wine',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Michelin-Star Level Catering Coordination',
      'Atmospheric Lighting & Ambient Sound',
      'Private Sommelier & Mixologist Service',
      'Exclusive Venue Sourcing'
    ]
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Heart': return <Heart className="w-6 h-6 text-brand-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'PartyPopper': return <PartyPopper className="w-6 h-6 text-amber-400" />;
      default: return <Wine className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Event Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Tailored Experiences for <span className="text-gradient-rose">Every Occasion</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you are hosting an intimate gathering or a grand multi-day gala, our team delivers seamless planning, exquisite aesthetics, and flawless execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group border border-slate-800"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 shadow-lg">
                  {getIcon(service.iconName)}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{service.name}</h3>
                  <p className="text-xs text-amber-300 font-medium italic">{service.tagline}</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">What's Included:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Custom packages available</span>
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

