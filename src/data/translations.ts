import { Project, ExperienceItem, SkillCategory } from "../types";

const wedlyImage = new URL("../../assets/wedly.png", import.meta.url).href;
const oringoImage = new URL("../../assets/oringo.png", import.meta.url).href;
const slipsenseImage = new URL("../../assets/slipsense.png", import.meta.url).href;
const profileImage = new URL("../../assets/avatar.jpeg", import.meta.url).href;

export type Language = "en" | "de";

export interface LocalizedContent {
  profile: {
    name: string;
    brandName: string;
    title: string;
    tagline: string;
    bioParagraphs: string[];
    portraitUrl: string;
    portraitAlt: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  ui: {
    nav: {
      studio: string;
      projects: string;
      about: string;
      skills: string;
      timeline: string;
      inquiry: string;
    };
    hero: {
      badge: string;
      headlineFirst: string;
      headlineSecond: string;
      viewProjects: string;
      getInTouch: string;
      featuredBadge: string;
      featuredSubtitle: string;
      pillar1Title: string;
      pillar1Desc: string;
      pillar2Title: string;
      pillar2Desc: string;
      pillar3Title: string;
      pillar3Desc: string;
    };
    projectsSection: {
      tag: string;
      title: string;
      titleSub: string;
      desc: string;
      viewCaseStudy: string;
      techStack: string;
      architectureSpec: string;
      systemMetrics: string;
      verifiedLive: string;
      verifiedMetrics: string;
      readTime: string;
    };
    aboutSection: {
      badge: string;
      portraitLabel: string;
      cvButton: string;
      headlineFirst: string;
      headlineSecond: string;
      careerTimeline: string;
      careerTimelineSub: string;
      chronologyBadge: string;
    };
    skillsSection: {
      badge: string;
      headlineFirst: string;
      headlineSecond: string;
      desc: string;
      competencyScale: string;
      scaleDesc: string;
    };
    contactSection: {
      tag: string;
      headlineFirst: string;
      headlineSecond: string;
      desc: string;
      formName: string;
      formEmail: string;
      formSubject: string;
      formMessage: string;
      formNamePlaceholder: string;
      formEmailPlaceholder: string;
      formMessagePlaceholder: string;
      sendButton: string;
      submit: string;
      sendingButton: string;
      successTitle: string;
      successDesc: string;
      directChannels: string;
      copied: string;
    };
    projectModal: {
      tag: string;
      overviewTitle: string;
      subsystemsTitle: string;
      verifiedStack: string;
      inspectSource: string;
      returnBtn: string;
    };
    codeModal: {
      title: string;
      copied: string;
      copy: string;
      benchmarked: string;
      dismiss: string;
    };
    resumeModal: {
      title: string;
      verifiedTag: string;
      headerTag: string;
      downloadPdf: string;
      printCv: string;
      downloaded: string;
      preparing: string;
      printPdf: string;
      copied: string;
      copyDirect: string;
      summaryHeading: string;
      summaryTitle: string;
      competencyHeading: string;
      experienceHeading: string;
      experienceTitle: string;
      skillsTitle: string;
      educationHeading: string;
      educationDegree: string;
      educationSchool: string;
      educationPeriod: string;
      close: string;
    };
    footer: {
      tagline: string;
      rights: string;
      scrollTop: string;
      ascend: string;
    };
    langSwitcher: {
      toggleLabel: string;
      currentLabel: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, LocalizedContent> = {
  en: {
    profile: {
      name: "Stanley Nwosu",
      brandName: "STANLEE_NM",
      title: "FULLSTACK SOFTWARE DEVELOPER",
      tagline:
        "Designing and engineering scalable fullstack web applications, resilient backend architectures, and high-performance user experiences across the modern cloud ecosystem.",
      bioParagraphs: [
        "I am a fullstack software developer dedicated to engineering end-to-end digital solutions that bridge robust backend systems with responsive, accessible user interfaces. I work across the entire product lifecycle—from relational data modeling and REST API architecture to reactive frontend state orchestration and automated cloud deployments.",
        "With deep proficiencies in TypeScript, Angular, React, Next.js, Node.js, Python, and cloud infrastructure, I emphasize clean architectural patterns, comprehensive automated test suites, and sub-second load times. Whether crafting modular micro-frontends or engineering high-throughput backend services, I build software that delivers deterministic reliability at scale.",
      ],
      portraitUrl: profileImage,
      portraitAlt: "High-contrast monochrome studio portrait of Stanlee Nwosu, fullstack software developer.",
      socials: {
        github: "https://github.com/stanleenwosu",
        linkedin: "https://linkedin.com/in/stanleenwosu",
        email: "stanleenwosu@gmail.com",
      },
    },
    projects: [
      {
        id: "wedly-wedding-marketplace",
        title: "WEDLY WEDDING MARKETPLACE",
        subtitle: "Curated Wedding Commerce, AI Discovery & Editorial Inspiration",
        description:
          "A curated wedding marketplace for modern couples, combining category-led shopping, AI-assisted discovery, trusted vendors, and editorial inspiration.",
        longDescription:
          "Wedly brings wedding dresses, shoes, flowers, accessories, ceremony decor, and table styling into one considered shopping experience. Its homepage connects curated products with category browsing, an AI shopping entry point, vendor trust, and journal content covering real weddings, planning guides, and timeless ideas.",
        architectureBreakdown: [
          {
            title: "Curated Marketplace Discovery",
            description:
              "A focused shopping journey organizes wedding goods into clear categories, helping couples move from broad browsing to considered product choices.",
          },
          {
            title: "AI-Assisted Shopping Entry Point",
            description:
              "The Shop with AI experience gives the marketplace an additional discovery path alongside traditional category browsing.",
          },
          {
            title: "Editorial Commerce Layer",
            description:
              "The Journal adds real weddings, style guides, fashion ideas, and venue inspiration to the product-led experience.",
          },
        ],
        metrics: [
          { label: "Product Type", value: "Live product", change: "Public marketplace" },
          { label: "Discovery Model", value: "Curated shopping", change: "Category-led browsing" },
          { label: "Experience Layers", value: "Shop, AI, Journal", change: "Visible on homepage" },
        ],
        tags: ["MARKETPLACE", "CURATED COMMERCE", "AI DISCOVERY", "EDITORIAL UX", "RESPONSIVE WEB"],
        techStack: ["React", "Sharetribe", "Node.js", "Stripe", "Mapbox"],
        image: wedlyImage,
        imageAlt: "Wedding composition featured on the Wedly wedding marketplace homepage.",
        codeLanguage: "typescript",
        codeSnippet: `// Wedly product discovery map
export const discoveryChannels = {
  browse: [
    'Hens / Bachelorettes',
    'Ceremony Decor',
    'Wedding Dress',
    'Shoes',
    'Flowers',
    'Accessories',
    'Table & Decor'
  ],
  assisted: 'Shop with AI',
  editorial: ['Real weddings', 'Style guides', 'Venue inspiration']
} as const;`,
        demoUrl: "https://shopwedly.com.au/",
      },
      {
        id: "oringo-events-marketplace",
        title: "ORINGO EVENTS MARKETPLACE",
        subtitle: "Event Discovery, Vetted Vendors & Ticket Operations",
        description:
          "A live-events marketplace where people discover experiences, organizers sell tickets, and vendors offer trusted event services in one place.",
        longDescription:
          "Oringo connects the full event journey across discovery, planning, and hosting. Attendees can find events and keep tickets in one wallet, organizers can publish event pages with payments and check-in, and vendors can be discovered through ratings, pricing, and availability.",
        architectureBreakdown: [
          {
            title: "Event Discovery",
            description:
              "Search-led browsing helps people find concerts, food festivals, workshops, conferences, and other live experiences near them.",
          },
          {
            title: "Vetted Vendor Marketplace",
            description:
              "DJs, caterers, photographers, and other event professionals are presented through ratings, pricing, and availability.",
          },
          {
            title: "Organizer Operations",
            description:
              "Organizers can create event pages, sell tickets, manage check-in, and follow sales and payout activity from one workflow.",
          },
        ],
        metrics: [
          { label: "Live Events", value: "12K+", change: "Shown this week" },
          { label: "Verified Vendors", value: "4,800", change: "Rated and verified" },
          { label: "Tickets Sold", value: "2.1M", change: "Shown on homepage" },
        ],
        tags: [
          "EVENT DISCOVERY",
          "VENDOR MARKETPLACE",
          "TICKET SALES",
          "EVENT OPERATIONS",
          "LIVE EXPERIENCES",
        ],
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Paystack", "Mapbox"],
        image: oringoImage,
        imageAlt: "Live event audience gathered under stage lights.",
        codeLanguage: "typescript",
        codeSnippet: `// Oringo marketplace journeys
export const marketplaceModes = {
  attend: {
    action: "Discover & book",
    outcome: "Tickets saved in one wallet",
  },
  plan: {
    action: "Hire the talent",
    outcome: "Compare vendors by rating, price, and availability",
  },
  host: {
    action: "Sell & manage",
    outcome: "Publish, check in guests, and track payouts",
  },
} as const;`,
        demoUrl: "https://www.oringo.app/",
      },
      //       {
      //         id: "slipsense-betslip-analysis",
      //         title: "SLIPSENSE BETSLIP ANALYSIS",
      //         subtitle: "Sport Betting Analysis, Probability & Better Plays",
      //         description:
      //           "A data-backed betslip analysis tool that turns bookmaker codes into leg-by-leg context, risk signals, and smarter play suggestions.",
      //         longDescription:
      //           "SlipSense accepts booking codes from SportyBet, Afropari, MelBet, and 1xBet, then breaks each selection into win probability, recent form, head-to-head context, and risk. The result highlights the weakest leg and offers better-play suggestions, while keeping estimates informational rather than presenting them as guaranteed betting advice.",
      //         architectureBreakdown: [
      //           {
      //             title: "Booking Code Intake",
      //             description:
      //               "Users paste a booking or share code from a supported bookmaker without uploading screenshots or retyping selections.",
      //           },
      //           {
      //             title: "Per-Leg Analysis",
      //             description:
      //               "Each fixture receives probability, recent form, head-to-head, BTTS, and Over 2.5 context in a focused breakdown.",
      //           },
      //           {
      //             title: "Risk and Rebuild Guidance",
      //             description:
      //               "The slip overview calls out weaker legs and can suggest alternate markets with estimated odds when a selection looks soft.",
      //           },
      //         ],
      //         metrics: [
      //           {
      //             label: "Supported Inputs",
      //             value: "4 bookmakers",
      //             change: "SportyBet, Afropari, MelBet, 1xBet",
      //           },
      //           {
      //             label: "Analysis View",
      //             value: "Per-leg context",
      //             change: "Probability, form, and H2H",
      //           },
      //           {
      //             label: "Usage Model",
      //             value: "Token-based",
      //             change: "Free allowance to start",
      //           },
      //         ],
      //         tags: ["BETSLIP ANALYSIS", "SPORTS DATA", "PROBABILITY", "FORM & H2H", "RESPONSIBLE DESIGN"],
      //         techStack: [
      //           "Next.js",
      //           "React",
      //           "Tailwind CSS",
      //           "Python",
      //           "FastAPI",
      //           "PostgreSQL",
      //           "Claude",
      //           "Render",
      //         ],
      //         image: slipsenseImage,
      //         imageAlt: "Football match scene representing sports betting analysis.",
      //         codeLanguage: "typescript",
      //         codeSnippet: `// SlipSense analysis summary
      // export const slipAnalysis = {
      //   inputs: ["SportyBet", "Afropari", "MelBet", "1xBet"],
      //   signals: ["Win probability", "Recent form", "Head-to-head"],
      //   output: ["Slip score", "Weakest leg", "Better play"],
      // } as const;`,
      //         demoUrl: "https://slipsense-frontend.onrender.com/",
      //       },
    ],
    experiences: [
      {
        id: "exp-1",
        period: "MAY 2022 — PRESENT",
        role: "Frontend Developer (Angular)",
        company: "Evolutics Technology",
        location: "Lagos, Nigeria / Remote",
        description:
          "Building responsive, accessible insurance platforms in Angular for top insurers and government clients, architecting feature modules with lazy loading and OnPush change detection for data-heavy policy, claims, and underwriting workflows.",
        bullets: [
          "Architected feature modules with lazy loading and OnPush change detection, trimming initial bundle size by 35–45% and load time to under 2s.",
          "Engineered complex reactive UIs using Signals, RxJS observables, and NgRx for centralized state management across 50+ views.",
          "Co-developed reusable in-house npm packages and shared Angular component libraries adopted across 9+ internal projects.",
          "Translated UI/UX designs into pixel-perfect components with Angular Material and a custom design system meeting WCAG AA standards.",
          "Optimized runtime and rendering performance via AOT compilation, trackBy, pure pipes, and subscription leak fixes, improving Lighthouse scores by 30%.",
          "Ensured reliability through unit and component testing (Jasmine/Karma) at 75–85% coverage, cutting production defects by 30–40%.",
        ],
        techStack: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Jasmine", "Karma"],
      },
      {
        id: "exp-2",
        period: "SEP 2024 — DEC 2025",
        role: "Backend Developer",
        company: "My NEO Group",
        location: "Dubai, UAE / Remote",
        description:
          "Architected and built backend services in Node.js and Express powering crypto wallet operations, transaction processing, and account management for over 10k users at 99% uptime under production financial load.",
        bullets: [
          "Designed and versioned RESTful APIs consumed by internal teams, client apps, and third-party white-labelled applications, cutting partner integration time from 2 weeks to 2 days.",
          "Optimized system performance by profiling slow queries and introducing a Redis caching layer, reducing p95 API latency from 2000ms to 800ms and cutting database load by 90%.",
          "Built observability and logging analysis with Datadog, instrumenting services with structured logs, custom metrics, and distributed traces.",
          "Partnered with product, security, and compliance teams to translate regulatory requirements into technical specs, contributing to SOC 2 audit milestones and reducing data-integrity incidents by 95%.",
        ],
        techStack: ["Node.js", "Express", "Redis", "Datadog", "REST APIs", "PostgreSQL"],
      },
      {
        id: "exp-3",
        period: "APRIL 2023",
        role: "Software Developer (Contract)",
        company: "GetZelling",
        location: "Miami, USA / Remote",
        description:
          "Built a feature-rich admin dashboard in Angular and a cross-platform React Native mobile app for real estate agents and clients, with real-time data synchronization and serverless cloud architecture on GCP.",
        bullets: [
          "Built a feature-rich admin dashboard in Angular for outside agents with real-time property management, live listing status, and inventory updates.",
          "Built a cross-platform React Native mobile app serving both in-house agents and clients across iOS and Android.",
          "Designed the cloud architecture on GCP, connecting Cloud Functions, Firestore, and Cloud Storage into a serverless system.",
          "Implemented CI/CD pipelines automating build, test, and deployment, cutting release time from 30 mins to ~3 mins.",
        ],
        techStack: ["Angular", "React Native", "Node.js", "Firebase", "Firestore", "GCP", "Cloud Functions"],
      },
      {
        id: "exp-4",
        period: "FEB 2020 — APRIL 2022",
        role: "Junior Software Developer",
        company: "Briccs International Ideal Limited",
        location: "Lagos, Nigeria",
        description:
          "Contributed to telecom integrations, school management platforms, and custom CMS solutions, growing from small tickets to owning full modules.",
        bullets: [
          "Contributed to integrations with Nigeria's major telecom providers (MTN, Glo, Airtel, 9mobile) for SMS/USSD/airtime/data/payment APIs.",
          "Helped build a school management platform with features for student records, attendance, grading, and fee management.",
          "Developed features for custom Content Management Systems used by clients to manage and publish their own content.",
          "Collaborated with teammates and stakeholders, steadily taking on more responsibility as skills grew.",
        ],
        techStack: ["JavaScript", "Node.js", "HTML/CSS", "REST APIs"],
      },
    ],
    skillCategories: [
      {
        title: "Frontend Engineering",
        code: "FRONT_01",
        description: "Modern reactive frameworks, design systems, and responsive web performance.",
        skills: [
          {
            name: "React 18/19 & Next.js",
            level: 98,
            focus: "Server Components, SSR/SSG, Hooks, App Router",
          },
          {
            name: "TypeScript Strict Mode",
            level: 96,
            focus: "Complex generics, type safety, API contract typing",
          },
          {
            name: "Tailwind CSS & Design Systems",
            level: 95,
            focus: "Responsive layouts, design tokens, accessibility (a11y)",
          },
          {
            name: "State Management & Web Vitals",
            level: 94,
            focus: "Zustand, TanStack Query, optimistic UI, sub-second LCP",
          },
        ],
      },
      {
        title: "Backend & APIs",
        code: "BACK_02",
        description: "Scalable server runtimes, REST/GraphQL APIs, and asynchronous message queues.",
        skills: [
          {
            name: "Node.js & Express / NestJS",
            level: 95,
            focus: "RESTful architectures, middleware, async pipelines",
          },
          { name: "Python & FastAPI", level: 88, focus: "High-throughput microservices, background workers" },
          {
            name: "GraphQL & WebSockets",
            level: 92,
            focus: "Apollo Server, real-time sync, schema federation",
          },
          {
            name: "Auth & API Security",
            level: 93,
            focus: "OAuth2, JWT, rate limiting, role-based access control (RBAC)",
          },
        ],
      },
      {
        title: "Databases & ORMs",
        code: "DATA_03",
        description: "Relational data modeling, in-memory caches, and query optimization.",
        skills: [
          {
            name: "PostgreSQL & SQL",
            level: 94,
            focus: "Schema design, indexing, transactions, read replicas",
          },
          {
            name: "Redis Caching & Pub/Sub",
            level: 91,
            focus: "Session stores, rate limiters, distributed state",
          },
          { name: "Prisma & Drizzle ORM", level: 93, focus: "Type-safe database migrations and relations" },
          { name: "MongoDB & NoSQL", level: 87, focus: "Document modeling, aggregation pipelines" },
        ],
      },
      {
        title: "DevOps & Cloud",
        code: "CLOUD_04",
        description: "Containerization, continuous delivery pipelines, and cloud hosting.",
        skills: [
          {
            name: "Docker & Containerization",
            level: 90,
            focus: "Multi-stage builds, compose, microservice networking",
          },
          {
            name: "AWS & Cloud Hosting",
            level: 89,
            focus: "ECS, S3, Lambda, CloudFront, Vercel deployments",
          },
          {
            name: "CI/CD Automation (GitHub Actions)",
            level: 92,
            focus: "Automated test runners, linting, production deploys",
          },
          {
            name: "Monitoring & Observability",
            level: 87,
            focus: "Structured logging, error tracking, OpenTelemetry",
          },
        ],
      },
    ],
    ui: {
      nav: {
        studio: "Home",
        projects: "Projects",
        about: "About",
        skills: "Skills",
        timeline: "Experience",
        inquiry: "Get in Touch",
      },
      hero: {
        badge: "STANLEE_NM // FULLSTACK SOFTWARE ENGINEERING",
        headlineFirst: "Fullstack",
        headlineSecond: "Software Development",
        viewProjects: "Explore Projects",
        getInTouch: "Get In Touch",
        featuredBadge: "FEATURED WORK 01 // CURATED MARKETPLACE",
        featuredSubtitle: "Next.js 14 // Node.js // PostgreSQL // Stripe",
        pillar1Title: "01 / Full-Stack Precision",
        pillar1Desc:
          "Cohesive engineering across the whole stack: type-safe contracts, efficient data pipelines, and responsive client state reconciliation.",
        pillar2Title: "02 / Scalable Systems",
        pillar2Desc:
          "Containerized microservices and automated CI/CD pipelines engineered for high concurrency, zero downtime, and low latency.",
        pillar3Title: "03 / Interface Refinement",
        pillar3Desc:
          "High-contrast typography, accessible interaction patterns (WCAG AA), and fluid animations delivering effortless user workflows.",
      },
      projectsSection: {
        tag: "02 // SELECTED WORKS & PRODUCTION ARCHITECTURE",
        title: "Project",
        titleSub: "Archives",
        desc: "Curated fullstack web applications, microservices, and distributed data systems engineered for mission-critical reliability and performance.",
        viewCaseStudy: "View Case Study",
        techStack: "Tech stack",
        architectureSpec: "ARCHITECTURE SPECIFICATION // CASE STUDY",
        systemMetrics: "SYSTEM METRICS // BENCHMARKS",
        verifiedLive: "VERIFIED IN PRODUCTION",
        verifiedMetrics: "VERIFIED METRICS // PRODUCTION TELEMETRY",
        readTime: "min read",
      },
      aboutSection: {
        badge: "03 // ABOUT & PHILOSOPHY",
        portraitLabel: "PORTRAIT // STANLEE NWOSU",
        cvButton: "Curriculum Vitae",
        headlineFirst: "Engineering &",
        headlineSecond: "Execution",
        careerTimeline: "Career",
        careerTimelineSub: "Timeline",
        chronologyBadge: "04 // CHRONOLOGY",
      },
      skillsSection: {
        badge: "05 // TECHNICAL CAPABILITIES",
        headlineFirst: "System",
        headlineSecond: "Competencies",
        desc: "Proficiencies across modern frontend architectures, backend microservices, database design, and cloud infrastructure.",
        competencyScale: "COMPETENCY SCALE",
        scaleDesc: "Grounded in production-grade deployments, strict typing, and high-concurrency systems.",
      },
      contactSection: {
        tag: "06 // DIRECT CORRESPONDENCE",
        headlineFirst: "Initiate",
        headlineSecond: "Dialogue",
        desc: "Open for fullstack software development roles, engineering opportunities, and technical consulting.",
        formName: "Full Name",
        formEmail: "Email Address",
        formSubject: "Project / Inquiry Type",
        formMessage: "Message & Specifications",
        formNamePlaceholder: "e.g. Alex Morgan",
        formEmailPlaceholder: "alex@company.com",
        formMessagePlaceholder:
          "Outline your project scope, technical requirements, or role specifications...",
        sendButton: "Transmit Inquiry",
        submit: "Transmit Inquiry",
        sendingButton: "Transmitting...",
        successTitle: "Inquiry Dispatched",
        successDesc:
          "Thank you for reaching out. Your transmission has been received and I will respond promptly.",
        directChannels: "DIRECT CHANNELS",
        copied: "Copied to clipboard",
      },
      projectModal: {
        tag: "ARCHITECTURE SPECIFICATION // CASE STUDY",
        overviewTitle: "01 // SYSTEM OVERVIEW",
        subsystemsTitle: "02 // ARCHITECTURAL SUBSYSTEMS",
        verifiedStack: "VERIFIED STACK COMPATIBILITY",
        inspectSource: "Inspect Source Implementation",
        returnBtn: "Return to Portfolio",
      },
      codeModal: {
        title: "LOGIC SPECIFICATION",
        copied: "Copied",
        copy: "Copy Code",
        benchmarked: "BENCHMARKED & TYPE-SAFE",
        dismiss: "Dismiss",
      },
      resumeModal: {
        title: "Curriculum Vitae",
        verifiedTag: "CURRICULUM VITAE // VERIFIED PROFILE",
        headerTag: "CURRICULUM VITAE // VERIFIED SPECIFICATION",
        downloadPdf: "Download JSON / Spec",
        printCv: "Print / Save PDF",
        downloaded: "Printed / Saved",
        preparing: "Preparing...",
        printPdf: "Print / Export PDF",
        copied: "Copied",
        copyDirect: "Copy Email",
        summaryHeading: "Professional Summary",
        summaryTitle: "01 // SUMMARY OF PRACTICE",
        competencyHeading: "Core Technical Competencies",
        experienceHeading: "Professional Work History",
        experienceTitle: "02 // CAREER CHRONOLOGY",
        skillsTitle: "03 // TECHNICAL MATRIX",
        educationHeading: "Education & Continuous Learning",
        educationDegree: "B.S. in Computer Science & Software Engineering",
        educationSchool: "University Institute of Technology",
        educationPeriod: "2013 — 2017",
        close: "Close Specification",
      },
      footer: {
        tagline: "Fullstack Software Development & Cloud Engineering",
        rights: "© 2026 STANLEE_NM // ALL RIGHTS RESERVED",
        scrollTop: "Scroll to Top",
        ascend: "Ascend ↑",
      },
      langSwitcher: {
        toggleLabel: "Language",
        currentLabel: "EN",
      },
    },
  },
  de: {
    profile: {
      name: "Stanlee Nwosu",
      brandName: "STANLEE_NM",
      title: "FULLSTACK SOFTWARE-ENTWICKLER",
      tagline:
        "Konzeption und Entwicklung skalierbarer Fullstack-Webanwendungen, robuster Backend-Architekturen und performanter Benutzeroberflächen in modernen Cloud-Umgebungen.",
      bioParagraphs: [
        "Ich bin ein Fullstack Software-Entwickler mit Leidenschaft für ganzheitliche digitale Lösungen, die belastbare Backend-Systeme mit reaktiven, barrierefreien Benutzeroberflächen verbinden. Mein Spektrum umfasst den gesamten Produktlebenszyklus – von relationaler Datenmodellierung und REST/GraphQL-APIs bis hin zu reaktiver Frontend-Zustandsverwaltung und automatisierter Cloud-Bereitstellung.",
        "Mit fundierter Expertise in TypeScript, React, Next.js, Node.js, Python und Cloud-Infrastruktur setze ich auf klare architektonische Muster, lückenlose Testautomatisierung und Ladezeiten unter einer Sekunde. Ob modulare Micro-Frontends oder hochdurchsatzfähige Backend-Dienste – ich entwickle Software mit deterministischer Zuverlässigkeit im großen Maßstab.",
      ],
      portraitUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpdjKs84GFCyKEQ2g7sqctnMDE4I_rurRNghAOPxSYf9_ZgLyp6u1unado3O4JRqWXNYOLsqdNMzRcaymOAyVs9E-YwrX1wvSEbspj8Uv0Pf5M2Xlbjd0OvEhi-ku-6AWqCiUCfUxFzGSzNQLzveHKY8M5xC296bFf49pcjIA20SBlk-E6INISxZ278Oh5-14iIA5Lyi6rNML7XTx7Ca538OprI84x3vKyQlCChAKfRHPIntgyWUg",
      portraitAlt:
        "Kontrastreiches monochromes Studioporträt von Stanlee Nwosu, Fullstack Software-Entwickler.",
      socials: {
        github: "https://github.com/stanleenwosu",
        linkedin: "https://linkedin.com/in/stanleenwosu",
        email: "stanleenwosu@gmail.com",
      },
    },
    projects: [
      {
        id: "wedly-wedding-marketplace",
        title: "WEDLY WEDDING-MARKETPLACE",
        subtitle: "Kuratierter Hochzeits-Commerce, KI-Entdeckung & redaktionelle Inspiration",
        description:
          "Ein kuratierter Hochzeitsmarktplatz für moderne Paare mit kategoriebasiertem Shopping, KI-gestützter Entdeckung, vertrauenswürdigen Anbietern und redaktioneller Inspiration.",
        longDescription:
          "Wedly bündelt Brautkleider, Schuhe, Blumen, Accessoires, Zeremonien-Dekoration und Tischgestaltung in einem durchdachten Einkaufserlebnis. Die Startseite verbindet kuratierte Produkte mit Kategorien, einem KI-Einstieg, vertrauenswürdigen Anbietern und Journal-Inhalten zu echten Hochzeiten, Planung und zeitlosen Ideen.",
        architectureBreakdown: [
          {
            title: "Kuratierte Marketplace-Entdeckung",
            description:
              "Ein fokussierter Einkaufsweg ordnet Hochzeitsprodukte in klare Kategorien ein und führt Paare vom breiten Stöbern zu passenden Produkten.",
          },
          {
            title: "KI-gestützter Shopping-Einstieg",
            description:
              "Shop with AI ergänzt die klassische Kategoriesuche um einen weiteren Weg, Produkte im Marktplatz zu entdecken.",
          },
          {
            title: "Redaktionelle Commerce-Ebene",
            description:
              "Das Journal ergänzt das produktorientierte Erlebnis um echte Hochzeiten, Stil-Guides, Mode-Ideen und Venue-Inspiration.",
          },
        ],
        metrics: [
          { label: "Produkttyp", value: "Live-Produkt", change: "Öffentlicher Marktplatz" },
          { label: "Entdeckungsmodell", value: "Kuratierter Einkauf", change: "Kategoriebasiertes Browsing" },
          { label: "Erlebnisebenen", value: "Shop, KI, Journal", change: "Auf der Startseite sichtbar" },
        ],
        tags: ["MARKETPLACE", "KURATIERTER COMMERCE", "KI-ENTDECKUNG", "EDITORIAL UX", "RESPONSIVE WEB"],
        techStack: ["React", "Sharetribe", "Node.js", "Stripe", "Mapbox"],
        image: wedlyImage,
        imageAlt: "Hochzeitskomposition auf der Startseite des Wedly-Hochzeitsmarktplatzes.",
        codeLanguage: "typescript",
        codeSnippet: `// Wedly Produkt-Entdeckungsmodell
export const discoveryChannels = {
  browse: [
    'Hens / Bachelorettes',
    'Ceremony Decor',
    'Wedding Dress',
    'Shoes',
    'Flowers',
    'Accessories',
    'Table & Decor'
  ],
  assisted: 'Shop with AI',
  editorial: ['Echte Hochzeiten', 'Stil-Guides', 'Venue-Inspiration']
} as const;`,
        demoUrl: "https://shopwedly.com.au/",
      },
      {
        id: "oringo-live-events-marketplace",
        title: "ORINGO LIVE-EVENT-MARKTPLATZ",
        subtitle: "Event-Entdeckung, geprüfte Anbieter & Ticketverwaltung",
        description:
          "Ein Marktplatz für Live-Events, auf dem Menschen Erlebnisse entdecken, Veranstalter Tickets verkaufen und Anbieter Event-Services anbieten.",
        longDescription:
          "Oringo verbindet die gesamte Event-Reise von der Entdeckung über die Planung bis zur Veranstaltung. Besucher finden Events und verwahren Tickets in einer Wallet, Veranstalter veröffentlichen Event-Seiten mit Zahlung und Check-in, und Anbieter werden über Bewertungen, Preise und Verfügbarkeit entdeckt.",
        architectureBreakdown: [
          {
            title: "Event-Entdeckung",
            description:
              "Suchorientiertes Browsing hilft dabei, Konzerte, Food-Festivals, Workshops, Konferenzen und weitere Live-Erlebnisse in der Nähe zu finden.",
          },
          {
            title: "Marktplatz für geprüfte Anbieter",
            description:
              "DJs, Caterer, Fotografen und weitere Event-Profis werden über Bewertungen, Preise und Verfügbarkeit präsentiert.",
          },
          {
            title: "Veranstalter-Abläufe",
            description:
              "Veranstalter können Event-Seiten erstellen, Tickets verkaufen, den Check-in verwalten und Verkäufe sowie Auszahlungen verfolgen.",
          },
        ],
        metrics: [
          { label: "Live-Events", value: "12K+", change: "Diese Woche angezeigt" },
          { label: "Geprüfte Anbieter", value: "4.800", change: "Bewertet und verifiziert" },
          { label: "Verkaufte Tickets", value: "2,1 Mio.", change: "Auf der Startseite angezeigt" },
        ],
        tags: [
          "EVENT-ENTDECKUNG",
          "ANBIETER-MARKTPLATZ",
          "TICKETVERKAUF",
          "EVENT-OPERATIONS",
          "LIVE-ERLEBNISSE",
        ],
        techStack: ["Next.js", "React", "Vercel"],
        image: oringoImage,
        imageAlt: "Publikum bei einem Live-Event unter Bühnenbeleuchtung.",
        codeLanguage: "typescript",
        codeSnippet: `// Oringo Marktplatz-Journeys
export const marketplaceModes = {
  attend: {
    action: "Entdecken & buchen",
    outcome: "Tickets in einer Wallet verwahren",
  },
  plan: {
    action: "Anbieter engagieren",
    outcome: "Anbieter nach Bewertung, Preis und Verfügbarkeit vergleichen",
  },
  host: {
    action: "Verkaufen & verwalten",
    outcome: "Veröffentlichen, Gäste einchecken und Auszahlungen verfolgen",
  },
} as const;`,
        demoUrl: "https://www.oringo.app/",
      },
      //       {
      //         id: "slipsense-betslip-analysis",
      //         title: "SLIPSENSE WETTSCHEIN-ANALYSE",
      //         subtitle: "Sportwetten-Analyse, Wahrscheinlichkeiten & bessere Optionen",
      //         description:
      //           "Ein Analyse-Tool, das Wettschein-Codes in verständlichen Kontext pro Tipp, Risikosignale und bessere Spieloptionen übersetzt.",
      //         longDescription:
      //           "SlipSense verarbeitet Buchungscodes von SportyBet, Afropari, MelBet und 1xBet und zerlegt jede Auswahl in Gewinnwahrscheinlichkeit, aktuelle Form, direkte Duelle und Risiko. Die Anwendung hebt das schwächste Bein hervor und schlägt bessere Optionen vor, wobei die Schätzungen ausdrücklich informativ und keine garantierte Wettberatung sind.",
      //         architectureBreakdown: [
      //           {
      //             title: "Buchungscode-Eingabe",
      //             description:
      //               "Nutzer fügen einen Buchungs- oder Teilen-Code eines unterstützten Wettanbieters ein, ohne Screenshots hochzuladen oder Tipps abzutippen.",
      //           },
      //           {
      //             title: "Analyse pro Tipp",
      //             description:
      //               "Jede Begegnung erhält Kontext zu Wahrscheinlichkeit, aktueller Form, direkten Duellen, BTTS und Over 2.5.",
      //           },
      //           {
      //             title: "Risiko- und Neuaufbau-Hinweise",
      //             description:
      //               "Die Übersicht markiert schwächere Tipps und kann alternative Märkte mit geschätzten Quoten vorschlagen.",
      //           },
      //         ],
      //         metrics: [
      //           {
      //             label: "Unterstützte Eingaben",
      //             value: "4 Wettanbieter",
      //             change: "SportyBet, Afropari, MelBet, 1xBet",
      //           },
      //           {
      //             label: "Analyseansicht",
      //             value: "Kontext pro Tipp",
      //             change: "Wahrscheinlichkeit, Form und H2H",
      //           },
      //           {
      //             label: "Nutzungsmodell",
      //             value: "Token-basiert",
      //             change: "Kostenloses Kontingent zum Start",
      //           },
      //         ],
      //         tags: [
      //           "WETTSCHEIN-ANALYSE",
      //           "SPORTDATEN",
      //           "WAHRSCHEINLICHKEIT",
      //           "FORM & H2H",
      //           "VERANTWORTUNGSVOLLES DESIGN",
      //         ],
      //         techStack: ["Next.js", "React", "Tailwind CSS", "Claude", "Render"],
      //         image: slipsenseImage,
      //         imageAlt: "Fußballszene als visuelle Darstellung einer Sportwetten-Analyse.",
      //         codeLanguage: "typescript",
      //         codeSnippet: `// SlipSense Analyse-Zusammenfassung
      // export const slipAnalysis = {
      //   inputs: ["SportyBet", "Afropari", "MelBet", "1xBet"],
      //   signals: ["Gewinnwahrscheinlichkeit", "Aktuelle Form", "Direkte Duelle"],
      //   output: ["Wettschein-Score", "Schwächster Tipp", "Bessere Option"],
      // } as const;`,
      //         demoUrl: "https://slipsense-frontend.onrender.com/",
      //       },
    ],
    experiences: [
      {
        id: "exp-1",
        period: "MAI 2022 — HEUTE",
        role: "Frontend-Entwickler (Angular)",
        company: "Evolutics Technology",
        location: "Lagos, Nigeria / Remote",
        description:
          "Entwicklung responsiver, barrierefreier Versicherungsplattformen in Angular für führende Versicherer und staatliche Auftraggeber. Architektur von Feature-Modulen mit Lazy Loading und OnPush Change Detection für datenintensive Policen-, Schadens- und Underwriting-Workflows.",
        bullets: [
          "Feature-Module mit Lazy Loading und OnPush Change Detection architekturiert, initiale Bundle-Größe um 35–45% reduziert und Ladezeit auf unter 2s gesenkt.",
          "Komplexe reaktive UIs mit Signals, RxJS Observables und NgRx für zentralisiertes State Management über 50+ Views entwickelt.",
          "Wiederverwendbare interne npm-Pakete und gemeinsame Angular-Komponentenbibliotheken mitentwickelt, die in 9+ internen Projekten eingesetzt werden.",
          "UI/UX-Designs pixelgenau mit Angular Material und einem eigenen Designsystem nach WCAG-AA-Standards umgesetzt.",
          "Laufzeit- und Rendering-Performance durch AOT-Kompilierung, trackBy, Pure Pipes und Behebung von Subscription-Leaks optimiert, Lighthouse-Scores um 30% verbessert.",
          "Zuverlässigkeit durch Unit- und Komponententests (Jasmine/Karma) bei 75–85% Abdeckung sichergestellt, Produktionsfehler um 30–40% reduziert.",
        ],
        techStack: ["Angular", "TypeScript", "RxJS", "NgRx", "Angular Material", "Jasmine", "Karma"],
      },
      {
        id: "exp-2",
        period: "SEP 2024 — DEZ 2025",
        role: "Backend-Entwickler",
        company: "My NEO Group",
        location: "Dubai, VAE / Remote",
        description:
          "Architektur und Entwicklung von Backend-Diensten in Node.js und Express für Krypto-Wallet-Operationen, Transaktionsverarbeitung und Kontoverwaltung für über 10.000 Nutzer bei 99% Verfügbarkeit unter produktiver Finanzlast.",
        bullets: [
          "RESTful-APIs entworfen und versioniert, die von internen Teams, Client-Apps und White-Label-Partnern genutzt werden – Integrationszeit von 2 Wochen auf 2 Tage reduziert.",
          "Systemperformance durch Profiling langsamer Abfragen und Einführung einer Redis-Caching-Schicht optimiert, p95-API-Latenz von 2000ms auf 800ms und Datenbanklast um 90% reduziert.",
          "Observability und Log-Analyse mit Datadog aufgebaut, Services mit strukturierten Logs, Custom Metrics und Distributed Traces instrumentiert.",
          "Mit Produkt-, Sicherheits- und Compliance-Teams zusammengearbeitet, regulatorische Anforderungen in technische Spezifikationen überführt und zu SOC-2-Audit-Meilensteinen beigetragen, Datenintegritätsvorfälle um 95% reduziert.",
        ],
        techStack: ["Node.js", "Express", "Redis", "Datadog", "REST APIs", "PostgreSQL"],
      },
      {
        id: "exp-3",
        period: "APRIL 2023",
        role: "Software-Entwickler (Vertrag)",
        company: "GetZelling",
        location: "Miami, USA / Remote",
        description:
          "Entwicklung eines funktionsreichen Admin-Dashboards in Angular und einer plattformübergreifenden React-Native-App für Immobilienmakler und Kunden mit Echtzeit-Datensynchronisation und serverloser Cloud-Architektur auf GCP.",
        bullets: [
          "Funktionsreiches Admin-Dashboard in Angular für externe Makler mit Echtzeit-Immobilienverwaltung, Live-Listingstatus und Bestandsaktualisierungen entwickelt.",
          "Plattformübergreifende React-Native-App für interne Makler und Kunden auf iOS und Android entwickelt.",
          "Cloud-Architektur auf GCP entworfen, Cloud Functions, Firestore und Cloud Storage zu einem serverlosen System verbunden.",
          "CI/CD-Pipelines für automatisierten Build, Test und Deployment implementiert, Release-Zeit von 30 Min. auf ca. 3 Min. reduziert.",
        ],
        techStack: ["Angular", "React Native", "Node.js", "Firebase", "Firestore", "GCP", "Cloud Functions"],
      },
      {
        id: "exp-4",
        period: "FEB 2020 — APRIL 2022",
        role: "Junior Software-Entwickler",
        company: "Briccs International Ideal Limited",
        location: "Lagos, Nigeria",
        description:
          "Mitwirkung an Telekommunikationsintegrationen, Schulverwaltungsplattformen und individuellen CMS-Lösungen, mit wachsender Verantwortung von kleinen Tickets bis hin zu eigenständigen Modulen.",
        bullets: [
          "Mitwirkung an Integrationen mit Nigerias großen Telekommunikationsanbietern (MTN, Glo, Airtel, 9mobile) für SMS/USSD/Airtime/Daten/Zahlungs-APIs.",
          "Mitentwicklung einer Schulverwaltungsplattform mit Funktionen für Schülerdaten, Anwesenheit, Benotung und Gebührenverwaltung.",
          "Funktionen für individuelle Content-Management-Systeme entwickelt, mit denen Kunden ihre eigenen Inhalte verwalten und veröffentlichen.",
          "Mit Teammitgliedern und Stakeholdern zusammengearbeitet und schrittweise mehr Verantwortung übernommen.",
        ],
        techStack: ["JavaScript", "Node.js", "HTML/CSS", "REST APIs"],
      },
    ],
    skillCategories: [
      {
        title: "Frontend Engineering",
        code: "FRONT_01",
        description: "Moderne reaktive Frameworks, Designsysteme und responsive Web-Performance.",
        skills: [
          {
            name: "React 18/19 & Next.js",
            level: 98,
            focus: "Server Components, SSR/SSG, Hooks, App Router",
          },
          {
            name: "TypeScript Strict Mode",
            level: 96,
            focus: "Generics, Typsicherheit, API-Vertragstypisierung",
          },
          {
            name: "Tailwind CSS & Designsysteme",
            level: 95,
            focus: "Responsive Layouts, Design Tokens, Barrierefreiheit (a11y)",
          },
          {
            name: "State Management & Web Vitals",
            level: 94,
            focus: "Zustand, TanStack Query, optimistisches UI, LCP < 1s",
          },
        ],
      },
      {
        title: "Backend & APIs",
        code: "BACK_02",
        description: "Skalierbare Server-Runtimes, REST/GraphQL-APIs und asynchrone Message Queues.",
        skills: [
          {
            name: "Node.js & Express / NestJS",
            level: 95,
            focus: "REST-Architekturen, Middlewares, asynchrone Pipelines",
          },
          { name: "Python & FastAPI", level: 88, focus: "Hochdurchsatz-Microservices, Hintergrund-Worker" },
          {
            name: "GraphQL & WebSockets",
            level: 92,
            focus: "Apollo Server, Echtzeit-Synchronisation, Federation",
          },
          {
            name: "Auth & API-Sicherheit",
            level: 93,
            focus: "OAuth2, JWT, Rate-Limiting, Rollen-Zugriffskontrolle (RBAC)",
          },
        ],
      },
      {
        title: "Datenbanken & ORMs",
        code: "DATA_03",
        description: "Relationales Datenmodellieren, In-Memory-Caches und Abfrageoptimierung.",
        skills: [
          {
            name: "PostgreSQL & SQL",
            level: 94,
            focus: "Schema-Design, Indizierung, Transaktionen, Read-Replicas",
          },
          {
            name: "Redis Caching & Pub/Sub",
            level: 91,
            focus: "Session-Stores, Rate-Limiter, verteilter Zustand",
          },
          { name: "Prisma & Drizzle ORM", level: 93, focus: "Typsichere Migrationen und Relationen" },
          { name: "MongoDB & NoSQL", level: 87, focus: "Dokumentenmodellierung, Aggregationspipelines" },
        ],
      },
      {
        title: "DevOps & Cloud",
        code: "CLOUD_04",
        description: "Containerisierung, Continuous-Delivery-Pipelines und Cloud-Hosting.",
        skills: [
          {
            name: "Docker & Containerisierung",
            level: 90,
            focus: "Multi-Stage-Builds, Docker Compose, Netzwerke",
          },
          {
            name: "AWS & Cloud-Hosting",
            level: 89,
            focus: "ECS, S3, Lambda, CloudFront, Vercel-Deployments",
          },
          {
            name: "CI/CD-Automatisierung (GitHub Actions)",
            level: 92,
            focus: "Test-Runner, Linting, automatisierte Deployments",
          },
          {
            name: "Monitoring & Observability",
            level: 87,
            focus: "Strukturiertes Logging, Error-Tracking, OpenTelemetry",
          },
        ],
      },
    ],
    ui: {
      nav: {
        studio: "Home",
        projects: "Projekte",
        about: "Über mich",
        skills: "Kompetenzen",
        timeline: "Werdegang",
        inquiry: "Kontakt aufnehmen",
      },
      hero: {
        badge: "STANLEE_NM // FULLSTACK SOFTWARE-ENTWICKLUNG",
        headlineFirst: "Fullstack",
        headlineSecond: "Ingenieurskunst",
        viewProjects: "Projekte entdecken",
        getInTouch: "Kontakt aufnehmen",
        featuredBadge: "AUSGEWÄHLTE ARBEIT 01 // PRODUKTIONSARCHITEKTUR",
        featuredSubtitle: "Next.js 14 // Node.js // PostgreSQL // Stripe",
        pillar1Title: "01 / Fullstack-Präzision",
        pillar1Desc:
          "Durchgängige Ingenieursarbeit: typsichere Verträge, effiziente Datenpipelines und reaktive Client-Zustandssynchronisation.",
        pillar2Title: "02 / Skalierbare Systeme",
        pillar2Desc:
          "Containerisierte Microservices und automatisierte CI/CD-Pipelines für maximale Lastspitzen und minimale Latenz.",
        pillar3Title: "03 / Schnittstellen-Feinschliff",
        pillar3Desc:
          "Typografische Klarheit, barrierefreie Interaktionsmuster (WCAG AA) und flüssige Animationen für intuitive Workflows.",
      },
      projectsSection: {
        tag: "02 // AUSGEWÄHLTE WERKE & PRODUKTIONSARCHITEKTUR",
        title: "Projekt",
        titleSub: "Archiv",
        desc: "Ausgewählte Fullstack-Webanwendungen, Microservices und verteilte Datensysteme, entwickelt für höchste Zuverlässigkeit und Performance.",
        viewCaseStudy: "Fallstudie ansehen",
        techStack: "Tech-Stack",
        architectureSpec: "ARCHITEKTUR-SPEZIFIKATION // FALLSTUDIE",
        systemMetrics: "SYSTEM-METRIKEN // BENCHMARKS",
        verifiedLive: "IN PRODUKTION VERIFIZIERT",
        verifiedMetrics: "VERIFIZIERTE METRIKEN // PRODUKTIONS-TELEMETRIE",
        readTime: "Min. Lesezeit",
      },
      aboutSection: {
        badge: "03 // ÜBER MICH & PHILOSOPHIE",
        portraitLabel: "PORTRÄT // STANLEE NWOSU",
        cvButton: "Lebenslauf / CV",
        headlineFirst: "Entwicklung &",
        headlineSecond: "Ausführung",
        careerTimeline: "Beruflicher",
        careerTimelineSub: "Werdegang",
        chronologyBadge: "04 // CHRONOLOGIE",
      },
      skillsSection: {
        badge: "05 // TECHNISCHE KOMPETENZEN",
        headlineFirst: "System",
        headlineSecond: "Fähigkeiten",
        desc: "Expertise in modernen Frontend-Architekturen, Backend-Microservices, Datenbank-Design und Cloud-Infrastruktur.",
        competencyScale: "KOMPETENZ-SKALA",
        scaleDesc:
          "Fundiert in produktionserprobten Deployments, strikter Typisierung und Systemen mit hoher Parallelität.",
      },
      contactSection: {
        tag: "06 // DIREKTE KORRESPONDENZ",
        headlineFirst: "Dialog",
        headlineSecond: "Starten",
        desc: "Offen für Positionen in der Fullstack Software-Entwicklung, technische Beratung und anspruchsvolle Projekte.",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formSubject: "Art der Anfrage / Projekt",
        formMessage: "Nachricht & Spezifikationen",
        formNamePlaceholder: "z.B. Alex Müller",
        formEmailPlaceholder: "alex@unternehmen.de",
        formMessagePlaceholder:
          "Beschreiben Sie Ihr Projekt, technische Anforderungen oder die offene Stelle...",
        sendButton: "Anfrage Absenden",
        submit: "Anfrage Absenden",
        sendingButton: "Wird gesendet...",
        successTitle: "Anfrage Übermittelt",
        successDesc:
          "Vielen Dank für Ihre Kontaktaufnahme. Ihre Nachricht wurde empfangen; ich werde mich zeitnah zurückmelden.",
        directChannels: "DIREKTE KANÄLE",
        copied: "In die Zwischenablage kopiert",
      },
      projectModal: {
        tag: "ARCHITEKTUR-SPEZIFIKATION // FALLSTUDIE",
        overviewTitle: "01 // SYSTEMÜBERSICHT",
        subsystemsTitle: "02 // ARCHITEKTUR-SUBSYSTEME",
        verifiedStack: "VERIFIZIERTE STACK-KOMPATIBILITÄT",
        inspectSource: "Quellcode-Implementierung einsehen",
        returnBtn: "Zurück zum Portfolio",
      },
      codeModal: {
        title: "LOGIK-SPEZIFIKATION",
        copied: "Kopiert",
        copy: "Code kopieren",
        benchmarked: "BENCHMARKED & TYPSICHER",
        dismiss: "Schließen",
      },
      resumeModal: {
        title: "Lebenslauf / Curriculum Vitae",
        verifiedTag: "CURRICULUM VITAE // VERIFIZIERTES PROFIL",
        headerTag: "CURRICULUM VITAE // VERIFIZIERTE SPEZIFIKATION",
        downloadPdf: "JSON / Spezifikation herunterladen",
        printCv: "Drucken / Als PDF speichern",
        downloaded: "Gedruckt / Gespeichert",
        preparing: "Wird vorbereitet...",
        printPdf: "Drucken / PDF Exportieren",
        copied: "Kopiert",
        copyDirect: "E-Mail kopieren",
        summaryHeading: "Berufliches Profil",
        summaryTitle: "01 // BERUFLICHES PROFIL",
        competencyHeading: "Kernkompetenzen & Technologien",
        experienceHeading: "Berufliche Laufbahn",
        experienceTitle: "02 // BERUFLICHER WERDEGANG",
        skillsTitle: "03 // TECHNISCHE MATRIX",
        educationHeading: "Ausbildung & Studium",
        educationDegree: "B.Sc. in Informatik & Software Engineering",
        educationSchool: "Technische Universität / Institut für Technologie",
        educationPeriod: "2013 — 2017",
        close: "Spezifikation Schließen",
      },
      footer: {
        tagline: "Fullstack Software-Entwicklung & Cloud Engineering",
        rights: "© 2026 STANLEE_NM // ALLE RECHTE VORBEHALTEN",
        scrollTop: "Nach oben",
        ascend: "Nach oben ↑",
      },
      langSwitcher: {
        toggleLabel: "Sprache",
        currentLabel: "DE",
      },
    },
  },
};
