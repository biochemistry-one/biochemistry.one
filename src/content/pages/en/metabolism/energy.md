---
title: Energy and ATP
description: How cells couple reactions to ATP, pass electrons to NAD+, FAD and NADP+, make ATP from a proton gradient and use energy organ by organ.
summary: Cells oxidise food and hold the released energy briefly in ATP, in molecules that have accepted electrons, and in a proton gradient across the inner membrane of mitochondria. Heart and skeletal muscle contain a reserve for a few seconds as creatine phosphate. At rest, the heart, kidneys, brain and liver use far more energy per kilogram than muscle or fat.
section: metabolism
order: 1
updated: 2026-10-21
related:
  - metabolism/cell
  - metabolism/fed-and-fasting
  - metabolism/vitamins
  - metabolism/glucose
  - metabolism/fats
  - medicines/metformin
  - foods/alcohol
---

## Free energy and coupling

Cells drive many reactions by coupling them to ATP breakdown, which releases energy [@milo-2015-numbers].

The free-energy change, ΔG = ΔG°′ + RT ln Q, is zero at equilibrium and grows in magnitude as concentrations depart from it [@milo-2015-numbers]. An ATPase is driven by the excess of ATP's free energy of hydrolysis over its own requirement; the cardiac calcium pump SERCA has the smallest excess [@lygate-2024-creatine-kinase].

## ATP in the cell

Inside cells, ATP hydrolysis releases about 1.5 to 1.8 times the energy it releases under standard conditions [@milo-2015-numbers].

With all reactants at 1 M, ΔG°′ is −28 to −34 kJ/mol, depending on Mg2+ [@milo-2015-numbers]. At cellular concentrations, far below 1 M, ΔG is about −50 kJ/mol; about −70 kJ/mol was calculated for muscle of athletes recovering from exertion [@milo-2015-numbers].

## Daily ATP turnover

The heart and brain contain little ATP but make kilograms of it every day [@lygate-2024-creatine-kinase; @zhu-2018-brain-energy].

The adult heart contains about 0.6 g of ATP and requires about 6 kg a day [@lygate-2024-creatine-kinase]. The brain contains about 2 g; ³¹P magnetic resonance gives its oxidative ATP synthesis as 7–8 kg a day [@zhu-2018-brain-energy]. For the whole body, BioNumbers lists about 60 kg, one body weight, a day, calculated from oxygen consumption at 36 ATP per glucose [@milo-2010-bionumbers].

## NAD+, FAD and NADP+

Cells pass electrons from food to small molecules made from the B vitamins [niacin and riboflavin](/metabolism/vitamins/) [@efsa-2014-niacin; @turck-2017-riboflavin].

NAD+ accepts two electrons and one proton; NAD, relatively oxidised, serves catabolism, and NADP, relatively reduced, biosynthesis [@milo-2015-numbers]. Succinate dehydrogenase, complex II, binds FAD covalently to a histidine and transfers electrons from succinate to ubiquinone [@uniprot-2025-energy]. Hepatic oxidation of [alcohol](/foods/alcohol/) raises the NADH/NAD+ ratio, which stimulates fatty acid synthesis [@teschke-2018-alcoholic-liver-disease].

## Proton-motive force

In mitochondria, electron flow to oxygen pumps protons across the inner membrane; their return turns ATP synthase, a rotary enzyme that makes ATP [@watt-2010-c-ring; @uniprot-2025-energy].

::pathway{id="respiratory-chain"}

The mitochondrial membrane potential is about 160 mV; each pH unit adds about 60 mV to the proton-motive force [@milo-2015-numbers]. Bovine and human c-rings have eight subunits, so each turn moves eight protons and makes three ATP [@watt-2010-c-ring; @uniprot-2025-energy]. The presumed ten protons pumped per NADH and six per succinate, plus one per ATP for transport, predict P/O ratios of 2.7 and 1.6, against measured 2.5 and 1.5 [@watt-2010-c-ring].

## Creatine phosphate

Muscle contains a small reserve of creatine phosphate (phosphocreatine), which rebuilds ATP in one step [@glancy-2021-muscle-energetics].

Creatine kinase catalyses MgADP + phosphocreatine + H+ ⇌ MgATP + creatine near equilibrium; the equilibrium constant is 100 at pH 7.0 and 1 mM Mg2+ [@glancy-2021-muscle-energetics; @lygate-2024-creatine-kinase]. Phosphocreatine exceeds ATP only twofold in heart and fourfold in skeletal muscle, enough to maintain ATP for a few seconds [@glancy-2021-muscle-energetics].

## Energy use by organ

At rest, a few small organs use much of the body's energy [@wang-2010-organ-rates; @zhu-2018-brain-energy].

MRI organ masses and Elia's specific rates predicted the 1575 kcal a day measured by calorimetry in 131 healthy adults [@wang-2010-organ-rates].

| Organ or tissue | Mean mass, kg | Resting rate, kcal/kg/day [@wang-2010-organ-rates] |
|---|---|---|
| Heart | 0.31 | 440 |
| Kidneys | 0.29 | 440 |
| Brain | 1.33 | 240 |
| Liver | 1.39 | 200 |
| Skeletal muscle | 26.3 | 13 |
| Adipose tissue | 19.4 | 4.5 |
| Other tissues | 24.7 | 12 |

:::unresolved
The importance of a creatine kinase shuttle from mitochondria to ATPases is disputed: one review states that it delivers 85% of cardiac oxidative energy [@lygate-2024-creatine-kinase], another notes very modest changes in knockout mice [@glancy-2021-muscle-energetics]. A review gives 50 kg of ATP a day for a healthy adult without method or reference [@kuhlbrandt-2015-mitochondria]. For [metformin](/medicines/metformin/), some reports find complex I inhibition only at millimolar concentrations, against 50–100 µM in plasma on 2 g daily [@petersen-2017-hepatic].
:::
