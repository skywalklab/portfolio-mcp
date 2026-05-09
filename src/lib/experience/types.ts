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
	years: string;
	features: string[];
	tech: string[];
	results: string;
	url?: string;
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

export interface ContactInfo {
	name: string;
	preferredName: string;
	phone: string;
	email: string;
	linkedin: string;
	website: string;
	hireMeWebsite: string;
	professionalGithub: string;
	personalGithub: string;
}
