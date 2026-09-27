# Quartz Documentation Site for Cyberpunk Context Runners

## Summary and Problem Statement

Cyberpunk Context Runners has an open-source CLI and a substantial runtime-neutral engineering protocol, but its current repository documentation combines onboarding, conceptual explanation, command reference, and contributor material in one long README. The installation guidance says to make the repository available on `PATH` without providing a durable, versioned download flow. The resulting experience makes it harder for a new user to install the CLI confidently, understand how the roles and workflow relate, or navigate from a task to the relevant concept.

Create a public Quartz 5 documentation site in the `ccr` repository. The site will present the project as an interconnected knowledge graph while retaining a clear, linear onboarding path. The separate `cyberpunk-context-runners` repository will remain the authoritative CLI source and download repository. Its tagged source archives will be the initial distribution mechanism.

The first release must optimize for developers evaluating or adopting Cyberpunk Context Runners. It must also give active users and contributors direct routes into operational, architectural, and contribution material. The documentation will be curated in `ccr`; it will not be generated from or synchronized automatically with the CLI repository.

## Target Users and Use Cases

### Primary users

- Developers evaluating whether Cyberpunk Context Runners fits their coding-agent workflow.
- Developers installing the CLI for the first time on macOS or Linux.
- Developers initializing Cyberpunk in an existing repository and running their first Nexus-led task.

### Secondary users

- Active users looking up a CLI command, configuration field, runtime adapter, workflow rule, or troubleshooting procedure.
- Contributors learning the repository architecture, validation suite, and manual release process.
- Maintainers explaining how roles, skills, workflow stages, artifacts, worktrees, reviews, and memory connect.

### Core use cases

1. Evaluate the product from a concise landing page and understand what the CLI does and does not do.
2. Install a specific tagged CLI version, configure a persistent `PATH`, and verify the installation.
3. Initialize a project, validate the generated protocol, and issue a first task to The Nexus.
4. Navigate from a role or command to its prerequisites, artifacts, related concepts, and next steps.
5. Use local graphs, backlinks, tags, search, and a global graph to explore the system non-linearly.
6. Diagnose common installation, shell, runtime-registration, validation, and upgrade problems.
7. Understand how to contribute changes and how maintainers create a versioned CLI tag.

## Goals and Success Criteria

### Goals

- Establish `ccr` as the polished documentation and presentation site for Cyberpunk Context Runners.
- Give new adopters a short, reliable path from evaluation to a validated project installation.
- Replace mutable-branch download guidance with reproducible, semantic-version tag downloads.
- Express the protocol as a useful graph of concepts rather than a collection of isolated or overly long pages.
- Preserve a clear boundary between the documentation site and the open-source CLI repository.
- Provide an accessible, responsive visual identity that reflects the Cyberpunk theme without reducing readability.

### Success criteria

- On a clean supported macOS or Linux shell, a reviewer can follow only the published documentation to download a real tagged archive, configure `PATH`, run `cyberpunk --version`, initialize a temporary project, and run `cyberpunk validate` successfully.
- The production build completes with no broken internal links and uses the correct GitHub Pages base path for the `ccr` project site.
- The site contains the complete initial content inventory defined below.
- Every core concept page is reachable from at least one other content page and contains at least two intentional contextual links to related documentation.
- Local graph, backlinks, search or explorer navigation, and a global graph or equivalent site-wide graph entry are available and usable.
- The header exposes working links to the CLI GitHub repository and Buy Me a Coffee.
- The site remains usable at representative mobile and desktop widths and supports keyboard navigation with visible focus treatment.
- CLI-repository documentation or release-support changes are made on a dedicated branch and pass the repository's established verification suite before integration.

## Non-goals and Scope Boundaries

- Do not move the CLI source into `ccr`.
- Do not make `cyberpunk-context-runners` host the Quartz application.
- Do not automatically copy, mirror, or generate Quartz content from the CLI repository in the first release.
- Do not build a one-command installer, Homebrew formula, package-manager integration, or automated release pipeline in the first release.
- Do not make downloads from the mutable `main` branch the recommended installation path.
- Do not promise native Windows support. Windows Subsystem for Linux may follow the Linux instructions and must be described as such.
- Do not introduce a custom domain in the first release.
- Do not add analytics, account features, comments, a hosted backend, or other dynamic product services.
- Do not change canonical Cyberpunk workflow behavior merely to simplify the documentation.
- Do not publish a tag, push branches, enable GitHub Pages, or deploy without the separate authority required for those external actions.
- Do not render the existing `.cyberpunk/`, `agents/`, `skills/`, `plans/`, `tasks/`, or `specs/` development files as site content unless a future requirement explicitly selects individual files.

## Functional Requirements

### 1. Repository and site foundation

1. The Quartz site source, configuration, styles, and curated content must live in `ccr`.
2. The implementation must use the current stable Quartz 5 major version available at implementation time and pin the resolved dependencies in a committed lockfile.
3. Curated public pages must live in Quartz's designated content tree, separate from the repository's Cyberpunk development scaffolding.
4. The site must build locally through documented package scripts.
5. A GitHub Actions workflow must build the site and be suitable for deployment to the default GitHub Pages project URL for `ccr`.
6. Configuration must account for the `/ccr` project-site base path so assets and internal links work after deployment.
7. Build output, caches, installed dependencies, and other generated files must be ignored appropriately.

### 2. Global navigation and header

1. The primary header must include routes for:
   - Start Here
   - Concepts
   - CLI Reference
   - Contributing
2. The header must include an external link to `https://github.com/Stivi7/cyberpunk-context-runners`.
3. The header must include an external link to `https://buymeacoffee.com/noxsteve`.
4. External header controls must have accessible names and visually clear external-link behavior.
5. Search and graph exploration must be discoverable without requiring users to know Quartz conventions.

### 3. Landing page and guided onboarding

1. The landing page must state in plain language that Cyberpunk Context Runners is a runtime-neutral engineering-team protocol and that its Bash CLI installs and validates the protocol rather than launching model processes.
2. The primary call to action must lead to installation.
3. A secondary call to action must lead to the conceptual overview or global graph.
4. The landing page must show the guided journey:
   `Install -> First Run -> Understand -> Operate -> Contribute`.
5. The landing page must identify the currently documented stable CLI release and link to its tag in the CLI repository.

### 4. Initial content inventory

The first public version must include, at minimum, the following independently addressable content nodes. Closely related pages may be grouped into folders, but they must retain stable page URLs and graph identities.

#### Start Here

- Start Here overview
- What Cyberpunk Context Runners is
- Installation
- First project initialization
- First Nexus task
- Runtime setup overview
- Codex runtime setup
- Claude Code runtime setup
- Cursor runtime setup

#### Concepts

- Concepts overview
- Adaptive workflow and task classification
- Requirements discovery and The Fixer
- Native dispatch and concurrency
- Work packets and result contracts
- Git branches and worktree isolation
- Verification and Gatekeeper review
- Integration and delivery
- Skills
- Project memory and run state
- Runtime neutrality and generated adapters

#### Roles

- Roles overview
- The Nexus
- The Fixer
- The Operator
- The Mind
- The Interrogator
- The Fragmenter
- The Coder
- The Daemon
- The Neon
- The Grid Master
- The Gatekeeper

#### CLI Reference

- CLI overview
- `init`
- `sync`
- `validate`
- `status`
- Global help and version flags
- Configuration reference
- Generated project structure
- Exit behavior and diagnostics

#### Operations and guides

- Upgrading the CLI
- Troubleshooting installation and `PATH`
- Troubleshooting generated registrations and drift
- Manual tagged-release process

#### Contributing

- Contributing overview
- Development setup
- Test and verification commands
- Documentation contribution conventions

### 5. Knowledge-graph behavior

1. Pages must use meaningful internal links in prose and related-content sections; links added solely to inflate graph connectivity do not satisfy this requirement.
2. Each role page must link to the workflow stages it participates in, its input and output artifacts, relevant skills, and adjacent roles.
3. Each workflow page must link to participating roles, produced artifacts, applicable configuration, and the next or alternative stages.
4. Each CLI command page must link to relevant configuration, generated artifacts, troubleshooting, and user journeys.
5. The site must define and use a controlled initial tag taxonomy that includes at least `role`, `workflow`, `cli`, `runtime`, `artifact`, and `guide`.
6. Folder overview pages must explain the cluster rather than serving only as generated indexes.
7. Local graph views and backlinks must appear where supported without obscuring the main article.
8. A global graph or equivalent site-wide graph view must be reachable from primary navigation or the landing page.
9. The site must provide a file/folder explorer or equivalent hierarchical navigation in addition to graph navigation.
10. Orphan-page checking must exclude only intentional utility output such as the 404 page and generated tag indexes.

### 6. Tagged installation flow

1. The CLI repository must use semantic-version tags in the form `vMAJOR.MINOR.PATCH`.
2. The CLI's reported version and the public tag selected for release must agree.
3. The primary installation guide must download a specific tag archive from the CLI repository, never the mutable `main` branch.
4. The archive-based procedure must cover:
   - supported environment and prerequisites;
   - downloading a `.tar.gz` archive, with `.zip` as an optional alternative;
   - extracting it into a durable user-owned location under `~/.local/share/cyberpunk-context-runners/` or an equivalently explicit location;
   - adding the extracted CLI directory to the appropriate shell startup file;
   - reloading the shell or starting a new shell;
   - verifying command resolution and version output;
   - initializing and validating a sample project;
   - removing or upgrading that installation.
5. Instructions must distinguish zsh and Bash startup files where their behavior differs.
6. Instructions must explain how to detect and resolve a pre-existing `cyberpunk` command earlier on `PATH`.
7. The guide must not require `sudo` for the recommended user-level installation.
8. WSL guidance must refer users to the Linux flow and must not claim native Windows support.
9. The initial approach may rely on GitHub's automatically generated archive for a tag; it does not require a custom binary or attached release artifact.

### 7. CLI repository presentation

1. Any change to `cyberpunk-context-runners` must be developed on a dedicated branch created for the documentation/release-installation work.
2. Its README must remain useful when viewed independently but become a concise entry point rather than the complete product manual.
3. The README must contain:
   - a short product definition;
   - a compact tagged-download quick start;
   - the first initialization and validation commands;
   - a prominent link to the Quartz site;
   - links to contribution and license information.
4. README instructions and Quartz installation instructions must agree on tag format, archive layout, install location, `PATH` behavior, and verification commands.
5. Changes must preserve the CLI's runtime-neutral scope and must not claim that the Bash CLI launches or orchestrates provider sessions.

### 8. Visual design and accessibility

1. The default presentation must use a restrained cyberpunk visual identity rather than unmodified Quartz styling.
2. The palette must be dark-first with cyan and magenta accents. Grid, glow, or scan-line treatments must remain subtle and must not interfere with reading.
3. Light mode may use a quieter adaptation of the same identity and must remain readable if enabled.
4. Body text, code blocks, links, warnings, focus states, and graph labels must retain usable contrast.
5. The experience must be responsive across representative mobile and desktop widths.
6. All interactive controls must be reachable by keyboard and have visible focus treatment.
7. Motion and decorative effects must respect reduced-motion preferences.
8. The first release may use a typographic wordmark and CSS treatments; a custom illustrated logo is not required.

### 9. Source accuracy and maintenance

1. Conceptual documentation must be derived from the current canonical workflow, role, skill, configuration, and CLI behavior in `cyberpunk-context-runners`.
2. Public prose must distinguish configured intent from observed runtime behavior, matching the protocol's evidence rules.
3. Version-sensitive pages must identify the release they describe or link to the selected tag.
4. Contributor guidance must define how a documentation change is checked against the CLI repository before publication.
5. The site must expose a visible path for reporting documentation problems, using the appropriate GitHub repository link.

## User Journeys and Expected Behavior

### Journey 1: Evaluate and install

1. A new visitor opens the landing page and understands the product boundary within the first section.
2. They select Install and see supported systems, prerequisites, and a specific stable version.
3. They copy the tag-based download and extraction commands without needing to infer a repository path.
4. They add the documented install directory to their shell `PATH` and verify the exact CLI version.
5. They continue directly to First Project Initialization.

Expected result: the CLI resolves from a new shell, reports the documented version, and does not depend on a clone of mutable `main`.

### Journey 2: Initialize and run a first task

1. The user changes into an existing Git repository.
2. They run `cyberpunk init` for all runtimes or choose explicit runtime flags.
3. They run `cyberpunk validate` and inspect `cyberpunk status`.
4. They start their chosen coding-agent runtime normally.
5. They use a documented Nexus prompt and can follow links from Nexus to work packets, worktrees, Gatekeeper, and delivery.

Expected result: the user understands both the commands and the boundary between the CLI and the coding-agent runtime.

### Journey 3: Explore the protocol

1. The user opens a role page or selects a node in the graph.
2. They see the role's mission, inputs, outputs, participating stages, relevant skills, and adjacent roles.
3. Backlinks and related-content links let them traverse the protocol without returning to the landing page.

Expected result: graph clusters reflect real relationships among roles, stages, commands, runtimes, and artifacts.

### Journey 4: Resolve a problem

1. A user whose shell cannot find `cyberpunk` opens PATH troubleshooting from the installation page or command reference.
2. The guide helps them identify the active shell, startup file, resolved command path, and conflicting installations.
3. A user with generated-file drift can navigate from `validate` output to registration and drift troubleshooting.

Expected result: troubleshooting is linked from the point of failure and offers observable checks rather than generic advice.

### Journey 5: Contribute or release

1. A contributor follows the development setup and runs the discovered test suite.
2. A documentation contributor follows link, build, graph-connectivity, and accessibility checks.
3. A maintainer follows the manual release guide to verify the CLI version, test the branch, create a matching semantic tag, and confirm the generated archive before updating the documented stable release.

Expected result: code, tag, README, and Quartz documentation present one consistent versioned installation flow.

## Constraints and Non-functional Requirements

- The initial site must use Quartz and remain compatible with the current stable Quartz 5 major release selected during implementation.
- Node.js and package-manager versions required by Quartz must be documented and pinned where the chosen tooling supports pinning.
- The site must be a static build suitable for GitHub Pages; no server runtime may be required for readers.
- The default hosting URL is the GitHub Pages project URL associated with `Stivi7/ccr`.
- The implementation must preserve unrelated files and the existing Cyberpunk scaffolding in `ccr`.
- Work in `cyberpunk-context-runners` must occur on a dedicated branch and follow that repository's own verification and integration policy.
- External state changes—including pushing branches, creating a remote tag or GitHub Release, enabling Pages, and deploying—require explicit authority at execution time.
- Public documentation must not contain secrets, local filesystem paths, hidden run evidence, or machine-specific assumptions.
- Installation commands must avoid privileged writes in the recommended flow.
- The site must render useful core content even if optional graph interaction or client-side enhancements fail.
- The implementation must favor maintainable Quartz configuration and CSS over a fork of Quartz core.

## Considered Approaches and Accepted Decisions

### Documentation repository

1. **Quartz inside the CLI repository.** Keeps code and docs together but makes the source repository carry the full presentation application and its Node dependency lifecycle.
2. **Separate curated site in `ccr` — accepted.** Gives presentation and knowledge-graph content a focused home while keeping the CLI repository small and source-oriented. The cost is cross-repository drift, addressed through versioned links and explicit maintenance checks.
3. **Separate site with automated import or a submodule.** Reduces some duplication but couples builds, content structure, and repository availability. Deferred until there is evidence that manual curation is unsustainable.

### Information architecture

1. **One long manual.** Simple to author but weak for discovery and wastes Quartz's backlinks and graph model.
2. **Graph-only conceptual map.** Visually distinctive but creates a poor first-run experience for new adopters.
3. **Guided onboarding plus concept-level graph — accepted.** Provides a linear success path while letting roles, commands, stages, and artifacts form meaningful graph clusters.

### CLI distribution

1. **Download or clone `main`.** Minimal release work but irreproducible and unsuitable as the primary public installation method.
2. **Manual semantic-version tags with GitHub-generated archives — accepted.** Provides immutable, versioned downloads without an installer or release automation.
3. **Installer script and package managers.** Best eventual convenience but adds security, compatibility, and release-maintenance scope. Deferred.

### Hosting

1. **GitHub Pages from `ccr` — accepted.** Fits the static site, source location, and initial maintenance budget.
2. **Vercel, Netlify, or Cloudflare Pages.** Viable but introduces another hosting integration without a current requirement.
3. **Custom self-hosting.** Offers control but adds operational responsibility and is outside the first release.

### Visual direction

1. **Stock Quartz.** Lowest effort but does not express the project's identity.
2. **Heavily animated cyberpunk interface.** Visually strong but risks readability, accessibility, and distraction.
3. **Restrained accessible cyberpunk theme — accepted.** Uses typography, color, and subtle effects while keeping documentation primary.

## Edge Cases and Failure Behavior

- If no valid public semantic tag exists when the site is ready, the installation page must not silently fall back to `main`; publication of the stable-install claim waits for a verified tag.
- If the selected tag and `cyberpunk --version` disagree, release verification fails and documentation must not advertise that tag.
- If GitHub changes the archive's extracted directory naming, the commands and tests must be updated together before publication.
- If `~/.local/share` does not exist, the instructions must create the precise required directory safely.
- If a user's shell is neither zsh nor Bash, the guide must explain the general requirement and link to shell-specific PATH documentation without claiming an untested startup file.
- If `cyberpunk` already resolves elsewhere, the guide must show how to inspect command resolution and avoid silently running the wrong installation.
- If network download or extraction fails, commands must stop before modifying `PATH` and troubleshooting must identify the failed step.
- If JavaScript or the interactive graph fails, article content and ordinary navigation must remain usable.
- If the graph becomes visually dense, page-level graphs should favor local neighborhoods while the global graph remains an intentional exploration view.
- If a Quartz plugin required for explorer or graph behavior is unavailable or incompatible, implementation planning must select a maintained equivalent without weakening the navigation requirement.
- If an external header link is unreachable during verification, the failure must be reported rather than hidden.
- If the GitHub Pages workflow lacks repository permissions or Pages is not enabled, the build artifact must still be verifiable locally; deployment remains pending explicit repository configuration.
- If CLI behavior changes after a documentation release, the existing versioned documentation must not be rewritten to describe untagged behavior as though it were already released.

## Acceptance Criteria

1. `ccr` contains a pinned Quartz 5 site that installs dependencies and builds successfully using documented commands.
2. The GitHub Pages build configuration produces deployable static output with correct links and assets under the `ccr` project-site base path.
3. The site includes every page or independently addressable node in the initial content inventory.
4. The landing page communicates the product boundary and links to Installation and the conceptual or graph overview.
5. Primary navigation contains Start Here, Concepts, CLI Reference, and Contributing.
6. The header contains working, accessible links to `https://github.com/Stivi7/cyberpunk-context-runners` and `https://buymeacoffee.com/noxsteve`.
7. Local graphs, backlinks, hierarchical exploration, and a reachable global graph or equivalent are present and function in the production build.
8. Each core concept page is reachable from another content page and contains at least two intentional contextual internal links.
9. No unexpected orphan pages or broken internal links remain after verification.
10. Role pages link to relevant stages, artifacts, skills, and adjacent roles; CLI command pages link to configuration, outputs, guides, and troubleshooting.
11. The installation guide references a real semantic-version tag and never uses a mutable branch as its primary download source.
12. A clean macOS or Linux verification can follow the guide to download, extract, configure `PATH`, reload the shell, and run the documented `cyberpunk --version` successfully without `sudo`.
13. The same verification can initialize a temporary Git repository and complete `cyberpunk validate` successfully.
14. zsh, Bash, conflicting-command, upgrade, removal, and WSL expectations are addressed explicitly.
15. The CLI repository README and Quartz site agree on the version, tag URL shape, extraction location, PATH setup, initialization, and validation flow.
16. All changes made in `cyberpunk-context-runners` for this initiative are committed on a dedicated non-`main` branch and pass `bash tests/run.sh`; any skipped optional checks are reported with reasons.
17. The site is usable at representative mobile and desktop viewport widths, by keyboard, and with reduced-motion preferences.
18. Body text, code, links, controls, focus indicators, and graph labels retain usable contrast in supported color modes.
19. Existing Cyberpunk project scaffolding in `ccr` remains intact and is not unintentionally published as site content.
20. Pushes, remote tags, GitHub Releases, Pages enablement, and deployment occur only after explicit authorization.

## Dependencies and Risks

### Dependencies

- A supported Node.js environment and package manager compatible with the selected Quartz 5 release.
- A real semantic-version tag in `cyberpunk-context-runners` whose version matches the CLI output.
- GitHub Pages repository configuration and workflow permissions in `Stivi7/ccr`.
- Continued availability of the CLI repository and Buy Me a Coffee destination.
- Access to both repositories during planning, implementation, and cross-repository verification.

### Risks and mitigations

- **Cross-repository documentation drift:** Keep version-sensitive instructions tied to a real tag, require README/site consistency checks, and document the maintenance procedure.
- **Graph clutter without meaning:** Require concept-level pages, controlled tags, contextual link rules, and local graph neighborhoods.
- **Stale or misleading release instructions:** Verify installation from a clean supported shell against the actual tagged archive before advertising it.
- **Quartz or plugin changes:** Pin dependencies, commit the lockfile, avoid Quartz core forks, and verify production builds.
- **Base-path failures on GitHub Pages:** Treat `/ccr` asset and link behavior as an explicit build acceptance check.
- **Cyberpunk styling harming usability:** Keep effects subtle, preserve contrast and focus visibility, and respect reduced-motion preferences.
- **Scope growth from documenting every internal detail:** Follow the approved content inventory and link to canonical source where exhaustive internal detail would duplicate policy.
- **External action dependency:** Prepare code, workflows, and release instructions independently; clearly report when tag creation, Pages configuration, or deployment still awaits authority.

## Deferred Decisions

### Exact first public tag

- **Owner:** Cyberpunk Context Runners maintainer.
- **Reason:** The tag must match the verified CLI version at the moment the release branch is ready; choosing it during requirements discovery could conflict with intervening CLI changes.
- **Resolution stage:** Before final installation verification and before the site advertises a stable download.
- **Planning impact:** Non-blocking. Planning can use the semantic tag contract and parameterize verification against the selected release.

### Automated installer and package-manager distribution

- **Owner:** Product owner and CLI maintainer.
- **Reason:** The initial tagged-archive flow provides reproducibility without the additional security and maintenance surface of remote installers or package manifests.
- **Resolution stage:** Future distribution initiative after observing installation friction.
- **Planning impact:** Non-blocking and outside this release.

### Automated cross-repository documentation synchronization

- **Owner:** Documentation maintainer.
- **Reason:** Curated content is preferred initially; automation should be introduced only after recurring drift is observed and a stable source contract exists.
- **Resolution stage:** Future documentation-maintenance review.
- **Planning impact:** Non-blocking and outside this release.

### Custom domain

- **Owner:** Product owner.
- **Reason:** The default GitHub Pages project URL is sufficient for initial publication.
- **Resolution stage:** After the initial site is deployed and stable.
- **Planning impact:** Non-blocking; the first release must work entirely at the default project URL.
