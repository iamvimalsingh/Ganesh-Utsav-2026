import React, { useState, useMemo } from 'react';
import { ONLINE_DONORS_40, CASH_DONORS_32, ONLINE_AUDIT_INFO, DonorRecord } from '../data/festivalData';
import { Search, ShieldAlert, CheckCircle2, ArrowUpDown, Smartphone, Banknote } from 'lucide-react';

interface ChandaLedgerProps {
  lang: 'hi' | 'en';
}

export const ChandaLedger: React.FC<ChandaLedgerProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'online' | 'cash'>('online');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'sNo' | 'amountDesc' | 'amountAsc'>('sNo');

  const currentDataset = activeTab === 'online' ? ONLINE_DONORS_40 : CASH_DONORS_32;

  const filteredDonors = useMemo(() => {
    return currentDataset.filter((donor) => {
      const matchSearch =
        donor.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.sNo.toString().includes(searchTerm);
      return matchSearch;
    }).sort((a, b) => {
      if (sortOrder === 'amountDesc') {
        return b.amount - a.amount;
      }
      if (sortOrder === 'amountAsc') {
        return a.amount - b.amount;
      }
      return a.sNo - b.sNo;
    });
  }, [currentDataset, searchTerm, sortOrder]);

  const onlineTotal = useMemo(() => ONLINE_DONORS_40.reduce((acc, c) => acc + c.amount, 0), []);
  const cashTotal = useMemo(() => CASH_DONORS_32.reduce((acc, c) => acc + c.amount, 0), []);

  return (
    <section id="donors" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF7722]/15 text-[#780016] text-xs font-bold border border-[#FF7722]/30">
            <CheckCircle2 className="w-4 h-4 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'चंदा एवं सहयोग विवरण' : 'Chanda & Contribution Ledgers'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'चंदा संकलन सूची' : 'Chanda Collection Ledger'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'कॉलोनीवासियों द्वारा समर्पित ऑनलाइन एवं नकद चंदे का पूर्ण पारदर्शी विवरण।'
              : 'Public itemized ledger of verified Online and Cash contributions.'}
          </p>
        </div>

        {/* PRIMARY TWO CATEGORY TABS: ONLINE CHANDA & CASH CHANDA */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-stone-100 p-1.5 rounded-2xl border border-stone-300 text-xs sm:text-base font-bold shadow-sm">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-5 py-3 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'online'
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#FFDF80]" />
              <span>{lang === 'hi' ? 'ऑनलाइन चंदा (40 सदस्य)' : 'Online Chanda (40)'}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'online' ? 'bg-[#FF7722] text-white' : 'bg-stone-200 text-stone-700'}`}>
                ₹{onlineTotal.toLocaleString('en-IN')}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cash')}
              className={`px-5 py-3 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'cash'
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Banknote className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'hi' ? 'कैश चंदा (32 सदस्य)' : 'Cash Chanda (32)'}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'cash' ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-700'}`}>
                ₹{cashTotal.toLocaleString('en-IN')}
              </span>
            </button>
          </div>
        </div>

        {/* ONLINE CHANDA DISCREPANCY AUDIT MOMENT (Shown only on Online Tab) */}
        {activeTab === 'online' && (
          <div className="mb-8 bg-gradient-to-r from-amber-50 via-[#FFF9EE] to-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#780016] text-[#FFDF80] flex items-center justify-center shrink-0 shadow">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-3 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-2">
                  <h3 className="text-base font-serif font-bold text-[#780016]">
                    {lang === 'hi' ? 'ऑनलाइन चंदा लेखा सत्यापन' : 'Online Chanda Audit Note'}
                  </h3>
                  <span className="text-[11px] font-semibold text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded">
                    {lang === 'hi' ? 'अंतर: +₹950' : 'Difference: +₹950'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block">डायरी में लिखा उप-योग:</span>
                    <span className="text-base font-serif font-bold text-[#780016]">₹30,769</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-emerald-300">
                    <span className="text-emerald-800 block">40 व्यक्तिगत रिकॉर्ड का सत्यापित योग:</span>
                    <span className="text-base font-serif font-bold text-emerald-700">₹31,719</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-amber-300">
                    <span className="text-amber-900 block">अंतर (सत्यापित योग &gt; लिखित):</span>
                    <span className="text-base font-serif font-bold text-amber-700">+₹950</span>
                  </div>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  "40 व्यक्तिगत ऑनलाइन चंदा रिकॉर्ड का योग ₹31,719 है, जबकि डायरी में लिखा गया उप-योग ₹30,769 है। दोनों आंकड़े स्रोत के अनुसार सुरक्षित रखे गए हैं।"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CASH CHANDA NOTICE (Shown only on Cash Tab) */}
        {activeTab === 'cash' && (
          <div className="mb-8 bg-emerald-50 border border-emerald-300 rounded-3xl p-5 sm:p-6 shadow-sm flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                {lang === 'hi' ? 'सत्यापित नकद चंदा सूची' : 'Verified Cash Chanda Ledger'}
              </span>
              <h3 className="text-xl font-serif font-bold text-emerald-950 mt-0.5">
                {lang === 'hi' ? 'कुल कैश चंदा: ₹27,221' : 'Total Cash Chanda: ₹27,221'}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {lang === 'hi' ? '32 सदस्यों द्वारा नकद माध्यम से प्राप्त कुल सहयोग।' : 'Consolidated cash contributions received from 32 members.'}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl sm:text-3xl font-serif font-black text-emerald-800">
                ₹27,221
              </span>
            </div>
          </div>
        )}

        {/* Search & Sort Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/50 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search by Name */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'hi' ? 'नाम से खोजें...' : 'Search by name...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#780016] bg-stone-50/60"
            />
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'sNo' | 'amountDesc' | 'amountAsc')}
              className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 bg-white focus:outline-none"
            >
              <option value="sNo">{lang === 'hi' ? 'क्रमांक अनुसार (1 to N)' : 'By Serial No'}</option>
              <option value="amountDesc">{lang === 'hi' ? 'राशि: अधिकतम पहले' : 'Amount: High to Low'}</option>
              <option value="amountAsc">{lang === 'hi' ? 'राशि: न्यूनतम पहले' : 'Amount: Low to High'}</option>
            </select>
          </div>
        </div>

        {/* Donor Count Banner */}
        <div className="flex justify-between items-center text-xs text-stone-500 mb-3 px-1">
          <span>
            {lang === 'hi' ? `प्रदर्शित: ${filteredDonors.length} सदस्य` : `Showing: ${filteredDonors.length} members`}
          </span>
          <span className="font-bold text-[#780016]">
            {activeTab === 'online' ? 'सत्यापित ऑनलाइन योग: ₹31,719' : 'सत्यापित कैश योग: ₹27,221'}
          </span>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-3xl border-2 border-[#D4AF37]/40 shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#780016] text-[#FFFDF7] text-xs uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4 w-16 text-center">क्र. / S.No</th>
                <th className="py-3.5 px-6">{lang === 'hi' ? 'दानदाता का नाम' : 'Member Name'}</th>
                <th className="py-3.5 px-4">{lang === 'hi' ? 'माध्यम' : 'Mode'}</th>
                <th className="py-3.5 px-6 text-right">{lang === 'hi' ? 'सहयोग राशि' : 'Amount (₹)'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans">
              {filteredDonors.map((donor) => (
                <tr
                  key={donor.sNo}
                  className="hover:bg-amber-50/50 transition-colors group"
                >
                  <td className="py-3 px-4 text-center font-bold text-stone-400 group-hover:text-[#780016]">
                    #{donor.sNo}
                  </td>
                  <td className="py-3 px-6">
                    <span className="font-serif font-bold text-stone-900 group-hover:text-[#780016] text-base">
                      {lang === 'hi' ? donor.nameHi : donor.nameEn}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        donor.mode === 'Online'
                          ? 'bg-[#FF7722]/15 text-[#FF7722] border border-[#FF7722]/30'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {donor.mode}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right font-serif font-bold text-stone-900 group-hover:text-[#780016] text-base">
                    ₹{donor.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-stone-50 border-t-2 border-[#D4AF37]/50 font-bold">
                <td colSpan={3} className="py-4 px-6 text-right text-stone-700 text-sm">
                  {activeTab === 'online' ? '40 ऑनलाइन रिकॉर्ड का कुल सत्यापित योग:' : '32 कैश रिकॉर्ड का कुल योग:'}
                </td>
                <td className="py-4 px-6 text-right text-lg font-serif font-black text-[#780016]">
                  ₹{(activeTab === 'online' ? onlineTotal : cashTotal).toLocaleString('en-IN')}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile Cards List View */}
        <div className="md:hidden space-y-2.5">
          {filteredDonors.map((donor) => (
            <div
              key={donor.sNo}
              className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#780016]/10 text-[#780016] flex items-center justify-center text-xs font-bold shrink-0">
                  #{donor.sNo}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    {lang === 'hi' ? donor.nameHi : donor.nameEn}
                  </h4>
                  <span className="text-[10px] text-stone-500 font-medium">{donor.mode} Chanda</span>
                </div>
              </div>

              <div className="text-right font-serif font-bold text-[#780016] text-base">
                ₹{donor.amount.toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
