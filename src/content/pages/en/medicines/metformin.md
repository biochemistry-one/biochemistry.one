---
title: Metformin
description: Metformin's lactic acidosis, B12, hypoglycaemia, liver and offspring harms, and the transporters and mitochondrial targets it reaches.
summary: Metformin can cause lactic acidosis, which is rare and has caused deaths, and lowers vitamin B12 in up to 1 in 10 users, which untreated can leave permanent anaemia or nerve damage; use in pregnancy was followed by more small newborns and more overweight children. Its transporters sit in liver and kidney, and its proposed mitochondrial targets in every cell that uses oxygen.
section: medicines
order: 4
updated: 2026-10-22
related:
  - metabolism/fed-and-fasting
  - metabolism/one-carbon
  - metabolism/drug-metabolism
  - method/evidence
---

## Serious harms

Metformin is prescribed to lower blood glucose in type 2 diabetes [@fda-2018-metformin].

| Condition | How often | Who is at risk | Source |
|---|---|---|---|
| Lactic acidosis; deaths reported | None in 70,490 patient-years of trials; upper limit 4.3 per 100,000 | eGFR below 30: hazard ratio 2.07 among 75,413 patients | [@fda-2018-metformin; @salpeter-2010-lactic-acidosis; @lazarus-2018-lactic-acidosis] |
| Lactic acidosis in mitochondrial disease | Not quantified | MELAS and maternally inherited diabetes with deafness | [@fda-2026-metformin-label] |
| Vitamin B12 deficiency | Up to 1 in 10 users | Higher dose, longer use | [@mhra-2022-metformin-b12] |
| Hypoglycaemia | 14% of 431 against 5% of 144 on glyburide alone | Users of insulin or an insulin secretagogue | [@fda-2026-metformin-label] |
| Liver injury, three patterns | Not estimable from reports | Avoided in hepatic disease | [@fda-2026-metformin-label] |
| Small-for-gestational-age infant | 30 (13%) against 15 (7%), 502 pregnancies | Type 2 diabetes in pregnancy, added to insulin | [@feig-2020-mity] |
| Overweight or obesity at 4 years | 26 (32%) against 14 (18%) of 182 children; 1 extra per 7 | Mothers with polycystic ovary syndrome | [@hanem-2018-pcos-offspring] |
| Major birth defects | 5.2% against 3.3% of 1451 offspring; genital defects 0.90% against 0.24%, all in boys | Father's use during sperm development | [@wensink-2022-paternal; @meng-2024-paternal] |

Metformin decreases liver uptake of lactate, so blood lactate rises; onset is subtle, with malaise, myalgias, somnolence and abdominal pain, and death, hypothermia and resistant bradyarrhythmias have followed [@fda-2018-metformin]. The labelled risk factors are renal impairment, interacting drugs, age 65 or more, contrast imaging, surgery, hypoxic states, excess alcohol and hepatic impairment [@fda-2026-metformin-label]. Anaemia or neuropathy from B12 deficiency can become permanent if treatment comes late [@mhra-2022-metformin-b12].

:::industry
Over 4.3 years in 390 insulin-treated patients, B12 deficiency affected 9.9% against 2.7%, one extra case per 13.8 treated, and methylmalonic acid, a marker of tissue deficiency, rose in step with worse neuropathy scores [@de-jager-2010-b12; @out-2018-methylmalonic-acid]. In renal impairment, acidosis risk rose further above 2 g daily [@eppenga-2014-lactic-acidosis].
:::

:::unresolved
Rate estimates conflict: an upper limit near 4 per 100,000 patient-years in trials, 7.4 against 2.2 in UK practice, and 39 below an eGFR of 30 in one review, and no randomised trial has tested safety in significantly impaired kidney function [@salpeter-2010-lactic-acidosis; @eppenga-2014-lactic-acidosis; @inzucchi-2014-kidney-review]. Whether the B12 fall causes nerve damage is untested [@yang-2019-b12-meta]. The paternal excess disappeared once fathers with diabetes were compared with each other [@meng-2024-paternal].
:::

## Other pathways it affects

Its proposed targets are housekeeping enzymes of every respiring cell [@uniprot-2025-energy].

| Site | Finding | Shown in |
|---|---|---|
| Liver, kidney, bile | OCT1, OCT2, MATE1 and MATE2-K carry metformin; MATE2-K also carries creatinine and thiamine [@uniprot-2025-cation-transporters] | Reference annotation |
| Every respiring tissue | Complex I inhibited only at millimolar concentrations, against 50 to 100 µM in plasma [@petersen-2017-hepatic] | Laboratory work, reviewed |
| Liver mitochondria | Complex IV inhibited at clinical concentrations, cutting glucose synthesis; a complex I inhibitor had no such effect [@lamoia-2022-complex-iv; @madiraju-2018-redox] | Rats |
| Islets, brown fat, muscle, brain, testis | Mitochondrial glycerol-3-phosphate dehydrogenase is 11 to 250 times more active than in liver; knockout mice have reduced fertility [@macdonald-2021-mgpd] | Ten rat tissues; mice |
| Gut microbes and bile acids | Escherichia rose and Intestinibacter fell; three days lowered serum FGF19 [@forslund-2015-microbiota; @sun-2018-bile-acids] | 784 metagenomes; 22 people |
| Skeletal muscle | 1700 mg daily during 14 weeks of resistance training blocked the gains: lean mass rose 1.95% against 0.41% [@walton-2019-masters] | 94 adults over 65 |

:::industry
During 12 weeks of aerobic training in 53 older adults, metformin prevented the rise in insulin sensitivity seen with placebo and abolished the gain in muscle mitochondrial respiration [@konopka-2019-exercise].
:::

:::unresolved
Which target matters at human doses is unsettled: four assays found no inhibition of mitochondrial glycerol-3-phosphate dehydrogenase, against the industry-funded animal work proposing it [@macdonald-2021-mgpd; @madiraju-2014-mgpd].
:::

## What it is for and how it works

Metformin is given with diet and exercise in type 2 diabetes. It reduces the glucose the liver releases and raises uptake in tissues, leaving insulin secretion unchanged [@fda-2018-metformin]. Both the 2018 and the 2026 label state that no study has established conclusive evidence of a reduction in large-vessel disease [@fda-2018-metformin; @fda-2026-metformin-label].

## In the body

The kidneys clear metformin unchanged, at about 3.5 times the rate of creatinine, so kidney function sets both the dose and the risk: a single 850 mg dose peaks at 1.86 µg/mL at a creatinine clearance of 61 to 90 mL/min and at 4.12 µg/mL at 31 to 60 [@fda-2018-metformin]. Cimetidine, ranolazine, vandetanib and dolutegravir block the same renal transporters and raise exposure [@fda-2018-metformin].

## Genetic variation

Variants of the transporter OCT1 predict who tolerates the drug, not who responds. Among 2166 new users, carriers of two reduced-function alleles were more often intolerant (odds ratio 2.41), and the odds reached 4.13 when they also took a drug blocking the same transporter, such as a proton-pump inhibitor or verapamil [@dujic-2015-oct1-intolerance]. Those alleles did not predict the fall in HbA1c [@zhou-2009-slc22a1].

## Benefit against harm

| Group | Benefit | Serious harm |
|---|---|---|
| Type 2 diabetes, hard outcomes | None: death 0.99 (0.75 to 1.31) across 13 trials, 13,110 patients [@boussageon-2012-metformin] | Lactic acidosis, rare; B12 deficiency in up to 1 in 10 [@mhra-2022-metformin-b12] |
| Type 2 diabetes, blood test | HbA1c -1.4% against +0.4% over 29 weeks [@fda-2018-metformin] | Diarrhoea in 53% against 12%; 6% stopped [@fda-2018-metformin] |
| Added to a sulphonylurea | None | Death 1.53 (1.02 to 2.31); cardiac death 2.20 (1.20 to 4.03) [@boussageon-2012-metformin] |
| Coronary disease, against glipizide | Events in 25.0% against 35.1% at equal HbA1c [@hong-2013-spread-dimcad] | As above |
| Breast cancer, no diabetes | None: 2.78 against 2.74 events per 100 patient-years [@goodwin-2022-ma32] | Grade 3 events in 21.5% against 17.5% [@goodwin-2022-ma32] |

:::industry
The reputation of the drug rests on 342 overweight patients in UKPDS 34, where death from any cause fell 36% against 411 on diet alone; thirteen companies funded part of it [@ukpds-1998-metformin; @holman-2008-ukpds-legacy]. In prediabetes, three years cut new diagnoses from 28.9% to 21.7%, against 14.4% with lifestyle change alone [@knowler-2002-dpp].
:::

:::unresolved
A Cochrane review of 18 trials and 10,680 participants found no clear evidence on death, serious adverse events, quality of life, heart attack or stroke; only four placebo-controlled trials collected such outcomes at all [@gnesin-2020-monotherapy; @griffin-2017-cardiovascular].
:::

## Without the medicine

Weight loss can clear the diagnosis. A programme that began by withdrawing glucose-lowering drugs put 46% of 149 adults into remission at one year against 4% on usual care, and 86% of those who lost 15 kg or more [@lean-2018-direct]. Thirty years after a six-year programme in Da Qing, cardiovascular deaths were a third lower [@gong-2019-da-qing].

:::industry
In established diabetes, weight loss did not reduce cardiovascular events among 5145 adults, and that trial was stopped for futility; in prediabetes neither the drug nor lifestyle change reduced them after 21 years [@look-ahead-2013-lifestyle; @goldberg-2022-dppos-cardiovascular].
:::

## How the recommendations were set

Aiming lower is not always better. Targeting an HbA1c below 6.0% in 10,251 people at high cardiovascular risk raised deaths from 203 to 257 over a mean 3.5 years, one extra death per 95 treated, and that arm was stopped early [@accord-2008-intensive-glucose]. Of 288 members of 14 North American diabetes and lipid guideline panels, 150 had financial ties to the makers of the drugs [@neuman-2011-guideline-conflicts].

:::consensus
First-line status was set in 2006 by a seven-author algorithm, all of whose authors declared industry ties, and which called the scarcity of head-to-head evidence a major impediment to any such choice [@nathan-2006-consensus].
:::

## Stopping

The label names the moments for stopping rather than reducing the dose: an eGFR below 30, iodinated contrast, withheld food and fluid around surgery, a hypoxic state such as acute heart failure or sepsis, and any suspicion of lactic acidosis [@fda-2018-metformin; @fda-2026-metformin-label]. European product information adds short interruptions during dehydration from vomiting, diarrhoea or fever [@ema-2016-metformin-referral].

:::unresolved
The only randomised withdrawal trial kept 393 patients with raised creatinine on or off the drug for four years: no lactic acidosis occurred in either group and deaths were alike, while those who stopped gained more weight [@rachmani-2002-withdrawal].
:::

A prescription is changed together with the prescriber.
