---
title: init
description: Scaffold canonical protocol files and generated runtime registrations in a project.
kind: cli
tags:
  - cli
  - runtime
  - artifact
---

# init

`cyberpunk init [--runtime codex|claude|cursor|all]... [--dry-run] [--force]`
copies missing canonical templates, ensures ignored local-run and worktree
paths, configures selected runtimes, and generates their registrations. Plain
`init` selects Codex, Claude Code, and Cursor together; repeated explicit
runtime choices add registrations rather than removing existing ones.

`--dry-run` previews operations without writing. `--force` refreshes
framework-owned template paths and is required before replacing drifted
generated assets. The command preserves existing ordinary project-owned files
unless that force behavior applies.

Read [configuration](./configuration.md) for runtime selection, [generated
project structure](./generated-project-structure.md) for output artifacts, and
[first project initialization](../start-here/first-project-initialization.md)
for the next commands. If a registration conflicts or drift is reported, use
[registration troubleshooting](../guides/troubleshooting-registrations-and-drift.md).

