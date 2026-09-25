import React, { useState, useEffect } from 'react';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, elegant 1.1s total entrance
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 750);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 1150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#5A0010] text-[#FFFDF7] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-400 ${
        fading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center space-y-4">
        {/* Sacred Glowing Om & Diya Mark */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF7722] via-[#D4AF37] to-[#FFFDF7] p-1 shadow-[0_0_50px_rgba(255,119,34,0.6)] animate-pulse flex items-center justify-center">
          <div className="w-full h-full bg-[#780016] rounded-full flex items-center justify-center text-3xl font-bold text-[#FFDF80]">
            ॐ
          </div>
        </div>

        {/* Auspicious Chants Entrance */}
        <div className="space-y-1 animate-in fade-in zoom-in duration-300">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#FFDF80] tracking-wide drop-shadow-lg">
            गणपति बप्पा मोरया
          </h2>
          <p className="text-xs sm:text-sm text-[#D4AF37] font-serif tracking-widest uppercase">
            श्री गणेश उत्सव 2026 • मयूर होम्स
          </p>
        </div>
      </div>
    </div>
  );
};
