---
title: Codex runtime setup
description: Inspect the generated Codex agents and skill registrations after initialization.
kind: runtime
tags:
  - runtime
  - guide
---

# Codex runtime setup

Initialize Codex explicitly with `cyberpunk init --runtime codex`, or use plain
`cyberpunk init` to include it with the other supported registrations. The CLI
creates Codex agent definitions under `.codex/agents/`, runtime skill wrappers
under `.agents/skills/`, and Codex concurrency settings in `.codex/config.toml`.

Those generated files point to canonical policy; they do not start Codex or
prove a model is available. Run [validate](../cli/validate.md) to inspect their
ownership and hashes, then read [runtime setup](./runtime-setup.md) for the
cross-runtime boundary. If a generated path was locally modified, use the
[drift guide](../guides/troubleshooting-registrations-and-drift.md) before
using `--force`.

