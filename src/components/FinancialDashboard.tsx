import React from 'react';
import { CENTRAL_TREASURY_DATA, ONLINE_AUDIT_INFO, GROSS_COLLECTION_DATA, CONSOLIDATED_FESTIVAL_AUDIT, DiaryEvidenceItem } from '../data/festivalData';
import { ShieldCheck, TrendingUp, TrendingDown, Wallet, ArrowRight, Minus, Plus, Equal, CheckCircle, ShieldAlert, Sparkles, Smartphone, Banknote, Utensils, HelpCircle } from 'lucide-react';
import { DrilldownTab } from './AccountingDetailDrawer';

interface FinancialDashboardProps {
  lang: 'hi' | 'en';
  onOpenAccounting?: (tab?: DrilldownTab) => void;
  onOpenEvidence?: (item: DiaryEvidenceItem) => void;
}

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({ lang, onOpenAccounting, onOpenEvidence }) => {
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
          <div
            onClick={() => onOpenAccounting && onOpenAccounting('overview')}
            className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl border-2 border-emerald-500/60 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden cursor-pointer group"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-200/40 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300 flex items-center gap-1">
                  <span>{lang === 'hi' ? 'सकल कुल संकलन' : 'Gross Collection'}</span>
                  <span className="text-xs text-[#780016] font-extrabold">• विवरण देखें</span>
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  ₹{GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  {lang === 'hi'
                    ? `ऑनलाइन ₹${GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')} + नकद ₹${GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')} + भंडारा ₹${GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}`
                    : `Online ₹${GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')} + Cash ₹${GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')} + Bhandara ₹${GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}`}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/70">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenAccounting) onOpenAccounting('overview');
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
              >
                <span>{lang === 'hi' ? `₹${GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')} का पूरा गणित व स्रोत देखें →` : `View ₹${GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')} Math & Evidence →`}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Total Certified Outflow */}
          <div
            onClick={() => onOpenAccounting && onOpenAccounting('expenses')}
            className="bg-white rounded-3xl border-2 border-rose-400/40 hover:border-rose-500 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <TrendingDown className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                  {lang === 'hi' ? 'कुल उत्सव व्यय' : 'Total Festival Outflow'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-rose-950 group-hover:text-rose-700 transition-colors">
                  ₹{CONSOLIDATED_FESTIVAL_AUDIT.totalConsolidatedExpenses.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'hi' ? 'टेंट, साउंड, भंडारा महाप्रसाद, पूजन व विसर्जन' : 'Pandal, Sound, Bhandara Feast, Rituals & Visarjan'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenAccounting) onOpenAccounting('expenses');
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#780016] hover:text-[#FF7722] transition-colors"
              >
                <span>{lang === 'hi' ? '3 श्रेणियों में विस्तृत व्यय देखें →' : 'View 3 Itemized Categories →'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Total Net Surplus */}
          <div
            onClick={() => {
              const el = document.getElementById('gross-breakdown');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl border-2 border-emerald-400/40 hover:border-emerald-500 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Wallet className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {lang === 'hi' ? 'कुल बची अधिशेष राशि' : 'Total Available Surplus'}
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-900 group-hover:text-emerald-700 transition-colors">
                  ₹{CONSOLIDATED_FESTIVAL_AUDIT.netAvailableSurplus.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'hi' ? `सकल संकलन (₹${CONSOLIDATED_FESTIVAL_AUDIT.grossCollection.toLocaleString('en-IN')}) − कुल व्यय (₹${CONSOLIDATED_FESTIVAL_AUDIT.totalConsolidatedExpenses.toLocaleString('en-IN')})` : `Gross Inflow minus Certified Outflow`}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-600 transition-colors">
                <span>{lang === 'hi' ? 'अधिशेष राशि का विभाजन देखें ↓' : 'View Surplus Breakdown ↓'}</span>
              </span>
            </div>
          </div>

          {/* Card 4: Total Community Contributors */}
          <div className="bg-gradient-to-br from-[#780016] to-[#45000A] text-[#FFFDF7] rounded-3xl border-2 border-[#D4AF37] p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7722]/20 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="w-11 h-11 rounded-2xl bg-[#D4AF37] text-[#5A0010] flex items-center justify-center font-bold">
                  <CheckCircle className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-1 rounded-lg border border-[#D4AF37]/40">
                  {lang === 'hi' ? 'कुल सहयोगी परिवार' : 'Total Contributors'}
                </span>
              </div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400">
                  80 सदस्य
                </div>
                <p className="text-xs text-[#FFFDF7]/80 mt-1">
                  {lang === 'hi' ? '40 ऑनलाइन + 36 नकद + 4 समर्पित भंडारा' : '40 Online + 36 Cash + 4 Bhandara Seva'}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 relative z-10">
              <a
                href="#donors"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FFDF80] hover:text-white transition-colors"
              >
                <span>{lang === 'hi' ? 'पूरी दानदाता सूची देखें' : 'View Full Donors List'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION: DETAILED GRAND BREAKDOWN OF FESTIVAL COLLECTION */}
        <div id="gross-breakdown" className="mb-14 bg-white rounded-3xl border-2 border-[#D4AF37] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2 pb-4 border-b border-stone-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'hi' ? 'सकल कुल संकलन का प्रामाणिक गणित' : 'Verified Gross Collection Math'}</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-[#780016]">
                {lang === 'hi' ? `कुल संकलन ₹${GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')} कैसे बना? (विस्तृत विवरण)` : `How Total Collection ₹${GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')} Was Formed`}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                {lang === 'hi'
                  ? `ऑनलाइन चंदा (40 सदस्य) + नकद चंदा (36 सदस्य) + समर्पित भंडारा सहयोग की पाई-पाई का पारदर्शी समीकरण`
                  : 'Transparent calculation combining Online records, Cash records, and dedicated Bhandara seva.'}
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
                  <span className="text-white text-base sm:text-lg">₹{GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')}</span>
                </div>
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/20">
                  <span className="block text-[10px] text-[#FFDF80] font-sans font-normal">नकद (36)</span>
                  <span className="text-white text-base sm:text-lg">₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}</span>
                </div>
                <Equal className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-amber-400/20 px-3.5 py-2 rounded-xl border border-amber-300/40">
                  <span className="block text-[10px] text-amber-200 font-sans font-normal">चंदा उप-योग</span>
                  <span className="text-[#FFDF80] text-base sm:text-lg">₹{GROSS_COLLECTION_DATA.chandaSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-emerald-500/20 px-3.5 py-2 rounded-xl border border-emerald-400/40">
                  <span className="block text-[10px] text-emerald-200 font-sans font-normal">भंडारा सहयोग</span>
                  <span className="text-emerald-300 text-base sm:text-lg">₹{GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}</span>
                </div>
                <Equal className="w-4 h-4 text-[#D4AF37]" />
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 rounded-xl border-2 border-emerald-300 shadow-lg">
                  <span className="block text-[10px] text-white/90 font-sans font-bold">सकल कुल संकलन</span>
                  <span className="text-white text-lg sm:text-2xl font-serif font-black">₹{GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* 3 Component Breakdown Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Online Chanda */}
              <div
                onClick={() => onOpenAccounting && onOpenAccounting('online')}
                className="bg-stone-50 hover:bg-blue-50/50 rounded-2xl border-2 border-stone-200 hover:border-blue-400 p-5 flex flex-col justify-between cursor-pointer transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-600 bg-white px-2.5 py-1 rounded-md border border-stone-200 flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                      ऑनलाइन चंदा
                    </span>
                    <span className="text-xs text-stone-500 font-bold">40 प्रविष्टियाँ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 group-hover:text-blue-900 mt-1">
                    ₹{GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    कॉलोनी के 40 सदस्यों द्वारा सीधे UPI / QR कोड के माध्यम से समर्पित राशि।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-right">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenAccounting) onOpenAccounting('online');
                    }}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    40 नाम व साक्ष्य देखें →
                  </button>
                </div>
              </div>

              {/* Box 2: Cash Chanda */}
              <div
                onClick={() => onOpenAccounting && onOpenAccounting('cash')}
                className="bg-stone-50 hover:bg-emerald-50/50 rounded-2xl border-2 border-stone-200 hover:border-emerald-400 p-5 flex flex-col justify-between cursor-pointer transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-600 bg-white px-2.5 py-1 rounded-md border border-stone-200 flex items-center gap-1">
                      <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                      नकद चंदा
                    </span>
                    <span className="text-xs text-stone-500 font-bold">32 प्रविष्टियाँ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 group-hover:text-emerald-900 mt-1">
                    ₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    कॉलोनी के 32 सदस्यों द्वारा नकद रसीद व संग्रह द्वारा समर्पित राशि।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-right">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenAccounting) onOpenAccounting('cash');
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900"
                  >
                    32 नाम व साक्ष्य देखें →
                  </button>
                </div>
              </div>

              {/* Box 3: Dedicated Bhandara */}
              <div
                onClick={() => onOpenAccounting && onOpenAccounting('bhandara')}
                className="bg-amber-50/70 hover:bg-amber-100/60 rounded-2xl border-2 border-amber-300 hover:border-amber-500 p-5 flex flex-col justify-between cursor-pointer transition-all shadow-sm group"
              >
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenAccounting) onOpenAccounting('bhandara');
                    }}
                    className="text-xs font-bold text-[#780016] hover:text-[#FF7722]"
                  >
                    4 सहयोगी व साक्ष्य देखें →
                  </button>
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

            {/* Grand Total Master Collection vs Expenditure and Remaining Surplus (₹14,522) */}
            <div className="mt-8 bg-gradient-to-br from-emerald-950 via-[#1E293B] to-stone-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/20 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDF80] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {lang === 'hi' ? 'समेकित अंतिम संतुलन' : 'Consolidated Balance Sheet'}
                  </span>
                  <h4 className="text-xl sm:text-3xl font-serif font-black text-white mt-1.5">
                    {lang === 'hi' ? 'कुल संकलन बनाम कुल खर्च एवं बची हुई राशि' : 'Total Collection vs Expenses & Remaining Surplus'}
                  </h4>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-400/40 px-4 py-2 rounded-2xl text-right shrink-0">
                  <span className="text-[11px] text-emerald-200 block font-sans">खर्च के बाहर उपलब्ध अधिशेष:</span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-emerald-300">₹{CONSOLIDATED_FESTIVAL_AUDIT.netAvailableSurplus.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* 3 Main Summary Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                  <span className="text-xs text-[#FFDF80] block font-sans font-semibold">१. कुल सकल संकलन:</span>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
                    ₹{CONSOLIDATED_FESTIVAL_AUDIT.grossCollection.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1.5 leading-relaxed">
                    42 ऑनलाइन (₹33,919) + 34 नकद (₹27,032) + 4 भंडारा (₹3,700)
                  </p>
                </div>

                <div className="bg-rose-500/15 rounded-2xl p-4 border border-rose-400/30">
                  <span className="text-xs text-rose-200 block font-sans font-semibold">२. कुल प्रमाणित प्रत्यक्ष व्यय:</span>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-rose-300 mt-1">
                    ₹{CONSOLIDATED_FESTIVAL_AUDIT.totalConsolidatedExpenses.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1.5 leading-relaxed">
                    पंडाल/साउंड (₹30,452) + भंडारा राशन (₹14,542) + पूजन/विसर्जन (₹15,135)
                  </p>
                </div>

                <div className="bg-emerald-500/20 rounded-2xl p-4 border-2 border-emerald-400/50 shadow-inner">
                  <span className="text-xs text-emerald-200 block font-sans font-semibold">३. खर्चे के बाहर कुल बची राशि:</span>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-300 mt-1">
                    ₹{CONSOLIDATED_FESTIVAL_AUDIT.netAvailableSurplus.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[11px] text-emerald-100/90 mt-1.5 leading-relaxed font-semibold">
                    सकल संकलन (₹64,651) − कुल वास्तविक खर्च (₹60,129)
                  </p>
                </div>
              </div>

              {/* Exact Transparent Breakdown of Where the ₹4,522 is Located */}
              <div className="bg-black/30 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3 font-sans text-xs sm:text-sm">
                <span className="font-bold text-[#FFDF80] block text-xs uppercase tracking-wider">
                  {lang === 'hi' ? '📌 बची हुई शुद्ध बचत ₹4,522 का स्पष्ट विवरण:' : '📌 Breakdown of Available Surplus (₹4,522):'}
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-200 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>• संग्रहकर्ता सदस्यों के पास सुरक्षित नकद चंदा:</span>
                    <strong className="text-white font-mono text-sm">₹{CONSOLIDATED_FESTIVAL_AUDIT.surplusBreakdown.cashWithOtherCollectors.toLocaleString('en-IN')}</strong>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>• समर्पित भंडारा नकद सहयोग:</span>
                    <strong className="text-white font-mono text-sm">₹{CONSOLIDATED_FESTIVAL_AUDIT.surplusBreakdown.bhandaraCashHeld.toLocaleString('en-IN')}</strong>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>• ऑनलाइन दानदाताओं का अंतर:</span>
                    <strong className="text-emerald-300 font-mono text-sm">+₹{CONSOLIDATED_FESTIVAL_AUDIT.surplusBreakdown.onlineAuditDifference.toLocaleString('en-IN')}</strong>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>• केंद्रीय शेष बनाम बकाया प्रतिपूर्ति समायोजन:</span>
                    <strong className="text-amber-300 font-mono text-sm">-₹128</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-stone-400">
                  <span>* मूल हस्तलिखित वाउचर व पंजिका के आधार पर सत्यापित।</span>
                  <span className="font-bold text-emerald-400">कुल शुद्ध बचत = ₹4,522</span>
                </div>
              </div>
            </div>

            {/* Reconciliation Note */}
            <div className="bg-stone-100/90 rounded-2xl p-4 border border-stone-300 flex items-start gap-3 text-xs text-stone-700 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#780016] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block mb-0.5">लेखा पारदर्शिता:</span>
                पूरे उत्सव का कुल संकलन **₹64,651** (42 ऑनलाइन ₹33,919 + 34 नकद ₹27,032 + 4 भंडारा ₹3,700) है। कुल प्रमाणित प्रत्यक्ष खर्च **₹60,129** (शशि जी खाता ₹38,974 + श्रीवास्तव अंकल पंजिका ₹21,155) होने के उपरांत **₹4,522** की कुल शुद्ध बचत सुरक्षित है।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
