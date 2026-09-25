import React from 'react';
import { EXPENSE_DETAILS, CENTRAL_TREASURY_DATA } from '../data/festivalData';
import { Receipt, CheckCircle2, AlertCircle, Sparkles, Building2, ShoppingBag } from 'lucide-react';

interface ExpenseBreakdownProps {
  lang: 'hi' | 'en';
}

export const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ lang }) => {
  return (
    <section id="expenses" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold border border-rose-200">
            <Receipt className="w-4 h-4 text-rose-700" />
            <span>{lang === 'hi' ? 'पाई-पाई का प्रामाणिक व्यय' : 'Audited Itemized Expenses'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'व्यय विवरण एवं विक्रेता भुगतान' : 'Expenditure Breakdown'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'उत्सव के आयोजन, पूजन सामग्री, प्रसाद, टेंट, साउंड, लाइटिंग एवं विसर्जन में हुए वास्तविक खर्च का विवरण।'
              : 'Detailed breakdown of expenses incurred for pooja rituals, prasad, pandal, audio, lights & logistics.'}
          </p>
        </div>

        {/* 2 Primary Expense Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {EXPENSE_DETAILS.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#780016]/10 text-[#780016] flex items-center justify-center font-bold">
                      {exp.id === 'daily-pooja-samagri' ? <ShoppingBag className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                        {lang === 'hi' ? exp.categoryHi : exp.categoryEn}
                      </h3>
                      <span className="text-xs text-stone-500">
                        {exp.items.length} {lang === 'hi' ? 'मदों में विस्तृत' : 'itemized entries'}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-serif font-black text-[#780016]">
                    ₹{exp.totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {exp.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF7722] shrink-0 mt-0.5" />
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
              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-between items-center text-sm font-bold text-stone-900 bg-stone-100 p-3.5 rounded-xl">
                <span>{lang === 'hi' ? 'उप-योग:' : 'Subtotal:'}</span>
                <span className="text-base font-serif font-black text-[#780016]">
                  ₹{exp.totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Settlements & Final Net Savings Card */}
        <div className="bg-gradient-to-r from-stone-900 via-[#45000A] to-stone-900 text-[#FFFDF7] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'कुल व्यय योग' : 'Total Direct Outflow'}
              </span>
              <div className="text-3xl font-serif font-bold text-white">
                ₹{CENTRAL_TREASURY_DATA.totalOutflow.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'hi' ? 'पूजा ₹8,452 + टेंट/साउंड ₹26,451' : 'Rituals ₹8,452 + Infrastructure ₹26,451'}
              </p>
            </div>

            <div className="border-y md:border-y-0 md:border-x border-stone-700 py-4 md:py-0 md:px-6 space-y-2">
              <span className="text-xs font-bold text-[#FFDF80] uppercase tracking-wider block">
                {lang === 'hi' ? 'लंबित दायित्व व समायोजन' : 'Pending Clearance & Adjustments'}
              </span>
              <div className="flex justify-between text-xs sm:text-sm text-stone-300">
                <span>{lang === 'hi' ? 'टेंट शेष भुगतान:' : 'Pending Tent Settlement:'}</span>
                <span className="font-bold text-amber-400">-₹3,000</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-stone-300">
                <span>{lang === 'hi' ? 'दुर्गा सफाई समायोजन:' : 'Durga Cleaning Adjustment:'}</span>
                <span className="font-bold text-amber-400">-₹300</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'अंतिम शुद्ध बचत (कॉलोनी कोष)' : 'Final Net Savings Reserve'}
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400">
                ₹{CENTRAL_TREASURY_DATA.finalNetSavings.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'hi' ? 'समस्त भुगतानों के उपरांत सुरक्षित शेष' : 'Net unencumbered colony reserve'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
