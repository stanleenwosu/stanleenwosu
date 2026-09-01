/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeadMetadata } from './components/HeadMetadata';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
    }
    return false;
  });

  const [brandVariant, setBrandVariant] = useState<'STANLEE_NM' | 'DEV'>('STANLEE_NM');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-200 antialiased selection:bg-[var(--text-primary)] selection:text-[var(--bg-main)]">
      {/* Dynamic SEO & Social Head Metadata via React Helmet */}
      <HeadMetadata activeSection={activeSection} />

      {/* Scroll Depth Progress Bar */}
      <ScrollProgressBar />

      {/* Top Navbar with Brand, Nav Links & Dark Mode Toggle */}
      <TopNavbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        brandVariant={brandVariant}
        onToggleBrand={() => setBrandVariant((prev) => (prev === 'STANLEE_NM' ? 'DEV' : 'STANLEE_NM'))}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Screen 1: Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Screen 2: Projects / Selected Works Section */}
        <ProjectsSection />

        {/* Screen 3: About & Experience Timeline Section */}
        <AboutSection />

        {/* Technical Competency / Skills Section */}
        <SkillsSection />

        {/* Screen 4: Contact / Get in Touch Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer brandVariant={brandVariant} onScrollTop={handleScrollTop} />
    </div>
  );
}
