/** SYMLINKED FROM portfolio-mcp/src/lib/experience/cv.ts */

export interface ContactPoint {
	type: string;
	text: string;
	lucide_icon: string;
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
	{ type: 'Position', text: 'Full Stack Software Engineer', lucide_icon: 'user' },
	{ type: 'Location', text: 'Nice, France', lucide_icon: 'map-pin' },
	{ type: 'Phone', text: '+33 751237794', lucide_icon: 'phone' },
	{ type: 'Email', text: 'tcdoak@gmail.com', lucide_icon: 'mail' },
	{ type: 'Website', text: 'skywalklab.com', lucide_icon: 'globe' }
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
			'Paraglide',
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
		skills: ['SvelteKit', 'TypeScript', 'Vite', 'AI Integration'],
		years: "'25 - Now",
		descriptions: [
			'Founded a web agency offering custom web apps, AI-powered workflow automations, e-commerce, and multilingual sites.',
			'Architected 61+ component library with custom Vite plugins (SEO, icons, vendor) and multi-stage Docker builds.'
		]
	},
	{
		title: 'Full Stack Developer (FSD)',
		company: 'Inkwell',
		skills: ['SvelteKit', 'TypeScript', 'SASS', 'MCP'],
		years: "'23 - Now",
		descriptions: [
			'Reduced content creation time by 90% by building a TypeScript automation pipeline with local open-source AI that queries YouTube API, retrieves transcripts, generates scripts, creates videos via Pictory API, and auto-posts to 3 platforms.',
			'Enabled AI-powered user support across 2 LLM providers by developing a custom MCP server.',
			'Built a shared component library used across 3 Inkwell products (Inkwell, Press, Publishers), ensuring brand consistency and reducing development time.',
			'Streamlined subscription management by building admin dashboards with Stripe integration for payment processing and analytics.',
			'Improved onboarding and retention by producing demo videos with Premiere Pro, reducing learning curve and increasing stickiness.'
		]
	},
	{
		title: 'FSD / Dir. of Operations',
		company: 'Success Portraits Test',
		skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'GKE', 'Redis'],
		years: "'23 - Now",
		descriptions: [
			'Built full-stack personality test platform analyzing 19 traits with Next.js, TypeScript, and PostgreSQL.',
			'Reduced page load times by 60% by implementing Redis caching and optimizing database queries across the application.',
			'Expanded product offerings by 400% (from 2 to 10 PDF reports) by building automated PDF generation and mapping personality traits to ONET work styles.',
			'Enabled AI-powered career analysis by developing a custom MCP server integrating test results with LLMs for personalized feedback.',
			'Improved recommendation accuracy by implementing Euclidean distance algorithms to match user personality profiles with career paths.'
		]
	},
	{
		title: 'FSD / Dir. of Operations',
		company: 'Success Portraits WordPress',
		skills: ['PHP', 'Redis', 'MySQL', 'Nginx', 'GCE'],
		years: "'23 - Now",
		descriptions: [
			'Enabled group testing for enterprise clients by building a custom WordPress plugin with "master keys" system supporting individual and bulk test key management.',
			'Achieved 99.9% uptime by configuring Google Compute Engine VMs with Nginx, Redis caching, and MySQL optimization.',
			'Led a cross-functional team of 3 (marketing director, blog writer) and coordinated with academic partners and clients to drive product development and strategic decisions.'
		]
	},
	{
		title: 'Full Stack Developer (FSD)',
		company: 'Academic Influence',
		skills: ['Nunjucks', 'SASS', 'PostgreSQL', 'Webpack', 'Express'],
		years: "'19 - '23",
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
