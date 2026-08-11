---
id: audit-a-skill-before-install
title: Audit a skill before installing it
track: Skills and automation
summary: Inspect a skill's provenance permissions and behavior before allowing it into an OpenClaw workspace.
audience: Operators evaluating community skills
difficulty: intermediate
status: tested
prerequisites: A disposable workspace and access to the skill source or registry metadata.
related_catalog_ids: clawhub,clawhub-skills,tools-and-skills,security-guide
requires_credentials: false
external_write: false
tested_on: Bun 1.x; repository validation on 2026-08-12
last_verified: 2026-08-12
---

## Goal

Decide whether a skill is appropriate for a controlled installation without treating registry presence as a security review.

## Prerequisites

- Identify the exact skill name and version or commit.
- Use the [ClawHub skills](https://clawhub.ai/skills) page or source repository as the evidence base.
- Have a disposable OpenClaw workspace for any execution test.

## Steps

1. Record the skill URL, publisher, version, license, update history, and declared permissions.
2. Read every instruction and inspect scripts, package manifests, shell commands, network destinations, file paths, and credential references.
3. Search for broad filesystem reads, secret collection, encoded payloads, downloads, dynamic code execution, and outbound messages.
4. Compare the requested access with the task. Remove optional tools and credentials from the test workspace.
5. Install only in the disposable workspace and run a benign fixture input.
6. Capture the observed files, processes, network calls, and outputs. Mark the skill accepted, rejected, or requiring maintainer clarification.

## Expected result

The operator has an evidence-backed decision with an exact source reference and a record of permissions used during the test.

## Smoke test

Run the skill once against synthetic data and verify that it does not read outside the fixture directory, contact an unexpected host, or create an external side effect.

## Safety and permissions

Never test with production credentials, personal messages, private documents, or a workspace containing real secrets. Registry metadata is evidence for triage, not an endorsement or audit.

## Failure modes

- Missing source code or opaque binaries should result in rejection or maintainer clarification.
- A skill that needs more access than its stated purpose should remain uninstalled.
- Unexpected network or filesystem behavior should be recorded and the test environment discarded.

## Rollback and cleanup

Remove the skill from the disposable workspace, delete generated outputs, revoke any temporary credential, and preserve only non-sensitive evidence such as hashes and public URLs.

## Sources

- [Tools and skills](https://docs.openclaw.ai/tools)
- [ClawHub skills](https://clawhub.ai/skills)
- [Security guide](https://docs.openclaw.ai/gateway/security)
