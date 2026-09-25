import React from 'react';
import { PhoneCall, AlertCircle, Heart, ArrowUp, ShieldCheck, Sparkles } from 'lucide-react';

interface NoticeAndFooterProps {
  lang: 'hi' | 'en';
}

export const NoticeAndFooter: React.FC<NoticeAndFooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* REQUIRED VERIFICATION NOTICE SECTION */}
      <section className="bg-gradient-to-b from-[#FFFDF7] to-amber-50/70 py-12 px-4 sm:px-6 lg:px-8 border-t border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100/90 via-[#FFF8E7] to-amber-100/90 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-lg text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#780016] text-[#FFDF80] flex items-center justify-center mx-auto shadow-md">
              <PhoneCall className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#780016]">
              {lang === 'hi' ? 'महत्वपूर्ण सूचना एवं लेखा सत्यापन' : 'Important Notice & Verification Assistance'}
            </h3>

            {/* Exact Required Hindi Text */}
            <p className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-relaxed max-w-2xl mx-auto bg-white/80 p-4 rounded-2xl border border-amber-300 shadow-sm">
              "हिसाब अथवा नाम से संबंधित किसी भी प्रकार की जानकारी में कोई समस्या, त्रुटि या सुधार हो, तो कृपया शशि आर्या जी, गुड्डू राय जी, श्रीवास्तव जी अथवा आयोजक से सीधे संपर्क करें।"
            </p>

            <p className="text-xs text-stone-600 font-sans">
              {lang === 'hi'
                ? 'यह पोर्टल पूर्ण पारदर्शिता और सौहार्द हेतु निर्मित है। किसी भी प्रविष्टि के मिलान हेतु समिति सदैव तत्पर है।'
                : 'For any clarification regarding donations, entries, or accounting figures, please connect directly with the designated organizing committee members.'}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#5A0010] via-[#780016] to-[#38000A] text-[#FFFDF7] pt-14 pb-10 border-t-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#D4AF37]/30 text-center md:text-left">
            {/* Colony Brand & Motto */}
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#5A0010] flex items-center justify-center font-bold text-base shadow-md">
                  ॐ
                </div>
                <div>
                  <h4 className="text-xl font-serif font-black text-white">
                    {lang === 'hi' ? 'श्री गणेश उत्सव 2026' : 'Shree Ganesh Utsav 2026'}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-semibold tracking-wider">
                    {lang === 'hi' ? 'मयूर होम्स कॉलोनी, भोपाल' : 'Mayur Homes Colony, Bhopal'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#FFFDF7]/80 max-w-sm">
                {lang === 'hi'
                  ? 'सामूहिक श्रद्धा, सौहार्द और पूर्ण वित्तीय पारदर्शिता का डिजिटल संस्मरण पोर्टल।'
                  : 'Official community archive and financial transparency record portal.'}
              </p>
            </div>

            {/* Auspicious Chants */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-black text-[#FFDF80] tracking-wide animate-pulse">
                गणपति बप्पा मोरया!
              </div>
              <div className="text-sm font-serif text-[#FFA07A] mt-1">
                अगले बरस तू जल्दी आ!
              </div>
            </div>

            {/* Scroll to Top */}
            <div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 text-xs font-bold text-[#FFDF80] transition-all hover:scale-105"
              >
                <ArrowUp className="w-4 h-4" />
                <span>{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
              </button>
            </div>
          </div>

          {/* Prominent Designer & Developer Credit */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF7]/70">
            <div className="text-center sm:text-left">
              <span>© 2026 मयूर होम्स कॉलोनी, भोपाल | सर्वाधिकार सुरक्षित</span>
            </div>

            {/* Prominent exact developer credit */}
            <div className="px-4 py-2 rounded-xl bg-black/40 border border-[#D4AF37]/50 shadow-inner text-center">
              <span className="text-xs text-[#FFFDF7]/90 font-medium">
                Designed &amp; Developed by{' '}
                <span className="font-bold text-[#FFDF80] text-sm underline decoration-[#FF7722] underline-offset-4">
                  Vimal Singh
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
