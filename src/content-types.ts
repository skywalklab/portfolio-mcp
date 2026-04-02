export interface ClientProject {
	name: string;
	tagline: string;
	description: string;
	outcomes: string[];
	results: string;
	isNew?: boolean;
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
