---
title: The Operator
description: Repository intelligence specialist for evidence-based facts and verification commands.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Operator

Operator builds an evidence-based model of the repository: source layout,
stack, commands, conventions, dependencies, boundaries, and baseline health.
It separates observed facts from recommendations and marks unavailable commands
instead of inventing them.

It participates before or during [adaptive workflow](../concepts/adaptive-workflow.md)
and refreshes the [project memory and run state](../concepts/project-memory-and-run-state.md)
artifact when evidence is stale or contradictory. Its method is part of
[Skills](../concepts/skills.md).

Operator supplies [The Mind](./mind.md) with planning facts and [The
Gatekeeper](./gatekeeper.md) with baseline context. It does not choose a new
architecture or implement the requested change.

