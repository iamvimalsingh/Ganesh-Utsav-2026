import React, { useState } from 'react';
import { PROGRAM_POSTERS, PosterItem } from '../data/festivalData';
import { FestiveArtwork } from './FestiveArtwork';
import { FileText, Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface PostersSectionProps {
  lang: 'hi' | 'en';
}

export const PostersSection: React.FC<PostersSectionProps> = ({ lang }) => {
  const [activePoster, setActivePoster] = useState<PosterItem | null>(null);

  const handleOpenPoster = (poster: PosterItem) => {
    setActivePoster(poster);
  };

  const handleClose = () => {
    setActivePoster(null);
  };

  return (
    <section id="posters" className="py-14 md:py-20 bg-gradient-to-b from-[#FFFDF7] via-[#FFFBF2] to-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF7722]/15 text-[#780016] text-xs font-bold border border-[#FF7722]/30">
            <FileText className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'आधिकारिक सूचना' : 'Official Notices'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'कार्यक्रम पोस्टर' : 'Festival Program Posters'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'उत्सव एवं विशेष आयोजनों की समय-सारणी के आधिकारिक सूचना पोस्टर।'
              : 'Framed official invitation and festival schedule posters.'}
          </p>
        </div>

        {/* Framed Visual Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROGRAM_POSTERS.map((poster) => (
            <div
              key={poster.id}
              className="relative bg-white rounded-3xl border-4 border-[#780016]/80 p-4 shadow-xl hover:shadow-2xl transition-all group overflow-hidden flex flex-col justify-between"
            >
              {/* Poster Badge */}
              <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2">
                <span className="text-[11px] font-bold bg-[#780016] text-[#FFDF80] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFDF80]" />
                  <span>{poster.badge}</span>
                </span>
                <span className="text-xs font-semibold text-stone-500 font-mono">
                  {poster.dateTag}
                </span>
              </div>

              {/* Poster Visual */}
              <div
                onClick={() => handleOpenPoster(poster)}
                className="w-full h-80 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 relative cursor-pointer group-hover:scale-[1.01] transition-transform"
              >
                <FestiveArtwork type={poster.svgType} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold shadow-xl flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'पूर्ण स्क्रीन देखें' : 'Fullscreen View'}</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 pt-2">
                <h3 className="text-lg font-serif font-bold text-[#780016] mb-1">
                  {lang === 'hi' ? poster.titleHi : poster.titleEn}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {lang === 'hi' ? poster.captionHi : poster.captionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FULLSCREEN POSTER LIGHTBOX */}
        {activePoster && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between text-white border-b border-white/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-[#FF7722] text-white px-3 py-1 rounded-full">
                  {activePoster.badge}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#FFDF80]">
                  {lang === 'hi' ? activePoster.titleHi : activePoster.titleEn}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white"
                aria-label="Close Poster"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="my-auto max-w-xl mx-auto w-full max-h-[75vh] flex items-center justify-center overflow-auto p-2">
              <FestiveArtwork type={activePoster.svgType} className="w-full shadow-2xl rounded-2xl" />
            </div>

            <div className="text-center text-xs text-stone-300 max-w-lg mx-auto bg-black/60 p-3 rounded-xl border border-white/20">
              {lang === 'hi' ? activePoster.captionHi : activePoster.captionEn}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
