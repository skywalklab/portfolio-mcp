import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse';
import type { ToolOutput } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getExpFilePath(fileName: string) {
	return path.resolve(__dirname, `../experience/${fileName}`);
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

export const processCsvFile = async (csv: string): Promise<Record<string, string>[]> => {
	const parser = parse(csv, {
		delimiter: ',',
		trim: true,
		columns: true
	});

	const records = [];
	for await (const record of parser) {
		records.push(record);
	}

	return records;
};
