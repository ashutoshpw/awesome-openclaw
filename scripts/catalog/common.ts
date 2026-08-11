import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const ROOT = resolve(import.meta.dir, "../..");

export type CsvRecord = Record<string, string>;

export function readCsv(relativePath: string): CsvRecord[] {
  const path = resolve(ROOT, relativePath);
  const rows = parseCsv(readFileSync(path, "utf8"));
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).map((values, index) => {
    if (values.length !== headers.length) {
      throw new Error(`${relativePath}: row ${index + 2} has ${values.length} fields; expected ${headers.length}`);
    }
    return Object.fromEntries(headers.map((header, fieldIndex) => [header, values[fieldIndex]]));
  });
}

export function parseCsv(input: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"' && field.length === 0) {
      quoted = true;
    } else if (char === ",") {
      row.push(field.trim());
      field = "";
    } else if (char === "\n") {
      row.push(field.trim());
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some((value) => value !== "")) rows.push(row);
  }
  if (quoted) throw new Error("CSV contains an unterminated quoted field");
  return rows;
}

export function toCsv(records: CsvRecord[], headers: string[]): string {
  const escape = (value: string) => {
    const normalized = value ?? "";
    return /[",\n\r]/.test(normalized) ? `"${normalized.replaceAll('"', '""')}"` : normalized;
  };
  return [headers, ...records.map((record) => headers.map((header) => record[header] ?? ""))]
    .map((row) => row.map(escape).join(","))
    .join("\n") + "\n";
}

export function readText(relativePath: string): string {
  return readFileSync(resolve(ROOT, relativePath), "utf8");
}

export function fileExists(relativePath: string): boolean {
  return existsSync(resolve(ROOT, relativePath));
}

export function writeOrCheck(relativePath: string, content: string, check: boolean): void {
  const path = resolve(ROOT, relativePath);
  if (check) {
    const current = fileExists(relativePath) ? readText(relativePath) : null;
    if (current !== content) throw new Error(`Generated file is out of date: ${relativePath}`);
    return;
  }
  Bun.write(path, content);
}

export function slug(value: string): string {
  return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function bool(value: string, field: string, id: string): boolean {
  if (value === "true") return true;
  if (value === "false" || value === "") return false;
  throw new Error(`${id}.${field} must be true or false`);
}

export function titleCase(value: string): string {
  return value.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
