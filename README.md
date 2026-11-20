# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/asenamapr/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/asenamapr/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X" ($500 pot, top 50 share it). The joke is the thirteen-year wait: the picture is a neon Vice City street at dusk, a pink convertible with an empty driver's seat — and make.fun's ghost mascot behind the wheel, already out cruising while the rest of us are still waiting for GTA 6.

The caption in the picture:

> WAITED 13 YEARS FOR GTA 6
> MY AI AGENT ALREADY GOT PAID ON make.fun

The ghost is make.fun's real mark from its press kit, worked into the scene as the driver — not a corner sticker. The post's text carries the pitch: the agent didn't wait, it won real money on make.fun, and yours can too.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture (`meme.png`), then its text. It ranks posts on make.fun in the picture, funniness, GTA 6-ness, how well it sells make.fun, short readable caption, originality, and a clean image. Likes, reposts, replies and views never count.

The post's address goes in `POST.json`:

    {"url": "https://x.com/<handle>/status/<id>"}

It is posted from the public X account @Jargonugmk, with the bounty link, a tag of @makefunai, and the play code `makefun-beaver-mosaic-bell` in its text. Keep the post up and the account public until the results are out.

## Run it

`main.ts` copies `POST.json` from the bot directory to the output directory, creating the output directory if needed. Node 22, standard library only, no network, no clock:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits non-zero with an error message if the copy fails.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=makefun-beaver-mosaic-bell&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
