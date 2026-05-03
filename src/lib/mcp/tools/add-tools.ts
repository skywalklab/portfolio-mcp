import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { QuerySchema } from '../schema.js';

const get_experience_tool = [
	'get_experience',
	{
		description: "Get Tommy Doak's experience (e.g., work history, projects, etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => ({
		content: [
			{
				type: 'text' as const,
				text: ''
			}
		]
	}) // tool
] as const;

const get_skills_tool = [
	'get_skills',
	{
		description: "Get Tommy Doak's skills (e.g., tech stack, proficiency levels, etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => ({
		content: [
			{
				type: 'text' as const,
				text: ''
			}
		]
	}) // tool
] as const;

const get_portfolio_tool = [
	'get_portfolio',
	{
		description: "Get Tommy Doak's portfolio (e.g., project descriptions, links, screenshots etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => ({
		content: [
			{
				type: 'text' as const,
				text: ''
			}
		]
	}) // tool
] as const;

const get_education_tool = [
	'get_education',
	{
		description: "Get Tommy Doak's education",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => ({
		content: [
			{
				type: 'text' as const,
				text: ''
			}
		]
	}) // tool
] as const;

const get_contact_info_tool = [
	'get_contact_info',
	{
		description: "Get Tommy Doak's contact info",
		query: QuerySchema
	},
	(args: any) => ({
		content: [
			{
				type: 'text' as const,
				text: ''
			}
		]
	}) // tool
] as const;

export const addTools = (server: McpServer) => {
	server.registerTool(...get_experience_tool);
	server.registerTool(...get_skills_tool);
	server.registerTool(...get_portfolio_tool);
	server.registerTool(...get_education_tool);
	server.registerTool(...get_contact_info_tool);
};

//  Tools that expose your data:
//  - answer_question(q) → RAG over your resume/cover letters
//   - Include a schedule_interview() tool that links to your Calendly
// - Track which tools get called (analytics on what recruiters care about)
