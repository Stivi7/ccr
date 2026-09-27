---
title: Global help and version flags
description: Discover supported commands and inspect the CLI-reported version.
kind: cli
tags:
  - cli
  - guide
---

# Global help and version flags

`cyberpunk --help` (or `-h`) prints the command synopsis for `init`, `sync`,
`validate`, `status`, help, and version. `cyberpunk --version` (or `-v`) prints
the CLI-reported version. At reviewed commit `089baa2`, the output is
`Cyberpunk CLI v0.4.0`.

That value is source evidence, not a public release claim: the release metadata
is forthcoming until a matching semantic tag and archive are available.
[Installation](../start-here/installation.md) explains the resulting
placeholder flow, and [manual tagged release](../guides/manual-tagged-release.md)
explains the later equality checks.

Use [configuration](./configuration.md) to choose `init` runtimes and
[generated project structure](./generated-project-structure.md) to understand
what those commands create. Use [exit behavior and diagnostics](./exit-behavior-and-diagnostics.md)
to interpret invalid input. The user journey continues with [first project
initialization](../start-here/first-project-initialization.md).
