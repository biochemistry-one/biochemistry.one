# Atlas of Human Biochemistry

A static website on human biochemistry, metabolism, genetics, medicines, food additives and foods, in seven languages. Every citation is classed by who funded the study; findings of independent research form the main text, and industry-funded results, consensus statements and open questions appear in labelled blocks.

## Build

```
npm install
npm run build
```

The site is written to `dist/`. It is plain static files and can be served by any web server with `dist/` as the web root, for example:

```
python3 -m http.server 4321 --directory dist
```

## Check

```
npm run check
```

`scripts/check-content.mjs` checks every page, study record and pathway record against `docs/content-spec.md`. `scripts/check-links.mjs` checks every internal link in `dist/`, or in the folder given as its argument.

## Publish

Pull requests to `master` publish to https://staging.biochemistry.one; merges to `master` publish to https://biochemistry.one.

## Content

| Path | Content |
|---|---|
| `src/content/pages/<lang>/<section>/<slug>.md` | Pages; English is the source of every translation |
| `src/content/studies/<id>.json` | Study records with funding class |
| `src/content/pathways/<lang>/<id>.json` | Pathway diagrams |
| `src/data/map-labels.json` | Labels of the metabolic map in seven languages |
| `src/i18n/strings.json`, `src/i18n/ui.json` | Interface text in seven languages |

The format of each file is defined in `docs/content-spec.md`.

## Design

Colours are defined in OKLCH in `design/shoreline-tokens.mjs`; `node design/write-site-tokens.mjs` writes them to `src/styles/tokens.css`. The metabolic map is generated from data in `src/lib/metabolic-map.mjs`.
