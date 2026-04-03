import type {
	ClientProject,
	ClientService,
	ProcessStep,
	Project,
	Service,
	TechStack
} from './content-types.js';

export const clientProjects: ClientProject[] = [
	{
		name: 'Academic Influence',
		tagline: 'Academic Rankings Platform',
		description:
			'A comprehensive platform helping students compare 10,000+ colleges and universities',
		outcomes: [
			'Handles millions of data points with instant search results',
			'Interactive comparison tools and personalized recommendations',
			'Engaging data visualizations that make complex information accessible',
			'Scales to serve thousands of concurrent users'
		],
		results:
			'Empowering students to make informed decisions about their education with fast, reliable data',
		isNew: false
	},
	{
		name: 'Inkwell',
		tagline: 'Academic Publishing Platform - AI & Infrastructure',
		description:
			'Marketing pages, AI chatbot, administrative tools, and custom MCP server for an academic writing platform',
		outcomes: [
			'AI chatbot providing writing guidance and answering user questions',
			'Custom MCP server for seamless AI integration across the platform',
			'Automated social media video creation and posting across platforms',
			'Marketing and informational web pages to attract and onboard users',
			'Admin dashboards for platform management and analytics',
			'Secure subscription management with Stripe payment processing',
			'Integration of AI features (OpenAI, Anthropic Claude) into the platform'
		],
		results:
			'Supporting an academic writing platform with intelligent assistance and seamless user experience',
		isNew: false
	},
	{
		name: 'Inkwell Press & Studio',
		tagline: 'Publishing Platform Suite',
		description:
			'A complete publishing ecosystem with multiple applications and shared component library',
		outcomes: [
			'Built two complete publishing applications from the ground up',
			'Created reusable component library for consistent design across all apps',
			'Developed shared styles and plugins for publishing workflows',
			'40%+ faster development through code reuse',
			'Unified user experience across the entire Inkwell ecosystem'
		],
		results:
			'Enabling rapid development and consistent quality across multiple publishing applications',
		isNew: false
	},
	{
		name: 'Success Portraits',
		tagline: 'Career Assessment Platform',
		description:
			'An AI-powered personality assessment platform with custom licensing system and MCP server',
		outcomes: [
			'Interactive assessments with AI-powered analysis',
			'Custom licensing and test key management system (Master Keys plugin)',
			'Custom MCP server for advanced AI capabilities and integrations',
			'Professional PDF reports delivered automatically',
			'AI chat interface for personalized career advice',
			'Headless WordPress for content management',
			'Usage tracking and subscription management',
			'Fast, cached results for thousands of users'
		],
		results:
			'Helping individuals discover career paths with enterprise-grade licensing and AI analysis',
		isNew: false
	},
	{
		name: 'Nuisiout',
		tagline: 'Service Business Website',
		description: 'A multilingual website for a French pest control company',
		outcomes: [
			'French-language site optimized for local search',
			'Service catalog with pricing and online booking',
			'Contact forms and automated email responses',
			'Blog for SEO and customer education',
			'Fast loading and mobile-friendly design'
		],
		results: 'Increased online visibility and customer inquiries through SEO optimization',
		isNew: false
	},
	{
		name: 'College Compare App',
		tagline: 'Mobile Education App',
		description: 'A mobile app for comparing colleges on iPhone and Android',
		outcomes: [
			'One codebase deployed to both iOS and Android',
			'Works offline with automatic data syncing',
			'Native-feeling UI with smooth performance',
			'Push notifications for updates'
		],
		results: 'Students can research colleges on-the-go with a native mobile experience',
		isNew: false
	}
];

export const clientSpecializations: string[] = [
	'Custom Web Applications',
	'AI-Powered Features',
	'Workflow Automation',
	'Content Management Systems',
	'Mobile Apps (iOS & Android)',
	'E-commerce & Online Payments',
	'Marketing & Analytics',
	'Multilingual Websites',
	'Educational Platforms',
	'Document Management',
	'WordPress Development',
	'Fast & Reliable Hosting'
];

export const services: Service[] = [
	{
		category: 'cms',
		title: 'Headless CMS & Content Management',
		description: 'Modern content management with decoupled architectures',
		items: [
			'Payload CMS 3.0 development and implementation',
			'Headless WordPress architectures',
			'Custom CMS integrations with modern frontends',
			'Content API design (REST, GraphQL)',
			'Lexical and block-based rich text editors',
			'Media management and optimization',
			'Multi-language content workflows'
		]
	},
	{
		category: 'component-libraries',
		title: 'Monorepo & Component Library Architecture',
		description: 'Reusable component systems and design frameworks',
		items: [
			'Custom Svelte component libraries published to private npm registries',
			'Shared component libraries with reusable styles and plugins',
			'@skywalklab/lib - Agency-wide reusable components (animations, buttons, modals, navigation, GDPR, search, icons, panels)',
			'Monorepo setup with npm workspaces',
			'Design system development and documentation',
			'Versioning and automated publishing workflows',
			'Cross-project code sharing and consistency'
		]
	},
	{
		category: 'saas',
		title: 'Full-Stack SaaS Platforms',
		description: 'Complex web applications with enterprise features',
		items: [
			'Complex, data-driven web applications with real-time features',
			'Multi-tenant architectures with role-based permissions',
			'Advanced search, filtering, and visualization systems',
			'PostgreSQL database design and optimization',
			'RESTful and GraphQL API development'
		]
	},
	{
		category: 'ai',
		title: 'AI-Powered Applications',
		description: 'Intelligent features powered by modern AI',
		items: [
			'AI writing assistance and content generation (OpenAI, Anthropic Claude)',
			'Intelligent chat interfaces and conversational AI',
			'AI-enhanced document processing and analysis',
			'Model Context Protocol (MCP) integrations',
			'Custom MCP server development and deployment',
			'Custom AI workflow automation'
		]
	},
	{
		category: 'automation',
		title: 'Workflow Automation & n8n',
		description: 'Advanced automation with AI-powered workflows',
		items: [
			'n8n workflow automation platform setup and development',
			'Custom MCP servers for AI-powered automations',
			'Social media content creation and scheduling automation',
			'Multi-platform social media posting (Facebook, Instagram, LinkedIn, Twitter)',
			'AI-generated content workflows with approval gates',
			'Marketing automation and lead nurturing sequences',
			'Custom integrations between services and APIs',
			'Webhook-based triggers and event-driven workflows',
			'Scheduled tasks and cron-based automations'
		]
	},
	{
		category: 'education',
		title: 'Educational & Academic Technology',
		description: 'Platforms for academic institutions and research',
		items: [
			'Academic ranking and data aggregation platforms',
			'College comparison and institutional analytics',
			'IPEDS (Integrated Postsecondary Education Data System) integration',
			'College Scorecard API integration for outcomes data',
			'College Navigator data aggregation',
			'BLS (Bureau of Labor Statistics) career and salary data',
			'O*NET occupational information and career pathways',
			'Assessment and testing platforms with report generation',
			'Student/faculty portals and learning tools',
			'Research collaboration systems'
		]
	},
	{
		category: 'publishing',
		title: 'Publishing & Document Management',
		description: 'Professional document processing and collaboration',
		items: [
			'Academic writing platforms with real-time collaboration',
			'Citation management (BibLaTeX, CSL, Chicago, APA)',
			'Document conversion (PDF, LaTeX, DOCX, Typst, Markdown)',
			'Rich text editing with ProseMirror and Lexical',
			'Automated PDF generation and templating (Puppeteer)',
			'Typography and layout systems'
		]
	},
	{
		category: 'mobile',
		title: 'Cross-Platform Mobile Development',
		description: 'Native apps from a single codebase',
		items: [
			'Native iOS and Android applications from single codebase',
			'Capacitor/Ionic hybrid apps',
			'Progressive Web Apps (PWAs)',
			'Offline-first architecture',
			'App store deployment'
		]
	},
	{
		category: 'wordpress',
		title: 'WordPress Development & Integration',
		description: 'Custom WordPress applications and enterprise plugin development',
		items: [
			'Headless WordPress with modern frontends (Next.js, SvelteKit)',
			'Custom enterprise plugin development (licensing, subscription management)',
			'Complex database-driven WordPress functionality',
			'Custom WordPress admin interfaces with TypeScript',
			'WordPress REST API and custom endpoints',
			'WooCommerce e-commerce and payment integration',
			'Custom post types, taxonomies, and meta fields',
			'Multi-site WordPress installations',
			'Local development workflows (Local by Flywheel)'
		]
	},
	{
		category: 'international',
		title: 'International & Multilingual Sites',
		description: 'Global-ready applications with localization',
		items: [
			'Multi-language routing and content management',
			'Paraglide i18n integration in Svelte applications',
			'SEO optimization with structured data/schema markup',
			'International payment processing',
			'Localized user experiences',
			'Regional compliance (GDPR, etc.)'
		]
	},
	{
		category: 'payments',
		title: 'Payment & Subscription Systems',
		description: 'Secure payment processing and billing',
		items: [
			'Stripe payment integration',
			'Subscription management and billing',
			'Usage-based pricing models',
			'Payment reconciliation and reporting'
		]
	},
	{
		category: 'marketing',
		title: 'Marketing & Analytics Integration',
		description: 'Advanced tracking and marketing automation',
		items: [
			'Facebook Pixel implementation and event tracking',
			'Facebook Conversions API (CAPI) server-side tracking',
			'Klaviyo email marketing platform integration',
			'Custom event tracking and conversion funnels',
			'Marketing automation workflows and segmentation',
			'Google Analytics 4 and Google Tag Manager',
			'A/B testing and conversion rate optimization',
			'Email campaign management and subscriber segmentation',
			'Cross-platform attribution and reporting'
		]
	},
	{
		category: 'performance',
		title: 'Performance & Scalability',
		description: 'Enterprise-grade infrastructure and optimization',
		items: [
			'Redis caching strategies',
			'CDN integration and optimization',
			'Docker containerization',
			'Kubernetes orchestration',
			'Google Cloud Platform deployment',
			'Database query optimization',
			'Load balancing and auto-scaling'
		]
	}
];

export const projects: Project[] = [
	{
		name: 'Charlotte Voixoff',
		tagline: 'Headless CMS Monorepo',
		description: 'Modern decoupled architecture with Payload CMS backend and SvelteKit frontend',
		features: [
			'Monorepo with separate CMS and website apps',
			'GraphQL API',
			'Lexical editor',
			'Paraglide i18n for multi-language support'
		],
		tech: ['Next.js 15', 'SvelteKit 5', 'Payload CMS 3.0', 'PostgreSQL', 'npm workspaces'],
		results: 'Modern decoupled architecture with type-safe content management',
		isNew: true
	},
	{
		name: '@skywalklab/lib',
		tagline: 'Comprehensive Component Library',
		description: 'Agency-wide reusable Svelte 5 components across all Skywalk Lab projects',
		features: [
			'9+ organized categories (animations, buttons, GDPR, modals, navigation, panels, search, icons, headings)',
			'Actions, utilities, CSS modules, i18n support',
			'GSAP animations, Sentry tracking',
			'Private GitHub npm registry with automated versioning (v0.8.390+)'
		],
		tech: ['Svelte 5', 'TypeScript', 'GSAP', 'Paraglide i18n'],
		results: '40%+ faster development, consistent UX across client sites',
		isNew: true
	},
	{
		name: 'Inkwell Press & Studio',
		tagline: 'Publishing Ecosystem with Shared Component Library',
		description:
			'Complete publishing platform suite including Inkwell Press, Inkwell Studio, and shared component library',
		features: [
			'Shared component library with reusable Svelte 5 components',
			'Consistent styles and design system across all Inkwell properties',
			'Custom plugins and utilities for publishing workflows',
			'Private GitHub npm registry with automated versioning',
			'Inkwell Press and Inkwell Studio applications',
			'Watch/rebuild workflow for rapid development'
		],
		tech: ['Svelte 5', 'TypeScript', 'npm workspaces', 'automated publishing'],
		results:
			'Unified ecosystem enabling consistent UX and faster development across all Inkwell properties'
	},
	{
		name: 'Academic Influence',
		tagline: 'Comprehensive Academic Intelligence Platform',
		description: 'Large-scale academic ranking and data platform with millions of data points',
		features: [
			'10,000+ institutions, millions of citations and rankings',
			'Interactive college comparison, degree finders, biographical timelines',
			'Complex data visualization and sports data'
		],
		tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'data pipelines'],
		results: 'Handles massive datasets with sub-second query times'
	},
	{
		name: 'Inkwell',
		tagline: 'AI-Enhanced Academic Publishing Platform',
		description:
			'Sophisticated writing platform with AI assistance, document processing, and custom MCP server',
		features: [
			'Real-time collaborative editing',
			'Custom MCP server (inkwell-mcp) for AI integrations',
			'Citation management',
			'AI writing assistance',
			'PDF, LaTeX, DOCX, Typst conversion pipelines',
			'OpenAI, Anthropic Claude, Stripe subscriptions, Google Cloud Storage'
		],
		tech: ['SvelteKit 5', 'ProseMirror', 'PostgreSQL', 'WebSockets', 'AI APIs', 'MCP'],
		results: 'Enables scholars to write, cite, and publish with AI-powered tools'
	},
	{
		name: 'Success Portraits',
		tagline: 'Psychological Assessment & Career Platform',
		description:
			'AI-powered assessment platform with custom licensing system, MCP server, and headless WordPress',
		features: [
			'Interactive personality assessments',
			'Custom WordPress plugin: Master Keys licensing and subscription management',
			'License key generation, validation, usage tracking, and expiration management',
			'TypeScript admin interface for key management',
			'Custom MCP server (success-portraits-mcp) for AI capabilities',
			'AI-powered career analysis',
			'PDF report generation with Puppeteer',
			'Anthropic Claude and OpenAI for chat and analysis',
			'Headless WordPress with Next.js frontend'
		],
		tech: [
			'Next.js',
			'WordPress',
			'PostgreSQL',
			'Redis',
			'Puppeteer',
			'Material-UI',
			'MCP',
			'TypeScript'
		],
		results:
			'Enterprise-grade career assessment platform with advanced licensing and AI capabilities'
	},
	{
		name: 'Nuisiout',
		tagline: 'French Pest Control Service Site',
		description: 'Multilingual service website with SEO optimization',
		features: [
			'Multilingual (French)',
			'Service catalogs, pricing pages, contact forms, blog',
			'Structured data markup, schema.org implementation'
		],
		tech: ['SvelteKit', '@skywalklab/lib', 'Netlify'],
		results: 'Fast, SEO-optimized site with strong local search visibility'
	},
	{
		name: 'College Compare Mobile App',
		tagline: 'Cross-Platform Education Tool',
		description: 'Native mobile application for college comparison',
		features: [
			'Single codebase deployed to iOS and Android',
			'Offline-first data sync',
			'Native UI components'
		],
		tech: ['SvelteKit', 'Capacitor', 'Ionic'],
		results: 'Native performance with faster development cycle'
	}
];

export const techStack: TechStack[] = [
	{
		category: 'Frontend',
		technologies: ['SvelteKit 5', 'React 19', 'Next.js 15', 'TypeScript']
	},
	{
		category: 'Backend',
		technologies: ['Node.js', 'Express', 'PostgreSQL']
	},
	{
		category: 'CMS',
		technologies: ['Payload CMS 3.0', 'WordPress (headless)']
	},
	{
		category: 'Mobile',
		technologies: ['Capacitor', 'Ionic']
	},
	{
		category: 'AI/ML',
		technologies: ['OpenAI', 'Anthropic Claude', 'MCP']
	},
	{
		category: 'Payments',
		technologies: ['Stripe']
	},
	{
		category: 'Cloud',
		technologies: ['Google Cloud Platform', 'AWS']
	},
	{
		category: 'Deployment',
		technologies: ['Docker', 'Kubernetes', 'Netlify']
	},
	{
		category: 'Internationalization',
		technologies: ['Paraglide', 'i18n frameworks']
	}
];

export const processSteps: ProcessStep[] = [
	{
		title: 'Modern CMS Architecture',
		description: 'Headless and decoupled content management systems',
		items: [
			'Headless CMS design (Payload CMS, WordPress)',
			'Decoupled frontend/backend architectures',
			'Content APIs (REST, GraphQL)',
			'Media optimization and delivery',
			'Version control for content'
		]
	},
	{
		title: 'Monorepo & Code Reusability',
		description: 'Efficient code sharing and component libraries',
		items: [
			'npm workspaces for multi-app projects',
			'Custom component libraries with automated publishing',
			'Design systems for brand consistency',
			'Shared utilities and business logic',
			'Type-safe cross-package imports'
		]
	},
	{
		title: 'Component Libraries & Design Systems',
		description: 'Scalable, reusable UI components',
		items: [
			'Svelte 5 component libraries for agency and client work',
			'Organized exports (buttons, animations, modals, navigation, etc.)',
			'Private npm registries (GitHub Packages)',
			'Automated versioning and publishing',
			'Watch mode for rapid development',
			'GSAP animations and Lucide icons',
			'GDPR-compliant components'
		]
	},
	{
		title: 'AI Integration Expertise',
		description: 'Cutting-edge AI capabilities',
		items: [
			'Conversational AI and chatbots',
			'Automated video creation and social media posting',
			'Document understanding and generation',
			'Writing assistance and enhancement',
			'Model Context Protocol implementations',
			'Custom AI workflows and automation'
		]
	},
	{
		title: 'Performance Engineering',
		description: 'Optimized for speed and scale',
		items: [
			'Sub-second query optimization for large datasets',
			'Redis caching strategies',
			'CDN and asset optimization',
			'Database indexing and query tuning',
			'Load testing and monitoring'
		]
	},
	{
		title: 'DevOps & Deployment',
		description: 'Automated, reliable infrastructure',
		items: [
			'Monorepo CI/CD pipelines',
			'Containerization with Docker',
			'Kubernetes orchestration',
			'Infrastructure as code',
			'Component library publishing automation',
			'Automated backups and disaster recovery'
		]
	}
];

export const specializations: string[] = [
	'Headless CMS (Payload, WordPress)',
	'Monorepo Architecture',
	'Component Libraries & Design Systems',
	'AI Integration & Custom MCP Servers',
	'Workflow Automation (n8n)',
	'Marketing & Analytics (Facebook CAPI, Klaviyo)',
	'Academic Technology',
	'Document Processing',
	'Publishing Platforms',
	'Data Visualization',
	'Mobile Apps (iOS/Android)'
];

export const clientServices: ClientService[] = [
	{
		category: 'websites',
		title: 'Custom Web Applications',
		shortTitle: 'Applications',
		description: 'Websites that actually perform',
		longDescription:
			'Hand-coded websites built for your business—no templates, no page builders. Fast, works on every device, and flexible enough to add features as you grow.',
		lucide_icon: 'code',
		benefits: [
			'Fast-loading, mobile-optimized websites that work on any device',
			'Easy-to-update content management systems',
			'Advanced search and filtering to help users find what they need',
			'Real-time features for interactive experiences',
			'Scalable architecture that grows with your business'
		]
	},
	{
		category: 'ai',
		title: 'AI-Powered Solutions',
		shortTitle: 'Solutions',
		description: 'AI that actually does something useful',
		longDescription:
			'Chatbots that answer customer questions, tools that generate content, automation that runs while you sleep. Practical AI, not buzzword AI.',
		lucide_icon: 'brain',
		benefits: [
			'AI chat assistants to answer customer questions 24/7',
			'Automated content generation and writing assistance',
			'Custom AI integrations with Model Context Protocol (MCP)',
			'Personalized recommendations for your users',
			'Workflow automation to reduce manual tasks'
		]
	},
	{
		category: 'automation',
		title: 'Workflow Automation',
		shortTitle: 'Automation',
		description: 'Stop doing the same thing twice',
		longDescription:
			'Connect your apps and automate the repetitive stuff. Social media posting, data syncing, email sequences—workflows that run in the background.',
		lucide_icon: 'workflow',
		benefits: [
			'Social media content creation and posting automation',
			'AI-powered workflow automation with n8n',
			'Automated marketing campaigns and email sequences',
			'Custom automation workflows tailored to your business',
			'Integration between apps and services',
			'Scheduled tasks and trigger-based automations'
		]
	},
	{
		category: 'cms',
		title: 'Content Management',
		shortTitle: 'Content',
		description: 'Update your site without calling us',
		longDescription:
			'Edit text, swap images, publish content—all from a dashboard. No developer needed for day-to-day updates.',
		lucide_icon: 'file-pen',
		benefits: [
			'Edit your website content anytime, from anywhere',
			'Manage multiple languages from one dashboard',
			'Organize images, videos, and documents efficiently',
			'Preview changes before publishing',
			'Flexible publishing workflows for team collaboration'
		]
	},
	{
		category: 'mobile',
		title: 'Mobile Apps',
		shortTitle: 'Mobile',
		description: 'Apps for iPhone and Android',
		longDescription:
			'One codebase, both app stores. Native performance, offline support, push notifications. We handle submission too.',
		lucide_icon: 'smartphone',
		benefits: [
			'One app that works on iPhone and Android',
			'Works offline with automatic syncing',
			'Native performance and smooth animations',
			'Push notifications to engage users',
			'App store submission and updates'
		]
	},
	{
		category: 'ecommerce',
		title: 'E-commerce & Payments',
		shortTitle: 'E-commerce',
		description: 'Sell online, get paid',
		longDescription:
			'Secure payments, checkout that converts. Products, subscriptions, services—with inventory management and fraud protection.',
		lucide_icon: 'shopping-cart',
		benefits: [
			'Accept credit cards, Apple Pay, and Google Pay',
			'Manage subscriptions and recurring billing',
			'Secure checkout process with fraud protection',
			'Inventory management and order tracking',
			'Automated invoicing and payment reports'
		]
	},
	{
		category: 'international',
		title: 'Multilingual Websites',
		shortTitle: 'Multilingual',
		description: 'Your site in multiple languages',
		longDescription:
			"Websites that speak your customers' languages. Local SEO, localized content, currency, and date formats—managed from one dashboard.",
		lucide_icon: 'languages',
		benefits: [
			'Support for multiple languages and regions',
			'Automatic language detection and switching',
			'Localized content, currency, and date formats',
			'SEO optimization for each language',
			'GDPR and privacy compliance built-in'
		]
	},
	// {
	// 	category: 'education',
	// 	title: 'Educational Platforms',
	//  shortTitle: 'Educational',
	// 	description: 'Tools for schools, universities, and online learning',
	// 	benefits: [
	// 		'Student and faculty portals with role-based access',
	// 		'Assessment and testing tools with automatic grading',
	// 		'Data analytics and reporting dashboards',
	// 		'Integration with College Scorecard (U.S. Dept. of Education)',
	// 		'College Navigator and federal education databases',
	// 		'Bureau of Labor Statistics career and salary data',
	// 		'College comparison tools with real outcomes and earnings data',
	// 		'Collaboration tools for research teams',
	// 		'Integration with existing systems'
	// 	]
	// },
	// {
	// 	category: 'wordpress',
	// 	title: 'WordPress Solutions',
	// 	description: 'Custom WordPress applications and enterprise plugins',
	// 	benefits: [
	// 		'Headless WordPress with modern frontend frameworks',
	// 		'Custom enterprise-grade WordPress plugins',
	// 		'Complex licensing and subscription management systems',
	// 		'WooCommerce online stores with payment processing',
	// 		'Custom themes and advanced functionality',
	// 		'WordPress as a headless CMS for React/Next.js apps',
	// 		'Easy content updates through WordPress',
	// 		'Ongoing maintenance and security updates'
	// 	]
	// },
	{
		category: 'marketing',
		title: 'Marketing & Analytics',
		shortTitle: 'Marketing',
		description: "Know what's working",
		longDescription:
			'Clear analytics, conversion tracking, audience segmentation. Plus automated email campaigns that actually get opened.',
		lucide_icon: 'chart-column-increasing',
		benefits: [
			'Facebook Pixel and Conversions API for accurate ad tracking',
			'Google Analytics and Google Tag Manager integration',
			'Klaviyo email marketing integration and automation',
			'Conversion tracking across your website and ads',
			'Analytics dashboards to understand your customers',
			'Marketing automation workflows',
			'Email campaign management and segmentation'
		]
	},
	{
		category: 'performance',
		title: 'Performance & Hosting',
		shortTitle: 'Performance',
		description: 'Fast hosting that scales',
		longDescription:
			'Your site stays fast whether you have ten visitors or ten thousand. Optimized code, smart caching, auto-scaling infrastructure.',
		lucide_icon: 'gauge',
		benefits: [
			'Lightning-fast page loads (under 2 seconds)',
			'99.9% uptime with automatic backups',
			'Handles traffic spikes without slowing down',
			'Global content delivery for worldwide speed',
			'24/7 monitoring and security protection'
		]
	}
];
