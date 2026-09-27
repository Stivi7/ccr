---
title: Documentation contribution conventions
description: Keep public pages curated, linked, source-accurate, and safe for forthcoming releases.
kind: guide
tags:
  - guide
  - artifact
---

# Documentation contribution conventions

Every authored page uses title, description, kind, and controlled tags. The
allowed tag vocabulary is `role`, `workflow`, `cli`, `runtime`, `artifact`, and
`guide`. Use relative Markdown links for authored internal references; make
links contextual rather than adding edges solely to inflate the graph.

Folder overviews explain their cluster, link each direct child, and offer a
reading path. Core concept pages need intentional outgoing context; role pages
must connect their stages, artifacts, skills, and adjacent roles; command pages
must connect configuration, generated output, troubleshooting, and a user
journey. Every authored page needs a meaningful incoming authored link.

Review version-sensitive prose against the manually maintained source map at
`docs/content-source-map.md` and the reviewed CLI commit. Do not add secrets,
machine-local paths, hidden run evidence, mutable-branch installation advice,
or a native-Windows claim. Keep the public release state forthcoming until the
release packet records real tag evidence.

Use [Skills](../concepts/skills.md) for instruction precedence, [manual tagged
release](../guides/manual-tagged-release.md) for later release maintenance, and
[test and verification commands](./verification.md) before submitting a change.
Report documentation problems through the appropriate repository issue channel.
