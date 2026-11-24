import { mkdirSync, writeFileSync } from "node:fs";

// One sentence explaining the modern internet to a traveler from 1800,
// built only from things they already know: a road, a post office, a library,
// and a market stall. The file holds exactly this sentence, with no trailing
// newline, so the gate counts exactly 150 characters.
const ENTRY =
  "Imagine every library, post office, and market stall in the world joined by one road, so any letter, book, picture, or song reaches anyone in a blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
