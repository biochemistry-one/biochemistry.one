---
title: Fats
description: How the body digests fat, carries it in lipoproteins, burns and makes fatty acids, and why linoleic and α-linolenic acid must come from food.
summary: Fat in food is split in the gut, rebuilt in the gut wall and carried in the blood inside particles of fat and protein called lipoproteins. Cells burn fatty acids inside mitochondria; liver and fat cells also make them from carbohydrate, and a molecule formed during this synthesis slows the entry of fatty acids into mitochondria. Two fatty acids, linoleic and α-linolenic acid, cannot be made in the body and must come from food.
section: metabolism
order: 4
updated: 2026-10-21
related:
  - metabolism/energy
  - metabolism/fed-and-fasting
  - metabolism/cholesterol
  - foods/palm-and-seed-oils
  - foods/fish-and-omega-3
  - foods/sugar-and-fructose
  - medicines/statins
---

## Digestion and absorption

In the small intestine, enzymes from the pancreas split fat into fatty acids and monoacylglycerol, which the gut lining rebuilds into fat [@feingold-2024-lipoproteins; @uniprot-2025-knowledgebase].

Pancreatic lipase prefers the sn-1 and sn-3 esters of triacylglycerol; colipase anchors it to the lipid–water interface against displacement by bile salts [@uniprot-2025-knowledgebase]. In enterocytes, MGAT2 and DGAT1, both highly expressed in the intestine, resynthesise triacylglycerol [@yen-2015-triacylglycerol].

::pathway{id="monoacylglycerol-pathway"}

## Lipoproteins

Fat does not dissolve in blood, so it travels in lipoproteins, particles of fat coated with phospholipid, cholesterol and proteins [@feingold-2024-lipoproteins].

Enterocytes secrete chylomicrons into lymph, one apoB-48 per particle; the liver secretes VLDL, one apoB-100 per particle [@feingold-2024-lipoproteins]. Lipoprotein lipase, anchored to capillary endothelium by GPIHBP1, hydrolyses their triacylglycerol; apoC-II activates it and apoC-III inhibits it [@feingold-2024-lipoproteins; @uniprot-2025-fats]. Loss-of-function variants in *LPL*, *APOC2*, *GPIHBP1*, *LMF1* or *APOA5* can cause familial chylomicronaemia syndrome [@feingold-2024-lipoproteins].

The liver takes up chylomicron remnants and about half of VLDL remnants through apoE; hepatic lipase converts the rest to LDL [@feingold-2024-lipoproteins]. Hepatic LDL receptors clear about 70% of LDL, and [statins](/medicines/statins/) increase their number [@feingold-2024-lipoproteins]. HDL forms as ABCA1 loads apoA-I with cholesterol and phospholipid, and LCAT esterifies that cholesterol [@feingold-2024-lipoproteins]; see [cholesterol](/metabolism/cholesterol/).

## Carnitine shuttle and β-oxidation

Cells burn fatty acids inside mitochondria, two carbon atoms at a time [@ragueneau-2026-fats].

CPT1 on the outer mitochondrial membrane transfers long-chain acyl groups from CoA to carnitine; SLC25A20 carries acylcarnitine into the matrix, and CPT2 restores acyl-CoA there [@ragueneau-2026-fats]. In each turn of β-oxidation, the acyl-CoA is dehydrogenated with FAD, hydrated, dehydrogenated with NAD+ and cleaved with CoA, releasing acetyl-CoA; palmitoyl-CoA takes seven turns [@ragueneau-2026-fats].

::pathway{id="beta-oxidation"}

CPT1A deficiency causes hypoketotic hypoglycaemia after fasting; myopathic CPT2 deficiency causes myoglobinuria with prolonged exercise or fasting [@uniprot-2025-fats].

## Fatty acid synthesis and malonyl-CoA

The liver and fat tissue can make fatty acids from carbohydrate [@ragueneau-2026-fats].

Mitochondrial acetyl-CoA reaches the cytosol as citrate, which ATP-citrate lyase cleaves [@ragueneau-2026-fats]. Acetyl-CoA carboxylase, a biotin enzyme activated by citrate and inactivated by AMPK phosphorylation, forms malonyl-CoA [@uniprot-2025-fats]. Fatty acid synthase joins one acetyl-CoA and seven malonyl-CoA into palmitate, using 14 NADPH [@ragueneau-2026-fats]. Unlike β-oxidation, synthesis is cytosolic, uses an acyl-carrier domain and NADPH, and passes through (3R)- instead of (3S)-hydroxyacyl intermediates [@uniprot-2025-fats].

::pathway{id="oleic-acid-synthesis"}

Malonyl-CoA also inhibits CPT1, which limits simultaneous synthesis and oxidation [@ragueneau-2026-fats; @puchalska-2017-ketone]. In rat liver homogenates, McGarry and colleagues found in 1977 that malonyl-CoA inhibited ketogenesis from oleate but not from octanoate, which needs no carnitine [@mcgarry-1977-malonyl-coa]. In young men, fructose or sucrose drinks for 7 weeks raised hepatic de novo lipogenesis [@geidl-flueck-2021-lipogenesis]; see [sugar and fructose](/foods/sugar-and-fructose/).

## Essential fatty acids

The body cannot make linoleic acid (omega-6) or α-linolenic acid (omega-3), so both must come from food [@efsa-2010-dietary-fats].

SCD desaturates at Δ9, FADS2 at Δ6 and FADS1 at Δ5; humans lack Δ12- and Δ15-desaturases [@uniprot-2025-knowledgebase; @uniprot-2025-pufa; @efsa-2010-dietary-fats]. Desaturases and elongases convert linoleic acid to arachidonic acid and α-linolenic acid to EPA, and one peroxisomal β-oxidation cycle completes DHA [@uniprot-2025-pufa]; see [palm and seed oils](/foods/palm-and-seed-oils/) and [fish and omega-3](/foods/fish-and-omega-3/). When linoleic acid is scarce, the same enzymes convert oleic acid to 5,8,11-eicosatrienoic acid [@wene-1975-efa]. In four healthy men infused intravenously for 2 weeks with fat-free glucose and amino acids, linoleic acid fell from 48.8% to 9.8% of plasma cholesteryl-ester fatty acids, and eicosatrienoic acid appeared [@wene-1975-efa].

:::consensus
The European Food Safety Authority set adequate intakes of 4% of energy for linoleic acid and 0.5% for α-linolenic acid [@efsa-2010-dietary-fats].
:::

:::unresolved
How fatty acids and monoacylglycerols enter enterocytes is unsettled: lack of CD36 in humans and mice, or of FATP4 in mice, causes no fat malabsorption [@feingold-2024-lipoproteins]. So-called fatty acid transport proteins carry acyl-CoA synthetase motifs; their transport function is unproven [@ragueneau-2026-fats]. How hepatocytes secrete VLDL is unresolved [@feingold-2024-lipoproteins].
:::
