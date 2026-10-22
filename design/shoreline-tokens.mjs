import { oklchToHex, contrast, maxChroma } from "./oklch.mjs";

const LIGHT = {
  paper: [0.982, 0.008, 78],
  "paper-2": [0.962, 0.016, 75],
  "map-bg": [0.993, 0.004, 90],
  rule: [0.905, 0.014, 215],
  ink: [0.31, 0.035, 232],
  "ink-2": [0.46, 0.03, 228],
  "ink-3": [0.63, 0.022, 222],
  accent: [0.53, 0.105, 236],
  "accent-ink": [0.99, 0.004, 90],
  "card-sky": [0.93, 0.032, 232],
  "card-lagoon": [0.935, 0.03, 196],
  "card-sand": [0.94, 0.032, 72],
  "card-shallow": [0.935, 0.028, 168],
  "sand-deep": [0.86, 0.06, 70],
  "sky-top": [0.935, "max", 224],
  sky: [0.952, "max", 226],
  horizon: [0.976, "max", 222],
  sea: [0.915, "max*0.6", 214],
  "sea-2": [0.932, "max*0.58", 206],
  lagoon: [0.95, "max*0.55", 198],
  shallow: [0.97, "max*0.6", 178],
  "shallow-2": [0.98, "max*0.6", 170],
  foam: [0.982, 0.01, 85],
  "band-top": [0.962, "max*0.6", 214],
  "band-bottom": [0.975, "max*0.55", 198],
  "c-carbohydrate": [0.6, 0.1, 238],
  "c-amino": [0.6, 0.09, 192],
  "c-lipid": [0.66, 0.1, 68],
  "c-energy": [0.63, 0.12, 30],
  "c-one-carbon": [0.56, 0.1, 288],
  "c-xenobiotic": [0.58, 0.025, 232],
  "mito-fill": [0.968, 0.02, 74],
  "mito-line": [0.86, 0.05, 72],
  "er-fill": [0.968, 0.018, 232],
  "er-line": [0.86, 0.045, 232],
  inhibitor: [0.6, 0.16, 25],
  "k-independent": [0.57, 0.09, 180],
  "k-industry": [0.62, 0.13, 32],
  "k-regulatory": [0.55, 0.1, 240],
  "k-consensus": [0.68, 0.11, 75],
  "k-reference": [0.42, 0.03, 230],
  "k-undetermined": [0.68, 0.015, 220],
  "tool-bg": [0.31, 0.035, 232],
  "tool-fg": [0.95, 0.01, 220],
  "tool-active": [0.94, 0.032, 72],
  "tool-active-fg": [0.31, 0.035, 232],
  "hero-text": [0.31, 0.035, 232],
  "card-ink": [0.31, 0.035, 232],
};

const SCHEMES = {
  lagoon: {
    paper: [0.978, 0.012, 190],
    "paper-2": [0.955, 0.02, 192],
    accent: [0.52, 0.075, 196],
    rule: [0.9, 0.018, 195],
    "card-sky": [0.935, 0.03, 196],
    "card-lagoon": [0.935, 0.028, 168],
    "band-top": [0.94, 0.03, 196],
    "band-bottom": [0.955, 0.025, 175],
  },
  sky: {
    paper: [0.98, 0.01, 232],
    "paper-2": [0.958, 0.018, 232],
    accent: [0.52, 0.11, 240],
    rule: [0.9, 0.018, 232],
    "band-top": [0.93, 0.035, 235],
    "band-bottom": [0.95, 0.025, 228],
  },
};

const hexes = (spec) => Object.fromEntries(Object.entries(spec).map(([name, [L, chroma, H]]) => {
  const fraction = typeof chroma === "string" ? Number(chroma.split("*")[1] ?? 1) : undefined;
  const C = fraction === undefined ? chroma : maxChroma(L, H) * fraction;
  const { hex, inGamut } = oklchToHex(L, C, H);
  if (!inGamut) console.error(`out of gamut: ${name} oklch(${L} ${C} ${H})`);
  return [name, hex];
}));

const declarations = (values, indent) => Object.entries(values).map(([name, hex]) => `${indent}--${name}: ${hex};`).join("\n");

export function shorelineTokens() {
  const schemes = Object.entries(SCHEMES).map(([name, spec]) => `:root[data-scheme="${name}"] {\n${declarations(hexes(spec), "  ")}\n}`);
  return [`:root {\n${declarations(hexes(LIGHT), "  ")}\n  color-scheme: light;\n}`, ...schemes].join("\n\n");
}

export function siteTokens(scheme) {
  return `:root {\n${declarations(hexes({ ...LIGHT, ...SCHEMES[scheme] }), "  ")}\n  color-scheme: light;\n}\n`;
}

export function palette() {
  return hexes(LIGHT);
}

export function contrastReport() {
  const light = hexes(LIGHT);
  const pairs = [["ink", "paper"], ["ink-2", "paper"], ["ink-3", "paper"], ["accent", "paper"], ["accent-ink", "accent"], ["ink", "card-sky"], ["ink", "sky"], ["ink", "sea"], ["c-carbohydrate", "map-bg"], ["c-lipid", "map-bg"], ["k-consensus", "paper"]];
  return pairs.map(([fg, bg]) => `${fg} on ${bg}: ${contrast(light[fg], light[bg]).toFixed(2)}`).join("\n");
}

if (process.argv[2] === "report") console.log(contrastReport());
