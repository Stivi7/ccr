---
title: Runtime setup
description: Choose and inspect generated registrations without confusing them with live capability.
kind: runtime
tags:
  - runtime
  - guide
---

# Runtime setup

The protocol supports generated registrations for Codex, Claude Code, and
Cursor. Select runtimes during initialization or add selections later with
`cyberpunk init --runtime ...`; `sync` refreshes configured registrations
without recopying ordinary project-owned files.

Registrations are thin pointers back to canonical Markdown policy. A configured
runtime is intent, not evidence that a provider account, model, or native-agent
feature is live. [Runtime neutrality and generated adapters](../concepts/runtime-neutrality-and-adapters.md)
explains that boundary.

Recommended path: inspect [Codex](./codex.md), [Claude Code](./claude-code.md),
or [Cursor](./cursor.md), then use [status](../cli/status.md) to inspect
configured state. If validation detects an unowned collision or modified
generated asset, follow [drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md).
