import React, { useState, useEffect } from 'react';
import { DIARY_EVIDENCE_ITEMS, DiaryEvidenceItem, CENTRAL_TREASURY_DATA } from '../data/festivalData';
import { FestiveArtwork } from './FestiveArtwork';
import { FileSpreadsheet, ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, ShieldCheck, Info, CheckCircle2, RotateCcw, Maximize2 } from 'lucide-react';

interface DiaryEvidenceProps {
  lang: 'hi' | 'en';
}

export const DiaryEvidence: React.FC<DiaryEvidenceProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'online' | 'cash' | 'bhandara' | 'expenses' | 'summary'>('all');
  const [activeItem, setActiveItem] = useState<DiaryEvidenceItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filterTabs = [
    { key: 'all', labelHi: 'सभी अभिलेख (७)', labelEn: 'All Evidence (7)' },
    { key: 'summary', labelHi: 'सारांश व बचत', labelEn: 'Summary & Savings' },
    { key: 'online', labelHi: 'ऑनलाइन चंदा', labelEn: 'Online Chanda' },
    { key: 'cash', labelHi: 'कैश चंदा', labelEn: 'Cash Chanda' },
    { key: 'bhandara', labelHi: 'भंडारा सहयोग', labelEn: 'Bhandara Seva' },
    { key: 'expenses', labelHi: 'खर्च व वाउचर', labelEn: 'Expenses & Vendors' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? DIARY_EVIDENCE_ITEMS
    : DIARY_EVIDENCE_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: DiaryEvidenceItem) => {
    setActiveItem(item);
    setZoomLevel(1);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = DIARY_EVIDENCE_ITEMS.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % DIARY_EVIDENCE_ITEMS.length;
    setActiveItem(DIARY_EVIDENCE_ITEMS[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = DIARY_EVIDENCE_ITEMS.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + DIARY_EVIDENCE_ITEMS.length) % DIARY_EVIDENCE_ITEMS.length;
    setActiveItem(DIARY_EVIDENCE_ITEMS[prevIndex]);
    setZoomLevel(1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <section id="evidence" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EE] to-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#780016]/10 text-[#780016] text-xs font-bold border border-[#780016]/20">
            <FileSpreadsheet className="w-4 h-4 text-[#780016]" />
            <span>{lang === 'hi' ? 'हस्तलिखित स्रोत प्रमाण' : 'Original Source Documents'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'मूल लेखा साक्ष्य' : 'Original Diary Evidence'}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-medium">
            {lang === 'hi' ? 'आय-व्यय एवं चंदे के मूल हस्तलिखित अभिलेख' : 'Original Handwritten Financial & Donation Registers'}
          </p>
        </div>

        {/* Required Transparency Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
            "पारदर्शिता के उद्देश्य से मूल हस्तलिखित लेखा पृष्ठ भी उपलब्ध कराए गए हैं, ताकि इच्छुक व्यक्ति दर्ज विवरण का मूल स्रोत देख सकें।"
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === tab.key
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-stone-200'
              }`}
            >
              {lang === 'hi' ? tab.labelHi : tab.labelEn}
            </button>
          ))}
        </div>

        {/* DISTINCTIVE LAYOUT:
            Desktop: LEFT / MAIN Financial Summary Card; RIGHT / SIDE Vertical Stack of Diary Evidence
            Mobile: Summary Card on Top, Horizontal Swipeable Evidence Strip Below
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT / MAIN (lg:col-span-5): Financial Summary & Explanation */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white via-[#FFFBF5] to-[#FFF7EB] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-xl space-y-6 lg:sticky lg:top-24">
            <div className="border-b border-[#D4AF37]/40 pb-4">
              <span className="text-[10px] font-bold tracking-widest text-[#780016] uppercase bg-[#780016]/10 px-3 py-1 rounded-full">
                {lang === 'hi' ? 'वित्तीय सारांश व साक्ष्य मिलान' : 'Treasury & Evidence Map'}
              </span>
              <h3 className="text-2xl font-serif font-black text-[#780016] mt-2">
                {lang === 'hi' ? 'केन्द्रीय लेखा स्थिति' : 'Central Treasury Status'}
              </h3>
            </div>

            {/* Figures Overview */}
            <div className="space-y-3 font-sans">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div>
                  <span className="text-xs text-stone-600 block">{lang === 'hi' ? 'कुल संकलित आवक:' : 'Total Inflow:'}</span>
                  <span className="text-xs text-emerald-800 font-medium">{lang === 'hi' ? '(ऑनलाइन + नकद + भंडारा)' : '(Online + Cash)'}</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-serif font-black text-emerald-900">₹{CENTRAL_TREASURY_DATA.totalInflow.toLocaleString('en-IN')}</span>
                  <button
                    onClick={() => handleOpenLightbox(DIARY_EVIDENCE_ITEMS[0])}
                    className="block text-[10px] text-[#780016] font-bold underline hover:text-[#FF7722]"
                  >
                    {lang === 'hi' ? 'साक्ष्य पृष्ठ ०१ देखें →' : 'View Page 01 →'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
                <div>
                  <span className="text-xs text-stone-600 block">{lang === 'hi' ? 'कुल प्रमाणित व्यय:' : 'Total Outflow:'}</span>
                  <span className="text-xs text-rose-800 font-medium">{lang === 'hi' ? '(पूजा ₹8,452 + टेंट/साउंड ₹26,451)' : '(Pooja & Vendors)'}</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-serif font-black text-rose-900">₹{CENTRAL_TREASURY_DATA.totalOutflow.toLocaleString('en-IN')}</span>
                  <button
                    onClick={() => handleOpenLightbox(DIARY_EVIDENCE_ITEMS[5])}
                    className="block text-[10px] text-[#780016] font-bold underline hover:text-[#FF7722]"
                  >
                    {lang === 'hi' ? 'खर्च वाउचर देखें →' : 'View Vouchers →'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#780016] to-[#5A0010] text-white shadow-md border border-[#D4AF37]">
                <div>
                  <span className="text-xs text-[#FFDF80] block font-bold">{lang === 'hi' ? 'अंतिम शुद्ध बचत:' : 'Final Net Reserve:'}</span>
                  <span className="text-[10px] text-white/80">{lang === 'hi' ? 'टेंट शेष व सफाई उपरांत' : 'After clearance'}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-black text-emerald-400">₹{CENTRAL_TREASURY_DATA.finalNetSavings.toLocaleString('en-IN')}</span>
                  <button
                    onClick={() => handleOpenLightbox(DIARY_EVIDENCE_ITEMS[0])}
                    className="block text-[10px] text-[#FFDF80] font-bold underline hover:text-white"
                  >
                    {lang === 'hi' ? 'अभिलेख देखें →' : 'View Record →'}
                  </button>
                </div>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 text-xs text-stone-700 space-y-2 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-[#780016]">
                <ShieldCheck className="w-4 h-4 text-[#FF7722]" />
                <span>{lang === 'hi' ? 'अभिलेख सुरक्षा व सत्यापन' : 'Audit Verification Integrity'}</span>
              </div>
              <p>
                {lang === 'hi'
                  ? 'सभी हस्तलिखित पृष्ठों को उच्च गुणवत्ता में संरक्षित किया गया है। किसी भी प्रविष्टि पर क्लिक करके उसे ज़ूम व पैन करके पूर्ण विवरण देखा जा सकता है।'
                  : 'Every handwritten entry is preserved in high definition. Tap any diary thumbnail on the right to open the interactive document viewer with zoom & pan.'}
              </p>
            </div>
          </div>

          {/* RIGHT / SIDE (lg:col-span-7): Vertical Stack on Desktop & Horizontal Strip on Mobile */}
          <div className="lg:col-span-7">
            {/* Mobile Horizontal Scroll Hint */}
            <div className="lg:hidden mb-2 text-xs font-semibold text-stone-500 flex items-center justify-between">
              <span>{lang === 'hi' ? 'साक्ष्य पृष्ठ स्वाइप करें' : 'Swipe evidence cards'} →</span>
              <span className="text-[#780016]">{filteredItems.length} पृष्ठ उपलब्ध</span>
            </div>

            {/* List / Grid Container */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 snap-x">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(item)}
                  className="w-[290px] sm:w-[320px] lg:w-full shrink-0 snap-center bg-white rounded-3xl border-2 border-stone-200 hover:border-[#780016] p-4 sm:p-5 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col sm:flex-row gap-4"
                >
                  {/* Thumbnail Preview Render */}
                  <div className="w-full sm:w-44 h-48 sm:h-auto rounded-2xl overflow-hidden border border-stone-300 relative shrink-0 bg-stone-100">
                    <FestiveArtwork type={item.svgType} className="w-full h-full object-cover scale-95" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{lang === 'hi' ? 'ज़ूम करें' : 'Zoom'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Document Metadata */}
                  <div className="flex flex-col justify-between flex-grow space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                          {item.pageNo}
                        </span>
                        <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          {item.categoryLabelHi}
                        </span>
                      </div>

                      <h4 className="text-base font-serif font-bold text-[#780016] group-hover:text-[#FF7722] transition-colors leading-tight">
                        {lang === 'hi' ? item.titleHi : item.titleEn}
                      </h4>

                      <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 mt-2">
                        {item.keyFigureHi}
                      </div>

                      <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                        {lang === 'hi' ? item.descriptionHi : item.descriptionEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#780016]">
                      <span>{lang === 'hi' ? 'मूल हस्तलिखित स्रोत' : 'Original Source'}</span>
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        {lang === 'hi' ? 'बड़ा देखें' : 'Expand'} →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FULLSCREEN DIARY DOCUMENT LIGHTBOX / VIEWER */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="मूल हस्तलिखित अभिलेख"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-3 text-white border-b border-white/20 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-[#D4AF37] text-[#5A0010] px-2.5 py-0.5 rounded">
                    {lang === 'hi' ? 'मूल हस्तलिखित अभिलेख' : 'Original Source Document'}
                  </span>
                  <span className="text-xs text-amber-300 font-semibold hidden sm:inline">
                    {activeItem.pageNo}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-serif font-bold text-white mt-1">
                  {lang === 'hi' ? activeItem.titleHi : activeItem.titleEn}
                </h3>
              </div>

              {/* Zoom Controls & Close Button */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 border border-white/20">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
                    disabled={zoomLevel <= 1}
                    className="p-1.5 text-stone-300 hover:text-white disabled:opacity-30"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono px-2 text-amber-300">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                    disabled={zoomLevel >= 2.5}
                    className="p-1.5 text-stone-300 hover:text-white disabled:opacity-30"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 text-stone-300 hover:text-white"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
                  aria-label="Close Viewer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Central Document Display with Pan / Zoom */}
            <div className="relative flex-grow flex items-center justify-center my-4 overflow-auto max-h-[70vh]">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30"
                aria-label="Next Page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Document Container */}
              <div
                className="transition-transform duration-200 max-w-2xl w-full"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <FestiveArtwork type={activeItem.svgType} className="w-full shadow-2xl rounded-2xl" />
              </div>
            </div>

            {/* Bottom Caption & Verified Notes */}
            <div className="bg-black/70 border border-white/20 rounded-2xl p-3 sm:p-4 text-white text-xs max-w-4xl mx-auto w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
                <span className="font-bold text-amber-300">
                  {activeItem.keyFigureHi}
                </span>
                <span className="text-[11px] text-stone-400">
                  "यह मूल स्रोत पृष्ठ है — किसी भी प्रविष्टि में कोई परिवर्तन नहीं किया गया है।"
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-300">
                {activeItem.verifiedNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
