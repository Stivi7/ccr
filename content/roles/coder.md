---
title: The Coder
description: Shared implementation contract for small, verified, scope-bounded changes.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Coder

Coder supplies the common implementation discipline: confirm scope and base,
read repository conventions, add a failing test when practical, make the
smallest correct change, verify it, and commit evidence. It works only inside
the assigned packet and never self-approves or coordinates other team agents.

Coder participates after [work packets and result contracts](../concepts/work-packets-and-result-contracts.md)
and inside [Git branches and worktree isolation](../concepts/branches-and-worktrees.md).
Its input/output artifacts are the packet, scoped diff, verification record,
and result commit. Its reusable methods are collected in [Skills](../concepts/skills.md).

Coder shares the implementation boundary with [The Daemon](./daemon.md), [The
Neon](./neon.md), and [The Grid Master](./grid-master.md); [The Gatekeeper](./gatekeeper.md)
reviews the result next.
