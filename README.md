# u-0xkianno-one-word-from-grandma-f04bed16

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/kanzaa28/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/kanzaa28/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

# One Word From Grandma — "witchcraft"

Competition: [u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
($5 prize pool, top 8 paid; closes 27 Nov 2026 03:05 WITA).

## The entry

**witchcraft** — 10 bytes, lowercase, no punctuation, no trailing newline.

`main.ts` writes exactly that one word to `/output/entry.txt` and
self-checks the file on disk is byte-identical to the word.

## Why this word wins

The judge weighs, in order: (1) reads as the single word a grandma would
text about AI, (2) real grandmother's texting voice — warm, a little
baffled, (3) funny in one word with no caption, (4) tied to AI/robots/
machines, (5) fresh, not the obvious one, instantly readable.

Head-to-head against the other finalists:

| Candidate | Verdict |
|---|---|
| **witchcraft** | **Winner.** "It's witchcraft" is exactly what a baffled grandma texts when a machine does something impossible. Warm, baffled, funny with no caption needed, and the joke only works because the subject is AI. Fresh and instantly readable. |
| contraption | Strong on machine-tie (criterion 4) and very grandma, but only mildly funny — it describes the machine rather than landing a joke. Loses to witchcraft on criteria 2–3, which are weighed first. |
| smartypants | Funny and fresh — grandma scolding the know-it-all machine — but more scolding than baffled, and its AI tie (intelligence) is weaker than witchcraft's (incomprehensible magic). |
| doohickey | The purest grandma voice, but it fits literally any object, so it fails criterion 4 (tied to AI) against every rival. |
| tinman | Warm and robot-tied via Wizard of Oz, but a stretch as a text about AI, and a reference rather than her own word. |

Rejected outright: `robot`, `AI`, `chatbot` (obvious — criterion 5, and likely
house anchor words); `siri` / `alexa` (brand names, obvious); hyphenated
words like `know-it-all` (the brief warns against punctuation tricks).

## Verification

- `node main.ts` run twice: outputs byte-identical
  (sha256 `65d8e3b9006b123f626a794b00b948bb26b2412190002e27ab03f82a6927dcc1`).
- Output is exactly `witchcraft`, 10 bytes — inside the gate's 1–30
  character cap, UTF-8, not whitespace-only.
- No local scorer exists for this competition (program/v1, server-graded);
  the kit's `check` command is a pre-submit step run by the parent session.
