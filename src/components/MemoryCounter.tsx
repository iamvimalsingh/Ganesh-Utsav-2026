import React from 'react';
import { Sparkles, Heart, Users, FileCheck, Award, Calendar } from 'lucide-react';

interface MemoryCounterProps {
  lang: 'hi' | 'en';
}

export const MemoryCounter: React.FC<MemoryCounterProps> = ({ lang }) => {
  return (
    <section className="py-16 bg-[#780016] text-[#FFFDF7] border-y-2 border-[#D4AF37] relative overflow-hidden">
      {/* Background Mandala Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF7722_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-1 rounded-full border border-[#D4AF37]/40">
            स्मृति संकलन
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            {lang === 'hi' ? 'इस उत्सव की यादों में' : 'Memories of the Festival in Numbers'}
          </h2>
          <p className="text-xs sm:text-sm text-[#FFFDF7]/80">
            {lang === 'hi' ? 'सामूहिक सेवा, श्रद्धा और एकता के अविस्मरणीय आयाम।' : 'The memorable dimensions of voluntary community seva and unity.'}
          </p>
        </div>

        {/* 4 Tasteful Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-black/30 border border-[#D4AF37]/40 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#D4AF37] text-[#5A0010] flex items-center justify-center mx-auto mb-3 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#FFDF80]">
              12
            </div>
            <span className="text-xs sm:text-sm text-[#FFFDF7]/90 font-medium block mt-1">
              {lang === 'hi' ? 'दिवसीय महोत्सव' : 'Festival Days'}
            </span>
          </div>

          <div className="bg-black/30 border border-[#D4AF37]/40 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#FF7722] text-white flex items-center justify-center mx-auto mb-3 font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-white">
              40
            </div>
            <span className="text-xs sm:text-sm text-[#FFFDF7]/90 font-medium block mt-1">
              {lang === 'hi' ? 'ऑनलाइन चंदा रिकॉर्ड' : 'Online Donor Entries'}
            </span>
          </div>

          <div className="bg-black/30 border border-[#D4AF37]/40 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center mx-auto mb-3 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-[#FFDF80]">
              12
            </div>
            <span className="text-xs sm:text-sm text-[#FFFDF7]/90 font-medium block mt-1">
              {lang === 'hi' ? 'धार्मिक व खेल कार्यक्रम' : 'Rituals & Game Events'}
            </span>
          </div>

          <div className="bg-black/30 border border-[#D4AF37]/40 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-300">
              100%
            </div>
            <span className="text-xs sm:text-sm text-[#FFFDF7]/90 font-medium block mt-1">
              {lang === 'hi' ? 'पारदर्शी लेखा ऑडिट' : 'Public Audit Records'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
