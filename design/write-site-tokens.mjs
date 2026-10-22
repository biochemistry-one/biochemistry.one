import { writeFileSync } from "node:fs";
import { siteTokens } from "./shoreline-tokens.mjs";

writeFileSync(new URL("../src/styles/tokens.css", import.meta.url), siteTokens("sky"));
console.log("src/styles/tokens.css written");
