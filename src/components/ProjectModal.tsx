import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, GitBranch, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { Project } from '../types';
import { calculateReadingTime } from '../utils/readingTime';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenCode: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCode }) => {
  const { language, ui } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <Helmet>
        <title>{`${project.title} // ${ui.projectModal.tag} — STANLEE_NM`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} // ${ui.projectModal.tag} — STANLEE_NM`} />
        <meta property="og:description" content={project.longDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={project.image} />
        <meta property="og:image:alt" content={project.imageAlt} />
        <meta name="twitter:title" content={`${project.title} // ${ui.projectModal.tag} — STANLEE_NM`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-2xl p-6 sm:p-10 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start border-b border-[var(--border-hairline)] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.3em]">
                {ui.projectModal.tag}
              </span>
              <span className="font-label-minimal text-[9px] text-[var(--text-muted)] uppercase tracking-[0.2em] flex items-center gap-1 border border-[var(--border-hairline)] px-2 py-0.5 bg-[var(--surface-subtle)]">
                <Clock className="w-3 h-3 opacity-60" />
                {calculateReadingTime(project, language).text}
              </span>
            </div>
            <h2 className="font-display-editorial text-[32px] sm:text-[40px] text-[var(--text-primary)] leading-tight font-normal">
              {project.title}
            </h2>
            <p className="text-[13px] italic font-display-serif text-[var(--text-muted)] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close Case Study"
            className="w-10 h-10 rounded-full border border-[var(--border-hairline)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Image in Modal */}
        <div className="w-full aspect-[21/9] border border-[var(--border-hairline)] bg-[var(--surface-subtle)] p-3 sm:p-4 mb-8 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-95"
          />
        </div>

        {/* Executive Summary */}
        <div className="mb-10">
          <span className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2 block">
            {ui.projectModal.overviewTitle}
          </span>
          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="border border-[var(--border-hairline)] p-6 bg-[var(--surface-subtle)] shadow-2xs"
            >
              <div className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-1">
                {metric.label}
              </div>
              <div className="font-display-editorial text-[28px] sm:text-[32px] font-normal text-[var(--text-primary)]">
                {metric.value}
              </div>
              {metric.change && (
                <div className="font-label-minimal text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 inline" />
                  {metric.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Architectural Breakdown */}
        <div className="mb-10 border-t border-[var(--border-hairline)] pt-8">
          <span className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-4 block">
            {ui.projectModal.subsystemsTitle}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.architectureBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="border border-[var(--border-hairline)] p-6 bg-[var(--surface-card)] shadow-2xs"
              >
                <div className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase mb-2">
                  0{idx + 1} // MODULE
                </div>
                <h4 className="font-headline-editorial text-[17px] text-[var(--text-primary)] mb-2 font-normal">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[var(--text-secondary)] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-10 border-t border-[var(--border-hairline)] pt-6">
          <div className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-3">
            {ui.projectModal.verifiedStack}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-label-minimal text-[10px] text-[var(--text-secondary)] border border-[var(--border-hairline)] px-3 py-1 bg-[var(--surface-subtle)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-hairline)] pt-8">
          <button
            onClick={() => {
              onClose();
              onOpenCode(project);
            }}
            className="border border-[var(--border-hairline)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] font-label-minimal text-[10px] uppercase tracking-[0.25em] px-6 py-3.5 transition-colors cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            <GitBranch className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{ui.projectModal.inspectSource}</span>
          </button>

          <button
            onClick={onClose}
            className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-label-minimal text-[10px] uppercase tracking-[0.25em] px-8 py-3.5 hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
          >
            <span>{ui.projectModal.returnBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

