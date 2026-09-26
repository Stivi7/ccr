---
title: Integration and delivery
description: Merge approved work in dependency order and report only observed outcomes.
kind: workflow
tags:
  - workflow
  - artifact
  - role
---

# Integration and delivery

[The Nexus](../roles/nexus.md) merges only Gatekeeper-approved worker commits
into the resolved integration branch, in dependency order. After relevant
merges it runs assembled verification and obtains a different fresh Gatekeeper
review when native delegation is available.

Delivery names the verified branch and commit, acceptance results, worker
branches and commits, reviews, merges, changed files, commands run, omitted
checks, risks, and memory updates. It distinguishes agents that actually ran
concurrently from dependency-ordered or parent-context work. See [project
memory and run state](./project-memory-and-run-state.md) for the evidence model.

External actions such as push, pull request, tag, deployment, and protected
branch merge need separate authority. The preceding [verification and
Gatekeeper review](./verification-and-gatekeeper.md) gate does not grant it.
The project [configuration](../cli/configuration.md) records delivery policy
that can forbid those actions even after local work is complete.
