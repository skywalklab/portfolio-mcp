# Portfolio MCP Server

A custom Model Context Protocol server that powers AI-driven interactions with my professional portfolio.

## How It Works

This server acts as a structured data layer between my portfolio content and AI systems. It exposes my experience, skills, and projects through MCP tools that AI assistants can query conversationally.

**Three integrations use this server:**

1. **Portfolio Chatbot** - The chat interface on my portfolio site queries this server to answer questions about my background, discuss specific projects, or explain my technical approach.

2. **Custom CV Generation** - When provided with a job description, AI uses these tools to pull relevant experience and skills, generating a tailored CV that highlights the most applicable work.

3. **Custom Cover Letter Generation** - Same approach for cover letters—AI queries my project history and capabilities to write contextually relevant letters that connect my experience to the role.

The result: instead of sending generic documents, I can provide materials specifically crafted for each opportunity, while ensuring accuracy by grounding the AI in my actual experience data.

## Built With

- **TypeScript**
- **MCP SDK** - Model Context Protocol implementation
- **Express** - HTTP server with session-based transport
- **Zod** - Runtime schema validation

## Tools Exposed

| Tool | Purpose |
|------|---------|
| `get_cv` | Full CV overview |
| `get_dev_experience` | Technical roles, capabilities, services offered |
| `get_full_experience` | Complete work history including non-dev roles |
| `get_skills` | Tech stack organized by category |
| `get_portfolio` | Featured projects with extra responsibilities, tech, and outcomes |
| `get_education` | Academic background |
| `get_contact_info` | Contact details |

## Architecture

```
src/
├── index.ts              # Express server with MCP transport
├── lib/
│   ├── tools/            # MCP tool definitions
│   ├── experience/       # Portfolio data (CSV + TypeScript)
│   └── system/           # AI system prompts
```

Session-based connections with bearer token auth, DNS rebinding protection, and automatic cleanup on disconnect.

## System Prompts

The [system prompts](src/lib/system) for each integration are stored here for reference. They're used by the AI systems that call this server's tools—not by the server itself. Each includes guardrails to prevent hallucination, output constraints, and workflow instructions.
