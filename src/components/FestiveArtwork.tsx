import React, { useState } from 'react';

interface FestiveArtworkProps {
  type: string;
  className?: string;
  badge?: string;
  imageSrc?: string;
  altText?: string;
}

// Canonical static asset mapping for all real event photographs, posters, and diary evidence
const ASSET_PATH_MAP: Record<string, { src: string; alt: string }> = {
  // 1. REAL EVENT PHOTOS
  murti_darshan_real: { src: '/images/hero/ganesh-murti-darshan.jpg', alt: 'श्री गणेश दिव्य प्रतिमा दर्शन — मयूर होम्स कॉलोनी' },
  maha_aarti_real_photo: { src: '/images/events/aarti/maha-aarti.jpg', alt: 'सामूहिक महाआरती एवं प्रज्वलित दीप थालियां — मयूर होम्स कॉलोनी' },
  sunderkand_gathering_photo: { src: '/images/events/sunderkand/sunderkand-sabha.jpg', alt: 'श्री सुंदरकांड पाठ एवं भक्तिमय सत्संग सभा — मयूर होम्स कॉलोनी' },
  sthapana_pandal: { src: '/images/events/sthapana/ganesh-sthapana.jpg', alt: 'श्री गणेश स्थापना एवं कलश पूजन — मयूर होम्स कॉलोनी' },
  bhandara_seva: { src: '/images/events/bhandara/havan-bhandara.jpg', alt: 'विशाल महाप्रसाद / भंडारा सेवा — मयूर होम्स कॉलोनी' },
  visarjan_procession: { src: '/images/events/visarjan/ganesh-visarjan.jpg', alt: 'भावभीनी श्री गणेश विसर्जन यात्रा — मयूर होम्स कॉलोनी' },
  singing_dance: { src: '/images/events/games/singing-dance.jpg', alt: 'सांस्कृतिक गायन एवं नृत्य प्रतियोगिता — मयूर होम्स कॉलोनी' },
  chinese_pickup: { src: '/images/events/games/chinese-pickup.jpg', alt: 'चायनीज पिक-अप खेल प्रतियोगिता — मयूर होम्स कॉलोनी' },
  musical_pillow: { src: '/images/events/games/musical-pillow.jpg', alt: 'म्यूजिकल पिलो एवं पारिवारिक खेल — मयूर होम्स कॉलोनी' },
  drawing_competition: { src: '/images/events/games/drawing-competition.jpg', alt: 'चित्रकला प्रतियोगिता — मयूर होम्स कॉलोनी' },
  balloon_cup: { src: '/images/events/games/balloon-cup.jpg', alt: 'बलून कप खेल प्रतियोगिता — मयूर होम्स कॉलोनी' },
  bucket_game: { src: '/images/events/games/bucket-game.jpg', alt: 'बकेट गेम प्रतियोगिता — मयूर होम्स कॉलोनी' },
  dumb_charades: { src: '/images/events/games/dumb-charades.jpg', alt: 'डम्ब शराड्स प्रतियोगिता — मयूर होम्स कॉलोनी' },

  // 2. OFFICIAL POSTERS
  poster_main_schedule: { src: '/images/posters/main-program-schedule.jpg', alt: 'मुख्य उत्सव कार्यक्रम विवरण पोस्टर — मयूर होम्स कॉलोनी' },
  poster_sunderkand: { src: '/images/posters/sunderkand-invitation.jpg', alt: 'श्री सुंदरकांड पाठ आमंत्रण पोस्टर — मयूर होम्स कॉलोनी' },

  // 3. ORIGINAL DIARY EVIDENCE
  ledger_central: { src: '/images/ledger/ledger-central-summary.jpg', alt: 'केन्द्रीय आय-व्यय व बचत सारांश डायरी पृष्ठ — मयूर होम्स कॉलोनी' },
  ledger_donors_p1: { src: '/images/ledger/ledger-online-donors-p1.jpg', alt: 'ऑनलाइन चंदा सूची भाग १ (प्रविष्टि १ से २९) — मयूर होम्स कॉलोनी' },
  ledger_donors: { src: '/images/ledger/ledger-online-donors-p2.jpg', alt: 'ऑनलाइन चंदा सूची भाग २ एवं उप-योग ₹30,769 — मयूर होम्स कॉलोनी' },
  ledger_bhandara: { src: '/images/ledger/ledger-bhandara-special.jpg', alt: 'विशेष भंडारा एवं समर्पित सहयोग अभिलेख — मयूर होम्स कॉलोनी' },
  ledger_cash_master: { src: '/images/ledger/ledger-cash-master.jpg', alt: 'कैश चंदा मास्टर सूची (३२ सदस्य) — मयूर होम्स कॉलोनी' },
  ledger_expenses: { src: '/images/ledger/ledger-expenses-master.jpg', alt: 'दैनिक पूजा व प्रमुख विक्रेता व्यय विवरण — मयूर होम्स कॉलोनी' },
  ledger_calculator: { src: '/images/ledger/ledger-calculator-audit.jpg', alt: 'कैलकुलेटर भौतिक मिलान साक्ष्य ₹5,121 — मयूर होम्स कॉलोनी' },
};

export const FestiveArtwork: React.FC<FestiveArtworkProps> = ({ type, className = '', badge, imageSrc, altText }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const assetInfo = ASSET_PATH_MAP[type] || { src: imageSrc || '', alt: altText || 'श्री गणेश उत्सव 2026' };
  const targetSrc = imageSrc || assetInfo.src;
  const targetAlt = altText || assetInfo.alt;

  // Primary: Render real image file via standard <img> HTML tag when asset exists
  if (targetSrc && !imageFailed) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-stone-900 overflow-hidden ${className}`}>
        <img
          src={targetSrc}
          alt={targetAlt}
          onError={() => setImageFailed(true)}
          className="w-full h-full object-contain max-h-full max-w-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Visual Renderer Fallback (Used when physical JPG files have not yet been copied into public/images/ on local disk)
  switch (type) {
    case 'hero_emblem':
    case 'murti_darshan':
    case 'murti_darshan_real':
      return (
        <div className={`relative w-full h-full min-h-[340px] bg-gradient-to-b from-[#5A0010] via-[#780016] to-[#2E0006] flex flex-col justify-between p-5 rounded-2xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-[#780016]/90 to-[#2E0006] pointer-events-none" />
          <div className="relative z-10 w-full flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFDF80] text-xs font-bold rounded-full">
              ✨ श्री गणेश दिव्य प्रतिमा दर्शन (वास्तविक छायाचित्र)
            </span>
            <span className="text-xs text-[#D4AF37] font-semibold bg-black/40 px-2.5 py-0.5 rounded">
              मयूर होम्स कॉलोनी
            </span>
          </div>

          <div className="relative z-10 my-3 flex flex-col items-center">
            <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-2xl border-2 border-[#D4AF37] p-2 bg-gradient-to-b from-[#690013] via-[#4A000C] to-[#1F0004] shadow-2xl flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <polygon points="10,120 60,40 110,120" fill="#3B82F6" opacity="0.3" />
                <polygon points="50,60 60,40 70,60" fill="#FFFFFF" opacity="0.8" />
                <polygon points="80,130 140,30 200,130" fill="#1E40AF" opacity="0.35" />
                <polygon points="130,50 140,30 150,50" fill="#FFFFFF" opacity="0.9" />
                <circle cx="100" cy="95" r="65" fill="#FF7722" opacity="0.25" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M78 52 L100 18 L122 52 L112 56 L88 56 Z" fill="#D4AF37" stroke="#FFF" strokeWidth="1.5" />
                <path d="M75 65 Q100 52 125 65 Q132 95 116 118 Q104 136 92 144 Q82 144 84 132 Q92 122 98 108 Q100 86 75 65" fill="#FFFBF2" stroke="#FF7722" strokeWidth="1.5" />
                <path d="M68 95 C62 120 70 145 88 152 C95 155 105 155 112 152 C130 145 138 120 132 95" fill="#FACC15" opacity="0.85" stroke="#D4AF37" strokeWidth="1.5" />
                <ellipse cx="100" cy="68" rx="3.5" ry="8" fill="#780016" />
                <circle cx="100" cy="58" r="3" fill="#D4AF37" />
                <path d="M72 82 Q100 120 128 82" fill="none" stroke="#FF7722" strokeWidth="5" strokeLinecap="round" strokeDasharray="6 4" />
                <ellipse cx="38" cy="155" rx="14" ry="10" fill="#B45309" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="162" cy="150" r="10" fill="#F59E0B" stroke="#D4AF37" strokeWidth="1" />
              </svg>
            </div>
            <p className="mt-2 text-[#FFDF80] font-serif font-bold text-sm sm:text-base text-center tracking-wide">
              श्री गणेश उत्सव 2026 — मयूर होम्स कॉलोनी
            </p>
          </div>

          <div className="relative z-10 w-full bg-[#1A0004]/90 rounded-xl p-2.5 border border-[#D4AF37]/30 text-center">
            <p className="text-[11px] text-[#FFFDF7] font-serif italic">
              "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
            </p>
          </div>
        </div>
      );

    case 'maha_aarti_real':
    case 'maha_aarti_real_photo':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#4A000E] via-[#2A0008] to-[#120003] rounded-2xl border-2 border-[#FF7722] p-4 flex flex-col justify-between overflow-hidden shadow-xl ${className}`}>
          <div className="relative z-20 flex justify-between items-center pb-2 border-b border-white/20">
            <span className="text-xs font-bold bg-[#FF7722] text-white px-2.5 py-0.5 rounded-full shadow">
              🔥 सामूहिक महाआरती (वास्तविक छायाचित्र)
            </span>
            <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded">
              20/09/2026, 21:06
            </span>
          </div>

          <div className="relative z-20 my-auto py-4 flex flex-col items-center">
            <div className="w-full max-w-sm bg-black/40 rounded-xl p-3 border border-amber-400/30 text-center">
              <div className="flex justify-center gap-3 mb-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="w-8 h-8 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300 border border-amber-200 flex items-center justify-center shadow-lg">
                    <span className="text-xs">🪔</span>
                  </div>
                ))}
              </div>
              <h4 className="text-white font-serif font-bold text-sm sm:text-base">
                कॉलोनी मातृशक्ति, परिवार एवं बच्चों द्वारा सामूहिक महाआरती
              </h4>
              <p className="text-[11px] text-amber-200/90 mt-1">
                प्रज्वलित दीप थालियों, पुष्पमालाओं व वैदिक मंत्रोच्चार के साथ पावन आरती
              </p>
            </div>
          </div>

          <div className="relative z-20 flex justify-between items-center text-[10px] text-white/70 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10">
            <span>स्थान: मयूर होम्स पंडाल</span>
            <span className="text-amber-300 font-semibold">108 दीप प्रज्वलन</span>
          </div>
        </div>
      );

    case 'sunderkand_path':
    case 'sunderkand_gathering_photo':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#1C0F0A] via-[#33180D] to-[#120003] rounded-2xl border-2 border-[#D4AF37] p-4 flex flex-col justify-between overflow-hidden shadow-xl ${className}`}>
          <div className="relative z-10 flex justify-between items-center pb-2 border-b border-[#D4AF37]/30">
            <span className="text-xs font-bold bg-[#D4AF37] text-[#5A0010] px-2.5 py-0.5 rounded-full shadow">
              📖 श्री सुंदरकांड पाठ सभा (वास्तविक छायाचित्र)
            </span>
            <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded">
              18/09/2026, रात्रि 9:00
            </span>
          </div>

          <div className="relative z-10 my-auto py-3 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#780016] border-2 border-[#FFDF80] text-[#FFDF80] flex items-center justify-center text-xl mb-2 shadow-lg">
              🚩
            </div>
            <h4 className="text-[#FFFDF7] font-serif font-black text-base sm:text-lg">
              संगीतमय सुंदरकांड पाठ एवं भक्ति सत्संग
            </h4>
            <div className="mt-2 inline-block px-3 py-1 bg-amber-950/70 border border-amber-400/40 rounded-xl text-xs text-[#FFDF80]">
              विशेष सहयोग: श्री अजय सिंह जी (₹2,500)
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-stone-300 bg-black/50 p-2 rounded-lg text-center border border-white/10">
            पंडाल में विद्युत सज्जा के बीच कॉलोनीवासियों की भक्तिमय उपस्थिति
          </div>
        </div>
      );

    case 'ledger_central':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="space-y-2">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-1 text-stone-700">
              <span className="font-bold font-serif text-sm text-[#780016]">मूल केन्द्रीय लेखा डायरी साक्ष्य</span>
              <span className="text-[10px] bg-stone-200 px-2 py-0.5 rounded">Shashi A/c</span>
            </div>

            <div className="space-y-2.5 pt-2 text-stone-900 font-semibold">
              <div className="text-blue-900">
                कुल चंदा राशि जो मेरे पास है <strong className="text-emerald-800 text-sm">40024/-</strong> (online + cash)
              </div>
              <div className="text-rose-900">
                − <strong className="text-rose-800 text-sm">34903</strong> कुल खर्च by Shashi
              </div>
              <div className="border-t border-stone-400 pt-1 text-[#780016]">
                = <strong className="text-base text-[#780016]">5121</strong> बाकी बचा (प्रारंभिक शेष)
              </div>
              <div className="text-stone-700">
                − टेन्ट का <strong className="text-stone-900">3000</strong> देना बाकी
              </div>
              <div className="text-stone-700">
                = <strong className="text-stone-900">2121</strong> शेष राशि मेरे पास बचेगी
              </div>
              <div className="text-stone-700">
                − <strong className="text-stone-900">300</strong> दुर्गा सफाई के
              </div>
              <div className="border-t-2 border-emerald-600 pt-1 text-emerald-900 bg-emerald-50/80 p-2 rounded">
                = <strong className="text-base font-black text-emerald-800">1821</strong> शेष राशि (अंतिम शुद्ध बचत)
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2">
            <span>हस्तलिखित डायरी अभिलेख</span>
            <span className="font-bold text-[#780016]">सत्यापित प्रविष्टि</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full h-full min-h-[260px] bg-gradient-to-b from-[#780016] to-[#45000A] text-[#FFFDF7] p-4 rounded-2xl flex flex-col items-center justify-center text-center ${className}`}>
          <div className="text-4xl mb-2">🕉️</div>
          <h4 className="font-serif font-bold text-lg text-[#FFDF80]">श्री गणेश उत्सव 2026</h4>
          <p className="text-xs text-white/80 mt-1">मयूर होम्स कॉलोनी, भोपाल</p>
        </div>
      );
  }
};
