import fs from 'node:fs';
import pdf2md from '@opendocsg/pdf2md';
import {
	formatContactInfo,
	formatCSV,
	formatProcessSteps,
	formatProjects,
	formatServices,
	formatSkills,
	formatSpecializations
} from './format.js';
import type { ToolOutput } from './types.js';
import { getExpFilePath, toolOutput } from './utils.js';
import type { ContactInfo, ProcessStep, Project, Service, TechStack } from '../experience/types.js';

export function full_experience_tool({ fileName }: { fileName: string }): ToolOutput {
	const filePath = getExpFilePath(fileName);
	const csv = fs.readFileSync(filePath, 'utf-8');

	return toolOutput('# Full Work Experience\n\n' + formatCSV(csv));
}

export function education_tool({ fileName }: { fileName: string }): ToolOutput {
	const filePath = getExpFilePath(fileName);
	const csv = fs.readFileSync(filePath, 'utf-8');

	return toolOutput('# Education\n\n' + formatCSV(csv));
}

export async function cv_tool({ fileName }: { fileName: string }): Promise<ToolOutput> {
	const filePath = getExpFilePath(fileName);
	const pdfBuffer = fs.readFileSync(filePath);
	const pdfMarkdown = await pdf2md.default(pdfBuffer);

	return toolOutput(pdfMarkdown);
}

export function skills_tool({ techStack }: { techStack: TechStack[] }): ToolOutput {
	return toolOutput(formatSkills(techStack));
}

export function contact_info_tool({ contactInfo }: { contactInfo: ContactInfo }): ToolOutput {
	return toolOutput(formatContactInfo(contactInfo));
}

export function portfolio_tool({ projects }: { projects: Project[] }): ToolOutput {
	return toolOutput(formatProjects(projects));
}

export function dev_experience_tool({
	fileName,
	services,
	specializations,
	processSteps
}: {
	fileName: string;
	services: Service[];
	specializations: string[];
	processSteps: ProcessStep[];
}): ToolOutput {
	const filePath = getExpFilePath(fileName);
	const csv = fs.readFileSync(filePath, 'utf-8');

	const formattedExp = '# Dev Work Experience\n\n' + formatCSV(csv, 5);
	const formattedSpecializations = formatSpecializations(specializations);
	const formattedServices = formatServices(services);
	const formattedProcessSteps = formatProcessSteps(processSteps);

	return toolOutput(
		formattedExp +
			'\n\n' +
			formattedSpecializations +
			'\n\n' +
			formattedServices +
			'\n\n' +
			formattedProcessSteps
	);
}
