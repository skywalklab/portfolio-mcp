export interface Service {
  category: string;
  title: string;
  shortTitle?: string;
  description: string;
  longDescription?: string;
  lucide_icon?: string;
  items: string[];
  benefits?: string[];
}

export interface Project {
  name: string;
  role: string;
  tagline: string;
  description: string;
  years: string;
  responsibilities: string[];
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
