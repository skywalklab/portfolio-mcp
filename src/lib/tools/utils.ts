import { parse } from "csv-parse/sync";
import type { ToolOutput } from "./types.js";
import { env } from "cloudflare:workers";

export async function getCsvFile(fileName: string, url: string): Promise<string> {
  const res = await env.ASSETS.fetch(new URL(`/${fileName}`, url));
  const csv = await res.text();

  return csv;
}

export function toolOutput(text: string): ToolOutput {
  return {
    content: [
      {
        type: "text",
        text
      }
    ]
  };
}

export const processCsvFile = async (csv: string): Promise<Record<string, string>[]> => {
  try {
    return parse(csv, { delimiter: ",", trim: true, columns: true });
  } catch (err) {
    console.error("CSV parse failed:", (err as any).message);
    throw err;
  }
};
