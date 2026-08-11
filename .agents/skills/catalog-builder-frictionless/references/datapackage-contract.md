# Frictionless Data Package contract

Use a top-level `datapackage.json` to describe the package and its resources. Keep every resource path relative to the package root and declare its format, media type, and schema.

## Minimum manifest

Include `profile`, `name`, `title`, `description`, `version`, `licenses`, and `resources`. Add `homepage` and `sources` when the package is curated from external material.

## Tabular resources

Use CSV for flat repeated records and attach a Table Schema with stable field names, types, required fields, patterns, and controlled values. Keep the CSV header aligned with the schema. Use a separate resource and schema when the record shape differs, such as a playbook index.

## Validation boundary

Validate the manifest as JSON, confirm all declared resources exist and remain inside the package, parse each CSV, enforce schema constraints and unique IDs, and verify cross-resource paths. Treat generated Markdown as an output to check for drift rather than a package resource unless it is intentionally part of the published data product.
