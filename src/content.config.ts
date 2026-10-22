import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { SECTIONS } from "./i18n/languages";

const pages = defineCollection({
  loader: glob({ pattern: "*/*/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    section: z.enum(SECTIONS),
    order: z.number().int(),
    updated: z.coerce.date(),
    related: z.array(z.string()).default([]),
  }),
});

const studies = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/studies" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number().int(),
    doi: z.string().optional(),
    pmid: z.string().optional(),
    url: z.string().optional(),
    registry: z.string().optional(),
    design: z.string(),
    participants: z.number().int().optional(),
    followUp: z.string().optional(),
    population: z.string().optional(),
    funder: z.string(),
    funderRole: z.enum(["none", "design", "analysis", "publication", "several", "unknown"]),
    inKindSupport: z.string().optional(),
    authorConflicts: z.string().optional(),
    dataAccess: z.enum(["individual", "summary", "unavailable", "unknown"]),
    result: z.string(),
    class: z.enum(["independent", "industry", "regulatory", "consensus", "reference", "undetermined"]),
    fundingChecked: z.string(),
  }),
});

export const collections = { pages, studies };
