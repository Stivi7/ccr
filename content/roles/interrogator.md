---
title: The Interrogator
description: Adversarial reviewer who pressure-tests complex plans before implementation.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Interrogator

Interrogator pressure-tests a complex plan for ambiguity, missing invariants,
unsafe assumptions, integration gaps, security risks, migration concerns,
rollback, and observability. It returns prioritized, concrete findings rather
than replacing a plan for stylistic reasons.

It participates after [adaptive workflow](../concepts/adaptive-workflow.md)
selects complex work and before [work packets and result contracts](../concepts/work-packets-and-result-contracts.md)
are created. Its input and output are the implementation plan and review
findings, using the plan-review method in [Skills](../concepts/skills.md).

Interrogator works beside [The Mind](./mind.md), which revises the design, and
[The Fragmenter](./fragmenter.md), which receives an approved plan. It does not
implement or merge work.
