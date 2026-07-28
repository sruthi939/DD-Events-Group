import React from 'react';
import { Award, Users, ShieldCheck, Sparkles, Star, Calendar, Heart, Globe } from 'lucide-react';
import { logo } from '../assets/assets';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header Showcase Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Crafting Extraordinary Celebrations Since 2013
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          At DD Events Group, we turn grand visions into seamless, unforgettable experiences. From intimate beachfront vows to multi-day corporate summits, every detail is orchestrated with precision and passion.
        </p>
      </div>

      {/* Brand Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">Passion & Artistry</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We treat every celebration as a unique masterpiece, infusing custom floral design, lighting choreography, and culinary perfection.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">Stress-Free Execution</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our turnkey management covers vendor logistics, permits, timeline control, and security so host couples and organizers can savor every second.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">Global Vendor Network</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Exclusive partnerships with world-renowned caterers, celebrity entertainers, luxury venues, and master photographers globally.
          </p>
        </div>
      </div>

      {/* Key Stats Banner */}
      <div className="glass-card rounded-3xl p-8 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-white">500+</div>
          <div className="text-xs text-slate-400 font-semibold mt-1">Events Managed</div>
        </div>
        <div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-rose-400">4.95</div>
          <div className="text-xs text-slate-400 font-semibold mt-1">Client Rating</div>
        </div>
        <div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-400">12+</div>
          <div className="text-xs text-slate-400 font-semibold mt-1">Years Experience</div>
        </div>
        <div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-emerald-400">100%</div>
          <div className="text-xs text-slate-400 font-semibold mt-1">Satisfaction Rate</div>
        </div>
      </div>

      {/* Leadership Team Showcase */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Meet Our Leadership Team</h2>
          <p className="text-xs text-slate-400">Master planners and creative directors shaping luxury event experiences.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Dominic Drake',
              role: 'Founder & Managing Director',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
              bio: 'Over 15 years designing high-profile celebrity weddings and executive summits across North America and Europe.'
            },
            {
              name: 'Elena Rostova',
              role: 'Creative Design Lead',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
              bio: 'Specialist in immersive lighting design, architectural floral installations, and luxury theme styling.'
            },
            {
              name: 'Marcus Vance',
              role: 'Head of Operations & Logistics',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
              bio: 'Expert in multi-day festival logistics, VIP security protocols, and high-tech stage AV engineering.'
            }
          ].map((member, i) => (
            <div key={i} className="glass-card rounded-3xl overflow-hidden border border-slate-800 group">
              <div className="h-64 overflow-hidden bg-slate-900">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-rose-400">{member.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
