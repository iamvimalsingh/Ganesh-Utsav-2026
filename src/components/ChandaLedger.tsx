import React, { useState, useMemo } from 'react';
import { ONLINE_DONORS_40, CASH_DONORS_32, GROSS_COLLECTION_DATA, DIARY_EVIDENCE_ITEMS, DiaryEvidenceItem } from '../data/festivalData';
import { Search, CheckCircle2, Smartphone, Banknote, Utensils, ZoomIn, HeartHandshake } from 'lucide-react';

interface ChandaLedgerProps {
  lang: 'hi' | 'en';
  onOpenEvidence?: (item: DiaryEvidenceItem) => void;
}

export const ChandaLedger: React.FC<ChandaLedgerProps> = ({ lang, onOpenEvidence }) => {
  const [activeTab, setActiveTab] = useState<'online' | 'cash' | 'bhandara'>('online');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'sNo' | 'amountDesc' | 'amountAsc'>('sNo');

  const onlineDiaryItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-online-part1') || DIARY_EVIDENCE_ITEMS[1];
  const cashDiaryItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-cash-ledger') || DIARY_EVIDENCE_ITEMS[4];
  const bhandaraDiaryItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-bhandara-special') || DIARY_EVIDENCE_ITEMS[3];

  const currentDataset = useMemo(() => {
    if (activeTab === 'online') return ONLINE_DONORS_40;
    if (activeTab === 'cash') return CASH_DONORS_32;
    return GROSS_COLLECTION_DATA.bhandaraBreakdown.map((b, idx) => ({
      sNo: idx + 1,
      nameHi: b.nameHi,
      nameEn: b.nameEn,
      amount: b.amount,
      mode: (b.modeHi === 'ऑनलाइन' ? 'Online' : 'Cash') as 'Online' | 'Cash',
      type: 'chanda' as const,
      roleHi: b.roleHi,
    }));
  }, [activeTab]);

  const filteredDonors = useMemo(() => {
    return currentDataset.filter((donor) => {
      const matchSearch =
        donor.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.sNo.toString().includes(searchTerm);
      return matchSearch;
    }).sort((a, b) => {
      if (sortOrder === 'amountDesc') return b.amount - a.amount;
      if (sortOrder === 'amountAsc') return a.amount - b.amount;
      return a.sNo - b.sNo;
    });
  }, [currentDataset, searchTerm, sortOrder]);

  const onlineTotal = useMemo(() => ONLINE_DONORS_40.reduce((acc, c) => acc + c.amount, 0), []);
  const cashTotal = useMemo(() => CASH_DONORS_32.reduce((acc, c) => acc + c.amount, 0), []);
  const bhandaraTotal = GROSS_COLLECTION_DATA.bhandaraTotal;

  return (
    <section id="donors" className="py-16 md:py-24 bg-[#FFFDF7] text-[#2D1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF7722]/15 text-[#780016] text-xs font-bold border border-[#FF7722]/30">
            <HeartHandshake className="w-4 h-4 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'चंदा एवं सहयोग सूची' : 'Chanda & Contribution Ledgers'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#780016] tracking-tight">
            {lang === 'hi' ? 'सहयोगी परिवार एवं संकलन सूची' : 'Chanda Collection Ledger'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {lang === 'hi'
              ? 'मयूर होम्स कॉलोनी के सभी 80 दानदाताओं व सहयोगियों द्वारा समर्पित कुल ₹64,651 का पारदर्शी विवरण।'
              : 'Public itemized ledger of verified Online, Cash and dedicated Bhandara contributions (Total ₹64,651).'}
          </p>
        </div>

        {/* 3 CATEGORY TABS: ONLINE (42), CASH (34), BHANDARA (4) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center bg-stone-100 p-1.5 rounded-2xl border border-stone-300 text-xs sm:text-sm font-bold shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'online'
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#FFDF80]" />
              <span>{lang === 'hi' ? `ऑनलाइन चंदा (${ONLINE_DONORS_40.length})` : `Online (${ONLINE_DONORS_40.length})`}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'online' ? 'bg-[#FF7722] text-white' : 'bg-stone-200 text-stone-700'}`}>
                ₹{onlineTotal.toLocaleString('en-IN')}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cash')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'cash'
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Banknote className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'hi' ? `नकद चंदा (${CASH_DONORS_32.length})` : `Cash (${CASH_DONORS_32.length})`}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'cash' ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-700'}`}>
                ₹{cashTotal.toLocaleString('en-IN')}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('bhandara')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'bhandara'
                  ? 'bg-[#780016] text-white shadow-md scale-[1.02]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>{lang === 'hi' ? 'समर्पित भंडारा (4)' : 'Bhandara (4)'}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'bhandara' ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-700'}`}>
                ₹{bhandaraTotal.toLocaleString('en-IN')}
              </span>
            </button>
          </div>
        </div>

        {/* Clean Source Voucher Action Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-stone-50 border border-stone-200 rounded-2xl p-4">
          <div>
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">वर्तमान दृश्य:</span>
            <span className="text-base font-serif font-bold text-stone-900">
              {activeTab === 'online' ? `ऑनलाइन चंदा — ${ONLINE_DONORS_40.length} सदस्य (₹${onlineTotal.toLocaleString('en-IN')})` : activeTab === 'cash' ? `नकद चंदा — ${CASH_DONORS_32.length} सदस्य (₹${cashTotal.toLocaleString('en-IN')})` : `समर्पित भंडारा सहयोग — 4 सहयोगी (₹${bhandaraTotal.toLocaleString('en-IN')})`}
            </span>
          </div>

          {onOpenEvidence && (
            <button
              onClick={() => onOpenEvidence(activeTab === 'online' ? onlineDiaryItem : activeTab === 'cash' ? cashDiaryItem : bhandaraDiaryItem)}
              className="px-3.5 py-1.5 bg-[#780016] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>मूल हस्तलिखित पर्ची देखें</span>
            </button>
          )}
        </div>

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

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-3xl border-2 border-[#D4AF37]/40 shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#780016] text-[#FFFDF7] text-xs uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4 w-16 text-center">क्र. / S.No</th>
                <th className="py-3.5 px-6">{lang === 'hi' ? 'सहयोगी / दानदाता का नाम' : 'Member Name'}</th>
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
                  {activeTab === 'online' ? `${ONLINE_DONORS_40.length} ऑनलाइन रिकॉर्ड का कुल योग:` : activeTab === 'cash' ? `${CASH_DONORS_32.length} कैश रिकॉर्ड का कुल योग:` : 'भंडारा विशेष सहयोग कुल योग:'}
                </td>
                <td className="py-4 px-6 text-right text-lg font-serif font-black text-[#780016]">
                  ₹{(activeTab === 'online' ? onlineTotal : activeTab === 'cash' ? cashTotal : bhandaraTotal).toLocaleString('en-IN')}
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
                  <span className="text-[10px] text-stone-500 font-medium">{donor.mode}</span>
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
