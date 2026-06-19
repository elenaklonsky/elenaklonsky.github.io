# Writing setup

This folder adds an Eleventy markdown publishing layer to the existing site.

It expects your original `index.html`, `styles.css`, `images/`, and `fonts/` to stay at the site root.

## Existing file edits

In your original `index.html`, change only the thinking button href:

```html
<a class="btn work" href="/thinking/">thinking</a>
```

No change is required to your original `styles.css`.

## Writing workflow

1. Put markdown files in `writing/`.
2. Each published file needs frontmatter like:

```md
---
title: "piece title"
date: 2026-06-19
---

Essay text here.
```

3. Run the site build. Eleventy creates:
   - `/thinking/` as the writing index
   - one page per markdown file in `writing/`

## Local commands

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
```

The built site appears in `_site/`.
