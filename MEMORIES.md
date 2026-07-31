# Durable facts for agents working in this repository.

- [1] Org root GitHub Pages for `antora-supplemental` is this repo (`antora-supplemental.github.io`). Project docs hubs live under path prefixes (e.g. `/docs/`, `/antora-dark-mode/`).
- [1] Org news lives under `news/` (static HTML articles + `news/index.html`). Homepage `#news` teases latest; voice is direct/newsy. Allow-list `news/` in `.gitignore`.
- [1] Pages deploy stages an explicit `_site` tree (`deploy.yml`); new top-level paths (e.g. `news/`) must be copied there or they 404.
