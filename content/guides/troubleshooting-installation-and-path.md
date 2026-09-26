---
title: Troubleshooting installation and PATH
description: Diagnose archive setup, shell startup files, and conflicting cyberpunk commands.
kind: guide
tags:
  - cli
  - guide
---

# Troubleshooting installation and PATH

The public tagged-archive flow is forthcoming. Until a real tag is verified,
do not replace it with a mutable-branch install. When the tagged procedure is
available, first check whether `cyberpunk` is already found:

```bash
type -a cyberpunk
command -v cyberpunk
```

The expected path ends in `current/cyberpunk`. If a different command resolves
first, remove or reorder the older PATH entry deliberately; do not assume the
new extraction is active. Confirm that the selected release contains an
executable `cyberpunk` beside `lib/` before changing `PATH`.

For zsh, update `~/.zshrc`; for interactive Bash, update `~/.bashrc`; on macOS
or a login Bash shell, use `~/.bash_profile`, falling back to `~/.profile` when
no Bash profile exists. Start a matching new shell or source the file, then run
`rehash` for zsh or `hash -r` for Bash. WSL follows the Linux procedure;
native Windows support is not claimed.

If the download fails, stop before changing `PATH` and retry only after the
archive request succeeds. Continue with [Installation](../start-here/installation.md),
[upgrading](./upgrading.md), or [exit behavior and diagnostics](../cli/exit-behavior-and-diagnostics.md).

