---
title: "`antora serve` was declined. We shipped it anyway."
description: >-
  antora-serve brings generate, serve, watch, and live-reload for Antora playbooks. Optional dirty-set rebuilds via antora-incremental.
date: 2026-07-20
tag: antora-serve
---

Authors do not preview Antora sites one file at a time. They preview the composed multi-repo site — the thing Antora exists to build. IDE AsciiDoc preview and gulp reload of a UI bundle do not replace that loop. Upstream preferred an unimplemented CLI plugin system over a small `serve` command in core. Fair enough. The need did not vanish with the decision.

[@antora-supplemental/serve](https://github.com/antora-supplemental/antora-serve) is the standalone answer: generate, serve, watch local sources, live-reload. Peer dependency on Antora. No fork of the generator. Point it at your playbook and work.

Full rebuilds on every save get expensive. Pair serve with [@antora-supplemental/incremental](https://github.com/antora-supplemental/antora-incremental) and you get a dependency manifest, a dirty-set CLI, and partial reconvert: pages outside the dirty set reuse prior HTML when they can. Playbook, UI, or `antora.yml` changes still force a full convert. That is the correct safety valve.

Status is honest: v0.1, local watch and live reload. Remote git content sources are not polled. The architecture write-up lives on the docs hub under site rebuild (v1/v2). Read that before inventing a second pipeline.

Core declined the command. Docs authors still need it. Shipping it here is not defiance — it is the supplemental charter working as advertised.

Related: [antora-serve](https://github.com/antora-supplemental/antora-serve) · [antora-incremental](https://github.com/antora-supplemental/antora-incremental) · [Antora #1202](https://gitlab.com/antora/antora/-/issues/1202)
