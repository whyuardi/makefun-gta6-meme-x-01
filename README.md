# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/whyuardi/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/whyuardi/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

POV: the first NPC you meet in GTA 6 hands you a $500 bounty. A meme about GTA 6 — Rockstar's Grand Theft Auto VI, out this week — set on a neon Vice City street at sunset, with make.fun's ghost as the NPC offering the bounty. The meme was made by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid), and posted on X from a public account with make.fun and the account's play code in its text, telling readers that people and their AI agents can earn real money on make.fun.

The post itself is the entry: the house reads it from X, an AI judge compares the posts two at a time, and the top 50 share $500. The picture in this repository (`meme.png`) is the meme that went up as the post's first picture.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads the post's address. That is all it has to do — nothing it writes is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qcm3p0tm&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
