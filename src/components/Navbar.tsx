import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { devotionalAudio } from '../utils/devotionalAudio';

interface NavbarProps {
  lang: 'hi' | 'en';
  setLang: (l: 'hi' | 'en') => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, activeSection }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const nowPlaying = devotionalAudio.toggle();
    setIsPlaying(nowPlaying);
  };

  const navLinks = [
    { id: 'overview', labelHi: 'परिचय', labelEn: 'Overview' },
    { id: 'timeline', labelHi: 'कार्यक्रम', labelEn: 'Timeline' },
    { id: 'gallery', labelHi: 'स्मृतियाँ', labelEn: 'Memories' },
    { id: 'posters', labelHi: 'पोस्टर', labelEn: 'Posters' },
    { id: 'honors', labelHi: 'विशेष सम्मान', labelEn: 'Honors' },
    { id: 'financials', labelHi: 'वित्तीय विवरण', labelEn: 'Accounts' },
    { id: 'evidence', labelHi: 'मूल लेखा साक्ष्य', labelEn: 'Diary Evidence' },
    { id: 'donors', labelHi: 'चंदा सूची', labelEn: 'Chanda' },
    { id: 'expenses', labelHi: 'व्यय विवरण', labelEn: 'Expenses' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#780016]/95 text-[#FFFDF7] shadow-xl backdrop-blur-md border-b border-[#D4AF37]/30 py-2.5'
          : 'bg-gradient-to-b from-[#5A0010]/95 via-[#780016]/90 to-transparent text-[#FFFDF7] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF7722] via-[#D4AF37] to-[#FFFDF7] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#780016] rounded-full flex items-center justify-center text-base font-bold text-[#FFDF80]">
                ॐ
              </div>
            </div>
            <div>
              <span className="block text-sm sm:text-base font-serif font-bold text-[#FFFDF7] group-hover:text-[#FFDF80] transition-colors leading-tight">
                {lang === 'hi' ? 'श्री गणेश उत्सव 2026' : 'Shree Ganesh Utsav 2026'}
              </span>
              <span className="block text-[11px] text-[#D4AF37] tracking-wider">
                {lang === 'hi' ? 'मयूर होम्स कॉलोनी, भोपाल' : 'Mayur Homes Colony, Bhopal'}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#5A0010] font-bold shadow-sm'
                      : 'text-[#FFFDF7]/90 hover:text-white hover:bg-[#D4AF37]/15'
                  }`}
                >
                  {lang === 'hi' ? link.labelHi : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Action Controls: Audio + Lang + Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Devotional Ambient Sound Toggle */}
            <button
              onClick={handleAudioToggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                isPlaying
                  ? 'bg-[#FF7722] text-white border-[#FF9E54] shadow-lg animate-pulse'
                  : 'bg-[#5A0010]/70 text-[#D4AF37] border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 hover:text-white'
              }`}
              title={isPlaying ? 'भक्ति ध्वनि रोकें / Pause Ambient Sound' : 'भक्ति ध्वनि चलाएं / Play Ambient Sound'}
              aria-label="Ambient Audio Toggle"
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]" />}
              <span className="hidden sm:inline">
                {isPlaying ? (lang === 'hi' ? 'भक्ति नाद 🔔' : 'Ambience On') : (lang === 'hi' ? 'भक्ति नाद' : 'Ambience')}
              </span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFDF80] hover:bg-[#D4AF37] hover:text-[#780016] transition-colors"
              title="भाषा बदलें / Toggle Language"
            >
              {lang === 'hi' ? 'EN' : 'हिन्दी'}
            </button>

            {/* Quick Transparency Jump */}
            <button
              onClick={() => scrollTo('financials')}
              className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#5A0010] font-bold text-xs rounded-full shadow-md transition-transform hover:scale-105"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'आय-व्यय' : 'Ledger'}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#5A0010]/80 text-[#D4AF37] hover:text-white border border-[#D4AF37]/30"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#5A0010] border-b-2 border-[#D4AF37] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#780016]/80 text-left text-xs text-[#FFFDF7] hover:bg-[#D4AF37] hover:text-[#5A0010] font-medium border border-[#D4AF37]/20 transition-all"
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>{lang === 'hi' ? link.labelHi : link.labelEn}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex justify-between items-center text-xs">
            <button
              onClick={() => scrollTo('financials')}
              className="w-full py-2.5 bg-[#FF7722] text-white font-bold text-center rounded-lg shadow flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'hi' ? 'वित्तीय पारदर्शिता विवरण देखें' : 'View Financial Transparency'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
