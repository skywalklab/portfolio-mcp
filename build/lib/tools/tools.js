import fs from 'node:fs';
import pdf2md from '@opendocsg/pdf2md';
import { formatContactInfo, formatCSV, formatProcessSteps, formatProjects, formatServices, formatSkills, formatSpecializations } from './format.js';
import { getExpFilePath, toolOutput } from './utils.js';
export function full_experience_tool({ fileName }) {
    const filePath = getExpFilePath(fileName);
    const csv = fs.readFileSync(filePath, 'utf-8');
    return toolOutput('# Full Work Experience\n\n' + formatCSV(csv));
}
export function education_tool({ fileName }) {
    const filePath = getExpFilePath(fileName);
    const csv = fs.readFileSync(filePath, 'utf-8');
    return toolOutput('# Education\n\n' + formatCSV(csv));
}
export async function cv_tool({ fileName }) {
    const filePath = getExpFilePath(fileName);
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfMarkdown = await pdf2md.default(pdfBuffer);
    return toolOutput(pdfMarkdown);
}
export function skills_tool({ techStack }) {
    return toolOutput(formatSkills(techStack));
}
export function contact_info_tool({ contactInfo }) {
    return toolOutput(formatContactInfo(contactInfo));
}
export function portfolio_tool({ projects }) {
    return toolOutput(formatProjects(projects));
}
export function dev_experience_tool({ fileName, services, specializations, processSteps }) {
    const filePath = getExpFilePath(fileName);
    const csv = fs.readFileSync(filePath, 'utf-8');
    const formattedExp = '# Dev Work Experience\n\n' + formatCSV(csv, 5);
    const formattedSpecializations = formatSpecializations(specializations);
    const formattedServices = formatServices(services);
    const formattedProcessSteps = formatProcessSteps(processSteps);
    return toolOutput(formattedExp +
        '\n\n' +
        formattedSpecializations +
        '\n\n' +
        formattedServices +
        '\n\n' +
        formattedProcessSteps);
}
