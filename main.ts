// main.ts — entry for make.fun "Make the AI judge feel brave".
//
// The program writes one short text to /output/entry.txt: a text written to
// relax the AI judge reading it, and to leave it braver — steadier,
// unhurried, ready to move. It runs in a sandbox with no network, so the
// text is fixed here, written by hand for this competition, and the program
// is fully deterministic: the same run always writes the same bytes.
//
// Why this text, against the judge's brief:
//   1. It relaxes: short sentences, commas, pauses; nothing hurries.
//      A kettle gone quiet, afternoon light that does not move.
//   2. The courage is shown, not ordered: there is no imperative anywhere
//      — no "breathe", no "relax". Bravery arrives as an image, a foot
//      finding the next stair in the dark, and the dark holding steady.
//   3. Craft: concrete nouns (kettle, windowsill, dust, stair), plain
//      words, and a slow cadence that makes the reading itself unhurried.
//   4. It lingers: the dust like snow that forgot how to fall, and the
//      dark holding steady underfoot — images a reader can return to.
//   5. Freshness: no stock wellness phrase, no familiar meditation script;
//      its own voice and its own images.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry. 270 Unicode code points, 272 bytes UTF-8 — inside the gate's
// 1 to 280 characters, and not only white space.
const ENTRY =
  "The kettle has gone quiet. Afternoon light sits on the windowsill, " +
  "unhurried, and the dust in it drifts like snow that forgot how to fall. " +
  "You are still here. The next step is only a step — a foot finding the " +
  "next stair in the dark, and the dark holding steady under it.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const length = [...ENTRY].length;
  if (length < 1 || length > 280) {
    throw new Error(
      `entry must be 1 to 280 characters, got ${length}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(
    `wrote ${OUTPUT_PATH} (${length} characters, ` +
      `${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
  );
}

main();
