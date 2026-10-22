---
title: Hormones and signalling
description: How insulin, glucagon, adrenaline, cortisol, thyroid hormones, leptin, ghrelin and GLP-1 act on receptors and second messengers, and how feedback limits them.
summary: Hormones are molecules released into the blood that change the activity of cells with a matching receptor. Some receptors lie in the cell membrane and act through small messenger molecules inside the cell; others lie inside the cell and switch genes on or off. Many hormones suppress their own release through feedback loops.
section: metabolism
order: 12
updated: 2026-10-21
related:
  - metabolism/cell
  - metabolism/fed-and-fasting
  - medicines/metformin
  - medicines/levothyroxine
  - medicines/beta-blockers
  - medicines/salbutamol
---

## Receptors and second messengers

Hormones act through receptors in the cell membrane or inside the cell [@rosenbaum-2009-gpcr; @oakley-2013-glucocorticoid].

The insulin receptor is a receptor tyrosine kinase: its β subunits phosphorylate each other and then IRS proteins, which recruit phosphoinositide 3-kinase [@petersen-2018-insulin]. Its product, the lipid second messenger PIP3, activates PDK1 and AKT [@petersen-2018-insulin; @uniprot-2025-hormones].

G-protein-coupled receptors, the largest family of membrane proteins, cross the membrane seven times [@rosenbaum-2009-gpcr]. The receptors for glucagon, GLP-1 and TSH and the β-adrenoceptors stimulate adenylyl cyclase, which forms cyclic AMP (cAMP) [@uniprot-2025-hormones; @billington-2017-agonists]. cAMP activates protein kinase A, and phosphodiesterases degrade it [@rosenbaum-2009-gpcr; @petersen-2018-insulin]. The ghrelin receptor activates Gq and phospholipase C, which forms diacylglycerol and inositol 1,4,5-trisphosphate; the latter opens endoplasmic reticulum calcium channels [@uniprot-2025-hormones].

Cortisol and T3 bind nuclear receptors, ligand-dependent transcription factors [@oakley-2013-glucocorticoid; @uniprot-2025-hormones]. T3 binding to its receptor, which pairs with RXR on DNA, replaces a corepressor with a coactivator [@brent-2012-thyroid]. The leptin receptor, a type I cytokine receptor, signals through the kinase JAK2 and STAT3 [@uniprot-2025-hormones].

## Insulin and glucagon

Insulin, made by beta cells of the pancreas, lowers blood sugar; glucagon, made by alpha cells, raises it [@uniprot-2025-hormones].

High glucose and insulin inhibit glucagon release, and low glucose stimulates it [@uniprot-2025-hormones]. In muscle, AKT promotes translocation of the glucose transporter GLUT4 to the plasma membrane [@petersen-2018-insulin; @uniprot-2025-hormones]. In hepatocytes, glucagon raises cAMP; protein kinase A then inactivates glycogen synthase and, through phosphorylase kinase, activates glycogen phosphorylase [@petersen-2017-hepatic]. [Metformin](/medicines/metformin/) acts mainly by suppressing hepatic gluconeogenesis [@petersen-2017-hepatic].

## Adrenaline and cortisol

Adrenaline quickens the heart and widens the airways, and the adrenal cortex releases cortisol daily and under stress [@uniprot-2025-hormones; @billington-2017-agonists; @oakley-2013-glucocorticoid].

β1-Adrenoceptors stimulate heart muscle contraction, and β2-adrenoceptors relax airway smooth muscle through cAMP [@uniprot-2025-hormones; @billington-2017-agonists].

::pathway{id="beta2-adrenoceptor-camp"}

β2-selective agonists such as [salbutamol](/medicines/salbutamol/) followed nonselective ones such as adrenaline, which caused tachycardia and tremor [@billington-2017-agonists]. In asthma or chronic obstructive pulmonary disease with reversible obstruction, cardioselective [beta-blockers](/medicines/beta-blockers/) given for 3 to 28 days left forced expiratory volume in one second unchanged (−0.42% of baseline, 95% CI −3.74 to 2.91), although a single dose lowered it by 7.46% (5.59 to 9.32) against placebo [@salpeter-2002-beta-blockers].

CRH from the hypothalamus stimulates ACTH secretion by the anterior pituitary, ACTH stimulates glucocorticoid production, and glucocorticoids inhibit both in negative feedback [@oakley-2013-glucocorticoid].

## Thyroid hormones

The thyroid gland makes iodine-containing hormones; TSH, a pituitary hormone, stimulates their production, and they suppress TSH [@brent-2012-thyroid].

::pathway{id="thyroid-hormone-synthesis"}

T4 is a prohormone; humans derive circulating T3 mainly from type 2 deiodinase [@brent-2012-thyroid]. Thyroid hormone receptor β mediates the feedback: a boy and his father, heterozygous for a variant that abolished its T3 binding, had serum T4 of 24.7 and 17.9 µg/dl (normal 5.0 to 12.0) with normal TSH [@sakurai-1989-thrb; @brent-2012-thyroid].

## Leptin, ghrelin and GLP-1

Fat tissue, the stomach and the gut release hormones that adjust appetite and insulin secretion [@uniprot-2025-hormones].

Leptin from adipose tissue reduces food intake through the hypothalamus; inherited lack of leptin or its receptor causes severe obesity from an early age [@uniprot-2025-hormones]. Ghrelin from the stomach stimulates appetite and requires octanoylation by MBOAT4 to activate its receptor [@uniprot-2025-hormones]. GLP-1 from intestinal L cells stimulates glucose-dependent insulin release and lowers plasma glucagon [@uniprot-2025-hormones].

:::industry
In a before-and-after study partly funded by Bristol-Myers Squibb, maker of Glucophage (metformin), 3 months of metformin in seven patients with type 2 diabetes lowered glucose production from 0.70 to 0.53 and gluconeogenesis, measured with deuterated water, from 0.42 to 0.28 mmol·m⁻²·min⁻¹ [@hundal-2000-metformin].
:::

:::consensus
The American Thyroid Association recommends [levothyroxine](/medicines/levothyroxine/) for hypothyroidism, with TSH kept within the reference range of 0.4 to 4.0 mIU/L and measured 4 to 6 weeks after each dose change [@jonklaas-2014-hypothyroidism].
:::

:::unresolved
Metformin's molecular target remains unsettled: it suppressed glucose production in mouse hepatocytes lacking AMPK; some reports found complex I inhibition only at millimolar concentrations, against 50 to 100 µM in plasma; and mitochondrial glycerol-3-phosphate dehydrogenase inhibition lacks human data [@petersen-2017-hepatic].
:::
