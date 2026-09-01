import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'minimal' | 'compact';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', variant = 'minimal' }) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center ${className}`}>
      {variant === 'compact' ? (
        <button
          id="language-switcher-compact-btn"
          onClick={toggleLanguage}
          title={language === 'en' ? 'Sprache auf Deutsch umstellen (DE)' : 'Switch language to English (EN)'}
          aria-label={language === 'en' ? 'Switch language to German' : 'Switch language to English'}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border border-[var(--border-hairline)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] transition-all rounded-xs cursor-pointer shadow-2xs group"
        >
          <Globe className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
          <span className="font-semibold">{language.toUpperCase()}</span>
        </button>
      ) : (
        <div
          id="language-switcher-pill"
          role="group"
          aria-label="Language selection"
          className="flex items-center border border-[var(--border-hairline)] bg-[var(--surface-subtle)] p-0.5 rounded-xs"
        >
          <button
            id="lang-btn-en"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            title="English"
            className={`px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase transition-all duration-150 cursor-pointer rounded-2xs ${
              language === 'en'
                ? 'bg-[var(--text-primary)] text-[var(--bg-main)] font-bold shadow-2xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] font-medium'
            }`}
          >
            EN
          </button>
          <button
            id="lang-btn-de"
            onClick={() => setLanguage('de')}
            aria-pressed={language === 'de'}
            title="Deutsch"
            className={`px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase transition-all duration-150 cursor-pointer rounded-2xs ${
              language === 'de'
                ? 'bg-[var(--text-primary)] text-[var(--bg-main)] font-bold shadow-2xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] font-medium'
            }`}
          >
            DE
          </button>
        </div>
      )}
    </div>
  );
};
