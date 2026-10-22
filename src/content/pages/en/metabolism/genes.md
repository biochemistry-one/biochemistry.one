---
title: From genes to proteins
description: How DNA encodes proteins, how genes are transcribed, spliced and translated, and how variants in PAH, HBB, LDLR, ALDH2 and LCT change traits.
summary: A protein-coding gene is a stretch of DNA whose sequence of four chemical letters spells out a protein. A cell copies the gene into RNA, trims the copy and reads it three letters at a time to link amino acids. Differences in these letters cause inherited diseases such as phenylketonuria and sickle cell disease, and explain why some adults digest milk or flush after drinking alcohol.
section: metabolism
order: 9
updated: 2026-10-21
related:
  - metabolism/amino-acids
  - metabolism/cholesterol
  - metabolism/one-carbon
  - metabolism/cell
  - foods/dairy
  - foods/alcohol
---

## DNA and the genome

Each strand of DNA is a chain of four kinds of unit, named by their bases A, C, G and T; in a protein-coding gene, their order specifies the order of amino acids [@watson-1953-double-helix; @koonin-2009-genetic-code].

Two antiparallel strands form a right-handed double helix; adenine pairs with thymine and guanine with cytosine, so each strand's sequence fixes the other's [@watson-1953-double-helix; @drew-1981-dodecamer]. Of over 44,400 human genes named by the HUGO Gene Nomenclature Committee, over 19,250 encode proteins [@seal-2026-hgnc].

:::industry
A gapless assembly of one human genome spans 3,054,815,472 base pairs in 22 autosomes and chromosome X; authors included employees of three genomics companies [@nurk-2022-t2t].
:::

## From gene to protein

A cell copies a gene into RNA, cuts out stretches called introns, and reads the rest three bases at a time to join amino acids [@uniprot-2025-gene-expression; @burset-2000-splice-sites; @koonin-2009-genetic-code].

RNA polymerase II extends precursor mRNA at its 3′ end, complementary to the template strand [@uniprot-2025-gene-expression]. RNGTT adds GMP from GTP to the 5′ end, and RNMT methylates this guanosine at N7 with [S-adenosylmethionine](/metabolism/one-carbon/) [@uniprot-2025-gene-expression]. The spliceosome excises introns; of 22,489 EST-supported mammalian splice-site pairs, 98.71% were GT–AG [@burset-2000-splice-sites]. Poly(A) polymerase adds the 3′ tail [@uniprot-2025-gene-expression].

The 43S pre-initiation complex scans from the cap to the AUG start codon [@uniprot-2025-gene-expression]. Of 64 codons, 61 specify the 20 standard amino acids and three stop translation [@koonin-2009-genetic-code]. eEF1A·GTP delivers aminoacyl-tRNAs, the ribosome forms each peptide bond and eEF2·GTP drives translocation [@uniprot-2025-gene-expression].

::pathway{id="gene-expression"}

## Variants and single-gene traits

A variant is a difference in DNA sequence between people, from one base to whole exons [@ison-2025-familial-hypercholesterolaemia].

About 85% of pathogenic *LDLR* variants are missense, nonsense, splice-site or small insertion–deletion variants detectable by sequencing; about 15% are larger intragenic deletions or duplications [@ison-2025-familial-hypercholesterolaemia].

| Variant | One copy | Two copies |
|---|---|---|
| *PAH*, pathogenic | Asymptomatic carrier [@arnold-2025-pah-deficiency] | [Phenylalanine hydroxylase deficiency](/metabolism/amino-acids/) [@arnold-2025-pah-deficiency] |
| *HBB* c.20A>T | Sickle cell trait, without anaemia [@bender-2025-sickle-cell] | Sickle cell disease [@bender-2025-sickle-cell] |
| *LDLR*, pathogenic | Half the functional LDL receptors; LDL about doubled [@goldstein-2015-century] | Untreated adult LDL cholesterol often above 13 mmol/L [@ison-2025-familial-hypercholesterolaemia] |
| *ALDH2\*2*, rs671 | No detectable liver ALDH2 activity, 13 of 13 [@crabb-1989-aldh2] | No detectable activity, 1 of 1 [@crabb-1989-aldh2] |
| *LCT* −13910C>T | Lactase persistence [@tishkoff-2007-lactase] | Lactase persistence [@tishkoff-2007-lactase] |

*HBB* c.20A>T replaces glutamate 6 of mature β-globin with valine, p.Glu7Val in HGVS numbering [@bender-2025-sickle-cell]. In deoxygenated haemoglobin S, valine 6 binds complementary regions of adjacent molecules, forming insoluble polymers that distort red cells; carriers have a survival advantage in childhood malaria [@bender-2025-sickle-cell].

One ALDH2\*2 subunit, with lysine for glutamate 504 of the precursor, renders the tetramer nearly inactive [@edenberg-2018-adh-aldh]; about 36% of East Asians flush after [alcohol](/foods/alcohol/) [@brooks-2009-flushing].

::pathway{id="ethanol-oxidation"}

*LCT* −13910C>T (rs4988235) is one of at least five independent [lactase-persistence](/foods/dairy/) variants in an *LCT* enhancer within intron 13 of *MCM6* [@tishkoff-2007-lactase; @liebert-2017-lactase].

## Polygenic traits

Inherited differences in height, as in many traits, are spread across very many variants with tiny effects [@boyle-2017-omnigenic].

Genome-wide, the median SNP was associated with 0.14 mm of height, a tenth of the 1.43 mm median for genome-wide significant SNPs [@boyle-2017-omnigenic].

## Mitochondrial DNA

Mitochondria have DNA of their own, and its variants pass to children only from the mother [@chinnery-2021-mitochondrial].

It encodes 13 respiratory-chain subunits, 2 ribosomal RNAs and 22 transfer RNAs [@chinnery-2021-mitochondrial]. Cells hold thousands of copies; where mutant and normal copies coexist, a respiratory-chain defect appears only above a threshold mutant proportion [@chinnery-2021-mitochondrial].

## Epigenetic marks

Cells with identical DNA keep different genes on or off through divisions, partly through chemical marks on DNA and histones [@horsthemke-2018-transgenerational].

DNMT1 methylates CpG cytosines, preferring hemimethylated DNA, and at replication sites maintains the methylation pattern on the new strand [@uniprot-2025-gene-expression].

:::unresolved
Chromatin is extensively reshaped in germ cells and after fertilisation, though some loci appear to escape; transmission of acquired marks to later human generations is not established [@horsthemke-2018-transgenerational]. Links between grandparents' food supply and grandchildren's health await independent replication; most familial methylation defects in rare diseases proved secondary to genetic variants [@horsthemke-2018-transgenerational].
:::
