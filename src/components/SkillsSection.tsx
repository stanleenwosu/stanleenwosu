import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { skillCategories, ui } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 border-b border-[var(--border-hairline)] px-6 md:px-12 bg-[var(--surface-subtle)]">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <header className="mb-16 md:mb-20 max-w-4xl">
          <span className="font-label-minimal text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] mb-3 block">
            {ui.skillsSection.badge}
          </span>
          <h2 className="font-display-editorial text-[48px] sm:text-[64px] md:text-[80px] text-[var(--text-primary)] leading-[0.92] font-light tracking-[-0.04em] mb-6">
            {ui.skillsSection.headlineFirst} <span className="italic font-normal">{ui.skillsSection.headlineSecond}</span>
          </h2>
          <div className="flex items-start gap-6 max-w-2xl">
            <div className="h-px w-10 bg-neutral-300 dark:bg-neutral-700 mt-3 flex-shrink-0" />
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed">
              {ui.skillsSection.desc}
            </p>
          </div>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const isHovered = activeCategoryIndex === idx;
            return (
              <div
                key={cat.code}
                id={`skill-category-${cat.code}`}
                onMouseEnter={() => setActiveCategoryIndex(idx)}
                onMouseLeave={() => setActiveCategoryIndex(null)}
                className={`border border-[var(--border-hairline)] bg-[var(--surface-card)] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xs ${
                  isHovered ? 'border-neutral-400 dark:border-neutral-600 shadow-xs' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-baseline border-b border-[var(--border-hairline)] pb-4 mb-6">
                    <div>
                      <span className="font-label-minimal text-[9px] text-[var(--text-muted)] uppercase tracking-[0.25em] block mb-1">
                        {cat.code}
                      </span>
                      <h3 className="font-headline-editorial text-[22px] sm:text-[25px] text-[var(--text-primary)] font-normal tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <Terminal className="w-4 h-4 text-[var(--text-muted)]" />
                  </div>

                  <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                    {cat.description}
                  </p>

                  {/* Skills List with Clean Minimal Progress Bars */}
                  <div className="space-y-5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-[13px]">
                          <span className="font-medium text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[var(--text-primary)]"></span>
                            {skill.name}
                          </span>
                          <span className="font-label-minimal text-[10px] text-[var(--text-muted)]">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Minimalist Progress Track */}
                        <div className="w-full h-1 bg-[var(--surface-inset)] overflow-hidden">
                          <div
                            className="h-full bg-[var(--text-primary)] transition-all duration-700 opacity-90"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        <div className="text-[11px] text-[var(--text-muted)] italic font-display-serif">
                          Focus: {skill.focus}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Footer in Card */}
                <div className="mt-10 pt-4 border-t border-[var(--border-hairline)] flex justify-between items-center text-[10px] font-label-minimal text-[var(--text-muted)] uppercase tracking-[0.2em]">
                  <span>PRODUCTION PROVEN</span>
                  <span>ZERO REGRESSIONS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

