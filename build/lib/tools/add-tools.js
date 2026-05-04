import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { QuerySchema } from './schema.js';
import { projects, services, techStack, specializations, contactInfo, processSteps } from '../experience/content.js';
import { contact_info_tool, cv_tool, dev_experience_tool, education_tool, full_experience_tool, portfolio_tool, skills_tool } from './tools.js';
const get_cv_tool = [
    'get_cv',
    {
        description: "Get Tommy Doak's CV",
        inputSchema: {
            query: QuerySchema
        }
    },
    async (args) => await cv_tool({ fileName: 'cv.pdf' })
];
const get_full_experience_tool = [
    'get_full_experience',
    {
        description: "Get Tommy Doak's full experience (e.g., work history, projects, etc.)",
        inputSchema: {
            query: QuerySchema
        }
    },
    (args) => full_experience_tool({ fileName: 'linkedin-positions.csv' })
];
const get_dev_experience_tool = [
    'get_dev_experience',
    {
        description: "Get Tommy Doak's dev experience: technical services/capabilities, specializations, and development process/workflow",
        inputSchema: {
            query: QuerySchema
        }
    },
    (args) => dev_experience_tool({
        fileName: 'linkedin-positions.csv',
        services,
        specializations,
        processSteps
    })
];
const get_skills_tool = [
    'get_skills',
    {
        description: "Get Tommy Doak's tech stack organized by category (Frontend, Backend, CMS, Mobile, AI/ML, etc.)",
        inputSchema: {
            query: QuerySchema
        }
    },
    (args) => skills_tool({ techStack })
];
const get_portfolio_tool = [
    'get_portfolio',
    {
        description: "Get Tommy Doak's portfolio (e.g., project descriptions, links, screenshots etc.)",
        inputSchema: {
            query: QuerySchema
        }
    },
    (args) => portfolio_tool({ projects })
];
const get_education_tool = [
    'get_education',
    {
        description: "Get Tommy Doak's education",
        inputSchema: {
            query: QuerySchema
        }
    },
    (args) => education_tool({ fileName: 'linkedin-education.csv' })
];
const get_contact_info_tool = [
    'get_contact_info',
    {
        description: "Get Tommy Doak's contact info",
        query: QuerySchema
    },
    (args) => contact_info_tool({ contactInfo })
];
export const addTools = (server) => {
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
