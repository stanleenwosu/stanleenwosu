import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, LocalizedContent, TRANSLATIONS } from '../data/translations';
import { Project, ExperienceItem, SkillCategory } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  profile: LocalizedContent['profile'];
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  ui: LocalizedContent['ui'];
  t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'stanlee_portfolio_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'en' || saved === 'de')) {
        return saved;
      }
      // Check browser language
      if (navigator.language && navigator.language.startsWith('de')) {
        return 'de';
      }
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const currentData = useMemo(() => {
    return TRANSLATIONS[language] || TRANSLATIONS.en;
  }, [language]);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = currentData.ui;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return path;
      }
    }
    return typeof current === 'string' ? current : path;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      profile: currentData.profile,
      projects: currentData.projects,
      experiences: currentData.experiences,
      skillCategories: currentData.skillCategories,
      ui: currentData.ui,
      t,
    }),
    [language, currentData]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
