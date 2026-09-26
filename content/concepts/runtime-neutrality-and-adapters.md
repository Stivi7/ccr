---
title: Runtime neutrality and generated adapters
description: Keep canonical protocol policy separate from runtime-specific registrations.
kind: runtime
tags:
  - runtime
  - artifact
  - workflow
---

# Runtime neutrality and generated adapters

Canonical workflow, roles, and skills are ordinary Markdown and YAML. Generated
runtime adapters point Codex, Claude Code, or Cursor back to that policy, so
runtime UI details can differ without changing the engineering contract.

The Bash CLI installs, synchronizes, and validates generated registrations; it
does not run a model process or prove provider capability. [Runtime setup](../start-here/runtime-setup.md)
shows the generated locations, and [status](../cli/status.md) reports configured
policy and generated-state inspection without claiming live capability.

Generated paths and hashes are recorded as an artifact. [Validate](../cli/validate.md)
detects drift and collisions; [registration troubleshooting](../guides/troubleshooting-registrations-and-drift.md)
explains the safe response. The same evidence distinction shapes [native dispatch](./native-dispatch-and-concurrency.md).

