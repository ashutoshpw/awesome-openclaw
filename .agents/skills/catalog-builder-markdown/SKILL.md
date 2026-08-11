---
name: catalog-builder-markdown
description: Publish readable deterministic Markdown README files, category pages, indexes, and task-guide navigation from structured catalog data. Use when a catalog has generated documentation, needs stable ordering and links, must preserve generated markers, or requires Markdown lint and link-check integration.
---

# Catalog Builder Markdown

Use this adapter with `$catalog-builder` when Markdown is a generated presentation layer for catalog records or playbook content.

## Workflow

1. Mark generated files clearly and keep their templates in the build script or a dedicated renderer. Never ask contributors to edit generated output.
2. Render source records in a deterministic order: explicit category order, subgroup, display name, then stable ID.
3. Keep each entry concise but useful: linked name, factual summary, ownership or pricing marker, and a link to richer metadata when needed.
4. Generate category pages and an index so the root README stays useful without becoming the only navigation surface.
5. Keep human-authored playbooks separate from generated indexes. Validate frontmatter and require Goal, Prerequisites, Steps, Expected result, Smoke test, Safety and permissions, Failure modes, Rollback and cleanup, and Sources sections.
6. Use repository-relative links for local pages and HTTPS links for external resources. Check anchors, generated drift, Markdown lint, and external links in CI.
7. Make the renderer idempotent: running it twice without source changes must produce no diff.

## Presentation rules

- Prefer one sentence per catalog item in the root README.
- Put risk notes, verification dates, install methods, and repository metadata on category detail pages.
- Keep headings unique within a page and use blank lines around lists.
- Do not render empty metadata labels or duplicate URLs.

## Reference

Read [markdown-publishing-contract.md](references/markdown-publishing-contract.md) when adding output surfaces or changing the renderer.
