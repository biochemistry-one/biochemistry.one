import { escapeHtml } from "../markdown/html.mjs";

export const MAP_SIZE = { width: 1440, height: 900 };

export const COMPARTMENTS = [
  { id: "cytosol", label: "Cytosol", x: 24, y: 44, labelOnly: true },
  { id: "mitochondrion", label: "Mitochondrion", x: 520, y: 506, width: 640, height: 372, radius: 64, labelAt: "bottom-left" },
  { id: "er", label: "Endoplasmic reticulum", x: 1135, y: 160, width: 285, height: 262, radius: 28, labelAt: "bottom-right" },
];

export const PATHWAYS = [
  { id: "glycolysis", family: "carbohydrate", label: "Glycolysis", page: "metabolism/glucose", title: { x: 250, y: 330, rotate: -90 } },
  { id: "gluconeogenesis", family: "carbohydrate", label: "Gluconeogenesis", page: "metabolism/fed-and-fasting", title: { x: 412, y: 190, rotate: 90 } },
  { id: "glycogen", family: "carbohydrate", label: "Glycogen", page: "metabolism/fed-and-fasting" },
  { id: "pentose-phosphate", family: "carbohydrate", label: "Pentose phosphate pathway", page: "metabolism/glucose", title: { x: 38, y: 302, rotate: -90 } },
  { id: "fructose", family: "carbohydrate", label: "Fructose", page: "foods/sugar-and-fructose" },
  { id: "citric-acid-cycle", family: "energy", label: "Citric acid cycle", page: "metabolism/glucose", title: { x: 860, y: 704 } },
  { id: "oxidative-phosphorylation", family: "energy", label: "Oxidative phosphorylation", page: "metabolism/energy", title: { x: 870, y: 880 } },
  { id: "beta-oxidation", family: "lipid", label: "Beta-oxidation", page: "metabolism/fats", title: { x: 548, y: 650, rotate: -90 } },
  { id: "fatty-acid-synthesis", family: "lipid", label: "Fatty acid synthesis", page: "metabolism/fats", title: { x: 990, y: 482 } },
  { id: "lipolysis", family: "lipid", label: "Glycerol", page: "metabolism/fats" },
  { id: "ketogenesis", family: "lipid", label: "Ketogenesis", page: "metabolism/fed-and-fasting", title: { x: 640, y: 790 } },
  { id: "cholesterol", family: "lipid", label: "Cholesterol synthesis", page: "metabolism/cholesterol", title: { x: 836, y: 150 } },
  { id: "urea-cycle", family: "amino", label: "Urea cycle", page: "metabolism/amino-acids", title: { x: 1350, y: 506 } },
  { id: "amino-acids", family: "amino", label: "Amino acids", page: "metabolism/amino-acids", title: { x: 120, y: 708 } },
  { id: "one-carbon", family: "one-carbon", label: "Folate and methionine cycles", page: "metabolism/one-carbon", title: { x: 260, y: 892 } },
  { id: "ethanol", family: "xenobiotic", label: "Ethanol", page: "foods/alcohol" },
];

export const NODES = [
  { id: "glycogen", label: "Glycogen", x: 110, y: 82 },
  { id: "glucose", label: "Glucose", x: 330, y: 82 },
  { id: "g6p", label: "Glucose-6-P", x: 330, y: 150 },
  { id: "f6p", label: "Fructose-6-P", x: 330, y: 218 },
  { id: "f16bp", label: "Fructose-1,6-P₂", x: 330, y: 286 },
  { id: "gap", label: "Glyceraldehyde-3-P", x: 330, y: 354 },
  { id: "pg3", label: "3-Phosphoglycerate", x: 330, y: 422 },
  { id: "pep", label: "Phosphoenolpyruvate", x: 330, y: 490 },
  { id: "pyruvate", label: "Pyruvate", x: 330, y: 572 },
  { id: "lactate", label: "Lactate", x: 130, y: 572 },
  { id: "ru5p", label: "Ribulose-5-P", x: 110, y: 218 },
  { id: "r5p", label: "Ribose-5-P", x: 110, y: 302 },
  { id: "nucleotides", label: "Nucleotides", x: 110, y: 386 },
  { id: "fructose", label: "Fructose", x: 520, y: 150 },
  { id: "f1p", label: "Fructose-1-P", x: 520, y: 250 },
  { id: "dhap", label: "DHAP", x: 520, y: 354 },
  { id: "glycerol", label: "Glycerol", x: 680, y: 290 },
  { id: "g3p", label: "Glycerol-3-P", x: 680, y: 354 },
  { id: "acyl-coa-c", label: "Fatty acyl-CoA", x: 600, y: 452 },
  { id: "acetyl-coa-c", label: "Acetyl-CoA", x: 760, y: 452 },
  { id: "malonyl-coa", label: "Malonyl-CoA", x: 920, y: 452 },
  { id: "palmitate", label: "Palmitate", x: 1060, y: 452 },
  { id: "tag", label: "Triacylglycerols", x: 1220, y: 452 },
  { id: "acetoacetyl-coa", label: "Acetoacetyl-CoA", x: 760, y: 372 },
  { id: "hmg-coa", label: "HMG-CoA", x: 760, y: 292 },
  { id: "mevalonate", label: "Mevalonate", x: 760, y: 200 },
  { id: "ipp", label: "Isopentenyl-PP", x: 900, y: 200 },
  { id: "fpp", label: "Farnesyl-PP", x: 1040, y: 200 },
  { id: "ubiquinone", label: "Ubiquinone", x: 950, y: 106 },
  { id: "dolichol", label: "Dolichol", x: 1060, y: 106 },
  { id: "prenylation", label: "Prenylated proteins", x: 1190, y: 106 },
  { id: "squalene", label: "Squalene", x: 1195, y: 200 },
  { id: "lanosterol", label: "Lanosterol", x: 1330, y: 200 },
  { id: "dhc7", label: "7-Dehydrocholesterol", x: 1330, y: 290 },
  { id: "cholesterol", label: "Cholesterol", x: 1195, y: 290 },
  { id: "bile-acids", label: "Bile acids", x: 1195, y: 380 },
  { id: "steroids", label: "Steroid hormones", x: 990, y: 290 },
  { id: "vitamin-d3", label: "Vitamin D₃", x: 1330, y: 380 },
  { id: "acyl-coa-m", label: "Fatty acyl-CoA", x: 600, y: 548 },
  { id: "acetyl-coa-m", label: "Acetyl-CoA", x: 630, y: 604 },
  { id: "ketones", label: "Ketone bodies", x: 640, y: 752 },
  { id: "oaa", label: "Oxaloacetate", x: 786, y: 626 },
  { id: "citrate", label: "Citrate", x: 860, y: 596 },
  { id: "isocitrate", label: "Isocitrate", x: 934, y: 626 },
  { id: "akg", label: "α-Ketoglutarate", x: 964, y: 700 },
  { id: "succinyl-coa", label: "Succinyl-CoA", x: 934, y: 774 },
  { id: "succinate", label: "Succinate", x: 860, y: 804 },
  { id: "fumarate", label: "Fumarate", x: 786, y: 774 },
  { id: "malate", label: "Malate", x: 756, y: 700 },
  { id: "complex-1", label: "I", x: 700, y: 846, kind: "complex" },
  { id: "q", label: "Q", x: 760, y: 846, kind: "complex" },
  { id: "complex-3", label: "III", x: 820, y: 846, kind: "complex" },
  { id: "cyt-c", label: "c", x: 880, y: 846, kind: "complex" },
  { id: "complex-4", label: "IV", x: 940, y: 846, kind: "complex" },
  { id: "atp-synthase", label: "ATP synthase", x: 1040, y: 846, kind: "complex" },
  { id: "glutamate", label: "Glutamate", x: 1076, y: 770 },
  { id: "ammonium", label: "NH₄⁺ + HCO₃⁻", x: 1090, y: 548 },
  { id: "carbamoyl-p", label: "Carbamoyl-P", x: 1090, y: 600 },
  { id: "citrulline", label: "Citrulline", x: 1090, y: 652 },
  { id: "argininosuccinate", label: "Argininosuccinate", x: 1300, y: 640 },
  { id: "arginine", label: "Arginine", x: 1300, y: 560 },
  { id: "ornithine", label: "Ornithine", x: 1220, y: 520 },
  { id: "urea", label: "Urea", x: 1400, y: 560 },
  { id: "ethanol", label: "Ethanol", x: 1300, y: 730 },
  { id: "acetaldehyde", label: "Acetaldehyde", x: 1300, y: 800 },
  { id: "acetate", label: "Acetate", x: 1300, y: 870 },
  { id: "alanine", label: "Alanine", x: 130, y: 640 },
  { id: "serine", label: "Serine", x: 210, y: 470 },
  { id: "folic-acid", label: "Folic acid", x: 70, y: 760 },
  { id: "thf", label: "THF", x: 70, y: 820 },
  { id: "ch2-thf", label: "5,10-CH₂-THF", x: 210, y: 780 },
  { id: "ch3-thf", label: "5-CH₃-THF", x: 210, y: 860 },
  { id: "homocysteine", label: "Homocysteine", x: 330, y: 860 },
  { id: "methionine", label: "Methionine", x: 330, y: 780 },
  { id: "sam", label: "SAM", x: 450, y: 780 },
  { id: "sah", label: "SAH", x: 450, y: 860 },
];

export const EDGES = [
  { from: "glycogen", to: "g6p", pathway: "glycogen", enzyme: "Via glucose-1-phosphate: glycogen phosphorylase for breakdown, glycogen synthase via UDP-glucose for synthesis", reversible: true },
  { from: "glucose", to: "g6p", pathway: "glycolysis", enzyme: "Hexokinase, glucokinase", label: "HK", back: { pathway: "gluconeogenesis", enzyme: "Glucose-6-phosphatase", label: "G6Pase" } },
  { from: "g6p", to: "f6p", pathway: "glycolysis", enzyme: "Phosphoglucose isomerase", reversible: true },
  { from: "f6p", to: "f16bp", pathway: "glycolysis", enzyme: "Phosphofructokinase-1", label: "PFK-1", back: { pathway: "gluconeogenesis", enzyme: "Fructose-1,6-bisphosphatase", label: "FBPase" } },
  { from: "f16bp", to: "gap", pathway: "glycolysis", enzyme: "Aldolase A", reversible: true },
  { from: "dhap", to: "gap", pathway: "glycolysis", enzyme: "Triose phosphate isomerase", reversible: true },
  { from: "gap", to: "pg3", pathway: "glycolysis", enzyme: "GAPDH, phosphoglycerate kinase (NADH, ATP)", reversible: true },
  { from: "pg3", to: "pep", pathway: "glycolysis", enzyme: "Phosphoglycerate mutase, enolase", reversible: true },
  { from: "pep", to: "pyruvate", pathway: "glycolysis", enzyme: "Pyruvate kinase (ATP)", label: "PK", back: { pathway: "gluconeogenesis", enzyme: "Pyruvate carboxylase and PEP carboxykinase, via oxaloacetate", label: "PC, PEPCK" } },
  { from: "pyruvate", to: "lactate", pathway: "glycolysis", enzyme: "Lactate dehydrogenase", label: "LDH", reversible: true },
  { from: "g6p", to: "ru5p", pathway: "pentose-phosphate", enzyme: "Glucose-6-phosphate dehydrogenase and two further steps (2 NADPH)", label: "G6PD" },
  { from: "ru5p", to: "r5p", pathway: "pentose-phosphate", enzyme: "Ribose-5-phosphate isomerase", reversible: true },
  { from: "r5p", to: "nucleotides", pathway: "pentose-phosphate", enzyme: "PRPP synthetase and several steps" },
  { from: "fructose", to: "f1p", pathway: "fructose", enzyme: "Ketohexokinase (fructokinase)", label: "KHK" },
  { from: "f1p", to: "dhap", pathway: "fructose", enzyme: "Aldolase B; glyceraldehyde enters as glyceraldehyde-3-P via triokinase", label: "Aldolase B" },
  { from: "glycerol", to: "g3p", pathway: "lipolysis", enzyme: "Glycerol kinase (liver)" },
  { from: "g3p", to: "dhap", pathway: "lipolysis", enzyme: "Glycerol-3-phosphate dehydrogenase", reversible: true },
  { from: "pyruvate", to: "acetyl-coa-m", pathway: "citric-acid-cycle", enzyme: "Pyruvate dehydrogenase complex (thiamine pyrophosphate)", label: "PDH" },
  { from: "acetyl-coa-m", to: "citrate", pathway: "citric-acid-cycle", enzyme: "Citrate synthase, with oxaloacetate" },
  { from: "citrate", to: "acetyl-coa-c", pathway: "fatty-acid-synthesis", enzyme: "Citrate export and ATP-citrate lyase", label: "ACLY" },
  { from: "acetyl-coa-c", to: "malonyl-coa", pathway: "fatty-acid-synthesis", enzyme: "Acetyl-CoA carboxylase 1 (ATP, biotin)", label: "ACC" },
  { from: "malonyl-coa", to: "palmitate", pathway: "fatty-acid-synthesis", enzyme: "Fatty acid synthase (NADPH)", label: "FASN" },
  { from: "palmitate", to: "tag", pathway: "fatty-acid-synthesis", enzyme: "Acyl-CoA synthetase, acyltransferases, with glycerol-3-P" },
  { from: "acyl-coa-c", to: "acyl-coa-m", pathway: "beta-oxidation", enzyme: "Carnitine palmitoyltransferase 1 and 2 (carnitine shuttle)", label: "CPT1" },
  { from: "acyl-coa-m", to: "acetyl-coa-m", pathway: "beta-oxidation", enzyme: "Beta-oxidation spiral (FADH₂, NADH)" },
  { from: "acetyl-coa-m", to: "ketones", pathway: "ketogenesis", enzyme: "Thiolase, HMG-CoA synthase 2, HMG-CoA lyase (liver)", label: "HMGCS2" },
  { from: "acetyl-coa-c", to: "acetoacetyl-coa", pathway: "cholesterol", enzyme: "Acetyl-CoA acetyltransferase 2" },
  { from: "acetoacetyl-coa", to: "hmg-coa", pathway: "cholesterol", enzyme: "HMG-CoA synthase 1" },
  { from: "hmg-coa", to: "mevalonate", pathway: "cholesterol", enzyme: "HMG-CoA reductase (2 NADPH), rate-limiting", label: "HMGCR", labelSide: "left", inhibitors: [{ name: "Statins", page: "medicines/statins" }] },
  { from: "mevalonate", to: "ipp", pathway: "cholesterol", enzyme: "Mevalonate kinase, phosphomevalonate kinase, mevalonate diphosphate decarboxylase (3 ATP)" },
  { from: "ipp", to: "fpp", pathway: "cholesterol", enzyme: "Isopentenyl-PP isomerase, farnesyl-PP synthase", label: "FDPS" },
  { from: "fpp", to: "ubiquinone", pathway: "cholesterol", enzyme: "Polyprenyl synthesis toward coenzyme Q10" },
  { from: "fpp", to: "dolichol", pathway: "cholesterol", enzyme: "cis-Prenyltransferase" },
  { from: "fpp", to: "prenylation", pathway: "cholesterol", enzyme: "Farnesyltransferase, geranylgeranyl transferases" },
  { from: "fpp", to: "squalene", pathway: "cholesterol", enzyme: "Squalene synthase (NADPH)", label: "FDFT1" },
  { from: "squalene", to: "lanosterol", pathway: "cholesterol", enzyme: "Squalene epoxidase, lanosterol synthase", label: "SQLE" },
  { from: "lanosterol", to: "dhc7", pathway: "cholesterol", enzyme: "Several steps (Kandutsch-Russell branch; the Bloch branch ends with desmosterol and DHCR24)" },
  { from: "dhc7", to: "cholesterol", pathway: "cholesterol", enzyme: "7-Dehydrocholesterol reductase", label: "DHCR7" },
  { from: "cholesterol", to: "bile-acids", pathway: "cholesterol", enzyme: "Cholesterol 7α-hydroxylase and further steps (liver)", label: "CYP7A1" },
  { from: "cholesterol", to: "steroids", pathway: "cholesterol", enzyme: "Cholesterol side-chain cleavage enzyme in mitochondria of adrenal and gonadal cells", label: "CYP11A1" },
  { from: "dhc7", to: "vitamin-d3", pathway: "cholesterol", enzyme: "UVB photolysis in skin, then thermal isomerisation", label: "UVB", page: "medicines/colecalciferol" },
  { from: "citrate", to: "isocitrate", pathway: "citric-acid-cycle", enzyme: "Aconitase", reversible: true, arc: true },
  { from: "isocitrate", to: "akg", pathway: "citric-acid-cycle", enzyme: "Isocitrate dehydrogenase (NADH, CO₂)", arc: true },
  { from: "akg", to: "succinyl-coa", pathway: "citric-acid-cycle", enzyme: "α-Ketoglutarate dehydrogenase (NADH, CO₂)", arc: true },
  { from: "succinyl-coa", to: "succinate", pathway: "citric-acid-cycle", enzyme: "Succinyl-CoA synthetase (GTP or ATP)", reversible: true, arc: true },
  { from: "succinate", to: "fumarate", pathway: "citric-acid-cycle", enzyme: "Succinate dehydrogenase, complex II (FADH₂)", reversible: true, arc: true },
  { from: "fumarate", to: "malate", pathway: "citric-acid-cycle", enzyme: "Fumarase", reversible: true, arc: true },
  { from: "malate", to: "oaa", pathway: "citric-acid-cycle", enzyme: "Malate dehydrogenase (NADH)", reversible: true, arc: true },
  { from: "oaa", to: "citrate", pathway: "citric-acid-cycle", enzyme: "Citrate synthase", arc: true },
  { from: "complex-1", to: "q", pathway: "oxidative-phosphorylation", enzyme: "NADH dehydrogenase (complex I) reduces ubiquinone; succinate dehydrogenase (complex II) also reduces ubiquinone", inhibitors: [{ name: "Metformin", page: "medicines/metformin", debated: true, side: "above" }] },
  { from: "q", to: "complex-3", pathway: "oxidative-phosphorylation", enzyme: "Ubiquinol to cytochrome bc1 complex (complex III)" },
  { from: "complex-3", to: "cyt-c", pathway: "oxidative-phosphorylation", enzyme: "Complex III reduces cytochrome c" },
  { from: "cyt-c", to: "complex-4", pathway: "oxidative-phosphorylation", enzyme: "Cytochrome c oxidase (complex IV) reduces O₂ to H₂O" },
  { from: "complex-4", to: "atp-synthase", pathway: "oxidative-phosphorylation", enzyme: "Complexes I, III and IV pump protons; the proton gradient drives ATP synthase" },
  { from: "akg", to: "glutamate", pathway: "amino-acids", enzyme: "Transamination (aminotransferases, pyridoxal phosphate); glutamate dehydrogenase", reversible: true },
  { from: "ammonium", to: "carbamoyl-p", pathway: "urea-cycle", enzyme: "Carbamoyl phosphate synthetase 1 (2 ATP, activated by N-acetylglutamate)", label: "CPS1", labelSide: "left" },
  { from: "carbamoyl-p", to: "citrulline", pathway: "urea-cycle", enzyme: "Ornithine transcarbamylase, with ornithine", label: "OTC", labelSide: "left" },
  { from: "citrulline", to: "argininosuccinate", pathway: "urea-cycle", enzyme: "Argininosuccinate synthetase, with aspartate (ATP)", label: "ASS1" },
  { from: "argininosuccinate", to: "arginine", pathway: "urea-cycle", enzyme: "Argininosuccinate lyase, releases fumarate", label: "ASL" },
  { from: "arginine", to: "urea", pathway: "urea-cycle", enzyme: "Arginase 1", label: "ARG1" },
  { from: "arginine", to: "ornithine", pathway: "urea-cycle", enzyme: "Arginase 1 regenerates ornithine" },
  { from: "ornithine", to: "citrulline", pathway: "urea-cycle", enzyme: "Ornithine import (ORNT1) to ornithine transcarbamylase" },
  { from: "ethanol", to: "acetaldehyde", pathway: "ethanol", enzyme: "Alcohol dehydrogenase (ADH1B), CYP2E1", label: "ADH" },
  { from: "acetaldehyde", to: "acetate", pathway: "ethanol", enzyme: "Aldehyde dehydrogenase 2 (ALDH2)", label: "ALDH2" },
  { from: "pyruvate", to: "alanine", pathway: "amino-acids", enzyme: "Alanine aminotransferase", label: "ALT", reversible: true },
  { from: "pg3", to: "serine", pathway: "amino-acids", enzyme: "PHGDH, PSAT1, PSPH (three steps)" },
  { from: "folic-acid", to: "thf", pathway: "one-carbon", enzyme: "Dihydrofolate reductase, two reductions (NADPH)", label: "DHFR", page: "medicines/folic-acid" },
  { from: "thf", to: "ch2-thf", pathway: "one-carbon", enzyme: "Serine hydroxymethyltransferase: serine to glycine", label: "SHMT", reversible: true },
  { from: "ch2-thf", to: "ch3-thf", pathway: "one-carbon", enzyme: "Methylenetetrahydrofolate reductase", label: "MTHFR" },
  { from: "ch3-thf", to: "thf", pathway: "one-carbon", enzyme: "Methionine synthase (vitamin B12) transfers the methyl group to homocysteine" },
  { from: "homocysteine", to: "methionine", pathway: "one-carbon", enzyme: "Methionine synthase (vitamin B12)", label: "MTR, B12" },
  { from: "methionine", to: "sam", pathway: "one-carbon", enzyme: "Methionine adenosyltransferase (ATP)", label: "MAT" },
  { from: "sam", to: "sah", pathway: "one-carbon", enzyme: "Methyltransferases donate the methyl group" },
  { from: "sah", to: "homocysteine", pathway: "one-carbon", enzyme: "S-adenosylhomocysteine hydrolase", label: "AHCY", reversible: true },
  { from: "serine", to: "ch2-thf", pathway: "one-carbon", enzyme: "Serine supplies the carbon of 5,10-methylene-THF" },
];

const TCA = { cx: 860, cy: 700, radius: 104 };
const FONT = { node: 13, complex: 12, edge: 10.5, title: 13 };
const CHAR_WIDTH = { node: 6.9, complex: 7, edge: 5.8 };

function nodeBox(node, label) {
  if (node.cycle) return { width: 10, height: 10 };
  const complex = node.kind === "complex";
  const width = Math.max(complex ? 22 : 30, label.length * (complex ? CHAR_WIDTH.complex : CHAR_WIDTH.node) + (complex ? 12 : 10));
  return { width, height: complex ? 22 : 20 };
}

function exitDistance(dx, dy, box) {
  const length = Math.hypot(dx, dy);
  const ux = Math.abs(dx / length);
  const uy = Math.abs(dy / length);
  const tx = ux === 0 ? Infinity : box.width / 2 / ux;
  const ty = uy === 0 ? Infinity : box.height / 2 / uy;
  return Math.min(tx, ty) + 4;
}

function trimmed(from, to, fromBox, toBox, offset) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const ux = dx / length;
  const uy = dy / length;
  const nx = -uy * offset;
  const ny = ux * offset;
  const start = exitDistance(dx, dy, fromBox);
  const end = exitDistance(dx, dy, toBox);
  return {
    x1: from.x + ux * start + nx,
    y1: from.y + uy * start + ny,
    x2: to.x - ux * end + nx,
    y2: to.y - uy * end + ny,
    ux,
    uy,
  };
}

function arcPath(from, to) {
  const angle = (point) => Math.atan2(point.y - TCA.cy, point.x - TCA.cx);
  const gap = 0.2;
  const a1 = angle(from) + gap;
  const a2 = angle(to) - gap;
  const end = a2 < a1 ? a2 + 2 * Math.PI : a2;
  const point = (a) => ({ x: TCA.cx + TCA.radius * Math.cos(a), y: TCA.cy + TCA.radius * Math.sin(a) });
  const p1 = point(a1);
  const p2 = point(end);
  return { d: `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${TCA.radius} ${TCA.radius} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`, mid: point((a1 + end) / 2) };
}

function placeOnCycle(node) {
  const angle = Math.atan2(node.y - TCA.cy, node.x - TCA.cx);
  return { ...node, cycle: true, angle, x: TCA.cx + TCA.radius * Math.cos(angle), y: TCA.cy + TCA.radius * Math.sin(angle) };
}

const CYCLE_NODES = new Set(["citrate", "isocitrate", "akg", "succinyl-coa", "succinate", "fumarate", "malate", "oaa"]);

function positioned(node) {
  return CYCLE_NODES.has(node.id) ? placeOnCycle(node) : node;
}

const PLACEMENTS = {
  above: { dx: 0, dy: -10, anchor: "middle" },
  below: { dx: 0, dy: 11, anchor: "middle" },
  left: { dx: -8, dy: 0, anchor: "end" },
  right: { dx: 8, dy: 0, anchor: "start" },
};

function defaultPlacement(line) {
  return Math.abs(line.ux) > Math.abs(line.uy) ? "above" : "right";
}

function textAt(className, text, line, placement, distance = 1) {
  const { dx, dy, anchor } = PLACEMENTS[placement];
  const x = (line.x1 + line.x2) / 2 + dx * distance;
  const y = (line.y1 + line.y2) / 2 + dy * distance;
  return `<text class="${className}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="central">${escapeHtml(text)}</text>`;
}

function opposite(placement) {
  return { above: "below", below: "above", left: "right", right: "left" }[placement];
}

function inhibitorMarks(edge, line, href, label) {
  return (edge.inhibitors ?? []).map((inhibitor) => {
    const name = label(`drug-${inhibitor.page.split("/")[1]}`, inhibitor.name);
    const mx = (line.x1 + line.x2) / 2;
    const my = (line.y1 + line.y2) / 2;
    const px = -line.uy;
    const py = line.ux;
    const bar = `M ${(mx - px * 9).toFixed(1)} ${(my - py * 9).toFixed(1)} L ${(mx + px * 9).toFixed(1)} ${(my + py * 9).toFixed(1)}`;
    const placement = inhibitor.side ?? opposite(edge.labelSide ?? defaultPlacement(line));
    const debated = inhibitor.debated ? " map-inhibitor-debated" : "";
    return `<a class="map-inhibitor${debated}" href="${href(inhibitor.page)}"><path class="map-inhibitor-bar" d="${bar}"/>${textAt("map-inhibitor-label", name, line, placement, 1.9)}</a>`;
  });
}

function edgeLabel(text, line, placement) {
  return text ? textAt("map-edge-label", text, line, placement) : "";
}

export function renderMetabolicMap({ label = (id, fallback) => fallback, href = (page) => `/${page}/`, idPrefix = "map" } = {}) {
  const nodes = new Map(NODES.map((node) => [node.id, positioned(node)]));
  const labelOf = (node) => label(node.id, node.label);
  const box = (node) => nodeBox(node, labelOf(node));
  const families = [...new Set(PATHWAYS.map((pathway) => pathway.family))];
  const familyOf = new Map(PATHWAYS.map((pathway) => [pathway.id, pathway.family]));
  const markerOf = (pathwayId) => `${idPrefix}-arrow-${familyOf.get(pathwayId)}`;
  const markers = families.map((family) => `<marker id="${idPrefix}-arrow-${family}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="map-arrowhead map-arrowhead-${family}" d="M 0 0.8 L 9.5 5 L 0 9.2 z"/></marker>`);

  const strokes = new Map(PATHWAYS.map((pathway) => [pathway.id, []]));
  for (const edge of EDGES) {
    const from = nodes.get(edge.from);
    const to = nodes.get(edge.to);
    const marker = markerOf(edge.pathway);
    const title = `<title>${escapeHtml(label(`enzyme-${edge.from}-${edge.to}`, edge.enzyme))}</title>`;
    if (edge.arc) {
      const arc = arcPath(from, to);
      const ends = edge.reversible ? ` marker-start="url(#${marker})"` : "";
      strokes.get(edge.pathway).push(`<path class="map-edge map-edge-arc" d="${arc.d}" marker-end="url(#${marker})"${ends}>${title}</path>`);
      continue;
    }
    const offset = edge.back ? 5 : 0;
    const line = trimmed(from, to, box(from), box(to), offset);
    const ends = edge.reversible ? ` marker-start="url(#${marker})"` : "";
    const forward = `<line class="map-edge" x1="${line.x1.toFixed(1)}" y1="${line.y1.toFixed(1)}" x2="${line.x2.toFixed(1)}" y2="${line.y2.toFixed(1)}" marker-end="url(#${marker})"${ends}>${title}</line>`;
    const link = edge.page ? `<a class="map-entry" href="${href(edge.page)}">${forward}</a>` : forward;
    const placement = edge.labelSide ?? (edge.back ? "left" : defaultPlacement(line));
    strokes.get(edge.pathway).push(link, edgeLabel(edge.label, line, placement), ...inhibitorMarks(edge, line, href, label));
    if (edge.back) {
      const backLine = trimmed(to, from, box(to), box(from), offset);
      strokes.get(edge.back.pathway).push(
        `<line class="map-edge map-edge-back" x1="${backLine.x1.toFixed(1)}" y1="${backLine.y1.toFixed(1)}" x2="${backLine.x2.toFixed(1)}" y2="${backLine.y2.toFixed(1)}" marker-end="url(#${markerOf(edge.back.pathway)})"><title>${escapeHtml(label(`enzyme-${edge.to}-${edge.from}`, edge.back.enzyme))}</title></line>`,
        edgeLabel(edge.back.label, backLine, opposite(placement)),
      );
    }
  }

  const compartmentLabel = (compartment) => {
    const text = escapeHtml(label(`compartment-${compartment.id}`, compartment.label));
    if (compartment.labelOnly) return `<text class="map-compartment-label" x="${compartment.x}" y="${compartment.y}">${text}</text>`;
    const right = compartment.labelAt.endsWith("right");
    const x = right ? compartment.x + compartment.width - 22 : compartment.x + 22;
    const y = compartment.labelAt.startsWith("bottom") ? compartment.y + compartment.height - 18 : compartment.y + 30;
    return `<text class="map-compartment-label" x="${x}" y="${y}" text-anchor="${right ? "end" : "start"}">${text}</text>`;
  };

  const compartments = COMPARTMENTS.map((compartment) => compartment.labelOnly
    ? compartmentLabel(compartment)
    : `<g class="map-compartment map-compartment-${compartment.id}"><rect class="map-compartment-outer" x="${compartment.x}" y="${compartment.y}" width="${compartment.width}" height="${compartment.height}" rx="${compartment.radius}"/><rect class="map-compartment-inner" x="${compartment.x + 7}" y="${compartment.y + 7}" width="${compartment.width - 14}" height="${compartment.height - 14}" rx="${compartment.radius - 7}"/>${compartmentLabel(compartment)}</g>`);

  const pathways = PATHWAYS.map((pathway) => {
    const name = label(`pathway-${pathway.id}`, pathway.label);
    const title = pathway.title
      ? `<text class="map-pathway-title" x="${pathway.title.x}" y="${pathway.title.y}" text-anchor="middle"${pathway.title.rotate ? ` transform="rotate(${pathway.title.rotate} ${pathway.title.x} ${pathway.title.y})"` : ""}>${escapeHtml(name)}</text>`
      : "";
    return `<a class="map-pathway map-family-${pathway.family}" href="${href(pathway.page)}" data-pathway="${pathway.id}" aria-label="${escapeHtml(name)}"><g class="map-pathway-strokes">${strokes.get(pathway.id).join("")}</g>${title}</a>`;
  });

  const nodeMarks = [...nodes.values()].map((node) => {
    const text = escapeHtml(labelOf(node));
    if (node.cycle) {
      const lx = TCA.cx + (TCA.radius + 12) * Math.cos(node.angle);
      const ly = TCA.cy + (TCA.radius + 12) * Math.sin(node.angle);
      const cosine = Math.cos(node.angle);
      const anchor = cosine > 0.35 ? "start" : cosine < -0.35 ? "end" : "middle";
      return `<g class="map-node map-node-cycle" data-node="${node.id}"><circle class="map-node-dot" cx="${node.x.toFixed(1)}" cy="${node.y.toFixed(1)}" r="3.6"/><text class="map-node-label" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="central">${text}</text></g>`;
    }
    const size = box(node);
    const shape = node.kind === "complex"
      ? `<rect class="map-complex" x="${(node.x - size.width / 2).toFixed(1)}" y="${(node.y - size.height / 2).toFixed(1)}" width="${size.width.toFixed(1)}" height="${size.height}" rx="4"/>`
      : "";
    return `<g class="map-node${node.kind === "complex" ? " map-node-complex" : ""}" data-node="${node.id}">${shape}<text class="map-node-label" x="${node.x}" y="${node.y}" text-anchor="middle" dominant-baseline="central">${text}</text></g>`;
  });

  const grid = gridReferences();

  return `<svg class="metabolic-map-svg" viewBox="0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}" role="img" aria-labelledby="${idPrefix}-title"><title id="${idPrefix}-title">${escapeHtml(label("map-title", "Central pathways of human metabolism"))}</title><defs>${markers.join("")}</defs><g class="map-grid">${grid}</g><g class="map-compartments">${compartments.join("")}</g><g class="map-pathways">${pathways.join("")}</g><g class="map-nodes">${nodeMarks.join("")}</g></svg>`;
}

function gridReferences() {
  const columns = "ABCDEFGHIJKL".split("");
  const rows = 8;
  const cellWidth = MAP_SIZE.width / columns.length;
  const cellHeight = MAP_SIZE.height / rows;
  const top = columns.map((letter, index) => `<text class="map-grid-ref" x="${(cellWidth * (index + 0.5)).toFixed(1)}" y="10" text-anchor="middle" dominant-baseline="central">${letter}</text>`);
  const side = Array.from({ length: rows }, (_, index) => `<text class="map-grid-ref" x="6" y="${(cellHeight * (index + 0.5)).toFixed(1)}" dominant-baseline="central">${index + 1}</text>`);
  const ticks = [
    ...columns.slice(1).map((_, index) => `<line class="map-grid-tick" x1="${(cellWidth * (index + 1)).toFixed(1)}" y1="0" x2="${(cellWidth * (index + 1)).toFixed(1)}" y2="6"/>`),
    ...Array.from({ length: rows - 1 }, (_, index) => `<line class="map-grid-tick" x1="0" y1="${(cellHeight * (index + 1)).toFixed(1)}" x2="6" y2="${(cellHeight * (index + 1)).toFixed(1)}"/>`),
  ];
  return [...top, ...side, ...ticks].join("");
}
