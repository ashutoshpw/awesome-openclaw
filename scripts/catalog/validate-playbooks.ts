import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { bool, readCsv, ROOT } from "./common.ts";

const directory = resolve(ROOT, "content/playbook");
const required = ["id", "title", "track", "summary", "audience", "difficulty", "status", "prerequisites", "related_catalog_ids", "requires_credentials", "external_write", "tested_on", "last_verified"];
const ids = new Set<string>();
const catalogIds = new Set(readCsv("data/catalog.csv").map((record) => record.id));
const allowedDifficulty = new Set(["beginner", "intermediate", "advanced"]);
const allowedStatus = new Set(["draft", "tested", "needs-review", "retired"]);
const requiredSections = ["## Goal", "## Prerequisites", "## Steps", "## Expected result", "## Smoke test", "## Safety and permissions", "## Failure modes", "## Rollback and cleanup", "## Sources"];

async function readGuide(path: string) {
  const text = await Bun.file(path).text();
  if (!text.startsWith("---\n")) throw new Error(`${path} must start with YAML frontmatter`);
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error(`${path} has no closing frontmatter delimiter`);
  const meta: Record<string, string> = {};
  for (const line of text.slice(4, end).split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${path} has malformed frontmatter: ${line}`);
    meta[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return { meta, body: text.slice(end + 6) };
}

const files = readdirSync(directory).filter((name) => name.endsWith(".md") && name !== "index.md").sort();
if (files.length === 0) throw new Error("No playbooks found");

for (const file of files) {
  const path = resolve(directory, file);
  const { meta, body } = await readGuide(path);
  for (const field of required) if (!meta[field]) throw new Error(`${file} is missing ${field}`);
  if (ids.has(meta.id)) throw new Error(`duplicate playbook id: ${meta.id}`);
  ids.add(meta.id);
  if (!allowedDifficulty.has(meta.difficulty)) throw new Error(`${file} has invalid difficulty`);
  if (!allowedStatus.has(meta.status)) throw new Error(`${file} has invalid status`);
  bool(meta.requires_credentials, "requires_credentials", meta.id);
  bool(meta.external_write, "external_write", meta.id);
  for (const catalogId of meta.related_catalog_ids.split(",").map((value) => value.trim()).filter(Boolean)) {
    if (!catalogIds.has(catalogId)) throw new Error(`${file} references unknown catalog id ${catalogId}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.last_verified)) throw new Error(`${file} has invalid last_verified`);
  for (const section of requiredSections) if (!body.includes(section)) throw new Error(`${file} is missing section ${section}`);
}

console.log(`Playbooks valid: ${files.length} guides; ${ids.size} unique ids.`);
