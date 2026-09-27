---
title: Work packets and result contracts
description: Bound implementation ownership and return evidence that a reviewer can inspect.
kind: artifact
tags:
  - artifact
  - workflow
  - role
---

# Work packets and result contracts

A work packet makes implementation bounded and reviewable. It names the
objective, owner, base commit, branch, worktree, allowed scope, dependencies,
integration contract, skills, acceptance criteria, and verification categories.
[The Fragmenter](../roles/fragmenter.md) creates these dependency-aware units
after the plan is approved.

A worker returns status, changed files, acceptance results, commands run,
omitted checks, risks, candidate lessons, a result commit, and merge readiness.
The worker does not approve or merge itself. [Branch and worktree isolation](./branches-and-worktrees.md)
keeps one mutable job separate from another.

The [Gatekeeper](../roles/gatekeeper.md) reviews the actual result commit and
evidence. Approved results proceed to [integration and delivery](./integration-and-delivery.md);
unresolved findings return to the scoped worker.
