# Awesome OpenClaw [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) ![CI](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=github-actions) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A curated list of high-signal resources for OpenClaw: documentation, skills, plugins, integrations, deployments, security guidance, use cases, and community projects.

This is an independent community list. Inclusion is not an endorsement, security audit, or guarantee of maintenance. OpenClaw resources can execute code, access credentials, send messages, and change external systems, so review every project before installing or connecting it.

## Contents

- [Official OpenClaw Resources](#official-openclaw-resources)
- [Getting Started and Operations](#getting-started-and-operations)
- [Curated OpenClaw Directories](#curated-openclaw-directories)
- [Skills and Skill Registries](#skills-and-skill-registries)
- [Plugins, Channels, and Integrations](#plugins-channels-and-integrations)
- [MCP and External Tools](#mcp-and-external-tools)
- [Agents, Personas, and Templates](#agents-personas-and-templates)
- [Use Cases and Runnable Examples](#use-cases-and-runnable-examples)
- [Deployment and Infrastructure](#deployment-and-infrastructure)
- [Memory, Context, and Observability](#memory-context-and-observability)
- [Security and Privacy](#security-and-privacy)
- [Community and Learning](#community-and-learning)
- [Alternatives and Related Projects](#alternatives-and-related-projects)
- [Contributing](#contributing)
- [License](#license)

## Official OpenClaw Resources

- [ClawHub](https://clawhub.ai) - Official registry for discovering and installing OpenClaw skills. 🎖️
- [OpenClaw](https://github.com/openclaw/openclaw) - The core open-source personal AI assistant and Gateway. 🎖️
- [OpenClaw documentation](https://docs.openclaw.ai) - Official documentation for installation, configuration, channels, tools, and operations. 🎖️
- [OpenClaw showcase](https://docs.openclaw.ai/start/showcase) - Official examples of what people are building. 🎖️
- [OpenClaw website](https://openclaw.ai) - Official project homepage. 🎖️

## Getting Started and Operations

- [Architecture](https://docs.openclaw.ai/concepts/architecture) - Overview of the Gateway, agents, sessions, tools, channels, and workspace model. 🎖️
- [Channels](https://docs.openclaw.ai/channels) - Connect OpenClaw to WhatsApp, Telegram, Slack, Discord, Signal, iMessage, and other messaging services. 🎖️
- [CLI reference](https://docs.openclaw.ai/cli) - Command-line reference for setup, diagnostics, pairing, skills, and operations. 🎖️
- [Configuration](https://docs.openclaw.ai/gateway/configuration) - Configure models, channels, tools, agents, and Gateway behavior. 🎖️
- [Getting started](https://docs.openclaw.ai/start/getting-started) - Recommended path from installation to a first working assistant. 🎖️
- [Installation](https://docs.openclaw.ai/install) - Official installer, package, Docker, Nix, and platform deployment paths. 🎖️
- [Model providers](https://docs.openclaw.ai/concepts/model-providers) - Configure hosted and local model providers. 🎖️
- [Plugins](https://docs.openclaw.ai/plugins) - Extend OpenClaw with installable plugins and plugin-provided capabilities. 🎖️
- [Security guide](https://docs.openclaw.ai/gateway/security) - Understand pairing, authentication, exposure, permissions, and the trusted-operator model. 🎖️
- [Tools and skills](https://docs.openclaw.ai/tools) - Learn how OpenClaw exposes tools and loads skills. 🎖️

## Curated OpenClaw Directories

These projects maintain deeper catalogs. Prefer them for exhaustive discovery instead of duplicating their inventories here.

- [awesome-openclaw](https://github.com/vincentkoc/awesome-openclaw) - Concise directory of OpenClaw resources, integrations, deployments, and community projects.
- [awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents) - Agent templates organized by productivity, development, business, DevOps, and other roles.
- [awesome-openclaw-examples](https://github.com/OthmaneBlial/awesome-openclaw-examples) - Runnable use-case starters with setup, prompts, KPIs, security notes, and rollback guidance.
- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) - Curated ClawHub skills organized by capability.
- [awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) - Large categorized skill directory covering productivity, development, media, research, and infrastructure.
- [awesome-openclaw-tips](https://github.com/alvinreal/awesome-openclaw-tips) - Practical tips for messaging, memory, reliability, cost, operations, and automation.
- [awesome-openclaw-tutorial](https://github.com/xianyu110/awesome-openclaw-tutorial) - Chinese tutorial and practical guide covering installation, configuration, and workflows.
- [awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) - Real-world use cases with prompts, required skills, and related links.

## Skills and Skill Registries

- [ClawHub source](https://github.com/openclaw/clawhub) - CLI and registry source for searching, inspecting, and installing skills. 🎖️
- [ClawHub skills](https://clawhub.ai/skills) - Browse published community skills and inspect their metadata before installation.

## Plugins, Channels, and Integrations

- [Feishu OpenClaw](https://github.com/AlexAnys/feishu-openclaw) - Feishu/Lark channel and integration plugin.
- [OpenClaw plugin SDK](https://docs.openclaw.ai/plugins/building-plugins) - Official guide for building plugins. 🎖️
- [OpenClaw QQ bot](https://github.com/tencent-connect/openclaw-qqbot) - QQ channel connector for OpenClaw.

## MCP and External Tools

- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Broad directory of Model Context Protocol servers that can complement agent workflows.
- [OpenClaw MCP adapter](https://github.com/androidStern-personal/openclaw-mcp-adapter) - Adapter for exposing OpenClaw capabilities through MCP.
- [OpenClaw MCP server](https://github.com/Helms-AI/openclaw-mcp-server) - MCP server for interacting with an OpenClaw Gateway.

## Agents, Personas, and Templates

- [awesome-openclaw-personas](https://github.com/TravisLeeeeee/awesome-openclaw-personas) - Persona packages containing reusable agent identity and behavior files.
- [Multi-agent documentation](https://docs.openclaw.ai/concepts/multi-agent) - Official guidance for configuring multiple agents. 🎖️
- [OpenClaw workspace files](https://docs.openclaw.ai/concepts/agent-workspace) - Understand `AGENTS.md`, `SOUL.md`, memory, and workspace customization. 🎖️

## Use Cases and Runnable Examples

- [Daily Reddit Digest](https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/daily-reddit-digest.md) - Example of scheduled research and summarization.
- [Multi-agent content factory](https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/content-factory.md) - Coordinate research, writing, and publishing agents.
- [n8n workflow orchestration](https://github.com/hesamsheikh/awesome-openclaw-usecases/blob/main/usecases/n8n-workflow-orchestration.md) - Delegate integration work through controlled n8n webhooks.
- [OpenClaw examples catalog](https://github.com/OthmaneBlial/awesome-openclaw-examples/blob/main/examples/catalog.md) - Catalog of tested examples across engineering, research, content, finance, and operations.

## Deployment and Infrastructure

- [Docker deployment](https://docs.openclaw.ai/install/docker) - Run OpenClaw in a containerized environment. 🎖️
- [Nix OpenClaw](https://github.com/openclaw/nix-openclaw) - Nix packaging and deployment support. 🎖️
- [OpenClaw Ansible](https://github.com/openclaw/openclaw-ansible) - Ansible-based deployment support. 🎖️
- [Sandboxing](https://docs.openclaw.ai/gateway/sandboxing) - Configure isolation for agent tool execution. 🎖️
- [Self-hosting security](https://docs.openclaw.ai/gateway/security/exposure-runbook) - Runbook for safely exposing or remotely operating a Gateway. 🎖️

## Memory, Context, and Observability

- [ClawDeck](https://github.com/clawdeckio/clawdeck) - Mission-control dashboard for managing OpenClaw agents.
- [Mem0 OpenClaw integration](https://docs.mem0.ai/integrations/openclaw) - Persistent memory integration for OpenClaw. 💵
- [Memory documentation](https://docs.openclaw.ai/concepts/memory) - Official memory, context, and persistence guidance. 🎖️
- [Sessions and observability](https://docs.openclaw.ai/concepts/session) - Understand sessions, transcripts, routing, and operational context. 🎖️

## Security and Privacy

- [OpenClaw security policy](https://github.com/openclaw/openclaw/blob/main/SECURITY.md) - Official vulnerability-reporting process and security boundaries. 🎖️
- [OpenClaw trust page](https://trust.openclaw.ai) - Official trust, security, and responsible-disclosure information. 🎖️
- [Secure OpenClaw](https://github.com/composio-community/secure-openclaw) - Security-focused OpenClaw deployment and hardening project.
- [Security practice guide](https://github.com/slowmist/openclaw-security-practice-guide) - Security guidance for deploying and operating OpenClaw.

## Community and Learning

- [OpenClaw Discord](https://discord.gg/clawd) - Official community support and discussion. 🎖️
- [OpenClaw FAQ](https://docs.openclaw.ai/help/faq) - Frequently asked setup and usage questions. 🎖️
- [OpenClaw GitHub issues](https://github.com/openclaw/openclaw/issues) - Official bug reports and feature requests. 🎖️
- [OpenClaw releases](https://github.com/openclaw/openclaw/releases) - Published releases and changelog history. 🎖️

## Alternatives and Related Projects

- [nanobot](https://github.com/HKUDS/nanobot) - Lightweight personal AI assistant implementation.
- [NanoClaw](https://github.com/qwibitai/nanoclaw) - Lightweight alternative architecture for personal agents.
- [tinyclaw](https://github.com/jlia0/tinyclaw) - Minimal OpenClaw-inspired agent implementation.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a resource. New entries should be useful to real OpenClaw users, publicly inspectable, maintained, and supported by documentation or meaningful usage evidence.

## License

The curation and original text in this repository are dedicated to the public domain under [CC0 1.0](LICENSE). Third-party resources linked here retain their own licenses.
