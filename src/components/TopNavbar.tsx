import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

interface TopNavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  brandVariant: 'STANLEE_NM' | 'DEV';
  onToggleBrand: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  activeSection,
  onNavigate,
  brandVariant,
  onToggleBrand,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ui } = useLanguage();

  const navLinks = [
    { id: 'home', label: ui.nav.studio },
    { id: 'projects', label: ui.nav.projects },
    { id: 'about', label: ui.nav.about },
    { id: 'skills', label: ui.nav.skills },
    { id: 'experience', label: ui.nav.timeline },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-main)]/95 backdrop-blur-xs border-b border-[var(--border-hairline)] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        {/* Brand & Main Navigation Group */}
        <div className="flex items-center gap-8 md:gap-12">
          <button
            id="brand-logo-btn"
            onClick={onToggleBrand}
            title="STANLEE_NM // Fullstack Software Developer"
            className="text-[18px] md:text-[20px] font-bold tracking-tighter uppercase text-[var(--text-primary)] hover:opacity-80 transition-opacity text-left cursor-pointer font-mono"
          >
            {brandVariant === 'STANLEE_NM' ? 'STANLEE_NM' : 'STANLEE // FULLSTACK'}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-7 items-center text-[11px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold underline underline-offset-8 decoration-1'
                      : 'text-[var(--text-secondary)] opacity-60 hover:opacity-100 hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Side Action Controls: Language Switcher, Inquiry, Dark Mode */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/* Language Switcher Utility */}
          <LanguageSwitcher />

          <button
            id="nav-inquiry-btn"
            onClick={() => handleLinkClick('contact')}
            className={`hidden sm:inline-block font-label-minimal text-[10px] uppercase tracking-[0.25em] px-4 py-2 transition-all duration-200 cursor-pointer ${
              activeSection === 'contact'
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold ring-1 ring-[var(--border-primary)]'
                : 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90'
            }`}
          >
            {ui.nav.inquiry}
          </button>

          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle-btn"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[var(--border-hairline)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-primary)] hover:opacity-70"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-hairline)] bg-[var(--bg-main)] px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Language / Sprache
            </span>
            <LanguageSwitcher />
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left font-label-minimal text-[11px] uppercase tracking-[0.2em] py-2 border-b border-[var(--border-subtle)] ${
                activeSection === link.id
                  ? 'text-[var(--text-primary)] font-bold pl-2 border-l-2 border-l-[var(--border-primary)]'
                  : 'text-[var(--text-secondary)] opacity-70'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="text-left font-label-minimal text-[11px] uppercase tracking-[0.2em] py-2 text-[var(--text-primary)] font-bold"
          >
            {ui.nav.inquiry}
          </button>
        </div>
      )}
    </header>
  );
};

