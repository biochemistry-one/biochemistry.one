---
title: The cell and its compartments
description: How membranes, pumps and organelles divide the chemistry of a human cell, and how insulin at the cell surface changes which genes are transcribed.
summary: A thin fatty membrane surrounds each human cell, and inner membranes divide it into compartments with their own chemical reactions. A pump in the outer membrane spends energy from ATP to move sodium out and potassium in; potassium then leaks out and leaves the inside electrically negative. Hormones such as insulin bind receptors on the cell surface and start a chain of reactions that changes which genes are read.
section: metabolism
order: 10
updated: 2026-10-21
related:
  - metabolism/energy
  - metabolism/genes
  - metabolism/hormones
  - foods/salt
---

## Membranes and transport

A thin double layer of fatty molecules surrounds each cell, and two kinds of protein let ions cross it: channels and pumps [@gadsby-2009-pumps].

An open channel passes tens of millions of ions per second down their electrochemical gradient [@gadsby-2009-pumps]. A pump has two gates that never open together, so it moves ions uphill several orders of magnitude more slowly [@gadsby-2009-pumps]. Pumps that hydrolyse ATP are called primary; secondary pumps couple the downhill flow of one ion, often Na+, to the uphill transport of another substrate [@gadsby-2009-pumps].

## The sodium pump

A pump in the outer membrane uses energy from ATP to move sodium out of the cell and potassium in [@gadsby-2009-pumps].

In each cycle of the Na+/K+-ATPase, ATP phosphorylates a conserved aspartate, Asp376 in ATP1A1, and the pump exports 3 Na+ and imports 2 K+, up to a hundred times a second [@gadsby-2009-pumps; @uniprot-2025-cell-membranes].

::pathway{id="sodium-potassium-pump-cycle"}

The Na+ gradient drives secondary pumps such as intestinal SGLT1, which takes up each glucose or galactose with 2 Na+ [@uniprot-2025-cell-membranes]. The kidneys consume 7–10% of the body's oxygen uptake and spend two-thirds or more of their share on the pump [@palmer-2015-nephron]. A textbook table of rodent tissues in the standard state attributes to the pump 50–60% of oxygen consumption in brain, 5–10% in liver and skeletal muscle and 1–5% in heart [@milo-2015-ions].

## Membrane potential

The inside of a resting cell is electrically negative, because potassium ions, far more concentrated inside, diffuse out [@milo-2015-ions].

K+, the dominant cation inside cells, is about 10 to 30 times more concentrated inside than outside, where Na+ dominates [@milo-2015-ions]. K+ usually lies close to electrochemical equilibrium, where the inside-negative potential balances its concentration gradient [@milo-2015-ions]. Resting potentials typically lie between −10 and −100 mV, depending on the ion channels a cell expresses [@abdul-kadir-2018-membrane]. In pancreatic β cells, rising glucose raises ATP and lowers ADP, which closes ATP-sensitive K+ channels; the membrane depolarises, Ca2+ enters and insulin is released [@abdul-kadir-2018-membrane].

## Compartments

Membranes divide the cell interior into compartments, each with its own enzymes [@ragueneau-2026-reactome].

| Compartment | Main processes |
|---|---|
| Cytosol | Glycolysis; pentose phosphate pathway, which supplies NADPH and ribose 5-phosphate [@ragueneau-2026-reactome] |
| Mitochondria | Citric acid cycle, β-oxidation and the respiratory chain, whose proton gradient drives ATP synthase [@ragueneau-2026-reactome]; mitochondrial DNA encodes 13 respiratory-chain subunits [@chinnery-2021-mitochondrial] |
| Endoplasmic reticulum | Synthesis of secreted, membrane and lysosomal proteins on ribosomes docked by the signal recognition particle; start of N-glycosylation [@ragueneau-2026-reactome]; [ethanol](/foods/alcohol/) oxidation by CYP2E1 [@teschke-2018-alcoholic-liver-disease] |
| Golgi apparatus | N-glycan modification [@ragueneau-2026-reactome]; the *GNPTAB* phosphotransferase synthesises the mannose 6-phosphate marker that sorts lysosomal enzymes to lysosomes [@erdem-2026-gnptab] |
| Lysosomes | Acidified by a V-type ATPase [@uniprot-2025-cell-membranes]; degradation of endocytosed and autophagic material; enzyme defects cause storage diseases such as Gaucher disease [@ragueneau-2026-reactome] |
| Peroxisomes | β-Oxidation of very-long-chain fatty acids, phytanate breakdown and early plasmalogen synthesis [@ragueneau-2026-reactome]; biallelic variants in any of 13 *PEX* genes cause Zellweger spectrum disorder [@steinberg-2020-zellweger] |
| Nucleus | Transcription, mRNA capping, polyadenylation and splicing; mRNA export through nuclear pores [@ragueneau-2026-reactome] |

## From receptor to gene

[Insulin](/metabolism/hormones/) binds a receptor on the cell surface, and a chain of reactions transmits the signal to genes in the nucleus [@petersen-2018-insulin].

::pathway{id="insulin-foxo1"}

Through IRS proteins, phosphoinositide 3-kinase and PIP3, the receptor activates the kinase AKT [@petersen-2018-insulin; @ragueneau-2026-reactome]. AKT phosphorylates the transcription factor FOXO1, which leaves the nucleus; transcription of the gluconeogenic genes *G6PC1* and *PCK1* falls [@petersen-2018-insulin; @petersen-2017-hepatic; @uniprot-2025-cell-membranes]. Glucagon raises gluconeogenic gene transcription through cAMP, protein kinase A and the CREB–CBP–CRTC2 complex [@petersen-2017-hepatic].

:::unresolved
The textbook tissue shares derive from a 1997 review whose funding could not be determined; it attributes to the pump 19–28% of the oxygen consumption coupled to ATP synthesis in mammals in the standard state [@rolfe-1997-energy; @milo-2015-ions].

Under insulin clamps, mice lacking liver AKT1, AKT2 and FOXO1 still suppressed hepatic glucose production normally, through suppressed adipose lipolysis; the weight of this indirect route in humans remains to be explored [@petersen-2018-insulin].
:::
