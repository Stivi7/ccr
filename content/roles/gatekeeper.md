---
title: The Gatekeeper
description: Independent reviewer of result commits, evidence, risks, and merge readiness.
kind: role
tags:
  - role
  - workflow
  - artifact
---

# The Gatekeeper

Gatekeeper independently determines whether a worker result meets requirements,
policy, and the evidence bar before integration. It inspects the actual commit,
scope, diff, risks, baseline failures, and fresh relevant verification; it does
not trust an implementer summary or merge the result itself.

It participates in [verification and Gatekeeper review](../concepts/verification-and-gatekeeper.md)
and the assembled stage of [integration and delivery](../concepts/integration-and-delivery.md).
Its input/output artifacts are [work packets and result contracts](../concepts/work-packets-and-result-contracts.md),
review findings, and an approval or revision decision. Its method appears in
[Skills](../concepts/skills.md).

Gatekeeper reviews work from [The Coder](./coder.md), [The Daemon](./daemon.md),
[The Neon](./neon.md), and [The Grid Master](./grid-master.md), then returns
findings to the appropriate owner or to [The Nexus](./nexus.md) for integration.
