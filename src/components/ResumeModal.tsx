import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Download, Printer, CheckCircle2, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, experiences, skillCategories, ui } = useLanguage();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      window.print();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={onClose}
    >
      <Helmet>
        <title>{`${ui.resumeModal.title} — ${profile.name} // ${profile.brandName}`}</title>
        <meta name="description" content={`Verified resume, technical skillset, and career history of ${profile.name}, ${profile.title}.`} />
      </Helmet>

      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-2xl p-6 sm:p-10 md:p-12 print:border-none print:shadow-none print:max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar (hidden in print) */}
        <div className="flex justify-between items-center border-b border-[var(--border-hairline)] pb-6 mb-8 print:hidden">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-[var(--text-primary)]" />
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              {ui.resumeModal.verifiedTag}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="print-resume-btn"
              onClick={handleDownload}
              className="border border-[var(--border-hairline)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] font-label-minimal text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors cursor-pointer flex items-center gap-2"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{ui.resumeModal.downloaded}</span>
                </>
              ) : (
                <>
                  <Printer className="w-3.5 h-3.5" />
                  <span>{downloading ? ui.resumeModal.preparing : ui.resumeModal.printPdf}</span>
                </>
              )}
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-[var(--border-hairline)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 text-[14px] text-[var(--text-primary)]">
          {/* Header */}
          <div className="border-b border-[var(--border-hairline)] pb-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <h1 className="font-display-editorial text-[32px] sm:text-[38px] font-normal leading-tight">
                {profile.name}
              </h1>
              <p className="font-label-minimal text-[11px] uppercase text-[var(--text-muted)] tracking-[0.25em] mt-1">
                {profile.title}
              </p>
            </div>
            <div className="font-label-minimal text-[10px] text-[var(--text-muted)] space-y-1 text-left md:text-right tracking-[0.15em]">
              <div>SAN FRANCISCO, CA / REMOTE</div>
              <div>{profile.socials.email}</div>
              <div>github.com/stanleenwosu // linkedin.com/in/stanleenwosu</div>
            </div>
          </div>

          {/* Professional Statement */}
          <div>
            <h2 className="font-label-minimal text-[10px] uppercase text-[var(--text-muted)] tracking-[0.25em] mb-2">
              {ui.resumeModal.summaryTitle}
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed">
              {profile.bioParagraphs[0]} {profile.bioParagraphs[1]}
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="font-label-minimal text-[10px] uppercase text-[var(--text-muted)] tracking-[0.25em] mb-4 border-b border-[var(--border-hairline)] pb-1">
              {ui.resumeModal.experienceTitle}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <span className="font-headline-editorial text-[17px] font-normal">
                      {exp.role} <span className="text-[14px] italic font-display-serif text-[var(--text-muted)]">@ {exp.company}</span>
                    </span>
                    <span className="font-label-minimal text-[10px] text-[var(--text-muted)]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">{exp.description}</p>
                  {exp.bullets && (
                    <ul className="list-disc pl-5 space-y-1 text-[12.5px] text-[var(--text-secondary)] font-light">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-label-minimal text-[9px] border border-[var(--border-hairline)] px-2 py-0.5 bg-[var(--surface-subtle)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="font-label-minimal text-[10px] uppercase text-[var(--text-muted)] tracking-[0.25em] mb-4 border-b border-[var(--border-hairline)] pb-1">
              {ui.resumeModal.skillsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.code} className="border border-[var(--border-hairline)] p-4 bg-[var(--surface-card)] shadow-2xs">
                  <div className="font-label-minimal text-[10px] font-semibold uppercase mb-1">
                    {cat.title}
                  </div>
                  <div className="text-[12px] text-[var(--text-secondary)] font-light">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

