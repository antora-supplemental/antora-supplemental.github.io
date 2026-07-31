---
title: Dark mode is an overlay. Treat it like one.
description: >-
  antora-dark-mode is a supplemental overlay: toggle, system preference, FOUC prevention — without owning ui.bundle.
date: 2026-07-15
tag: antora-dark-mode
---

Most Antora sites already have a `ui.bundle`. They do not need a second one that happens to include a sun/moon icon. They need dark mode that layers on top — toggle, system preference, persistence, and no flash of the wrong theme on first paint.

That is what [antora-dark-mode](https://github.com/antora-supplemental/antora-dark-mode) is for. Install it as a supplemental overlay or a slot-based UI module. Keep your theme in `ui.bundle`. Do not stack this overlay on Valentus: Valentus already ships dark mode as part of its chrome.

Yes, there is a convenience `ui-bundle.zip` — Default UI plus dark mode, pre-merged — for people who want a one-URL quick start. It is not the architecture. The architecture is: overlays compose; bundles own the base. Confusing those two is how you end up with partial collisions and “why did my theme break?” tickets.

Upstream still matters. The feature request for native dark mode in the Default UI is open. Upvote it if you want the toggle in core. Until then, the overlay is the correct product shape for everyone who cannot wait — and for everyone whose theme is not Default UI.

Documentation and demos live on the project site. The docs hub points there; it does not duplicate the install guide. One source of truth. Same rule as the rest of the org.

Related: [Dark mode docs & demo](https://antora-supplemental.github.io/antora-dark-mode/) · [Default UI #216](https://gitlab.com/antora/antora-ui-default/-/issues/216) · [valentus-theme](https://github.com/antora-supplemental/valentus-theme)
