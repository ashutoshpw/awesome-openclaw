---
name: catalog-builder-frictionless
description: Create and validate Open Knowledge/Frictionless Data Packages with datapackage.json, tabular resources, Table Schema, relative resource paths, and reproducible metadata. Use when a catalog needs portable structured data, schema validation, machine-readable resources, or a package manifest alongside human-facing indexes.
---

# Catalog Builder Frictionless

Use this adapter with `$catalog-builder` whenever a catalog should follow the Open Knowledge data-package pattern.

## Workflow

1. Put `datapackage.json` at the package root. Declare metadata and every bundled resource explicitly.
2. Keep resource paths relative to the package root. Do not use absolute paths, parent traversal, undeclared files, or machine-specific locations.
3. Use CSV or another tabular format for repeated records and attach a Table Schema for field names, types, required fields, constraints, and controlled values.
4. Keep one canonical resource for each record type. Generated README pages and indexes are presentation layers, not additional sources of truth.
5. Declare package name, title, description, homepage, version, license, sources, and resource mediatypes. Use semantic versioning when changes affect consumers.
6. Validate the manifest, resource existence, resource paths, CSV shape, unique IDs, URLs, dates, booleans, enum values, and cross-resource references.
7. Run a small fixture suite containing a valid package plus duplicate IDs, invalid enum/date/boolean values, missing required fields, absolute resource paths, and undeclared resources.

## Resource decisions

- Use a single tabular resource when records are flat and consumers need spreadsheet compatibility.
- Use multiple resources when a catalog has distinct record types such as resources and playbooks; give each resource its own schema.
- Use JSON resources for nested records only when flattening would lose meaningful structure. Keep the identity key stable across formats.
- Add provenance and risk fields to the schema rather than burying those facts in generated prose.

## Reference

Read [datapackage-contract.md](references/datapackage-contract.md) when defining or reviewing a package manifest.
