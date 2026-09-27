---
title: validate
description: Check canonical policy, generated assets, configuration, and safe project contracts without writing.
kind: cli
tags:
  - cli
  - artifact
  - workflow
---

# validate

`cyberpunk validate` takes no options and checks the canonical protocol,
required files, ignore entries, safe delivery policy, runtime configuration,
model configuration, generated registrations, managed instruction blocks,
manifest hashes, collisions, and drift. It is a non-writing inspection command.

The check can report a reviewed canonical-protocol upgrade requirement instead
of silently replacing policy. It also distinguishes generated state from live
provider capability; see [runtime neutrality](../concepts/runtime-neutrality-and-adapters.md).

Read [configuration](./configuration.md) and [generated project structure](./generated-project-structure.md)
to understand checked artifacts. It belongs in [first project initialization](../start-here/first-project-initialization.md)
and should follow `sync` when registrations change. For failures, use
[registration and drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md)
and [exit behavior and diagnostics](./exit-behavior-and-diagnostics.md).
