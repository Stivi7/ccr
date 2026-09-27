---
title: Native dispatch and concurrency
description: Evidence-based parallel work with one dispatcher and non-overlapping ownership.
kind: workflow
tags:
  - workflow
  - runtime
  - role
---

# Native dispatch and concurrency

Only [The Nexus](../roles/nexus.md) dispatches Cyberpunk team agents. The
effective limit is the minimum of configured maximum, observed runtime capacity,
and three. Dependency-ready packets can run together only when their mutable
ownership does not overlap; a full queue waits for capacity rather than being
called a fallback.

Configured models and runtimes in [configuration](../cli/configuration.md) are
intent. Actual agent identities, effective models, fallback reason, execution
mode, reviews, and verification are observed evidence recorded in [project
memory and run state](./project-memory-and-run-state.md).
When delegation is unavailable or disabled, the protocol records an explicit
sequential fallback instead of simulating concurrency.

Each mutable job still needs [branch and worktree isolation](./branches-and-worktrees.md)
and a complete [work packet](./work-packets-and-result-contracts.md). The next
stage is independent Gatekeeper review, not an implicit merge.
