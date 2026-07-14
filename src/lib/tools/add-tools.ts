import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { QuerySchema } from "./schema.js";
import { projects, services, techStack, specializations, contactInfo, processSteps } from "../experience/content.js";
import {
  contact_info_tool,
  cv_tool,
  dev_experience_tool,
  education_tool,
  full_experience_tool,
  portfolio_tool,
  skills_tool
} from "./tools.js";
import { contactPoints, education, experiences, skillCategories } from "../experience/cv.js";

export const get_cv_tool = [
  "get_cv",
  {
    description: "Get Tommy Doak's CV",
    inputSchema: {
      query: QuerySchema
    }
  },
  () => cv_tool({ contactPoints, skillCategories, experiences, education })
] as const;

export const get_full_experience_tool = [
  "get_full_experience",
  {
    description: "Get Tommy Doak's full work history including non-dev roles (Alaska, Antarctica, teaching, sales)",
    inputSchema: {
      query: QuerySchema
    }
  },
  () => full_experience_tool({ fileName: "linkedin-positions.csv" })
] as const;

export const get_dev_experience_tool = [
  "get_dev_experience",
  {
    description:
      "Get Tommy Doak's dev experience: dev positions, technical capabilities, focus areas, and development approach",
    inputSchema: {
      query: QuerySchema
    }
  },
  async () =>
    await dev_experience_tool({
      fileName: "linkedin-positions.csv",
      services,
      specializations,
      processSteps
    })
] as const;

export const get_skills_tool = [
  "get_skills",
  {
    description: "Get Tommy Doak's tech stack organized by category (Frontend, Backend, CMS, Mobile, AI/ML, etc.)",
    inputSchema: {
      query: QuerySchema
    }
  },
  () => skills_tool({ techStack })
] as const;

export const get_portfolio_tool = [
  "get_portfolio",
  {
    description:
      "Get Tommy Doak's featured projects with extra responsibilities beyond get_dev_experience, tech stack, results, and links",
    inputSchema: {
      query: QuerySchema
    }
  },
  () => portfolio_tool({ projects })
] as const;

export const get_education_tool = [
  "get_education",
  {
    description: "Get Tommy Doak's education: degrees, institutions, and honors",
    inputSchema: {
      query: QuerySchema
    }
  },
  () => education_tool({ fileName: "linkedin-education.csv" })
] as const;

export const get_contact_info_tool = [
  "get_contact_info",
  {
    description: "Get Tommy Doak's contact info: email, phone, LinkedIn, GitHub, and website",
    query: QuerySchema
  },
  () => contact_info_tool({ contactInfo })
] as const;

export const tools = {
  get_cv: get_cv_tool,
  get_full_experience_tool: get_full_experience_tool,
  get_dev_experience: get_dev_experience_tool,
  get_skills: get_skills_tool,
  get_portfolio: get_portfolio_tool,
  get_education: get_education_tool,
  get_contact_info: get_contact_info_tool
} as const;

export const addTools = (server: McpServer) => {
  Object.values(tools).forEach((tool) => {
    server.registerTool(tool[0], tool[1], tool[2]);
  });
};

//  Tools that expose your data:
//  - answer_question(q) → RAG over your resume/cover letters
//   - Include a schedule_interview() tool that links to your Calendly
// - Track which tools get called (analytics on what recruiters care about)
