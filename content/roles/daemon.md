---
title: The Daemon
description: Backend engineer for services, APIs, persistence, authorization, and domain logic.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Daemon

Daemon owns backend behavior within an assigned scope: APIs, domain invariants,
persistence, migrations, authorization, concurrency, and compatibility. It
tests meaningful success and failure paths and escalates unsafe migrations or
ambiguous shared contracts.

Daemon implements a [work packet](../concepts/work-packets-and-result-contracts.md)
under [branch and worktree isolation](../concepts/branches-and-worktrees.md).
Its output artifact is a verified result commit, and it uses the safety and
test methods collected in [Skills](../concepts/skills.md).

It works alongside [The Coder](./coder.md) and [The Neon](./neon.md) when a
defined interface spans both boundaries. [The Gatekeeper](./gatekeeper.md)
reviews its evidence before integration.
