import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Flame, HeartHandshake, Users, Heart, RotateCcw, Check, Bell } from 'lucide-react';
import { devotionalAudio } from '../utils/devotionalAudio';

interface DevotionalInteractionsProps {
  lang: 'hi' | 'en';
}

interface FlowerItem {
  id: number;
  nameHi: string;
  nameEn: string;
  symbol: string;
  color: string;
}

const FLOWERS: FlowerItem[] = [
  { id: 1, nameHi: 'गुड़हल (लाल)', nameEn: 'Hibiscus', symbol: '🌺', color: '#E11D48' },
  { id: 2, nameHi: 'गेंदा (पीला)', nameEn: 'Marigold Yellow', symbol: '🌼', color: '#F59E0B' },
  { id: 3, nameHi: 'कमल (गुलाबी)', nameEn: 'Lotus', symbol: '🪷', color: '#EC4899' },
  { id: 4, nameHi: 'गेंदा (नारंगी)', nameEn: 'Marigold Orange', symbol: '🏵️', color: '#EA580C' },
  { id: 5, nameHi: 'मोगरा (श्वेत)', nameEn: 'Jasmine', symbol: '🌸', color: '#F472B6' },
  { id: 6, nameHi: 'पारिजात', nameEn: 'Parijat', symbol: '💮', color: '#FB923C' },
];

export const DevotionalInteractions: React.FC<DevotionalInteractionsProps> = ({ lang }) => {
  // 1. Pushpa Arpan State
  const [offeredCount, setOfferedCount] = useState<number>(0);
  const [activeFlowerAnimation, setActiveFlowerAnimation] = useState<number | null>(null);
  const [showFlowerBlessing, setShowFlowerBlessing] = useState<boolean>(false);

  // 2. Bhakti Ki Jyoti (7 Diyas) State
  const [litDiyas, setLitDiyas] = useState<boolean[]>([false, false, false, false, false, false, false]);

  // 3. Mantra Counter State
  const [mantraCount, setMantraCount] = useState<number>(0);
  const [isBeadTapped, setIsBeadTapped] = useState<boolean>(false);

  // IntersectionObserver for subtle reveal
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handler: Flower Offering
  const handleOfferFlower = (flowerId: number) => {
    setActiveFlowerAnimation(flowerId);
    devotionalAudio.playChime(0.35);

    setOfferedCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setShowFlowerBlessing(true);
      }
      return next;
    });

    setTimeout(() => {
      setActiveFlowerAnimation(null);
    }, 1000);
  };

  // Handler: Diya Lighting
  const handleLightDiya = (index: number) => {
    if (litDiyas[index]) return; // Already lit

    devotionalAudio.playChime(0.3);
    const updated = [...litDiyas];
    updated[index] = true;
    setLitDiyas(updated);
  };

  const handleResetDiyas = () => {
    setLitDiyas([false, false, false, false, false, false, false]);
  };

  const allDiyasLit = litDiyas.every(Boolean);

  // Handler: Mantra Count
  const handleMantraTap = () => {
    setIsBeadTapped(true);
    devotionalAudio.playBhaktiTone(0.3);
    setMantraCount((prev) => prev + 1);
    setTimeout(() => setIsBeadTapped(false), 260);
  };

  const handleResetMantra = () => {
    setMantraCount(0);
  };

  return (
    <section
      id="devotional-experience"
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#FFFDF7] text-[#2D1B10] relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-90'
      }`}
    >
      {/* Decorative Traditional Border Motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#780016]/10 text-[#780016] text-xs font-bold border border-[#780016]/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'भक्ति भाव एवं स्मरण' : 'Devotional Reflections'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'सामूहिक श्रद्धा व पावन संकल्प' : 'Sacred Reflections & Dedication'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी के इस उत्सव में हर हृदय की श्रद्धा और प्रभु के प्रति कृतज्ञता समर्पित है।'
              : 'Expressing gratitude and heartfelt reverence from every household of Mayur Homes Colony.'}
          </p>
        </div>

        {/* 1. पुष्प अर्पण एवं भक्ति की ज्योति Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card A: पुष्प अर्पण (Pushpa Arpan) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            {/* Ambient Background Watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-5 text-9xl select-none pointer-events-none">
              🪷
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" role="img" aria-label="Flower">🌺</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#780016]">
                    {lang === 'hi' ? 'गणेश जी को पुष्प अर्पित करें' : 'Offer Flowers to Lord Ganesha'}
                  </h3>
                </div>
                {offeredCount > 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#FF7722]/15 text-[#780016] text-xs font-bold border border-[#FF7722]/30">
                    {lang === 'hi' ? `अर्पित पुष्प: ${offeredCount}` : `Offered: ${offeredCount}`}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'नीचे दिए गए सुगंधित पुष्पों में से किसी पर भी स्पर्श कर प्रभु के चरणों में अपनी श्रद्धा अर्पित करें।'
                  : 'Tap any sacred flower to offer your symbolic reverence at the holy feet of Lord Ganesha.'}
              </p>

              {/* Central Symbolic Shrine Representation */}
              <div className="relative py-6 px-4 bg-gradient-to-b from-[#5A0010] to-[#780016] rounded-2xl text-center text-[#FFFDF7] shadow-inner mb-6 border border-[#D4AF37]/40 flex flex-col items-center justify-center min-h-[140px]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF7722] via-[#D4AF37] to-[#FFFDF7] p-0.5 shadow-lg mb-2 flex items-center justify-center">
                  <div className="w-full h-full bg-[#5A0010] rounded-full flex items-center justify-center text-xl font-serif font-bold text-[#FFDF80]">
                    ॐ
                  </div>
                </div>
                <span className="text-xs font-serif font-bold text-[#FFDF80] tracking-wider">
                  || श्री गणेशाय नमः ||
                </span>

                {/* Animated Floating Flower Petal */}
                {activeFlowerAnimation !== null && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl animate-flower-float pointer-events-none">
                    {FLOWERS.find((f) => f.id === activeFlowerAnimation)?.symbol || '🌺'}
                  </div>
                )}
              </div>

              {/* Flower Selector Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
                {FLOWERS.map((flower) => {
                  const isOffering = activeFlowerAnimation === flower.id;
                  return (
                    <button
                      key={flower.id}
                      onClick={() => handleOfferFlower(flower.id)}
                      aria-label={`${flower.nameHi} पुष्प अर्पित करें`}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all min-h-[72px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7722] active:scale-95 ${
                        isOffering
                          ? 'border-[#FF7722] bg-[#FF7722]/20 scale-105 shadow-md'
                          : 'border-[#D4AF37]/40 bg-[#FFFDF7] hover:border-[#FF7722] hover:bg-amber-50 hover:shadow'
                      }`}
                    >
                      <span className="text-2xl mb-1 transition-transform group-hover:scale-110 select-none">
                        {flower.symbol}
                      </span>
                      <span className="text-[10px] font-bold text-[#780016] text-center leading-tight">
                        {lang === 'hi' ? flower.nameHi.split(' ')[0] : flower.nameEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Devotional Toast / Blessing */}
            <div className="mt-4 pt-3 border-t border-stone-200 text-center min-h-[36px] flex items-center justify-center">
              {showFlowerBlessing ? (
                <span className="text-xs sm:text-sm font-serif font-bold text-[#780016] animate-in fade-in duration-300 flex items-center gap-1.5">
                  <span>🌸</span>
                  <span>{lang === 'hi' ? 'भक्ति से अर्पित एक छोटा सा पुष्प 🙏' : 'A humble flower offered with devotion 🙏'}</span>
                  <span>✨</span>
                </span>
              ) : (
                <span className="text-[11px] text-stone-500 italic">
                  {lang === 'hi' ? 'पुष्प स्पर्श करें और अपनी प्रार्थना अर्पित करें' : 'Touch a flower to offer your prayer'}
                </span>
              )}
            </div>
          </div>

          {/* Card B: भक्ति की ज्योति (7 Diyas) */}
          <div
            className={`lg:col-span-6 rounded-3xl p-6 sm:p-8 border-2 transition-all duration-700 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[440px] ${
              allDiyasLit
                ? 'bg-gradient-to-br from-[#FFF9EE] via-[#FEF3C7] to-[#FFFDF7] border-[#D4AF37] shadow-amber-200/50'
                : 'bg-white border-[#D4AF37]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" role="img" aria-label="Diya">🪔</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#780016]">
                    {lang === 'hi' ? 'भक्ति की ज्योति' : 'Flame of Devotion (7 Diyas)'}
                  </h3>
                </div>
                {allDiyasLit && (
                  <button
                    onClick={handleResetDiyas}
                    className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-[#780016] bg-amber-100 hover:bg-amber-200 rounded-full transition-colors border border-amber-300"
                    title="पुनः दीप प्रज्वलित करें"
                    aria-label="Reset Diyas"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{lang === 'hi' ? 'पुनः' : 'Reset'}</span>
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'सप्त दीपकों को स्पर्श कर प्रज्वलित करें और अपने घर-परिवार में सुख-समृद्धि की मंगल कामना करें।'
                  : 'Tap each of the 7 sacred lamps to kindle the light of peace, happiness, and prosperity.'}
              </p>

              {/* 7 Diyas Row */}
              <div className="py-8 px-3 bg-gradient-to-r from-[#5A0010] via-[#780016] to-[#5A0010] rounded-2xl shadow-inner mb-6 border border-[#D4AF37]/40 flex items-center justify-around sm:justify-center sm:gap-4 flex-wrap">
                {litDiyas.map((isLit, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLightDiya(idx)}
                    disabled={isLit}
                    aria-label={`दीप ${idx + 1} ${isLit ? 'प्रज्वलित है' : 'प्रज्वलित करें'}`}
                    className={`group relative p-2 sm:p-3 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7722] ${
                      isLit ? 'cursor-default' : 'hover:scale-110 active:scale-95'
                    }`}
                  >
                    {/* Flame representation */}
                    <div className="h-6 flex items-end justify-center mb-1">
                      {isLit ? (
                        <span className="text-xl inline-block animate-diya-flame select-none">
                          🔥
                        </span>
                      ) : (
                        <div className="w-1.5 h-3 rounded-full bg-amber-400/40 group-hover:bg-amber-400 transition-colors" />
                      )}
                    </div>

                    {/* Diya Clay Base */}
                    <div
                      className={`w-10 h-6 sm:w-11 sm:h-7 rounded-b-full border-2 flex items-center justify-center transition-all shadow-md ${
                        isLit
                          ? 'bg-gradient-to-b from-[#FF7722] to-[#B45309] border-[#FFDF80] shadow-orange-500/40'
                          : 'bg-[#380009] border-[#D4AF37]/60 group-hover:border-amber-300'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-[#FFDF80]">
                        {idx + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Count */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 mb-2 font-medium">
                <span>{lang === 'hi' ? 'प्रज्वलित दीप:' : 'Lamps Kindled:'}</span>
                <span className="font-bold text-[#780016]">
                  {litDiyas.filter(Boolean).length} / 7
                </span>
              </div>
            </div>

            {/* Bottom Status / Completion Notice */}
            <div className="mt-4 pt-3 border-t border-stone-200 text-center min-h-[36px] flex items-center justify-center">
              {allDiyasLit ? (
                <div className="text-sm sm:text-base font-serif font-bold text-[#780016] animate-in fade-in zoom-in-95 duration-500 flex items-center gap-2">
                  <span>🪔</span>
                  <span>{lang === 'hi' ? 'भक्ति की ज्योति सदा प्रज्वलित रहे 🙏' : 'May the eternal light of devotion always shine 🙏'}</span>
                  <span>✨</span>
                </div>
              ) : (
                <span className="text-[11px] text-stone-500 italic">
                  {lang === 'hi' ? 'सभी 7 दीपकों को स्पर्श कर प्रज्वलित करें' : 'Tap all 7 diyas to light up the sacred shrine'}
                </span>
              )}
            </div>
          </div>

        </div>

        {/* 2. मंत्र जप Counter & प्रतिदिन आरती Memory Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card C: ॐ गं गणपतये नमः Mantra Counter */}
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7722] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {lang === 'hi' ? 'पवित्र गणेश महामंत्र' : 'Sacred Ganesh Mahamantra'}
                </span>
                {mantraCount > 0 && (
                  <button
                    onClick={handleResetMantra}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-[#780016] bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                    title="गणना फिर से शुरू करें"
                    aria-label="Reset Mantra Count"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{lang === 'hi' ? 'फिर से' : 'Reset'}</span>
                  </button>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#780016] mb-2">
                "ॐ गं गणपतये नमः"
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                {lang === 'hi'
                  ? 'इस पावन मंत्र का स्मरण करते हुए नीचे दिए गए पवित्र जप-बिंदु को स्पर्श करें।'
                  : 'Chant this sacred invocation and gently tap the prayer bead below.'}
              </p>

              {/* Circular Prayer Bead Button */}
              <div className="flex flex-col items-center justify-center py-4">
                <button
                  onClick={handleMantraTap}
                  aria-label="मंत्र जप करें"
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#780016] via-[#5A0010] to-[#3B0008] border-4 border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center text-[#FFFDF7] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FF7722]/50 ${
                    isBeadTapped ? 'animate-bead-tap scale-95 border-amber-300' : 'hover:scale-105'
                  }`}
                >
                  <span className="text-xs font-serif text-[#FFDF80] tracking-widest uppercase mb-0.5">
                    {lang === 'hi' ? 'जप संख्या' : 'Count'}
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-black text-white">
                    {mantraCount}
                  </span>
                  <span className="text-[10px] text-amber-200/80 mt-0.5 font-sans">
                    {lang === 'hi' ? 'स्पर्श करें' : 'Tap Bead'}
                  </span>

                  {/* Auspicious Outer Rings */}
                  <div className="absolute inset-0 rounded-full border border-amber-300/30 scale-110 pointer-events-none" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 text-center italic mt-4 pt-3 border-t border-stone-100">
              {lang === 'hi'
                ? 'यह केवल इस ब्राउज़र सत्र हेतु सांकेतिक भक्ति स्मरण है।'
                : 'This is a symbolic browser session reflection.'}
            </p>
          </div>

          {/* Card D: प्रतिदिन आरती (Daily Aarti Tradition Card) */}
          <div className="md:col-span-6 bg-gradient-to-br from-[#5A0010] via-[#780016] to-[#380009] text-[#FFFDF7] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Decorative Bell Silhouette */}
            <div className="absolute -right-6 -bottom-6 opacity-10 text-9xl select-none pointer-events-none">
              🔔
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#FFDF80] text-xs font-bold mb-4">
                <Bell className="w-3.5 h-3.5 text-[#FF7722]" />
                <span>{lang === 'hi' ? 'उत्सव परंपरा संस्मरण' : 'Festival Daily Tradition'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FFFDF7] mb-2">
                {lang === 'hi' ? 'प्रतिदिन आरती' : 'Daily Aarti Tradition'}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/80 mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'उत्सव के 12 दिनों में मयूर होम्स कॉलोनी के समस्त श्रद्धालुओं द्वारा प्रतिदिन निर्धारित समय पर भावपूर्ण महाआरती संपन्न की जाती थी।'
                  : 'Throughout the 12 sacred days, colony families gathered daily at fixed timings for morning and evening Maha Aarti.'}
              </p>

              {/* Timings Display */}
              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="bg-[#380009]/80 border border-[#D4AF37]/50 rounded-2xl p-4 text-center backdrop-blur-sm shadow-md">
                  <div className="text-2xl mb-1">🌅</div>
                  <span className="block text-xs text-[#FFDF80] font-bold uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'प्रातः आरती' : 'Morning Aarti'}
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-black text-white">
                    8:00 {lang === 'hi' ? 'बजे' : 'AM'}
                  </span>
                </div>

                <div className="bg-[#380009]/80 border border-[#D4AF37]/50 rounded-2xl p-4 text-center backdrop-blur-sm shadow-md">
                  <div className="text-2xl mb-1">🪔</div>
                  <span className="block text-xs text-[#FFA07A] font-bold uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'सायं आरती' : 'Evening Aarti'}
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-black text-white">
                    8:00 {lang === 'hi' ? 'बजे' : 'PM'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D4AF37]/25 text-center text-xs text-[#FFDF80]/80 font-serif">
              "जय गणेश जय गणेश जय गणेश देवा, माता जाकी पार्वती पिता महादेवा॥"
            </div>
          </div>

        </div>

        {/* 3. हमारा संकल्प (Our Core Values) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#780016]">
              {lang === 'hi' ? 'सामूहिक जीवन मूल्य' : 'Community Values'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#780016]">
              {lang === 'hi' ? 'हमारा संकल्प' : 'Our Sacred Resolve'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Value 1: भक्ति */}
            <div className="group p-5 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#780016]/10 text-[#780016] group-hover:bg-[#780016] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#780016] mb-1">
                {lang === 'hi' ? 'भक्ति' : 'Bhakti (Devotion)'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'hi' ? 'प्रभु श्री गणेश के प्रति अनन्य निष्ठा और समर्पण' : 'Unwavering faith and dedication to Lord Ganesha'}
              </p>
            </div>

            {/* Value 2: सेवा */}
            <div className="group p-5 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#FF7722]/10 text-[#FF7722] group-hover:bg-[#FF7722] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#780016] mb-1">
                {lang === 'hi' ? 'सेवा' : 'Seva (Service)'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'hi' ? 'निस्वार्थ भाव से समाज व उत्सव कार्यों में सहयोग' : 'Selfless contribution to the community'}
              </p>
            </div>

            {/* Value 3: सद्भाव */}
            <div className="group p-5 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#D4AF37]/20 text-[#780016] group-hover:bg-[#D4AF37] group-hover:text-[#5A0010] transition-colors flex items-center justify-center mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#780016] mb-1">
                {lang === 'hi' ? 'सद्भाव' : 'Sadbhav (Harmony)'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'hi' ? 'परस्पर प्रेम, आदर और सद्भावना का वातावरण' : 'Mutual respect, goodwill, and peaceful coexistence'}
              </p>
            </div>

            {/* Value 4: सहभागिता */}
            <div className="group p-5 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#780016] mb-1">
                {lang === 'hi' ? 'सहभागिता' : 'Sahbhagita (Unity)'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'hi' ? 'हर परिवार व हर पीढ़ी की सक्रिय और समान भागीदारी' : 'Active and inclusive participation across all families'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
