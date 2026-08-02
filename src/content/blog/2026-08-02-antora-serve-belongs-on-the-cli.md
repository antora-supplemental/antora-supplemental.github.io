---
title: "`antora serve` belongs on the CLI wrapper"
description: >-
  Live site preview is not an engine feature request. It is a thin CLI command over a library —
  and gating that on an unfinished Commander rewrite leaves authors without the default Antora loop.
date: 2026-08-02
tag: antora-serve
---

Antora exists to assemble documentation sites: multi-repo content, xrefs, nav, aliases, the composed artifact. Authors who are shaping that site need to regenerate and look at *that* artifact while they work. Single-file IDE AsciiDoc preview and UI-bundle gulp reload do not substitute for it. They exercise different tools.

The ask has always been simple: ship a live preview loop people can run without a scavenger hunt.

## What was proposed (and what was not)

Nobody serious is asking to fold an HTTP server into `@antora/site-generator`. The generator should stay the generator.

The CLI is a **wrapper**. The `antora` meta-package already installs that wrapper plus the site generator. A `serve` subcommand on the wrapper — implemented by calling a sibling library that watches local worktrees, regenerates, and live-reloads — keeps engine boundaries clean and gives authors the only UX that wins mindshare: `antora serve`.

That is ordinary packaging. Thin CLI. Fat library. Default install carries the author loop; CI that wants a skinny tree can depend on the engine packages alone, or omit what it does not invoke. Discoverability should not be opt-in research. Download weight for CI can be.

## What upstream did

[Antora #1202](https://gitlab.com/antora/antora/-/issues/1202) proposed `antora serve` with no new dependencies (Node `http` + `fs.watch`). Merge request [!1109](https://gitlab.com/antora/antora/-/merge_requests/1109) was closed with the issue.

The stated reasons, compressed:

1. **Author-mode scope** — a watcher cannot see remote git content sources, so the feature supposedly misrepresents what rebuilds.
2. **CLI commands should come from extensions** — but that requires a CLI plugin system that does not exist yet.
3. **Do not grow the CLI until Commander is eradicated** — part of the [trusted-dependencies ADR (#1138)](https://gitlab.com/antora/antora/-/issues/1138): replace Commander with Node’s argv parser and stop maintaining untrusted suppliers.
4. **Authoring philosophy** — prudent users preview pages in the IDE; whole-site builds are rare; UI hot reload covers design work.
5. **Process** — further disagreement belongs in chat, not the tracker.

On the supplemental package that already ships the capability, the close was explicit: fine, people can use that. Core will not hastily add a “half-solution.”

## Where that reasoning fails

**Scope is a docs note, not a veto.** Local-worktree watch is a known, honest limitation. Authors with local clones still need the loop. Remotes were never the claim.

**Philosophy substitutes the wrong artifact.** Day-to-day Antora work that cares about aggregation, xrefs, and nav *is* whole-site generation. Telling people to skip the generator for daily authoring is telling them to skip Antora’s hard parts.

**“Extension someday” is a gate on vaporware.** Extensible CLI commands are a real architectural goal. Blocking a one-command, dependency-free author tool on that redesign prioritizes speculative plumbing over a need that already exists. If the CLI is deliberately bare — one real command, `generate` — then adding a second command that only wires a library is exactly the class of change that should be cheap to audit. Making the bare CLI an argument *against* a trivial subcommand is backwards.

**Commander is a sequencing trap, not a serve objection.** Commander.js is a mature argv/help library, not a rickety prototype. Wanting fewer untrusted npm suppliers is a coherent sustainability policy. Designing CLI *extensibility* on Commander while planning to delete Commander is rightly avoided. None of that requires freezing `antora serve` off the wrapper forever, or pushing continuity into chat-land where tracker history dies. A library behind `antora serve` does not cement Commander as the extension API. It is one more action handler — or, after a stdlib argv migration, one more branch in a thin dispatcher.

**“Library is the simple path” only works if the library is the default path.** A standalone package that never becomes `antora serve` (and never rides the `antora` meta-package) keeps the architecture tidy and the UX second-class. Supplemental can ship the bytes. It cannot be the first thing people see when they install Antora.

## The policy that would actually fit the architecture

| Layer | Role |
| --- | --- |
| `@antora/site-generator` | Engine. Unchanged. |
| `@antora/serve` (or equivalent) | Library: watch, generate, HTTP, reload. |
| `@antora/cli` | Wrapper: `generate`, `serve`, help/version. |
| `antora` meta-package | Default box for humans: CLI + generator + serve. |

CI omits or ignores what it does not need. Authors type `antora serve`. Core maintainers keep generator purity. That is the boundary Dan says he wants, with the discovery half filled in.

## What we do in the meantime

[@antora-supplemental/serve](https://github.com/antora-supplemental/antora-serve) is that library-shaped tool today: peer on Antora’s playbook builder and site generator, no fork of the engine. Pair it with [@antora-supplemental/incremental](https://github.com/antora-supplemental/antora-incremental) when full rebuilds get expensive. It is the supplemental charter working as advertised — and it is still a consolation prize next to a first-party `antora serve`.

Upstream can keep the engine lean. It should stop pretending that a thin CLI wrapper growing one author-facing subcommand is the same risk as expanding the generator — or that chat is an adequate substitute for a durable tracker record when the decision affects every docs author who installs the default box.
