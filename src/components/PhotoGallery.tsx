import React, { useState, useEffect } from 'react';
import { REAL_PHOTOS_GALLERY, RealPhotoItem } from '../data/festivalData';
import { FestiveArtwork } from './FestiveArtwork';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, Calendar, Sparkles } from 'lucide-react';

interface PhotoGalleryProps {
  lang: 'hi' | 'en';
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<RealPhotoItem | null>(null);

  const categories = [
    { key: 'all', labelHi: 'सभी स्मृतियाँ (९)', labelEn: 'All Memories (9)' },
    { key: 'murti', labelHi: 'मूर्ति दर्शन', labelEn: 'Murti Darshan' },
    { key: 'maha_aarti', labelHi: 'महाआरती', labelEn: 'Maha Aarti' },
    { key: 'sunderkand', labelHi: 'सुंदरकांड', labelEn: 'Sunderkand' },
    { key: 'sthapana', labelHi: 'स्थापना', labelEn: 'Sthapana' },
    { key: 'bhandara', labelHi: 'भंडारा', labelEn: 'Bhandara' },
    { key: 'visarjan', labelHi: 'विसर्जन', labelEn: 'Visarjan' },
    { key: 'games', labelHi: 'गेम कार्यक्रम', labelEn: 'Games' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? REAL_PHOTOS_GALLERY
    : REAL_PHOTOS_GALLERY.filter((item) => {
        if (selectedCategory === 'maha_aarti') return item.category === 'aarti';
        return item.category === selectedCategory;
      });

  const handleOpenLightbox = (photo: RealPhotoItem) => {
    setActivePhoto(photo);
  };

  const handleCloseLightbox = () => {
    setActivePhoto(null);
  };

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = REAL_PHOTOS_GALLERY.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % REAL_PHOTOS_GALLERY.length;
    setActivePhoto(REAL_PHOTOS_GALLERY[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = REAL_PHOTOS_GALLERY.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + REAL_PHOTOS_GALLERY.length) % REAL_PHOTOS_GALLERY.length;
    setActivePhoto(REAL_PHOTOS_GALLERY[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#780016] text-xs font-bold border border-[#D4AF37]/50">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'वास्तविक छायाचित्र' : 'Real Photographs'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'उत्सव की वास्तविक स्मृतियाँ' : 'Real Festival Memories'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी में संपन्न श्री गणेश उत्सव के अविस्मरणीय एवं पावन पलों का सजीव संकलन।'
              : 'Authentic photo archive capturing the sacred rituals, mass Maha Aarti, and community joy.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#780016] text-[#FFDF80] shadow-md scale-[1.02]'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* EDITORIAL ASYMMETRIC GRID WITH REAL EVENT PHOTOGRAPHS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => {
            const isFeature = item.aspect === 'feature' || idx === 0;
            const isWide = item.aspect === 'wide';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative bg-white rounded-3xl border-2 border-[#D4AF37]/40 hover:border-[#780016] p-3.5 shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isFeature ? 'sm:col-span-2 lg:col-span-2' : isWide ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container */}
                <div className="w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden relative bg-stone-900">
                  <FestiveArtwork type={item.svgType} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[#FFDF80] text-[11px] font-bold rounded-full border border-white/20 shadow">
                      {item.categoryLabelHi}
                    </span>
                  </div>

                  {/* Date Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-0.5 bg-[#780016]/90 text-white text-[10px] font-mono font-bold rounded-md shadow">
                      {item.dateTag}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold shadow-xl flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'बड़ा देखें' : 'View Fullscreen'}</span>
                    </span>
                  </div>
                </div>

                {/* Metadata & Caption */}
                <div className="p-3">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#780016] group-hover:text-[#FF7722] transition-colors">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    {lang === 'hi' ? item.captionHi : item.captionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FULLSCREEN REAL PHOTO LIGHTBOX */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="वास्तविक छायाचित्र"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white border-b border-white/20 pb-3">
              <div>
                <span className="text-xs font-bold bg-[#780016] text-[#FFDF80] px-3 py-1 rounded-full">
                  {activePhoto.categoryLabelHi}
                </span>
                <span className="ml-2 text-xs text-amber-300 font-mono">
                  {activePhoto.dateTag}
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mt-1">
                  {lang === 'hi' ? activePhoto.titleHi : activePhoto.titleEn}
                </h3>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Photo View */}
            <div className="relative my-auto max-w-4xl mx-auto w-full max-h-[70vh] flex items-center justify-center p-2">
              <button
                onClick={handlePrev}
                className="absolute left-2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="w-full max-w-2xl">
                <FestiveArtwork type={activePhoto.svgType} className="w-full shadow-2xl rounded-2xl" />
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="bg-black/70 border border-white/20 rounded-2xl p-3 sm:p-4 text-white text-center max-w-3xl mx-auto w-full">
              <p className="text-xs sm:text-sm leading-relaxed text-stone-200">
                {lang === 'hi' ? activePhoto.captionHi : activePhoto.captionEn}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
