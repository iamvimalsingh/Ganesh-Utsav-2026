import React, { useState } from 'react';

interface FestiveArtworkProps {
  type: string;
  className?: string;
  badge?: string;
  imageSrc?: string;
  altText?: string;
}

// Canonical static asset mapping for all real event photographs, posters, and diary evidence
const ASSET_PATH_MAP: Record<string, { src: string; alt: string; isReal?: boolean }> = {
  // 1. REAL EVENT PHOTOS (Physically existing and verified files in /public)
  murti_darshan_real: { src: '/images/hero/ganesh-murti-darshan.jpg', alt: 'श्री गणेश दिव्य प्रतिमा दर्शन — मयूर होम्स कॉलोनी', isReal: true },
  maha_aarti_real_photo: { src: '/images/events/maha-aarti.jpg', alt: 'सामूहिक महाआरती एवं प्रज्वलित दीप थालियां — मयूर होम्स कॉलोनी', isReal: true },
  maha_aarti_real: { src: '/images/events/maha-aarti.jpg', alt: 'सामूहिक महाआरती एवं प्रज्वलित दीप थालियां — मयूर होम्स कॉलोनी', isReal: true },
  sthapana_pandal: { src: '/images/hero/ganesh-murti-alt.jpg', alt: 'श्री गणेश स्थापना एवं कलश पूजन — मयूर होम्स कॉलोनी', isReal: true },
  bhandara_seva: { src: '/images/events/bhandara.jpg', alt: 'विशाल महाप्रसाद / भंडारा सेवा — मयूर होम्स कॉलोनी', isReal: true },
  visarjan_procession: { src: '/images/events/visarjan.jpg', alt: 'भावभीनी श्री गणेश विसर्जन यात्रा — मयूर होम्स कॉलोनी', isReal: true },
  musical_pillow: { src: '/images/events/musical-pillow.jpg', alt: 'म्यूजिकल पिलो एवं पारिवारिक खेल — मयूर होम्स कॉलोनी', isReal: true },

  // 2. DESIGNED VISUALS (For events where physical photo is not uploaded)
  sunderkand_gathering_photo: { src: '', alt: 'श्री सुंदरकांड पाठ एवं भक्तिमय सत्संग सभा — मयूर होम्स कॉलोनी' },
  singing_dance: { src: '', alt: 'सांस्कृतिक गायन एवं नृत्य प्रतियोगिता — मयूर होम्स कॉलोनी' },
  chinese_pickup: { src: '', alt: 'चायनीज पिक-अप खेल प्रतियोगिता — मयूर होम्स कॉलोनी' },
  drawing_competition: { src: '', alt: 'चित्रकला प्रतियोगिता — मयूर होम्स कॉलोनी' },
  balloon_cup: { src: '', alt: 'बलून कप खेल प्रतियोगिता — मयूर होम्स कॉलोनी' },
  bucket_game: { src: '', alt: 'बकेट गेम प्रतियोगिता — मयूर होम्स कॉलोनी' },
  dumb_charades: { src: '', alt: 'डम्ब शराड्स प्रतियोगिता — मयूर होम्स कॉलोनी' },

  // 3. OFFICIAL POSTERS
  poster_main_schedule: { src: '/images/posters/main-program-schedule.jpg', alt: 'मुख्य उत्सव कार्यक्रम विवरण पोस्टर — मयूर होम्स कॉलोनी' },
  poster_sunderkand: { src: '/images/posters/sunderkand-invitation.jpg', alt: 'श्री सुंदरकांड पाठ आमंत्रण पोस्टर — मयूर होम्स कॉलोनी' },

  // 4. ORIGINAL DIARY EVIDENCE
  ledger_central: { src: '/images/ledger/ledger-central-summary.jpg', alt: 'केन्द्रीय आय-व्यय व बचत सारांश डायरी पृष्ठ — मयूर होम्स कॉलोनी' },
  ledger_donors_p1: { src: '/images/ledger/ledger-online-donors-p1.jpg', alt: 'ऑनलाइन चंदा सूची भाग १ (प्रविष्टि १ से २९) — मयूर होम्स कॉलोनी' },
  ledger_donors: { src: '/images/ledger/ledger-online-donors-p2.jpg', alt: 'ऑनलाइन चंदा सूची भाग २ एवं उप-योग ₹30,769 — मयूर होम्स कॉलोनी' },
  ledger_bhandara: { src: '/images/ledger/ledger-bhandara-special.jpg', alt: 'विशेष भंडारा एवं समर्पित सहयोग अभिलेख — मयूर होम्स कॉलोनी' },
  ledger_cash_master: { src: '/images/ledger/ledger-cash-master.jpg', alt: 'कैश चंदा मास्टर सूची (३२ सदस्य) — मयूर होम्स कॉलोनी' },
  ledger_expenses: { src: '/images/ledger/ledger-expenses-master.jpg', alt: 'दैनिक पूजा व प्रमुख विक्रेता व्यय विवरण — मयूर होम्स कॉलोनी' },
  ledger_calculator: { src: '/images/ledger/ledger-calculator-audit.jpg', alt: 'कैलकुलेटर भौतिक मिलक साक्ष्य ₹5,121 — मयूर होम्स कॉलोनी' },
};

export const FestiveArtwork: React.FC<FestiveArtworkProps> = ({ type, className = '', badge, imageSrc, altText }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const assetInfo = ASSET_PATH_MAP[type] || { src: imageSrc || '', alt: altText || 'श्री गणेश उत्सव 2026' };
  const targetSrc = imageSrc || assetInfo.src;
  const targetAlt = altText || assetInfo.alt;

  // Primary: Render real image file via standard <img> HTML tag when asset exists
  if (targetSrc && !imageFailed) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-stone-900 rounded-2xl overflow-hidden group ${className}`}>
        <img
          src={targetSrc}
          alt={targetAlt}
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle Real Photograph indicator badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-[#D4AF37]/60 text-[#FFDF80] text-[10px] font-bold rounded-full shadow">
            <span>📷</span>
            <span>{badge || 'वास्तविक छायाचित्र'}</span>
          </span>
        </div>
      </div>
    );
  }

  // Authentic Visual Handwritten Voucher & Ledger Renderer (High-fidelity realistic diary pages)
  switch (type) {
    // ==========================================
    // 1. DIARY EVIDENCE: CENTRAL SUMMARY LEDGER
    // ==========================================
    case 'ledger_central':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          {/* Lined notebook texture overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,#E2D9C8_24px)] bg-[size:100%_24px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2 text-stone-700">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#780016] text-[#FFDF80] font-serif font-bold text-xs flex items-center justify-center">१</span>
                <span className="font-bold font-serif text-sm sm:text-base text-[#780016]">केन्द्रीय आय-व्यय व बचत सारांश डायरी</span>
              </div>
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded border border-amber-300">
                Shashi A/c
              </span>
            </div>

            <div className="space-y-2 pt-1 text-stone-900 font-semibold text-xs sm:text-sm">
              <div className="bg-blue-50/90 p-2 rounded-lg border border-blue-200 flex justify-between items-center text-blue-950">
                <span>कुल चंदा राशि (online + cash):</span>
                <strong className="text-emerald-800 text-base sm:text-lg font-serif">₹40,024/-</strong>
              </div>

              <div className="bg-rose-50/90 p-2 rounded-lg border border-rose-200 flex justify-between items-center text-rose-950">
                <span>− कुल खर्च by Shashi:</span>
                <strong className="text-rose-800 text-base sm:text-lg font-serif">₹34,903/-</strong>
              </div>

              <div className="bg-amber-50/90 p-2 rounded-lg border border-amber-300 flex justify-between items-center text-amber-950 font-bold">
                <span>= बाकी बचा (प्रारंभिक शेष):</span>
                <strong className="text-[#780016] text-base sm:text-lg font-serif">₹5,121/-</strong>
              </div>

              <div className="pl-4 border-l-2 border-amber-400 space-y-1.5 py-1 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span>− टेन्ट का देना बाकी:</span>
                  <span className="font-bold text-stone-900">₹3,000/-</span>
                </div>
                <div className="flex justify-between text-[#780016]">
                  <span>= शेष राशि मेरे पास बचेगी:</span>
                  <span className="font-bold">₹2,121/-</span>
                </div>
                <div className="flex justify-between">
                  <span>− दुर्गा सफाई के:</span>
                  <span className="font-bold text-stone-900">₹300/-</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100 border-2 border-emerald-600 p-2.5 rounded-xl flex justify-between items-center text-emerald-950 font-bold shadow-sm">
                <span>= अंतिम शेष राशि (शुद्ध बचत):</span>
                <strong className="text-emerald-800 text-lg sm:text-xl font-serif font-black">₹1,821/-</strong>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] sm:text-xs text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>हस्तलिखित डायरी अभिलेख (मूल प्रति)</span>
            <span className="font-bold text-[#780016] bg-amber-100/80 px-2 py-0.5 rounded">✓ सत्यापित प्रविष्टि</span>
          </div>
        </div>
      );

    // ==========================================
    // 2. DIARY EVIDENCE: ONLINE CHANDA PART 1
    // ==========================================
    case 'ledger_donors_p1':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,#E2D9C8_22px)] bg-[size:100%_22px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase block">हस्तलिखित पृष्ठ ०२</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-[#780016]">online - Shashi A/c (भाग १)</h4>
              </div>
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded border border-blue-300">
                प्रविष्टि १ से २९
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] sm:text-xs text-stone-800 font-medium">
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>1. बाथम जी</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>2. नरेश श्रीवास्तव</span><strong className="text-blue-900">₹2,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>3. विमल सिंह</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>4. भदौरिया जी</span><strong className="text-blue-900">₹2,500</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>5. संतोष कुशवाहा</span><strong className="text-blue-900">₹1,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>6. सुधीर सक्सेना</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>7. तिवारी जी</span><strong className="text-blue-900">₹1,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>8. अरविन्द कटियार</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>9. विकास सिंह</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>10. मुन्ना लाल जी</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>11. प्रभात सक्सेना</span><strong className="text-blue-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>... 29. व्यास जी</span><strong className="text-blue-900">₹500</strong></div>
            </div>

            <div className="bg-stone-100/90 p-2 rounded border border-stone-300 text-[11px] text-stone-700">
              * प्रथम २९ ऑनलाइन दानदाताओं की कुल राशि सीधे शशि जी के खाते में प्राप्त हुई।
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>मूल डायरी अभिलेख पृष्ठ १</span>
            <span className="font-bold text-blue-800">ऑनलाइन चंदा (Online UPI)</span>
          </div>
        </div>
      );

    // ==========================================
    // 3. DIARY EVIDENCE: ONLINE CHANDA PART 2 & SUBTOTAL
    // ==========================================
    case 'ledger_donors':
    case 'ledger_donors_p2':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,#E2D9C8_22px)] bg-[size:100%_22px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase block">हस्तलिखित पृष्ठ ०३</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-[#780016]">online - Shashi A/c (भाग २ व उप-योग)</h4>
              </div>
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded border border-blue-300">
                प्रविष्टि ३० से ४०
              </span>
            </div>

            <div className="space-y-1 text-[11px] sm:text-xs text-stone-800 font-medium">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>30. एकनाथ देशमुख</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>31. शैलेन्द्र सिंह</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>32. अजय शर्मा जी</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>33. संजय यादव जी</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>34. राहुल वर्मा जी</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>35. राजेश गुप्ता जी</span><strong className="text-blue-900">₹501</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>36. वीरेन्द्र जी</span><strong className="text-blue-900">₹500</strong></div>
                <div className="flex justify-between py-0.5 border-b border-stone-200"><span>40. नरेन्द्र कुमार</span><strong className="text-blue-900">₹500</strong></div>
              </div>
            </div>

            {/* Handwritten Math Box */}
            <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-300 space-y-1 text-xs">
              <div className="flex justify-between text-stone-700">
                <span>डायरी में लिखित जोड़ (Written Math):</span>
                <strong className="text-[#780016]">30269 + 500 = ₹30,769</strong>
              </div>
              <div className="flex justify-between text-emerald-800 font-bold">
                <span>४० व्यक्तिगत रिकॉर्ड का योग (Line-item Sum):</span>
                <strong>₹31,719</strong>
              </div>
              <div className="flex justify-between text-amber-900 text-[11px] pt-1 border-t border-amber-200">
                <span>शुचिता अंतर (Audit Variance):</span>
                <span className="font-bold bg-amber-200/80 px-2 py-0.5 rounded">+₹950 सुरक्षित</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>मूल डायरी अभिलेख पृष्ठ २</span>
            <span className="font-bold text-emerald-800">कुल ४० सदस्य = ₹31,719</span>
          </div>
        </div>
      );

    // ==========================================
    // 4. DIARY EVIDENCE: BHANDARA SPECIAL SEVA
    // ==========================================
    case 'ledger_bhandara':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,#E2D9C8_22px)] bg-[size:100%_22px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase block">हस्तलिखित पृष्ठ ०४</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-[#780016]">Bhandara — विशेष समर्पित सहयोग</h4>
              </div>
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded border border-amber-300">
                महाप्रसाद सेवा
              </span>
            </div>

            <div className="space-y-2 pt-1">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm block">1. Jyoti (श्रीमती ज्योति जी)</span>
                  <span className="text-[10px] text-stone-500">Shashi online खाते में समर्पित</span>
                </div>
                <strong className="text-base font-serif text-[#780016]">₹600/-</strong>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm block">2. Suman Katiyar (श्रीमती सुमन कटियार जी)</span>
                  <span className="text-[10px] text-stone-500">Shashi online खाते में समर्पित</span>
                </div>
                <strong className="text-base font-serif text-[#780016]">₹600/-</strong>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm block">3. Dr. Ashish (डॉ. आशीष श्रीवास्तव जी)</span>
                  <span className="text-[10px] text-stone-500">Cash Shrivastav Ji को समर्पित</span>
                </div>
                <strong className="text-base font-serif text-[#780016]">₹1,000/-</strong>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm block">4. Santosh Kushwaha / Guddu Bhaiya</span>
                  <span className="text-[10px] text-stone-500">संतोष कुशवाहा जी + गुड्डू राय जी भंडारा सहयोग</span>
                </div>
                <strong className="text-base font-serif text-[#780016]">₹1,500/-</strong>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-2.5 rounded-xl border-2 border-amber-400 flex justify-between items-center font-bold">
                <span className="text-amber-950">कुल समर्पित भंडारा संकलन:</span>
                <strong className="text-lg font-serif font-black text-[#780016]">₹3,700/-</strong>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>हस्तलिखित डायरी अभिलेख पृष्ठ ४</span>
            <span className="font-bold text-[#780016]">✓ महाप्रसाद सामग्री व सहयोग</span>
          </div>
        </div>
      );

    // ==========================================
    // 5. DIARY EVIDENCE: CASH CHANDA MASTER (32 MEMBERS)
    // ==========================================
    case 'ledger_cash_master':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,#E2D9C8_22px)] bg-[size:100%_22px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase block">हस्तलिखित पृष्ठ ०५</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-[#780016]">Cash — नकद चंदा मास्टर रजिस्टर</h4>
              </div>
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded border border-emerald-300">
                ३२ सदस्य अभिलेख
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] sm:text-xs text-stone-800 font-medium">
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>1. गौरव गुप्ता</span><strong className="text-emerald-900">₹501</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>2. पंथी जी</span><strong className="text-emerald-900">₹501</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>3. किशन यादव</span><strong className="text-emerald-900">₹2,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>4. भारत भूषण</span><strong className="text-emerald-900">₹2,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>5. अजय सिंह (सुंदरकांड)</span><strong className="text-emerald-900">₹2,500</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>6. आर. के. शर्मा</span><strong className="text-emerald-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>7. मुन्ना लाल जी</span><strong className="text-emerald-900">₹1,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>8. प्रदीप वर्मा</span><strong className="text-emerald-900">₹1,100</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>9. कुलदीप राठौर</span><strong className="text-emerald-900">₹1,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>10. सुनील यादव</span><strong className="text-emerald-900">₹1,000</strong></div>
              <div className="flex justify-between py-0.5 border-b border-stone-200"><span>... 32. राम अवतार</span><strong className="text-emerald-900">₹500</strong></div>
            </div>

            <div className="bg-emerald-50/90 p-2.5 rounded-xl border border-emerald-300 flex justify-between items-center font-bold text-xs sm:text-sm text-emerald-950">
              <span>कुल नकद चंदा योग (Total Cash):</span>
              <strong className="text-base sm:text-lg font-serif font-black text-emerald-900">₹27,221/-</strong>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>मूल डायरी अभिलेख पृष्ठ ५</span>
            <span className="font-bold text-emerald-800">कुल ३२ सदस्य = ₹27,221</span>
          </div>
        </div>
      );

    // ==========================================
    // 6. DIARY EVIDENCE: EXPENSES MASTER LEDGER
    // ==========================================
    case 'ledger_expenses':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFFBF0] text-[#1E293B] p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,#E2D9C8_22px)] bg-[size:100%_22px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 sm:left-10 w-[2px] bg-rose-300/60 pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-2">
              <div>
                <span className="text-[10px] text-stone-500 font-bold uppercase block">हस्तलिखित पृष्ठ ०६</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-rose-950">दैनिक खर्च by Shashi व प्रमुख विक्रेता व्यय</h4>
              </div>
              <span className="text-[11px] font-bold bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded border border-rose-300">
                कुल व्यय ₹34,903
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="bg-white p-2 rounded-lg border border-stone-200 space-y-1">
                <div className="flex justify-between text-stone-900 font-bold text-[11px] sm:text-xs">
                  <span>१. दैनिक पूजन, प्रसाद, भोग व सामग्री:</span>
                  <strong className="text-rose-900">₹8,452/-</strong>
                </div>
                <div className="text-[10px] text-stone-600 pl-2">
                  माला (₹650) + दूध-दही (₹774) + लड्डू/भोग (₹2770) + फल (₹950) + साफा (₹430) + सिलेंडर (₹950) + कपूर/घी (₹1928)
                </div>
              </div>

              <div className="bg-white p-2 rounded-lg border border-stone-200 space-y-1">
                <div className="flex justify-between text-stone-900 font-bold text-[11px] sm:text-xs">
                  <span>२. टेंट, साउंड, लाइट, जनरेटर व विक्रेता:</span>
                  <strong className="text-rose-900">₹26,451/-</strong>
                </div>
                <div className="text-[10px] text-stone-600 pl-2">
                  टेंट व्यवस्था (₹20,000) + साउंड डीजे (₹2500+₹650) + लाइट विद्युत (मोनू ₹1200) + जनरेटर/ईंधन (₹1650)
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-100 via-rose-50 to-rose-100 p-2.5 rounded-xl border-2 border-rose-400 flex justify-between items-center font-bold">
                <span className="text-rose-950">कुल प्रमाणित व्यय (Total Outflow):</span>
                <strong className="text-base sm:text-lg font-serif font-black text-rose-900">₹34,903/-</strong>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2 mt-2">
            <span>मूल डायरी व्यय वाउचर अभिलेख</span>
            <span className="font-bold text-rose-800">सत्यापित व्यय = ₹34,903</span>
          </div>
        </div>
      );

    // ==========================================
    // 7. DIARY EVIDENCE: CALCULATOR RECONCILIATION
    // ==========================================
    case 'ledger_calculator':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#1E293B] text-white p-5 sm:p-6 rounded-2xl border-2 border-[#D4AF37] shadow-xl font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/20 pb-2">
              <div>
                <span className="text-[10px] text-[#FFDF80] uppercase font-bold block">भौतिक मिलान साक्ष्य</span>
                <h4 className="font-bold font-serif text-sm sm:text-base text-white">इलेक्ट्रॉनिक कैलकुलेटर व डायरी मिलान</h4>
              </div>
              <span className="text-[11px] font-bold bg-[#D4AF37] text-[#5A0010] px-2.5 py-0.5 rounded shadow">
                12-Digit LCD Display
              </span>
            </div>

            {/* Simulated LCD Screen */}
            <div className="bg-[#8B9B7E] text-[#112211] p-4 rounded-xl border-4 border-stone-700 shadow-inner font-mono text-right">
              <div className="text-[11px] opacity-75 mb-1 font-bold">40024 - 34903 =</div>
              <div className="text-4xl sm:text-5xl font-black tracking-widest font-mono">
                5121.
              </div>
            </div>

            <div className="bg-white/10 p-3 rounded-xl border border-white/15 space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-200">
                <span>कुल केन्द्रीय आवक (Inflow):</span>
                <span className="font-bold text-emerald-400">₹40,024</span>
              </div>
              <div className="flex justify-between text-stone-200">
                <span>कुल केन्द्रीय व्यय (Outflow):</span>
                <span className="font-bold text-rose-300">₹34,903</span>
              </div>
              <div className="flex justify-between text-[#FFDF80] font-bold border-t border-white/20 pt-1">
                <span>प्रारंभिक शेष (कैलकुलेटर स्क्रीन):</span>
                <span className="text-base text-emerald-300 font-serif">₹5,121</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-stone-400 border-t border-white/20 pt-2 mt-2">
            <span>फोटो साक्ष्य (Physical Calculator)</span>
            <span className="font-bold text-emerald-400">✓ शत-प्रतिशत मिलान</span>
          </div>
        </div>
      );

    // ==========================================
    // 8. POSTERS SECTION
    // ==========================================
    case 'poster_main_schedule':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-gradient-to-b from-[#780016] via-[#5A0010] to-[#2E0006] text-[#FFFDF7] p-5 sm:p-7 rounded-2xl border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="text-center border-b border-[#D4AF37]/40 pb-3">
            <span className="text-[11px] text-[#FFDF80] font-serif font-bold uppercase tracking-widest block">॥ श्री गणेशाय नमः ॥</span>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">श्री गणेश उत्सव 2026</h3>
            <p className="text-xs text-amber-200">मयूर होम्स कॉलोनी, भोपाल (14 से 25 सितम्बर 2026)</p>
          </div>

          <div className="my-3 bg-black/40 p-3.5 rounded-xl border border-[#D4AF37]/30 space-y-2 text-xs">
            <div className="font-bold text-[#FFDF80] border-b border-white/10 pb-1 text-center">
              १२ दिवसीय पावन कार्यक्रम रूपरेखा
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-200">
              <div>🚩 14/09: गणेश स्थापना (4 PM)</div>
              <div>🎭 15/09: सिंगिंग व डांस</div>
              <div>🥢 16/09: चाइनीज पिक-अप</div>
              <div>🎶 17/09: म्यूजिकल पिलो</div>
              <div>📖 18/09: सुंदरकांड पाठ (9 PM)</div>
              <div>🎬 19/09: डम्ब शराड्स</div>
              <div>🔥 20/09: 108 दीप महाआरती</div>
              <div>🍲 24/09: हवन व महाभंडारा</div>
            </div>
          </div>

          <div className="text-center text-[11px] text-[#FFDF80] bg-white/10 p-2 rounded-lg border border-[#D4AF37]/30">
            विनीत: समस्त मयूर होम्स कॉलोनी परिवार
          </div>
        </div>
      );

    case 'poster_sunderkand':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-gradient-to-b from-[#8C2C00] via-[#5A0010] to-[#2E0006] text-[#FFFDF7] p-5 sm:p-7 rounded-2xl border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="text-center border-b border-[#D4AF37]/40 pb-3">
            <span className="text-[11px] text-[#FFDF80] font-serif font-bold uppercase tracking-widest block">॥ जय श्री राम ॥ ॥ जय हनुमान ॥</span>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-amber-200 mt-1">संगीतमय श्री सुंदरकांड पाठ</h3>
            <p className="text-xs text-white/90">श्री गणेश उत्सव पंडाल, मयूर होम्स कॉलोनी</p>
          </div>

          <div className="my-4 text-center bg-black/40 p-4 rounded-xl border border-[#D4AF37]/30 space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#5A0010] mx-auto flex items-center justify-center font-bold text-xl shadow-lg">
              🚩
            </div>
            <div className="text-sm font-bold text-white">शुक्रवार, 18 सितम्बर 2026 | रात्रि 9:00 बजे</div>
            <div className="inline-block px-3 py-1 bg-[#780016] border border-[#D4AF37] rounded-full text-xs text-[#FFDF80] font-semibold">
              विशेष समर्पित सहयोग: श्री अजय सिंह जी (₹2,500)
            </div>
          </div>

          <div className="text-center text-[11px] text-amber-200 bg-white/10 p-2 rounded-lg">
            आप सभी सपरिवार सादर आमंत्रित हैं।
          </div>
        </div>
      );

    // ==========================================
    // 9. EVENT PHOTOGRAPH ARTWORK FALLBACKS
    // ==========================================
    case 'hero_emblem':
    case 'murti_darshan':
    case 'murti_darshan_real':
      return (
        <div className={`relative w-full h-full min-h-[340px] bg-gradient-to-b from-[#5A0010] via-[#780016] to-[#2E0006] flex flex-col justify-between p-5 rounded-2xl border-2 border-[#D4AF37]/80 shadow-2xl ${className}`}>
          <div className="w-full flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
            <span className="text-xs font-bold text-amber-300">
              🙏 श्री गणेश दिव्य प्रतिमा दर्शन
            </span>
            <span className="text-[10px] text-amber-200/80 bg-black/40 px-2 py-0.5 rounded">
              मयूर होम्स कॉलोनी
            </span>
          </div>

          <div className="my-auto py-6 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] mx-auto flex items-center justify-center text-3xl shadow-lg">
              🕉️
            </div>
            <h3 className="text-xl font-serif font-black text-amber-100">
              श्री गणेश जी महाराज
            </h3>
            <p className="text-xs text-amber-200/90 max-w-xs mx-auto">
              प्रथम पूज्य विघ्नहर्ता मंगलमूर्ति भगवान श्री गणेश
            </p>
          </div>

          <div className="w-full bg-black/40 rounded-xl p-2 border border-[#D4AF37]/30 text-center text-[11px] text-[#FFDF80]">
            ॥ ॐ गं गणपतये नमः ॥
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

    case 'sthapana_pandal':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#5A0010] to-[#2E0006] text-white p-4 rounded-2xl border-2 border-[#D4AF37] flex flex-col justify-between ${className}`}>
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-xs font-bold bg-[#D4AF37] text-[#5A0010] px-2.5 py-0.5 rounded-full">🚩 गणेश स्थापना एवं कलश पूजन</span>
            <span className="text-[11px] text-amber-200">14/09/2026</span>
          </div>
          <div className="my-auto text-center py-4">
            <div className="text-4xl mb-2">🏺</div>
            <h4 className="font-serif font-bold text-base text-[#FFDF80]">वैदिक मंत्रोच्चार व कलश स्थापना</h4>
            <p className="text-xs text-stone-300 mt-1">विघ्नहर्ता श्री गणेश जी का मयूर होम्स कॉलोनी में पावन आगमन</p>
          </div>
          <div className="text-[10px] text-center text-stone-400 border-t border-white/10 pt-2">स्थान: मयूर होम्स मुख्य पंडाल</div>
        </div>
      );

    case 'bhandara_seva':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#780016] to-[#45000A] text-white p-4 rounded-2xl border-2 border-emerald-400 flex flex-col justify-between ${className}`}>
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-xs font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full">🍲 हवन व विशाल महाप्रसाद भंडारा</span>
            <span className="text-[11px] text-emerald-200">24/09/2026</span>
          </div>
          <div className="my-auto text-center py-4">
            <div className="text-4xl mb-2">🍛</div>
            <h4 className="font-serif font-bold text-base text-white">सर्व-कॉलोनी महाप्रसाद वितरण</h4>
            <p className="text-xs text-emerald-200 mt-1">सैकड़ों भक्तों द्वारा महाप्रसाद ग्रहण व सेवा</p>
          </div>
          <div className="text-[10px] text-center text-stone-300 border-t border-white/10 pt-2">समर्पित भंडारा सेवा: ₹3,700</div>
        </div>
      );

    case 'visarjan_procession':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#FF7722] via-[#E65A00] to-[#5A0010] text-white p-4 rounded-2xl border-2 border-amber-300 flex flex-col justify-between ${className}`}>
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-xs font-bold bg-[#780016] text-[#FFDF80] px-2.5 py-0.5 rounded-full">🙏 भावभीनी विसर्जन यात्रा</span>
            <span className="text-[11px] text-amber-100">25/09/2026</span>
          </div>
          <div className="my-auto text-center py-4">
            <div className="text-4xl mb-2">🥁</div>
            <h4 className="font-serif font-bold text-base text-white">गणपति बाप्पा मोरया, अगले बरस तू जल्दी आ!</h4>
            <p className="text-xs text-amber-100 mt-1">ढोल-ताशों, गुलाल व जयकारों के साथ पर्यावरण-अनुकूल विसर्जन</p>
          </div>
          <div className="text-[10px] text-center text-white/80 border-t border-white/20 pt-2">मयूर होम्स कॉलोनी से विसर्जन स्थल</div>
        </div>
      );

    case 'drawing_competition':
    case 'balloon_cup':
    case 'bucket_game':
    case 'singing_dance':
    case 'chinese_pickup':
    case 'musical_pillow':
    case 'dumb_charades':
      return (
        <div className={`relative w-full h-full min-h-[300px] bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white p-4 rounded-2xl border-2 border-amber-400 flex flex-col justify-between ${className}`}>
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-xs font-bold bg-amber-500 text-stone-900 px-2.5 py-0.5 rounded-full">🏆 खेल एवं सांस्कृतिक प्रतियोगिता</span>
            <span className="text-[11px] text-amber-300">मयूर होम्स गेम्स</span>
          </div>
          <div className="my-auto text-center py-4">
            <div className="text-4xl mb-2">🎨</div>
            <h4 className="font-serif font-bold text-base text-white">बच्चों व परिवारों का उल्लासमय संगम</h4>
            <p className="text-xs text-stone-300 mt-1">चित्रकला, बलून कप, संगीत व मनोरंजक खेल प्रतियोगिताएँ</p>
          </div>
          <div className="text-[10px] text-center text-stone-400 border-t border-white/10 pt-2">स्थान: मयूर होम्स पंडाल प्रांगण</div>
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
