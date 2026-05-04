import path from 'node:path';
import type { ToolOutput } from './types.js';

export function getExpFilePath(fileName: string) {
	return path.resolve(import.meta.dirname, `../experience/${fileName}`);
}

export function toolOutput(text: string): ToolOutput {
	return {
		content: [
			{
				type: 'text',
				text
			}
		]
	};
}
