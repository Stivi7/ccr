---
title: Generated project structure
description: Inspect canonical policy, runtime adapters, generated manifests, and local execution state.
kind: artifact
tags:
  - artifact
  - cli
  - runtime
---

# Generated project structure

Initialization creates canonical workflow, role, skill, memory, and
specification locations, plus managed runtime adapters. Approved PRDs live in
`specs/`; execution plans, work packets, and run evidence live in
`.cyberpunk/runs/<task-id>/`. It records generated asset ownership and hashes
so later checks can identify a collision or local drift instead of silently
overwriting project work. Existing legacy `plans/`, `tasks/`, and `examples/`
directories are project content and are not removed automatically.

Codex uses `.codex/agents/` and `.agents/skills/`; Claude Code uses
`.claude/agents/` and `.claude/skills/`; Cursor uses `.cursor/agents/`,
`.cursor/skills/`, and its generated rule adapter. Canonical Markdown policy
remains the behavioral source. Local run state is intentionally separate from
durable project memory.

[init](./init.md) creates this output, [sync](./sync.md) refreshes selected
registrations, and [validate](./validate.md) checks it.
[Configuration](./configuration.md) determines which runtime adapters the
commands generate. Use [drift
troubleshooting](../guides/troubleshooting-registrations-and-drift.md) before
force-refreshing a generated asset, and see [runtime setup](../start-here/runtime-setup.md)
for how users enter this flow.
