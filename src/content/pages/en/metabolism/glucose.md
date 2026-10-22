---
title: Glucose
description: How glucose is absorbed and enters cells, and how glycolysis, pyruvate dehydrogenase, the citric acid cycle and oxidative phosphorylation make ATP from it.
summary: Digestion breaks starch and sugars down to glucose, which carrier proteins move from the gut into the blood and then into cells. Inside cells, glycolysis splits glucose into two molecules of pyruvate, and mitochondria burn pyruvate to carbon dioxide with oxygen. Complete breakdown of one glucose molecule yields about 30 molecules of ATP, the cell's energy currency.
section: metabolism
order: 2
updated: 2026-10-21
related:
  - metabolism/energy
  - metabolism/fed-and-fasting
  - metabolism/vitamins
  - foods/grains
  - foods/sugar-and-fructose
  - foods/dairy
  - foods/alcohol
  - medicines/metformin
---

## Digestion and uptake

Gut enzymes split starch and sugars into single sugars, which carrier proteins move into the blood and then into cells [@ragueneau-2026-glucose; @uniprot-2025-glucose].

Amylases cut [starch](/foods/grains/) into maltose, maltotriose and limit dextrins; brush-border enzymes release glucose and split [lactose](/foods/dairy/) and [sucrose](/foods/sugar-and-fructose/) [@ragueneau-2026-glucose]. SGLT1 moves each glucose or galactose into enterocytes with 2 Na+, and GLUT2 releases them into the blood [@uniprot-2025-glucose].

::pathway{id="starch-digestion"}

GLUT1 carries glucose across the blood–brain barrier, GLUT2 serves hepatocytes, and GLUT3 is abundant in brain; insulin moves GLUT4 to the surface of muscle and fat cells [@uniprot-2025-glucose].

## Glycolysis

Glycolysis splits each glucose into two molecules of pyruvate inside the cell, for a net gain of two ATP [@ragueneau-2026-glucose].

::pathway{id="glycolysis"}

Hexokinases, phosphofructokinase-1 and pyruvate kinase catalyse its three physiologically irreversible steps [@ragueneau-2026-glucose]. Glucose 6-phosphate inhibits hexokinases; glucokinase, in hepatocytes and β cells, has a higher Km and less product inhibition, and acts as the β-cell glucose sensor [@ragueneau-2026-glucose; @uniprot-2025-glucose]. *GCK* variants cause MODY2 and familial hyperinsulinaemic hypoglycaemia [@uniprot-2025-glucose]. AMP, ADP and fructose 2,6-bisphosphate activate phosphofructokinase-1, which commits glucose to glycolysis, and ATP and citrate inhibit it [@uniprot-2025-glucose]; insulin raises and glucagon lowers fructose 2,6-bisphosphate [@ragueneau-2026-glucose]. Fructose 1,6-bisphosphate activates the liver and red-cell pyruvate kinase, and *PKLR* variants cause haemolytic anaemia [@ragueneau-2026-glucose; @uniprot-2025-glucose].

## Lactate and the Cori cycle

Without oxygen, and in cells without mitochondria such as red blood cells, pyruvate is reduced to lactate, which the liver turns back into glucose [@ragueneau-2026-glucose].

This reduction reoxidises the NADH formed in glycolysis [@ragueneau-2026-glucose]. Remaking one glucose by [gluconeogenesis](/metabolism/fed-and-fasting/) costs six high-energy phosphates, against two ATP from glycolysis [@ragueneau-2026-glucose]. Blood lactate above 5 mmol/l marks [metformin](/medicines/metformin/)-associated lactic acidosis [@fda-2018-metformin].

## Pyruvate dehydrogenase and thiamine

In mitochondria, an enzyme complex that needs [vitamin B1](/metabolism/vitamins/) converts pyruvate irreversibly into acetyl-CoA [@ragueneau-2026-glucose; @patel-2014-pdh; @turck-2016-thiamin; @judge-2020-metabolism].

::pathway{id="pyruvate-dehydrogenase"}

E1 decarboxylates pyruvate with thiamine pyrophosphate [@patel-2014-pdh; @uniprot-2025-glucose]. Four kinases inactivate E1 by phosphorylation, and two phosphatases reactivate it [@ragueneau-2026-glucose; @uniprot-2025-glucose]; fasting induces PDK4, and dichloroacetate inhibits PDK1–3 [@uniprot-2025-glucose]. Thiamine deficiency causes beriberi and Wernicke encephalopathy, the latter associated with [alcoholism](/foods/alcohol/) [@turck-2016-thiamin; @ragueneau-2026-glucose].

## Citric acid cycle

The citric acid cycle breaks the acetyl group down to carbon dioxide and passes its electrons to carriers [@ragueneau-2026-glucose].

::pathway{id="citric-acid-cycle"}

Each acetyl-CoA yields three NADH, one enzyme-bound FADH2, one GTP or ATP and two CO2 [@ragueneau-2026-glucose]. ADP activates and NADH inhibits isocitrate dehydrogenase [@ragueneau-2026-glucose]; Ca2+ and ADP stimulate 2-oxoglutarate dehydrogenase, and ATP and NADH restrain it [@uniprot-2025-glucose].

## Oxidative phosphorylation

Mitochondria pass these electrons to oxygen and use the released [energy](/metabolism/energy/) to make most ATP from glucose [@ragueneau-2026-glucose].

Complexes I, III and IV translocate protons out of the matrix; their return drives ATP synthase [@uniprot-2025-energy]. Measured P/O ratios are 2.5 for NADH and 1.5 for succinate [@watt-2010-c-ring]. Electrons from cytosolic NADH enter through the malate–aspartate or the glycerol-phosphate shuttle; the latter bypasses complex I [@ragueneau-2026-glucose].

## ATP per glucose

Burning one glucose completely yields about 30 ATP [@milo-2015-glucose].

At those ratios, 10 NADH and 2 FADH2 yield 28 ATP; glycolysis and the citric acid cycle add 2 each, 32 in all [@ragueneau-2026-glucose]. Glycolytic NADH oxidised through the glycerol-phosphate shuttle yields 1.5 ATP instead of 2.5, which lowers the total to 30 [@ragueneau-2026-glucose].

:::unresolved
Tissue yields remain uncertain [@ragueneau-2026-glucose]: the eight-subunit c-ring of ATP synthase predicts P/O ratios of 2.7 and 1.6, against measured 2.5 and 1.5 [@watt-2010-c-ring], and proton leak uncouples about 20% of mitochondrial oxygen use at rest [@rolfe-1997-energy]. Apical GLUT2 is disputed: in perfused rat jejunum, glucose recruited GLUT2 to the brush border, a route up to three times larger than SGLT1 [@kellett-2000-glut2]; in mice, apical GLUT2 was not seen after 4 g/kg glucose, and lack of SGLT1 cut intestinal tracer retention by 80% [@roder-2014-sglt1].
:::
