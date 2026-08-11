import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { ROOT } from "./common.ts";

const directory = resolve(ROOT, ".agents/skills");
const folders = readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory());
for (const folder of folders) {
  const skillPath = resolve(directory, folder.name);
  const skill = await Bun.file(resolve(skillPath, "SKILL.md")).text();
  const match = skill.match(/^---\nname: ([a-z0-9-]+)\ndescription: (.+)\n---/);
  if (!match) throw new Error(`${folder.name}/SKILL.md has invalid frontmatter`);
  if (match[1] !== folder.name) throw new Error(`${folder.name}/SKILL.md name does not match its directory`);
  if (match[2].length < 40) throw new Error(`${folder.name}/SKILL.md description is too short`);
  const metadata = await Bun.file(resolve(skillPath, "agents/openai.yaml")).text();
  for (const field of ["display_name", "short_description", "default_prompt"]) {
    if (!new RegExp(`^  ${field}:`, "m").test(metadata)) throw new Error(`${folder.name}/agents/openai.yaml is missing ${field}`);
  }
  if (!metadata.includes(`$${folder.name}`)) throw new Error(`${folder.name}/agents/openai.yaml default_prompt must mention the skill`);
}
console.log(`Skills valid: ${folders.length}.`);
