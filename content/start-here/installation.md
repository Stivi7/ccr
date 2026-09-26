---
title: Installation
description: The forthcoming tagged-archive installation contract for the Cyberpunk CLI.
kind: guide
tags:
  - cli
  - guide
  - runtime
---

# Installation

## Release status: forthcoming

The source reviewed for these docs is CLI commit `089baa2`, which reports
`Cyberpunk CLI v0.4.0`. The selected first tag is `v0.4.0`, but it is **not
published yet**. Do not run the commands below until that archive exists, and
do not substitute a mutable branch as an installation source.

The future archive URL shape is:

```text
https://github.com/Stivi7/cyberpunk-context-runners/archive/refs/tags/<CLI_TAG>.tar.gz
```

Use this procedure once `v0.4.0` is published. For a later release, replace
only `CLI_TAG` with its published semantic tag. It checks the archive, retains
each release for rollback, and updates `current` only after the CLI is
executable.

```bash
(
set -eu

CLI_TAG="v0.4.0"
INSTALL_ROOT="$HOME/.local/share/cyberpunk-context-runners"
RELEASE_DIR="$INSTALL_ROOT/releases/$CLI_TAG"
DOWNLOAD_DIR="$(mktemp -d)"
ARCHIVE="$DOWNLOAD_DIR/cyberpunk-context-runners.tar.gz"

if [ -e "$RELEASE_DIR" ] || [ -L "$RELEASE_DIR" ]; then
  printf 'Release directory already exists: %s\n' "$RELEASE_DIR" >&2
  exit 1
fi
if [ -e "$INSTALL_ROOT/current" ] && [ ! -L "$INSTALL_ROOT/current" ]; then
  printf 'Refusing non-symlink current path: %s\n' "$INSTALL_ROOT/current" >&2
  exit 1
fi

curl --fail --location \
  --output "$ARCHIVE" \
  "https://github.com/Stivi7/cyberpunk-context-runners/archive/refs/tags/$CLI_TAG.tar.gz"
tar -tzf "$ARCHIVE" >/dev/null
mkdir -p "$RELEASE_DIR"
tar -xzf "$ARCHIVE" --strip-components=1 -C "$RELEASE_DIR"
test -x "$RELEASE_DIR/cyberpunk"
ln -sfn "$RELEASE_DIR" "$INSTALL_ROOT/current"
test -x "$INSTALL_ROOT/current/cyberpunk"
rm -f "$ARCHIVE"
rmdir "$DOWNLOAD_DIR"
)
```

This uses no `sudo`. The optional `.zip` route requires `unzip`; use the same
tag URL shape with `.zip` and extract its repository root into `RELEASE_DIR`.

Supported environments are macOS and Linux; WSL follows the Linux flow. Native
Windows support is not claimed. Prerequisites are a POSIX shell, `curl`, `tar`,
and `git`. Add the `current` directory to `PATH` only after a successful
extraction:

```bash
export PATH="$HOME/.local/share/cyberpunk-context-runners/current:$PATH"
```

For zsh, place that line in `~/.zshrc`, then reload and verify it:

```zsh
source ~/.zshrc
rehash
type -a cyberpunk
command -v cyberpunk
cyberpunk --version
```

Interactive Bash usually reads `~/.bashrc`, while macOS/login Bash commonly
reads `~/.bash_profile` (or `~/.profile` when no Bash profile exists). Add the
same export line to the startup file your Bash session actually reads, then:

```bash
source ~/.bashrc # use ~/.bash_profile or ~/.profile when that is your startup file
hash -r
type -a cyberpunk
command -v cyberpunk
cyberpunk --version
```

Before and after setup, inspect conflicts with `type -a cyberpunk` and
`command -v cyberpunk`; the expected command resolves through `current/cyberpunk`.
After the version command reports the release's documented value, verify a
fresh project:

```bash
SAMPLE_PROJECT="$(mktemp -d)"
cd "$SAMPLE_PROJECT"
git init
cyberpunk init
cyberpunk validate
```

Then continue to [first project initialization](./first-project-initialization.md).

## Remove an installation

To remove one older release, first confirm that it is not the target of
`current`, then remove only that release directory:

```bash
INSTALL_ROOT="$HOME/.local/share/cyberpunk-context-runners"
CLI_TAG="vMAJOR.MINOR.PATCH"
RELEASE_DIR="$INSTALL_ROOT/releases/$CLI_TAG"

if [ "$(readlink "$INSTALL_ROOT/current")" = "$RELEASE_DIR" ]; then
  printf 'Refusing to remove the current release; repoint current first.\n' >&2
  exit 1
fi
rm -rf "$RELEASE_DIR"
```

To remove every installed release, delete the user-owned install root:

```bash
rm -rf "$HOME/.local/share/cyberpunk-context-runners"
```

Finally, manually remove this exact line from the shell startup file where you
added it (`~/.zshrc`, `~/.bashrc`, `~/.bash_profile`, or `~/.profile`):

```bash
export PATH="$HOME/.local/share/cyberpunk-context-runners/current:$PATH"
```

Start a new shell, or reload that file and refresh command lookup, before
checking `command -v cyberpunk` again.

See [PATH troubleshooting](../guides/troubleshooting-installation-and-path.md)
for a failed lookup and [manual tagged releases](../guides/manual-tagged-release.md)
for maintainer release guidance.
