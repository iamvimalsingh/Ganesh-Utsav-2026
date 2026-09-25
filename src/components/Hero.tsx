import React from 'react';
import { Sparkles, ArrowDown, ShieldCheck, Image as ImageIcon, HeartHandshake, Volume2 } from 'lucide-react';
import { FestiveArtwork } from './FestiveArtwork';
import { CENTRAL_TREASURY_DATA } from '../data/festivalData';

interface HeroProps {
  lang: 'hi' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#5A0010] via-[#780016] to-[#3B0008] text-[#FFFDF7] flex flex-col justify-center">
      {/* Decorative Traditional Temple Arch Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      
      {/* Floating Gold Diya Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF7722]/20 via-[#D4AF37]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#FF7722]/20 via-[#780016]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Festive Badges */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Creative Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF7722]/30 via-[#D4AF37]/20 to-[#FF7722]/30 border border-[#D4AF37]/70 text-[#FFDF80] text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF7722] animate-ping" />
              <span>{lang === 'hi' ? 'एक कॉलोनी • एक परिवार • एक उत्सव' : 'One Colony • One Family • One Festival'}</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="font-serif">|| श्री गणेशाय नमः ||</span>
            </div>

            {/* Main Grand Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#FFFDF7] leading-tight drop-shadow-xl">
                {lang === 'hi' ? 'श्री गणेश उत्सव 2026' : 'Shree Ganesh Utsav 2026'}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37] font-bold tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span>📍</span>
                <span>{lang === 'hi' ? 'मयूर होम्स कॉलोनी, भोपाल' : 'Mayur Homes Colony, Bhopal'}</span>
              </p>
            </div>

            {/* Sacred Shloka Box */}
            <div className="relative bg-gradient-to-br from-[#380009]/95 via-[#5A0010]/90 to-[#2A0006]/95 border-2 border-[#D4AF37]/60 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md max-w-2xl mx-auto lg:mx-0">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#5A0010] text-[10px] font-bold uppercase tracking-wider rounded-md shadow">
                पवित्र मंगल श्लोक
              </div>
              <p className="text-base sm:text-xl text-[#FFDF80] font-serif leading-relaxed text-center italic font-medium">
                "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
              </p>
              <div className="mt-3 pt-3 border-t border-[#D4AF37]/20 text-xs text-[#FFFDF7]/80 text-center font-sans">
                {lang === 'hi'
                  ? 'हे विशाल काया वाले, करोड़ों सूर्यों के समान तेजस्वी, विघ्नहर्ता प्रभु श्री गणेश! हमारे समस्त कार्यों को सदा निर्विघ्न संपन्न करें।'
                  : 'O Lord of curved trunk and brilliant radiance of ten million suns, always make all our endeavors free of obstacles.'}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('financials')}
                className="flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-[#FF7722] via-[#E65A00] to-[#D4AF37] hover:from-[#FFA044] hover:to-[#FF7722] text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-[1.03] active:scale-[0.98] border border-amber-300/40"
              >
                <ShieldCheck className="w-5 h-5 text-[#FFDF80]" />
                <span>{lang === 'hi' ? 'आय-व्यय देखें' : 'View Accounts'}</span>
              </button>

              <button
                onClick={() => scrollTo('gallery')}
                className="flex items-center gap-2.5 px-7 py-4 bg-[#FFFDF7]/15 hover:bg-[#FFFDF7]/25 border-2 border-[#D4AF37] text-[#FFFDF7] hover:text-[#FFDF80] font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>{lang === 'hi' ? 'उत्सव की स्मृतियाँ' : 'Festival Memories'}</span>
              </button>

              <button
                onClick={() => scrollTo('timeline')}
                className="flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>{lang === 'hi' ? '12 दिवसीय कार्यक्रम' : '12-Day Schedule'}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Divine Artwork Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <FestiveArtwork type="murti_darshan_real" className="scale-100 hover:scale-[1.02] transition-transform shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Floating Auspicious Metrics Banner */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-[#380009]/80 border border-[#D4AF37]/40 rounded-2xl p-4 text-center backdrop-blur-sm shadow-md">
              <span className="block text-xs text-[#FFFDF7]/70 font-medium mb-1">
                {lang === 'hi' ? 'कुल केन्द्रीय आवक' : 'Central Inflow'}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#FFDF80]">
                ₹{CENTRAL_TREASURY_DATA.totalInflow.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="bg-[#380009]/80 border border-[#D4AF37]/40 rounded-2xl p-4 text-center backdrop-blur-sm shadow-md">
              <span className="block text-xs text-[#FFFDF7]/70 font-medium mb-1">
                {lang === 'hi' ? 'कुल केन्द्रीय व्यय' : 'Central Outflow'}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#FFA07A]">
                ₹{CENTRAL_TREASURY_DATA.totalOutflow.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="bg-[#380009]/80 border border-[#D4AF37]/40 rounded-2xl p-4 text-center backdrop-blur-sm shadow-md">
              <span className="block text-xs text-[#FFFDF7]/70 font-medium mb-1">
                {lang === 'hi' ? 'प्रारंभिक शेष' : 'Initial Balance'}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#FFFDF7]">
                ₹{CENTRAL_TREASURY_DATA.preliminaryHandBalance.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="bg-gradient-to-br from-[#2A0006] to-[#45000A] border-2 border-emerald-400 rounded-2xl p-4 text-center shadow-xl">
              <span className="block text-xs text-emerald-300 font-bold mb-1">
                {lang === 'hi' ? 'अंतिम शुद्ध बचत' : 'Final Net Savings'}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-emerald-400">
                ₹{CENTRAL_TREASURY_DATA.finalNetSavings.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
