import React from 'react';
import { EXPENSE_DETAILS, CONSOLIDATED_FESTIVAL_AUDIT, DIARY_EVIDENCE_ITEMS, DiaryEvidenceItem } from '../data/festivalData';
import { Receipt, CheckCircle2, Building2, ShoppingBag, Utensils, ZoomIn, ShieldCheck } from 'lucide-react';

interface ExpenseBreakdownProps {
  lang: 'hi' | 'en';
  onOpenEvidence?: (item: DiaryEvidenceItem) => void;
}

export const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ lang, onOpenEvidence }) => {
  const expenseEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-expenses-master') || DIARY_EVIDENCE_ITEMS[0];

  return (
    <section id="expenses" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold border border-rose-200">
            <Receipt className="w-4 h-4 text-rose-700" />
            <span>{lang === 'hi' ? 'सकल प्रमाणित उत्सव व्यय' : 'Certified Festival Expenditure'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'व्यय विवरण एवं भुगतान पंजिका' : 'Expenditure Breakdown'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'उत्सव के पंडाल, टेंट, साउंड, लाइटिंग, भंडारा महाप्रसाद, पूजन सामग्री एवं विसर्जन में हुआ कुल प्रमाणित खर्च।'
              : 'Complete itemized breakdown of expenses incurred across all festival operational categories.'}
          </p>
        </div>

        {/* 3 Primary Expense Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {EXPENSE_DETAILS.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl border-2 border-stone-200 p-5 sm:p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#780016]/10 text-[#780016] flex items-center justify-center font-bold">
                      {idx === 0 ? <Building2 className="w-4 h-4" /> : idx === 1 ? <Utensils className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
                        {lang === 'hi' ? exp.categoryHi : exp.categoryEn}
                      </h3>
                      <span className="text-[11px] text-stone-500">
                        {exp.items.length} {lang === 'hi' ? 'मदों में विस्तृत' : 'itemized entries'}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-serif font-black text-[#780016] shrink-0">
                    ₹{exp.totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                  {exp.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7722] shrink-0 mt-0.5" />
                        <span className="text-stone-800 font-medium">
                          {lang === 'hi' ? item.nameHi : item.nameEn}
                        </span>
                      </div>
                      <span className="font-bold text-stone-900 font-mono shrink-0">
                        ₹{item.amount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtotal Banner */}
              <div className="mt-4 pt-3 border-t border-stone-200 flex justify-between items-center text-xs sm:text-sm font-bold text-stone-900 bg-stone-100 p-3 rounded-xl">
                <span>{lang === 'hi' ? 'श्रेणी उप-योग:' : 'Subtotal:'}</span>
                <span className="font-serif font-black text-[#780016] text-base">
                  ₹{exp.totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Master Consolidated Outflow vs Surplus Card */}
        <div className="bg-gradient-to-r from-stone-900 via-[#45000A] to-stone-900 text-[#FFFDF7] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'कुल सकल संकलन' : 'Total Gross Collection'}
              </span>
              <div className="text-3xl font-serif font-black text-white">
                ₹{CONSOLIDATED_FESTIVAL_AUDIT.grossCollection.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'hi' ? '42 ऑनलाइन + 34 नकद + 4 भंडारा' : '80 community contributors'}
              </p>
            </div>

            <div className="border-y md:border-y-0 md:border-x border-stone-700 py-4 md:py-0 md:px-6 space-y-2">
              <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                {lang === 'hi' ? 'कुल प्रमाणित व्यय' : 'Total Direct Outflow'}
              </span>
              <div className="text-3xl font-serif font-black text-rose-300">
                ₹{CONSOLIDATED_FESTIVAL_AUDIT.totalConsolidatedExpenses.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-stone-400">
                {lang === 'hi' ? 'टेंट ₹30,452 + भंडारा ₹14,542 + पूजा ₹15,135' : 'All 3 direct festival categories'}
              </p>
            </div>

            <div className="text-center md:text-right">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'कुल बची अधिशेष राशि (शुद्ध बचत)' : 'Total Remaining Surplus'}
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400">
                ₹{CONSOLIDATED_FESTIVAL_AUDIT.netAvailableSurplus.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-emerald-200/80 mt-1">
                {lang === 'hi' ? 'संकलन ₹64,651 − कुल व्यय ₹60,129' : 'Gross collection minus certified expenses'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
