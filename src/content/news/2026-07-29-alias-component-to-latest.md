---
title: Stop pasting the “latest” redirect. Install it.
description: >-
  alias-component-to-latest packages Antora’s component-to-latest redirect so versioned sites install it instead of copy-pasting.
date: 2026-07-29
tag: alias-component-to-latest
---

Versioned Antora components leave an awkward URL hole: visitors type `/component-name/` and expect the newest docs. Core documents the extension snippet. Sites copy it. Then they drift. Then someone ships a broken redirect and nobody remembers which playbook owns the paste.

[alias-component-to-latest](https://github.com/antora-supplemental/antora-alias-component-to-latest) is that snippet as a package. Same behavior as the official docs use case: alias the component root to the start page of the latest version. Install from GitHub, register under `antora.extensions`, move on.

This is the supplemental pattern in miniature. The idea is already documented upstream. The distribution problem is not. Packaging turns a tribal ritual into a dependency with a version. When Antora core gains an opt-in for the same behavior, sites can migrate; until then, the extension is the clean path.

Prefer commenting on the existing upstream thread — [antora/antora#291](https://gitlab.com/antora/antora/-/issues/291) — over opening duplicate issues. One conversation. One eventual opt-in. A package in the meantime.

Related: [antora-alias-component-to-latest](https://github.com/antora-supplemental/antora-alias-component-to-latest) · [Antora use case](https://docs.antora.org/antora/latest/extend/extension-use-cases/#redirect-from-component-to-latest-version) · [#291](https://gitlab.com/antora/antora/-/issues/291)
