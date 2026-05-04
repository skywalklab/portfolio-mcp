import type {
	ContactInfo,
	ProcessStep,
	Project,
	Service,
	TechStack
} from '../../experience/types.js';

export function formatCSV(csv: string, maxRows?: number): string {
	const rows = csv.split('\n');
	const headers = rows[0]!.split(',');
	const bodyRows = rows.slice(1, maxRows ?? rows.length);

	return bodyRows
		.map((row) =>
			row
				.split(',')
				.map((cell, i) => `${headers[1]}: ${cell}`)
				.join('\n')
		)
		.join('\n\n');
}

export function formatSkills(techStack: TechStack[]): string {
	return (
		'# Skills\n\n' +
		techStack
			.map(
				({ category, technologies }) =>
					`**${category}**:\n${technologies.map((tech) => `- ${tech}`).join('\n')}`
			)
			.join('\n\n')
	);
}

export function formatContactInfo(contactInfo: ContactInfo): string {
	return (
		'# Contact\n\n' +
		Object.entries(contactInfo)
			.map(([key, value]) => `**${key}**: ${value}}`)
			.join('\n')
	);
}

export function formatProjects(projects: Project[]): string {
	return (
		'# Projects\n\n' +
		projects
			.map(
				(project) =>
					`## ${project.name}
Url: ${project.url ?? 'None'}
Tagline: ${project.tagline}
Description: ${project.description}
Features: ${project.features.map((feature) => `- ${feature}`)}
Tech: ${project.tech.map((tech) => `- ${tech}`)}
Results: ${project.results}`
			)
			.join('\n\n')
	);
}

export function formatSpecializations(specializations: string[]): string {
	return (
		'## Focus Areas\n\n' + specializations.map((specialization) => `- ${specialization}`).join('\n')
	);
}

export function formatServices(items: Service[]): string {
	return (
		'## Technical Capabilities\n\n' +
		items
			.map(
				(item) =>
					`**${item.title}**\n${item.description}\n${item.items.map((_item) => `- ${_item}`)}`
			)
			.join('\n\n')
	);
}

export function formatProcessSteps(items: ProcessStep[]): string {
	return (
		'## Development Approach' +
		items
			.map(
				(item) =>
					`**${item.title}**\n${item.description}\n${item.items.map((_item) => `- ${_item}`)}`
			)
			.join('\n\n')
	);
}
