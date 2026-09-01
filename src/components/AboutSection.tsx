import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ResumeModal } from './ResumeModal';

export const AboutSection: React.FC = () => {
  const { profile, experiences, ui } = useLanguage();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 border-b border-[var(--border-hairline)] px-6 md:px-12 bg-[var(--bg-main)]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Column: Studio Portrait & Spec Card */}
        <div className="w-full lg:w-[38%] flex flex-col gap-6">
          <div className="w-full aspect-[4/5] bg-[var(--surface-subtle)] p-6 border border-[var(--border-hairline)] shadow-xs">
            <div className="w-full h-full bg-[var(--surface-card)] border border-[var(--border-hairline)] relative overflow-hidden group shadow-xs">
              <img
                src={profile.portraitUrl}
                alt={profile.portraitAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-95 transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white font-label-minimal text-[9px] px-2 py-1 tracking-[0.25em] uppercase border border-white/10">
                PORTRAIT // STANLEE NWOSU
              </div>
            </div>
          </div>

          <button
            id="download-resume-btn"
            onClick={() => setResumeOpen(true)}
            className="inline-flex items-center justify-between w-full border border-[var(--border-hairline)] bg-[var(--surface-card)] px-6 py-4 text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-all duration-200 font-label-minimal text-[10px] uppercase tracking-[0.25em] group cursor-pointer shadow-2xs"
          >
            <span>{ui.aboutSection.cvButton}</span>
            <Download className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Column: Bio & Experience Timeline */}
        <div className="w-full lg:w-[62%] flex flex-col gap-16">
          {/* Bio Section */}
          <section className="flex flex-col gap-6">
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] block">
              {ui.aboutSection.badge}
            </span>
            <h2 className="font-display-editorial text-[48px] sm:text-[64px] md:text-[80px] text-[var(--text-primary)] leading-[0.92] font-light tracking-[-0.04em]">
              {ui.aboutSection.headlineFirst} <span className="italic font-normal">{ui.aboutSection.headlineSecond}</span>
            </h2>
            <div className="flex items-start gap-6">
              <div className="h-px w-10 bg-neutral-300 dark:bg-neutral-700 mt-3 flex-shrink-0" />
              <div className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed space-y-4">
                {profile.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[var(--border-hairline)]"></div>

          {/* Experience Section */}
          <section id="experience" className="flex flex-col gap-8 scroll-mt-28">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display-editorial text-[32px] sm:text-[40px] text-[var(--text-primary)] font-light tracking-tight">
                {ui.aboutSection.careerTimeline} <span className="italic font-normal">{ui.aboutSection.careerTimelineSub}</span>
              </h3>
              <span className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.25em]">
                {ui.aboutSection.chronologyBadge}
              </span>
            </div>

            {/* Vertical Timeline with Clean Node Markers */}
            <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-hairline)] flex flex-col gap-10">
              {experiences.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Subtle Circular Node */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-2 w-2.5 h-2.5 rounded-full border border-[var(--text-primary)] bg-[var(--bg-main)] group-hover:bg-[var(--text-primary)] transition-colors"></div>

                  {/* Period */}
                  <div className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-1.5">
                    {item.period}
                  </div>

                  {/* Role Title */}
                  <h4 className="font-headline-editorial text-[20px] text-[var(--text-primary)] font-normal mb-1">
                    {item.role}
                  </h4>

                  {/* Company */}
                  <div className="text-[13px] italic font-display-serif text-[var(--text-muted)] mb-3">
                    {item.company} // {item.location || 'Distributed'}
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Interactive Printable / Viewable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

