import { Project, ExperienceItem, SkillCategory } from "../types";

const wedlyImage = new URL("../../assets/wedly.png", import.meta.url).href;
const oringoImage = new URL("../../assets/oringo.png", import.meta.url).href;
const slipsenseImage = new URL("../../assets/slipsense.png", import.meta.url).href;

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
      name: "Stanlee Nwosu",
      brandName: "STANLEE_NM",
      title: "FULLSTACK SOFTWARE DEVELOPER",
      tagline:
        "Designing and engineering scalable fullstack web applications, resilient backend architectures, and high-performance user experiences across the modern cloud ecosystem.",
      bioParagraphs: [
        "I am a fullstack software developer dedicated to engineering end-to-end digital solutions that bridge robust backend systems with responsive, accessible user interfaces. I work across the entire product lifecycle—from relational data modeling and REST/GraphQL API architecture to reactive frontend state orchestration and automated cloud deployments.",
        "With deep proficiencies in TypeScript, React, Next.js, Node.js, Python, and cloud infrastructure, I emphasize clean architectural patterns, comprehensive automated test suites, and sub-second load times. Whether crafting modular micro-frontends or engineering high-throughput backend services, I build software that delivers deterministic reliability at scale.",
      ],
      portraitUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpdjKs84GFCyKEQ2g7sqctnMDE4I_rurRNghAOPxSYf9_ZgLyp6u1unado3O4JRqWXNYOLsqdNMzRcaymOAyVs9E-YwrX1wvSEbspj8Uv0Pf5M2Xlbjd0OvEhi-ku-6AWqCiUCfUxFzGSzNQLzveHKY8M5xC296bFf49pcjIA20SBlk-E6INISxZ278Oh5-14iIA5Lyi6rNML7XTx7Ca538OprI84x3vKyQlCChAKfRHPIntgyWUg",
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
      {
        id: "slipsense-betslip-analysis",
        title: "SLIPSENSE BETSLIP ANALYSIS",
        subtitle: "Sport Betting Analysis, Probability & Better Plays",
        description:
          "A data-backed betslip analysis tool that turns bookmaker codes into leg-by-leg context, risk signals, and smarter play suggestions.",
        longDescription:
          "SlipSense accepts booking codes from SportyBet, Afropari, MelBet, and 1xBet, then breaks each selection into win probability, recent form, head-to-head context, and risk. The result highlights the weakest leg and offers better-play suggestions, while keeping estimates informational rather than presenting them as guaranteed betting advice.",
        architectureBreakdown: [
          {
            title: "Booking Code Intake",
            description:
              "Users paste a booking or share code from a supported bookmaker without uploading screenshots or retyping selections.",
          },
          {
            title: "Per-Leg Analysis",
            description:
              "Each fixture receives probability, recent form, head-to-head, BTTS, and Over 2.5 context in a focused breakdown.",
          },
          {
            title: "Risk and Rebuild Guidance",
            description:
              "The slip overview calls out weaker legs and can suggest alternate markets with estimated odds when a selection looks soft.",
          },
        ],
        metrics: [
          {
            label: "Supported Inputs",
            value: "4 bookmakers",
            change: "SportyBet, Afropari, MelBet, 1xBet",
          },
          {
            label: "Analysis View",
            value: "Per-leg context",
            change: "Probability, form, and H2H",
          },
          {
            label: "Usage Model",
            value: "Token-based",
            change: "Free allowance to start",
          },
        ],
        tags: ["BETSLIP ANALYSIS", "SPORTS DATA", "PROBABILITY", "FORM & H2H", "RESPONSIBLE DESIGN"],
        techStack: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Claude",
          "Render",
        ],
        image: slipsenseImage,
        imageAlt: "Football match scene representing sports betting analysis.",
        codeLanguage: "typescript",
        codeSnippet: `// SlipSense analysis summary
export const slipAnalysis = {
  inputs: ["SportyBet", "Afropari", "MelBet", "1xBet"],
  signals: ["Win probability", "Recent form", "Head-to-head"],
  output: ["Slip score", "Weakest leg", "Better play"],
} as const;`,
        demoUrl: "https://slipsense-frontend.onrender.com/",
      },
    ],
    experiences: [
      {
        id: "exp-1",
        period: "2022 — PRESENT",
        role: "Senior Fullstack Software Developer",
        company: "Nexus Cloud Labs",
        location: "San Francisco, CA / Remote",
        description:
          "Leading fullstack architecture and development for enterprise SaaS platforms. Designing distributed Node.js/TypeScript microservices, modern React/Next.js client applications, and scalable PostgreSQL database schemas.",
        bullets: [
          "Architected end-to-end web platforms handling over 10M monthly active user interactions with 99.99% system availability.",
          "Constructed a shared internal React component library, accelerating feature delivery velocity across 5 product teams by 35%.",
          "Optimized backend API pipelines and database indexes, slashing p95 latency from 380ms to 65ms.",
          "Implemented automated CI/CD deployment pipelines using GitHub Actions, Docker, and AWS ECS.",
        ],
        techStack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      },
      {
        id: "exp-2",
        period: "2019 — 2022",
        role: "Fullstack Software Engineer",
        company: "Veloce Digital Systems",
        location: "Austin, TX / Hybrid",
        description:
          "Engineered high-performance web applications, customer portals, and RESTful/GraphQL backend services. Spearheaded frontend state management migrations and backend microservice integrations.",
        bullets: [
          "Built reactive, accessible single-page applications using React, TypeScript, and Tailwind CSS.",
          "Engineered scalable REST and GraphQL API services utilizing Node.js/Express and Python FastAPI.",
          "Integrated payment gateways (Stripe), authentication providers (OAuth, JWT), and third-party webhook ingestors.",
          "Established unit and end-to-end testing standards using Jest and Playwright, achieving 92% automated code coverage.",
        ],
        techStack: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "GraphQL", "PostgreSQL", "Stripe"],
      },
      {
        id: "exp-3",
        period: "2017 — 2019",
        role: "Fullstack Web Developer",
        company: "ByteCraft Interactive",
        location: "Remote",
        description:
          "Developed and shipped modern fullstack web products for high-growth startups. Specialized in translating Figma designs into responsive, production-ready frontend interfaces coupled with robust backend APIs.",
        bullets: [
          "Migrated legacy monolithic web applications into decoupled React and Node.js REST API stacks.",
          "Designed relational database models in PostgreSQL and MongoDB with efficient indexing and caching strategies.",
          "Implemented responsive, mobile-first interfaces adhering strictly to modern design systems and SEO best practices.",
        ],
        techStack: [
          "JavaScript (ES6+)",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
        ],
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
        studio: "Studio",
        projects: "Projects",
        about: "About",
        skills: "Skills",
        timeline: "Timeline",
        inquiry: "Get in Touch",
      },
      hero: {
        badge: "STANLEE_NM // FULLSTACK SOFTWARE ENGINEERING",
        headlineFirst: "Fullstack",
        headlineSecond: "Craftsmanship",
        viewProjects: "Explore Projects",
        getInTouch: "Get In Touch",
        featuredBadge: "FEATURED WORK 01 // PRODUCTION ARCHITECTURE",
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
        id: "fullstack-commerce-platform",
        title: "ENTERPRISE E-COMMERCE ENGINE",
        subtitle: "Next.js 14, Node.js API Gateway & Stripe-Infrastruktur",
        description:
          "Hochvolumige Fullstack-E-Commerce-Plattform mit SSR-Katalog-Caching, Echtzeit-Bestandsverwaltung, idempotenten Stripe-Webhooks und administrativem Metrik-Dashboard.",
        longDescription:
          "Entwicklung einer End-to-End Handelsplattform für über 80.000 Artikelnummern mit Spitzenlast-Resilienz bei Flash-Sales. Implementierung optimistischer Warenkorb-Synchronisation in React 18, entkoppelter Node.js-Microservices für die Bestellabwicklung und automatisierter PostgreSQL Read-Replicas mit Redis-Caching für API-Antwortzeiten unter 100 ms.",
        architectureBreakdown: [
          {
            title: "Fullstack Next.js SSR & React Hydration",
            description:
              "Server Components mit inkrementeller statischer Regeneration (ISR) kombiniert mit clientseitigem State-Caching für sofortige Checkout-Übergänge.",
          },
          {
            title: "Node.js & Express / Nest Microservices",
            description:
              "Idempotente Webhook-Warteschlangen, automatische Bestandsabbuchungen und transaktionale Versandpipelines.",
          },
          {
            title: "PostgreSQL & Redis Datenlayer",
            description:
              "Optimiertes relationales Schema mit Fremdschlüsseln, Connection Pooling via PgBouncer und Sub-Millisekunden-Sitzungscaching.",
          },
        ],
        metrics: [
          { label: "API-Antwortzeit", value: "42ms", change: "< 100ms p95 global" },
          { label: "Checkout-Konversion", value: "+34%", change: "Optimierter 1-Klick-Ablauf" },
          { label: "Systemverfügbarkeit", value: "99,98%", change: "Keine Transaktionsverluste" },
        ],
        tags: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "REDIS", "STRIPE"],
        techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ekSgzcdfnyZlK3hvSunEpCTgJa_-v8kx7hQ8MhyFPI407gctA4fljJo9THK9_mKTPi604yRhWNK7DjBLObwtH62edXMULR3S7uFikBVvrXanBvHeyog329PT1dXNvsT3OVGBIMxpXKPj_XUZCrLpHRngF30BiGUTeZa6VzJ77Bk-qjJUTRJEScHgk3vxo045nfn80R6LmWBGgIkjxT2N_XkCHZzlyxoplCCDusK-Xwqufti4yEo",
        imageAlt: "Monochromes technisches Dashboard für E-Commerce-Analysen.",
        codeLanguage: "typescript",
        codeSnippet: `// Fullstack Order Transaction & Idempotency Pipeline
export async function processOrderCheckout(
  req: CheckoutRequest,
  db: DatabaseClient
): Promise<CheckoutResult> {
  return await db.transaction(async (tx) => {
    // 1. Idempotenz-Schlüssel im Redis-Cache prüfen
    const isProcessed = await redis.set(\`idemp:\${req.idempotencyKey}\`, 'LOCKED', 'NX', 'EX', 120);
    if (!isProcessed) {
      throw new ConflictError('Doppelte Transaktionssignatur erkannt.');
    }

    // 2. Echtzeitbestand sperren & abbuchen
    const inventory = await tx.inventory.decrementBatch(req.items);
    
    // 3. Zahlungsabwicklung via Stripe ausführen
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.totalAmountCents,
      currency: 'eur',
      customer: req.customerId,
      metadata: { orderId: req.orderId }
    });

    // 4. Bestellung persistieren & Ereignis publizieren
    const order = await tx.orders.create({ ...req, stripePaymentId: paymentIntent.id });
    await eventBus.publish('order.created', { orderId: order.id });
    return { status: 'success', orderId: order.id };
  });
}`,
      },
      {
        id: "collaborative-workspace-hub",
        title: "COLLABORATIVE WORKSPACE HUB",
        subtitle: "Echtzeit-synchronisierte Canvas- & Präsenz-Architektur",
        description:
          "Kollaborative Produktivitätsplattform mit Live-Mehrbenutzer-Cursor, automatischer Zustandskonvergenz via CRDTs und Offline-First-Client-Synchronisation.",
        longDescription:
          "Entwicklung einer kollaborativen Fullstack-Suite für verteilte Teams zum simultanen Bearbeiten von Projekt-Boards, Flussdiagrammen und Notizen. Realisiert mit React/TypeScript im Frontend sowie Node.js WebSockets und Redis Pub/Sub Kanälen über mehrere Server-Knoten hinweg.",
        architectureBreakdown: [
          {
            title: "Bi-direktionales WebSocket Gateway",
            description:
              "Skalierbarer Node.js / Socket.IO Cluster für über 50.000 persistente Socket-Verbindungen mit automatischer Heartbeat-Wiederherstellung.",
          },
          {
            title: "CRDT Konfliktresolution",
            description:
              "Deterministische Peer-to-Peer Datenkonvergenz ohne Schreibkonflikte bei hochfrequenten parallelen Team-Edits.",
          },
          {
            title: "Optimistischer Client-Cache",
            description:
              "Lokale IndexedDB-Cachingschicht für nahtlose Offline-Bearbeitung und sofortige visuelle Rückmeldung.",
          },
        ],
        metrics: [
          { label: "Sync-Latenz", value: "< 18ms", change: "Globale Peer-Verteilung" },
          { label: "Gleichzeitige Nutzer", value: "50k+", change: "Pro verteiltem Cluster" },
          { label: "Offline-Präzision", value: "100%", change: "Keine Zustandsverfälschung" },
        ],
        tags: ["REACT", "TYPESCRIPT", "WEBSOCKETS", "NODE.JS", "REDIS", "DOCKER"],
        techStack: ["React", "TypeScript", "WebSockets", "Node.js", "Redis", "Docker"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDsAJfXxr10uf32uJ385QmaYql-1gH4n6TAvO42Vnx4D13LCwAOVxXt6EWbwQjq5PXsZt0xJvgoXaiaACDOmggekPjs1MfTdAj92O8X5ceI-L5yB1SbexUCzDGeItCQ53lN3E77VlCbpB8bmnUPesAdFPkhckuTlltl0n4teIA1wstqn9ZS_ViSRykWNok5MIm0t3cvIo0ok6a2MhLPV8wcK3AqnJ6E1jbhSe5L2xISICkkXicR9fU",
        imageAlt: "Monochrome Visualisierung vernetzter kollaborativer Datenströme.",
        codeLanguage: "typescript",
        codeSnippet: `// WebSocket Collaborative State Synchronization
export class DocumentRoomManager {
  private pubClient = getRedisClient();
  private subClient = getRedisClient();

  async handleUserEdit(roomId: string, userId: string, operation: CRDTOperation) {
    // 1. Lokal an Raumnutzer verteilen
    socketServer.to(roomId).except(userId).emit('op:receive', operation);

    // 2. Knotenübergreifende Synchronisationsdeltas publizieren
    await this.pubClient.publish(\`room:\${roomId}:sync\`, JSON.stringify({
      author: userId,
      payload: operation,
      timestamp: Date.now()
    }));
  }
}`,
      },
      {
        id: "cloud-telemetry-api-gateway",
        title: "CLOUD-TELEMETRIE & API-GATEWAY",
        subtitle: "Python FastAPI Microservices & React Monitoring-Konsole",
        description:
          "Zentrales API-Gateway und Telemetrieportal zur Überwachung verteilter Microservices mit dynamischem Rate-Limiting, Token-Authentifizierung und Live-Metriken.",
        longDescription:
          "Architektur eines Cloud-nativen Gateways zur Konsolidierung von über 30 internen Microservices unter einer einheitlichen REST- und GraphQL-Schnittstelle. Mit automatischer API-Dokumentation, rollenbasierter JWT-Validierung und interaktivem React-Dashboard.",
        architectureBreakdown: [
          {
            title: "Asynchrones Python FastAPI Gateway",
            description:
              "Hochdurchsatzfähiger async ASGI-Router mit nicht-blockierendem I/O und automatischer Schemavalidierung.",
          },
          {
            title: "JWT Auth & RBAC Sicherheitsschicht",
            description:
              "Kryptografische Token-Verifikation mit Claim-Prüfung und automatisierter API-Schlüssel-Kontingentierung.",
          },
          {
            title: "React Analytics Dashboard",
            description:
              "Interaktives Telemetrieportal mit Zeitreihen-Visualisierung via Recharts, Fehlerlog-Suche und Latenzalarmen.",
          },
        ],
        metrics: [
          { label: "Routing-Overhead", value: "1.4ms", change: "Keine Engpässe" },
          { label: "Tägliche Anfragen", value: "12M+", change: "Autoskaliert auf AWS ECS" },
          { label: "Sicherheitsüberprüfung", value: "100%", change: "Strikte Schema-Prüfung" },
        ],
        tags: ["PYTHON", "FASTAPI", "REACT", "GRAPHQL", "DOCKER", "AWS"],
        techStack: ["Python", "FastAPI", "React", "GraphQL", "Docker", "AWS"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAI_4N4B6DrUPEtPxjvRTLELMwb7Et7h3TlbSbv_FFkLzo6kk4oDQy5tJn-z2AB-jDHuJx7zgGa5x5BwFsZc97tKzLkudnKMkedBG7l0fl6N_jDtC0LfniNYGlnlGg6jHeZ0dKmmqhVZ9EwFf4Api-G0TkJqo9PE-3boWoNIvUTDDPnaAleeGLAuONNUiguquFaL1rrQw7-94wVHhb87BktXju2gQCHVxLx4Je7_QTRwQ4EcnUgmoc",
        imageAlt: "Monochromes Rendering von Netzwerkknoten und Microservice-Topologien.",
        codeLanguage: "typescript",
        codeSnippet: `// Fast API Gateway Reverse Proxy & Rate Limiter Handler
export async function authenticateAndProxy(
  req: IncomingMessage,
  res: ServerResponse,
  targetServiceUrl: string
): Promise<void> {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !verifyJwtSignature(token)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Unautorisierter Gateway-Zugriff' }));
  }

  // Token Bucket Rate Limiter Prüfung (100 Anfr. / Min.)
  const clientIp = req.socket.remoteAddress || 'unknown';
  const allowed = await rateLimiter.consume(clientIp, 1);
  if (!allowed) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Zu viele Anfragen' }));
  }

  return proxyRequest(req, res, targetServiceUrl);
}`,
      },
      {
        id: "design-system-component-registry",
        title: "DESIGN SYSTEM & KOMPONENTEN-REGISTRY",
        subtitle: "Modulares TypeScript Monorepo & UI-Komponentenbibliothek",
        description:
          "Unternehmensweites Fullstack-Designsystem für über 25 Entwickler auf mehreren Webplattformen. Automatisierte Token-Pipelines, Storybook und CI/CD-Publishing.",
        longDescription:
          "Einheitliches Designsystem-Paket basierend auf Turborepo, TypeScript, Tailwind CSS und Storybook mit semantischer Versionierung und automatisierter Barrierefreiheitsprüfung (WCAG 2.1 AA).",
        architectureBreakdown: [
          {
            title: "Design-Token Compiler",
            description:
              "Konvertiert Figma-Designvariablen in strikte CSS Custom Properties und typisierte TypeScript-Themes.",
          },
          {
            title: "Barrierefreie Headless-Komponenten",
            description:
              "Tastaturnavigierbare, Screenreader-geprüfte UI-Komponenten auf Basis von Radix-Primitiven und Tailwind CSS.",
          },
          {
            title: "Monorepo & CI/CD-Automatisierung",
            description:
              "Turborepo-Workspace mit Linting, visuellen Regressionstests und automatischer Changelog-Erstellung.",
          },
        ],
        metrics: [
          { label: "Entwickler-Adoption", value: "100%", change: "25+ Entwickler aktiv" },
          { label: "Barrierefreiheit", value: "100/100", change: "Vollständige WCAG AA Konformität" },
          { label: "Bundle-Größe", value: "0.9 KB Ø", change: "Vollständig Tree-shakeable" },
        ],
        tags: ["TYPESCRIPT", "REACT", "TAILWIND CSS", "STORYBOOK", "TURBOREPO"],
        techStack: ["TypeScript", "React", "Tailwind CSS", "Storybook", "Turborepo"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC7sx7jWkSG38vsTPQB0p1h0MPMAHD_fVJKdQhmHF_-weJkWtVg7F10iXvsN3JFHvBkRwmhA7qjrzNJJS8XUcuyL9IPYf7Z55PWO1TqbV5qRvIXaq95Z2SLKcdNVOsJyCjtJlOmFLm-TiPg5tPQd6l3GPylKG23jkM2-spBy1WsKe0sAjPV7m-2jOQnFHliZA823PgrNhbcnGYQyQ0sSBBtFFGF2-UNvknN6_ny1npY9JjMLHOC0No",
        imageAlt: "Monochromes technisches Raster mit modularen UI-Komponenten.",
        codeLanguage: "typescript",
        codeSnippet: `// Polymorphic Component Factory with Strict Type Enforcement
export type PolymorphicProps<E extends React.ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

export const Button = React.forwardRef(
  <E extends React.ElementType = 'button'>(
    { as, className, variant = 'primary', ...props }: PolymorphicProps<E, ButtonProps>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || 'button';
    const styles = getButtonVariantStyles(variant);
    return <Component ref={ref} className={cn(styles, className)} {...props} />;
  }
);`,
      },
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
      {
        id: "slipsense-betslip-analysis",
        title: "SLIPSENSE WETTSCHEIN-ANALYSE",
        subtitle: "Sportwetten-Analyse, Wahrscheinlichkeiten & bessere Optionen",
        description:
          "Ein Analyse-Tool, das Wettschein-Codes in verständlichen Kontext pro Tipp, Risikosignale und bessere Spieloptionen übersetzt.",
        longDescription:
          "SlipSense verarbeitet Buchungscodes von SportyBet, Afropari, MelBet und 1xBet und zerlegt jede Auswahl in Gewinnwahrscheinlichkeit, aktuelle Form, direkte Duelle und Risiko. Die Anwendung hebt das schwächste Bein hervor und schlägt bessere Optionen vor, wobei die Schätzungen ausdrücklich informativ und keine garantierte Wettberatung sind.",
        architectureBreakdown: [
          {
            title: "Buchungscode-Eingabe",
            description:
              "Nutzer fügen einen Buchungs- oder Teilen-Code eines unterstützten Wettanbieters ein, ohne Screenshots hochzuladen oder Tipps abzutippen.",
          },
          {
            title: "Analyse pro Tipp",
            description:
              "Jede Begegnung erhält Kontext zu Wahrscheinlichkeit, aktueller Form, direkten Duellen, BTTS und Over 2.5.",
          },
          {
            title: "Risiko- und Neuaufbau-Hinweise",
            description:
              "Die Übersicht markiert schwächere Tipps und kann alternative Märkte mit geschätzten Quoten vorschlagen.",
          },
        ],
        metrics: [
          {
            label: "Unterstützte Eingaben",
            value: "4 Wettanbieter",
            change: "SportyBet, Afropari, MelBet, 1xBet",
          },
          {
            label: "Analyseansicht",
            value: "Kontext pro Tipp",
            change: "Wahrscheinlichkeit, Form und H2H",
          },
          {
            label: "Nutzungsmodell",
            value: "Token-basiert",
            change: "Kostenloses Kontingent zum Start",
          },
        ],
        tags: [
          "WETTSCHEIN-ANALYSE",
          "SPORTDATEN",
          "WAHRSCHEINLICHKEIT",
          "FORM & H2H",
          "VERANTWORTUNGSVOLLES DESIGN",
        ],
        techStack: ["Next.js", "React", "Tailwind CSS", "Claude", "Render"],
        image: slipsenseImage,
        imageAlt: "Fußballszene als visuelle Darstellung einer Sportwetten-Analyse.",
        codeLanguage: "typescript",
        codeSnippet: `// SlipSense Analyse-Zusammenfassung
export const slipAnalysis = {
  inputs: ["SportyBet", "Afropari", "MelBet", "1xBet"],
  signals: ["Gewinnwahrscheinlichkeit", "Aktuelle Form", "Direkte Duelle"],
  output: ["Wettschein-Score", "Schwächster Tipp", "Bessere Option"],
} as const;`,
        demoUrl: "https://slipsense-frontend.onrender.com/",
      },
    ],
    experiences: [
      {
        id: "exp-1",
        period: "2022 — HEUTE",
        role: "Senior Fullstack Software-Entwickler",
        company: "Nexus Cloud Labs",
        location: "San Francisco, CA / Remote",
        description:
          "Leitung von Fullstack-Architekturen für Enterprise-SaaS-Plattformen. Konzeption verteilter Node.js/TypeScript-Microservices, moderner React/Next.js-Clients und skalierbarer PostgreSQL-Datenbankschemata.",
        bullets: [
          "Architektur von End-to-End Webplattformen für über 10 Mio. monatliche Nutzerinteraktionen mit 99,99% Systemverfügbarkeit.",
          "Aufbau einer internen React-Komponentenbibliothek, Beschleunigung der Feature-Auslieferung um 35% in 5 Produktteams.",
          "Optimierung von Backend-APIs und Datenbank-Indizes, Reduktion der p95-Latenz von 380 ms auf 65 ms.",
          "Implementierung automatisierter CI/CD-Pipelines mit GitHub Actions, Docker und AWS ECS.",
        ],
        techStack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      },
      {
        id: "exp-2",
        period: "2019 — 2022",
        role: "Fullstack Software-Ingenieur",
        company: "Veloce Digital Systems",
        location: "Austin, TX / Hybrid",
        description:
          "Entwicklung performanter Webanwendungen, Kundenportale und RESTful/GraphQL-Backend-Dienste. Leitung von Frontend-State-Migrationen und Microservice-Integrationen.",
        bullets: [
          "Entwicklung reaktiver, barrierefreier Single-Page-Anwendungen mit React, TypeScript und Tailwind CSS.",
          "Aufbau skalierbarer REST- und GraphQL-APIs mit Node.js/Express und Python FastAPI.",
          "Integration von Zahlungs-Gateways (Stripe), Auth-Providern (OAuth, JWT) und Webhook-Diensten.",
          "Etablierung automatisierter Teststandards mit Jest und Playwright, Erzielung von 92% Testabdeckung.",
        ],
        techStack: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "GraphQL", "PostgreSQL", "Stripe"],
      },
      {
        id: "exp-3",
        period: "2017 — 2019",
        role: "Fullstack Web-Entwickler",
        company: "ByteCraft Interactive",
        location: "Remote",
        description:
          "Entwicklung moderner Fullstack-Webprodukte für wachstumsstarke Startups. Spezialisiert auf die pixelgenaue Umsetzung von Figma-Designs in performante Interfaces mit robusten Backend-APIs.",
        bullets: [
          "Migration monolithischer Altanwendungen in entkoppelte React- und Node.js-REST-Architekturen.",
          "Entwurf relationaler Datenmodelle in PostgreSQL und MongoDB mit Caching- und Indexierungsstrategien.",
          "Umsetzung responsiver, barrierefreier Interfaces unter strikter Einhaltung von Designsystemen und SEO-Vorgaben.",
        ],
        techStack: [
          "JavaScript (ES6+)",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
        ],
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
        studio: "Studio",
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
