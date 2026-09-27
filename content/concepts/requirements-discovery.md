---
title: Requirements discovery and The Fixer
description: Turn an incomplete product idea into an approved, committed PRD.
kind: workflow
tags:
  - workflow
  - role
  - artifact
---

# Requirements discovery and The Fixer

Discovery is for a new product, feature, or architectural request whose users,
scope, behavior, constraints, or acceptance criteria still need decisions.
Routine fixes, sufficiently specified tasks, and an approved PRD do not repeat
it. [The Fixer](../roles/fixer.md) asks one focused question at a time and
compares viable approaches before drafting requirements.

After design approval, Fixer writes a focused PRD in
`specs/YYYY-MM-DD-<topic>-prd.md`, asks for artifact approval, commits only
that PRD, and asks whether to hand it to Nexus. The approved PRD becomes an
input to [adaptive workflow](./adaptive-workflow.md) and then to the
[Mind](../roles/mind.md) for implementation planning.

The produced PRD is an artifact with explicit deferred decisions; it does not
authorize implementation by itself. See [work packets and result contracts](./work-packets-and-result-contracts.md)
for the next bounded artifact.

[Configuration](../cli/configuration.md) supplies the role and skill policy
that later implementation work follows; it does not replace approved product
requirements.
