// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme whose picture shows make.fun's
// ghost mascot driving a pink convertible through neon Vice City, posted from a
// public account with the bounty link and the entrant's play code in its text.
// This program only hands the post's address to the gate: it copies POST.json
// from the repository root to /output/POST.json, and nothing else. The house
// reads the post from X (its first picture, then its text) and the judge
// scores that dossier. Nothing written here is judged.
//
// POST.json holds a placeholder until the post is live. Replace it with the
// real address (https://x.com/<handle>/status/<id>) before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function sha256File(path: string): string {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

const SRC_PATH = join(BOT_DIR, 'POST.json');
const DEST_PATH = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SRC_PATH, DEST_PATH);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Validate the copy: it must be byte-identical to the source, parse as JSON,
// and carry a well-formed X status URL. Fail loudly instead of handing the
// gate a broken or wrong-shaped POST.json.
const srcHash = sha256File(SRC_PATH);
const destHash = sha256File(DEST_PATH);
if (srcHash !== destHash) {
  console.error(`POST.json copy failed integrity check: source sha256 ${srcHash} != output sha256 ${destHash}`);
  process.exit(1);
}
const byteSize = statSync(DEST_PATH).size;
console.log(`POST.json copied (${byteSize} bytes, sha256 ${destHash})`);

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(DEST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json in ${OUTPUT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json url is not a valid X status URL (expected https://x.com/<handle>/status/<id>): ${String(url)}`);
  process.exit(1);
}
