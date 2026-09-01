import { Project, ExperienceItem, SkillCategory } from '../types';

export const PROFILE = {
  name: 'Stanlee Nwosu',
  brandName: 'STANLEE_NM',
  title: 'FULLSTACK SOFTWARE DEVELOPER',
  tagline: 'Designing and engineering scalable fullstack web applications, resilient backend architectures, and high-performance user experiences across the modern cloud ecosystem.',
  bioParagraphs: [
    'I am a fullstack software developer dedicated to engineering end-to-end digital solutions that bridge robust backend systems with responsive, accessible user interfaces. I work across the entire product lifecycle—from relational data modeling and REST/GraphQL API architecture to reactive frontend state orchestration and automated cloud deployments.',
    'With deep proficiencies in TypeScript, React, Next.js, Node.js, Python, and cloud infrastructure, I emphasize clean architectural patterns, comprehensive automated test suites, and sub-second load times. Whether crafting modular micro-frontends or engineering high-throughput backend services, I build software that delivers deterministic reliability at scale.'
  ],
  portraitUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdjKs84GFCyKEQ2g7sqctnMDE4I_rurRNghAOPxSYf9_ZgLyp6u1unado3O4JRqWXNYOLsqdNMzRcaymOAyVs9E-YwrX1wvSEbspj8Uv0Pf5M2Xlbjd0OvEhi-ku-6AWqCiUCfUxFzGSzNQLzveHKY8M5xC296bFf49pcjIA20SBlk-E6INISxZ278Oh5-14iIA5Lyi6rNML7XTx7Ca538OprI84x3vKyQlCChAKfRHPIntgyWUg',
  portraitAlt: 'High-contrast monochrome studio portrait of Stanlee Nwosu, fullstack software developer.',
  socials: {
    github: 'https://github.com/stanleenwosu',
    linkedin: 'https://linkedin.com/in/stanleenwosu',
    email: 'stanleenwosu@gmail.com'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'fullstack-commerce-platform',
    title: 'ENTERPRISE COMMERCE ENGINE',
    subtitle: 'Next.js 14, Node.js API Gateway & Stripe Infrastructure',
    description: 'Fullstack high-volume ecommerce ecosystem with SSR catalog caching, real-time inventory management, idempotent Stripe webhooks, and an administrative metrics dashboard.',
    longDescription: 'Engineered an end-to-end commerce platform supporting 80,000+ SKU records and handling concurrent flash-sale transaction surges. Implemented optimistic UI cart sync in React 18, decoupled Node.js microservices for order lifecycle management, and configured automated PostgreSQL read-replicas with Redis caching to maintain sub-100ms API responses.',
    architectureBreakdown: [
      {
        title: 'Fullstack Next.js SSR & React Hydration',
        description: 'Server Components with incremental static regeneration (ISR) paired with client-side state caching for instant checkout transitions.'
      },
      {
        title: 'Node.js & Express / Nest Microservices',
        description: 'Idempotent webhook queue workers, automated inventory deduction routines, and transactional order dispatch pipelines.'
      },
      {
        title: 'PostgreSQL & Redis Data Layer',
        description: 'Optimized relational schema with foreign key constraints, connection pooling via PgBouncer, and sub-millisecond session state caching.'
      }
    ],
    metrics: [
      { label: 'API Response Time', value: '42ms', change: 'Sub-100ms p95 global' },
      { label: 'Checkout Conversion', value: '+34%', change: 'Optimized 1-click flow' },
      { label: 'Uptime Reliability', value: '99.98%', change: 'Zero dropped transactions' }
    ],
    tags: ['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'REDIS', 'STRIPE'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ekSgzcdfnyZlK3hvSunEpCTgJa_-v8kx7hQ8MhyFPI407gctA4fljJo9THK9_mKTPi604yRhWNK7DjBLObwtH62edXMULR3S7uFikBVvrXanBvHeyog329PT1dXNvsT3OVGBIMxpXKPj_XUZCrLpHRngF30BiGUTeZa6VzJ77Bk-qjJUTRJEScHgk3vxo045nfn80R6LmWBGgIkjxT2N_XkCHZzlyxoplCCDusK-Xwqufti4yEo',
    imageAlt: 'Monochrome high-contrast technical dashboard interface for ecommerce analytics.',
    codeLanguage: 'typescript',
    codeSnippet: `// Fullstack Order Transaction & Idempotency Pipeline
export async function processOrderCheckout(
  req: CheckoutRequest,
  db: DatabaseClient
): Promise<CheckoutResult> {
  return await db.transaction(async (tx) => {
    // 1. Verify idempotency key in Redis cache
    const isProcessed = await redis.set(\`idemp:\${req.idempotencyKey}\`, 'LOCKED', 'NX', 'EX', 120);
    if (!isProcessed) {
      throw new ConflictError('Duplicate transaction signature detected.');
    }

    // 2. Lock & allocate real-time inventory
    const inventory = await tx.inventory.decrementBatch(req.items);
    
    // 3. Initiate payment charge with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.totalAmountCents,
      currency: 'usd',
      customer: req.customerId,
      metadata: { orderId: req.orderId }
    });

    // 4. Record order & dispatch event
    const order = await tx.orders.create({ ...req, stripePaymentId: paymentIntent.id });
    await eventBus.publish('order.created', { orderId: order.id });
    return { status: 'success', orderId: order.id };
  });
}`
  },
  {
    id: 'collaborative-workspace-hub',
    title: 'COLLABORATIVE WORKSPACE HUB',
    subtitle: 'Real-Time Synchronized Canvas & Presence Architecture',
    description: 'Collaborative team productivity application featuring live multi-cursor presence, state reconciliation via CRDTs, and offline-first client synchronization.',
    longDescription: 'Constructed a comprehensive fullstack collaboration suite allowing distributed teams to co-edit project boards, flowcharts, and technical notes simultaneously. Built with a React/TypeScript interface and a high-concurrency Node.js and WebSocket backend utilizing Redis Pub/Sub channels across distributed nodes.',
    architectureBreakdown: [
      {
        title: 'Bi-Directional WebSocket Gateway',
        description: 'Scalable Node.js / Socket.IO cluster handling 50,000+ persistent socket connections with automatic heartbeat recovery.'
      },
      {
        title: 'CRDT Conflict Reconciliation',
        description: 'Deterministic peer-to-peer data convergence ensuring zero write conflicts during rapid concurrent team updates.'
      },
      {
        title: 'Optimistic Client Cache',
        description: 'Local IndexedDB caching layer supporting seamless offline authoring and immediate visual feedback.'
      }
    ],
    metrics: [
      { label: 'Sync Latency', value: '< 18ms', change: 'Global peer propagation' },
      { label: 'Concurrent Users', value: '50k+', change: 'Per distributed cluster' },
      { label: 'Offline Sync Accuracy', value: '100%', change: 'Zero state corruption' }
    ],
    tags: ['REACT', 'TYPESCRIPT', 'WEBSOCKETS', 'NODE.JS', 'REDIS', 'DOCKER'],
    techStack: ['React', 'TypeScript', 'WebSockets', 'Node.js', 'Redis', 'Docker'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAJfXxr10uf32uJ385QmaYql-1gH4n6TAvO42Vnx4D13LCwAOVxXt6EWbwQjq5PXsZt0xJvgoXaiaACDOmggekPjs1MfTdAj92O8X5ceI-L5yB1SbexUCzDGeItCQ53lN3E77VlCbpB8bmnUPesAdFPkhckuTlltl0n4teIA1wstqn9ZS_ViSRykWNok5MIm0t3cvIo0ok6a2MhLPV8wcK3AqnJ6E1jbhSe5L2xISICkkXicR9fU',
    imageAlt: 'Monochromatic conceptual visualization of connected collaborative data streams.',
    codeLanguage: 'typescript',
    codeSnippet: `// WebSocket Collaborative State Synchronization
export class DocumentRoomManager {
  private pubClient = getRedisClient();
  private subClient = getRedisClient();

  async handleUserEdit(roomId: string, userId: string, operation: CRDTOperation) {
    // 1. Broadcast locally to room participants
    socketServer.to(roomId).except(userId).emit('op:receive', operation);

    // 2. Publish cross-node synchronization delta
    await this.pubClient.publish(\`room:\${roomId}:sync\`, JSON.stringify({
      author: userId,
      payload: operation,
      timestamp: Date.now()
    }));
  }
}`
  },
  {
    id: 'cloud-telemetry-api-gateway',
    title: 'CLOUD TELEMETRY & API GATEWAY',
    subtitle: 'Python FastAPI Microservices & React Monitoring Console',
    description: 'Centralized API gateway and telemetry portal monitoring distributed microservices with dynamic rate limiting, token authentication, and live metrics visualization.',
    longDescription: 'Architected a cloud-native gateway aggregating 30+ internal microservices into a coherent REST and GraphQL interface. Includes automated API documentation generation, role-based JWT validation, token bucket rate limiting, and an interactive React dashboard for real-time traffic inspection.',
    architectureBreakdown: [
      {
        title: 'Asynchronous Python FastAPI Gateway',
        description: 'High-throughput async ASGI router proxying upstream services with non-blocking I/O and schema validation.'
      },
      {
        title: 'JWT Auth & RBAC Security Layer',
        description: 'Cryptographic token validation with claim verification and automated API key quota management.'
      },
      {
        title: 'React Analytics Dashboard',
        description: 'Interactive telemetry portal with Recharts time-series data visualizers, error log querying, and latency alerts.'
      }
    ],
    metrics: [
      { label: 'Routing Overhead', value: '1.4ms', change: 'Zero bottlenecks' },
      { label: 'Daily Requests Served', value: '12M+', change: 'Autoscaled on AWS ECS' },
      { label: 'Security Verification', value: '100%', change: 'Strict schema enforcement' }
    ],
    tags: ['PYTHON', 'FASTAPI', 'REACT', 'GRAPHQL', 'DOCKER', 'AWS'],
    techStack: ['Python', 'FastAPI', 'React', 'GraphQL', 'Docker', 'AWS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI_4N4B6DrUPEtPxjvRTLELMwb7Et7h3TlbSbv_FFkLzo6kk4oDQy5tJn-z2AB-jDHuJx7zgGa5x5BwFsZc97tKzLkudnKMkedBG7l0fl6N_jDtC0LfniNYGlnlGg6jHeZ0dKmmqhVZ9EwFf4Api-G0TkJqo9PE-3boWoNIvUTDDPnaAleeGLAuONNUiguquFaL1rrQw7-94wVHhb87BktXju2gQCHVxLx4Je7_QTRwQ4EcnUgmoc',
    imageAlt: 'Minimal monochrome render of networked systems and microservice topologies.',
    codeLanguage: 'typescript',
    codeSnippet: `// Fast API Gateway Reverse Proxy & Rate Limiter Handler
export async function authenticateAndProxy(
  req: IncomingMessage,
  res: ServerResponse,
  targetServiceUrl: string
): Promise<void> {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !verifyJwtSignature(token)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Unauthorized gateway access' }));
  }

  // Token Bucket Rate Limiter Check (100 req / min)
  const clientIp = req.socket.remoteAddress || 'unknown';
  const allowed = await rateLimiter.consume(clientIp, 1);
  if (!allowed) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Too Many Requests' }));
  }

  return proxyRequest(req, res, targetServiceUrl);
}`
  },
  {
    id: 'design-system-component-registry',
    title: 'DESIGN SYSTEM & COMPONENT REGISTRY',
    subtitle: 'Modular TypeScript Monorepo & UI Component Library',
    description: 'Enterprise fullstack design system used by 25+ developers across multiple web products. Automated token pipelines, Storybook documentation, and automated npm publishing.',
    longDescription: 'Created a unified fullstack design system package leveraging Turborepo, TypeScript, Tailwind CSS, and Storybook. Features automated semantic versioning, strict accessibility (WCAG 2.1 AA) validation in CI pipelines, and cross-framework component wrappers.',
    architectureBreakdown: [
      {
        title: 'Design Token Compiler',
        description: 'Transforms raw Figma design variables into strict CSS custom properties and typed TypeScript theme schemas.'
      },
      {
        title: 'Accessible Headless Components',
        description: 'Keyboard-navigable, screen-reader verified UI components engineered with Radix primitives and Tailwind styling.'
      },
      {
        title: 'Monorepo & Automated CI/CD',
        description: 'Turborepo workspace with automated linting, visual regression testing, and semantic changelog generation.'
      }
    ],
    metrics: [
      { label: 'Engineering Adoption', value: '100%', change: '25+ developers active' },
      { label: 'Accessibility Score', value: '100/100', change: 'Full WCAG AA compliance' },
      { label: 'Bundle Impact', value: '0.9 KB avg', change: 'Fully tree-shakeable' }
    ],
    tags: ['TYPESCRIPT', 'REACT', 'TAILWIND CSS', 'STORYBOOK', 'TURBOREPO'],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Turborepo'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7sx7jWkSG38vsTPQB0p1h0MPMAHD_fVJKdQhmHF_-weJkWtVg7F10iXvsN3JFHvBkRwmhA7qjrzNJJS8XUcuyL9IPYf7Z55PWO1TqbV5qRvIXaq95Z2SLKcdNVOsJyCjtJlOmFLm-TiPg5tPQd6l3GPylKG23jkM2-spBy1WsKe0sAjPV7m-2jOQnFHliZA823PgrNhbcnGYQyQ0sSBBtFFGF2-UNvknN6_ny1npY9JjMLHOC0No',
    imageAlt: 'Monochrome technical design grid showcasing modular design system components.',
    codeLanguage: 'typescript',
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
);`
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2022 — PRESENT',
    role: 'Senior Fullstack Software Developer',
    company: 'Nexus Cloud Labs',
    location: 'San Francisco, CA / Remote',
    description: 'Leading fullstack architecture and development for enterprise SaaS platforms. Designing distributed Node.js/TypeScript microservices, modern React/Next.js client applications, and scalable PostgreSQL database schemas.',
    bullets: [
      'Architected end-to-end web platforms handling over 10M monthly active user interactions with 99.99% system availability.',
      'Constructed a shared internal React component library, accelerating feature delivery velocity across 5 product teams by 35%.',
      'Optimized backend API pipelines and database indexes, slashing p95 latency from 380ms to 65ms.',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions, Docker, and AWS ECS.'
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
  },
  {
    id: 'exp-2',
    period: '2019 — 2022',
    role: 'Fullstack Software Engineer',
    company: 'Veloce Digital Systems',
    location: 'Austin, TX / Hybrid',
    description: 'Engineered high-performance web applications, customer portals, and RESTful/GraphQL backend services. Spearheaded frontend state management migrations and backend microservice integrations.',
    bullets: [
      'Built reactive, accessible single-page applications using React, TypeScript, and Tailwind CSS.',
      'Engineered scalable REST and GraphQL API services utilizing Node.js/Express and Python FastAPI.',
      'Integrated payment gateways (Stripe), authentication providers (OAuth, JWT), and third-party webhook ingestors.',
      'Established unit and end-to-end testing standards using Jest and Playwright, achieving 92% automated code coverage.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Stripe']
  },
  {
    id: 'exp-3',
    period: '2017 — 2019',
    role: 'Fullstack Web Developer',
    company: 'ByteCraft Interactive',
    location: 'Remote',
    description: 'Developed and shipped modern fullstack web products for high-growth startups. Specialized in translating Figma designs into responsive, production-ready frontend interfaces coupled with robust backend APIs.',
    bullets: [
      'Migrated legacy monolithic web applications into decoupled React and Node.js REST API stacks.',
      'Designed relational database models in PostgreSQL and MongoDB with efficient indexing and caching strategies.',
      'Implemented responsive, mobile-first interfaces adhering strictly to modern design systems and SEO best practices.'
    ],
    techStack: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    code: 'FRONT_01',
    description: 'Modern reactive frameworks, design systems, and responsive web performance.',
    skills: [
      { name: 'React 18/19 & Next.js', level: 98, focus: 'Server Components, SSR/SSG, Hooks, App Router' },
      { name: 'TypeScript Strict Mode', level: 96, focus: 'Complex generics, type safety, API contract typing' },
      { name: 'Tailwind CSS & Design Systems', level: 95, focus: 'Responsive layouts, design tokens, accessibility (a11y)' },
      { name: 'State Management & Web Vitals', level: 94, focus: 'Zustand, TanStack Query, optimistic UI, sub-second LCP' }
    ]
  },
  {
    title: 'Backend & APIs',
    code: 'BACK_02',
    description: 'Scalable server runtimes, REST/GraphQL APIs, and asynchronous message queues.',
    skills: [
      { name: 'Node.js & Express / NestJS', level: 95, focus: 'RESTful architectures, middleware, async pipelines' },
      { name: 'Python & FastAPI', level: 88, focus: 'High-throughput microservices, background workers' },
      { name: 'GraphQL & WebSockets', level: 92, focus: 'Apollo Server, real-time sync, schema federation' },
      { name: 'Auth & API Security', level: 93, focus: 'OAuth2, JWT, rate limiting, role-based access control (RBAC)' }
    ]
  },
  {
    title: 'Databases & ORMs',
    code: 'DATA_03',
    description: 'Relational data modeling, in-memory caches, and query optimization.',
    skills: [
      { name: 'PostgreSQL & SQL', level: 94, focus: 'Schema design, indexing, transactions, read replicas' },
      { name: 'Redis Caching & Pub/Sub', level: 91, focus: 'Session stores, rate limiters, distributed state' },
      { name: 'Prisma & Drizzle ORM', level: 93, focus: 'Type-safe database migrations and relations' },
      { name: 'MongoDB & NoSQL', level: 87, focus: 'Document modeling, aggregation pipelines' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    code: 'CLOUD_04',
    description: 'Containerization, continuous delivery pipelines, and cloud hosting.',
    skills: [
      { name: 'Docker & Containerization', level: 90, focus: 'Multi-stage builds, compose, microservice networking' },
      { name: 'AWS & Cloud Hosting', level: 89, focus: 'ECS, S3, Lambda, CloudFront, Vercel deployments' },
      { name: 'CI/CD Automation (GitHub Actions)', level: 92, focus: 'Automated test runners, linting, production deploys' },
      { name: 'Monitoring & Observability', level: 87, focus: 'Structured logging, error tracking, OpenTelemetry' }
    ]
  }
];

