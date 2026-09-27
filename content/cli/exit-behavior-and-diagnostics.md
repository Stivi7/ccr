---
title: Exit behavior and diagnostics
description: Read CLI success, warning, and error output as observable command evidence.
kind: cli
tags:
  - cli
  - guide
---

# Exit behavior and diagnostics

The CLI prints informational, success, warning, and error messages. Successful
commands complete with a zero exit status; invalid commands or options, missing
required values, unsafe destinations, and failed validation return a nonzero
status. `--help` and `--version` complete successfully when used without extra
arguments.

Diagnostics are intentionally specific: a stale protocol asks for review before
sync, a modified generated asset is called drift, and an unowned native path is
a collision. Preserve the command, output, and exit status when escalating a
problem; they are evidence for [verification and Gatekeeper review](../concepts/verification-and-gatekeeper.md).

Check [configuration](./configuration.md) and [generated project structure](./generated-project-structure.md)
for the artifact involved. Continue with [first project initialization](../start-here/first-project-initialization.md)
or use [installation and PATH troubleshooting](../guides/troubleshooting-installation-and-path.md)
when the command is not resolving at all.
