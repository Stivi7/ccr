---
title: Test and verification commands
description: Available local checks and publication boundaries.
kind: guide
tags:
  - guide
  - workflow
  - artifact
---

# Test and verification commands

After [development setup](./development-setup.md), use these local commands:

```bash
npm run check
npm run build
npm run build -- --serve
```

`check` runs TypeScript and formatting checks. `build` emits the site into
`public/`; `--serve` previews it at `http://localhost:8080/ccr/`. These
commands do not deploy Pages or verify a published CLI archive.

The CLI has its own tests in its separate repository. The selected `v0.4.0`
tag is not published yet; see the [manual release process](../guides/manual-tagged-release.md).
Additional site test and release automation is not included in this branch.

Record observed checks in the [result contract](../concepts/work-packets-and-result-contracts.md).
See [Gatekeeper](../roles/gatekeeper.md) for the protocol's review role and
[integration and delivery](../concepts/integration-and-delivery.md) for reporting limitations.
