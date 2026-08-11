# Catalog record contract

Use this contract as a starting point and remove fields that do not serve the catalog.

## Required concepts

- Stable `id` that survives renames and URL changes.
- Human-readable `name`, `kind`, `category`, and optional `subcategory`.
- Factual `description` focused on user value.
- Canonical HTTPS `url` plus repository and documentation URLs when they differ.
- Ownership or relationship: `officiality` (`official`, `community`, `third-party`).
- Commercial status: `pricing` (`free`, `paid`, `freemium`, `unknown`).
- Maintenance status: `status` (`active`, `watch`, `stale`, `archived`, `removed`).
- Evidence state: `verification_status` and ISO `last_verified`.

## Safety and provenance

Add booleans for `requires_credentials`, `executes_code`, and `external_write`. If any is true, require `risk_notes`. Add `maintainer`, `license`, `install_method`, `evidence_url`, or `notes` only when contributors can maintain them.

## Acceptance checks

Reject duplicate IDs and ambiguous duplicate URLs, insecure links, invalid controlled values, undated records, guessed claims, missing risk notes, and entries that cannot be publicly inspected. Preserve uncertain candidates with `needs-review` rather than silently deleting them.
