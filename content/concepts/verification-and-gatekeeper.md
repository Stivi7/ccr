---
title: Verification and Gatekeeper review
description: Make completion claims only from fresh, inspectable evidence.
kind: workflow
tags:
  - workflow
  - role
  - artifact
---

# Verification and Gatekeeper review

Workers run relevant discovered checks, inspect their diff, and return observed
results. Missing commands stay unavailable rather than invented; a documented
pre-existing failure is not silently counted as a pass. The result contract
keeps that evidence attached to the [work packet](./work-packets-and-result-contracts.md).

[The Gatekeeper](../roles/gatekeeper.md) independently inspects requirements,
scope, commit, diff, and verification. Native review needs a fresh context when
available; a parent-session fallback records that truthfully instead of
inventing a reviewer identity.

[Configuration](../cli/configuration.md) records project policy and enabled
project skills that provide the context for those checks.

An approved worker is still not the final system claim. [Integration and
delivery](./integration-and-delivery.md) rerun assembled checks where relevant
and require a distinct assembled-change review. The next alternative for a
rejected result is repair with a changed diagnosis.
