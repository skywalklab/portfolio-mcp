import type { ContactInfo, ProcessStep, Project, Service, TechStack } from "./types.js";

export const services: Service[] = [
  {
    category: "websites",
    title: "Custom Web Applications",
    shortTitle: "Applications",
    description: "Websites that actually perform",
    longDescription:
      "Hand-coded websites built for your business—no templates, no page builders. Fast, works on every device, and flexible enough to add features as you grow.",
    lucide_icon: "code",
    items: [
      "Custom-built websites with no templates or page builders",
      "Responsive design for all devices",
      "Modern frontend frameworks (SvelteKit, Next.js, React)",
      "SEO-optimized architecture",
      "Accessibility compliance (WCAG)"
    ],
    benefits: [
      "Fast-loading, mobile-optimized websites that work on any device",
      "Easy-to-update content management systems",
      "Advanced search and filtering to help users find what they need",
      "Real-time features for interactive experiences",
      "Scalable architecture that grows with your business"
    ]
  },
  {
    category: "ecommerce",
    title: "E-commerce & Payments",
    shortTitle: "E-commerce",
    description: "Sell online, get paid",
    longDescription:
      "Secure payments, checkout that converts. Products, subscriptions, services—with inventory management and fraud protection.",
    lucide_icon: "shopping-cart",
    items: [
      "Stripe payment integration",
      "WooCommerce customization",
      "Subscription and recurring billing",
      "Inventory management",
      "Checkout optimization",
      "Fraud protection setup"
    ],
    benefits: [
      "Accept credit cards, Apple Pay, and Google Pay",
      "Manage subscriptions and recurring billing",
      "Secure checkout process with fraud protection",
      "Inventory management and order tracking",
      "Automated invoicing and payment reports"
    ]
  },
  {
    category: "cms",
    title: "Headless CMS & Content Management",
    description: "Modern content management with decoupled architectures",
    items: [
      "Payload CMS 3.0 development and implementation",
      "Headless WordPress architectures",
      "Custom CMS integrations with modern frontends",
      "Content API design (REST, GraphQL)",
      "Lexical and block-based rich text editors",
      "Media management and optimization",
      "Multi-language content workflows"
    ]
  },
  {
    category: "component-libraries",
    title: "Monorepo & Component Library Architecture",
    description: "Reusable component systems and design frameworks",
    items: [
      "Custom Svelte component libraries published to private npm registries",
      "Shared component libraries with reusable styles and plugins",
      "@skywalklab/lib - Agency-wide reusable components (animations, buttons, modals, navigation, GDPR, search, icons, panels)",
      "Monorepo setup with npm workspaces",
      "Design system development and documentation",
      "Versioning and automated publishing workflows",
      "Cross-project code sharing and consistency"
    ]
  },
  {
    category: "saas",
    title: "Full-Stack SaaS Platforms",
    description: "Complex web applications with enterprise features",
    items: [
      "Complex, data-driven web applications with real-time features",
      "Multi-tenant architectures with role-based permissions",
      "Advanced search, filtering, and visualization systems",
      "PostgreSQL database design and optimization",
      "RESTful and GraphQL API development"
    ]
  },
  {
    category: "ai",
    title: "AI-Powered Applications",
    description: "Intelligent features powered by modern AI",
    items: [
      "AI writing assistance and content generation (OpenAI, Anthropic Claude)",
      "Intelligent chat interfaces and conversational AI",
      "AI-enhanced document processing and analysis",
      "Model Context Protocol (MCP) integrations",
      "Custom MCP server development and deployment",
      "Custom AI workflow automation"
    ]
  },
  {
    category: "automation",
    title: "Workflow Automation & n8n",
    description: "Advanced automation with AI-powered workflows",
    items: [
      "n8n workflow automation platform setup and development",
      "Custom MCP servers for AI-powered automations",
      "Social media content creation and scheduling automation",
      "Multi-platform social media posting (Facebook, Instagram, LinkedIn, Twitter)",
      "AI-generated content workflows with approval gates",
      "Marketing automation and lead nurturing sequences",
      "Custom integrations between services and APIs",
      "Webhook-based triggers and event-driven workflows",
      "Scheduled tasks and cron-based automations"
    ]
  },
  {
    category: "education",
    title: "Educational & Academic Technology",
    description: "Platforms for academic institutions and research",
    items: [
      "Academic ranking and data aggregation platforms",
      "College comparison and institutional analytics",
      "IPEDS (Integrated Postsecondary Education Data System) integration",
      "College Scorecard API integration for outcomes data",
      "College Navigator data aggregation",
      "BLS (Bureau of Labor Statistics) career and salary data",
      "O*NET occupational information and career pathways",
      "Assessment and testing platforms with report generation",
      "Student/faculty portals and learning tools",
      "Research collaboration systems"
    ]
  },
  {
    category: "mobile",
    title: "Cross-Platform Mobile Development",
    description: "Native apps from a single codebase",
    items: [
      "Native iOS and Android applications from single codebase",
      "Capacitor/Ionic hybrid apps",
      "Progressive Web Apps (PWAs)",
      "Offline-first architecture",
      "App store deployment"
    ]
  },
  {
    category: "wordpress",
    title: "WordPress & PHP Development",
    description: "Custom WordPress applications, WooCommerce customization, and enterprise plugin development",
    items: [
      "Headless WordPress with modern frontends (Next.js, SvelteKit)",
      "Custom enterprise plugin development (licensing, subscription management)",
      "WooCommerce template overrides (login, registration, checkout, reviews, product pages)",
      "Custom authentication flows with Google OAuth and encrypted email verification",
      "WordPress REST API and custom endpoints for cross-subdomain authentication",
      "Tiered/bulk pricing systems and custom checkout logic",
      "Facebook Conversions API and Klaviyo integration for server-side tracking",
      "Redis cache integration and performance optimization",
      "WooCommerce e-commerce and payment integration",
      "Custom post types, taxonomies, and meta fields",
      "Local development workflows (Local by Flywheel)"
    ]
  },
  {
    category: "international",
    title: "International & Multilingual Sites",
    description: "Global-ready applications with localization",
    items: [
      "Multi-language routing and content management",
      "Paraglide i18n integration in Svelte applications",
      "SEO optimization with structured data/schema markup",
      "International payment processing",
      "Localized user experiences",
      "Regional compliance (GDPR, etc.)"
    ]
  },
  {
    category: "payments",
    title: "Payment & Subscription Systems",
    description: "Secure payment processing and billing",
    items: [
      "Stripe payment integration",
      "Subscription management and billing",
      "Usage-based pricing models",
      "Payment reconciliation and reporting"
    ]
  },
  {
    category: "marketing",
    title: "Marketing & Analytics Integration",
    description: "Advanced tracking and marketing automation",
    items: [
      "Facebook Pixel implementation and event tracking",
      "Facebook Conversions API (CAPI) server-side tracking",
      "Klaviyo email marketing platform integration",
      "Custom event tracking and conversion funnels",
      "Marketing automation workflows and segmentation",
      "Google Analytics 4 and Google Tag Manager",
      "A/B testing and conversion rate optimization",
      "Email campaign management and subscriber segmentation",
      "Cross-platform attribution and reporting"
    ]
  },
  {
    category: "performance",
    title: "Performance & Scalability",
    description: "Enterprise-grade infrastructure and optimization",
    items: [
      "Redis caching strategies",
      "CDN integration and optimization",
      "Docker containerization",
      "Kubernetes orchestration",
      "Google Cloud Platform deployment",
      "Database query optimization",
      "Load balancing and auto-scaling"
    ]
  }
];

export const projects: Project[] = [
  // {
  // 	name: 'Charlotte Voixoff',
  // 	tagline: 'Headless CMS Monorepo',
  // 	description: 'Modern decoupled architecture with Payload CMS backend and SvelteKit frontend',
  //  years: "'25 - Now",
  // 	responsibilities: [
  // 		'Monorepo with separate CMS and website apps',
  // 		'GraphQL API',
  // 		'Lexical editor',
  // 		'Paraglide i18n for multi-language support'
  // 	],
  // 	tech: ['Next.js 15', 'SvelteKit 5', 'Payload CMS 3.0', 'PostgreSQL', 'npm workspaces'],
  // 	results: 'Modern decoupled architecture with type-safe content management',
  // },
  {
    name: "SkywalkLab",
    role: "Founder & Full-Stack Developer",
    tagline: "Web Agency",
    description:
      "Web agency offering custom web apps, AI-powered workflow automations, e-commerce, and multilingual sites",
    years: "'25 - Now",
    responsibilities: [
      "Built lead generation pipeline sourcing from business directories, auditing with Lighthouse + local and cloud AI, and auto-generating personalized demo sites using extracted company data",
      "Custom web apps, e-commerce platforms, and multilingual sites for clients",
      "AI-powered workflow automations"
    ],
    tech: ["SvelteKit", "TypeScript", "SQLite", "Vite", "AI Integration", "Lighthouse"],
    results: "Delivering custom solutions for small businesses",
    url: "https://skywalklab.com"
  },
  {
    name: "@skywalklab/lib",
    role: "Full-Stack Developer",
    tagline: "Comprehensive Component Library",
    description: "Agency-wide reusable Svelte 5 components across all Skywalk Lab projects",
    years: "'24 - Now",
    responsibilities: [
      "90+ components across 9+ organized categories (animations, buttons, GDPR, modals, navigation, panels, search, icons, headings)",
      "Custom Vite plugins (SEO, icons, vendor)",
      "Multi-stage Docker builds",
      "Actions, utilities, CSS modules, i18n support",
      "GSAP animations, Sentry tracking",
      "Private GitHub npm registry with automated versioning"
    ],
    tech: ["Svelte 5", "TypeScript", "Vite", "GSAP", "Paraglide i18n", "Docker"],
    results: "40%+ faster development, consistent UX across client sites"
  },
  {
    name: "Academic Influence",
    role: "Full-Stack Developer",
    tagline: "Academic Intelligence Platform with Mobile Apps",
    description: "Large-scale academic ranking and data platform with millions of data points",
    years: "'21 - '26",
    responsibilities: [
      "Built interactive college comparison platform with NCES IPEDS data across 10,000+ institutions",
      "Developed degree finder executing 12+ parallel PostgreSQL queries across IPEDS, BLS, CIP, SOC, and COLI datasets",
      "Calculated ROI metrics including time-to-recoup, salary projections, and cost-of-living adjustments using multi-table JOINs with aggregations and weighted averages",
      "Created SVG template system generating unique hero images for thousands of pages",
      "Built data visualizations for college and academics rankings",
      "Implemented Google Tag Manager with dataLayer for page views, conversion events, and affiliate click tracking with GDPR-compliant cookie consent",
      "Wrote scripts to automatically build and populate marketing spreadsheets for mass email campaigns",
      "Deployed cross-platform mobile app to iOS and Android powered by Academic Influence data",
      "Implemented offline-first architecture with automatic data syncing for mobile app",
      "Integrated push notifications for college updates and alerts in mobile app"
    ],
    tech: ["Nunjucks", "SASS", "TypeScript", "PostgreSQL", "Webpack", "Express", "SvelteKit", "Capacitor", "Ionic"],
    results: "Handles massive datasets with sub-second query times",
    url: "https://academicinfluence.com"
  },
  {
    name: "Inkwell",
    role: "Full-Stack Developer",
    tagline: "AI-Enhanced Academic Publishing Platform",
    description: "Sophisticated writing platform with AI assistance, document processing, and custom MCP server",
    years: "'24 - '26",
    responsibilities: [
      "Built TypeScript automation pipeline with local open-source AI that queries YouTube API, retrieves transcripts, generates scripts, creates videos via Pictory API, and auto-posts to 3 social media platforms",
      "Configured Google Analytics events and Google Ads conversion tracking for subscription and trial-to-purchase funnels",
      "Implemented Facebook Pixel for conversion tracking",
      "Wrote platform tutorials and built MCP server giving AI assistants access to documentation for user support",
      "Automated B2B outreach pipeline analyzing 800k publisher workflows with AI, generating personalized emails, and exporting to spreadsheets for mass email and LinkedIn campaigns",
      "Built admin dashboards with Stripe integration for payment processing and analytics",
      "Produced demo videos with Premiere Pro to improve onboarding and retention",
      "Developed Inkwell Press and Inkwell Studio sites extending the platform into publishing and book production services",
      "Built a shared component library used across 3 Inkwell products (Inkwell, Press, Publishers), ensuring brand consistency and reducing development time",
      "Developed custom plugins and utilities for Press and Studio publishing workflows with private GitHub npm registry"
    ],
    tech: ["SvelteKit 5", "TypeScript", "SASS", "MCP", "Stripe", "YouTube API", "Pictory API", "npm workspaces"],
    results: "Enables scholars to write, cite, and publish with AI-powered tools",
    url: "https://inkwell.net"
  },
  {
    name: "Success Portraits",
    role: "Full-Stack Developer",
    tagline: "Psychological Assessment & Career Platform",
    description:
      "AI-powered assessment platform with custom licensing system, MCP server, and heavily customized WordPress/WooCommerce backend",
    years: "'23 - '26",
    responsibilities: [
      "Built full-stack personality test platform analyzing 19 traits with Next.js, TypeScript, and PostgreSQL",
      "Built 10 PDF report types covering personality insights, coaching, and career matching",
      "Developed 30+ custom PHP files for Google OAuth integration, custom login/registration overrides, and AES-256 encrypted email verification flow",
      "Built enterprise licensing system in PHP with master key generation, usage tracking, expiration management, and admin interface",
      "Implemented tiered bulk pricing system and WooCommerce template overrides for checkout, reviews, and product pages",
      "Implemented Facebook Pixel and Conversions API for client and server event tracking (registration, purchase, add-to-cart)",
      "Integrated Klaviyo API for email marketing automation, subscriber management, and custom events",
      "Built custom REST API endpoints for cross-subdomain auth between WordPress and Next.js test app",
      "Enabled AI-powered analysis by developing a custom MCP server integrating test results with LLMs",
      "Developed Euclidean distance algorithms to match user personality profiles with career paths",
      "Improved page load times with Redis caching and PostgreSQL for session and user data",
      "Managed team of 3 and served as primary liaison with academic partners"
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "GKE",
      "Redis",
      "PHP",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "Nginx",
      "GCE",
      "MCP",
      "Puppeteer"
    ],
    results: "Enterprise-grade career assessment platform with advanced licensing and AI capabilities",
    url: "https://successportraits.com"
  },
  {
    name: "Nuisiout",
    role: "Full-Stack Developer",
    tagline: "French Pest Control Service Site",
    description: "Multilingual service website with SEO optimization",
    years: "'25 - Now",
    responsibilities: [
      "Built French-language site optimized for local search",
      "Developed service catalog with pricing pages and online booking",
      "Implemented contact forms with automated email responses",
      "Created blog for SEO and customer education",
      "Implemented structured data markup and schema.org for search visibility",
      "Optimized for fast loading and mobile-friendly design"
    ],
    tech: ["SvelteKit", "@skywalklab/lib", "Netlify"],
    results: "Fast, SEO-optimized site with strong local search visibility",
    url: "https://nuisiout.fr"
  }
];

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: [
      "SvelteKit 5",
      "React 19",
      "Next.js 15",
      "TypeScript",
      "SASS",
      "Vite",
      "GSAP",
      "Three.js",
      "Webpack",
      "Nunjucks"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "PHP",
      "WordPress",
      "Redis",
      "MySQL",
      "SQLite",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Zod"
    ]
  },
  {
    category: "CMS",
    technologies: ["Payload CMS 3.0", "WordPress"]
  },
  {
    category: "Mobile",
    technologies: ["Capacitor", "Ionic"]
  },
  {
    category: "AI/ML",
    technologies: ["OpenAI", "Anthropic Claude", "MCP", "Ollama", "n8n"]
  },
  {
    category: "Payments",
    technologies: ["Stripe"]
  },
  {
    category: "Cloud",
    technologies: ["Google Cloud Platform", "GCE", "GKE", "Cloudflare Pages"]
  },
  {
    category: "Deployment",
    technologies: ["Git", "Docker", "Kubernetes", "Netlify", "Nginx"]
  },
  {
    category: "Tools",
    technologies: ["Puppeteer", "Sentry", "Photoshop", "Premiere Pro"]
  },
  {
    category: "Internationalization",
    technologies: ["Paraglide", "i18n frameworks"]
  },
  {
    category: "Marketing & Analytics",
    technologies: [
      "Google Tag Manager",
      "Google Analytics",
      "Google Ads",
      "Facebook Pixel",
      "Facebook CAPI",
      "Klaviyo",
      "GDPR Consent"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Modern CMS Architecture",
    description: "Headless and decoupled content management systems",
    items: [
      "Headless CMS design (Payload CMS, WordPress)",
      "Decoupled frontend/backend architectures",
      "Content APIs (REST, GraphQL)",
      "Media optimization and delivery",
      "Version control for content"
    ]
  },
  {
    title: "Monorepo & Code Reusability",
    description: "Efficient code sharing and component libraries",
    items: [
      "npm workspaces for multi-app projects",
      "Custom component libraries with automated publishing",
      "Design systems for brand consistency",
      "Shared utilities and business logic",
      "Type-safe cross-package imports"
    ]
  },
  {
    title: "Component Libraries & Design Systems",
    description: "Scalable, reusable UI components",
    items: [
      "Svelte 5 component libraries for agency and client work",
      "Organized exports (buttons, animations, modals, navigation, etc.)",
      "Private npm registries (GitHub Packages)",
      "Automated versioning and publishing",
      "Watch mode for rapid development",
      "GSAP animations and Lucide icons",
      "GDPR-compliant components"
    ]
  },
  {
    title: "AI Integration Expertise",
    description: "Cutting-edge AI capabilities",
    items: [
      "Conversational AI and chatbots",
      "Automated video creation and social media posting",
      "Document understanding and generation",
      "Writing assistance and enhancement",
      "Model Context Protocol implementations",
      "Custom AI workflows and automation"
    ]
  },
  {
    title: "Performance Engineering",
    description: "Optimized for speed and scale",
    items: [
      "Sub-second query optimization for large datasets",
      "Redis caching strategies",
      "CDN and asset optimization",
      "Database indexing and query tuning",
      "Load testing and monitoring"
    ]
  },
  {
    title: "DevOps & Deployment",
    description: "Automated, reliable infrastructure",
    items: [
      "Monorepo CI/CD pipelines",
      "Containerization with Docker",
      "Kubernetes orchestration",
      "Infrastructure as code",
      "Component library publishing automation"
    ]
  }
];

export const specializations: string[] = [
  "Full-Stack Web Applications (SvelteKit, Next.js)",
  "Headless CMS (Payload, WordPress)",
  "Monorepo Architecture",
  "Component Libraries & Design Systems",
  "AI Integration & Custom MCP Servers",
  "Workflow Automation (n8n)",
  "E-commerce & Payments (Stripe, WooCommerce)",
  "Marketing & Analytics (Facebook CAPI, Klaviyo)",
  "Internationalization & i18n (Paraglide)",
  "Academic Technology",
  "Publishing Platforms",
  "Data Visualization",
  "Mobile Apps (iOS/Android)"
];

export const contactInfo: ContactInfo = {
  name: "Thomas Doak",
  preferredName: "Tommy",
  phone: "+33751237794",
  email: "tommy.doak@skywalklab.com",
  linkedin: "https://www.linkedin.com/in/tommydoak/",
  website: "https://skywalklab.com",
  hireMeWebsite: "https://skywalklab.com/hire-tommy-doak",
  professionalGithub: "https://github.com/skywalklab",
  personalGithub: "https://github.com/theantidoak"
};
