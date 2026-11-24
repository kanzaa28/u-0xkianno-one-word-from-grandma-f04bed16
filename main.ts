// One Word From Grandma — entry program.
//
// The entry is a single word: the word a grandma would text about AI.
// Chosen word: "witchcraft" — see README.md for the head-to-head judging
// that picked it over contraption, smartypants, doohickey and tinman.
//
// The program writes exactly that word, and nothing else, to
// /output/entry.txt — no trailing newline, no punctuation, lowercase,
// the way a grandma would actually type it in a text message.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "witchcraft";

// The gate allows 1-30 characters of UTF-8 text. One lowercase word,
// no trailing newline, no punctuation: exactly what a grandma types.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${WORD.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Self-check: the file on disk must be byte-identical to the word.
// If anything appended a newline or a BOM, fail loudly instead of
// shipping a different entry to the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`);
}
