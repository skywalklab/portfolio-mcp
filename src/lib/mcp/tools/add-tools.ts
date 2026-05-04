import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import path from 'node:path';
import fs from 'node:fs';
import pdf2md from '@opendocsg/pdf2md';
import { QuerySchema } from '../schema.js';
import {
	clientProjects,
	projects,
	services,
	clientServices,
	techStack,
	clientSpecializations,
	specializations,
	education
} from '../../experience/content.js';

const get_cv_tool = [
	'get_cv',
	{
		description: "Get Tommy Doak's CV",
		inputSchema: {
			query: QuerySchema
		}
	},
	async (args: any) => {
		const filePath = path.resolve(import.meta.dirname, '../../experience/cv.pdf');
		const pdfBuffer = fs.readFileSync(filePath);
		const pdfMarkdown = await pdf2md.default(pdfBuffer);

		return {
			content: [
				{
					type: 'text' as const,
					text: pdfMarkdown
				}
			]
		};
	}
] as const;

const get_full_experience_tool = [
	'get_full_experience',
	{
		description: "Get Tommy Doak's full experience (e.g., work history, projects, etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	async (args: any) => {
		const filePath = path.resolve(import.meta.dirname, '../../linkedin-positions.csv');
		const csv = fs.readFileSync(filePath, 'utf-8');
		const table = csv.split('\n');
		const headers = table[0]!.split(',');

		const normalizeCell = (header: string, cell: string): string =>
			header === 'Location' && cell === '' ? 'Remote' : cell;

		return {
			content: [
				{
					type: 'text' as const,
					text:
						'# Full Work Experience\n\n' +
						table
							.slice(1)
							.map((row) =>
								row
									.split(',')
									.map((cell, i) => `${headers[1]}: ${normalizeCell(headers[i]!, cell)}`)
									.join('\n')
							)
							.join('\n\n')
				}
			]
		};
	}
] as const;

const get_dev_experience_tool = [
	'get_dev_experience',
	{
		description: "Get Tommy Doak's dev experience (e.g., work history, projects, etc.)",
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
		description:
			"Get Tommy Doak's tech stack organized by category (Frontend, Backend, CMS, Mobile, AI/ML, etc.)",
		inputSchema: {
			query: QuerySchema
		}
	},
	(args: any) => {
		return {
			content: [
				{
					type: 'text' as const,
					text:
						'# Skills\n\n' +
						techStack
							.map(
								(stack) =>
									`**${stack.category}**:\n${stack.technologies.map((tech) => `- ${tech}`).join('\n')}`
							)
							.join('\n\n')
				}
			]
		};
	}
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
