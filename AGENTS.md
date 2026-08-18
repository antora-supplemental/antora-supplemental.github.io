# Agent notes

## Editorial titles

When writing or editing **news** or **blog** titles, follow **STYLE.adoc**.

Short form:

- **News:** subject + present-tense verb (headline present).
- **Essay with an action:** implied **[On]** test (gerund / parallel), not bare imperatives.
- **Essay claim without a verb:** OK for theses.
- **Antora topic titles:** concept names; no forced verb.
- Sentence case; accurate; not a whitepaper section label dressed as news.

Project facts live in this file; machine-wide notes in `Z:\code\MEMORIES.md`.

## Site

- Org root GitHub Pages for `antora-supplemental` is this repo. Custom domain apex: `antora-supplemental.org` (see `DOMAIN.adoc`). Docs: `docs.antora-supplemental.org`. Registry: `registry.antora-supplemental.org`.
- Footer sibling orgs: `SIBLING_ORGS` in `src/consts.ts` (owned peers; this org omitted). Prefer each org's public site.
- Astro static (`pnpm build` → `dist/`). News: `src/content/news/`. Blog: `src/content/blog/`. Do not hand-copy folders into `_site`.
- Org news voice is direct/newsy (dispatches, progression). Blog is longer argument pieces. Allow-list Astro paths in `.gitignore`.