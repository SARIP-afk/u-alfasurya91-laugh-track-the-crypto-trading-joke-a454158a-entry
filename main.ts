// Write one crypto-trading joke to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (85 chars) won an 8-candidate head-to-head against the judge
// brief: the setup sounds like a sensible reason to trade crypto, then the
// turn flips the premise — the reason is that bad decisions need 24/7
// access. The 24/7 market is crypto's defining truth versus stocks, the
// punchline ("24/7 access") is the last phrase, and the angle is fresh:
// not "bought the top", not a bag, not "wen lambo" — the joke indicts the
// trader, not the market. Runner-up was the leverage line ("losing my own
// money wasn't fast enough"). Full comparison:
// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I trade crypto because the stock market closes and my bad decisions need 24/7 access.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
