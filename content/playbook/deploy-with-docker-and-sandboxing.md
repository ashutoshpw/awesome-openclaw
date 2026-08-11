---
id: deploy-with-docker-and-sandboxing
title: Deploy OpenClaw with Docker and sandboxing
track: Deployment
summary: Create a reproducible container deployment with explicit mounts networking and tool-execution boundaries.
audience: Operators preparing a self-hosted deployment
difficulty: advanced
status: tested
prerequisites: A host with Docker and a reviewed environment file that contains no committed secrets.
related_catalog_ids: docker-deployment,sandboxing,exposure-runbook,security-guide
requires_credentials: true
external_write: true
tested_on: Bun 1.x; repository validation on 2026-08-12
last_verified: 2026-08-12
---

## Goal

Run OpenClaw in a container with a narrow filesystem mount, controlled network exposure, and sandboxed tool execution.

## Prerequisites

- Review the [Docker installation guide](https://docs.openclaw.ai/install/docker), [sandboxing guide](https://docs.openclaw.ai/gateway/sandboxing), and [exposure runbook](https://docs.openclaw.ai/gateway/security/exposure-runbook).
- Create a dedicated host or VM and a backup of the configuration without secrets.
- Decide whether the deployment needs inbound access; default to local-only access.

## Steps

1. Pin the OpenClaw image version rather than using an unbounded latest tag.
2. Create an environment file outside version control and set file permissions so only the service account can read it.
3. Mount only the intended OpenClaw workspace. Do not mount the host home directory or Docker socket.
4. Configure the container network and Gateway binding according to the exposure runbook.
5. Enable the narrowest sandbox profile that supports the intended task.
6. Start the container and inspect logs, listener addresses, mounts, and health status.
7. Run one synthetic task that does not contact production systems.

## Expected result

The container starts reproducibly, exposes only the intended local or authenticated endpoint, and cannot access host paths or tools outside the documented policy.

## Smoke test

Verify the container identity, mounted paths, listening ports, and sandbox behavior. Attempt a read outside the allowed workspace and confirm that it is denied.

## Safety and permissions

Container isolation is a boundary, not a guarantee. Do not pass host secrets, privileged flags, host networking, broad mounts, or the Docker socket unless the risk is explicit and accepted.

## Failure modes

- A missing configuration mount usually means the path or container user is wrong; correct the mount rather than widening it.
- A refused connection may be an intentional bind or network policy; inspect the listener and proxy before exposing a new port.
- A sandbox denial should be treated as a design signal; do not disable the sandbox to make a task pass.

## Rollback and cleanup

Stop and remove the container, revoke temporary credentials, remove the test environment file, and restore the previous deployment only after checking its exposure and mounts.

## Sources

- [Docker deployment](https://docs.openclaw.ai/install/docker)
- [Sandboxing](https://docs.openclaw.ai/gateway/sandboxing)
- [Self-hosting security](https://docs.openclaw.ai/gateway/security/exposure-runbook)
