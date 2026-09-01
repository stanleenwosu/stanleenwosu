import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface HeadMetadataProps {
  activeSection: string;
  selectedProjectTitle?: string | null;
}

export const HeadMetadata: React.FC<HeadMetadataProps> = ({ activeSection, selectedProjectTitle }) => {
  const { profile, projects, language } = useLanguage();

  // Current host / URL resolution for Open Graph
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://stanleenwosu.dev';

  // Section-specific metadata mapping
  const getSectionMetadata = () => {
    if (selectedProjectTitle) {
      const proj = projects.find((p) => p.title.toLowerCase() === selectedProjectTitle.toLowerCase());
      return {
        title: `${selectedProjectTitle} // ${language === 'de' ? 'Fallstudie' : 'Case Study'} — STANLEE_NM`,
        description: proj ? proj.description : `Architecture specification and technical case study for ${selectedProjectTitle} by Stanlee Nwosu.`,
        ogType: 'article',
        image: proj?.image || projects[0].image,
        imageAlt: proj?.imageAlt || 'Technical case study diagram',
      };
    }

    if (language === 'de') {
      switch (activeSection) {
        case 'projects':
          return {
            title: `Ausgewählte Werke & Produktionssysteme — STANLEE_NM`,
            description: `Kuratierte Auswahl produktiver Fullstack-Webanwendungen, Microservices und verteilter Cloud-Systeme von Stanlee Nwosu.`,
            ogType: 'website',
            image: projects[0].image,
            imageAlt: 'High-Contrast Enterprise Dashboard Interface',
          };
        case 'about':
          return {
            title: `Biografie & Entwicklungsphilosophie — STANLEE_NM`,
            description: `Fullstack-Entwickler Hintergrund, Systemphilosophie und Architekturstandards von Stanlee Nwosu.`,
            ogType: 'profile',
            image: profile.portraitUrl,
            imageAlt: profile.portraitAlt,
          };
        case 'skills':
          return {
            title: `Technische Kompetenzen & Systemarchitektur — STANLEE_NM`,
            description: `Kernkompetenzen in TypeScript, React, Next.js, Node.js, Python FastAPI, PostgreSQL, Redis und Cloud-Infrastruktur.`,
            ogType: 'website',
            image: projects[3]?.image || projects[0].image,
            imageAlt: 'Design-System und Komponenten-Architektur',
          };
        case 'experience':
          return {
            title: `Beruflicher Werdegang & Erfahrung — STANLEE_NM`,
            description: `Erfolgsbilanz und technische Wirkung in leitenden Fullstack-Softwareentwicklerpositionen und Cloud-Plattformen.`,
            ogType: 'website',
            image: profile.portraitUrl,
            imageAlt: 'Stanlee Nwosu Werdegang und Erfahrung',
          };
        case 'contact':
          return {
            title: `Kontakt & Anfragen — STANLEE_NM`,
            description: `Direkter Kontakt mit Stanlee Nwosu für Fullstack-Entwicklungsrollen, Systemdesign-Beratung und technische Projekte.`,
            ogType: 'website',
            image: profile.portraitUrl,
            imageAlt: 'Direkter Kontakt Stanlee Nwosu',
          };
        case 'home':
        default:
          return {
            title: `STANLEE_NM — Fullstack Software-Entwickler`,
            description: `${profile.name} (${profile.brandName}) — ${profile.title}. Konzeption und Entwicklung hochperformanter Webanwendungen, skalierbarer Backend-Microservices und responsiver Interfaces.`,
            ogType: 'website',
            image: projects[0].image,
            imageAlt: 'STANLEE_NM Fullstack Software Engineering Portfolio Cover',
          };
      }
    }

    switch (activeSection) {
      case 'projects':
        return {
          title: `Selected Works & Production Systems — STANLEE_NM`,
          description: `Curated archive of production fullstack web applications, microservices, and distributed cloud systems engineered by Stanlee Nwosu.`,
          ogType: 'website',
          image: projects[0].image,
          imageAlt: 'High contrast enterprise commerce and data architecture dashboard interface',
        };
      case 'about':
        return {
          title: `Biography & Engineering Philosophy — STANLEE_NM`,
          description: `Fullstack developer background, systemic philosophy, and architectural standards of Stanlee Nwosu.`,
          ogType: 'profile',
          image: profile.portraitUrl,
          imageAlt: profile.portraitAlt,
        };
      case 'skills':
        return {
          title: `Technical Competency & System Architecture — STANLEE_NM`,
          description: `Core proficiencies across TypeScript, React, Next.js, Node.js, Python FastAPI, PostgreSQL, Redis, and cloud infrastructure.`,
          ogType: 'website',
          image: projects[3]?.image || projects[0].image,
          imageAlt: 'Design system and component architecture schematic',
        };
      case 'experience':
        return {
          title: `Career Timeline & Experience — STANLEE_NM`,
          description: `Track record and technical impact across senior fullstack engineering positions, distributed cloud platforms, and enterprise web solutions.`,
          ogType: 'website',
          image: profile.portraitUrl,
          imageAlt: 'Stanlee Nwosu career history and technical experience timeline',
        };
      case 'contact':
        return {
          title: `Contact & Inquiries — STANLEE_NM`,
          description: `Initiate a direct inquiry with Stanlee Nwosu for fullstack software development roles, system design consultations, and engineering opportunities.`,
          ogType: 'website',
          image: profile.portraitUrl,
          imageAlt: 'Direct correspondence console for Stanlee Nwosu',
        };
      case 'home':
      default:
        return {
          title: `STANLEE_NM — Fullstack Software Developer`,
          description: `${profile.name} (${profile.brandName}) — ${profile.title}. Designing and engineering high-performance web applications, scalable backend microservices, and responsive digital interfaces.`,
          ogType: 'website',
          image: projects[0].image,
          imageAlt: 'STANLEE_NM Fullstack Software Engineering Portfolio Cover',
        };
    }
  };

  const meta = getSectionMetadata();

  // Structured Data (JSON-LD) for Search Engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.brandName,
    jobTitle: profile.title,
    description: profile.tagline,
    url: currentUrl,
    image: profile.portraitUrl,
    sameAs: [
      profile.socials.github,
      profile.socials.linkedin,
    ],
    knowsAbout: [
      'Fullstack Development',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Cloud Architecture'
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <html lang={language} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="author" content={profile.name} />
      <meta name="keywords" content="Stanlee Nwosu, STANLEE_NM, Fullstack Developer, Software Engineer, React, TypeScript, Next.js, Node.js, Python, PostgreSQL, Cloud Architecture, Portfolio" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="STANLEE_NM" />
      <meta property="og:type" content={meta.ogType} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:alt" content={meta.imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />

      {/* Theme Color */}
      <meta name="theme-color" content="#1A1A1A" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

