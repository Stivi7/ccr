---
title: What Cyberpunk Context Runners is
description: The boundary between the engineering protocol, its CLI, and coding-agent runtimes.
kind: overview
tags:
  - workflow
  - runtime
---

# What Cyberpunk Context Runners is

Cyberpunk Context Runners is a Markdown-and-YAML engineering-team protocol.
It gives a coding agent a shared workflow for discovery, planning, scoped
implementation, independent review, and delivery. The protocol is
runtime-neutral: its canonical policy does not depend on one model vendor.

The Bash CLI copies and validates that protocol inside a repository. It can
generate runtime registrations for supported tools, but it does not start a
model process, assert live account capability, or orchestrate a provider
session. See [runtime neutrality and generated adapters](../concepts/runtime-neutrality-and-adapters.md)
for the distinction.

Continue to [Installation](./installation.md) for the forthcoming release
contract, then read [adaptive workflow](../concepts/adaptive-workflow.md) to
see how Nexus chooses a proportionate path.

