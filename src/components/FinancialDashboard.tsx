import React from 'react';
import { CENTRAL_TREASURY_DATA, ONLINE_AUDIT_INFO, GROSS_COLLECTION_DATA } from '../data/festivalData';
import { ShieldCheck, TrendingUp, TrendingDown, Wallet, ArrowRight, Minus, Plus, Equal, CheckCircle, ShieldAlert, Sparkles, Smartphone, Banknote, Utensils, HelpCircle } from 'lucide-react';

interface FinancialDashboardProps {
  lang: 'hi' | 'en';
}

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({ lang }) => {
  return (
    <section id="financials" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFFBF0] to-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#780016]/10 text-[#780016] text-xs font-bold border border-[#780016]/20">
            <ShieldCheck className="w-4 h-4 text-[#780016]" />
            <span>{lang === 'hi' ? 'आधिकारिक उत्सव वित्तीय लेखा' : 'Official Festival Treasury'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'हमारा हिसाब — हमारी पारदर्शिता' : 'Our Accounts — Our Transparency'}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-medium">
            {lang === 'hi' ? 'सकल संकलन, केन्द्रीय लेखा एवं पाई-पाई का सार्वजनिक विवरण' : 'Gross Collection, Central Treasury & Itemized Public Reconciliation'}
          </p>
        </div>

        {/* 4 Core Headline Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Card 1: Gross Total Collection (₹62,640) */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl border-2 border-emerald-500/60 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-200/40 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300">
                  {lang === 'hi' ? 'सकल कुल संकलन' : 'Gross Collection'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-950">
                  ₹{GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  {lang === 'hi' ? 'ऑनलाइन ₹31,719 + नकद ₹27,221 + भंडारा ₹3,700' : 'Online ₹31,719 + Cash ₹27,221 + Bhandara ₹3,700'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/70">
              <a
                href="#gross-breakdown"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
              >
                <span>{lang === 'hi' ? '₹62,640 का पूरा गणित देखें' : 'View ₹62,640 Math Breakdown'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Total Outflow */}
          <div className="bg-white rounded-3xl border-2 border-rose-400/40 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <TrendingDown className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  {lang === 'hi' ? 'कुल व्यय' : 'Total Outflow'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-rose-950">
                  ₹{CENTRAL_TREASURY_DATA.totalOutflow.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'hi' ? 'दैनिक पूजन + टेंट, साउंड, लाइट व विक्रेता' : 'Daily Rituals + Tent, Sound & Vendors'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100">
              <a
                href="#expenses"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#780016] hover:text-[#FF7722] transition-colors"
              >
                <span>{lang === 'hi' ? 'खर्च का विवरण देखें' : 'View Expense Breakdown'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Preliminary Hand Balance */}
          <div className="bg-white rounded-3xl border-2 border-amber-400/40 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Wallet className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  {lang === 'hi' ? 'प्रारंभिक शेष' : 'Hand Balance'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-amber-950">
                  ₹{CENTRAL_TREASURY_DATA.preliminaryHandBalance.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'hi' ? 'केन्द्रीय आवक (₹40,024) − व्यय (₹34,903)' : 'Central Inflow minus Outflow'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100">
              <a
                href="#evidence"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#780016] hover:text-[#FF7722] transition-colors"
              >
                <span>{lang === 'hi' ? 'मूल लेखा देखें' : 'View Source Evidence'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Final Net Savings */}
          <div className="bg-gradient-to-br from-[#780016] to-[#45000A] text-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7722]/20 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="w-11 h-11 rounded-2xl bg-[#D4AF37] text-[#5A0010] flex items-center justify-center font-bold">
                  <CheckCircle className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-1 rounded-lg border border-[#D4AF37]/40">
                  {lang === 'hi' ? 'अंतिम शुद्ध बचत' : 'Final Net Savings'}
                </span>
              </div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400">
                  ₹{CENTRAL_TREASURY_DATA.finalNetSavings.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#FFFDF7]/80 mt-1">
                  {lang === 'hi' ? 'टेंट शेष (-₹3,000) व सफाई (-₹300) उपरांत' : 'After pending tent & cleaning clearance'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 relative z-10">
              <a
                href="#evidence"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FFDF80] hover:text-white transition-colors"
              >
                <span>{lang === 'hi' ? 'मूल लेखा देखें' : 'View Source Evidence'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION: DETAILED GRAND BREAKDOWN OF ₹62,640 TOTAL FESTIVAL COLLECTION */}
        <div id="gross-breakdown" className="mb-14 bg-white rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2 pb-4 border-b border-stone-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'hi' ? 'सकल कुल संकलन का प्रामाणिक गणित' : 'Verified Gross Collection Math'}</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-[#780016]">
                {lang === 'hi' ? 'कुल संकलन ₹62,640 कैसे बना? (विस्तृत विवरण)' : 'How Total Collection ₹62,640 Was Formed'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                {lang === 'hi'
                  ? 'ऑनलाइन चंदा (40 सदस्य) + नकद चंदा (32 सदस्य) + समर्पित भंडारा सहयोग की पाई-पाई का पारदर्शी समीकरण'
                  : 'Transparent calculation combining 40 Online records, 32 Cash records, and dedicated Bhandara seva.'}
              </p>
            </div>

            {/* Visual Grand Step Formula Banner */}
            <div className="bg-gradient-to-r from-[#780016] via-[#5A0010] to-[#780016] text-[#FFFDF7] p-5 sm:p-7 rounded-2xl border border-[#D4AF37] shadow-lg">
              <div className="text-xs text-[#FFDF80] font-bold uppercase tracking-wider text-center mb-3">
                {lang === 'hi' ? 'मुख्य संकलन समीकरण' : 'Master Collection Equation'}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center font-mono text-sm sm:text-base font-bold">
                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/20">
                  <span className="block text-[10px] text-[#FFDF80] font-sans font-normal">ऑनलाइन (40)</span>
                  <span className="text-white text-base sm:text-lg">₹31,719</span>
                </div>
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/20">
                  <span className="block text-[10px] text-[#FFDF80] font-sans font-normal">नकद (32)</span>
                  <span className="text-white text-base sm:text-lg">₹27,221</span>
                </div>
                <Equal className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-amber-400/20 px-3.5 py-2 rounded-xl border border-amber-300/40">
                  <span className="block text-[10px] text-amber-200 font-sans font-normal">चंदा उप-योग</span>
                  <span className="text-[#FFDF80] text-base sm:text-lg">₹58,940</span>
                </div>
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-emerald-500/20 px-3.5 py-2 rounded-xl border border-emerald-400/40">
                  <span className="block text-[10px] text-emerald-200 font-sans font-normal">भंडारा सहयोग</span>
                  <span className="text-emerald-300 text-base sm:text-lg">₹3,700</span>
                </div>
                <Equal className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 rounded-xl border-2 border-emerald-300 shadow-lg">
                  <span className="block text-[10px] text-white/90 font-sans font-bold">सकल कुल संकलन</span>
                  <span className="text-white text-lg sm:text-2xl font-serif font-black">₹62,640</span>
                </div>
              </div>
            </div>

            {/* 3 Component Breakdown Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Online Chanda */}
              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-600 bg-white px-2.5 py-1 rounded-md border border-stone-200 flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                      ऑनलाइन चंदा
                    </span>
                    <span className="text-xs text-stone-500 font-bold">40 प्रविष्टियाँ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">
                    ₹{GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    कॉलोनी के 40 सदस्यों द्वारा सीधे UPI / QR कोड के माध्यम से समर्पित राशि।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-right">
                  <a href="#donors" className="text-xs font-bold text-[#780016] hover:underline">
                    40 नाम देखें →
                  </a>
                </div>
              </div>

              {/* Box 2: Cash Chanda */}
              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-600 bg-white px-2.5 py-1 rounded-md border border-stone-200 flex items-center gap-1">
                      <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                      नकद चंदा
                    </span>
                    <span className="text-xs text-stone-500 font-bold">32 प्रविष्टियाँ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">
                    ₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    कॉलोनी के 32 सदस्यों द्वारा नकद रसीद व संग्रह द्वारा समर्पित राशि।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-right">
                  <a href="#donors" className="text-xs font-bold text-[#780016] hover:underline">
                    32 नाम देखें →
                  </a>
                </div>
              </div>

              {/* Box 3: Dedicated Bhandara */}
              <div className="bg-amber-50/70 rounded-2xl border border-amber-300 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300 flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-[#FF7722]" />
                      समर्पित भंडारा
                    </span>
                    <span className="text-xs text-amber-800 font-bold">4 प्रमुख प्रविष्टियाँ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-[#780016] mt-1">
                    ₹{GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    महाप्रसाद व भंडारा सामग्री हेतु समर्पित विशेष सहयोग (नीचे सूची देखें)।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200 text-right">
                  <a href="#honors" className="text-xs font-bold text-[#780016] hover:underline">
                    सहयोगी देखें →
                  </a>
                </div>
              </div>
            </div>

            {/* Itemized Table for Bhandara Seva (₹3,700) */}
            <div className="bg-[#FFFDF7] rounded-2xl border border-stone-200 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm sm:text-base font-serif font-bold text-[#780016] flex items-center gap-2">
                  <span>🍲</span>
                  <span>समर्पित भंडारा सहयोग (₹3,700) की विस्तृत सूची</span>
                </h4>
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200">
                  कुल: ₹3,700
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 border-b border-stone-200">
                      <th className="py-2 px-3 font-bold">सहयोगी का नाम</th>
                      <th className="py-2 px-3 font-bold">सहयोग का प्रकार</th>
                      <th className="py-2 px-3 font-bold">मोड</th>
                      <th className="py-2 px-3 font-bold text-right">राशि</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {GROSS_COLLECTION_DATA.bhandaraBreakdown.map((item, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-stone-900">{lang === 'hi' ? item.nameHi : item.nameEn}</td>
                        <td className="py-2.5 px-3 text-stone-600">{lang === 'hi' ? item.roleHi : item.roleEn}</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 border border-stone-300 text-stone-700">
                            {lang === 'hi' ? item.modeHi : item.modeEn}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right font-serif font-black text-[#780016]">
                          ₹{item.amount.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50/80 font-bold border-t-2 border-emerald-300 text-emerald-950">
                      <td colSpan={3} className="py-2.5 px-3">भंडारा कुल संकलन (Subtotal):</td>
                      <td className="py-2.5 px-3 text-right font-serif font-black text-emerald-900 text-base">
                        ₹{GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reconciliation Note between Gross Collection and Central Cash Registry */}
            <div className="bg-stone-100/90 rounded-2xl p-4 border border-stone-300 flex items-start gap-3 text-xs text-stone-700 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#780016] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block mb-0.5">लेखा शुचिता व केन्द्रीय रजिस्ट्री का संबंध:</span>
                पूरे उत्सव का कुल संकलन **₹62,640** (ऑनलाइन ₹31,719 + नकद ₹27,221 + भंडारा ₹3,700) है। इनमें से केन्द्रीय खर्चों व वेंडरों के भुगतान हेतु **₹40,024** की सीधी आवक प्रयुक्त हुई जिसमें से **₹34,903** कुल व्यय होने के पश्चात **₹5,121** प्रारंभिक शेष और अंत में टेंट व सफाई उपरांत **₹1,821** की अंतिम शुद्ध बचत कॉलोनी के पास सुरक्षित रही।
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: "एक ईमानदार नोट" — SIGNATURE TRANSPARENCY CARD */}
        <div className="mb-14 bg-gradient-to-r from-amber-50 via-[#FFF9EE] to-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#780016] text-[#FFDF80] flex items-center justify-center shrink-0 shadow-md">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-4 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-3 py-0.5 rounded-md">
                    {lang === 'hi' ? 'हस्ताक्षरित शुचिता एवं पारदर्शी नोट' : 'Signature Audit Transparency'}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#780016] mt-1">
                    {lang === 'hi' ? 'एक ईमानदार नोट (लेखा सत्यापन)' : 'An Honest Note (Audit Reconciliation)'}
                  </h3>
                </div>
                <div className="text-xs font-semibold text-[#780016] bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-sm">
                  {lang === 'hi' ? 'अभिलेख सुरक्षित' : 'Source Protected'}
                </div>
              </div>

              {/* 3 Metric Comparison Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                  <span className="text-xs text-stone-500 font-medium block mb-1">
                    {lang === 'hi' ? 'डायरी में लिखा:' : 'Diary Written:'}
                  </span>
                  <div className="text-2xl font-serif font-bold text-[#780016]">
                    ₹{ONLINE_AUDIT_INFO.diaryWrittenTotal.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    {lang === 'hi' ? 'केन्द्रीय आवक में प्रयुक्त मूल आंकड़ा' : 'Recorded in central inflow'}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-300 shadow-sm">
                  <span className="text-xs text-emerald-800 font-medium block mb-1">
                    {lang === 'hi' ? '40 व्यक्तिगत रिकॉर्ड का योग:' : '40-Record Sum:'}
                  </span>
                  <div className="text-2xl font-serif font-bold text-emerald-700">
                    ₹{ONLINE_AUDIT_INFO.verifiedDonorTotal.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-emerald-600 mt-1 block">
                    {lang === 'hi' ? '40 दानदाताओं की राशियों का योग' : 'Sum of 40 individual entries'}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-amber-400 shadow-sm">
                  <span className="text-xs text-amber-900 font-medium block mb-1">
                    {lang === 'hi' ? 'अंतर:' : 'Difference:'}
                  </span>
                  <div className="text-2xl font-serif font-bold text-amber-700">
                    +₹{ONLINE_AUDIT_INFO.difference.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    {lang === 'hi' ? 'सत्यापित योग > लिखित योग' : 'Verified exceeds written sum'}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-amber-300 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans shadow-inner">
                <span className="font-bold text-[#780016] block mb-1 text-sm">
                  "दोनों आंकड़े स्रोत के अनुसार सुरक्षित रखे गए हैं।"
                </span>
                {lang === 'hi' ? ONLINE_AUDIT_INFO.explanationHi : ONLINE_AUDIT_INFO.explanationEn}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Waterfall Flow Box */}
        <div className="bg-[#780016] text-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold text-[#FFDF80] uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
                {lang === 'hi' ? 'प्रवाह आरेख' : 'Visual Inflow-Outflow Waterfall'}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-2">
                {lang === 'hi' ? 'सटीक गणितीय लेखा प्रवाह' : 'Complete Mathematical Audit Sequence'}
              </h3>
            </div>

            {/* Stage 1 */}
            <div className="bg-[#5A0010] p-5 rounded-2xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#D4AF37] text-[#5A0010] font-bold text-xs rounded-md">
                  चरण १
                </span>
                <span className="text-xs sm:text-sm text-[#FFDF80] font-medium">
                  {lang === 'hi' ? 'प्रारंभिक शेष (केन्द्रीय आवक − व्यय)' : 'Preliminary Hand Balance'}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-bold font-mono">
                <span className="text-emerald-400">₹40,024 (केन्द्रीय आवक)</span>
                <Minus className="w-4 h-4 text-stone-300" />
                <span className="text-rose-300">₹34,903 (व्यय)</span>
                <Equal className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#FFDF80] text-lg font-serif font-black bg-white/10 px-3 py-1 rounded-lg border border-[#D4AF37]">
                  ₹5,121
                </span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#45000A] p-5 rounded-2xl border-2 border-emerald-500/70 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-white font-bold text-xs rounded-md">
                  चरण २
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-emerald-300 block">
                    {lang === 'hi' ? 'अंतिम शुद्ध बचत (Colony Net Reserve)' : 'Final Unencumbered Surplus'}
                  </span>
                  <span className="text-[11px] text-[#FFFDF7]/70">
                    {lang === 'hi' ? 'टेंट शेष (-₹3,000) व दुर्गा सफाई (-₹300) समायोजन' : 'After -₹3,000 tent & -₹300 cleaning adjustment'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-bold font-mono">
                <span className="text-white">₹5,121</span>
                <Minus className="w-4 h-4 text-stone-300" />
                <span className="text-amber-300">₹3,000 (टेंट शेष)</span>
                <Minus className="w-4 h-4 text-stone-300" />
                <span className="text-amber-300">₹300 (सफाई)</span>
                <Equal className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-xl sm:text-2xl font-serif font-black bg-emerald-950/90 px-4 py-1.5 rounded-xl border-2 border-emerald-400 shadow">
                  ₹1,821
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
