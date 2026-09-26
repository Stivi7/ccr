---
title: Skills
description: Reusable methods that supplement role ownership without replacing policy.
kind: overview
tags:
  - workflow
  - artifact
---

# Skills

Roles define who owns a responsibility; skills define reusable methods for
doing it. Agents inspect skill metadata first and read the complete selected
skill when its trigger applies. Core skills cover discovery, classification,
planning, decomposition, scoped implementation, testing, debugging, review,
verification, and memory curation.

The instruction order is user authority, project policy, work packet, role
contract, then selected skill. Project-owned skills stay separate from core
skills and must be explicitly enabled in configuration; they cannot silently
shadow a core skill.

[The Coder](../roles/coder.md) uses scoped implementation and test discipline,
while [The Gatekeeper](../roles/gatekeeper.md) uses review and delivery
verification. Read [work packets](./work-packets-and-result-contracts.md) to
see how a packet selects methods, and [adaptive workflow](./adaptive-workflow.md)
to see why the selection stays proportionate.
