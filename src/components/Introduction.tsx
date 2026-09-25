import React from 'react';
import { Heart, Users, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

interface IntroductionProps {
  lang: 'hi' | 'en';
}

export const Introduction: React.FC<IntroductionProps> = ({ lang }) => {
  return (
    <section id="overview" className="py-16 md:py-20 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#780016]/10 text-[#780016] text-xs font-bold border border-[#780016]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'सामूहिक भक्ति एवं सेवा' : 'Community Devotion & Seva'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'एकता, श्रद्धा और निष्ठा का पावन उत्सव' : 'A Sacred Celebration of Unity & Faith'}
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी, भोपाल में श्री गणेश उत्सव 2026 समस्त कॉलोनीवासियों की सामूहिक सहभागिता, निस्वार्थ सेवा और अगाध श्रद्धा के साथ भव्यता से संपन्न हुआ। भगवान श्री गणेश की कृपा से प्रत्येक अनुष्ठान निर्विघ्न पूर्ण हुआ।'
              : 'Shree Ganesh Utsav 2026 at Mayur Homes Colony, Bhopal was celebrated with profound devotion, voluntary community seva, and collective harmony. With the divine grace of Lord Ganesha, every ritual was performed auspiciously.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#780016]/10 flex items-center justify-center text-[#780016] mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#780016] mb-2">
              {lang === 'hi' ? 'सामूहिक सहभागिता' : 'Collective Participation'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'कॉलोनी के प्रत्येक परिवार, बुजुर्गों, मातृशक्ति और बच्चों की सक्रिय उपस्थिति ने उत्सव को जीवंत बनाया।'
                : 'Active presence and heartfelt participation from elders, families, youth, and children across all homes.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FF7722]/10 flex items-center justify-center text-[#FF7722] mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#780016] mb-2">
              {lang === 'hi' ? 'निस्वार्थ सेवा' : 'Selfless Seva'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'स्थापना से लेकर विसर्जन तक, पंडाल व्यवस्था, दैनिक आरती, सुंदरकांड एवं महाप्रसाद में कॉलोनी बंधुओं का समर्पित योगदान।'
                : 'Voluntary dedication in pandal arrangements, daily aartis, Sunderkand paath, and Mahaprasad distribution.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#780016] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#780016] mb-2">
              {lang === 'hi' ? 'पूर्ण वित्तीय शुचिता' : 'Absolute Transparency'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'प्रत्येक ऑनलाइन चंदे, नकद संकलन और व्यय का पाई-पाई का हिसाब सार्वजनिक रूप से प्रस्तुत है।'
                : 'Every rupee of online chanda, cash collection, and vendor expenditure is documented and audited publicly.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/40 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#780016] mb-2">
              {lang === 'hi' ? 'डिजिटल संस्मरण' : 'Digital Archive'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'भावी पीढ़ियों और कॉलोनी के रिकॉर्ड हेतु उत्सव की पावन स्मृतियों और साक्ष्यों का सुरक्षित संकलन।'
                : 'A permanent digital record of festival memories and verified financial documents for the colony archive.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
