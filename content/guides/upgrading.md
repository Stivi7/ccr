---
title: Upgrading the CLI
description: Upgrade through a future tagged archive without losing a rollback path.
kind: guide
tags:
  - cli
  - guide
---

# Upgrading the CLI

## Release status: forthcoming

No documented CLI tag archive is available yet. When a matching semantic tag is
available, install it side by side under
`~/.local/share/cyberpunk-context-runners/releases/<CLI_TAG>/`, then repoint
the `current` link to that release. Keep the previous release directory until
you have run `cyberpunk --version`, `cyberpunk validate`, and your normal
project checks.

The upgrade flow does not use a mutable branch or `sudo`. It preserves the
layout in which `cyberpunk` sits beside its required `lib/` files. Roll back by
repointing `current` to a retained older release, then start a new shell or
refresh lookup with `rehash` for zsh or `hash -r` for Bash.

Before changing anything, inspect `type -a cyberpunk` and `command -v
cyberpunk` to avoid upgrading one installation while another wins on `PATH`.
Read [Installation](../start-here/installation.md) for the future archive
contract, [PATH troubleshooting](./troubleshooting-installation-and-path.md)
for conflicts, and [manual tagged release](./manual-tagged-release.md) for
maintainer release guidance.
