export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  architectureBreakdown: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  tags: string[];
  techStack: string[];
  image: string;
  imageAlt: string;
  codeSnippet: string;
  codeLanguage: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  bullets?: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage or scale
    focus: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}
