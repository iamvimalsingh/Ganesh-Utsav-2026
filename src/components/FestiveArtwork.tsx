import React from 'react';

interface FestiveArtworkProps {
  type: string;
  className?: string;
  badge?: string;
}

export const FestiveArtwork: React.FC<FestiveArtworkProps> = ({ type, className = '', badge }) => {
  switch (type) {
    case 'hero_emblem':
    case 'murti_darshan':
    case 'murti_darshan_real':
      return (
        <div className={`relative w-full h-full min-h-[340px] bg-gradient-to-b from-[#5A0010] via-[#780016] to-[#2E0006] flex flex-col justify-between p-5 rounded-2xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden ${className}`}>
          {/* Himalayan Snow Mountain Backdrop Simulator */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-[#780016]/90 to-[#2E0006] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-sky-600/10 to-transparent opacity-60" />
          
          {/* Pandal Flower Toran Top Border */}
          <div className="relative z-10 w-full flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFDF80] text-xs font-bold rounded-full backdrop-blur-md">
              ✨ श्री गणेश दिव्य प्रतिमा दर्शन (वास्तविक छायाचित्र)
            </span>
            <span className="text-xs text-[#D4AF37] font-semibold bg-black/40 px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
              मयूर होम्स कॉलोनी
            </span>
          </div>

          {/* Central Sanctum Murti Representation */}
          <div className="relative z-10 my-3 flex flex-col items-center">
            <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-2xl border-2 border-[#D4AF37] p-2 bg-gradient-to-b from-[#690013] via-[#4A000C] to-[#1F0004] shadow-2xl flex items-center justify-center overflow-hidden group">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Mountain Peaks */}
                <polygon points="10,120 60,40 110,120" fill="#3B82F6" opacity="0.3" />
                <polygon points="50,60 60,40 70,60" fill="#FFFFFF" opacity="0.8" />
                <polygon points="80,130 140,30 200,130" fill="#1E40AF" opacity="0.35" />
                <polygon points="130,50 140,30 150,50" fill="#FFFFFF" opacity="0.9" />

                {/* Aura Disc */}
                <circle cx="100" cy="95" r="65" fill="#FF7722" opacity="0.25" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="100" cy="95" r="55" fill="#FFDF80" opacity="0.15" />

                {/* Grand Golden Crown (Mukut) */}
                <path d="M78 52 L100 18 L122 52 L112 56 L88 56 Z" fill="#D4AF37" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="100" cy="22" r="3.5" fill="#FFF" />
                <circle cx="88" cy="38" r="2.5" fill="#E11D48" />
                <circle cx="112" cy="38" r="2.5" fill="#E11D48" />
                <circle cx="100" cy="40" r="3" fill="#10B981" />

                {/* Ganesha Face & Pitambar */}
                <path d="M75 65 Q100 52 125 65 Q132 95 116 118 Q104 136 92 144 Q82 144 84 132 Q92 122 98 108 Q100 86 75 65" fill="#FFFBF2" stroke="#FF7722" strokeWidth="1.5" />
                
                {/* Yellow Pitambar Robe on Shoulders */}
                <path d="M68 95 C62 120 70 145 88 152 C95 155 105 155 112 152 C130 145 138 120 132 95" fill="#FACC15" opacity="0.85" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M85 105 L115 105 L110 135 L90 135 Z" fill="#DC2626" opacity="0.9" />

                {/* Auspicious Big Ears with Golden Kundal */}
                <path d="M68 62 C45 65 38 95 65 102" fill="#FF7722" opacity="0.8" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="50" cy="85" r="4" fill="#D4AF37" />
                <path d="M132 62 C155 65 162 95 135 102" fill="#FF7722" opacity="0.8" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="150" cy="85" r="4" fill="#D4AF37" />

                {/* Roli Chandan Tilak */}
                <ellipse cx="100" cy="68" rx="3.5" ry="8" fill="#780016" />
                <circle cx="100" cy="58" r="3" fill="#D4AF37" />
                <line x1="92" y1="64" x2="108" y2="64" stroke="#D4AF37" strokeWidth="1.5" />

                {/* Flower Garland (Marigold Mala) */}
                <path d="M72 82 Q100 120 128 82" fill="none" stroke="#FF7722" strokeWidth="5" strokeLinecap="round" strokeDasharray="6 4" />

                {/* Kalash with Coconut & Leaves on Left Table */}
                <ellipse cx="38" cy="155" rx="14" ry="10" fill="#B45309" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="38" cy="142" r="7" fill="#78350F" />
                <polygon points="38,138 32,146 44,146" fill="#16A34A" />

                {/* Small Ganesha & Modak Plate on Right */}
                <circle cx="162" cy="150" r="10" fill="#F59E0B" stroke="#D4AF37" strokeWidth="1" />
                <circle cx="162" cy="142" r="4" fill="#FEF08A" />
                <circle cx="158" cy="146" r="3" fill="#FEF08A" />
                <circle cx="166" cy="146" r="3" fill="#FEF08A" />
              </svg>
            </div>
            <p className="mt-2 text-[#FFDF80] font-serif font-bold text-sm sm:text-base text-center tracking-wide drop-shadow">
              श्री गणेश उत्सव 2026 — मयूर होम्स कॉलोनी
            </p>
          </div>

          <div className="relative z-10 w-full bg-[#1A0004]/90 backdrop-blur-md rounded-xl p-2.5 border border-[#D4AF37]/30 text-center">
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
          {/* Hanging Orange and Yellow Flower Garlands */}
          <div className="absolute top-0 inset-x-0 flex justify-around pointer-events-none opacity-90 z-10">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-3.5 h-16 sm:h-20 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400 rounded-b-full border-x border-orange-600 shadow-md animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="relative z-20 flex justify-between items-center pb-2 border-b border-white/20">
            <span className="text-xs font-bold bg-[#FF7722] text-white px-2.5 py-0.5 rounded-full shadow">
              🔥 सामूहिक महाआरती
            </span>
            <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
              20/09/2026, 21:06
            </span>
          </div>

          {/* Devotees Crowd Scene with Lit Thalis */}
          <div className="relative z-20 my-auto py-4 flex flex-col items-center">
            <div className="w-full max-w-sm bg-black/40 rounded-xl p-3 border border-amber-400/30 backdrop-blur-sm flex flex-col items-center text-center">
              <div className="flex justify-center gap-3 mb-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="relative w-8 h-8 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300 border border-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/50">
                    <span className="text-xs animate-bounce">🪔</span>
                  </div>
                ))}
              </div>
              <h4 className="text-white font-serif font-bold text-sm sm:text-base drop-shadow">
                कॉलोनी मातृशक्ति, परिवार एवं बच्चों द्वारा सामूहिक महाआरती
              </h4>
              <p className="text-[11px] text-amber-200/90 mt-1">
                प्रज्वलित दीप थालियों, सुगंधित पुष्पों व वैदिक मंत्रोच्चार के साथ संपन्न पावन आरती
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
          {/* Canopy fairy lights simulation */}
          <div className="absolute top-0 inset-x-0 h-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300/30 via-orange-400/10 to-transparent" />
          
          <div className="relative z-10 flex justify-between items-center pb-2 border-b border-[#D4AF37]/30">
            <span className="text-xs font-bold bg-[#D4AF37] text-[#5A0010] px-2.5 py-0.5 rounded-full shadow">
              📖 श्री सुंदरकांड पाठ सभा
            </span>
            <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
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
        <div className={`relative w-full h-full min-h-[280px] bg-gradient-to-b from-[#661100] to-[#2B0700] rounded-2xl border-2 border-[#D4AF37] p-4 flex flex-col justify-between overflow-hidden shadow-lg ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-amber-400/30">
            <span className="text-xs font-bold bg-amber-500 text-stone-900 px-2 py-0.5 rounded">स्थापना मुहूर्त</span>
            <span className="text-xs text-amber-200">14/09/2026 (शाम 4:00)</span>
          </div>
          <div className="text-center my-auto py-4">
            <div className="text-3xl mb-1">🪔 🏺</div>
            <h4 className="text-white font-serif font-bold text-base">वैदिक कलश व प्रतिमा स्थापना</h4>
            <p className="text-xs text-amber-200/80 mt-1">शंखनाद एवं मंत्रोच्चार के साथ मंगल आगमन</p>
          </div>
          <div className="text-[10px] text-center text-white/70 bg-black/40 py-1 rounded">
            मयूर होम्स कॉलोनी भोपाल
          </div>
        </div>
      );

    case 'bhandara_seva':
      return (
        <div className={`relative w-full h-full min-h-[280px] bg-gradient-to-b from-[#064E3B] to-[#022C22] rounded-2xl border-2 border-emerald-400 p-4 flex flex-col justify-between overflow-hidden shadow-lg ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-emerald-400/30">
            <span className="text-xs font-bold bg-emerald-500 text-white px-2 py-0.5 rounded">हवन + महाप्रसाद</span>
            <span className="text-xs text-emerald-200">24/09/2026 (सुबह 11:00)</span>
          </div>
          <div className="text-center my-auto py-4">
            <div className="text-3xl mb-1">🍲 🥣</div>
            <h4 className="text-white font-serif font-bold text-base">सर्व-कॉलोनी विशाल महाभंडारा</h4>
            <p className="text-xs text-emerald-200/80 mt-1">शांति हवन पूर्णाहुति एवं महाप्रसाद वितरण</p>
          </div>
          <div className="text-[10px] text-center text-white/70 bg-black/40 py-1 rounded">
            सैकड़ों श्रद्धालुओं द्वारा प्रसाद ग्रहण
          </div>
        </div>
      );

    case 'visarjan_procession':
      return (
        <div className={`relative w-full h-full min-h-[280px] bg-gradient-to-b from-[#7C2D12] to-[#451A03] rounded-2xl border-2 border-orange-400 p-4 flex flex-col justify-between overflow-hidden shadow-lg ${className}`}>
          <div className="flex justify-between items-center pb-2 border-b border-orange-400/30">
            <span className="text-xs font-bold bg-orange-500 text-white px-2 py-0.5 rounded">विसर्जन यात्रा</span>
            <span className="text-xs text-orange-200">25/09/2026 (दोपहर 12:00)</span>
          </div>
          <div className="text-center my-auto py-4">
            <div className="text-3xl mb-1">🥁 🌺</div>
            <h4 className="text-white font-serif font-bold text-base">‘गणपति बाप्पा मोरया’ विदाई यात्रा</h4>
            <p className="text-xs text-orange-200/80 mt-1">ढोल-ताशों और गुलाल के साथ पावन विसर्जन</p>
          </div>
          <div className="text-[10px] text-center text-white/70 bg-black/40 py-1 rounded">
            अगले बरस तू जल्दी आ!
          </div>
        </div>
      );

    case 'singing_dance':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-gradient-to-b from-[#4C1D95] to-[#1E1B4B] rounded-2xl border-2 border-purple-400 p-4 flex flex-col justify-between text-white shadow-md ${className}`}>
          <div className="flex justify-between text-xs">
            <span className="bg-purple-500 px-2 py-0.5 rounded font-bold">सांस्कृतिक संध्या</span>
            <span className="text-purple-200">15/09/2026</span>
          </div>
          <div className="text-center my-auto">
            <div className="text-3xl mb-1">🎤 💃</div>
            <h4 className="font-serif font-bold text-base">सिंगिंग एंड डांस प्रतियोगिता</h4>
            <p className="text-xs text-purple-200 mt-1">बच्चों व युवाओं की मनमोहक प्रस्तुतियां</p>
          </div>
          <div className="text-[10px] text-center bg-black/40 py-1 rounded text-purple-200">
            मयूर होम्स कला मंच
          </div>
        </div>
      );

    case 'chinese_pickup':
    case 'musical_pillow':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-gradient-to-b from-[#0F766E] to-[#134E4A] rounded-2xl border-2 border-teal-400 p-4 flex flex-col justify-between text-white shadow-md ${className}`}>
          <div className="flex justify-between text-xs">
            <span className="bg-teal-500 px-2 py-0.5 rounded font-bold">सामुदायिक खेल</span>
            <span className="text-teal-200">16-17/09/2026</span>
          </div>
          <div className="text-center my-auto">
            <div className="text-3xl mb-1">🎯 🎵</div>
            <h4 className="font-serif font-bold text-base">म्यूजिकल पिलो व चायनीज पिक-अप</h4>
            <p className="text-xs text-teal-200 mt-1">मातृशक्ति व बच्चों का लोकप्रिय खेल</p>
          </div>
          <div className="text-[10px] text-center bg-black/40 py-1 rounded text-teal-200">
            उत्साह एवं आनंदमय सहभागिता
          </div>
        </div>
      );

    case 'drawing_competition':
    case 'balloon_cup':
    case 'bucket_game':
    case 'dumb_charades':
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-gradient-to-b from-[#9A3412] to-[#431407] rounded-2xl border-2 border-amber-500 p-4 flex flex-col justify-between text-white shadow-md ${className}`}>
          <div className="flex justify-between text-xs">
            <span className="bg-amber-600 px-2 py-0.5 rounded font-bold">रोचक प्रतियोगिताएं</span>
            <span className="text-amber-200">19-23/09/2026</span>
          </div>
          <div className="text-center my-auto">
            <div className="text-3xl mb-1">🎨 🎈 🏆</div>
            <h4 className="font-serif font-bold text-base">चित्रकला, बकेट व बलून कप गेम</h4>
            <p className="text-xs text-amber-200 mt-1">गणेश थीम चित्रकला व रोमांचक खेल</p>
          </div>
          <div className="text-[10px] text-center bg-black/40 py-1 rounded text-amber-200">
            विजेताओं को विशेष पुरस्कार
          </div>
        </div>
      );

    // ==========================================
    // POSTER TYPES
    // ==========================================
    case 'poster_main_schedule':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-[#FFF8E7] text-[#4A1500] p-5 rounded-2xl border-4 border-[#780016] flex flex-col justify-between shadow-2xl font-serif ${className}`}>
          <div className="border-2 border-[#D4AF37] p-3 h-full flex flex-col justify-between rounded-xl bg-gradient-to-b from-white via-[#FFFBF2] to-[#FFF5E0]">
            <div className="text-center border-b-2 border-[#780016] pb-2">
              <span className="text-[10px] font-bold tracking-widest text-[#780016] uppercase bg-amber-200/80 px-2 py-0.5 rounded">
                आधिकारिक कार्यक्रम सूचना
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#780016] mt-1">
                श्री गणेश उत्सव 2026
              </h3>
              <p className="text-xs font-bold text-[#FF7722]">
                मयूर होम्स कॉलोनी, भोपाल (14/09 से 25/09/2026)
              </p>
            </div>

            <div className="my-2 space-y-1 text-[11px] sm:text-xs">
              <div className="flex justify-between py-1 border-b border-stone-200 font-bold text-[#780016]">
                <span>14/09: गणेश स्थापना (शाम 4:00)</span>
                <span>20/09: महाआरती (शाम 8:00)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>15/09: सिंगिंग एंड डांस</span>
                <span>21/09: Bucket Game</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>16/09: चायनीज पिक-अप</span>
                <span>22/09: ड्रॉइंग प्रतियोगिता</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>17/09: म्यूजिकल पिलो</span>
                <span>23/09: Balloon Cup Game</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200 font-bold text-[#780016]">
                <span>18/09: सुंदरकांड (रात 9:00)</span>
                <span>24/09: हवन + भंडारा (11:00)</span>
              </div>
              <div className="flex justify-between py-1 font-bold text-[#780016]">
                <span>19/09: Dumb Charades</span>
                <span>25/09: विसर्जन (दोपहर 12:00)</span>
              </div>
            </div>

            <div className="text-center border-t border-[#780016] pt-1 text-[10px] text-stone-600 font-sans">
              समस्त कॉलोनीवासियों की सहभागिता सादर प्रार्थनीय है
            </div>
          </div>
        </div>
      );

    case 'poster_sunderkand':
      return (
        <div className={`relative w-full h-full min-h-[380px] bg-gradient-to-b from-[#780016] via-[#5A0010] to-[#3B0008] text-[#FFFDF7] p-5 rounded-2xl border-4 border-[#D4AF37] flex flex-col justify-between shadow-2xl font-serif ${className}`}>
          <div className="border border-[#FFDF80]/50 p-4 h-full flex flex-col justify-between rounded-xl">
            <div className="text-center">
              <span className="text-xs font-bold text-[#FFDF80] tracking-wider uppercase">
                ॥ श्री गणेशाय नमः ॥
              </span>
              <h3 className="text-2xl font-black text-[#FFDF80] mt-1">
                भव्य संगीतमय सुंदरकांड पाठ
              </h3>
              <p className="text-xs text-amber-200 mt-0.5">
                मयूर होम्स कॉलोनी, भोपाल
              </p>
            </div>

            <div className="text-center my-3 bg-black/30 p-3 rounded-xl border border-[#D4AF37]/30">
              <span className="text-xs text-stone-300 block">शुभ दिवस व समय:</span>
              <div className="text-lg font-bold text-white">18 सितम्बर 2026 (शुक्रवार)</div>
              <div className="text-sm font-semibold text-amber-300">रात्रि 9:00 बजे से</div>
              <div className="mt-2 text-xs text-amber-200 border-t border-white/20 pt-2 font-sans">
                विशेष सौजन्य: <strong className="text-white">श्री अजय सिंह जी (₹2,500)</strong>
              </div>
            </div>

            <div className="text-center text-xs text-[#FFDF80]">
              आप सभी सपरिवार सादर आमंत्रित हैं
            </div>
          </div>
        </div>
      );

    // ==========================================
    // 7 ORIGINAL HANDWRITTEN DIARY EVIDENCE TYPES
    // ==========================================
    case 'ledger_central':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          {/* Lined Paper Background Simulator */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_28px] opacity-70 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 w-[1.5px] bg-rose-400/50 pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-1 text-stone-700">
              <span className="font-bold font-serif text-sm text-[#780016]">मूल केन्द्रीय लेखा डायरी</span>
              <span className="text-[10px] bg-stone-200 px-2 py-0.5 rounded">Shashi A/c</span>
            </div>

            <div className="space-y-3 pt-2 text-stone-900 leading-relaxed font-semibold">
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

          <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-500 border-t border-stone-300 pt-2">
            <span>हस्तलिखित डायरी अभिलेख</span>
            <span className="font-bold text-[#780016]">सत्यापित प्रविष्टि</span>
          </div>
        </div>
      );

    case 'ledger_donors_p1':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_24px] opacity-70 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 w-[1.5px] bg-rose-400/50 pointer-events-none" />

          <div className="relative z-10 space-y-1.5">
            <div className="flex justify-between items-center border-b border-stone-400 pb-1">
              <span className="font-bold text-blue-900 font-serif">online - Shashi A/c (1 से 29)</span>
              <span className="text-[10px] text-stone-500">Page 1</span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 text-[11px] text-blue-950 pt-1">
              <div>1. Batham Ji — 1100/-</div>
              <div>2. Nanhelal Ji — 201/-</div>
              <div>3. Jyoti Ji — 1100/-</div>
              <div>4. Rajesh Ji — 551/-</div>
              <div>5. Vijay Vijesh — 500/-</div>
              <div>6. Ankit Patel — 501/-</div>
              <div>7. Dev Kumar — 1100/-</div>
              <div>8. Naresh Shrivastav — 2000/-</div>
              <div>9. Vimal Singh — 1100/-</div>
              <div>14. Santosh Kushwaha — 1100/-</div>
              <div>27. Bhadauriya Ji — 2500/-</div>
              <div>29. Vyash Ji — 500/-</div>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-stone-500 border-t border-stone-300 pt-1 text-right font-sans">
            कुल 29 प्रविष्टियों का हस्तलिखित रिकॉर्ड
          </div>
        </div>
      );

    case 'ledger_donors':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_24px] opacity-70 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-8 w-[1.5px] bg-rose-400/50 pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <div className="flex justify-between items-center border-b border-stone-400 pb-1">
              <span className="font-bold text-blue-900 font-serif">online Shashi A/c (30 से 40)</span>
              <span className="text-[10px] text-stone-500">Page 2</span>
            </div>

            <div className="space-y-1 text-[11px] text-blue-950">
              <div>30. Eknath Deshmukh — 501/-</div>
              <div>31. Snehlata Dhakad — 1100/-</div>
              <div>32. Dharmendra Dhakad — 501/-</div>
              <div>33. Mayank Ji — 1100/-</div>
              <div>34. Dev Kumar — 501/-</div>
              <div>35. Deepak Litoriya — 500/-</div>
              <div>36. Reetu Kushwaha — 501/-</div>
              <div>37. Premchand Shakya — 1151/-</div>
              <div>38. Mukesh Kotiya — 501/-</div>
              <div>39. Rani Ahirwar — 501/-</div>
              <div className="font-bold border-t border-stone-300 pt-0.5">उप-योग: 30269/-</div>
              <div>40. + 500 Narendra Kumar Ji</div>
              <div className="text-base font-bold text-[#780016] border-t-2 border-stone-400 pt-0.5">
                डायरी लिखित कुल: 30,769/-
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-amber-900 bg-amber-100/80 p-1.5 rounded font-sans">
            नोट: 40 प्रविष्टियों का वास्तविक गणितीय योग ₹31,719 है (अंतर: +₹950)।
          </div>
        </div>
      );

    case 'ledger_bhandara':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_24px] opacity-70 pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <div className="border-b-2 border-stone-400 pb-1 flex justify-between items-center">
              <span className="font-bold text-amber-900 font-serif text-sm">Bhandara (विशेष सहयोग)</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded">हस्तलिखित प्रविष्टि</span>
            </div>

            <div className="space-y-2 pt-2 text-stone-900 text-xs">
              <div className="p-2 bg-white/70 rounded border border-stone-200">
                <strong>600/-</strong> Jyoti — Shashi online
              </div>
              <div className="p-2 bg-white/70 rounded border border-stone-200">
                <strong>600/-</strong> Suman Katiyar — Shashi online
              </div>
              <div className="p-2 bg-white/70 rounded border border-stone-200">
                <strong>1000/-</strong> Dr. Ashish cash Shrivastav Ji
              </div>
              <div className="p-2 bg-white/70 rounded border border-stone-200">
                <strong>2500/-</strong> Santosh Kushwaha / Guddu Bhaiya
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-stone-600 border-t border-stone-300 pt-2 font-sans">
            केन्द्रीय आवक में ऑनलाइन भंडारा ₹1,200 (ज्योति + सुमन) सम्मिलित है।
          </div>
        </div>
      );

    case 'ledger_cash_master':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_24px] opacity-70 pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-1">
              <span className="font-bold text-emerald-950 font-serif text-sm">Cash Chanda Master List</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">32 Entries</span>
            </div>

            <div className="grid grid-cols-2 gap-x-2 text-[10px] text-stone-900 pt-1">
              <div>Gaurav Gupta — 501/-</div>
              <div>S. Pratibhan — 200/-</div>
              <div>Chhotu Mobile — 251/-</div>
              <div>Pawan Ji — 500/-</div>
              <div>Hemant Arya — 1100/-</div>
              <div>Kishan Yadav — 2100/-</div>
              <div>Goldi — 2100/-</div>
              <div>Ajay Singh Ji — 2500/-</div>
              <div>Bharat Bhushan — 2100/-</div>
              <div>Ravi (Police) — 1000/-</div>
              <div>Dr. Ashish — 1200/-</div>
              <div>Raghuveer Bundela — 1101/-</div>
            </div>

            <div className="border-t-2 border-emerald-600 pt-1 text-emerald-900 font-bold text-xs flex justify-between">
              <span>कुल नकद चंदा:</span>
              <span>₹27,221</span>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-stone-500 border-t border-stone-300 pt-1 font-sans">
            हस्तलिखित डायरी में दर्ज 32 नकद दानदाताओं का संकलित योग
          </div>
        </div>
      );

    case 'ledger_expenses':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-[#FFFBF0] text-[#1E293B] p-5 rounded-2xl border-2 border-stone-300 shadow-md font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:100%_24px] opacity-70 pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <div className="flex justify-between items-center border-b-2 border-stone-400 pb-1">
              <span className="font-bold text-rose-950 font-serif text-sm">दैनिक खर्च by Shashi &amp; Vendors</span>
              <span className="text-[10px] bg-rose-100 text-rose-900 px-2 py-0.5 rounded">₹34,903</span>
            </div>

            <div className="space-y-1 text-[10px] text-stone-800">
              <div className="font-bold text-stone-900">दैनिक पूजन व सामग्री:</div>
              <div className="grid grid-cols-2 gap-x-2">
                <div>माला — 650/-</div>
                <div>दूध + दही — 774/-</div>
                <div>लड्डू प्रसाद — 2770/-</div>
                <div>केला / फल — 950/-</div>
                <div>साफा + लेस — 430/-</div>
                <div>गैस सिलेंडर — 950/-</div>
              </div>
              <div className="text-right text-stone-900 font-bold border-t border-stone-200 pt-0.5">
                पूजन उप-योग: ₹8,452
              </div>

              <div className="font-bold text-stone-900 pt-1">टेंट, साउंड व लाइट:</div>
              <div className="grid grid-cols-2 gap-x-2">
                <div>टेंट — 2100/- + 1500/-</div>
                <div>साउंड — 2500/- + 650/-</div>
                <div>लाइट (मोनू) — 1200/-</div>
                <div>श्रीवास्तव जी — 5000/-</div>
              </div>
              <div className="text-right text-stone-900 font-bold border-t border-stone-200 pt-0.5">
                टेंट/साउंड उप-योग: ₹26,451
              </div>
            </div>

            <div className="border-t-2 border-rose-600 pt-1 text-rose-900 font-bold text-xs flex justify-between bg-rose-50/70 p-1 rounded">
              <span>कुल व्यय (8452 + 26451):</span>
              <span>₹34,903</span>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-stone-500 border-t border-stone-300 pt-1 font-sans">
            हस्तलिखित वाउचर व खर्च प्रविष्टि साक्ष्य
          </div>
        </div>
      );

    case 'ledger_calculator':
      return (
        <div className={`relative w-full h-full min-h-[360px] bg-stone-900 text-white p-5 rounded-2xl border-2 border-stone-600 shadow-xl font-mono text-xs flex flex-col justify-between overflow-hidden ${className}`}>
          <div className="border-b border-stone-700 pb-2 flex justify-between items-center">
            <span className="text-[#FFDF80] font-bold text-sm font-serif">12-Digit Electronic Calculator</span>
            <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded text-stone-300">Physical Audit Check</span>
          </div>

          <div className="my-auto py-4 flex flex-col items-center">
            {/* Calculator LCD Screen */}
            <div className="w-full max-w-xs bg-[#7D9B76] text-stone-950 p-4 rounded-xl border-4 border-stone-700 shadow-inner font-mono text-right font-black">
              <span className="text-xs text-stone-700 block tracking-widest">CALC GT</span>
              <span className="text-4xl sm:text-5xl tracking-wider">5121</span>
            </div>

            <div className="mt-4 text-center text-xs text-stone-300 space-y-1">
              <div className="text-[#FFDF80] font-bold">40,024 (आवक) − 34,903 (व्यय) = 5,121</div>
              <p className="text-[11px] text-stone-400">
                डायरी के साथ कैलकुलेटर पर भौतिक मिलान कर निकाला गया प्रारंभिक शेष
              </p>
            </div>
          </div>

          <div className="text-[10px] text-stone-400 border-t border-stone-800 pt-2 text-center">
            अंतिम शुद्ध बचत ₹1,821 (5,121 − 3,000 टेंट − 300 सफाई) की गणना
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
