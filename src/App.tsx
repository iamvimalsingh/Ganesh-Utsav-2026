/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpeningIntro } from './components/OpeningIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DevotionalInteractions } from './components/DevotionalInteractions';
import { TwoWorldsSection } from './components/TwoWorldsSection';
import { Timeline } from './components/Timeline';
import { PhotoGallery } from './components/PhotoGallery';
import { PostersSection } from './components/PostersSection';
import { SpecialHonors } from './components/SpecialHonors';
import { FinancialDashboard } from './components/FinancialDashboard';
import { DiaryEvidence } from './components/DiaryEvidence';
import { ChandaLedger } from './components/ChandaLedger';
import { ExpenseBreakdown } from './components/ExpenseBreakdown';
import { MemoryCounter } from './components/MemoryCounter';
import { ClosingMemory } from './components/ClosingMemory';
import { NoticeAndFooter } from './components/NoticeAndFooter';
import { AccountingDetailDrawer, DrilldownTab } from './components/AccountingDetailDrawer';
import { DiaryEvidenceItem } from './data/festivalData';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Accounting Detail Drawer state
  const [isAccountingOpen, setIsAccountingOpen] = useState(false);
  const [accountingTab, setAccountingTab] = useState<DrilldownTab>('overview');
  const [activeEvidenceItem, setActiveEvidenceItem] = useState<DiaryEvidenceItem | null>(null);

  const handleOpenAccounting = (tab: DrilldownTab = 'overview') => {
    setAccountingTab(tab);
    setIsAccountingOpen(true);
  };

  const handleOpenEvidence = (item: DiaryEvidenceItem) => {
    setActiveEvidenceItem(item);
    // Scroll smoothly to evidence section if needed
    const element = document.getElementById('evidence');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'overview',
        'devotional-experience',
        'timeline',
        'gallery',
        'posters',
        'honors',
        'financials',
        'evidence',
        'donors',
        'expenses',
      ];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTimelineCategory = (cat: 'religious' | 'community_games') => {
    const element = document.getElementById('timeline');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2D1B10] flex flex-col font-sans selection:bg-[#FF7722] selection:text-white relative">
      {/* Auspicious Entrance Curtain */}
      {!introFinished && (
        <OpeningIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Fixed Sticky Auspicious Top Navigation */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Main Content Experience */}
      <main className="flex-grow">
        {/* 1. Hero: Cinematic Real Ganesh Darshan + Bhakti Touch + Interactive Bell */}
        <Hero lang={lang} onOpenAccounting={handleOpenAccounting} />

        {/* 2. Festival Introduction: Spirit of Community Seva */}
        <Introduction lang={lang} />

        {/* 3. Devotional Interactions: Pushpa Arpan, 7 Diyas, Mantra Counter, Daily Aarti & Sankalpa */}
        <DevotionalInteractions lang={lang} />

        {/* 4. Two Worlds of the Festival: Interactive Split Comparison */}
        <TwoWorldsSection lang={lang} onSelectCategory={handleSelectTimelineCategory} />

        {/* 5. Festival Journey: 12-Day Interactive Timeline with Real Photos */}
        <Timeline lang={lang} />

        {/* 6. Real Photo Memory Gallery: "उत्सव की वास्तविक स्मृतियाँ" */}
        <PhotoGallery lang={lang} />

        {/* 7. Program Posters: "कार्यक्रम पोस्टर" */}
        <PostersSection lang={lang} />

        {/* 8. Special Honors: "जो हमने सहयोग दिया" (Dedicated Seva Contributors) */}
        <SpecialHonors lang={lang} />

        {/* 9. Financial Transparency Dashboard: "जिसका हिसाब रखा" */}
        <FinancialDashboard
          lang={lang}
          onOpenAccounting={handleOpenAccounting}
          onOpenEvidence={handleOpenEvidence}
        />

        {/* 10. Original Diary Evidence: "और जिसका मूल प्रमाण यहाँ है" ("मूल लेखा साक्ष्य") */}
        <DiaryEvidence
          lang={lang}
          externalActiveItem={activeEvidenceItem}
          onCloseExternalItem={() => setActiveEvidenceItem(null)}
        />

        {/* 11. Chanda Collection Ledger: Online Chanda (40) & Cash Chanda (32) */}
        <ChandaLedger lang={lang} onOpenEvidence={handleOpenEvidence} />

        {/* 12. Itemized Expense Breakdown */}
        <ExpenseBreakdown lang={lang} onOpenEvidence={handleOpenEvidence} />

        {/* 13. Festival Memory Counter */}
        <MemoryCounter lang={lang} />

        {/* 14. Closing Emotional Festival Memory (Visarjan Closing Experience) */}
        <ClosingMemory lang={lang} />
      </main>

      {/* Accounting Drill-Down Side Drawer / Modal */}
      <AccountingDetailDrawer
        isOpen={isAccountingOpen}
        onClose={() => setIsAccountingOpen(false)}
        initialTab={accountingTab}
        lang={lang}
        onOpenEvidence={(item) => {
          setIsAccountingOpen(false);
          handleOpenEvidence(item);
        }}
      />

      {/* 15. Required Verification Notice & Footer */}
      <NoticeAndFooter lang={lang} />
    </div>
  );
}
