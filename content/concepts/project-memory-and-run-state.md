---
title: Project memory and run state
description: Separate durable repository knowledge from local execution evidence.
kind: artifact
tags:
  - artifact
  - workflow
---

# Project memory and run state

Project context records observed repository facts, commands, conventions, and
boundaries. Decisions capture accepted rationale; patterns capture proven
conventions; lessons require evidence, reuse, actionability, and no secrets.
Stale knowledge is marked superseded rather than silently removed.

Local run state preserves task-specific branches, worktrees, dependency status,
actual agent identity, model choice, fallback, result commits, reviews, and
verification. It records observation rather than configuration intent, which is
why [native dispatch and concurrency](./native-dispatch-and-concurrency.md)
does not promise a runtime can delegate.

[The Operator](../roles/operator.md) refreshes repository facts, and [The
Nexus](../roles/nexus.md) curates delivery evidence. The next lifecycle stage
after a result is [verification and Gatekeeper review](./verification-and-gatekeeper.md).

