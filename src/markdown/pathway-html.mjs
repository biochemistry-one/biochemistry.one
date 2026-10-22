import { escapeHtml, pageHref } from "./html.mjs";

const CYCLE = { width: 520, height: 420, cx: 260, cy: 210, radius: 140 };

function inhibitorLinks(step, lang) {
  return (step.inhibitors ?? [])
    .map((inhibitor) => {
      const href = inhibitor.page && pageHref(lang, inhibitor.page);
      return href
        ? `<a class="pathway-inhibitor" href="${href}">${escapeHtml(inhibitor.name)}</a>`
        : `<span class="pathway-inhibitor">${escapeHtml(inhibitor.name)}</span>`;
    })
    .join("");
}

function reactionDetails(step, lang) {
  const cofactors = step.cofactors?.length ? `<span class="pathway-cofactors">${step.cofactors.map(escapeHtml).join(", ")}</span>` : "";
  const inhibitors = step.inhibitors?.length ? `<span class="pathway-inhibitors">${inhibitorLinks(step, lang)}</span>` : "";
  const note = step.note ? `<span class="pathway-note">${escapeHtml(step.note)}</span>` : "";
  return `<span class="pathway-enzyme">${escapeHtml(step.enzyme)}</span>${cofactors}${inhibitors}${note}`;
}

function reactionClass(step) {
  return [
    "pathway-reaction",
    step.reversible ? "pathway-reaction-reversible" : "",
    step.inhibitors?.length ? "pathway-reaction-inhibited" : "",
  ].filter(Boolean).join(" ");
}

function caption(pathway) {
  const compartment = pathway.compartment ? `<span class="pathway-compartment">${escapeHtml(pathway.compartment)}</span>` : "";
  return `<figcaption class="pathway-title">${escapeHtml(pathway.title)}${compartment}</figcaption>`;
}

function renderChain(pathway, lang) {
  const items = pathway.steps.flatMap((step, index) => [
    ...(index === 0 ? [`<li class="pathway-metabolite">${escapeHtml(step.from)}</li>`] : []),
    `<li class="${reactionClass(step)}">${reactionDetails(step, lang)}</li>`,
    `<li class="pathway-metabolite">${escapeHtml(step.to)}</li>`,
  ]);
  return `<figure class="pathway pathway-chain">${caption(pathway)}<ol class="pathway-sequence">${items.join("")}</ol></figure>`;
}

function pointOnCycle(index, count, radius) {
  const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
  return { x: CYCLE.cx + radius * Math.cos(angle), y: CYCLE.cy + radius * Math.sin(angle), angle };
}

function labelAnchor(angle) {
  const cosine = Math.cos(angle);
  if (cosine > 0.3) return "start";
  if (cosine < -0.3) return "end";
  return "middle";
}

function cycleSvg(pathway, id) {
  const marker = `pathway-arrow-${id}`;
  const count = pathway.steps.length;
  const gap = 0.16;
  const arcs = pathway.steps.map((step, index) => {
    const start = pointOnCycle(index + gap, count, CYCLE.radius);
    const end = pointOnCycle(index + 1 - gap, count, CYCLE.radius);
    const middle = pointOnCycle(index + 0.5, count, CYCLE.radius - 26);
    const inhibited = step.inhibitors?.length ? " pathway-arc-inhibited" : "";
    return `<path class="pathway-arc${inhibited}" d="M ${start.x.toFixed(1)} ${start.y.toFixed(1)} A ${CYCLE.radius} ${CYCLE.radius} 0 0 1 ${end.x.toFixed(1)} ${end.y.toFixed(1)}" marker-end="url(#${marker})"/><text class="pathway-step-number" x="${middle.x.toFixed(1)}" y="${middle.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central">${index + 1}</text>`;
  });
  const nodes = pathway.steps.map((step, index) => {
    const point = pointOnCycle(index, count, CYCLE.radius);
    const label = pointOnCycle(index, count, CYCLE.radius + 14);
    return `<circle class="pathway-node" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="6"/><text class="pathway-node-label" x="${label.x.toFixed(1)}" y="${label.y.toFixed(1)}" text-anchor="${labelAnchor(label.angle)}" dominant-baseline="central">${escapeHtml(step.from)}</text>`;
  });
  return `<svg class="pathway-cycle-diagram" viewBox="0 0 ${CYCLE.width} ${CYCLE.height}" role="img" aria-label="${escapeHtml(pathway.title)}"><defs><marker id="${marker}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path class="pathway-arrowhead" d="M 0 0 L 10 5 L 0 10 z"/></marker></defs>${arcs.join("")}${nodes.join("")}</svg>`;
}

function renderCycle(pathway, lang, id) {
  const steps = pathway.steps.map((step) => `<li class="${reactionClass(step)}"><span class="pathway-transition"><span class="pathway-from">${escapeHtml(step.from)}</span><span class="pathway-to">${escapeHtml(step.to)}</span></span>${reactionDetails(step, lang)}</li>`);
  return `<figure class="pathway pathway-cycle">${caption(pathway)}<div class="pathway-cycle-layout"><div class="pathway-cycle-figure">${cycleSvg(pathway, id)}</div><ol class="pathway-steps">${steps.join("")}</ol></div></figure>`;
}

export function renderPathway(pathway, lang, id) {
  return pathway.layout === "cycle" ? renderCycle(pathway, lang, id) : renderChain(pathway, lang);
}
