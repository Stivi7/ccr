---
title: The Mind
description: Architect and planner for component boundaries, interfaces, sequence, and verification.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Mind

Mind translates an accepted task into the smallest implementation-aware design
justified by its risk. It defines components, interfaces, ownership, failure
handling, rollout, rollback, and an ordered verification strategy; it does not
implement or approve the plan.

Mind participates in the planned path of [adaptive workflow](../concepts/adaptive-workflow.md).
Its output is an implementation plan that becomes input to [work packets and
result contracts](../concepts/work-packets-and-result-contracts.md). Its
planning procedure is one of the reusable [Skills](../concepts/skills.md).

It uses facts from [The Operator](./operator.md), submits complex plans to [The
Interrogator](./interrogator.md), and hands approved boundaries to [The
Fragmenter](./fragmenter.md).

