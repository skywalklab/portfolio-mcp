import { parse } from "csv-parse/sync";
import type { ToolOutput } from "./types.js";

export async function getCsvFile(fileName: string, url: string): Promise<string> {
  const { env } = await import("cloudflare:workers").catch(() => ({ env: undefined }));
  if (!env) {
    const { readFile } = await import("node:fs/promises");
    return readFile(new URL(`../../../public/${fileName}`, import.meta.url), "utf-8");
  }

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
