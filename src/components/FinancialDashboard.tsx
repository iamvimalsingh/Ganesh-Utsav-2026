import React from 'react';
import { CENTRAL_TREASURY_DATA, ONLINE_AUDIT_INFO } from '../data/festivalData';
import { ShieldCheck, TrendingUp, TrendingDown, Wallet, ArrowRight, Minus, Equal, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';

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
            <span>{lang === 'hi' ? 'आधिकारिक केन्द्रीय खाता' : 'Official Central Treasury'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'हमारा हिसाब — हमारी पारदर्शिता' : 'Our Accounts — Our Transparency'}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-medium">
            {lang === 'hi' ? 'केन्द्रीय लेखा एवं संकलनकर्ता विवरण' : 'Central Treasury Accounts & Flow Reconciliation'}
          </p>
        </div>

        {/* 4 Core Headline Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Card 1: Total Inflow */}
          <div className="bg-white rounded-3xl border-2 border-emerald-500/40 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {lang === 'hi' ? 'कुल आवक' : 'Total Inflow'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-950">
                  ₹{CENTRAL_TREASURY_DATA.totalInflow.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'hi' ? 'ऑनलाइन चंदा + नकद + भंडारा' : 'Online Chanda + Cash + Bhandara'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100">
              <a
                href="#evidence"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#780016] hover:text-[#FF7722] transition-colors"
              >
                <span>{lang === 'hi' ? 'मूल लेखा देखें' : 'View Source Evidence'}</span>
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
                href="#evidence"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#780016] hover:text-[#FF7722] transition-colors"
              >
                <span>{lang === 'hi' ? 'मूल लेखा देखें' : 'View Source Evidence'}</span>
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
                  {lang === 'hi' ? 'आवक में से व्यय घटाने पर शेष' : 'Inflow minus Outflow balance'}
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
                  {lang === 'hi' ? 'टेंट शेष व सफाई समायोजन उपरांत' : 'After pending tent & cleaning clearance'}
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

        {/* SECTION 9: "एक ईमानदार नोट" — SIGNATURE TRANSPARENCY CARD */}
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
                  {lang === 'hi' ? 'प्रारंभिक शेष (Inflow − Outflow)' : 'Preliminary Hand Balance'}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-bold font-mono">
                <span className="text-emerald-400">₹40,024 (आवक)</span>
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
