// Ridiculous at First Glance, Real by the Second — make.fun entry
// Writes one single-sentence startup pitch (<=200 chars) to /output/entry.txt.
// Deterministic: fixed sentence, no randomness, no clock, no network.
import { writeFileSync, mkdirSync } from "node:fs";

const SENTENCE =
  "We sell naming rights for potholes, so brands pay $99 a month to sponsor the crater outside their rival's office while the city gets free repairs.";

// The bounty requires a single sentence of 1-200 characters.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry sentence must be 1-200 characters, got ${SENTENCE.length}`);
}
if (!/^[A-Z].*\.$/.test(SENTENCE)) {
  throw new Error("entry must be a single sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
