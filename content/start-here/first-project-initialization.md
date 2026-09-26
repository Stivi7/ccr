---
title: First project initialization
description: Initialize a Git repository with the runtime-neutral protocol and validate it.
kind: guide
tags:
  - cli
  - guide
  - artifact
---

# First project initialization

After a tagged installation is available and `cyberpunk` resolves from your
shell, enter an existing Git repository and run:

```bash
cyberpunk init
cyberpunk validate
cyberpunk status
```

Plain `init` selects Codex, Claude Code, and Cursor registrations together.
Use `--runtime codex`, `--runtime claude`, or `--runtime cursor` to select one
or more explicitly. `--dry-run` previews writes; `--force` refreshes
framework-owned templates and is required when replacing drifted generated
assets.

`init` creates canonical policy, roles, skills, memory, and ignored local-run
paths. It then generates registrations for configured runtimes. [Generated
project structure](../cli/generated-project-structure.md) explains those
artifacts, while [validate](../cli/validate.md) explains the non-writing
checks.

Next, give the coding agent a bounded request through [your first Nexus
task](./first-nexus-task.md). If initialization or validation fails, start
with [registration and drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md).

