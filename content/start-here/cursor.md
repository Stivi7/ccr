---
title: Cursor runtime setup
description: Inspect the generated Cursor agents, skill registrations, and adapter after initialization.
kind: runtime
tags:
  - runtime
  - guide
---

# Cursor runtime setup

Initialize Cursor explicitly with `cyberpunk init --runtime cursor`, or use
plain `cyberpunk init` to include all supported registrations. The CLI writes
agent definitions under `.cursor/agents/`, skill wrappers under
`.cursor/skills/`, and the Cyberpunk adapter at `.cursor/rules/cyberpunk.mdc`.

The adapter directs Cursor to canonical workflow policy; it does not start a
provider session or guarantee native-agent availability. Run [validate](../cli/validate.md)
after setup, keep the [runtime setup](./runtime-setup.md) distinction in mind,
and follow [registration and drift troubleshooting](../guides/troubleshooting-registrations-and-drift.md)
before replacing a modified generated file.

