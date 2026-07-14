import fs from "node:fs";
import {
  formatContactInfo,
  formatCSV,
  formatCVContactPoints,
  formatCVEducation,
  formatCVExperiences,
  formatCVSkillCategories,
  formatProcessSteps,
  formatProjects,
  formatServices,
  formatSkills,
  formatSpecializations
} from "./format.js";
import type { ToolOutput } from "./types.js";
import { getExpFilePath, toolOutput } from "./utils.js";
import type { ContactInfo, ProcessStep, Project, Service, TechStack } from "../experience/types.js";
import type { ContactPoint, EducationItem, ExperienceItem, SkillCategory } from "../experience/cv.js";

export async function full_experience_tool({ fileName }: { fileName: string }): Promise<ToolOutput> {
  const filePath = getExpFilePath(fileName);
  const csv = fs.readFileSync(filePath, "utf-8");

  const content = toolOutput("# Full Work Experience \n\n" + (await formatCSV(csv)));
  return content;
}

export async function education_tool({ fileName }: { fileName: string }): Promise<ToolOutput> {
  const filePath = getExpFilePath(fileName);
  const csv = fs.readFileSync(filePath, "utf-8");

  const content = toolOutput("# Education\n\n" + (await formatCSV(csv)));
  return content;
}

export function cv_tool({
  contactPoints,
  skillCategories,
  experiences,
  education
}: {
  contactPoints: ContactPoint[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}): ToolOutput {
  const formattedContactPoints = formatCVContactPoints(contactPoints);
  const formattedSkillCategories = formatCVSkillCategories(skillCategories);
  const formattedExperiences = formatCVExperiences(experiences);
  const formattedEducation = formatCVEducation(education);

  const content = toolOutput(
    "# Current CV\n\n" +
      formattedContactPoints +
      "\n\n" +
      formattedSkillCategories +
      "\n\n" +
      formattedExperiences +
      "\n\n" +
      formattedEducation
  );
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

export async function dev_experience_tool({
  fileName,
  services,
  specializations,
  processSteps
}: {
  fileName: string;
  services: Service[];
  specializations: string[];
  processSteps: ProcessStep[];
}): Promise<ToolOutput> {
  const filePath = getExpFilePath(fileName);
  const csv = fs.readFileSync(filePath, "utf-8");

  const formattedExp = "# Dev Work Experience\n\n" + (await formatCSV(csv, 4));
  const formattedSpecializations = formatSpecializations(specializations);
  const formattedServices = formatServices(services);
  const formattedProcessSteps = formatProcessSteps(processSteps);

  const content = toolOutput(
    formattedExp + "\n\n" + formattedSpecializations + "\n\n" + formattedServices + "\n\n" + formattedProcessSteps
  );
  return content;
}
