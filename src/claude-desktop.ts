import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { addTools } from './lib/tools/add-tools.js';

const server = new McpServer({
	name: 'portfolio_mcp_server',
	version: '1.0.0'
});
addTools(server);

async function main() {
	const transport = new StdioServerTransport();
	await server.connect(transport);
	console.error('Portfolio MCP Server running on stdio');
}

main().catch((error) => {
	console.error('Fatal error in main():', error);
	process.exit(1);
});
