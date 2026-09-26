---
title: Troubleshooting generated registrations and drift
description: Resolve generated-asset collisions, modified wrappers, and canonical-policy upgrades safely.
kind: guide
tags:
  - cli
  - guide
  - runtime
---

# Troubleshooting generated registrations and drift

Run `cyberpunk validate` first and preserve its output. It checks canonical
policy, configured runtimes, managed instruction blocks, generated manifest
hashes, collisions, and drift without writing. A configured runtime does not
prove that its provider or native-agent feature is available.

A collision means the CLI found an unowned native path and will not replace it
silently. Decide whether that path is project-owned or should become a reviewed
generated registration. Drift means a generated file no longer matches its
recorded hash; inspect the change before using `cyberpunk sync --force` or
`cyberpunk init --force` to refresh framework-owned assets.

If sync requests a canonical protocol upgrade, review workflow, roles, and
skills before forcing any new generated registration. See [validate](../cli/validate.md),
[sync](../cli/sync.md), and [generated project structure](../cli/generated-project-structure.md)
for the checked artifact contract. Return to [runtime setup](../start-here/runtime-setup.md)
after the project is valid again.

