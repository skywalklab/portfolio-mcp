/** SYMLINKED FROM portfolio-mcp/src/lib/experience/cv.ts */

export interface ContactPoint {
	type: string;
	text: string;
	lucide_icon?: string;
	img?: string;
	href?: string;
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

export interface ExperienceItem {
	title: string;
	company: string;
	url?: string;
	skills: string[];
	years: string;
	descriptions: string[];
}

export interface EducationItem {
	degree: string;
	institution: string;
	years: string;
	description?: string;
}

export const contactPoints: ContactPoint[] = [
	{ type: 'Position', text: 'Software Engineer', lucide_icon: 'user' },
	{ type: 'Location', text: 'Nice, France', lucide_icon: 'map-pin' },
	{ type: 'Email', text: 'tcdoak@gmail.com', lucide_icon: 'mail' },
	{
		type: 'Website',
		text: 'skywalklab.com/hire-tommy-doak',
		// lucide_icon: "globe",
		img: 'https://skywalklab.com/brand/logo-96.png',
		href: 'https://skywalklab.com/hire-tommy-doak'
	},
	{
		type: 'LinkedIn',
		text: '/in/tommydoak',
		lucide_icon: 'linkedin',
		href: 'https://www.linkedin.com/in/tommydoak/'
	},
	{
		type: 'Github',
		text: 'portfolio-mcp',
		lucide_icon: 'github',
		href: 'https://github.com/skywalklab/portfolio-mcp/'
	}
];

export const skillCategories: SkillCategory[] = [
	{
		title: 'Front-End',
		skills: [
			'TypeScript',
			'SvelteKit',
			'React',
			'Next.js',
			'SASS',
			'Vite',
			'Nunjucks',
			'Webpack',
			'GSAP',
			'Three.js',
			'i18n',
			'Photoshop',
			'Premiere Pro'
		]
	},
	{
		title: 'Back-End',
		skills: [
			'Node',
			'Express',
			'PHP',
			'Redis',
			'PostgreSQL',
			'MySQL',
			'MongoDB',
			'REST APIs',
			'MCP Servers',
			'Ollama',
			'n8n',
			'Puppeteer',
			'Zod',
			'Sentry'
		]
	},
	{
		title: 'DevOps & Cloud',
		skills: ['Git', 'Docker', 'Nginx', 'GCP', 'GCE', 'GKE', 'Cloudflare Pages']
	}
];

export const experiences: ExperienceItem[] = [
	{
		title: 'Founder',
		company: 'SkywalkLab',
		url: 'skywalklab.com',
		skills: ['SvelteKit', 'TypeScript', 'Vite', 'AI Integration', 'Three.js', 'GSAP', 'i18n'],
		years: "'25 - Now",
		descriptions: [
			'Founded a web agency offering custom web apps, AI-powered workflow automations, e-commerce, and multilingual sites.',
			'Architected 61+ component library with custom Vite plugins (SEO, icons, vendor) and multi-stage Docker builds.'
		]
	},
	{
		title: 'Full-Stack Developer',
		company: 'Inkwell',
		skills: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Vite', 'SASS', 'MCP'],
		years: "'24 - Now",
		descriptions: [
			'Reduced content creation time by 90% by building a TypeScript automation pipeline with local open-source AI that queries YouTube API, retrieves transcripts, generates scripts, creates videos via Pictory API, and auto-posts to 3 platforms.',
			'Enabled AI-powered user support across 2 LLM providers by developing a custom MCP server.',
			'Built a shared component library used across 3 Inkwell products (Inkwell, Press, Publishers), ensuring brand consistency and reducing development time.',
			'Streamlined subscription management by building admin dashboards with Stripe integration for payment processing and analytics.',
			'Improved onboarding and retention by producing demo videos with Premiere Pro, reducing learning curve and increasing stickiness.'
		]
	},
	{
		title: 'Full-Stack Developer',
		company: 'Success Portraits',
		skills: [
			'Next.js',
			'React',
			'TypeScript',
			'PostgreSQL',
			'Docker',
			'GKE',
			'Redis',
			'PHP',
			'MySQL',
			'Nginx',
			'GCE'
		],
		years: "'23 - Now",
		descriptions: [
			'Built full-stack personality test platform analyzing 19 traits with Next.js, TypeScript, and PostgreSQL.',
			'Achieved 99.9% uptime and reduced page load times by 60% through Redis caching, database optimization, and GCE infrastructure.',
			'Expanded product offerings by 400% (2 to 10 PDF reports) by building automated PDF generation and mapping traits to ONET work styles.',
			'Enabled AI-powered career analysis by developing a custom MCP server integrating test results with LLMs.',
			'Built enterprise licensing system in PHP with master key generation, usage tracking, and admin interface.',
			'Led cross-functional team of 3 and coordinated with academic partners to drive product development.'
		]
	},
	{
		title: 'Full-Stack Developer',
		company: 'Academic Influence',
		skills: ['Nunjucks', 'SASS', 'PostgreSQL', 'Webpack', 'Express'],
		years: "'21 - '25",
		descriptions: [
			'Built interactive data visualizations and comparison tools for 10,000+ institutions using Nunjucks, SASS, and TypeScript.',
			'Enabled data-driven college decisions by integrating BLS and NCES APIs with ROI calculations in a degree finder tool.',
			'Reduced hero image creation time by 95% by developing a dynamic SVG-based generator for thousands of pages.'
		]
	}
];

export const education: EducationItem[] = [
	{
		degree: 'Advanced Masters in Digital Strategy Management',
		institution: 'Grenoble Ecole de Management',
		years: "'20 - '21",
		description: '2021 Best Dissertation Winner'
	},
	{
		degree: 'B.S. in Marketing',
		institution: 'University of Georgia',
		years: "'08 - '12"
	}
];
