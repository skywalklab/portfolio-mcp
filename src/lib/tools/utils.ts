import path from 'node:path';
import { parse } from 'csv-parse';
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
