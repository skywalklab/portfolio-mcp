import { tools } from "./lib/tools/add-tools.js";

async function getOutputText<T>(arr: readonly any[]): Promise<string> {
  return (await arr[2]()).content[0].text;
}

(async () => {
  const text = await getOutputText(tools["get_skills"]);
  console.log(text);
})();
