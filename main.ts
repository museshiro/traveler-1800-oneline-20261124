// One Sentence for a Traveler from 1800 — entry program (Node 22 stdlib only)
// Writes the entry line to entry.txt. Deterministic: same output on every run.

import { writeFileSync } from "node:fs";

const LINE =
  "Your letter took three weeks by horse; this box delivers every letter on Earth before the ink dries — mostly so strangers can tell each other they're wrong.";

if (LINE.length > 200) {
  throw new Error(`line too long: ${LINE.length} characters (max 200)`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
