const ExternalMark = () => (
  <span aria-hidden="true" class="ccr-external-mark">
    ↗
  </span>
)

const HeaderNav = () => (
  <nav class="ccr-primary-nav" aria-label="Primary">
    <a href="/ccr/start-here/">Start Here</a>
    <a href="/ccr/concepts/">Concepts</a>
    <a href="/ccr/cli/">CLI Reference</a>
    <a href="/ccr/contributing/">Contributing</a>
    <span class="ccr-nav-separator" aria-hidden="true" />
    <a
      class="ccr-external"
      href="https://github.com/Stivi7/cyberpunk-context-runners"
      aria-label="Cyberpunk Context Runners CLI on GitHub (external site)"
    >
      CLI GitHub <ExternalMark />
    </a>
    <a
      class="ccr-external"
      href="https://buymeacoffee.com/noxsteve"
      aria-label="Buy Me a Coffee for Nox Steve (external site)"
    >
      Buy Me a Coffee <ExternalMark />
    </a>
  </nav>
)

HeaderNav.displayName = "CcrHeaderNav"
HeaderNav.beforeDOMLoaded = `
  const savedTheme = localStorage.getItem("theme")
  if (!savedTheme) localStorage.setItem("theme", "dark")
  document.documentElement.setAttribute("saved-theme", savedTheme ?? "dark")
`
HeaderNav.afterDOMLoaded = `
  const savedTheme = localStorage.getItem("theme")
  if (!savedTheme) localStorage.setItem("theme", "dark")
  const activeTheme = savedTheme ?? "dark"
  document.documentElement.setAttribute("saved-theme", activeTheme)
  document.body?.classList.remove("theme-dark", "theme-light")
  document.body?.classList.add("theme-" + activeTheme)
`

export const CcrHeaderNav = () => HeaderNav
