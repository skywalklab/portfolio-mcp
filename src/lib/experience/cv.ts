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
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  description?: string;
  descriptionWithTitle?: string;
}

export const contactPoints: ContactPoint[] = [
  { type: "Position", text: "Full-Stack Development • AI Automation • Web Analytics", lucide_icon: "user" },
  { type: "Location", text: "Nice, France", lucide_icon: "map-pin" },
  { type: "Email", text: "tcdoak@gmail.com", lucide_icon: "mail" },
  {
    type: "Website",
    // text: 'skywalklab.com/hire-tommy-doak',
    text: "skywalklab.com",
    img: "https://skywalklab.com/brand/logo-96.png",
    // href: 'https://skywalklab.com/hire-tommy-doak',
    href: "https://skywalklab.com"
  },
  {
    type: "LinkedIn",
    text: "/in/tommydoak",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/%3E%3Crect width='4' height='12' x='2' y='9'/%3E%3Ccircle cx='4' cy='4' r='2'/%3E%3C/svg%3E",
    href: "https://www.linkedin.com/in/tommydoak/"
  }
  // {
  //   type: "Github",
  //   text: "/skywalklab",
  //   img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'/%3E%3Cpath d='M9 18c-4.51 2-5-2-7-2'/%3E%3C/svg%3E",
  //   href: "https://github.com/skywalklab/"
  // }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    skills: [
      "TypeScript",
      "SvelteKit",
      "React",
      "Next.js",
      "SASS",
      "Vite",
      "Nunjucks",
      "Webpack",
      "GSAP",
      "Three.js",
      "i18n",
      "Photoshop",
      "Premiere Pro"
    ]
  },
  {
    title: "Back-End",
    skills: [
      "Node",
      "Express",
      "PHP",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "REST APIs",
      "MCP Servers",
      "Ollama",
      "n8n",
      "Puppeteer",
      "Zod",
      "Sentry"
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "Docker", "Nginx", "GCP", "GCE", "GKE", "Cloudflare Pages"]
  },
  {
    title: "Marketing & Analytics",
    skills: [
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

export const experiences: ExperienceItem[] = [
  {
    title: "Founder",
    company: "SkywalkLab",
    url: "skywalklab.com",
    skills: ["SvelteKit", "TypeScript", "Vite", "AI Integration", "SQLite", "Three.js", "GSAP", "i18n"],
    years: "'25 - Now",
    responsibilities: [
      "Founded a web agency offering custom web apps, AI-powered workflow automations, e-commerce, and multilingual sites.",
      "Architected 90+ component library with custom Vite plugins (SEO, icons, vendor) and multi-stage Docker builds.",
      "Built lead generation pipeline sourcing from business directories, auditing with Lighthouse + local and cloud AI, and auto-generating personalized demo sites using extracted company data."
    ]
  },
  {
    title: "Full-Stack Developer, Marketing Technology",
    company: "Inkwell",
    skills: ["SvelteKit", "TypeScript", "PostgreSQL", "Vite", "SASS", "MCP"],
    years: "'24 - '26",
    responsibilities: [
      "Built TypeScript automation pipeline with local open-source AI that queries YouTube API, retrieves transcripts, generates scripts, creates videos via Pictory API, and auto-posts to 3 social media platforms.",
      "Wrote platform tutorials and built MCP server giving AI assistants access to documentation for user support.",
      "Automated B2B outreach pipeline analyzing 800k publisher workflows with AI, generating personalized emails, and exporting to spreadsheets for mass email and LinkedIn campaigns.",
      "Built a shared component library used across 3 Inkwell products (Inkwell, Press, Publishers), ensuring brand consistency and reducing development time."
    ]
  },
  {
    title: "Technical Lead",
    company: "Success Portraits",
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "Docker", "GKE", "Redis", "PHP", "MySQL", "Nginx", "GCE"],
    years: "'23 - '26",
    responsibilities: [
      "Built full-stack personality test platform analyzing 19 traits with Next.js, TypeScript, and PostgreSQL.",
      "Improved page load times with Redis caching and PostgreSQL for session and user data.",
      "Built 10 PDF report types covering personality insights, coaching, and career matching.",
      "Enabled AI-powered career analysis by developing a custom MCP server integrating test results with LLMs.",
      "Built enterprise licensing system in PHP with master key generation, usage tracking, expiration management, and admin interface.",
      "Managed team of 3 and served as primary liaison with academic partners."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Academic Influence",
    skills: ["Nunjucks", "SASS", "PostgreSQL", "Webpack", "Express"],
    years: "'21 - '26",
    responsibilities: [
      "Built interactive college comparison platform with NCES IPEDS data across 10,000+ institutions.",
      "Built degree finder with parallel PostgreSQL queries across federal education and labor datasets for ROI calculations.",
      "Created SVG template system generating unique hero images for thousands of pages."
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Advanced Masters in Digital Strategy Management",
    institution: "Grenoble Ecole de Management",
    years: "'20 - '21",
    description: "2021 Best Dissertation Winner",
    descriptionWithTitle:
      '2021 Best Dissertation Winner — "Website Strategy and Coordination of Multinational Companies"'
  },
  {
    degree: "B.S. in Marketing",
    institution: "University of Georgia",
    years: "'08 - '12"
  }
];
