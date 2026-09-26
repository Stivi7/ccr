---
title: Claude Code runtime setup
description: Inspect the generated Claude Code agents and skill registrations after initialization.
kind: runtime
tags:
  - runtime
  - guide
---

# Claude Code runtime setup

Initialize Claude Code explicitly with `cyberpunk init --runtime claude`, or
use plain `cyberpunk init` to include all supported registrations. The CLI
generates agent definitions under `.claude/agents/` and skill wrappers under
`.claude/skills/`, while preserving canonical policy as the behavioral source.

These registrations configure a local project; they do not launch Claude Code
or verify account capability. Confirm generated state with [validate](../cli/validate.md),
compare the runtime-neutral model in [runtime setup](./runtime-setup.md), and
use [drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md)
if a wrapper conflicts with a project-owned file.

