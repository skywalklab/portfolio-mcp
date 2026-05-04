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

	const content = toolOutput('# Full Work Experience\n\n' + formatCSV(csv));
	return content;
}

export function education_tool({ fileName }: { fileName: string }): ToolOutput {
	const filePath = getExpFilePath(fileName);
	const csv = fs.readFileSync(filePath, 'utf-8');

	const content = toolOutput('# Education\n\n' + formatCSV(csv));
	return content;
}

export async function cv_tool({ fileName }: { fileName: string }): Promise<ToolOutput> {
	const filePath = getExpFilePath(fileName);
	const pdfBuffer = fs.readFileSync(filePath);
	const pdfMarkdown = await pdf2md.default(pdfBuffer);

	const content = toolOutput(pdfMarkdown);
	return content;
}

export function skills_tool({ techStack }: { techStack: TechStack[] }): ToolOutput {
	const content = toolOutput(formatSkills(techStack));
	return content;
}

export function contact_info_tool({ contactInfo }: { contactInfo: ContactInfo }): ToolOutput {
	const content = toolOutput(formatContactInfo(contactInfo));
	return content;
}

export function portfolio_tool({ projects }: { projects: Project[] }): ToolOutput {
	const content = toolOutput(formatProjects(projects));
	return content;
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

	const content = toolOutput(
		formattedExp +
			'\n\n' +
			formattedSpecializations +
			'\n\n' +
			formattedServices +
			'\n\n' +
			formattedProcessSteps
	);
	return content;
}
