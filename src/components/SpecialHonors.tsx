import React from 'react';
import { SPECIAL_CONTRIBUTORS } from '../data/festivalData';
import { Award, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface SpecialHonorsProps {
  lang: 'hi' | 'en';
}

export const SpecialHonors: React.FC<SpecialHonorsProps> = ({ lang }) => {
  const totalSpecialSeva = SPECIAL_CONTRIBUTORS.reduce((acc, c) => acc + (c.amountNum || 0), 0);

  return (
    <section id="honors" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
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

        {/* Total Special Seva Contribution Summary Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#780016] via-[#5A0010] to-[#780016] text-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF7722] via-[#D4AF37] to-amber-200 text-[#5A0010] flex items-center justify-center font-bold text-2xl shadow-lg shrink-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-0.5 rounded-full border border-[#D4AF37]/40">
                  {lang === 'hi' ? 'विशेष समर्पित सेवा योग' : 'Total Special Seva Contributions'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {lang === 'hi' ? 'कुल समर्पित विशेष सेवा संकलन' : 'Total Dedicated Contributions'}
                </h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
              <div className="bg-[#380009]/90 border border-[#D4AF37]/60 rounded-2xl px-6 py-3 backdrop-blur-sm shadow-md">
                <span className="block text-[11px] text-[#FFDF80] font-medium mb-0.5">
                  {lang === 'hi' ? `${SPECIAL_CONTRIBUTORS.length} विशिष्ट सहयोगी सेवा` : `${SPECIAL_CONTRIBUTORS.length} Key Contributors`}
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-black text-emerald-400">
                  ₹{totalSpecialSeva.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Sub-Category Distribution Chips */}
          <div className="mt-6 pt-5 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-[#D4AF37]/40 text-[#FFDF80] font-medium">
              📖 {lang === 'hi' ? 'सुंदरकांड सहयोग: ₹2,500' : 'Sunderkand: ₹2,500'}
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-[#D4AF37]/40 text-amber-200 font-medium">
              🪔 {lang === 'hi' ? 'मूर्ति स्थापना: गुड्डू राय जी' : 'Murti Seva: Guddu Rai Ji'}
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-[#D4AF37]/40 text-orange-200 font-medium">
              🍲 {lang === 'hi' ? 'समर्पित भंडारा सेवा: ₹3,750 (संतोष जी + गुड्डू जी ₹1,500 | डॉ. आशीष ₹1,000 | ज्योति जी ₹600 | सुमन जी ₹600)' : 'Bhandara Seva: ₹3,750'}
            </span>
          </div>
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
