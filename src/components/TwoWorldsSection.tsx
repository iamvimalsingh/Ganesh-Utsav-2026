import React from 'react';
import { Flame, Trophy, Sparkles, Music, Users, ArrowRight, BookOpen, Utensils, HeartHandshake } from 'lucide-react';

interface TwoWorldsProps {
  lang: 'hi' | 'en';
  onSelectCategory: (cat: 'religious' | 'community_games') => void;
}

export const TwoWorldsSection: React.FC<TwoWorldsProps> = ({ lang, onSelectCategory }) => {
  const handleScrollToTimeline = (cat: 'religious' | 'community_games') => {
    onSelectCategory(cat);
    const el = document.getElementById('timeline');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#780016]/10 text-[#780016] text-xs font-bold border border-[#780016]/20">
            <Sparkles className="w-4 h-4 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'भक्ति व आनंद का संगम' : 'Harmony of Devotion & Joy'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'उत्सव के दो रंग' : 'Two Worlds of the Festival'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'एक ओर वैदिक मंत्रोच्चार व भक्तिमय अनुष्ठान, तो दूसरी ओर बच्चों व परिवारों का उल्लासमय खेल संसार।'
              : 'Sacred religious ceremonies united with joyous community games and family celebrations.'}
          </p>
        </div>

        {/* Dual Interactive World Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* World 1: Religious Programs (Deep Maroon / Gold / Diya) */}
          <div
            onClick={() => handleScrollToTimeline('religious')}
            className="group relative bg-gradient-to-br from-[#780016] via-[#5A0010] to-[#380008] text-[#FFFDF7] rounded-3xl p-8 sm:p-10 border-2 border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-[1.01] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Arch Overlay */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#FF7722]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#5A0010] flex items-center justify-center font-bold shadow-lg text-2xl group-hover:rotate-12 transition-transform">
                  🪔
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  5 पावन अनुष्ठान
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-2">
                {lang === 'hi' ? 'धार्मिक कार्यक्रम' : 'Religious Ceremonies'}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/85 font-sans leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'वैदिक गणेश स्थापना, दैनिक प्रातः व सांध्य आरती, संगीतमय सुंदरकांड पाठ, 108 दीप महाआरती, हवन एवं विशाल महाप्रसाद भंडारा।'
                  : 'Vedic Sthapana, daily regular aartis, musical Sunderkand, 108-lamp Maha Aarti, Havan and Grand Bhandara.'}
              </p>

              {/* Ritual Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FF7722]" />
                  <span>श्री गणेश स्थापना (14/09)</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FFDF80]" />
                  <span>सुंदरकांड पाठ (18/09)</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF7722]" />
                  <span>भव्य महाआरती (20/09)</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/15 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-emerald-400" />
                  <span>हवन + भंडारा (24/09)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between text-xs font-bold text-[#FFDF80] group-hover:text-white transition-colors">
              <span>{lang === 'hi' ? 'धार्मिक समय-सारणी देखें' : 'View Religious Schedule'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* World 2: Community & Game Programs (Royal Saffron / Warm Green / Games) */}
          <div
            onClick={() => handleScrollToTimeline('community_games')}
            className="group relative bg-gradient-to-br from-[#FF7722] via-[#E65A00] to-[#8C2C00] text-white rounded-3xl p-8 sm:p-10 border-2 border-amber-300 shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-[1.01] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-[#FFFDF7] text-[#FF7722] flex items-center justify-center font-bold shadow-lg text-2xl group-hover:rotate-12 transition-transform">
                  🏆
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF80] bg-black/20 px-3 py-1 rounded-full border border-white/30">
                  7 मनोरंजक प्रतियोगिताएं
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-2">
                {lang === 'hi' ? 'गेम एवं सामुदायिक कार्यक्रम' : 'Games & Community Events'}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'बच्चों, महिलाओं एवं बुजुर्गों के मध्य सिंगिंग-डांस, चायनीज पिक-अप, म्यूजिकल पिलो, डम्ब शराड्स, बकेट गेम, चित्रकला व बलून कप गेम।'
                  : 'Cultural singing & dance, Chinese pick-up, musical pillow, Dumb Charades, bucket games, drawing competitions, and balloon cup fun.'}
              </p>

              {/* Game Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/20 p-2.5 rounded-xl border border-white/20 flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#FFDF80]" />
                  <span>सिंगिंग एंड डांस (15/09)</span>
                </div>
                <div className="bg-black/20 p-2.5 rounded-xl border border-white/20 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>म्यूजिकल पिलो (17/09)</span>
                </div>
                <div className="bg-black/20 p-2.5 rounded-xl border border-white/20 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FFDF80]" />
                  <span>Dumb Charades (19/09)</span>
                </div>
                <div className="bg-black/20 p-2.5 rounded-xl border border-white/20 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>ड्रॉइंग व खेल (22-23/09)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/30 flex items-center justify-between text-xs font-bold text-[#FFDF80] group-hover:text-white transition-colors">
              <span>{lang === 'hi' ? 'गेम समय-सारणी देखें' : 'View Games Schedule'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
