import { Project } from '../types';
import { Language } from '../data/translations';

/**
 * Calculates estimated reading time for a project case study.
 * Words considered: title, subtitle, description, longDescription,
 * architecture breakdown titles and descriptions, and code snippet.
 * Average reading speed: 200 words per minute (technical reading).
 */
export function calculateReadingTime(
  project: Project,
  language: Language = 'en'
): { minutes: number; text: string; wordCount: number } {
  let combinedText = `${project.title} ${project.subtitle} ${project.description} ${project.longDescription}`;

  if (project.architectureBreakdown && project.architectureBreakdown.length > 0) {
    project.architectureBreakdown.forEach((item) => {
      combinedText += ` ${item.title} ${item.description}`;
    });
  }

  // Count words (splitting on whitespace)
  const words = combinedText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Assuming ~200 WPM reading speed
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  const text = language === 'de' ? `${minutes} Min. Lesezeit` : `${minutes} min read`;

  return {
    minutes,
    text,
    wordCount,
  };
}
