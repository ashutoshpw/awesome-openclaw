# Contributing

Thanks for helping keep this list useful.

This repository is curated, not exhaustive. The standard is “useful to real OpenClaw users today,” not merely “contains the OpenClaw keyword.”

## What belongs here

A submission should be:

- Directly relevant to OpenClaw usage, development, deployment, skills, plugins, integrations, or ecosystem adoption.
- Publicly accessible and inspectable without an invitation or private account.
- Documented well enough for a reader to decide whether it is useful.
- Maintained, recently updated, or supported by clear evidence of active use.
- Described factually, without unverifiable marketing claims.

The list may link to a deeper specialist directory, but it should not copy a specialist directory's full inventory.

## Catalog record format

Add or update one record in [data/catalog.csv](data/catalog.csv). Keep `id` stable and unique, use an HTTPS canonical URL, choose controlled values for `officiality`, `pricing`, `status`, and `verification_status`, and set `last_verified` to the date of the evidence review.

Records that execute code, require credentials, or write to external systems must set the corresponding boolean field to `true` and include a useful `risk_notes` value. Keep descriptions factual and link to public evidence. Do not copy a specialist directory's full inventory into this repository.

After changing catalog data, run:

```bash
bun run catalog:check
```

The README and category pages are generated; edit the CSV rather than generated Markdown. Task guides belong in `content/playbook/*.md` and must follow the frontmatter and section contract validated by the same command.

## Submission checklist

- [ ] The resource has not already been listed.
- [ ] The link is public and works.
- [ ] The proposed category and kind are appropriate.
- [ ] The description explains the practical value in one sentence.
- [ ] The resource's maintenance or usage evidence and `last_verified` date are included.
- [ ] Risk flags and `risk_notes` accurately describe credentials, code execution, and external writes.
- [ ] No credentials, tokens, private data, or unsafe copy-paste instructions are included.
- [ ] Catalog validation and generated drift checks pass.
- [ ] Markdown and link checks pass.

Open an issue in the repository for a new category or substantial addition and select the resource request template after this change is published. Direct pull requests are welcome for corrections, removals, broken links, and playbook improvements.

## Safety expectations

Skills, plugins, MCP servers, and integrations may execute code, read local files, use credentials, send messages, or modify external systems. Contributors must not describe inclusion as a security review. When relevant, explain permissions, trust assumptions, pricing, and known limitations.

Do not submit malware, credential theft, privacy-invasive tooling, deceptive services, or projects whose primary purpose is unsafe or unlawful activity.
