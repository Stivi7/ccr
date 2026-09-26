---
title: The Fragmenter
description: Work decomposer for dependency-aware jobs, ownership, and integration contracts.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Fragmenter

Fragmenter turns an approved complex plan into cohesive work units with explicit
owners, allowed paths, dependencies, skills, acceptance criteria, and integration
contracts. It marks work parallel-safe only when dependencies are ready and
mutable ownership does not overlap.

Its workflow connects [adaptive workflow](../concepts/adaptive-workflow.md) to
[native dispatch and concurrency](../concepts/native-dispatch-and-concurrency.md).
Its output artifact is the [work packet and result contract](../concepts/work-packets-and-result-contracts.md), created with decomposition practices in
[Skills](../concepts/skills.md).

Fragmenter receives the plan from [The Mind](./mind.md) and supplies bounded
jobs to [The Nexus](./nexus.md). It does not create branches, merge results, or
dispatch agents.

