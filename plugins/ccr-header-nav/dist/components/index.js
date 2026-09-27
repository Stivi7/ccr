import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime"

const ExternalMark = () =>
  _jsx("span", { "aria-hidden": "true", class: "ccr-external-mark", children: "↗" })

const HeaderNav = () =>
  _jsxs("nav", {
    class: "ccr-primary-nav",
    "aria-label": "Primary",
    children: [
      _jsx("a", { href: "/ccr/start-here/", children: "Start Here" }),
      _jsx("a", { href: "/ccr/concepts/", children: "Concepts" }),
      _jsx("a", { href: "/ccr/cli/", children: "CLI Reference" }),
      _jsx("a", { href: "/ccr/contributing/", children: "Contributing" }),
      _jsx("span", { class: "ccr-nav-separator", "aria-hidden": "true" }),
      _jsxs("a", {
        class: "ccr-external",
        href: "https://github.com/Stivi7/cyberpunk-context-runners",
        "aria-label": "Cyberpunk Context Runners CLI on GitHub (external site)",
        children: ["CLI GitHub ", _jsx(ExternalMark, {})],
      }),
      _jsxs("a", {
        class: "ccr-external",
        href: "https://buymeacoffee.com/noxsteve",
        "aria-label": "Buy Me a Coffee for Nox Steve (external site)",
        children: ["Buy Me a Coffee ", _jsx(ExternalMark, {})],
      }),
    ],
  })

HeaderNav.displayName = "CcrHeaderNav"
HeaderNav.beforeDOMLoaded = `
  if (!localStorage.getItem("theme")) {
    document.documentElement.setAttribute("saved-theme", "dark")
  }
`

export const CcrHeaderNav = () => HeaderNav
