---
id: recover-and-rotate-credentials
title: Recover a compromised or misconfigured Gateway
track: Security and recovery
summary: Contain a suspicious Gateway state and rotate exposed credentials before restoring only reviewed configuration.
audience: Operators handling a security incident or unsafe configuration
difficulty: advanced
status: tested
prerequisites: Access to the host and provider consoles plus a known-good backup that excludes secrets.
related_catalog_ids: security-guide,openclaw-security-policy,openclaw-trust,exposure-runbook,configuration
requires_credentials: true
external_write: true
tested_on: Bun 1.x; repository validation on 2026-08-12
last_verified: 2026-08-12
---

## Goal

Contain an OpenClaw Gateway that may have exposed credentials or performed an unexpected action, then restore a minimal known-good state.

## Prerequisites

- Keep the [security policy](https://github.com/openclaw/openclaw/blob/main/SECURITY.md) and [trust page](https://trust.openclaw.ai) available.
- Know the host owner, provider accounts, messaging channels, and last known-good configuration.
- Have an incident log that does not contain raw secrets or private message content.

## Steps

1. Disconnect the Gateway from external networks or stop the service without deleting evidence.
2. Revoke and rotate model, channel, webhook, SSH, and other credentials that may have been available to the process.
3. Preserve relevant logs, configuration hashes, timestamps, and public resource versions for the incident record.
4. Inspect workspace files, installed skills, plugins, scheduled jobs, mounts, listeners, and recent outbound actions.
5. Rebuild the runtime from a known-good package or image and restore only reviewed configuration.
6. Re-enable one capability at a time and verify the expected authentication, pairing, sandbox, and recipient controls.
7. Report a suspected vulnerability using the official security-reporting process rather than publishing sensitive details.

## Expected result

The suspicious runtime is contained, affected credentials are rotated, evidence is preserved safely, and the restored Gateway has a documented minimal permission set.

## Smoke test

Confirm old credentials no longer authenticate, unauthorized senders cannot pair, expected local diagnostics pass, and a synthetic task cannot reach disallowed paths or recipients.

## Safety and permissions

Treat all potentially exposed credentials as compromised. Avoid destructive cleanup until evidence and ownership are established. Do not paste private logs or secrets into public issues or chat.

## Failure modes

- If the host cannot be trusted, rebuild on a clean host rather than attempting an in-place repair.
- If provider revocation is delayed, keep the Gateway offline and block outbound access.
- If the source of the behavior is unknown, restore fewer capabilities and add them back under observation.

## Rollback and cleanup

Keep the preserved incident evidence according to the organization's retention policy. Remove compromised images, workspaces, and temporary credentials only after the incident owner approves the cleanup.

## Sources

- [Security guide](https://docs.openclaw.ai/gateway/security)
- [Self-hosting security](https://docs.openclaw.ai/gateway/security/exposure-runbook)
- [OpenClaw security policy](https://github.com/openclaw/openclaw/blob/main/SECURITY.md)
- [OpenClaw trust page](https://trust.openclaw.ai)
