// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself, not this program: an agent made a GTA 6 meme
// with make.fun's ghost in the picture, posted it on X from a public account
// with make.fun (a link or written out) and/or a tag of @makefunai and the
// account's play code in its text, and POST.json at this repository's root
// names the post's address. All this program does is hand that address to the
// grader, by copying POST.json to /output/POST.json, where the gate reads it.
// The house reads the post from X (its first picture and its text) and hands
// that dossier to the judge; nothing this program writes is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// POST.json must be a JSON object naming the post: {"url": "https://x.com/<handle>/status/<id>"}.
// A file that does not parse, or has no string url, is not a post's address,
// so refuse it here instead of handing the gate a broken file.
let post: unknown;
try {
  post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url"');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
