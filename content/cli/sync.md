---
title: sync
description: Regenerate configured runtime registrations without recopying ordinary project files.
kind: cli
tags:
  - cli
  - runtime
  - artifact
---

# sync

`cyberpunk sync [--dry-run] [--force]` migrates supported configuration when
needed and regenerates registrations for the runtimes already configured in the
project. It does not recopy ordinary project-owned files. A stale canonical
protocol requires a reviewed upgrade before synchronization can generate the
current registrations.

Use `--dry-run` to preview generated changes. Use `--force` only when you have
reviewed a collision or modified generated asset and intend to replace the
framework-owned version.

See [configuration](./configuration.md) for the selected runtime policy and
[generated project structure](./generated-project-structure.md) for the
manifest and adapter outputs. Run [validate](./validate.md) next, and consult
[registration and drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md)
if the command refuses an unsafe replacement. The [runtime setup](../start-here/runtime-setup.md)
journey explains what sync does not prove.
