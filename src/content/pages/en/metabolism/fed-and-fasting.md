---
title: Fed and fasting
description: How insulin and glucagon switch the body between storing and releasing fuel, from glycogen to gluconeogenesis, ketone bodies and the course of a fast.
summary: After a meal, insulin from the pancreas promotes the storage of glucose as glycogen in the liver and muscle and of fat in fat tissue. Between meals, insulin falls and glucagon rises; the liver releases glucose from glycogen and then makes most of it anew from lactate, amino acids and glycerol. In longer fasts the liver converts fat into ketone bodies, which become the brain's main fuel and so spare muscle protein.
section: metabolism
order: 3
updated: 2026-10-21
related:
  - metabolism/glucose
  - metabolism/fats
  - metabolism/amino-acids
  - medicines/insulin
  - medicines/glucagon
  - medicines/metformin
  - foods/alcohol
---

## Insulin and glucagon

After a meal the pancreas releases insulin, which promotes fuel storage; between meals insulin falls, glucagon rises and stored fuel is released [@judge-2020-metabolism].

Insulin signals through its tyrosine kinase receptor, insulin receptor substrates and AKT; in muscle, heart and adipose tissue this translocates GLUT4 glucose transporters to the plasma membrane [@judge-2020-metabolism]. In hepatocytes, AKT phosphorylates FOXO1 and excludes it from the nucleus, which lowers transcription of PCK1 and G6PC1 [@petersen-2017-hepatic]. Glucagon raises hepatic cAMP; protein kinase A then inactivates glycogen synthase, activates glycogen phosphorylase through phosphorylase kinase and lowers fructose 2,6-bisphosphate, an inhibitor of fructose-1,6-bisphosphatase [@petersen-2017-hepatic]. Insulin also suppresses adipose lipolysis [@petersen-2017-hepatic; @judge-2020-metabolism]; see [insulin](/medicines/insulin/) and [glucagon](/medicines/glucagon/).

## Glycogen

The liver stores glucose as glycogen after a meal and releases it between meals [@taylor-1996-liver-glycogen].

Glucose 6-phosphate activates liver glycogen synthase allosterically, and glucose favours the inactivation of glycogen phosphorylase [@petersen-2017-hepatic]. In eight healthy adults, liver glycogen fell overnight from 350 to 207 mmol/L and peaked at 316 mmol/L a mean 318 minutes after an 824-kcal liquid meal with 67.3% of its energy as glucose [@taylor-1996-liver-glycogen]. After an overnight fast, ethanol lowered plasma glucose below 50 mg/100 ml in five of seven patients with previous [alcohol](/foods/alcohol/) hypoglycaemia, and glucagon did not raise it [@freinkel-1963-hypoglycaemia].

## Gluconeogenesis

Between meals the liver, and in long fasts also the kidney, makes glucose from lactate, amino acids and glycerol [@petersen-2017-hepatic; @owen-1969-liver-kidney].

Pyruvate carboxylase, activated by acetyl-CoA, phosphoenolpyruvate carboxykinase, fructose-1,6-bisphosphatase and glucose-6-phosphatase bypass the irreversible steps of glycolysis [@judge-2020-metabolism].

::pathway{id="gluconeogenesis"}

β-Oxidation degrades even-chain fatty acids to acetyl-CoA [@uniprot-2025-uniprotkb], which contributes no net carbon to gluconeogenesis [@petersen-2017-hepatic]. Pyruvate dehydrogenase is irreversible, and the citric acid cycle releases two CO2 for each acetyl-CoA, leaving no net oxaloacetate for glucose [@judge-2020-metabolism]. The glyoxylate cycle, which bypasses these decarboxylations in plants and bacteria, has not been demonstrated in mammals [@judge-2020-metabolism; @cahill-1966-fasting].

## Ketone bodies

When insulin is low and fat breakdown high, the liver converts fatty acids into ketone bodies, a fuel for the brain, heart and skeletal muscle [@puchalska-2017-ketone].

Malonyl-CoA, formed in the fed state, inhibits carnitine palmitoyltransferase 1, which mediates the entry of long-chain fatty acids into mitochondria [@mcgarry-1977-malonyl-coa; @puchalska-2017-ketone].

::pathway{id="ketogenesis"}

Hepatocytes lack succinyl-CoA:3-oxoacid CoA transferase, so the liver exports ketone bodies; other tissues activate acetoacetate with it, without ATP [@puchalska-2017-ketone]. Total ketone bodies rise from about 100–250 µM to about 1 mM after 24 hours of fasting and up to 20 mM in diabetic ketoacidosis [@puchalska-2017-ketone].

::pathway{id="ketone-body-oxidation"}

## The course of a fast

As a fast lengthens, the body shifts from glycogen to new glucose and then to fat and ketone bodies, sparing muscle protein [@cahill-1966-fasting; @owen-1967-brain].

Gluconeogenesis supplied 47% of glucose production after 14 hours of fasting, 67% after 22 hours and 93% after 42 hours [@landau-1996-gluconeogenesis]. In six healthy men fasting for 180 hours, plasma glucose levelled off by the third day and 3-hydroxybutyrate rose from 0.016 to 4.23 mmol/L [@cahill-1966-fasting]. Their urinary nitrogen peaked on the fourth day, then declined [@cahill-1966-fasting]. In three obese adults fasting for 38 to 41 days, 3-hydroxybutyrate and acetoacetate had replaced glucose as the brain's main fuel [@owen-1967-brain]. In obese adults after 5 to 6 weeks, the kidney made 45% of the glucose produced, which totalled about 86 g a day [@owen-1969-liver-kidney].

:::unresolved
Whether insulin suppresses hepatic glucose production mainly within the liver or through adipose lipolysis is disputed: mice lacking hepatic AKT1, AKT2 and FOXO1 suppressed it normally, yet a selective rise in portal insulin suppressed it in dogs and humans [@petersen-2017-hepatic]. How [metformin](/medicines/metformin/) lowers gluconeogenesis, through AMPK, complex I or mitochondrial glycerol-3-phosphate dehydrogenase, is unsettled [@petersen-2017-hepatic]. Acetone, formed from acetoacetate, may link fat to glucose: its carbon enters plasma glucose in fasting adults, but net synthesis in humans is unproven [@reichard-1979-acetone].
:::
