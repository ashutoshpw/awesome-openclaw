# Markdown publishing contract

Generated Markdown must be reproducible, navigable, and clearly separated from human-authored content.

## Generated surfaces

Put a generated marker at the top of README files, indexes, and category pages. Render from canonical data, sort with explicit stable keys, and fail when `--check` detects drift. Keep the root README concise and link to detail pages for rich metadata.

## Human-authored playbooks

Keep task guides in a dedicated directory with YAML frontmatter for identity, audience, difficulty, status, prerequisites, related catalog IDs, credential flags, external-write flags, test environment, and verification date. Require sections for goal, prerequisites, steps, expected result, smoke test, safety, failure modes, rollback, and sources.

## Quality gates

Run Markdown lint, local-link validation, external-link checks, frontmatter validation, and a generated-drift check. Reject unsafe copy-paste instructions, missing source links, duplicate headings, and claims that imply security review or endorsement.
