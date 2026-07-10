import type {
	ContactPoint,
	EducationItem,
	ExperienceItem,
	SkillCategory
} from '../experience/cv.js';
import type { ContactInfo, ProcessStep, Project, Service, TechStack } from '../experience/types.js';
import { processCsvFile } from './utils.js';

const markdownList = (items: string[]): string => items.map((item) => `- ${item}`).join('\n');

export async function formatCSV(csv: string, maxRows?: number): Promise<string> {
	const rows = await processCsvFile(csv);

	return rows
		.slice(0, maxRows ?? rows.length)
		.map((row) =>
			Object.entries(row)
				.map(([key, value]) => `**${key}**: ${value}`)
				.join('\n')
		)
		.join('\n\n');
}

export function formatSkills(items: TechStack[]): string {
	return (
		'# Skills\n\n' +
		items
			.map(({ category, technologies }) => `**${category}**:\n${markdownList(technologies)}`)
			.join('\n\n')
	);
}

export function formatContactInfo(contactInfo: ContactInfo): string {
	return (
		'# Contact\n\n' +
		Object.entries(contactInfo)
			.map(([key, value]) => `**${key}**: ${value}`)
			.join('\n')
	);
}

export function formatProjects(items: Project[]): string {
	return (
		'# Projects\n\n' +
		items
			.map(
				(item) =>
					`## ${item.name}
Url: ${item.url ?? 'None'}
Tagline: ${item.tagline}
Company Description: ${item.description}
Responsibilities:\n${markdownList(item.responsibilities)}
Tech:\n${markdownList(item.tech)}
Results: ${item.results}`
			)
			.join('\n\n')
	);
}

export function formatSpecializations(items: string[]): string {
	return '## Focus Areas\n\n' + markdownList(items);
}

export function formatServices(items: Service[]): string {
	return (
		'## Technical Capabilities\n\n' +
		items
			.map((item) => `**${item.title}**\n${item.description}\n${markdownList(item.items)}`)
			.join('\n\n')
	);
}

export function formatProcessSteps(items: ProcessStep[]): string {
	return (
		'## Development Approach' +
		items
			.map((item) => `**${item.title}**\n${item.description}\n${markdownList(item.items)}`)
			.join('\n\n')
	);
}

export function formatCVContactPoints(items: ContactPoint[]): string {
	return '## Contact\n\n' + items.map((item) => `**${item.type}**: ${item.text}`).join('\n');
}

export function formatCVSkillCategories(items: SkillCategory[]): string {
	return (
		'## Skills\n\n' +
		items.map((item) => `**${item.title}**\n${markdownList(item.skills)}`).join('\n\n')
	);
}

export function formatCVExperiences(items: ExperienceItem[]): string {
	return (
		'## Experiences\n\n' +
		items
			.map(
				(item) =>
					`## ${item.title}
**${item.company}**
Url: ${item.url ?? 'None'}
Years: ${item.years}
Skills:\n${markdownList(item.skills)}
Responsibilities:\n${markdownList(item.responsibilities)}`
			)
			.join('\n\n')
	);
}

export function formatCVEducation(items: EducationItem[]): string {
	return (
		'## Education\n\n' +
		items
			.map(
				(item) =>
					`## ${item.degree}\n**${item.institution}**\n${item.years}\n${item.description ?? ''}`
			)
			.join('\n\n')
	);
}
