# Scaffolding cleanup

## Summary and Problem Statement

Generated projects ship `plans/`, `tasks/`, and `examples/` although execution
artifacts are maintained under `.cyberpunk/runs/`. Remove this redundant
scaffolding and align the CLI and CCR documentation with the actual workflow.

## Target Users and Use Cases

Maintainers and developers initializing or updating Cyberpunk projects should
see a minimal structure and know where requirements and execution records live.

## Goals and Success Criteria

- Fresh scaffolds omit the three obsolete directories.
- Approved PRDs remain in `specs/`, with the existing approval and commit step unchanged.
- Execution plans, work packets, and evidence remain under `.cyberpunk/runs/`.
- Current documentation describes the same structure as the CLI generates.

## Non-goals and Scope Boundaries

No changes to role responsibilities, runtime registration, release versions,
deployment, or the PRD approval/commit/handoff gates. No automatic deletion of
existing project content, new testing framework, or broad review campaign.
Historical committed PRDs and run evidence remain unchanged.

## Functional Requirements

1. Remove shipped `plans/` and `tasks/` placeholders and the bundled `examples/`
   tree from CLI templates and the corresponding known scaffold files in CCR.
2. Preserve `specs/` and all existing approved requirements documents.
3. Correct current README, generated-structure documentation, and any canonical
   instructions that explicitly prescribe the obsolete artifact directories.
   Generic references to planning or tasks are not obsolete and remain valid.
4. Fresh initialization must not recreate the removed scaffold directories.
5. Initialization and synchronization of existing projects must preserve their
   `plans/`, `tasks/`, and `examples/` contents, including under force refresh.
6. Adjust existing checks that require the removed bundled example or obsolete
   scaffold layout; do not add a broader test suite.

## User Journeys and Expected Behavior

A new user initializes a project and receives `specs/` plus the established
protocol/runtime scaffolding, without redundant planning or example folders.
An existing user updates safely: their old directories remain untouched, while
updated documentation points to `specs/` and `.cyberpunk/runs/`.

## Constraints and Non-functional Requirements

Both cleanup branches start from freshly fetched `origin/main`: CCR base
`3baa61833203000f628d9753933a7f3dcbab44e3`; CLI base
`cad86796061887e9bd8efd1b381ed7208fdbf50a`. Use one dedicated CLI worktree.
Keep changes small, preserve unrelated work, and use only targeted checks of
the affected scaffolding behavior. No push, PR, merge into main, or publication
is authorized by this cleanup request.

## Considered Approaches and Accepted Decisions

Accepted: remove obsolete shipped scaffolding without deleting it from existing
projects. Rejected: an automatic cleanup migration, which risks user data.
Keeping empty placeholders was rejected because it perpetuates the confusion.

## Edge Cases and Failure Behavior

Nonempty or modified user directories are never pruned. Stop and report any
unexpected authored content in a repository path selected for removal rather
than assuming it is disposable. Do not edit historical PRDs merely because
they describe the previous layout.

## Acceptance Criteria

- CLI templates and CCR no longer ship the identified obsolete scaffold files.
- Fresh initialization creates no root `plans/`, `tasks/`, or `examples/`.
- Existing user files under those paths survive initialization/synchronization.
- PRD paths and the approved-PRD commit step remain unchanged.
- Current CLI and CCR documentation agrees on artifact locations.
- Any omitted verification is reported honestly; no extra test suite is introduced.

## Dependencies and Risks

The CLI copies templates and has documentation assertions about the bundled
example. Those references must be adjusted together. CCR includes both public
documentation and installed protocol scaffolding; both need scoped consistency.

## Deferred Decisions

None. Future deletion of obsolete directories in user projects would require a
separate, explicitly authorized migration design.
