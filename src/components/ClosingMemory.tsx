import React, { useState, useEffect, useRef } from 'react';
import { FestiveArtwork } from './FestiveArtwork';
import { Sparkles, Heart } from 'lucide-react';
import { devotionalAudio } from '../utils/devotionalAudio';

interface ClosingMemoryProps {
  lang: 'hi' | 'en';
}

export const ClosingMemory: React.FC<ClosingMemoryProps> = ({ lang }) => {
  const [stage, setStage] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStage(1); // Stage 1: "एक उत्सव समाप्त हुआ…"
          
          if (devotionalAudio.hasInteracted) {
            devotionalAudio.playShankh(0.32);
          }

          const t1 = setTimeout(() => {
            setStage(2); // Stage 2: "लेकिन स्मृतियाँ नहीं।"
          }, 1400);

          const t2 = setTimeout(() => {
            setStage(3); // Stage 3: Full grand reveal + "गणपति बप्पा मोरया 🙏"
          }, 2800);

          observer.disconnect();
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
          };
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="closing"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#5A0010] text-[#2D1B10] relative overflow-hidden"
    >
      {/* Subtle Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        {/* Sacred Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold border border-[#D4AF37] shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
          <span>अविस्मरणीय पावन संस्मरण • विसर्जन मंगल वेला</span>
        </div>

        {/* Narrative Revelation Flow */}
        <div className="space-y-4 max-w-3xl mx-auto min-h-[110px] flex flex-col items-center justify-center">
          <p
            className={`text-2xl sm:text-4xl font-serif font-black text-[#780016] transition-all duration-1000 ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "एक उत्सव समाप्त हुआ…"
          </p>

          <p
            className={`text-2xl sm:text-4xl font-serif font-bold text-[#FF7722] transition-all duration-1000 ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "…लेकिन स्मृतियाँ नहीं।"
          </p>

          <p
            className={`text-base sm:text-lg text-stone-600 max-w-2xl mx-auto pt-2 transition-all duration-1000 ${
              stage >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी, भोपाल के समस्त परिवारों, मातृशक्ति, बुजुर्गों व बच्चों की एकता और श्रद्धा को कोटि-कोटि नमन।'
              : 'Our deepest gratitude to all the families, mothers, elders, and children of Mayur Homes Colony, Bhopal.'}
          </p>
        </div>

        {/* Closing Grand Idol Artwork Card / Real Visarjan Photo */}
        <div
          className={`max-w-md mx-auto shadow-2xl rounded-3xl overflow-hidden border-2 border-[#D4AF37] transition-all duration-1000 ${
            stage >= 3 ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
          }`}
        >
          <FestiveArtwork type="visarjan_real" className="scale-100 hover:scale-[1.02] transition-transform" />
        </div>

        {/* Auspicious Chants & Closing Devotion */}
        <div
          className={`pt-6 space-y-3 transition-all duration-1000 ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-3xl sm:text-5xl font-serif font-black text-[#FFFDF7] tracking-wide drop-shadow-md bg-gradient-to-r from-[#FFDF80] via-white to-[#FFDF80] bg-clip-text text-transparent">
            गणपति बप्पा मोरया 🙏
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-[#FFDF80]">
            अगले बरस तू जल्दी आ!
          </div>
        </div>

      </div>
    </section>
  );
};
