import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CodeViewerModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({ project, onClose }) => {
  const { ui } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[var(--surface-card)] border border-[var(--border-hairline)] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[var(--border-hairline)] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-[var(--text-primary)]" />
            <div>
              <span className="font-label-minimal text-[10px] text-[var(--text-muted)] uppercase tracking-[0.25em] block">
                {ui.codeModal.title} // {project.codeLanguage.toUpperCase()}
              </span>
              <h3 className="font-headline-editorial text-[20px] text-[var(--text-primary)] font-normal">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close code modal"
            className="w-9 h-9 rounded-full border border-[var(--border-hairline)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Code Editor Container */}
        <div className="relative bg-[#141413] text-[#E0E0DC] border border-[var(--border-hairline)] font-mono text-[13px] leading-relaxed p-5 overflow-x-auto shadow-inner">
          <div className="flex justify-between items-center pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5 font-label-minimal">
              <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              src/core/{project.id}.{project.codeLanguage === 'rust' ? 'rs' : project.codeLanguage === 'go' ? 'go' : 'ts'}
            </span>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors cursor-pointer font-label-minimal text-[10px] uppercase tracking-wider border border-neutral-700"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>{ui.codeModal.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{ui.codeModal.copy}</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto text-[12.5px] font-mono py-2 text-neutral-200 whitespace-pre">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-between items-center text-[10px] font-label-minimal text-[var(--text-muted)] uppercase tracking-[0.2em]">
          <span>{ui.codeModal.benchmarked}</span>
          <button
            onClick={onClose}
            className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-6 py-2.5 hover:opacity-90 transition-opacity cursor-pointer font-label-minimal text-[10px] uppercase tracking-[0.25em]"
          >
            {ui.codeModal.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
};

