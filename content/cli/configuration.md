---
title: Configuration reference
description: Configure enabled runtimes, execution policy, model profiles, Git safety, memory, and skills.
kind: cli
tags:
  - cli
  - runtime
  - artifact
---

# Configuration reference

The project configuration is versioned YAML. It records enabled runtimes,
execution parallelism and maximum concurrency, model profiles and fallback,
delivery limits, Git branch/worktree safety, tracked and local memory, and
core/project skill locations. The current protocol configuration uses version
2 and treats generated runtime state as separate from configured intent.

The `runtimes.enabled` setting drives generated registrations. `parallelism:
sequential` constrains dispatch to one, while a configured maximum is a safety
cap rather than proof of native capacity. Delivery policy can forbid pushes,
pull requests, and deploys even when local work is complete.

`init` and [sync](./sync.md) read this artifact; [validate](./validate.md)
checks it, and [status](./status.md) reports it. See [generated project
structure](./generated-project-structure.md) for the outputs and [runtime
setup](../start-here/runtime-setup.md) for the user journey. If registrations
no longer match the configuration, use [registration and drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md).
