/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpeningIntro } from './components/OpeningIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
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

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'overview',
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
        {/* 1. Hero: Cinematic Real Ganesh Darshan */}
        <Hero lang={lang} />

        {/* 2. Festival Introduction: Spirit of Community Seva */}
        <Introduction lang={lang} />

        {/* 3. Two Worlds of the Festival: Interactive Split Comparison */}
        <TwoWorldsSection lang={lang} onSelectCategory={handleSelectTimelineCategory} />

        {/* 4. Festival Journey: 12-Day Interactive Timeline with Real Photos */}
        <Timeline lang={lang} />

        {/* 5. Real Photo Memory Gallery: "उत्सव की वास्तविक स्मृतियाँ" */}
        <PhotoGallery lang={lang} />

        {/* 6. Program Posters: "कार्यक्रम पोस्टर" */}
        <PostersSection lang={lang} />

        {/* 7. Special Honors: "जो हमने सहयोग दिया" (Dedicated Seva Contributors) */}
        <SpecialHonors lang={lang} />

        {/* 8. Financial Transparency Dashboard: "जिसका हिसाब रखा" */}
        <FinancialDashboard lang={lang} />

        {/* 9. Original Diary Evidence: "और जिसका मूल प्रमाण यहाँ है" ("मूल लेखा साक्ष्य") */}
        <DiaryEvidence lang={lang} />

        {/* 10. Chanda Collection Ledger: Online Chanda (40) & Cash Chanda (32) */}
        <ChandaLedger lang={lang} />

        {/* 11. Itemized Expense Breakdown */}
        <ExpenseBreakdown lang={lang} />

        {/* 12. Festival Memory Counter */}
        <MemoryCounter lang={lang} />

        {/* 13. Closing Emotional Festival Memory */}
        <ClosingMemory lang={lang} />
      </main>

      {/* 14. Required Verification Notice & Footer */}
      <NoticeAndFooter lang={lang} />
    </div>
  );
}
