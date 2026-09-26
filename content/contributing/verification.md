---
title: Test and verification commands
description: Use repository-native checks and distinguish unavailable checks from passing evidence.
kind: guide
tags:
  - guide
  - workflow
  - artifact
---

# Test and verification commands

Run the verification commands established by the repository and affected scope;
do not invent a passing command because an expected tool is absent. Before the
site foundation and verification packet are integrated, this content packet has
no package tooling or automated site checker on its base. Its evidence is a
manual inventory, frontmatter, controlled-tag, relative-link, incoming-link,
and semantic-link audit.

After the site verification tooling is integrated, use the documented content,
build, browser, accessibility, release, and workflow checks from that packet.
Keep external reachability, archive installation, tag publication, and Pages
deployment separate: unavailable authority or network evidence is not a pass.

Record command, exit status, meaningful output, omitted checks, and known
baseline failures in the [result contract](../concepts/work-packets-and-result-contracts.md).
The [Gatekeeper](../roles/gatekeeper.md) independently reruns relevant checks;
then [integration and delivery](../concepts/integration-and-delivery.md) reports
only what was observed.

