import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-rose-950/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-rose-500 to-amber-400 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                DD <span className="text-gradient-rose">Events</span> Group
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">Making Magic Happen</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform">
              Services
            </a>
            <a href="#gallery" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform">
              Portfolio
            </a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform">
              Why Us
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:scale-105 transform">
              Reviews
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18005553836" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-rose-400 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-500" />
              <span>(800) 555-EVENTS</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-brand-500 via-rose-500 to-amber-500 group-hover:from-brand-500 group-hover:to-amber-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
                <span>Book Event</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-slate-800 mt-3 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50"
          >
            Reviews
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
