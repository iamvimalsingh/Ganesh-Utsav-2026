import React, { useState } from 'react';
import { FESTIVAL_SCHEDULE, FestivalProgramEvent } from '../data/festivalData';
import { FestiveArtwork } from './FestiveArtwork';
import { Sparkles, Calendar, Clock, Trophy, Flame, Music, BookOpen, Utensils, HeartHandshake, CheckCircle2, ChevronRight, X, Maximize2, FileText } from 'lucide-react';

interface TimelineProps {
  lang: 'hi' | 'en';
}

export const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'religious' | 'community_games'>('all');
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [modalPosterType, setModalPosterType] = useState<string | null>(null);

  const filteredEvents = filter === 'all'
    ? FESTIVAL_SCHEDULE
    : FESTIVAL_SCHEDULE.filter((e) => e.category === filter);

  const getEventIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Music': return <Music className="w-5 h-5 text-purple-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#FF7722]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      default: return <Trophy className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleCardClick = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#780016] text-xs font-bold border border-[#D4AF37]/40">
            <Calendar className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? '१२ दिवसीय उत्सव यात्रा' : '12-Day Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'दैनिक उत्सव एवं कार्यक्रम समय-सारणी' : 'Daily Festival Program Schedule'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-medium">
            {lang === 'hi'
              ? '१४ सितम्बर से २५ सितम्बर २०२६ तक के समस्त वैदिक पूजन, धार्मिक अनुष्ठान एवं खेल कार्यक्रम।'
              : 'Complete day-by-day official festival schedule from 14 Sept to 25 Sept 2026.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-stone-100 p-1.5 rounded-2xl border border-stone-200 text-xs sm:text-sm font-bold shadow-inner">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all ${
                filter === 'all'
                  ? 'bg-[#780016] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {lang === 'hi' ? 'समस्त १२ कार्यक्रम' : 'All 12 Events'}
            </button>
            <button
              onClick={() => setFilter('religious')}
              className={`px-4 py-2 rounded-xl transition-all ${
                filter === 'religious'
                  ? 'bg-[#780016] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {lang === 'hi' ? 'धार्मिक अनुष्ठान (५)' : 'Religious (5)'}
            </button>
            <button
              onClick={() => setFilter('community_games')}
              className={`px-4 py-2 rounded-xl transition-all ${
                filter === 'community_games'
                  ? 'bg-[#780016] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {lang === 'hi' ? 'गेम एवं सांस्कृतिक (७)' : 'Games & Cultural (7)'}
            </button>
          </div>
        </div>

        {/* Interactive Timeline Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isExpanded = expandedEventId === event.id;

            return (
              <div
                key={event.id}
                className={`bg-white rounded-3xl border-2 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isExpanded ? 'border-[#780016] ring-2 ring-[#780016]/20' : 'border-[#D4AF37]/40 hover:border-[#780016]'
                }`}
                onClick={() => handleCardClick(event.id)}
              >
                {/* Event Contextual Real Photo Preview */}
                <div className="relative h-48 w-full bg-stone-900 overflow-hidden group">
                  <FestiveArtwork type={event.primaryImage} className="w-full h-full object-cover" />
                  
                  {/* Step & Date Ribbon */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold flex items-center justify-center shadow">
                      {event.step}
                    </span>
                    <span className="px-2.5 py-0.5 bg-black/75 backdrop-blur-md text-white text-xs font-bold rounded-md font-mono border border-white/20">
                      {event.date} ({event.dayHi})
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      event.category === 'religious'
                        ? 'bg-amber-500 text-stone-950 font-black'
                        : 'bg-teal-600 text-white'
                    }`}>
                      {event.categoryLabelHi}
                    </span>
                  </div>

                  {/* Click to expand overlay hint */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold shadow flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isExpanded ? 'छोटा करें' : 'विवरण व फोटो देखें'}</span>
                    </span>
                  </div>
                </div>

                {/* Event Info Card Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl font-serif font-black text-[#780016] leading-tight">
                        {lang === 'hi' ? event.titleHi : event.title}
                      </h3>
                      {getEventIcon(event.iconName)}
                    </div>

                    {event.time && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-800 font-bold mb-2">
                        <Clock className="w-3.5 h-3.5 text-[#FF7722]" />
                        <span>समय: {event.time}</span>
                      </div>
                    )}

                    <p className={`text-xs text-stone-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                      {lang === 'hi' ? event.descriptionHi : event.descriptionEn}
                    </p>

                    {/* Poster Link if available */}
                    {event.hasPosterSupport && event.posterImage && (
                      <div className="mt-3 pt-3 border-t border-stone-100" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => setModalPosterType(event.posterImage!)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7722] hover:text-[#780016] bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 shadow-sm"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{lang === 'hi' ? 'विशेष आमंत्रण पोस्टर खोलें' : 'Open Invitation Poster'}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#780016]">
                    <span className="flex items-center gap-1 text-[11px] text-stone-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      सत्यापित कार्यक्रम
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      {isExpanded ? 'कम देखें' : 'विस्तार'}
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Program Poster if clicked from Timeline */}
        {modalPosterType && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center text-white border-b border-white/20 pb-2">
              <span className="text-xs font-bold bg-[#FF7722] text-white px-3 py-1 rounded-full">
                कार्यक्रम सूचना / Poster
              </span>
              <button
                onClick={() => setModalPosterType(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="my-auto max-w-lg mx-auto w-full max-h-[75vh] flex items-center justify-center">
              <FestiveArtwork type={modalPosterType} className="w-full shadow-2xl rounded-2xl" />
            </div>

            <div className="text-center text-xs text-stone-300 max-w-md mx-auto">
              संदर्भ: कार्यक्रम का वास्तविक अधिकृत आमंत्रण पोस्टर
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
