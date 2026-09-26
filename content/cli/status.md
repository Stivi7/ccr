---
title: status
description: Report configured policy and generated-state inspection without writing or claiming live capability.
kind: cli
tags:
  - cli
  - runtime
  - artifact
---

# status

`cyberpunk status` takes no options and reports initialization state, canonical
protocol state, configured runtimes, parallelism, configured maximum
subagents, model fallback policy, generated agent and skill counts, discovery
state, and active local-run count. It does not write files.

Its output is configuration and generated-state inspection, not proof that a
runtime can delegate or that a provider model is available. The difference is
central to [native dispatch and concurrency](../concepts/native-dispatch-and-concurrency.md).

See [configuration](./configuration.md) for reported settings, [generated
project structure](./generated-project-structure.md) for counted artifacts,
and [first project initialization](../start-here/first-project-initialization.md)
for the normal `init -> validate -> status` path. If generated state is drifted,
follow [registration troubleshooting](../guides/troubleshooting-registrations-and-drift.md).

