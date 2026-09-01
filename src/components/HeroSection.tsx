import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { profile, projects, ui } = useLanguage();
  const featuredProject = projects[0];

  return (
    <section id="home" className="w-full border-b border-[var(--border-hairline)] flex flex-col">
      {/* Main Split Hero Viewport */}
      <div className="max-w-[1280px] mx-auto w-full min-h-[calc(100vh-140px)] flex flex-col lg:flex-row">
        {/* Left Side: 58% Editorial Statement */}
        <div className="w-full lg:w-[58%] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[var(--border-hairline)]">
          {/* Volume / Category Tag */}
          <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--text-muted)] mb-8 font-semibold block">
            {ui.hero.badge}
          </span>

          {/* Editorial Display Headline */}
          <h1 className="font-display-editorial text-[60px] sm:text-[76px] md:text-[92px] lg:text-[100px] text-[var(--text-primary)] leading-[0.88] font-light tracking-[-0.04em] mb-10">
            {ui.hero.headlineFirst}<br />
            <span className="italic font-normal">{ui.hero.headlineSecond}</span>
          </h1>

          {/* Subtitle with Horizontal Line Divider Accent */}
          <div className="flex items-start gap-6 sm:gap-8 max-w-xl mb-12">
            <div className="h-px w-10 sm:w-12 bg-neutral-300 dark:bg-neutral-700 mt-3.5 flex-shrink-0" />
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[var(--text-secondary)] font-light font-body-sans">
              {profile.tagline}
            </p>
          </div>

          {/* Action Interaction Controls */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <button
              id="hero-view-work-btn"
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-4 group cursor-pointer text-left bg-transparent border-0 p-0"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--border-hairline)] bg-[var(--surface-card)] flex items-center justify-center group-hover:bg-[var(--surface-hover)] group-hover:scale-105 transition-all duration-200">
                <ArrowRight className="w-4 h-4 text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="font-label-minimal text-[10px] uppercase tracking-[0.25em] font-semibold text-[var(--text-primary)]">
                {ui.hero.viewProjects}
              </span>
            </button>

            <button
              id="hero-inquiry-btn"
              onClick={() => onNavigate('contact')}
              className="font-label-minimal text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-8 transition-colors cursor-pointer py-2"
            >
              {ui.hero.getInTouch}
            </button>
          </div>
        </div>

        {/* Right Side: 42% Curated Architectural Preview Panel */}
        <div className="w-full lg:w-[42%] bg-[var(--surface-subtle)] p-8 sm:p-12 flex flex-col justify-between">
          <div className="w-full aspect-[4/5] bg-[var(--surface-card)] shadow-sm flex items-center justify-center p-6 md:p-8 border border-[var(--border-hairline)]">
            <div className="w-full h-full bg-[var(--surface-inset)] flex flex-col items-center justify-center p-4 relative overflow-hidden group">
              <img
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="font-label-minimal text-[9px] uppercase tracking-[0.3em] text-white/90">
                  {ui.hero.featuredBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Project Preview Meta Row */}
          <div className="flex justify-between items-end mt-8 pt-4 border-t border-[var(--border-hairline)]">
            <div className="space-y-1">
              <span className="block font-label-minimal text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--text-primary)]">
                {featuredProject.title}
              </span>
              <span className="block text-[11px] text-[var(--text-muted)] italic font-display-serif">
                {featuredProject.subtitle}
              </span>
            </div>
            <div className="text-[36px] font-light leading-none text-[var(--text-primary)] opacity-20 font-display-editorial">
              01
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Architectural Principles Banner */}
      <div className="border-t border-[var(--border-hairline)] bg-[var(--bg-main)]">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--border-hairline)]">
            <span className="font-label-minimal text-[9px] uppercase tracking-[0.3em] font-bold text-[var(--text-muted)] mb-4 block">
              {ui.hero.pillar1Title}
            </span>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] font-light pr-2">
              {ui.hero.pillar1Desc}
            </p>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--border-hairline)]">
            <span className="font-label-minimal text-[9px] uppercase tracking-[0.3em] font-bold text-[var(--text-muted)] mb-4 block">
              {ui.hero.pillar2Title}
            </span>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] font-light pr-2">
              {ui.hero.pillar2Desc}
            </p>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between">
            <span className="font-label-minimal text-[9px] uppercase tracking-[0.3em] font-bold text-[var(--text-muted)] mb-4 block">
              {ui.hero.pillar3Title}
            </span>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)] font-light pr-2">
              {ui.hero.pillar3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

