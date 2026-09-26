---
title: Git branches and worktree isolation
description: Give every mutable implementation job a bounded branch and worktree.
kind: workflow
tags:
  - workflow
  - artifact
---

# Git branches and worktree isolation

Every mutating implementation assignment receives its own worker branch and
worktree, even when work runs sequentially. The worker verifies and commits a
scoped result; the integration branch changes only after independent review.
Worktree isolation separates approved changes, but it does not create native
agents or make overlapping ownership safe.

The [Nexus](../roles/nexus.md) resolves the integration branch and coordinates
the worktree lifecycle. The branch, base commit, owner, dependencies, result,
review, and merge state live in the [run state](./project-memory-and-run-state.md).
The [work packet](./work-packets-and-result-contracts.md) defines the allowed
paths that make parallel jobs safe.

[Configuration](../cli/configuration.md) records the project worktree-root
policy used for those isolated jobs.

After a worker result, [verification and Gatekeeper review](./verification-and-gatekeeper.md)
decide whether it can enter the integration sequence.
