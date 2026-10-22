# Content specification

## Languages

| Code | Language | Folder | `hreflang` |
|---|---|---|---|
| en | English | `en` | `en` |
| ja | Japanese | `ja` | `ja` |
| zh | Chinese, Simplified | `zh` | `zh-Hans` |
| ru | Russian | `ru` | `ru` |
| de | German | `de` | `de` |
| es | Spanish | `es` | `es` |
| fr | French | `fr` | `fr` |

English is the source. Every other language is a translation of the English file at the same path.

## Files

```
src/content/pages/<lang>/<section>/<slug>.md
src/content/studies/<study-id>.json
src/content/pathways/<lang>/<pathway-id>.json
```

Sections:

```
metabolism
medicines
additives
foods
method
```

Slugs and ids are lowercase ASCII, digits and hyphens. Slugs and ids are identical in every language.

## Page

Frontmatter, YAML, these keys only:

```yaml
title: Statins
description: One sentence, at most 160 characters, for search results and link previews.
summary: Two or three plain sentences for a reader without training in biology.
section: medicines
order: 1
updated: 2026-10-21
related:
  - metabolism/cholesterol
  - foods/eggs
```

| Key | Type | Rule |
|---|---|---|
| title | string | Name of the subject, at most 60 characters |
| description | string | One sentence, at most 160 characters |
| summary | string | Two or three sentences, plain language |
| section | enum | One of the five sections |
| order | integer | Position within the section |
| updated | date | `2026-10-21` |
| related | list | Optional. `<section>/<slug>` of existing or planned pages |

Body: Markdown with GitHub tables. Headings start at `##`. The body begins with a `##` heading.

### Citations

```
LDL cholesterol fell by 1.0 mmol/L [@ctt-2010-meta].
Two studies support this [@smith-2019-cohort; @jones-2021-rct].
```

A citation is `[@id]` or `[@id; @id]`. Each id is the file name of a study record without `.json`.

### Evidence layers

The main text contains findings and mechanisms only. Each layer of other evidence is a block:

```
:::industry
Results of studies funded by industry, or with an industry role in design, analysis or publication.
:::

:::consensus
Statements of guideline bodies, professional societies and expert panels.
:::

:::unresolved
Questions where independent studies conflict, or where independent evidence is absent.
:::
```

Citation rules, checked by `node scripts/check-content.mjs`:

| Location | Permitted study classes |
|---|---|
| Main text | independent, regulatory, reference |
| `:::industry` | industry, regulatory |
| `:::consensus` | consensus, regulatory |
| `:::unresolved` | all classes |

A statement that contradicts consensus requires the same evidence as a statement that agrees with it. Where independent evidence is absent, the page states its absence inside `:::unresolved`.

Effects of treatments and exposures are stated as absolute risk difference, number needed to treat or harm, and follow-up duration, next to relative risk, wherever the source reports them or reports the counts from which they follow.

### Pathway diagrams

```
::pathway{id="mevalonate"}
```

The id is the file name of a pathway record in `src/content/pathways/<lang>/`. A page that uses a pathway creates the English record when the file does not exist yet.

## Study record

`src/content/studies/<study-id>.json`. The id is `<first-author-surname>-<year>-<keyword>`, for example `lundh-2017-sponsorship`. Before creating a record, check whether the file exists; reuse an existing record, and change it only to correct a verified error.

```json
{
  "title": "Industry sponsorship and research outcome",
  "authors": "Lundh A, Lexchin J, Mintzes B, Schroll JB, Bero L",
  "journal": "Cochrane Database of Systematic Reviews",
  "year": 2017,
  "doi": "10.1002/14651858.MR000033.pub3",
  "pmid": "28207928",
  "design": "systematic-review",
  "funder": "As stated in the paper",
  "funderRole": "none",
  "dataAccess": "summary",
  "result": "One or two sentences with the numbers the page relies on.",
  "class": "independent",
  "fundingChecked": "https://… page where the funding statement was read"
}
```

| Field | Type | Rule |
|---|---|---|
| title | string | Exact title of the publication |
| authors | string | All authors up to six, then `et al.` |
| journal | string | Journal, publisher or issuing body |
| year | integer | Year of publication |
| doi | string | Optional |
| pmid | string | Optional |
| url | string | Required when `doi` and `pmid` are absent |
| registry | string | Optional. Trial registration, for example `NCT03278509` |
| design | enum | See below |
| participants | integer | Optional |
| followUp | string | Optional, for example `median 5.3 years` |
| population | string | Optional |
| funder | string | Funding statement as given in the publication, or `not stated` |
| funderRole | enum | Role of any funder, public or industry: `none` `design` `analysis` `publication` `several` `unknown` |
| inKindSupport | string | Optional. Donated products, assays, services |
| authorConflicts | string | Optional. Summary of declared conflicts |
| dataAccess | enum | `individual` `summary` `unavailable` `unknown` |
| result | string | The finding the page cites, with numbers |
| class | enum | See below |
| fundingChecked | string | URL of the full text or registry entry where the funding statement was read |

Designs:

```
rct
meta-analysis
systematic-review
cohort
case-control
cross-sectional
mendelian-randomisation
genetic
mechanistic
animal
in-vitro
regulatory
guideline
textbook
database
other
```

Classes:

| Class | Criterion |
|---|---|
| independent | Public or charitable funding. No industry money. No industry role in design, analysis or publication. Donated products are permitted and recorded in `inKindSupport`. |
| industry | Any industry funding, including partial funding, or any industry role in design, analysis or publication |
| regulatory | Assessments, labels and safety communications of regulators and statutory risk assessors: FDA, EMA, MHRA, PMDA, EFSA, FSANZ, JECFA |
| consensus | Guidelines, consensus statements, position papers, expert-panel classifications such as IARC |
| reference | Textbooks and curated databases |
| undetermined | Funding not determinable from the publication |

## Pathway record

`src/content/pathways/<lang>/<pathway-id>.json`:

```json
{
  "title": "Mevalonate pathway",
  "layout": "chain",
  "compartment": "cytosol and endoplasmic reticulum",
  "steps": [
    {
      "from": "HMG-CoA",
      "to": "Mevalonate",
      "enzyme": "HMG-CoA reductase",
      "cofactors": ["2 NADPH"],
      "inhibitors": [{"name": "Statins", "page": "medicines/statins"}]
    }
  ]
}
```

| Field | Type | Rule |
|---|---|---|
| title | string | Name of the pathway |
| layout | enum | `chain` for a linear sequence, `cycle` when the last product is the first substrate |
| compartment | string | Optional |
| steps | list | In order. Each `to` equals the next `from` |
| steps[].from | string | Substrate |
| steps[].to | string | Product |
| steps[].enzyme | string | Enzyme, or `several steps` for a condensed segment |
| steps[].cofactors | list | Optional |
| steps[].reversible | boolean | Optional, default false |
| steps[].inhibitors | list | Optional. `name` and optional `page` |
| steps[].note | string | Optional, at most 80 characters |

## Writing

- British English. International nonproprietary names for medicines.
- Molecules, organs and cells are described by mechanism: an enzyme catalyses, a receptor binds, a transporter moves, a hormone activates. Verbs of intention are excluded: wants, decides, tells, tries, fights, attacks.
- Each section opens with a sentence that a reader without training in biology can follow. Detail for medical professionals follows.
- Numbers are given with units and denominators.
- Every factual statement in the main text and in every layer is cited.

## Check

```
node scripts/check-content.mjs
```

The script lists every violation of this specification. A page is finished when the script lists none for it.
