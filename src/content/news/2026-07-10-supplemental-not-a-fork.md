---
title: Supplemental is not a soft fork of Antora
description: >-
  Why antora-supplemental exists: fill GitHub-shaped gaps Antora will not maintain, without competing with the core toolchain.
date: 2026-07-10
tag: Philosophy
---

Antora builds documentation sites from AsciiDoc across many repositories. That job is hard, and the core project is right to keep its focus there. What it does *not* do — by design — is maintain GitHub-native assets: Actions, repository templates, org workflow catalogs, and a chunk of the theming and discovery surface that GitHub docs authors need every week.

That is the opening. **antora-supplemental** exists to fill it. Not to rebrand Antora. Not to maintain a long-lived parallel core. Not to argue that GitLab hosting was a mistake.

The rule is simple: stay complementary. Ship Actions that hand off cleanly to the official Pages deploy path. Ship overlays and composed themes instead of “replace the whole UI or leave.” Ship registries so extensions are findable. Prototype in forks when the goal is an upstream patch — then contribute back.

Soft forks fail because they become brands. Supplemental work succeeds when it stays boring: a package you add, a template you click, a toggle that respects your existing bundle. If a feature belongs in Antora core, we say so and we track the issue. If it belongs on GitHub and Antora will not host it, we ship it here.

That is the mandate. Full stop. Everything else — dark mode, Valentus, serve, incremental rebuilds, alias redirects — is an instance of the same idea.

Related: [Philosophy on the welcome site](/#philosophy) · [Docs hub](https://docs.antora-supplemental.org/) · [GitHub org](https://github.com/antora-supplemental)
