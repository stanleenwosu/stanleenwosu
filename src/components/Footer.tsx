import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  brandVariant: 'STANLEE_NM' | 'DEV';
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  const { ui } = useLanguage();

  return (
    <footer className="w-full border-t border-[var(--border-hairline)] bg-[var(--bg-main)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <span className="font-label-minimal text-[10px] uppercase tracking-[0.25em] font-semibold text-[var(--text-primary)] font-mono">
            STANLEE_NM
          </span>
          <span className="text-[12px] text-[var(--text-muted)] italic font-display-serif">
            {ui.footer.tagline}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <span className="font-label-minimal text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
            {ui.footer.rights}
          </span>

          <button
            id="footer-back-to-top-btn"
            onClick={onScrollTop}
            className="font-label-minimal text-[10px] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline decoration-1 underline-offset-4 transition-colors tracking-[0.25em] cursor-pointer"
          >
            {ui.footer.ascend}
          </button>
        </div>
      </div>
    </footer>
  );
};

