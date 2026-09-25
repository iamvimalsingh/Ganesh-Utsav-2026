import React from 'react';
import { SPECIAL_CONTRIBUTORS } from '../data/festivalData';
import { Award, Sparkles, Info, ShieldCheck, Heart } from 'lucide-react';

interface SpecialHonorsProps {
  lang: 'hi' | 'en';
}

export const SpecialHonors: React.FC<SpecialHonorsProps> = ({ lang }) => {
  return (
    <section id="honors" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#780016] text-xs font-bold border border-[#D4AF37]/50">
            <Award className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'सेवा सम्मान' : 'Dedicated Seva Honors'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'विशेष समर्पित सहयोगी सम्मान' : 'Special Honors & Key Contributors'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            {lang === 'hi'
              ? 'सुंदरकांड पाठ, मूर्ति स्थापना एवं महाभंडारा में विशेष समर्पित योगदान देने वाले महानुभावों का सादर आभार।'
              : 'Our heartfelt gratitude to our devoted colony members for their dedicated sponsorships towards Sunderkand, Murti Sthapana & Bhandara.'}
          </p>
        </div>

        {/* 5 Ceremonial Contributor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIAL_CONTRIBUTORS.map((contributor) => (
            <div
              key={contributor.id}
              className="relative bg-gradient-to-b from-white via-[#FFFDF7] to-[#FFFBF0] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden group hover:border-[#FF7722]"
            >
              {/* Top Golden Corner Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-[#780016] to-[#FF7722] text-[#FFDF80] text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{contributor.badge}</span>
                </div>
              </div>

              <div>
                {/* Gold Seal Emblem */}
                <div className="w-12 h-12 rounded-2xl bg-[#780016] text-[#FFDF80] flex items-center justify-center font-bold text-xl mb-4 shadow-md group-hover:scale-105 transition-transform">
                  🙏
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-black text-[#780016] leading-tight mb-1">
                  {lang === 'hi' ? contributor.nameHi : contributor.nameEn}
                </h3>

                <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-2 mb-2">
                  {contributor.amountText}
                </div>

                <div className="inline-block text-xs font-bold text-[#FF7722] bg-[#FF7722]/10 px-3 py-1 rounded-lg border border-[#FF7722]/20 mb-4">
                  {lang === 'hi' ? contributor.purposeHi : contributor.purposeEn}
                </div>
              </div>

              {/* Audit Treatment Note */}
              <div className="pt-3 border-t border-stone-200">
                <div className="flex items-start gap-1.5 text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#780016] shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? contributor.accountingNoteHi : contributor.accountingNoteEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
