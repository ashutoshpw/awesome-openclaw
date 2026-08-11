---
id: install-and-first-run
title: Install OpenClaw and complete a first safe run
track: Foundation
summary: Move from a clean host to a minimally configured assistant while keeping pairing and tool access constrained.
audience: New OpenClaw operators
difficulty: beginner
status: tested
prerequisites: A supported host and a model provider account if the selected provider requires one.
related_catalog_ids: installation,getting-started,security-guide,configuration
requires_credentials: true
external_write: false
tested_on: Bun 1.x; repository validation on 2026-08-12
last_verified: 2026-08-12
---

## Goal

Install OpenClaw and verify a first response without connecting messaging channels or granting broad tool permissions.

## Prerequisites

- Use a disposable or newly provisioned host.
- Choose a model provider and create the minimum required credential.
- Keep the Gateway bound to a local interface until pairing and authentication are complete.

## Steps

1. Read the [installation guide](https://docs.openclaw.ai/install) and choose the package, Docker, or Nix path for the host.
2. Install the current OpenClaw release using the official instructions. Do not paste credentials into shell history.
3. Follow [Getting started](https://docs.openclaw.ai/start/getting-started) to initialize the workspace.
4. Configure only the selected model provider using the [configuration reference](https://docs.openclaw.ai/gateway/configuration).
5. Run the CLI diagnostics described in the [CLI reference](https://docs.openclaw.ai/cli).
6. Send one harmless local prompt and record the OpenClaw version and provider configuration location without copying secrets.

## Expected result

The Gateway starts locally, the assistant answers one test prompt, and no channel or external write integration is enabled.

## Smoke test

Run the documented status or diagnostics command and confirm that the Gateway is reachable only from the expected local interface. Then stop and restart it once to verify the configuration is durable.

## Safety and permissions

Use a least-privilege model credential. Do not enable arbitrary shell, filesystem, browser, messaging, or payment tools during the first run. Treat workspace files as executable behavior and review them before adding them.

## Failure modes

- A provider error usually means the credential, model name, or provider configuration is wrong; re-check the provider documentation without exposing the secret.
- A Gateway binding error means another process or an unsafe interface is selected; inspect the local listener before changing exposure.
- A diagnostic command that changes state should be stopped and reviewed before rerunning.

## Rollback and cleanup

Stop the Gateway, remove the test workspace, revoke the temporary provider credential if it was created for this run, and delete shell-history entries containing secrets.

## Sources

- [Installation](https://docs.openclaw.ai/install)
- [Getting started](https://docs.openclaw.ai/start/getting-started)
- [Configuration](https://docs.openclaw.ai/gateway/configuration)
- [Security guide](https://docs.openclaw.ai/gateway/security)
