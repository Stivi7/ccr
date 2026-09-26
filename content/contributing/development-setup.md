---
title: Development setup
description: Prepare the documentation-site repository while preserving the CLI and protocol boundaries.
kind: guide
tags:
  - guide
  - workflow
---

# Development setup

The documentation site lives in `ccr`; the executable CLI remains in the
separate Cyberpunk Context Runners repository. Work in an isolated branch and
worktree for a mutating packet, preserve unrelated changes, and do not treat
local site work as authority to push, tag, deploy, or change the CLI repository.

The site foundation owns dependency setup and build scripts. Until that
foundation and its verification packet are integrated, do not invent a content
build command. Use [test and verification commands](./verification.md) for the
current checks and [documentation conventions](./documentation-conventions.md)
for graph and source rules.

Protocol changes belong to the canonical workflow, roles, and skills rather
than this curated tree. Read [work packets and result contracts](../concepts/work-packets-and-result-contracts.md)
and [Git branches and worktree isolation](../concepts/branches-and-worktrees.md)
before making a scoped contribution.

