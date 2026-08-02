---
title: "`antora serve` stays supplemental — for now"
description: >-
  Upstream closed #1202. The live preview loop ships as antora-serve. Full argument on the blog;
  here is the tracker progression and where things stand.
date: 2026-08-02
tag: antora-serve
---

[Antora #1202](https://gitlab.com/antora/antora/-/issues/1202) asked for a built-in `antora serve`: generate, HTTP, watch local sources, live reload, no new dependencies. [MR !1109](https://gitlab.com/antora/antora/-/merge_requests/1109) was closed with it.

Upstream’s close: author-mode watch cannot see remote repos; new CLI commands should arrive via an extension system that does not exist yet; no more CLI investment until [Commander is removed under the trusted-dependencies ADR (#1138)](https://gitlab.com/antora/antora/-/issues/1138); IDE AsciiDoc preview and UI-bundle reload are the preferred day-to-day path; further debate belongs in chat, not the issue tracker. A standalone library was called the simple path — and using antora-supplemental’s package was explicitly fine.

Progression in short:

1. **Proposal** — dependency-free `serve` on the Antora CLI.
2. **Decline** — not in core; wait for CLI plugins after Commander eradication; prefer IDE/UI workflows.
3. **Follow-up on the ticket** — site-level preview is the Antora artifact; gating on unimplemented CLI extensibility leaves authors blocked.
4. **Maintainer reply** — architectural choice; discuss philosophy in chat; library / supplemental package acceptable.
5. **Shipped here** — [`@antora-supplemental/serve`](https://github.com/antora-supplemental/antora-serve) (optional [`incremental`](https://github.com/antora-supplemental/antora-incremental) dirty-set rebuilds).

The ask was never “put an HTTP server in the generator.” It was `antora serve` on the **CLI wrapper**, library underneath — the same thin-CLI pattern the `antora` meta-package already uses for generate. That case — and why a bare CLI makes a second command cheap to audit, not radioactive — is written up on the blog:

**[Blog: `antora serve` belongs on the CLI wrapper](/blog/2026-08-02-antora-serve-belongs-on-the-cli/)**

Until upstream puts serve on the default `antora` install (or registers it as a first-party CLI command over a sibling package), authors keep installing the supplemental binary. The capability exists. The mindshare path still does not.

Related: [Blog argument](/blog/2026-08-02-antora-serve-belongs-on-the-cli/) · [antora-serve](https://github.com/antora-supplemental/antora-serve) · [Earlier ship note](/news/2026-07-20-antora-serve-ships/) · [Antora #1202](https://gitlab.com/antora/antora/-/issues/1202)
