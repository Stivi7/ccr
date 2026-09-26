# Public content source map

This map records the manually reviewed sources for the first forthcoming-state
documentation graph. It is a maintenance checklist, not an automated sync,
import, mirror, or publication mechanism.

## CLI source boundary

- Repository: `Stivi7/cyberpunk-context-runners`
- Reviewed commit: `089baa24e49e85eb5b99f25d766cf9d3d6583f78` (`089baa2`)
- Observed version output: `Cyberpunk CLI v0.4.0`
- Release state represented here: `forthcoming`; no semantic tag is recorded.

## Manually reviewed sources

| Public content cluster | Canonical source reviewed | Facts carried into content |
| --- | --- | --- |
| Landing, Start Here, runtime setup | `README.md`; `cyberpunk`; `templates/.cyberpunk/config.yml` | Runtime-neutral boundary, supported registrations, initialization flow, configured intent versus observed capability. |
| Installation, upgrading, PATH guide | `README.md`; `cyberpunk`; `lib/project-paths.bash` | CLI layout requires the script beside `lib/`; commands and version output; tagged archive guidance remains forthcoming until a real tag exists. |
| CLI command reference | `cyberpunk`; `lib/config.bash`; `lib/generated-assets.bash`; `lib/project-paths.bash` | `init`, `sync`, `validate`, `status`, help/version options, safety behavior, configuration, generated assets, diagnostics. |
| Generated project structure and drift guide | `cyberpunk`; `lib/generated-assets.bash`; templates under `templates/` | Canonical files, adapters, generated manifest hashes, collisions, drift, reviewed protocol upgrade behavior. |
| Concepts and roles | `templates/.cyberpunk/workflow.md`; `templates/agents/*.md`; `templates/skills/README.md`; `templates/skills/core/*/SKILL.md` | Adaptive workflow, role ownership, worktree/review/delivery evidence, skill precedence, memory boundaries. |
| Contributor guidance and release process | `README.md`; `tests/run.sh`; `tests/*.bash` | Dependency-free CLI suite command and the separation between local documentation work, release evidence, and external authority. |

## Review procedure

Before changing version-sensitive public prose, compare the selected CLI commit,
its `cyberpunk --version` output, command behavior, and README with this map.
Record a new release value only through the dedicated release-finalization
packet after its cross-repository and archive evidence succeeds. Do not replace
this manual review with an automated synchronization behavior.

