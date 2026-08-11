import { resolve } from "node:path";
import { bool, parseCsv, readCsv, readText, ROOT } from "./common.ts";

const required = [
  "id", "name", "kind", "category", "description", "url", "officiality", "pricing",
  "status", "verification_status", "last_verified",
];
const allowed = new Set(["official", "community", "third-party"]);
const pricing = new Set(["free", "paid", "freemium", "unknown"]);
const statuses = new Set(["active", "watch", "stale", "archived", "removed"]);
const verification = new Set(["verified", "needs-review", "broken", "unverified"]);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const idPattern = /^[a-z0-9][a-z0-9-]*$/;

function fail(message: string): never {
  throw new Error(message);
}

const records = readCsv("data/catalog.csv");
const ids = new Set<string>();
const urls = new Set<string>();

for (const record of records) {
  for (const field of required) if (!record[field]) fail(`${record.id || "record"} is missing ${field}`);
  if (!idPattern.test(record.id)) fail(`${record.id} has an invalid id`);
  if (ids.has(record.id)) fail(`duplicate id: ${record.id}`);
  ids.add(record.id);
  if (!/^https:\/\//.test(record.url)) fail(`${record.id}.url must use https`);
  if (urls.has(record.url)) fail(`duplicate url: ${record.url}`);
  urls.add(record.url);
  if (!allowed.has(record.officiality)) fail(`${record.id}.officiality is invalid`);
  if (!pricing.has(record.pricing)) fail(`${record.id}.pricing is invalid`);
  if (!statuses.has(record.status)) fail(`${record.id}.status is invalid`);
  if (!verification.has(record.verification_status)) fail(`${record.id}.verification_status is invalid`);
  if (!datePattern.test(record.last_verified)) fail(`${record.id}.last_verified is invalid`);
  for (const field of ["requires_credentials", "executes_code", "external_write"]) bool(record[field], field, record.id);
  if ((record.requires_credentials === "true" || record.executes_code === "true" || record.external_write === "true") && !record.risk_notes) {
    fail(`${record.id} needs risk_notes because it has an operational risk flag`);
  }
  for (const field of ["repository_url", "docs_url"]) {
    if (record[field] && !/^https:\/\//.test(record[field])) fail(`${record.id}.${field} must use https`);
  }
}

const packageJson = JSON.parse(readText("datapackage.json"));
if (packageJson.profile !== "data-package") fail("datapackage.json must declare the data-package profile");
if (!Array.isArray(packageJson.resources) || packageJson.resources.length !== 2) fail("datapackage.json must declare catalog and playbook-index resources");
for (const resource of packageJson.resources) {
  if (resource.path.startsWith("/")) fail(`resource path must be relative: ${resource.path}`);
  if (!resolve(ROOT, resource.path).startsWith(ROOT)) fail(`resource escapes package root: ${resource.path}`);
  const resourcePath = resolve(ROOT, resource.path);
  const schemaPath = resolve(ROOT, resource.schema);
  if (!Bun.file(resourcePath).size) fail(`resource is missing or empty: ${resource.path}`);
  if (!Bun.file(schemaPath).size) fail(`schema is missing or empty: ${resource.schema}`);
  const headers = parseCsv(readText(resource.path))[0];
  const schema = JSON.parse(readText(resource.schema));
  const schemaHeaders = schema.fields?.map((field: { name: string }) => field.name) ?? [];
  if (headers.join("\u0000") !== schemaHeaders.join("\u0000")) fail(`${resource.path} header does not match ${resource.schema}`);
}

console.log(`Catalog valid: ${records.length} records; ${ids.size} unique ids.`);
