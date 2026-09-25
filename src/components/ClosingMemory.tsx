import React from 'react';
import { FestiveArtwork } from './FestiveArtwork';
import { Sparkles, Heart } from 'lucide-react';

interface ClosingMemoryProps {
  lang: 'hi' | 'en';
}

export const ClosingMemory: React.FC<ClosingMemoryProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#5A0010] text-[#2D1B10] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#780016] text-[#FFDF80] text-xs font-bold border border-[#D4AF37] shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
          <span>अविस्मरणीय पावन संस्मरण</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] leading-tight">
            {lang === 'hi' ? 'एक उत्सव समाप्त हुआ, लेकिन स्मृतियाँ हमेशा रहेंगी।' : 'A festival concluded, but the sacred memories will remain forever.'}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी, भोपाल के समस्त परिवारों, मातृशक्ति, बुजुर्गों व बच्चों की एकता और श्रद्धा को नमन।'
              : 'Our deepest gratitude to all the families, mothers, elders, and children of Mayur Homes Colony, Bhopal.'}
          </p>
        </div>

        {/* Closing Grand Idol Artwork Card */}
        <div className="max-w-md mx-auto shadow-2xl rounded-3xl overflow-hidden border-2 border-[#D4AF37]">
          <FestiveArtwork type="murti_darshan_real" className="scale-100" />
        </div>

        {/* Auspicious Chants */}
        <div className="pt-4 space-y-2">
          <div className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-wide drop-shadow-sm">
            गणपति बप्पा मोरया!
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-[#FF7722]">
            अगले बरस तू जल्दी आ!
          </div>
        </div>
      </div>
    </section>
  );
};
