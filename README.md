# Cyberpunk Context Runners documentation

A Quartz site with interconnected guides, role references, search, backlinks,
and local/global graphs. This repository contains documentation, not the CLI.

- [CLI source](https://github.com/Stivi7/cyberpunk-context-runners)
- [Buy Me a Coffee](https://buymeacoffee.com/noxsteve)

## Local development

Use Node 22 and npm 10.9.2 or newer compatible versions.

```bash
npm ci
npm run build -- --serve
```

Open <http://localhost:8080/ccr/>. Run `npm run build` for production output in
`public/`. The build prepares the local navigation plugin automatically.
`npm run check` runs TypeScript and formatting checks.

Edit Markdown in `content/`, using relative links to connect related pages.
Configuration lives in `quartz.config.yaml`; custom styles are in
`quartz/styles/custom.scss`.

## Publication status

The selected CLI tag `v0.4.0` is not published yet. The installation guide
explains tagged archives and persistent shell PATH setup without claiming the
archive exists.

## GitHub Pages

In repository **Settings → Pages**, set the source to **GitHub Actions**. The
workflow builds the `public/` directory from `main`; only a manual run from
`main` can deploy it to the `github-pages` environment. Keep that environment
limited to the `main` branch and configure any required protection rules there.
