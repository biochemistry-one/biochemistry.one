---
title: Amlodipine
description: Amlodipine harms to heart, kidneys, liver, skin and lungs, its calcium-channel target in brain, gut, bladder and pancreas, and its absolute benefit.
summary: Amlodipine can lower blood pressure too far, worsen chest pain or bring on a heart attack when the dose is started or raised, and in overdose cause shock and fluid in the lungs; in trials it led to more heart failure than a diuretic. Its target channel is also found in the heart, brain, gut, bladder and pancreas, and the drug commonly makes the ankles swell. Lowering blood pressure with drugs prevented 14 to 38 heart attacks, strokes and other cardiovascular events per 1000 people treated for 5 years, more at higher risk.
section: medicines
order: 5
updated: 2026-10-22
related:
  - medicines/renin-angiotensin
  - metabolism/drug-metabolism
  - method/evidence
---

## Serious harms

Amlodipine is prescribed for high blood pressure and angina [@fda-2017-amlodipine].

| Condition | How often | Who is at risk | Source |
|---|---|---|---|
| Symptomatic hypotension | Any blood-pressure drug: 5390 of 88,575 against 3121 of 93,547 on control (RR 1.97) | Severe aortic stenosis | [@fda-2025-amlodipine-label; @albasri-2021-adverse-events] |
| Worsening angina; myocardial infarction | EU: infarction below 1 in 10,000 | After starting or raising the dose, particularly with severe obstructive coronary disease | [@fda-2025-amlodipine-label; @ema-2025-exforge] |
| Heart failure | 62 against 45 per 1000 over 3 to 5 years (RR 1.37); 1 extra per 107 treated | First-line use instead of a diuretic | [@zhu-2022-calcium-channel-blockers] |
| Kidney injury admission; death | 0.44% against 0.22%; 1.02% against 0.59%; 30 days, 190,309 users of this class | Aged 66 or older on clarithromycin rather than azithromycin; 1 extra injury per 95 with kidney disease | [@gandhi-2013-clarithromycin] |
| Non-cardiogenic pulmonary oedema; shock | Oedema rarely reported; fatal shock reported | Overdose; oedema may begin 24 to 48 hours later | [@ema-2022-amlodipine-overdose] |
| Liver injury, some needing admission; Stevens-Johnson syndrome; angioedema; leukopenia, thrombocytopenia; pancreatitis; arrhythmia | EU: below 1 in 10,000; US: 0.1% to 1% for the last five, causality uncertain | Not stated | [@ema-2025-exforge; @fda-2025-amlodipine-label] |

The EMA judged a causal link between overdose and pulmonary oedema at least a reasonable possibility; fluid resuscitation may precipitate it [@ema-2022-amlodipine-overdose].

:::industry
In Pfizer-funded trials in severe heart failure, pulmonary oedema was more frequent on amlodipine; in non-ischaemic disease, deaths were 278 against 262 on placebo, of 827 each, over a median 33 months (hazard ratio 1.09) [@packer-1996-praise; @packer-2013-praise-2; @fda-2025-amlodipine-label]. In AASK (1094 African Americans with hypertensive kidney disease; part-funded by Pfizer, AstraZeneca and King), the amlodipine arm was stopped for safety; ramipril cut a large GFR fall, kidney failure or death by 38% (87 of 436 against 56 of 217) [@agodoa-2001-aask; @wright-2002-aask].
:::

:::unresolved
The EMA advises caution in heart failure, as this class may increase events and mortality; the US label reports safe use in well-compensated heart failure [@ema-2025-exforge; @fda-2025-amlodipine-label]. Independent reviewers state that harms were under-measured and possibly unreported, in patients less frail than in practice [@albasri-2021-adverse-events].
:::

## Other pathways it affects

The channel that amlodipine blocks in arteries is also found in the heart, brain, gut, bladder and pancreas [@uniprot-2025-l-type-channels].

| Tissue | Reference annotation | In people |
|---|---|---|
| Heart | Cav1.2: excitation-contraction coupling, rhythm [@uniprot-2025-l-type-channels] | No change in nodal function or conduction, and no negative inotropy, at therapeutic doses; negative inotropy detectable in vitro [@fda-2025-amlodipine-label; @ema-2025-exforge] |
| Brain | Cav1.2, Cav1.3 [@uniprot-2025-l-type-channels] | Isradipine, a related drug, did not slow early Parkinson disease in 336 patients over 36 months, possibly at too low a dose [@steady-pd-2020-isradipine] |
| Gut | Cav1.2: intestinal contraction [@uniprot-2025-l-type-channels] | Constipation, dysphagia below 1%, causality uncertain (US) [@fda-2025-amlodipine-label] |
| Bladder | Cav1.2 [@uniprot-2025-l-type-channels] | Micturition disorder, nocturia uncommon (EU) [@ema-2025-exforge] |
| Pancreatic islets | Cav1.2, Cav1.3 [@uniprot-2025-l-type-channels] | New diabetes unchanged against placebo (RR 1.02, 0.92 to 1.13; 11% direct evidence) [@nazarzadeh-2021-diabetes] |

Oedema occurred in 10.8% at 10 mg against 0.6% on placebo, and 14.6% of women against 5.6% of men [@fda-2025-amlodipine-label]. At 66 or older, 1.4% starting this class received a loop diuretic within 90 days, against 0.7% after an ACE inhibitor or receptor blocker, consistent with oedema treated as a new condition [@savage-2020-prescribing-cascade].

:::unresolved
Both regulators record possible extrapyramidal disorder; whether therapeutic doses block Cav1.3, annotated in the basal ganglia, is not addressed in these sources [@fda-2025-amlodipine-label; @ema-2025-exforge; @uniprot-2025-l-type-channels]. Across 260,447 trial participants the class was associated with cancer against all comparators (hazard ratio 1.06, 1.01 to 1.11), not against placebo [@copland-2021-cancer].
:::

## What it is for and how it works

Calcium entering artery-wall muscle makes it contract; amlodipine blocks the channel that admits it [@fda-2017-amlodipine].

::pathway{id="vascular-smooth-muscle-contraction"}

The channel is Cav1.2 (*CACNA1C*) [@uniprot-2025-calcium-channel]. Ionised at physiological pH (pKa 8.6), amlodipine binds gradually, hence the slow onset [@fda-2017-amlodipine].

## In the body

The liver breaks amlodipine down slowly, so one tablet a day suffices [@fda-2017-amlodipine].

The half-life is 30 to 50 hours, or 56 in hepatic impairment; metabolism, mainly by CYP3A4 and CYP3A5, inactivates about 90% of a dose [@fda-2017-amlodipine; @fda-2025-amlodipine-label; @rognstad-2025-amlodipine]. Erythromycin and clarithromycin were associated with admission for hypotension or shock in older users of this class (odds ratios 5.8 and 3.7), unlike azithromycin, which does not inhibit CYP3A4 [@wright-2011-macrolides]. Amlodipine weakly inhibits CYP3A and raised simvastatin exposure 77%, so simvastatin is limited to 20 mg daily [@fda-2025-amlodipine-label; @ema-2025-exforge]. From animal data, EU information advises against calcium channel blockers with dantrolene in malignant hyperthermia or susceptibility to it [@ema-2025-exforge].

## Genetic variation

Rare changes in the channel genes cause heart-rhythm and hormone disorders; a liver-enzyme variant raises drug levels [@uniprot-2025-l-type-channels; @rognstad-2025-amlodipine].

*CACNA1C* variants cause Timothy syndrome, with intermittent hypoglycaemia, and long QT syndrome 8; *CACNA1D* variants cause sinoatrial node dysfunction with deafness, and activating ones primary aldosteronism with seizures [@uniprot-2025-l-type-channels]. *CYP3A4\*22* carriers had dose-adjusted levels 1.94 nmol/l per mg higher [@rognstad-2025-amlodipine].

## Benefit against harm

Against no treatment, evidence for this class is one trial of a related drug, judged of lower quality [@wright-2018-first-line].

That trial used nitrendipine in 4695 patients; thiazides had 19 trials [@wright-2018-first-line].

| Group | Benefit | Serious harm |
|---|---|---|
| Mild hypertension, no cardiovascular disease | Mortality RR 0.85 (0.64 to 1.14), stroke 0.41, low certainty; mortality HR 1.02 in UK records [@wang-2026-mild-hypertension; @sheppard-2018-mild-hypertension] | Withdrawal for adverse effects RR 4.80, from one trial's whole population; 1 extra hypotension per 41 treated over 10 years [@wang-2026-mild-hypertension; @sheppard-2018-mild-hypertension] |
| Aged 60 or older, mostly thiazides, 3.8 years | Mortality 11% to 10%, cardiovascular events 14% to 10%; at 80 or older, mortality RR 0.97 (0.87 to 1.10) [@musini-2025-older] | Withdrawal for adverse effects 16% against 5.4% [@musini-2025-older] |

Treating 1000 people for 5 years prevented 14 to 38 cardiovascular events as predicted risk rose from 6.0% to 26.8%, with relative reductions of 13% to 18% [@bplttc-2014-risk].

:::industry
In ACCOMPLISH, analysed by Novartis, events were 9.6% with benazepril plus amlodipine against 11.8% with hydrochlorothiazide over 36 months (hazard ratio 0.80) [@jamerson-2008-accomplish].
:::

## Without the medicine

A potassium-containing salt substitute reduced strokes and deaths in a randomised trial [@neal-2021-ssass].

In 20,995 rural Chinese adults with prior stroke, or aged 60 or older with poorly controlled pressure, it cut stroke from 33.65 to 29.14 and death from 44.61 to 39.28 per 1000 person-years over a mean 4.74 years; households using potassium-sparing drugs or with serious kidney disease were excluded [@neal-2021-ssass].

:::unresolved
Exercise trials measured only resting pressure, and no weight-loss trial had mortality as a predefined outcome [@edwards-2023-exercise; @semlitsch-2021-weight-loss].
:::

## How the recommendations were set

In 2003 a US panel created the category of pre-hypertension; 9 of its 11 members disclosed industry ties [@moynihan-2013-disease-definitions].

Eight had ties to Novartis, maker of amlodipine with benazepril; none of 16 disease-definition publications rigorously assessed harms of the changes [@moynihan-2013-disease-definitions]. The 2017 ACC/AHA definition of 130/80 mm Hg raised estimated US adult prevalence from 31.9% to 45.6% [@muntner-2018-acc-aha-impact].

:::consensus
In 2014 JNC 8 raised the threshold and goal at 60 or older to 150/90 mm Hg, without unanimity [@james-2014-jnc8]. The 2024 ESC guideline, funded by the ESC alone, advises drugs from 130/80 mm Hg at a 10-year risk of 10% or more, after 3 months of lifestyle measures [@mcevoy-2024-esc].
:::

## Stopping

Removing one blood-pressure drug at 80 or older kept most people's pressure controlled for 12 weeks [@sheppard-2020-optimise].

In OPTiMISE (569 people), control was 86.4% against 87.7%, and serious adverse events 4.3% against 2.4% (RR 1.72, 0.7 to 4.3) [@sheppard-2020-optimise]. Withdrawing a calcium channel blocker raised systolic pressure by 5 mm Hg (0 to 10) in an exploratory analysis [@sheppard-2021-withdrawal].

:::unresolved
Six withdrawal trials in 1073 older people allowed no firm conclusions: mortality OR 2.08 (0.79 to 5.46), and no trial reported falls [@gnjidic-2025-antihypertensive-withdrawal].
:::

A prescription is changed together with the prescriber.
