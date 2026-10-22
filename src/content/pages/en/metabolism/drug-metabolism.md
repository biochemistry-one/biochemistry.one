---
title: How the body processes medicines
description: First-pass metabolism, the cytochrome P450 enzymes, conjugation, drug transporters, induction and inhibition, and the inherited differences behind them.
summary: Medicines are chemicals that the body alters and removes, mostly in the liver and the wall of the gut. One enzyme family, cytochrome P450, performs most of the alteration, other enzymes attach water-soluble groups, and transport proteins move the products out. People inherit differences in these steps, so the effect of a dose of codeine or clopidogrel differs between people.
section: metabolism
order: 8
updated: 2026-10-21
related:
  - medicines/codeine
  - medicines/clopidogrel
  - medicines/proton-pump-inhibitors
  - medicines/statins
  - medicines/metformin
  - method/evidence
---

## First pass

A swallowed tablet passes the gut wall and the liver before the rest of the body, and both remove part of the dose [@lown-1997-grapefruit; @greiner-1999-digoxin].

Enterocytes and hepatocytes both express CYP3A4 [@lown-1997-grapefruit].

## Oxidation by cytochrome P450

One enzyme family, cytochrome P450, performs most of the oxidation of medicines [@rendic-2015-p450-survey].

Each P450 of the endoplasmic reticulum membrane inserts one oxygen atom into its substrate and reduces the second to water, with two electrons from NADPH through cytochrome P450 oxidoreductase [@uniprot-2025-drug-metabolism]. Of 4192 reported oxidation and reduction reactions of 860 drugs, about 96% were P450 reactions: CYP3A4 27%, CYP2D6 13%, CYP2C9 10%, CYP2C19 and CYP1A2 9% each, CYP2E1 3% [@rendic-2015-p450-survey]. CYP2E1, with CYP1A2 and CYP2A6, oxidises [paracetamol](/medicines/paracetamol/) to the reactive imine NAPQI, 5% to 10% of its urinary metabolites [@mazaleuskaya-2015-paracetamol].

## Conjugation

Other enzymes attach a water-soluble group, so bile or urine can remove the drug [@uniprot-2025-drug-metabolism].

UGTs transfer glucuronic acid from UDP-glucuronate, sulfotransferases a sulfonate group from PAPS, NAT2 an acetyl group from acetyl-CoA and TPMT a methyl group from [S-adenosylmethionine](/metabolism/one-carbon/) [@uniprot-2025-drug-metabolism]. TPMT methylates the mercaptopurine formed from [azathioprine](/medicines/azathioprine/); 1 in 300 people of European or African ancestry have almost no TPMT activity [@fda-2026-azathioprine].

## Transporters

Transport proteins move drugs into and out of gut, liver and kidney cells [@uniprot-2025-drug-metabolism].

OATP1B1 (*SLCO1B1*) takes organic anions, statins among them, into the hepatocyte across its basolateral membrane; P-glycoprotein (ABCB1) and BCRP (ABCG2) pump drugs out across apical membranes [@uniprot-2025-drug-metabolism]. In 8 volunteers, 10 days of [rifampicin](/medicines/rifampicin/) 600 mg daily raised duodenal P-glycoprotein 3.5-fold and lowered the peak concentration of 1 mg oral [digoxin](/medicines/digoxin/) by 58% [@greiner-1999-digoxin].

## Induction and inhibition

Other medicines and some foods change the amount or activity of these proteins, and so the effect of a dose [@fda-2024-rifampicin; @lown-1997-grapefruit].

Rifampicin induces CYP1A2, CYP2C19, CYP3A4 and three further P450s, UGTs, sulfotransferases, carboxylesterases, P-glycoprotein and MRP2; oxycodone exposure falls by 86% [@fda-2024-rifampicin]. Grapefruit juice acts the other way: in 10 men, 8 oz of it three times daily for 6 days lowered enterocyte CYP3A4 protein by 62%, hepatic activity unchanged, and with the first glass felodipine peaked at 17.9 nmol/l against 5.5 with water [@lown-1997-grapefruit]. [Omeprazole](/medicines/proton-pump-inhibitors/) inhibits CYP2C19 and lowers the active metabolite of clopidogrel, and the FDA advises against the pair [@fda-2010-clopidogrel-omeprazole].

## Inherited differences

People differ in the speed of these steps, partly by inheritance [@fda-2026-codeine].

[Codeine](/medicines/codeine/) is a prodrug: CYP2D6 O-demethylates 5% to 10% of a dose to morphine; UGT2B7 and UGT2B4 conjugate 70% to 80% to codeine-6-glucuronide [@fda-2026-codeine]. Duplication of *CYP2D6* gives ultrarapid metabolism, 1% to 10% of white Europeans and North Americans; children have died of respiratory depression, and codeine is contraindicated below 12 years [@fda-2026-codeine].
::pathway{id="codeine-activation"}

[Clopidogrel](/medicines/clopidogrel/) is a prodrug too: esterases hydrolyse about 85% of a dose to an inactive acid, and two oxidations, CYP2C19 prominent in both, yield the thiol that blocks P2Y12 irreversibly [@sangkuhl-2010-clopidogrel]. Among 227 patients after coronary intervention, an ischaemic event or cardiovascular death within 1 year occurred in 20.9% of *CYP2C19\*2* carriers against 10.0% of others (hazard ratio 2.42, 95% CI 1.18 to 4.99) [@shuldiner-2009-clopidogrel].

::pathway{id="clopidogrel-activation"}

:::consensus
CPIC translates *CYP2D6* diplotype into an activity score, above 2.25 ultrarapid and 0 poor, and advises against codeine in both: toxicity in the one, weak analgesia in the other [@crews-2021-cpic-opioids]. For CYP2C19 intermediate and poor metabolisers CPIC advises prasugrel or ticagrelor, which lowered major ischaemic events in those phenotypes across seven trials with 15,949 patients (risk ratio 0.70, 95% CI 0.59 to 0.83) and not in non-carriers [@lee-2022-cpic-clopidogrel].
:::

:::industry
COGENT, funded by Cogentus Pharmaceuticals and stopped when the sponsor lost financing, randomised patients on aspirin and clopidogrel to omeprazole or placebo; among 3761 analysed, cardiovascular events at 180 days were 4.9% against 5.7% (hazard ratio 0.99, 95% CI 0.68 to 1.44) and gastrointestinal events 1.1% against 2.9% [@bhatt-2010-cogent]. In 18 volunteers given isoniazid, *NAT2* genotype accounted for 88% of the variance in apparent clearance, in a study funded by the maker of the preparations used [@kinzig-schippers-2005-nat2].
:::

:::unresolved
Whether proton-pump inhibitors blunt clopidogrel is unsettled: among Ontario patients taking clopidogrel after myocardial infarction, use of one was associated with reinfarction within 90 days (adjusted odds ratio 1.27, 95% CI 1.03 to 1.57), and the one randomised comparison, stopped early, found no cardiovascular difference [@juurlink-2009-clopidogrel; @bhatt-2010-cogent]. Morphine formation from codeine varies widely among people of one *CYP2D6* diplotype, from unknown causes [@crews-2021-cpic-opioids].
:::
