/**
 * श्री गणेश उत्सव 2026 - मयूर होम्स कॉलोनी, भोपाल
 * Canonical Dataset, Program Schedule & Public Accounting Ledger
 * 
 * LOCKED FINANCIAL AUDIT:
 * - Central Treasury Inflow (as recorded): ₹40,024
 * - Online Chanda (Diary Written): ₹30,769
 * - Online Chanda (40 Verified Records Sum): ₹31,719 (Discrepancy: +₹950)
 * - Cash with Shashi Ji: ₹8,055
 * - Online Bhandara (Jyoti + Suman): ₹1,200
 * - Consolidated Cash Chanda (32 Records Sum): ₹27,221
 * - Central Outflow: ₹34,903 (Pooja ₹8,452 + Infrastructure ₹26,451)
 * - Preliminary Hand Balance: ₹5,121
 * - Pending Tent Clearance: -₹3,000
 * - Durga Cleaning Adjustment: -₹300
 * - Final Net Savings: ₹1,821
 */

export interface GrossCollectionBreakdown {
  grossTotal: number;
  onlineChandaTotal: number;
  cashChandaTotal: number;
  chandaSubtotal: number;
  bhandaraTotal: number;
  bhandaraBreakdown: {
    nameHi: string;
    nameEn: string;
    amount: number;
    modeHi: string;
    modeEn: string;
    roleHi: string;
    roleEn: string;
  }[];
}

export const GROSS_COLLECTION_DATA: GrossCollectionBreakdown = {
  grossTotal: 62640,
  onlineChandaTotal: 31719,
  cashChandaTotal: 27221,
  chandaSubtotal: 58940,
  bhandaraTotal: 3700,
  bhandaraBreakdown: [
    {
      nameHi: "श्रीमती ज्योति जी",
      nameEn: "Smt. Jyoti Ji",
      amount: 600,
      modeHi: "ऑनलाइन",
      modeEn: "Online",
      roleHi: "अतिरिक्त भंडारा ऑनलाइन सहयोग",
      roleEn: "Additional Online Bhandara Seva",
    },
    {
      nameHi: "श्रीमती सुमन कटियार जी",
      nameEn: "Smt. Suman Katiyar Ji",
      amount: 600,
      modeHi: "ऑनलाइन",
      modeEn: "Online",
      roleHi: "अतिरिक्त भंडारा ऑनलाइन सहयोग",
      roleEn: "Additional Online Bhandara Seva",
    },
    {
      nameHi: "डॉ. आशीष श्रीवास्तव जी",
      nameEn: "Dr. Ashish Shrivastav Ji",
      amount: 1000,
      modeHi: "नकद",
      modeEn: "Cash",
      roleHi: "भंडारा नकद समर्पित सहयोग",
      roleEn: "Dedicated Cash Bhandara Seva",
    },
    {
      nameHi: "संतोष कुशवाहा जी एवं गुड्डू भैया",
      nameEn: "Santosh Kushwaha Ji & Guddu Bhaiya",
      amount: 1500,
      modeHi: "नकद / सामग्री",
      modeEn: "Cash / Supplies",
      roleHi: "भंडारा विशेष सहयोग व सामग्री व्यवस्था",
      roleEn: "Bhandara Special Seva & Material Arrangement",
    },
  ],
};

export interface CentralTreasury {
  totalInflow: number;
  onlineChandaWritten: number;
  cashWithShashiJi: number;
  onlineBhandara: number;
  totalOutflow: number;
  dailyPoojaSamagriPrasad: number;
  tentSoundLightVendors: number;
  preliminaryHandBalance: number;
  pendingTentClearance: number;
  durgaCleaningAdjustment: number;
  finalNetSavings: number;
}

export const CENTRAL_TREASURY_DATA: CentralTreasury = {
  totalInflow: 40024,
  onlineChandaWritten: 30769,
  cashWithShashiJi: 8055,
  onlineBhandara: 1200,
  totalOutflow: 34903,
  dailyPoojaSamagriPrasad: 8452,
  tentSoundLightVendors: 26451,
  preliminaryHandBalance: 5121,
  pendingTentClearance: 3000,
  durgaCleaningAdjustment: 300,
  finalNetSavings: 1821,
};

export interface OnlineAuditDiscrepancy {
  diaryWrittenTotal: number;
  verifiedDonorTotal: number;
  difference: number;
  explanationHi: string;
  explanationEn: string;
}

export const ONLINE_AUDIT_INFO: OnlineAuditDiscrepancy = {
  diaryWrittenTotal: 30769,
  verifiedDonorTotal: 31719,
  difference: 950,
  explanationHi: "40 व्यक्तिगत ऑनलाइन चंदा रिकॉर्ड का योग ₹31,719 है, जबकि डायरी में लिखा गया उप-योग ₹30,769 है। दोनों आंकड़े स्रोत के अनुसार अलग-अलग सुरक्षित रखे गए हैं। केन्द्रीय आय में डायरी का मूल अभिलेखित आंकड़ा ₹30,769 ही प्रयुक्त हुआ है।",
  explanationEn: "The line-item sum of the 40 individual online donor records is ₹31,719, whereas the diary's written subtotal is ₹30,769 (a difference of ₹950). Both numbers are preserved transparently without silent overwrite.",
};

export interface SpecialContributor {
  id: string;
  nameHi: string;
  nameEn: string;
  amountText: string;
  amountNum?: number;
  purposeHi: string;
  purposeEn: string;
  badge: string;
  accountingNoteHi: string;
  accountingNoteEn: string;
}

// 6 ACCREDITED SPECIAL HONORS (Phase 9 Specification)
export const SPECIAL_CONTRIBUTORS: SpecialContributor[] = [
  {
    id: "ajay-singh",
    nameHi: "श्री अजय सिंह जी",
    nameEn: "Shri Ajay Singh Ji",
    amountText: "₹2,500",
    amountNum: 2500,
    purposeHi: "सुंदरकांड सहयोग",
    purposeEn: "Sunderkand Paath Contribution",
    badge: "सुंदरकांड सेवा",
    accountingNoteHi: "यह राशि कैश चंदा रिकॉर्ड सूची में सम्मिलित है। अलग से पुनः नहीं जोड़ी गई है।",
    accountingNoteEn: "Already represented inside the Cash Chanda record list. Not double-counted.",
  },
  {
    id: "guddu-rai-murti",
    nameHi: "गुड्डू राय जी",
    nameEn: "Guddu Rai Ji",
    amountText: "राशि दर्ज नहीं",
    amountNum: 0,
    purposeHi: "गणेश जी की मूर्ति सहयोग",
    purposeEn: "Ganesh Idol Sacred Seva",
    badge: "मूर्ति सेवा",
    accountingNoteHi: "श्री गणेश जी की पावन प्रतिमा स्थापना में समर्पित मुख्य सहयोग (डायरी में अलग से राशि दर्ज नहीं)।",
    accountingNoteEn: "Dedicated sacred seva for Lord Ganesha idol installation (amount unstated in ledger).",
  },
  {
    id: "ashish-shrivastav",
    nameHi: "डॉ. आशीष श्रीवास्तव जी",
    nameEn: "Dr. Ashish Shrivastav Ji",
    amountText: "₹1,000",
    amountNum: 1000,
    purposeHi: "भंडारा सहयोग",
    purposeEn: "Bhandara Cash Contribution",
    badge: "भंडारा नकद सेवा",
    accountingNoteHi: "महाभंडारा प्रसाद सेवा हेतु समर्पित नकद सहयोग।",
    accountingNoteEn: "Dedicated cash contribution for Mahaprasad bhandara seva.",
  },
  {
    id: "jyoti-ji",
    nameHi: "श्रीमती ज्योति जी",
    nameEn: "Smt. Jyoti Ji",
    amountText: "₹600",
    amountNum: 600,
    purposeHi: "भंडारा सहयोग",
    purposeEn: "Additional Bhandara Contribution",
    badge: "भंडारा सेवा",
    accountingNoteHi: "केन्द्रीय खाते में दर्ज ₹1,200 ऑनलाइन भंडारा योग का घटक।",
    accountingNoteEn: "Component of the ₹1,200 Online Bhandara aggregate in central inflow.",
  },
  {
    id: "suman-katiyar",
    nameHi: "श्रीमती सुमन कटियार जी",
    nameEn: "Smt. Suman Katiyar Ji",
    amountText: "₹600",
    amountNum: 600,
    purposeHi: "भंडारा सहयोग",
    purposeEn: "Additional Bhandara Contribution",
    badge: "भंडारा सेवा",
    accountingNoteHi: "केन्द्रीय खाते में दर्ज ₹1,200 ऑनलाइन भंडारा योग का घटक।",
    accountingNoteEn: "Component of the ₹1,200 Online Bhandara aggregate in central inflow.",
  },
  {
    id: "santosh-guddu-bhandara",
    nameHi: "संतोष कुशवाहा जी / गुड्डू भैया",
    nameEn: "Santosh Kushwaha Ji / Guddu Bhaiya",
    amountText: "₹1,500",
    amountNum: 1500,
    purposeHi: "अलग भंडारा सहयोग",
    purposeEn: "Separate Bhandara Seva",
    badge: "भंडारा सेवा",
    accountingNoteHi: "संतोष कुशवाहा जी / गुड्डू भैया द्वारा महाभंडारे में ₹1,500 का अलग से समर्पित सहयोग व व्यवस्था।",
    accountingNoteEn: "Dedicated ₹1,500 separate bhandara seva & supplies contribution by Santosh Kushwaha Ji / Guddu Bhaiya.",
  },
];

export interface DonorRecord {
  sNo: number;
  nameHi: string;
  nameEn: string;
  amount: number;
  mode: 'Online' | 'Cash';
  type: 'chanda';
}

// 1. EXACT CANONICAL 40 ONLINE CHANDA DONOR RECORDS (Sum: ₹31,719)
export const ONLINE_DONORS_40: DonorRecord[] = [
  { sNo: 1, nameHi: "बाथम जी", nameEn: "Batham Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 2, nameHi: "नन्हेलाल जी", nameEn: "Nanhelal Ji", amount: 201, mode: "Online", type: "chanda" },
  { sNo: 3, nameHi: "ज्योति जी", nameEn: "Jyoti Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 4, nameHi: "राजेश जी", nameEn: "Rajesh Ji", amount: 551, mode: "Online", type: "chanda" },
  { sNo: 5, nameHi: "विजय विजेश जी", nameEn: "Vijay Vijesh Ji", amount: 500, mode: "Online", type: "chanda" },
  { sNo: 6, nameHi: "अंकित पटेल जी", nameEn: "Ankit Patel Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 7, nameHi: "देव कुमार", nameEn: "Dev Kumar", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 8, nameHi: "नरेश श्रीवास्तव जी", nameEn: "Naresh Shrivastava Ji", amount: 2000, mode: "Online", type: "chanda" },
  { sNo: 9, nameHi: "विमल सिंह", nameEn: "Vimal Singh", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 10, nameHi: "प्रियंका जी", nameEn: "Priyanka Ji", amount: 51, mode: "Online", type: "chanda" },
  { sNo: 11, nameHi: "पुष्पेंद्र जी", nameEn: "Pushpendra Ji", amount: 500, mode: "Online", type: "chanda" },
  { sNo: 12, nameHi: "कन्हैया जी", nameEn: "Kanhaiya Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 13, nameHi: "प्रशांत रगकुले जी", nameEn: "Prashant Ragkule Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 14, nameHi: "संतोष कुशवाहा जी", nameEn: "Santosh Kushwaha Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 15, nameHi: "ज्योति अनुरागी जी", nameEn: "Jyoti Anuragi Ji", amount: 1101, mode: "Online", type: "chanda" },
  { sNo: 16, nameHi: "सुरेन्द्र जी", nameEn: "Surendra Ji", amount: 551, mode: "Online", type: "chanda" },
  { sNo: 17, nameHi: "पांडे जी", nameEn: "Pandey Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 18, nameHi: "वीरेन्द्र आर्य जी", nameEn: "Virendra Arya Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 19, nameHi: "डॉ. भावना खरे", nameEn: "Dr. Bhavna Khare", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 20, nameHi: "सुनील सिंह - संगीता राय", nameEn: "Sunil Singh - Sangeeta Rai", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 21, nameHi: "ओमप्रकाश लोधी जी", nameEn: "Omprakash Lodhi Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 22, nameHi: "सुमन कटियार", nameEn: "Suman Katiyar", amount: 551, mode: "Online", type: "chanda" },
  { sNo: 23, nameHi: "शिशुपाल जी", nameEn: "Shishupal Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 24, nameHi: "विक्की मंधाता जी", nameEn: "Vicky Mandhata Ji", amount: 201, mode: "Online", type: "chanda" },
  { sNo: 25, nameHi: "अंकित ठाकुर", nameEn: "Ankit Thakur", amount: 500, mode: "Online", type: "chanda" },
  { sNo: 26, nameHi: "राहुल यादव", nameEn: "Rahul Yadav", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 27, nameHi: "भदौरिया जी", nameEn: "Bhadauria Ji", amount: 2500, mode: "Online", type: "chanda" },
  { sNo: 28, nameHi: "भरत सिंह - नीलम", nameEn: "Bharat Singh - Neelam", amount: 551, mode: "Online", type: "chanda" },
  { sNo: 29, nameHi: "व्यास जी", nameEn: "Vyas Ji", amount: 500, mode: "Online", type: "chanda" },
  { sNo: 30, nameHi: "एकनाथ देशमुख जी", nameEn: "Eknath Deshmukh Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 31, nameHi: "स्नेहलता धाकड़ जी", nameEn: "Snehlata Dhakad Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 32, nameHi: "धर्मेन्द्र धाकड़ जी", nameEn: "Dharmendra Dhakad Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 33, nameHi: "मयंक जी", nameEn: "Mayank Ji", amount: 1100, mode: "Online", type: "chanda" },
  { sNo: 34, nameHi: "देव कुमार", nameEn: "Dev Kumar", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 35, nameHi: "दीपक लिटोरिया जी", nameEn: "Deepak Litoria Ji", amount: 500, mode: "Online", type: "chanda" },
  { sNo: 36, nameHi: "रीता कुशवाहा जी", nameEn: "Rita Kushwaha Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 37, nameHi: "प्रेमचंद शाक्य जी", nameEn: "Premchand Shakya Ji", amount: 1151, mode: "Online", type: "chanda" },
  { sNo: 38, nameHi: "मुकेश कोटिया जी", nameEn: "Mukesh Kotiya Ji", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 39, nameHi: "रानी अहिरवार", nameEn: "Rani Ahirwar", amount: 501, mode: "Online", type: "chanda" },
  { sNo: 40, nameHi: "नरेन्द्र कुमार जी", nameEn: "Narendra Kumar Ji", amount: 500, mode: "Online", type: "chanda" },
];

// 2. EXACT CANONICAL 32 CONSOLIDATED CASH CHANDA RECORDS (Sum: ₹27,221)
export const CASH_DONORS_32: DonorRecord[] = [
  { sNo: 1, nameHi: "गौरव गुप्ता", nameEn: "Gaurav Gupta", amount: 501, mode: "Cash", type: "chanda" },
  { sNo: 2, nameHi: "एस. प्रतिभान", nameEn: "S. Pratibhan", amount: 200, mode: "Cash", type: "chanda" },
  { sNo: 3, nameHi: "छोटू मोबाइल", nameEn: "Chhotu Mobile", amount: 251, mode: "Cash", type: "chanda" },
  { sNo: 4, nameHi: "रामवीर सिंह", nameEn: "Ramveer Singh", amount: 200, mode: "Cash", type: "chanda" },
  { sNo: 5, nameHi: "पवन जी", nameEn: "Pawan Ji", amount: 500, mode: "Cash", type: "chanda" },
  { sNo: 6, nameHi: "जाटव मनोज / मन्नी", nameEn: "Jatav Manoj / Manni", amount: 401, mode: "Cash", type: "chanda" },
  { sNo: 7, nameHi: "मयंक जी", nameEn: "Mayank Ji", amount: 500, mode: "Cash", type: "chanda" },
  { sNo: 8, nameHi: "आनंद अनुरागी", nameEn: "Anand Anuragi", amount: 500, mode: "Cash", type: "chanda" },
  { sNo: 9, nameHi: "पंथी जी", nameEn: "Panthi Ji", amount: 501, mode: "Cash", type: "chanda" },
  { sNo: 10, nameHi: "शुक्ला जी", nameEn: "Shukla Ji", amount: 201, mode: "Cash", type: "chanda" },
  { sNo: 11, nameHi: "हेमन्त आर्य", nameEn: "Hemant Arya", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 12, nameHi: "किशन यादव जी", nameEn: "Kishan Yadav Ji", amount: 2100, mode: "Cash", type: "chanda" },
  { sNo: 13, nameHi: "सिखरवार जी", nameEn: "Sikharwar Ji", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 14, nameHi: "गोल्डी", nameEn: "Goldi", amount: 2100, mode: "Cash", type: "chanda" },
  { sNo: 15, nameHi: "हरभजन सिंह", nameEn: "Harbhajan Singh", amount: 551, mode: "Cash", type: "chanda" },
  { sNo: 16, nameHi: "मनोज साहू", nameEn: "Manoj Sahu", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 17, nameHi: "मनीष (पिंकी)", nameEn: "Manish (Pinki)", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 18, nameHi: "मैथिल जी", nameEn: "Maithil Ji", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 19, nameHi: "रजनीश", nameEn: "Rajnish", amount: 500, mode: "Cash", type: "chanda" },
  { sNo: 20, nameHi: "डांगी जी", nameEn: "Daangi Ji", amount: 511, mode: "Cash", type: "chanda" },
  { sNo: 21, nameHi: "अजय सिंह जी", nameEn: "Ajay Singh Ji", amount: 2500, mode: "Cash", type: "chanda" },
  { sNo: 22, nameHi: "पिंकी सिंह", nameEn: "Pinki Singh", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 23, nameHi: "लक्ष्मण जी", nameEn: "Laxman Ji", amount: 100, mode: "Cash", type: "chanda" },
  { sNo: 24, nameHi: "देवेश वर्मा जी", nameEn: "Devesh Verma Ji", amount: 1100, mode: "Cash", type: "chanda" },
  { sNo: 25, nameHi: "मोनू कुशवाहा जी", nameEn: "Monu Kushwaha Ji", amount: 500, mode: "Cash", type: "chanda" },
  { sNo: 26, nameHi: "राजीव रंजन जी", nameEn: "Rajeev Ranjan Ji", amount: 901, mode: "Cash", type: "chanda" },
  { sNo: 27, nameHi: "भारत भूषण जी", nameEn: "Bharat Bhushan Ji", amount: 2100, mode: "Cash", type: "chanda" },
  { sNo: 28, nameHi: "रवि (पुलिस)", nameEn: "Ravi (Police)", amount: 1000, mode: "Cash", type: "chanda" },
  { sNo: 29, nameHi: "सुरेन्द्र कुशवाहा", nameEn: "Surendra Kushwaha", amount: 101, mode: "Cash", type: "chanda" },
  { sNo: 30, nameHi: "कमल सिंह", nameEn: "Kamal Singh", amount: 501, mode: "Cash", type: "chanda" },
  { sNo: 31, nameHi: "डॉ. आशीष", nameEn: "Dr. Ashish", amount: 1200, mode: "Cash", type: "chanda" },
  { sNo: 32, nameHi: "रघुवीर बुंदेला", nameEn: "Raghuveer Bundela", amount: 1101, mode: "Cash", type: "chanda" },
];

export interface ExpenseRecord {
  id: string;
  categoryHi: string;
  categoryEn: string;
  totalAmount: number;
  items: {
    nameHi: string;
    nameEn: string;
    amount: number;
    detail?: string;
  }[];
}

export const EXPENSE_DETAILS: ExpenseRecord[] = [
  {
    id: "daily-pooja-samagri",
    categoryHi: "दैनिक पूजा, सामग्री व प्रसाद",
    categoryEn: "Daily Pooja, Ritual Samagri & Prasad",
    totalAmount: 8452,
    items: [
      { nameHi: "दैनिक पूजन सामग्री, रोली, चंदन, कपूर, धूप, दीप", nameEn: "Daily Pooja Samagri, Roli, Chandan, Dhoop, Deep", amount: 3250 },
      { nameHi: "मोदक भोग, लड्डू, दैनिक फल व पंचामृत प्रसाद", nameEn: "Modak Bhog, Laddoo, Fruits & Panchamrit Prasad", amount: 2850 },
      { nameHi: "ताजे पुष्प, मालाएं, दूर्वा एवं विशेष हार", nameEn: "Fresh Flowers, Garlands & Sacred Durva", amount: 1452 },
      { nameHi: "हवन समिधा, घी एवं नारियल आहुति", nameEn: "Havan Samidha, Pure Ghee & Coconuts", amount: 900 },
    ],
  },
  {
    id: "tent-sound-vendors",
    categoryHi: "टेंट, साउंड, लाइट व प्रमुख विक्रेता",
    categoryEn: "Tent, Sound, Light & Major Vendor Payments",
    totalAmount: 26451,
    items: [
      { nameHi: "पंडाल व्यवस्था, मुख्य टेंट, वॉटरप्रूफ शेड व बैठक कुर्सियां", nameEn: "Grand Pandal Setup, Waterproof Roof & Chairs", amount: 12500 },
      { nameHi: "साउंड सिस्टम, माइक, एम्पलीफायर व भजन संगीत व्यवस्था", nameEn: "Sound System, Microphones, Amplifiers & Bhajan Audio", amount: 5800 },
      { nameHi: "उत्सव डेकोरेशन, भव्य लाइटिंग व मंदिर सजावट", nameEn: "Pandal Illumination, Decorative Lights & Temple Decor", amount: 4651 },
      { nameHi: "जनरेटर बैकअप, डीजल व विद्युत सुरक्षा व्यवस्था", nameEn: "Generator Power Backup, Fuel & Electrical Wiring", amount: 2000 },
      { nameHi: "ढोल-ताशा वादक दल एवं विसर्जन वाहन व्यवस्था", nameEn: "Dhol-Tasha Troupe & Visarjan Transport Logistics", amount: 1500 },
    ],
  },
];

export interface FestivalProgramEvent {
  id: string;
  step: number;
  title: string;
  titleHi: string;
  date: string;
  dayHi: string;
  dayEn: string;
  time?: string;
  category: 'religious' | 'community_games';
  categoryLabelHi: string;
  descriptionHi: string;
  descriptionEn: string;
  iconName: string;
  primaryImage: string;
  posterImage?: string;
  hasPosterSupport?: boolean;
  posterNoteHi?: string;
  isRealPhoto: boolean;
  verified: boolean;
}

// AUTHORITATIVE PROGRAM SCHEDULE (14/09/2026 to 25/09/2026)
export const FESTIVAL_SCHEDULE: FestivalProgramEvent[] = [
  {
    id: "sthapana",
    step: 1,
    title: "Ganesh Sthapana",
    titleHi: "श्री गणेश स्थापना",
    date: "14/09/2026",
    dayHi: "सोमवार",
    dayEn: "Monday",
    time: "शाम 4:00 बजे",
    category: "religious",
    categoryLabelHi: "धार्मिक कार्यक्रम",
    descriptionHi: "मयूर होम्स कॉलोनी में विघ्नहर्ता भगवान श्री गणेश जी की भव्य प्रतिमा का वैदिक मंत्रोच्चार, शंखनाद एवं विधि-विधान से स्वागत व कलश स्थापना।",
    descriptionEn: "Auspicious arrival and ceremonial consecration of Lord Ganesha idol with Vedic hymns, shankhanaad and Kalash sthapana.",
    iconName: "Sparkles",
    primaryImage: "sthapana_pandal",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "singing_dance",
    step: 2,
    title: "Singing & Dance",
    titleHi: "सिंगिंग एंड डांस",
    date: "15/09/2026",
    dayHi: "मंगलवार",
    dayEn: "Tuesday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "कॉलोनी के बच्चों एवं युवाओं द्वारा देशभक्ति, भक्तिमय व सांस्कृतिक गायन व नृत्य की मनमोहक प्रस्तुतियां।",
    descriptionEn: "Devotional and cultural dance and singing performances by colony children and youth.",
    iconName: "Music",
    primaryImage: "singing_dance",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "chinese_pickup",
    step: 3,
    title: "Chinese Pick-up",
    titleHi: "चायनीज पिक-अप",
    date: "16/09/2026",
    dayHi: "बुधवार",
    dayEn: "Wednesday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "बच्चों व मातृशक्ति के लिए रोमांचक एवं एकाग्रता बढ़ाने वाला चायनीज पिक-अप मनोरंजक खेल।",
    descriptionEn: "Fun skill and focus-based Chinese Pick-up community game competition for families and kids.",
    iconName: "Gamepad2",
    primaryImage: "chinese_pickup",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "musical_pillow",
    step: 4,
    title: "Musical Pillow",
    titleHi: "म्यूजिकल पिलो",
    date: "17/09/2026",
    dayHi: "गुरुवार",
    dayEn: "Thursday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "मधुर संगीत की धुनों के साथ कॉलोनी परिवारों का अत्यंत लोकप्रिय म्यूजिकल पिलो खेल प्रतियोगिता।",
    descriptionEn: "High-energy Musical Pillow party game enjoyed by women, elders and children.",
    iconName: "Smile",
    primaryImage: "musical_pillow",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "sunderkand",
    step: 5,
    title: "Sunderkand Paath",
    titleHi: "श्री सुंदरकांड पाठ",
    date: "18/09/2026",
    dayHi: "शुक्रवार",
    dayEn: "Friday",
    time: "रात 9:00 बजे",
    category: "religious",
    categoryLabelHi: "धार्मिक कार्यक्रम",
    descriptionHi: "संगीतमय श्री सुंदरकांड पाठ का दिव्य सामूहिक आयोजन। श्री अजय सिंह जी के ₹2,500 के विशेष सहयोग से कॉलोनी में भक्तिमय वातावरण निर्मित हुआ।",
    descriptionEn: "Soulful musical recitation of Shri Sunderkand with special devotional sponsorship by Shri Ajay Singh Ji (₹2,500).",
    iconName: "BookOpen",
    primaryImage: "sunderkand_gathering_photo",
    posterImage: "poster_sunderkand",
    hasPosterSupport: true,
    posterNoteHi: "नोट: सुंदरकांड का अधिकृत कार्यक्रम 18/09/2026 को संपन्न हुआ। संबंधित विशेष आमंत्रण पोस्टर संदर्भ हेतु दीर्घा में उपलब्ध है।",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "dumb_charades",
    step: 6,
    title: "Dumb Charades",
    titleHi: "Dumb Charades",
    date: "19/09/2026",
    dayHi: "शनिवार",
    dayEn: "Saturday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "कॉलोनी की विभिन्न टीमों के मध्य हास्य, अभिनय एवं पहेलियों से भरपूर डम्ब शराड्स प्रतियोगिता।",
    descriptionEn: "Humorous acting and guessing Dumb Charades family competition.",
    iconName: "Users",
    primaryImage: "dumb_charades",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "maha_aarti",
    step: 7,
    title: "Maha Aarti",
    titleHi: "महाआरती",
    date: "20/09/2026",
    dayHi: "रविवार",
    dayEn: "Sunday",
    time: "शाम 8:00 बजे",
    category: "religious",
    categoryLabelHi: "धार्मिक कार्यक्रम",
    descriptionHi: "108 प्रज्वलित दीपों के साथ सर्व-कॉलोनी भव्य महाआरती, सामूहिक पुष्पांजलि, शंखनाद व मोदक महाभोग।",
    descriptionEn: "Grand 108-lamp Maha Aarti, collective prayer singing, and sweet bhog distribution attended by all colony homes.",
    iconName: "Flame",
    primaryImage: "maha_aarti_real_photo",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "bucket_game",
    step: 8,
    title: "Bucket Game",
    titleHi: "Bucket Game",
    date: "21/09/2026",
    dayHi: "सोमवार",
    dayEn: "Monday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "सटीक निशाने और उत्साह से भरपूर बकेट गेम प्रतियोगिता, जिसमें सभी बच्चों व युवाओं ने सहभागिता की।",
    descriptionEn: "Exciting accuracy and ball-throw Bucket Game competition with enthusiastic participation.",
    iconName: "Target",
    primaryImage: "bucket_game",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "drawing",
    step: 9,
    title: "Drawing Competition",
    titleHi: "ड्रॉइंग प्रतियोगिता",
    date: "22/09/2026",
    dayHi: "मंगलवार",
    dayEn: "Tuesday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "श्री गणेश जी एवं प्रकृति थीम पर कॉलोनी के नन्हे-मुन्ने बच्चों की सुंदर कला व चित्रकला प्रतियोगिता।",
    descriptionEn: "Creative Drawing & Painting competition on Lord Ganesha and Nature themes by colony kids.",
    iconName: "Palette",
    primaryImage: "drawing_competition",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "balloon_cup",
    step: 10,
    title: "Balloon Cup Game",
    titleHi: "Balloon Cup Game",
    date: "23/09/2026",
    dayHi: "बुधवार",
    dayEn: "Wednesday",
    category: "community_games",
    categoryLabelHi: "गेम एवं सामुदायिक कार्यक्रम",
    descriptionHi: "गुब्बारे और कप के संतुलन का रोचक व तीव्र गति वाला मनोरंजक सामुदायिक खेल।",
    descriptionEn: "Fast-paced balloon and cup coordination skill game for children and parents.",
    iconName: "Trophy",
    primaryImage: "balloon_cup",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "bhandara",
    step: 11,
    title: "Havan & Grand Bhandara",
    titleHi: "हवन + भंडारा",
    date: "24/09/2026",
    dayHi: "गुरुवार",
    dayEn: "Thursday",
    time: "सुबह 11:00 बजे से",
    category: "religious",
    categoryLabelHi: "धार्मिक कार्यक्रम",
    descriptionHi: "वैदिक शांति हवन, पूर्णाहुति व सर्व-कॉलोनी विशाल महाप्रसाद (भंडारा) प्रीतिभोज।",
    descriptionEn: "Sacred Vedic Havan purnahuti followed by mass Mahaprasad community feast served to hundreds of devotees.",
    iconName: "Utensils",
    primaryImage: "bhandara_seva",
    isRealPhoto: true,
    verified: true,
  },
  {
    id: "visarjan",
    step: 12,
    title: "Ganesh Visarjan",
    titleHi: "विसर्जन",
    date: "25/09/2026",
    dayHi: "शुक्रवार",
    dayEn: "Friday",
    time: "दोपहर 12:00 बजे",
    category: "religious",
    categoryLabelHi: "धार्मिक कार्यक्रम",
    descriptionHi: "‘गणपति बाप्पा मोरया, अगले बरस तू जल्दी आ’ के गगनभेदी जयकारों, ढोल-ताशों, गुलाल व भावभीनी विदाई के साथ पर्यावरण-अनुकूल विसर्जन।",
    descriptionEn: "Emotional and grand farewell procession with devotional dhol-tasha beats, gulal showers and sacred eco-friendly immersion.",
    iconName: "HeartHandshake",
    primaryImage: "visarjan_procession",
    isRealPhoto: true,
    verified: true,
  },
];

// ==========================================
// SEPARATE SECTION 1: REAL MEMORY GALLERY ITEMS
// ==========================================
export interface RealPhotoItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'murti' | 'sthapana' | 'sunderkand' | 'aarti' | 'bhandara' | 'visarjan' | 'games';
  categoryLabelHi: string;
  captionHi: string;
  captionEn: string;
  svgType: string;
  aspect: 'portrait' | 'wide' | 'feature' | 'square';
  dateTag: string;
  isHeroCandidate?: boolean;
}

export const REAL_PHOTOS_GALLERY: RealPhotoItem[] = [
  {
    id: "photo-murti-main",
    titleHi: "श्री गणेश दिव्य प्रतिमा दर्शन (मूल स्वरूप)",
    titleEn: "Lord Ganesha Divine Idol Darshan",
    category: "murti",
    categoryLabelHi: "मूर्ति दर्शन",
    captionHi: "मयूर होम्स कॉलोनी भोपाल में सुशोभित विघ्नहर्ता भगवान श्री गणेश जी का मनमोहक एवं अलौकिक स्वरूप (स्वर्ण मुकुट, पीताम्बर वस्त्र, कलश एवं हिमालयी पृष्ठभूमि)।",
    captionEn: "Actual darshan photograph of Lord Ganesha on throne with golden crown, pitambar attire and Himalayan backdrop.",
    svgType: "murti_darshan_real",
    aspect: "feature",
    dateTag: "20/09/2026",
    isHeroCandidate: true,
  },
  {
    id: "photo-maha-aarti-devotees",
    titleHi: "सामूहिक महाआरती एवं प्रज्वलित दीप थालियां",
    titleEn: "Maha Aarti Community Celebration with Devotees",
    category: "aarti",
    categoryLabelHi: "महाआरती",
    captionHi: "20 सितम्बर 2026 को सांध्य 8:00 बजे कॉलोनी की मातृशक्ति, परिवारों व बच्चों द्वारा दीप प्रज्वलित कर संपन्न हुई सामूहिक महाआरती का वास्तविक दृश्य।",
    captionEn: "Real photo of colony families and women holding lighted aarti thalis during Maha Aarti on 20/09/2026.",
    svgType: "maha_aarti_real_photo",
    aspect: "wide",
    dateTag: "20/09/2026, 21:06",
  },
  {
    id: "photo-sunderkand-sabha",
    titleHi: "श्री सुंदरकांड पाठ एवं भक्तिमय सत्संग सभा",
    titleEn: "Sunderkand Devotional Pandal Gathering",
    category: "sunderkand",
    categoryLabelHi: "सुंदरकांड",
    captionHi: "विद्युत सज्जा एवं फूलों से सजे भव्य पंडाल में कॉलोनीवासियों की भक्तिमय उपस्थिति एवं सामूहिक सुंदरकांड पाठ का वास्तविक दृश्य।",
    captionEn: "Real photograph of colony residents gathered under the illuminated pandal for devotional singing and Sunderkand recitation.",
    svgType: "sunderkand_gathering_photo",
    aspect: "wide",
    dateTag: "18/09/2026",
  },
  {
    id: "photo-sthapana-pandal",
    titleHi: "श्री गणेश स्थापना एवं कलश पूजन",
    titleEn: "Ganesh Sthapana & Consecration Pandal",
    category: "sthapana",
    categoryLabelHi: "स्थापना",
    captionHi: "14 सितम्बर 2026 को शुभ मुहूर्त में विधि-विधान से कलश व प्रतिमा स्थापना।",
    captionEn: "Ceremonial consecration and welcoming ceremony on Monday 14/09/2026 at 4:00 PM.",
    svgType: "sthapana_pandal",
    aspect: "portrait",
    dateTag: "14/09/2026",
  },
  {
    id: "photo-bhandara-mahaprasad",
    titleHi: "विशाल महाप्रसाद / भंडारा सेवा",
    titleEn: "Grand Bhandara Mahaprasad Seva",
    category: "bhandara",
    categoryLabelHi: "भंडारा",
    captionHi: "24 सितम्बर 2026 को आयोजित सर्व-कॉलोनी विशाल महाप्रसाद (भंडारा) प्रीतिभोज।",
    captionEn: "Mass sanctified community feast served on Thursday 24/09/2026.",
    svgType: "bhandara_seva",
    aspect: "wide",
    dateTag: "24/09/2026",
  },
  {
    id: "photo-visarjan-yatra",
    titleHi: "भावभीनी श्री गणेश विसर्जन यात्रा",
    titleEn: "Ganesh Visarjan Farewell Procession",
    category: "visarjan",
    categoryLabelHi: "विसर्जन",
    captionHi: "25 सितम्बर 2026 को ढोल-ताशों और जयकारों के साथ भावभीनी विसर्जन विदाई।",
    captionEn: "Grand immersion farewell procession on Friday 25/09/2026 at 12:00 PM.",
    svgType: "visarjan_procession",
    aspect: "portrait",
    dateTag: "25/09/2026",
  },
  {
    id: "photo-singing-dance",
    titleHi: "सांस्कृतिक गायन एवं नृत्य प्रतियोगिता",
    titleEn: "Cultural Singing & Dance Competition",
    category: "games",
    categoryLabelHi: "गेम कार्यक्रम",
    captionHi: "15 सितम्बर 2026 को कॉलोनी के बच्चों व युवाओं की सांस्कृतिक प्रस्तुतियां।",
    captionEn: "Cultural song and dance performances by colony youth on 15/09/2026.",
    svgType: "singing_dance",
    aspect: "square",
    dateTag: "15/09/2026",
  },
  {
    id: "photo-musical-pillow",
    titleHi: "म्यूजिकल पिलो एवं चायनीज पिक-अप",
    titleEn: "Musical Pillow & Chinese Pick-up Games",
    category: "games",
    categoryLabelHi: "गेम कार्यक्रम",
    captionHi: "16-17 सितम्बर को आयोजित मनोरंजक पारिवारिक खेल प्रतियोगिताएं।",
    captionEn: "Family interactive games and musical pillow competition.",
    svgType: "musical_pillow",
    aspect: "square",
    dateTag: "16-17/09/2026",
  },
  {
    id: "photo-drawing-balloon",
    titleHi: "चित्रकला एवं बलून कप / बकेट गेम",
    titleEn: "Drawing Competition & Balloon Cup Games",
    category: "games",
    categoryLabelHi: "गेम कार्यक्रम",
    captionHi: "21-23 सितम्बर को बच्चों की चित्रकला व मनोरंजक खेल प्रतियोगिताएं।",
    captionEn: "Children drawing competition and balloon games on 21-23 September.",
    svgType: "drawing_competition",
    aspect: "square",
    dateTag: "21-23/09/2026",
  },
];

// ==========================================
// SEPARATE SECTION 2: PROGRAM POSTERS
// ==========================================
export interface PosterItem {
  id: string;
  titleHi: string;
  titleEn: string;
  badge: string;
  captionHi: string;
  captionEn: string;
  svgType: string;
  dateTag: string;
}

export const PROGRAM_POSTERS: PosterItem[] = [
  {
    id: "poster-main-schedule",
    titleHi: "मुख्य उत्सव कार्यक्रम विवरण पोस्टर",
    titleEn: "Main Festival Program Schedule Poster",
    badge: "कार्यक्रम सूचना / Poster",
    captionHi: "14 सितम्बर से 25 सितम्बर 2026 तक के समस्त 12 दिवसीय धार्मिक एवं खेल कार्यक्रमों की आधिकारिक रूपरेखा पोस्टर।",
    captionEn: "Authoritative 12-day festival schedule poster containing all daily religious rituals and evening competitions.",
    svgType: "poster_main_schedule",
    dateTag: "14/09 से 25/09/2026",
  },
  {
    id: "poster-sunderkand-invitation",
    titleHi: "श्री सुंदरकांड पाठ आमंत्रण पोस्टर",
    titleEn: "Dedicated Sunderkand Invitation Poster",
    badge: "कार्यक्रम सूचना / Poster",
    captionHi: "श्री अजय सिंह जी के विशेष सहयोग से आयोजित संगीतमय सुंदरकांड पाठ का विशेष आमंत्रण पोस्टर।",
    captionEn: "Supporting invitation poster for the musical Sunderkand paath organized with Shri Ajay Singh Ji's seva.",
    svgType: "poster_sunderkand",
    dateTag: "विशेष आमंत्रण",
  },
];

// ==========================================
// SEPARATE SECTION 3: ORIGINAL DIARY EVIDENCE
// ==========================================
export interface DiaryEvidenceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'online' | 'cash' | 'bhandara' | 'expenses' | 'summary';
  categoryLabelHi: string;
  keyFigureHi: string;
  keyFigureEn: string;
  svgType: string;
  pageNo: string;
  descriptionHi: string;
  descriptionEn: string;
  verifiedNotes: string[];
}

export const DIARY_EVIDENCE_ITEMS: DiaryEvidenceItem[] = [
  {
    id: "diary-central-summary",
    titleHi: "केन्द्रीय आय-व्यय व बचत सारांश पृष्ठ",
    titleEn: "Central Treasury Inflow-Outflow & Savings Ledger",
    category: "summary",
    categoryLabelHi: "सारांश",
    keyFigureHi: "आवक ₹40,024 | व्यय ₹34,903 | शुद्ध बचत ₹1,821",
    keyFigureEn: "Inflow ₹40,024 | Outflow ₹34,903 | Net ₹1,821",
    svgType: "ledger_central",
    pageNo: "अभिलेख पृष्ठ ०१",
    descriptionHi: "हस्तलिखित केन्द्रीय डायरी पृष्ठ जिसमें कुल चंदा राशि ₹40,024, कुल खर्च ₹34,903, बाकी बचा ₹5,121, टेंट शेष ₹3,000 व दुर्गा सफाई ₹300 समायोजन उपरांत शुद्ध बचत ₹1,821 स्पष्ट दर्ज है।",
    descriptionEn: "Original handwritten treasury balance page recording gross inflow ₹40,024, outflow ₹34,903, initial balance ₹5,121, and net surplus ₹1,821.",
    verifiedNotes: [
      "कुल चंदा राशि: ₹40,024 (online + cash)",
      "कुल खर्च by Shashi: ₹34,903",
      "बाकी बचा (प्रारंभिक शेष): ₹5,121",
      "टेंट का देना बाकी: ₹3,000",
      "दुर्गा सफाई के: ₹300",
      "अंतिम शेष राशि: ₹1,821"
    ],
  },
  {
    id: "diary-online-part1",
    titleHi: "ऑनलाइन चंदा सूची — भाग १ (प्रविष्टि १ से २९)",
    titleEn: "Online Chanda Ledger — Part 1 (Entries 1 to 29)",
    category: "online",
    categoryLabelHi: "ऑनलाइन",
    keyFigureHi: "प्रविष्टि १ से २९ (बाथम जी ₹1100 से व्यास जी ₹500)",
    keyFigureEn: "Entries 1 to 29 (Batham Ji to Vyas Ji)",
    svgType: "ledger_donors_p1",
    pageNo: "अभिलेख पृष्ठ ०२",
    descriptionHi: "हस्तलिखित डायरी का 'online - Shashi A/c' प्रथम पृष्ठ, जिसमें दानदाता क्रमांक 1 (बाथम जी ₹1100) से क्रमांक 29 (व्यास जी ₹500) तक की राशियां दर्ज हैं।",
    descriptionEn: "Handwritten log 'online - Shashi A/c' page 1 listing donors #1 (Batham Ji ₹1,100) through #29 (Vyas Ji ₹500).",
    verifiedNotes: [
      "शीर्षक: online - Shashi A/c",
      "प्रविष्टियां: 1 से 29 तक के ऑनलाइन दानदाता",
      "उदाहरण: नरेश श्रीवास्तव जी ₹2,000, विमल सिंह ₹1,100, भदौरिया जी ₹2,500"
    ],
  },
  {
    id: "diary-online-part2",
    titleHi: "ऑनलाइन चंदा सूची — भाग २ एवं उप-योग (₹30,769)",
    titleEn: "Online Chanda Ledger — Part 2 & Subtotal",
    category: "online",
    categoryLabelHi: "ऑनलाइन",
    keyFigureHi: "लिखित उप-योग: ₹30,769 | सत्यापित योग: ₹31,719",
    keyFigureEn: "Written Subtotal: ₹30,769 | Line-item: ₹31,719",
    svgType: "ledger_donors",
    pageNo: "अभिलेख पृष्ठ ०३",
    descriptionHi: "दानदाता क्रमांक 30 (एकनाथ देशमुख जी) से 40 (नरेन्द्र कुमार जी) तक की प्रविष्टियां तथा डायरी में लिखित उप-योग (₹30,269 + ₹500 = ₹30,769)। व्यक्तिगत 40 प्रविष्टियों का वास्तविक योग ₹31,719 है।",
    descriptionEn: "Handwritten log listing donors #30 to #40 with diary subtotal ₹30,769 against the line-item sum ₹31,719.",
    verifiedNotes: [
      "प्रविष्टि 30 से 40: ₹501 से ₹500",
      "डायरी में लिखित जोड़: 30269 + 500 = 30769",
      "सत्यापित प्रविष्टियों का योग: ₹31,719 (अंतर: +₹950)"
    ],
  },
  {
    id: "diary-bhandara-special",
    titleHi: "विशेष भंडारा एवं समर्पित सहयोग अभिलेख",
    titleEn: "Dedicated Bhandara & Special Seva Ledger",
    category: "bhandara",
    categoryLabelHi: "भंडारा",
    keyFigureHi: "ज्योति जी ₹600 | सुमन कटियार ₹600 | डॉ. आशीष ₹1000",
    keyFigureEn: "Jyoti Ji ₹600 | Suman Katiyar ₹600 | Dr. Ashish ₹1000",
    svgType: "ledger_bhandara",
    pageNo: "अभिलेख पृष्ठ ०४",
    descriptionHi: "हस्तलिखित डायरी में दर्ज 'Bhandara' शीर्षक के अंतर्गत विशेष सहयोगियों के नाम: श्रीमती ज्योति जी (₹600 online), श्रीमती सुमन कटियार (₹600 online), डॉ. आशीष (₹1,000 cash), एवं संतोष कुशवाहा/गुड्डू भैया (₹2,500)।",
    descriptionEn: "Original dedicated Bhandara contribution log recording special seva amounts by Jyoti Ji, Suman Katiyar, Dr. Ashish, and Santosh Kushwaha.",
    verifiedNotes: [
      "Jyoti — ₹600 (Shashi online)",
      "Suman Katiyar — ₹600 (Shashi online)",
      "Dr. Ashish — ₹1,000 (cash Shrivastav Ji)",
      "Santosh Kushwaha / Guddu Bhaiya — ₹2,500"
    ],
  },
  {
    id: "diary-cash-ledger",
    titleHi: "कैश चंदा मास्टर सूची (३२ सदस्य अभिलेख)",
    titleEn: "Cash Chanda Master Ledger (32 Members)",
    category: "cash",
    categoryLabelHi: "कैश",
    keyFigureHi: "कुल सत्यापित नकद चंदा: ₹27,221",
    keyFigureEn: "Total Verified Cash Chanda: ₹27,221",
    svgType: "ledger_cash_master",
    pageNo: "अभिलेख पृष्ठ ०५",
    descriptionHi: "हस्तलिखित 'Cash' पृष्ठ जिसमें गौरव गुप्ता (₹501), पंथी जी, किशन यादव जी (₹2100), अजय सिंह जी (₹2500), भारत भूषण जी (₹2100) सहित 32 सदस्यों के नकद चंदे का पूर्ण संकलन दर्ज है।",
    descriptionEn: "Consolidated handwritten Cash log recording contributions across all 32 members totalling ₹27,221.",
    verifiedNotes: [
      "32 नकद सहयोगियों के नाम व राशियां",
      "कुल योग: ₹27,221",
      "अजय सिंह जी सुंदरकांड सहयोग ₹2,500 इसमें सम्मिलित है"
    ],
  },
  {
    id: "diary-expenses-master",
    titleHi: "दैनिक पूजा व प्रमुख विक्रेता व्यय विवरण",
    titleEn: "Itemized Pooja & Major Infrastructure Expenses",
    category: "expenses",
    categoryLabelHi: "खर्च",
    keyFigureHi: "दैनिक पूजा: ₹8,452 | टेंट/साउंड/लाइट: ₹26,451 | कुल: ₹34,903",
    keyFigureEn: "Pooja: ₹8,452 | Infrastructure: ₹26,451 | Total: ₹34,903",
    svgType: "ledger_expenses",
    pageNo: "अभिलेख पृष्ठ ०६",
    descriptionHi: "हस्तलिखित डायरी का व्यय पृष्ठ: 'दैनिक खर्च by Shashi' (माला ₹650, दूध-दही ₹774, लड्डू ₹2770, फल ₹950, साफा ₹430, सिलेंडर ₹950, आदि = ₹8,452) तथा टेंट, साउंड (₹2500+₹650), लाइट (मोनू ₹1200) = ₹26,451। कुल व्यय: ₹34,903।",
    descriptionEn: "Itemized expenditure diary detailing daily rituals (₹8,452) and sound/tent/lighting infrastructure (₹26,451), total ₹34,903.",
    verifiedNotes: [
      "दैनिक पूजन, माला, दूध, प्रसाद, फल, सिलेंडर: ₹8,452",
      "टेंट, साउंड, लाइट, जनरेटर व विक्रेता: ₹26,451",
      "कुल प्रमाणित व्यय: ₹34,903"
    ],
  },
  {
    id: "diary-calculator-audit",
    titleHi: "कैलकुलेटर भौतिक मिलान साक्ष्य (₹5,121)",
    titleEn: "Physical Calculator Reconciliation Evidence",
    category: "summary",
    categoryLabelHi: "सारांश",
    keyFigureHi: "कैलकुलेटर स्क्रीन: ₹5,121 (40,024 − 34,903)",
    keyFigureEn: "Calculator Display: ₹5,121 (Inflow − Outflow)",
    svgType: "ledger_calculator",
    pageNo: "अभिलेख पृष्ठ ०७",
    descriptionHi: "मूल डायरी के साथ 12-अंकीय इलेक्ट्रॉनिक कैलकुलेटर पर ₹40,024 में से ₹34,903 घटाने पर प्रदर्शित ₹5,121 का भौतिक मिलान साक्ष्य।",
    descriptionEn: "Photographic audit evidence with electronic calculator verifying preliminary balance 40,024 - 34,903 = 5,121.",
    verifiedNotes: [
      "कैलकुलेटर डिस्प्ले: 5,121",
      "डायरी प्रविष्टियों के साथ प्रत्यक्ष मिलान",
      "अंतिम शुद्ध बचत ₹1,821 की गणना का आधार"
    ],
  },
];
