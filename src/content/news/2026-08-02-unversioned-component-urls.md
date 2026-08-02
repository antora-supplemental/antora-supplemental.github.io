---
title: Unversioned component URLs
description: >
  The former alias-component-to-latest extension is now unversioned-component-urls —
  choose selector (default) or alias-to-latest for bare /component/ paths.
tag: unversioned-component-urls
pubDate: 2026-08-02
---

Bare `/component/` URLs still 404 on numbered-only Antora components. The stopgap extension now has a name that matches the choice:

**[unversioned-component-urls](https://github.com/antora-supplemental/antora-unversioned-component-urls)** — default `mode: selector` (version chooser), optional `mode: alias` for redirect-to-latest.

Formerly `alias-component-to-latest`. GitHub redirects the old repo URL; update playbook `require` / dependency keys to `@antora-supplemental/unversioned-component-urls`.

Related: [antora/antora#291](https://gitlab.com/antora/antora/-/issues/291) · [Antora use case](https://docs.antora.org/antora/latest/extend/extension-use-cases/#redirect-from-component-to-latest-version)
