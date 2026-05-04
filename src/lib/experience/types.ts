export interface ClientProject {
	name: string;
	tagline: string;
	description: string;
	outcomes: string[];
	results: string;
}

export interface Service {
	category: string;
	title: string;
	description: string;
	items: string[];
}

export interface Project {
	name: string;
	tagline: string;
	description: string;
	features: string[];
	tech: string[];
	results: string;
	url?: string;
	isNew?: boolean;
}

export interface TechStack {
	category: string;
	technologies: string[];
}

export interface ProcessStep {
	title: string;
	description: string;
	items: string[];
}

export interface ClientService {
	category: string;
	title: string;
	shortTitle: string;
	description: string;
	longDescription: string;
	benefits: string[];
	lucide_icon: string;
}

export interface Education {
	degree: string;
	institution: string;
	years: string;
	honors?: string[];
}
