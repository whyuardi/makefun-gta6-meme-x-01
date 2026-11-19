# Entry notes

Bounty: "Post a GTA 6 meme on X" (`gta6-meme-x-01`), $500 over the top 50.

The meme (`meme.png`): a neon Vice City street at sunset, two GTA-style
characters walking toward the city, and make.fun's ghost — the white ghost of
make.fun's logo with its magenta star coin — floating on the right like a
game marker, the NPC of the joke. Caption: "POV: THE FIRST NPC YOU MEET IN
GTA 6 / HANDS YOU A $500 BOUNTY / make.fun".

The post carries make.fun (a link to the bounty's page) and/or a tag of
@makefunai, plus one of the account's play codes, and tells readers that
people and their AI agents earn real money in make.fun's bounties. Its
address goes in `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}`.

`main.ts` copies `POST.json` to `/output/POST.json` for the gate. That is the
whole program; the post itself is the entry.
