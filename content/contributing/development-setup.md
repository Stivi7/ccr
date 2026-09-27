---
title: Development setup
description: Run the Quartz site locally while keeping the CLI separate.
kind: guide
tags:
  - guide
  - workflow
---

# Development setup

The documentation site lives in `ccr`; the executable CLI remains in the
separate Cyberpunk Context Runners repository.

Use Node 22 and npm 10.9.2 or newer compatible versions:

```bash
npm ci
npm run build -- --serve
```

Open `http://localhost:8080/ccr/`. Run `npm run build` for production output
in `public/`, or `npm run check` for TypeScript and formatting checks. The
build automatically prepares the local Quartz navigation plugin.

Edit pages in `content/` and follow [documentation conventions](./documentation-conventions.md)
to keep the graph connected. See [verification commands](./verification.md)
for available checks. The selected CLI tag `v0.4.0` is not published yet;
local site work does not publish the CLI or deploy the site.

Protocol changes belong to the canonical workflow, roles, and skills.
Read [work packets](../concepts/work-packets-and-result-contracts.md) and
[branches and worktrees](../concepts/branches-and-worktrees.md) before contributing.
