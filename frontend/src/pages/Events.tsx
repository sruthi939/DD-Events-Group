import React from 'react';
import { useEvent } from '../hooks/useEvent';
import { useBooking } from '../hooks/useBooking';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { EventList } from '../components/EventLIst';
import { EventItem } from '../types';
import { Sparkles } from 'lucide-react';

interface EventsProps {
  onSelectEventDetail?: (event: EventItem) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEventDetail }) => {
  const {
    categories,
    filters,
    setCategoryFilter,
    setSearchQuery,
    setSortBy,
    filteredEvents,
  } = useEvent();

  const { openBookingModal } = useBooking();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Catalog Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Curated Event Portfolio</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Explore Our Event Experiences
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Filter through our portfolio of luxury weddings, corporate summits, galas, and concert productions.
        </p>
      </div>

      {/* Search & Sort Options */}
      <div className="space-y-6">
        <SearchBar
          value={filters.searchQuery}
          onChange={setSearchQuery}
          sortBy={filters.sortBy}
          onSortChange={setSortBy}
        />

        {/* Category Pills */}
        <div className="flex justify-center">
          <CategoryFilter
            categories={categories}
            activeCategory={filters.category}
            onSelectCategory={setCategoryFilter}
          />
        </div>
      </div>

      {/* Events Results Count */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs text-slate-400">
        <span>
          Showing <strong className="text-white">{filteredEvents.length}</strong> event packages
        </span>
        {filters.searchQuery && (
          <span>
            Search results for "<strong className="text-rose-300">{filters.searchQuery}</strong>"
          </span>
        )}
      </div>

      {/* Main Grid List */}
      <EventList
        events={filteredEvents}
        onBookNow={event => openBookingModal(event.category)}
        onViewDetails={onSelectEventDetail}
      />
    </div>
  );
};

export default Events;
