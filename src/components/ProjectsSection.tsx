import React, { useState } from 'react';
import { ArrowRight, Code, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { CodeViewerModal } from './CodeViewerModal';
import { calculateReadingTime } from '../utils/readingTime';

export const ProjectsSection: React.FC = () => {
  const { projects, ui, language } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedCodeProject, setSelectedCodeProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 border-b border-[var(--border-hairline)] px-6 md:px-12 bg-[var(--bg-main)]">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 max-w-4xl">
          <div className="font-label-minimal text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] mb-3">
            {ui.projectsSection.tag}
          </div>
          <h2 className="font-display-editorial text-[48px] sm:text-[64px] md:text-[80px] text-[var(--text-primary)] leading-[0.92] font-light tracking-[-0.04em] mb-6">
            {ui.projectsSection.title} <span className="italic font-normal">{ui.projectsSection.titleSub}</span>
          </h2>
          <div className="flex items-start gap-6 max-w-2xl">
            <div className="h-px w-10 bg-neutral-300 dark:bg-neutral-700 mt-3 flex-shrink-0" />
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed">
              {ui.projectsSection.desc}
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="flex flex-col border border-[var(--border-hairline)] bg-[var(--surface-card)] transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 group"
            >
              {/* Image Preview Container */}
              <div className="w-full aspect-[4/3] bg-[var(--surface-subtle)] border-b border-[var(--border-hairline)] p-5 sm:p-7 flex items-center justify-center relative">
                <div className="w-full h-full bg-[var(--surface-card)] shadow-xs border border-[var(--border-hairline)] overflow-hidden relative group">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white font-label-minimal text-[9px] px-2 py-1 tracking-[0.25em] uppercase border border-white/10">
                    ARCHIVE // 0{index + 1}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-headline-editorial text-[22px] sm:text-[26px] text-[var(--text-primary)] tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-label-minimal text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3 opacity-60" />
                        {calculateReadingTime(project, language).text}
                      </span>
                      <span className="font-display-editorial text-[20px] text-[var(--text-muted)] opacity-40 font-light">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-[12px] italic font-display-serif text-[var(--text-muted)] mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="font-label-minimal text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2.5">
                      {ui.projectsSection.techStack}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-label-minimal text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] border border-[var(--border-hairline)] px-2.5 py-1 bg-[var(--surface-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="flex items-center justify-between border-t border-[var(--border-hairline)] pt-5">
                  <button
                    id={`view-case-study-${project.id}`}
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex items-center gap-3 text-[var(--text-primary)] hover:opacity-75 transition-opacity cursor-pointer group/btn"
                  >
                    <div className="w-8 h-8 rounded-full border border-[var(--border-hairline)] flex items-center justify-center group-hover/btn:bg-[var(--surface-subtle)] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-label-minimal text-[10px] uppercase tracking-[0.2em] font-semibold">
                      {ui.projectsSection.viewCaseStudy}
                    </span>
                  </button>

                  <button
                    id={`view-code-${project.id}`}
                    onClick={() => setSelectedCodeProject(project)}
                    title="Inspect Source Code"
                    aria-label={`View code for ${project.title}`}
                    className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Code className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenCode={(proj) => setSelectedCodeProject(proj)}
      />

      {/* Code Viewer Modal */}
      <CodeViewerModal
        project={selectedCodeProject}
        onClose={() => setSelectedCodeProject(null)}
      />
    </section>
  );
};

