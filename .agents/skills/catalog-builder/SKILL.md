---
name: catalog-builder
description: Design, migrate, and maintain verified catalogs of tools, products, datasets, providers, integrations, workflows, skills, or examples. Use when creating a catalog from an existing README or directory, defining a record schema, deduplicating entries, adding provenance and verification metadata, or establishing generated indexes and maintenance checks.
---

# Catalog Builder

Use this as the base workflow for any catalog task. Add the format-specific companion skill when the catalog uses a Frictionless Data Package or publishes Markdown pages.

## Workflow

1. Inspect repository instructions, current files, existing entries, and validation commands before changing structure.
2. Choose one canonical record source. Prefer structured data when the catalog has repeated fields or multiple output surfaces; never maintain the same facts independently in a README and a data file.
3. Define a stable identity key and a small controlled vocabulary for categories, status, verification, pricing, and ownership. Keep descriptions factual and task-oriented.
4. Preserve every existing entry during migration. Deduplicate only when identity is clear; otherwise assign distinct IDs and record the relationship in notes.
5. Add provenance fields: canonical URL, repository/docs URLs where useful, maintainer, license, install method, evidence notes, and `last_verified`.
6. Add safety metadata for anything that executes code, needs credentials, reads sensitive data, or writes to external systems. Require a human-readable risk note when any risk flag is true.
7. Generate every derived index or README deterministically from the canonical records. Sort by an explicit category order, then stable subgroup/name/ID keys.
8. Validate IDs, uniqueness, URLs, controlled values, dates, booleans, required risk notes, generated drift, and link health. Include at least one negative fixture for each important invariant.
9. Update contribution guidance and CI so future additions use the same source of truth and checks.

## Record contract

Use [catalog-record-contract.md](references/catalog-record-contract.md) as a compact checklist for field design and acceptance criteria. Do not add fields merely because they are possible; each field should support discovery, comparison, safety, provenance, or maintenance.

## Working rules

Keep uncertain facts explicit. Use `needs-review` or `unknown` instead of guessing. Keep third-party claims attributed to their source. Do not present inclusion as security review, endorsement, or proof of maintenance.

When adding a new catalog type, reuse this workflow and create only the smallest format adapter needed. Keep canonical data and generated surfaces separate so a future adapter can publish JSON, a website, a spreadsheet, or Markdown without copying records.
