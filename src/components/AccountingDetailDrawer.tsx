import React, { useState, useMemo } from 'react';
import {
  X,
  Smartphone,
  Banknote,
  Utensils,
  ShieldCheck,
  Search,
  ArrowRight,
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  AlertCircle,
  Sparkles,
  ChevronRight,
  Plus,
  Equal,
  ZoomIn,
  Wallet,
  Clock,
  Layers,
  Info
} from 'lucide-react';
import {
  GROSS_COLLECTION_DATA,
  ONLINE_DONORS_40,
  CASH_DONORS_32,
  CENTRAL_TREASURY_DATA,
  ONLINE_AUDIT_INFO,
  EXPENSE_DETAILS,
  DIARY_EVIDENCE_ITEMS,
  DiaryEvidenceItem
} from '../data/festivalData';

export type DrilldownTab = 'overview' | 'online' | 'cash' | 'bhandara' | 'central' | 'expenses';

interface AccountingDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: DrilldownTab;
  lang: 'hi' | 'en';
  onOpenEvidence?: (evidenceItem: DiaryEvidenceItem) => void;
}

export const AccountingDetailDrawer: React.FC<AccountingDetailDrawerProps> = ({
  isOpen,
  onClose,
  initialTab = 'overview',
  lang,
  onOpenEvidence,
}) => {
  const [currentTab, setCurrentTab] = useState<DrilldownTab>(initialTab);
  const [onlineSearch, setOnlineSearch] = useState('');
  const [cashSearch, setCashSearch] = useState('');
  const [onlineSort, setOnlineSort] = useState<'sNo' | 'amountDesc' | 'amountAsc'>('sNo');
  const [cashSort, setCashSort] = useState<'sNo' | 'amountDesc' | 'amountAsc'>('sNo');

  // Sync tab when prop changes
  React.useEffect(() => {
    if (isOpen && initialTab) {
      setCurrentTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Filtered Online Donors (40 records)
  const filteredOnlineDonors = useMemo(() => {
    return ONLINE_DONORS_40.filter((d) => {
      const match =
        d.nameHi.toLowerCase().includes(onlineSearch.toLowerCase()) ||
        d.nameEn.toLowerCase().includes(onlineSearch.toLowerCase()) ||
        d.sNo.toString().includes(onlineSearch);
      return match;
    }).sort((a, b) => {
      if (onlineSort === 'amountDesc') return b.amount - a.amount;
      if (onlineSort === 'amountAsc') return a.amount - b.amount;
      return a.sNo - b.sNo;
    });
  }, [onlineSearch, onlineSort]);

  // Filtered Cash Donors (32 records)
  const filteredCashDonors = useMemo(() => {
    return CASH_DONORS_32.filter((d) => {
      const match =
        d.nameHi.toLowerCase().includes(cashSearch.toLowerCase()) ||
        d.nameEn.toLowerCase().includes(cashSearch.toLowerCase()) ||
        d.sNo.toString().includes(cashSearch);
      return match;
    }).sort((a, b) => {
      if (cashSort === 'amountDesc') return b.amount - a.amount;
      if (cashSort === 'amountAsc') return a.amount - b.amount;
      return a.sNo - b.sNo;
    });
  }, [cashSearch, cashSort]);

  if (!isOpen) return null;

  const onlineDiaryEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-online-part1') || DIARY_EVIDENCE_ITEMS[1];
  const cashDiaryEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-cash-ledger') || DIARY_EVIDENCE_ITEMS[4];
  const bhandaraDiaryEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-bhandara-special') || DIARY_EVIDENCE_ITEMS[3];
  const centralSummaryEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-central-summary') || DIARY_EVIDENCE_ITEMS[0];
  const expensesEvidenceItem = DIARY_EVIDENCE_ITEMS.find((i) => i.id === 'diary-expenses-master') || DIARY_EVIDENCE_ITEMS[5];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-4xl h-full bg-[#FFFDF7] text-[#2D1B10] shadow-2xl flex flex-col z-10 overflow-hidden border-l-2 border-[#D4AF37] animate-slide-in-right">
        
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-[#780016] via-[#5A0010] to-[#780016] text-[#FFFDF7] p-5 sm:p-6 flex items-center justify-between border-b-2 border-[#D4AF37] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF7722] to-amber-300 text-[#5A0010] flex items-center justify-center font-bold text-xl shadow-md">
              ₹
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#FFDF80] bg-white/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                  {lang === 'hi' ? 'लेखा सत्यापन व स्रोत विवरण' : 'Financial Drill-down & Source Evidence'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-0.5">
                {lang === 'hi' ? '₹62,640 का पूरा विवरण' : '₹62,640 Grand Total Audit'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="बंद करें"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#FFDF80] hover:text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="bg-[#FFFBF5] border-b border-stone-200 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setCurrentTab('overview')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'overview'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#FFDF80]" />
            <span>{lang === 'hi' ? 'सकल विवरण (₹62,640)' : 'Overview (₹62,640)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('online')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'online'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-500" />
            <span>{lang === 'hi' ? 'ऑनलाइन चंदा (₹31,719)' : 'Online (₹31,719)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('cash')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'cash'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Banknote className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'hi' ? 'कैश चंदा (₹27,221)' : 'Cash (₹27,221)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('bhandara')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'bhandara'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>{lang === 'hi' ? 'भंडारा सहयोग (₹3,700)' : 'Bhandara (₹3,700)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('central')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'central'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Wallet className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'केंद्रीय खाता (₹40,024)' : 'Central Account'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('expenses')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentTab === 'expenses'
                ? 'bg-[#780016] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Receipt className="w-3.5 h-3.5 text-rose-600" />
            <span>{lang === 'hi' ? 'केंद्रीय व्यय (₹34,903)' : 'Expenses'}</span>
          </button>
        </div>

        {/* Drawer Body Area with Tab Views */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* ============================================================ */}
          {/* TAB 1: OVERVIEW — "₹62,640 का पूरा विवरण" */}
          {/* ============================================================ */}
          {currentTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Grand Total Hero Display */}
              <div className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 rounded-3xl border-2 border-emerald-500/60 p-6 sm:p-8 text-center shadow-md relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{lang === 'hi' ? 'सार्वजनिक प्रमाणित सकल कुल संकलन' : 'Official Verified Public Collection'}</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  {lang === 'hi' ? 'श्री गणेश उत्सव 2026 — कुल संग्रह' : 'Shree Ganesh Utsav 2026 — Total Collection'}
                </h3>
                <div className="text-4xl sm:text-6xl font-serif font-black text-emerald-950 mt-1 mb-2">
                  ₹{GROSS_COLLECTION_DATA.grossTotal.toLocaleString('en-IN')}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl mx-auto font-sans">
                  {lang === 'hi'
                    ? 'कॉलोनी के सभी 40 ऑनलाइन दानदाताओं, 32 नकद प्रविष्टियों एवं 4 समर्पित भंडारा सहयोगियों का पूर्ण वास्तविक संकलन।'
                    : 'Complete verified sum of 40 online records, 32 cash donations, and 4 dedicated bhandara contributors.'}
                </p>
              </div>

              {/* Exact Calculation Flow Box */}
              <div className="bg-[#5A0010] text-white rounded-3xl border-2 border-[#D4AF37] p-5 sm:p-7 shadow-xl">
                <div className="text-center mb-4">
                  <span className="text-[11px] font-bold text-[#FFDF80] uppercase tracking-wider bg-white/10 px-3 py-0.5 rounded-full border border-white/20">
                    {lang === 'hi' ? 'सटीक गणितीय समीकरण' : 'Exact Mathematical Equation'}
                  </span>
                  <h4 className="text-lg sm:text-2xl font-serif font-bold text-white mt-1.5">
                    {lang === 'hi' ? 'कुल संग्रह ₹62,640 कैसे बना?' : 'How ₹62,640 Total Was Calculated'}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 text-center font-mono text-sm sm:text-base font-bold">
                  <div className="bg-white/10 p-3 rounded-2xl border border-white/20 min-w-[130px]">
                    <span className="block text-[11px] text-[#FFDF80] font-sans font-normal">ऑनलाइन चंदा (40)</span>
                    <span className="text-white text-lg sm:text-xl">₹31,719</span>
                  </div>

                  <Plus className="w-5 h-5 text-[#D4AF37]" />

                  <div className="bg-white/10 p-3 rounded-2xl border border-white/20 min-w-[130px]">
                    <span className="block text-[11px] text-[#FFDF80] font-sans font-normal">नकद चंदा (32)</span>
                    <span className="text-white text-lg sm:text-xl">₹27,221</span>
                  </div>

                  <Equal className="w-5 h-5 text-[#D4AF37]" />

                  <div className="bg-amber-400/20 p-3 rounded-2xl border border-amber-300/40 min-w-[130px]">
                    <span className="block text-[11px] text-amber-200 font-sans font-normal">सामान्य चंदा</span>
                    <span className="text-[#FFDF80] text-lg sm:text-xl">₹58,940</span>
                  </div>

                  <Plus className="w-5 h-5 text-[#D4AF37]" />

                  <div className="bg-emerald-500/20 p-3 rounded-2xl border border-emerald-400/40 min-w-[140px]">
                    <span className="block text-[11px] text-emerald-200 font-sans font-normal">अतिरिक्त भंडारा</span>
                    <span className="text-emerald-300 text-lg sm:text-xl">₹3,700</span>
                  </div>

                  <Equal className="w-5 h-5 text-[#D4AF37]" />

                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-3.5 rounded-2xl border-2 border-emerald-300 min-w-[150px] shadow-lg">
                    <span className="block text-[11px] text-white/90 font-sans font-bold">कुल संग्रह</span>
                    <span className="text-white text-xl sm:text-2xl font-serif font-black">₹62,640</span>
                  </div>
                </div>
              </div>

              {/* 3 Clickable Direct Source Drilldown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1: Online */}
                <div
                  onClick={() => setCurrentTab('online')}
                  className="bg-white rounded-3xl border-2 border-blue-200 hover:border-blue-500 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                        <Smartphone className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        40 सदस्य
                      </span>
                    </div>
                    <span className="text-xs text-stone-500 font-semibold block">1. ऑनलाइन चंदा</span>
                    <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">
                      ₹{GROSS_COLLECTION_DATA.onlineChandaTotal.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-stone-600 mt-2">
                      40 ऑनलाइन दानदाताओं की सत्यापित सूची व हस्तलिखित डायरी पृष्ठ।
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-900">
                    <span>[सूची व साक्ष्य देखें]</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card 2: Cash */}
                <div
                  onClick={() => setCurrentTab('cash')}
                  className="bg-white rounded-3xl border-2 border-emerald-200 hover:border-emerald-500 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        <Banknote className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        32 प्रविष्टियाँ
                      </span>
                    </div>
                    <span className="text-xs text-stone-500 font-semibold block">2. नकद चंदा</span>
                    <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">
                      ₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-stone-600 mt-2">
                      32 नकद चंदा प्रविष्टियों का सार्वजनिक ब्योरा व मूल कैश रजिस्टर।
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                    <span>[सूची व साक्ष्य देखें]</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card 3: Bhandara */}
                <div
                  onClick={() => setCurrentTab('bhandara')}
                  className="bg-white rounded-3xl border-2 border-amber-200 hover:border-amber-500 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-amber-100 text-[#FF7722] flex items-center justify-center font-bold">
                        <Utensils className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        4 सहयोगी
                      </span>
                    </div>
                    <span className="text-xs text-stone-500 font-semibold block">3. अतिरिक्त भंडारा सहयोग</span>
                    <div className="text-2xl sm:text-3xl font-serif font-black text-[#780016] mt-1">
                      ₹{GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-stone-600 mt-2">
                      ज्योति जी, सुमन जी, डॉ. आशीष एवं संतोष जी / गुड्डू भैया का विवरण।
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-[#780016]">
                    <span>[सूची व साक्ष्य देखें]</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Navigation to Central Account & Expenses */}
              <div className="bg-stone-50 rounded-2xl border border-stone-300 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <Info className="w-4 h-4 text-[#780016] shrink-0" />
                  <span>
                    शशि जी के केंद्रीय खाते में दर्ज आवक (₹40,024) व व्यय (₹34,903) का अलग विवरण भी उपलब्ध है।
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentTab('central')}
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg font-bold text-[#780016] whitespace-nowrap"
                  >
                    केंद्रीय खाता →
                  </button>
                  <button
                    onClick={() => setCurrentTab('expenses')}
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg font-bold text-rose-700 whitespace-nowrap"
                  >
                    व्यय विवरण →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 2: ONLINE CHANDA — 40 Records & ₹950 Discrepancy Banner */}
          {/* ============================================================ */}
          {currentTab === 'online' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header & Source Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[11px] font-bold border border-blue-200">
                      ऑनलाइन संकलन
                    </span>
                    <span className="text-xs text-stone-500 font-bold">40 सदस्य</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#780016] mt-1">
                    ऑनलाइन चंदा — 40 सदस्य
                  </h3>
                </div>

                {onOpenEvidence && (
                  <button
                    onClick={() => onOpenEvidence(onlineDiaryEvidenceItem)}
                    className="px-4 py-2 bg-gradient-to-r from-[#780016] to-[#5A0010] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#D4AF37]/50"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>मूल ऑनलाइन चंदा अभिलेख देखें</span>
                  </button>
                )}
              </div>

              {/* Verified Sum vs Written Subtotal Transparency Banner */}
              <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-[#FF7722]" />
                    पारदर्शी लेखा सत्यापन (Mathematical Audit)
                  </span>
                  <span className="text-[11px] font-semibold text-stone-600 bg-white px-2 py-0.5 rounded border border-amber-200">
                    दोनों आंकड़े संरक्षित
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-3 rounded-xl border border-emerald-300 shadow-xs">
                    <span className="text-[11px] text-emerald-800 font-bold block mb-0.5">
                      40 व्यक्तिगत रिकॉर्ड का सत्यापित योग:
                    </span>
                    <span className="text-2xl font-serif font-black text-emerald-700">
                      ₹{ONLINE_AUDIT_INFO.verifiedDonorTotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-300 shadow-xs">
                    <span className="text-[11px] text-stone-600 font-bold block mb-0.5">
                      डायरी में लिखा उप-योग:
                    </span>
                    <span className="text-2xl font-serif font-black text-[#780016]">
                      ₹{ONLINE_AUDIT_INFO.diaryWrittenTotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-amber-400 shadow-xs">
                    <span className="text-[11px] text-amber-900 font-bold block mb-0.5">
                      अंतर (Discrepancy):
                    </span>
                    <span className="text-2xl font-serif font-black text-amber-700">
                      +₹{ONLINE_AUDIT_INFO.difference.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-sans bg-white p-2.5 rounded-lg border border-amber-200/80">
                  {lang === 'hi' ? ONLINE_AUDIT_INFO.explanationHi : ONLINE_AUDIT_INFO.explanationEn}
                </p>
              </div>

              {/* Search & Sorting Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={lang === 'hi' ? 'नाम या क्रमांक से खोजें...' : 'Search by name or S.No...'}
                    value={onlineSearch}
                    onChange={(e) => setOnlineSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#780016]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
                  <span className="text-stone-500 font-semibold">क्रम:</span>
                  <select
                    value={onlineSort}
                    onChange={(e) => setOnlineSort(e.target.value as any)}
                    className="bg-white border border-stone-300 rounded-xl px-2.5 py-1 text-xs font-semibold focus:outline-none"
                  >
                    <option value="sNo">क्रमानुसार (1-40)</option>
                    <option value="amountDesc">राशि: अधिक से कम</option>
                    <option value="amountAsc">राशि: कम से अधिक</option>
                  </select>
                </div>
              </div>

              {/* Itemized 40 Donor Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 border-b border-stone-200 font-bold">
                      <th className="py-2.5 px-3 text-center w-14">क्रम</th>
                      <th className="py-2.5 px-3">दानदाता का नाम</th>
                      <th className="py-2.5 px-3 text-center">माध्यम</th>
                      <th className="py-2.5 px-3 text-right">राशि</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredOnlineDonors.map((donor) => (
                      <tr key={donor.sNo} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-2.5 px-3 text-center font-bold text-stone-500">#{donor.sNo}</td>
                        <td className="py-2.5 px-3 font-bold text-stone-900">
                          {lang === 'hi' ? donor.nameHi : donor.nameEn}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                            Online
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right font-serif font-black text-[#780016]">
                          ₹{donor.amount.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50/90 font-bold border-t-2 border-emerald-400 text-emerald-950">
                      <td colSpan={3} className="py-3 px-3">40 ऑनलाइन रिकॉर्ड्स का सत्यापित कुल योग:</td>
                      <td className="py-3 px-3 text-right font-serif font-black text-emerald-900 text-base">
                        ₹{ONLINE_AUDIT_INFO.verifiedDonorTotal.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 3: CASH CHANDA — 32 Public Records */}
          {/* ============================================================ */}
          {currentTab === 'cash' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header & Source Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold border border-emerald-200">
                      नकद संकलन
                    </span>
                    <span className="text-xs text-stone-500 font-bold">32 प्रविष्टियाँ</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#780016] mt-1">
                    कैश चंदा — 32 प्रविष्टियाँ
                  </h3>
                </div>

                {onOpenEvidence && (
                  <button
                    onClick={() => onOpenEvidence(cashDiaryEvidenceItem)}
                    className="px-4 py-2 bg-gradient-to-r from-[#780016] to-[#5A0010] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#D4AF37]/50"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>मूल कैश पृष्ठ देखें</span>
                  </button>
                )}
              </div>

              {/* Summary Card */}
              <div className="bg-emerald-50/80 rounded-2xl border border-emerald-300 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-900 block">
                    सार्वजनिक नकद संकलन (Consolidated Cash Chanda)
                  </span>
                  <p className="text-xs text-stone-600 mt-0.5">
                    मयूर होम्स कॉलोनी के 32 सदस्यों द्वारा समर्पित नकद चंदे का पूर्ण पारदर्शी रिकॉर्ड।
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-stone-500 font-semibold block">कुल नकद योग:</span>
                  <span className="text-3xl font-serif font-black text-emerald-950">
                    ₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Search & Sorting Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={lang === 'hi' ? 'नाम या क्रमांक से खोजें...' : 'Search cash donors...'}
                    value={cashSearch}
                    onChange={(e) => setCashSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#780016]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
                  <span className="text-stone-500 font-semibold">क्रम:</span>
                  <select
                    value={cashSort}
                    onChange={(e) => setCashSort(e.target.value as any)}
                    className="bg-white border border-stone-300 rounded-xl px-2.5 py-1 text-xs font-semibold focus:outline-none"
                  >
                    <option value="sNo">क्रमानुसार (1-32)</option>
                    <option value="amountDesc">राशि: अधिक से कम</option>
                    <option value="amountAsc">राशि: कम से अधिक</option>
                  </select>
                </div>
              </div>

              {/* Itemized 32 Donor Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 border-b border-stone-200 font-bold">
                      <th className="py-2.5 px-3 text-center w-14">क्रम</th>
                      <th className="py-2.5 px-3">नाम</th>
                      <th className="py-2.5 px-3 text-center">माध्यम</th>
                      <th className="py-2.5 px-3 text-right">राशि</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredCashDonors.map((donor) => (
                      <tr key={donor.sNo} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2.5 px-3 text-center font-bold text-stone-500">#{donor.sNo}</td>
                        <td className="py-2.5 px-3 font-bold text-stone-900">
                          {lang === 'hi' ? donor.nameHi : donor.nameEn}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                            Cash
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right font-serif font-black text-[#780016]">
                          ₹{donor.amount.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50/90 font-bold border-t-2 border-emerald-400 text-emerald-950">
                      <td colSpan={3} className="py-3 px-3">32 नकद प्रविष्टियों का कुल योग:</td>
                      <td className="py-3 px-3 text-right font-serif font-black text-emerald-900 text-base">
                        ₹{GROSS_COLLECTION_DATA.cashChandaTotal.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 4: ADDITIONAL BHANDARA — 4 Contributors (₹3,700) */}
          {/* ============================================================ */}
          {currentTab === 'bhandara' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header & Source Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold border border-amber-300">
                      समर्पित भंडारा सेवा
                    </span>
                    <span className="text-xs text-stone-500 font-bold">4 प्रविष्टियाँ</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#780016] mt-1">
                    अतिरिक्त भंडारा सहयोग — ₹3,700
                  </h3>
                </div>

                {onOpenEvidence && (
                  <button
                    onClick={() => onOpenEvidence(bhandaraDiaryEvidenceItem)}
                    className="px-4 py-2 bg-gradient-to-r from-[#780016] to-[#5A0010] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#D4AF37]/50"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>मूल भंडारा अभिलेख देखें</span>
                  </button>
                )}
              </div>

              {/* Crucial Explanatory Note regarding Santosh Ji / Guddu Bhaiya vs Guddu Rai Murti Seva */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#780016] text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF7722]" />
                  <span>भंडारा एवं मूर्ति सेवा का स्पष्ट वर्गीकरण</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  **₹1,500 की यह राशि संतोष कुशवाहा जी / गुड्डू भैया का अलग भंडारा सहयोग व व्यवस्था है।** गुड्डू राय जी द्वारा श्री गणेश जी की पावन प्रतिमा स्थापना में मुख्य सहयोग दिया गया है (जिसमें डायरी में अलग से राशि दर्ज नहीं है)।
                </p>
              </div>

              {/* 4 Bhandara Contributors Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GROSS_COLLECTION_DATA.bhandaraBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-stone-200 p-4 sm:p-5 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-300">
                          {item.modeHi}
                        </span>
                        <span className="text-xs font-bold text-[#FF7722]">सहयोग #{idx + 1}</span>
                      </div>
                      <h4 className="text-lg font-serif font-black text-[#780016]">
                        {lang === 'hi' ? item.nameHi : item.nameEn}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">
                        {lang === 'hi' ? item.roleHi : item.roleEn}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs text-stone-500 font-medium">समर्पित राशि:</span>
                      <span className="text-2xl font-serif font-black text-[#780016]">
                        ₹{item.amount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary Footer */}
              <div className="bg-emerald-50 rounded-2xl border-2 border-emerald-300 p-4 flex items-center justify-between font-bold text-emerald-950">
                <span className="text-sm">कुल अतिरिक्त भंडारा सहयोग:</span>
                <span className="text-2xl font-serif font-black text-emerald-900">
                  ₹{GROSS_COLLECTION_DATA.bhandaraTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 5: CENTRAL ACCOUNT — "शशि जी के केंद्रीय खाते का विवरण" */}
          {/* ============================================================ */}
          {currentTab === 'central' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header & Source Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold border border-amber-300">
                      केन्द्रीय खाता
                    </span>
                    <span className="text-xs text-stone-500 font-bold">स्रोत-अभिलेख</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#780016] mt-1">
                    शशि जी के केंद्रीय खाते का विवरण
                  </h3>
                </div>

                {onOpenEvidence && (
                  <button
                    onClick={() => onOpenEvidence(centralSummaryEvidenceItem)}
                    className="px-4 py-2 bg-gradient-to-r from-[#780016] to-[#5A0010] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#D4AF37]/50"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>मूल सारांश पृष्ठ देखें</span>
                  </button>
                )}
              </div>

              {/* Clear Distinction Note */}
              <div className="bg-rose-50/80 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-900 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>महत्वपूर्ण लेखा अंतर: कुल संकलन (₹62,640) बनाम केंद्रीय खाता (₹40,024)</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  "**₹62,640** पूरे उत्सव के उपलब्ध संग्रह रिकॉर्ड का कुल सार्वजनिक संग्रह है। **₹40,024** शशि जी के केंद्रीय खाते में दर्ज राशि है। दोनों अलग accounting views हैं।"
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  यह केंद्रीय खाते में दर्ज स्रोत-रिकॉर्ड राशि है। इसे पूरे उत्सव के कुल संग्रह के बराबर न माना जाए।
                </p>
              </div>

              {/* Central Inflow Calculation Breakdown (₹40,024) */}
              <div className="bg-white rounded-3xl border-2 border-stone-200 p-5 sm:p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <span className="text-xs font-bold text-stone-600 uppercase">केंद्रीय खाते में दर्ज आवक का स्रोत</span>
                  <span className="text-xl sm:text-2xl font-serif font-black text-emerald-900">
                    ₹{CENTRAL_TREASURY_DATA.totalInflow.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-700 font-medium">१. ऑनलाइन चंदा (डायरी में लिखा उप-योग):</span>
                    <span className="font-serif font-bold text-stone-900">₹{CENTRAL_TREASURY_DATA.onlineChandaWritten.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-700 font-medium">२. शशि जी के पास नकद (Cash with Shashi Ji):</span>
                    <span className="font-serif font-bold text-stone-900">₹{CENTRAL_TREASURY_DATA.cashWithShashiJi.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-700 font-medium">३. ऑनलाइन भंडारा (ज्योति जी ₹600 + सुमन जी ₹600):</span>
                    <span className="font-serif font-bold text-stone-900">₹{CENTRAL_TREASURY_DATA.onlineBhandara.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 flex items-center justify-between font-bold text-emerald-900 text-sm">
                  <span>केंद्रीय आवक कुल योग:</span>
                  <span className="text-xl font-serif font-black text-emerald-900">
                    ₹30,769 + ₹8,055 + ₹1,200 = ₹40,024
                  </span>
                </div>
              </div>

              {/* Difference Box: ₹22,616 */}
              <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span>केंद्रीय खाते से अलग दर्ज संग्रह/प्रवाह:</span>
                  <span className="text-base font-serif font-black text-[#780016]">
                    ₹62,640 − ₹40,024 = ₹22,616
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  "केंद्रीय खाते से अलग दर्ज संग्रह/प्रवाह — विस्तृत स्रोत रिकॉर्ड के अनुसार।" (अतिरिक्त नकद, भंडारा एवं समर्पित सेवा प्रविष्टियों का सार्वजनिक अभिलेख)।
                </p>
              </div>

              {/* Inflow vs Outflow Calculation */}
              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between font-bold text-stone-800">
                  <span>केंद्रीय आवक (₹40,024) − दर्ज व्यय (₹34,903):</span>
                  <span className="font-serif font-black text-amber-900 text-base">
                    प्रारंभिक शेष: ₹5,121
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  हस्तलिखित डायरी पृष्ठ ०१ तथा इलेक्ट्रॉनिक कैलकुलेटर भौतिक मिलान साक्ष्य के अनुसार।
                </p>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 6: EXPENSES — "अब तक दर्ज केंद्रीय व्यय" */}
          {/* ============================================================ */}
          {currentTab === 'expenses' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header & Source Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 text-[11px] font-bold border border-rose-200">
                      केंद्रीय व्यय
                    </span>
                    <span className="text-xs text-stone-500 font-bold">प्रमाणित वाउचर</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#780016] mt-1">
                    अब तक दर्ज केंद्रीय व्यय — ₹34,903
                  </h3>
                </div>

                {onOpenEvidence && (
                  <button
                    onClick={() => onOpenEvidence(expensesEvidenceItem)}
                    className="px-4 py-2 bg-gradient-to-r from-[#780016] to-[#5A0010] text-[#FFDF80] hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#D4AF37]/50"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>मूल खर्च वाउचर देखें</span>
                  </button>
                )}
              </div>

              {/* Progress Note */}
              <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3.5 text-xs text-amber-900 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                <span>"व्यय विवरण का अंतिम अद्यतन अभी प्रक्रियाधीन है।"</span>
              </div>

              {/* Category 1: Daily Pooja */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h4 className="font-serif font-bold text-[#780016] text-base">
                    १. दैनिक पूजा, सामग्री व प्रसाद
                  </h4>
                  <span className="font-serif font-black text-rose-900 text-lg">
                    ₹{CENTRAL_TREASURY_DATA.dailyPoojaSamagriPrasad.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  दैनिक पूजन सामग्री (माला ₹650, दूध-दही ₹774, लड्डू ₹2770, फल ₹950, साफा ₹430, सिलेंडर ₹950, पूजन कपड़ा ₹160, आदि)।
                </p>
              </div>

              {/* Category 2: Infrastructure */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h4 className="font-serif font-bold text-[#780016] text-base">
                    २. टेंट, साउंड, लाइट व प्रमुख विक्रेता
                  </h4>
                  <span className="font-serif font-black text-rose-900 text-lg">
                    ₹{CENTRAL_TREASURY_DATA.tentSoundLightVendors.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  टेंट एडवांस व किराया (₹2100+₹1500), साउंड सिस्टम (₹2500+₹650), लाइट व जनरेटर मोनू (₹1200), प्रमुख व्यवस्था श्रीवास्तव जी (₹5000), आदि।
                </p>
              </div>

              {/* Total Summary */}
              <div className="bg-rose-50 rounded-2xl border-2 border-rose-300 p-4 flex items-center justify-between font-bold text-rose-950">
                <span className="text-sm">कुल प्रमाणित दर्ज व्यय:</span>
                <span className="text-2xl font-serif font-black text-rose-900">
                  ₹{CENTRAL_TREASURY_DATA.totalOutflow.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="bg-[#FFFBF5] border-t border-stone-200 p-4 sm:p-5 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500 font-medium">
            श्री गणेश उत्सव 2026 • मयूर होम्स कॉलोनी
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#780016] hover:bg-[#5A0010] text-white text-xs font-bold transition-all shadow-md"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close Drawer'}
          </button>
        </div>

      </div>
    </div>
  );
};
