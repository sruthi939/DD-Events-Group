import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Testimonial as TestimonialType } from '../types';

const TESTIMONIALS: TestimonialType[] = [
  {
    id: 't1',
    clientName: 'Sophia & Marcus Vance',
    eventType: 'Luxury Coastal Wedding',
    quote: 'DD Events Group made our wedding an absolute dream. From the floral arrangements to vendor coordination, not a single detail was missed. We were able to just relax and enjoy our special day!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    date: 'June 2025'
  },
  {
    id: 't2',
    clientName: 'David Sterling',
    eventType: 'VP of Marketing, Nexus Tech',
    quote: 'Our annual corporate gala was elevated to an incredible new tier. The AV setup, stage design, and registration flow executed flawlessly. Our leadership team was thoroughly impressed.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    date: 'April 2025'
  },
  {
    id: 't3',
    clientName: 'Elena Rostova',
    eventType: '50th Birthday Gala',
    quote: 'Planning my milestone birthday with DD Events Group was the best decision ever! The Gatsby theme design was breathtaking and my guests are still talking about the cocktail experience!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    date: 'May 2025'
  }
];

export const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Loved by Hosts & <span className="text-gradient-gold">Celebrators</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear directly from clients who trusted DD Events Group with their most memorable occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative group hover:border-brand-500/40 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-brand-500/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-800/80">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-500/50"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{testimonial.clientName}</h4>
                  <p className="text-xs text-rose-400 font-medium">{testimonial.eventType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
