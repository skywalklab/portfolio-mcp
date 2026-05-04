import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { QuerySchema } from './schema.js';
import {
	projects,
	services,
	techStack,
	specializations,
	contactInfo,
	processSteps
} from '../experience/content.js';
import {
	contact_info_tool,
	cv_tool,
	dev_experience_tool,
	education_tool,
	full_experience_tool,
	portfolio_tool,
	skills_tool
} from './tools.js';

const get_cv_tool = [
	'get_cv',
	{
		description: "Get Tommy Doak's CV",
		inputSchema: {
			query: QuerySchema
		}
	},
	async (args: any) => await cv_tool({ fileName: 'cv.pdf' })
] as const;

const get_full_experience_tool = [
	'get_full_experience',
	{
		description:
			"Get Tommy Doak's full work history including non-dev roles (Alaska, Antarctica, teaching, sales)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => full_experience_tool({ fileName: 'linkedin-positions.csv' })
] as const;

const get_dev_experience_tool = [
	'get_dev_experience',
	{
		description:
			"Get Tommy Doak's dev experience: dev positions, technical capabilities, focus areas, and development approach",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) =>
		dev_experience_tool({
			fileName: 'linkedin-positions.csv',
			services,
			specializations,
			processSteps
		})
] as const;

const get_skills_tool = [
	'get_skills',
	{
		description:
			"Get Tommy Doak's tech stack organized by category (Frontend, Backend, CMS, Mobile, AI/ML, etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => skills_tool({ techStack })
] as const;

const get_portfolio_tool = [
	'get_portfolio',
	{
		description:
			"Get Tommy Doak's featured projects: descriptions, tech stack, results, and links",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => portfolio_tool({ projects })
] as const;

const get_education_tool = [
	'get_education',
	{
		description: "Get Tommy Doak's education: degrees, institutions, and honors",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => education_tool({ fileName: 'linkedin-education.csv' })
] as const;

const get_contact_info_tool = [
	'get_contact_info',
	{
		description:
			"Get Tommy Doak's contact info: email, phone, LinkedIn, GitHub, and website",
		query: QuerySchema
	},
	(args: any) => contact_info_tool({ contactInfo })
] as const;

export const addTools = (server: McpServer) => {
	server.registerTool(...get_cv_tool);
	server.registerTool(...get_full_experience_tool);
	server.registerTool(...get_dev_experience_tool);
	server.registerTool(...get_skills_tool);
	server.registerTool(...get_portfolio_tool);
	server.registerTool(...get_education_tool);
	server.registerTool(...get_contact_info_tool);
};

//  Tools that expose your data:
//  - answer_question(q) → RAG over your resume/cover letters
//   - Include a schedule_interview() tool that links to your Calendly
// - Track which tools get called (analytics on what recruiters care about)
