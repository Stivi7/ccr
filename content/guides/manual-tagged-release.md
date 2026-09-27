---
title: Manual tagged-release process
description: Release a CLI archive only when the exact tag, commit, README, and verification evidence agree.
kind: guide
tags:
  - cli
  - guide
  - artifact
---

# Manual tagged-release process

## Release status: forthcoming

The reviewed CLI source is commit `089baa2` and reports version `0.4.0`, but
there is no documented public semantic tag. Before publishing, a maintainer
selects the exact `vMAJOR.MINOR.PATCH` tag and the CLI commit it represents.

The CLI README, selected version, and tag-target commit must agree. Run the
complete CLI suite on the selected base and again after the README change; keep
the logs and exit status with the release record. If integration changes the
target commit, test that actual commit again.

After the tag is published, verify that it resolves to the recorded commit,
download the real archive, and ensure its embedded README matches the site.
Test Ubuntu/Bash, macOS/Bash, and macOS/zsh with a temporary home and the
documented startup file. Each check reloads the shell configuration, refreshes
command lookup, then runs `cyberpunk --version`, `init`, and `validate`.

Update the site from its forthcoming placeholder only after those facts match.
Consult [Installation](../start-here/installation.md), [upgrading](./upgrading.md),
[global version flags](../cli/help-and-version.md), and [documentation
conventions](../contributing/documentation-conventions.md) when maintaining
this contract.
